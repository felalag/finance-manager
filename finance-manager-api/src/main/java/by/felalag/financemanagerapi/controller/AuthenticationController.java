package by.felalag.financemanagerapi.controller;

import by.felalag.financemanagerapi.config.JwtUtils;
import by.felalag.financemanagerapi.entity.User;
import by.felalag.financemanagerapi.entity.wrapper.LoginRequest;
import by.felalag.financemanagerapi.entity.wrapper.RegistrationRequest;
import by.felalag.financemanagerapi.entity.wrapper.SuccessfulLoginResponse;
import by.felalag.financemanagerapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticate(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwtToken = jwtUtils.generateJwtToken(authentication);
            User user = (User)authentication.getPrincipal();
            SuccessfulLoginResponse response = new SuccessfulLoginResponse(jwtToken, user.getUsername());
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @PostMapping("/signup")
    public ResponseEntity<?> register(@RequestBody RegistrationRequest registrationRequest) throws HttpClientErrorException {
        if (Boolean.TRUE.equals(userRepository.existsByUsername(registrationRequest.getUsername()))) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST,
                    "The username provided is already taken. Please, choose a different one.");
        }
        if (Boolean.TRUE.equals(userRepository.existsByEmail(registrationRequest.getEmail()))) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST,
                    "The email provided is already taken. Please, choose a different one.");
        }
        User user = new User();
        user.setUsername(registrationRequest.getUsername());
        user.setEmail(registrationRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));
        userRepository.save(user);
        return ResponseEntity.ok().build();
    }

}
