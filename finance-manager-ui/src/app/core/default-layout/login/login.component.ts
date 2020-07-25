import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../service/token-storage.service';
import {LoginRequest} from '../../../shared/model/wrapper/LoginRequest';
import {SuccessfulLoginResponse} from '../../../shared/model/wrapper/SuccessfulLoginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: LoginRequest = {
    username: null,
    password: null
  };

  constructor(private authenticationService: AuthenticationService,
              private tokenStorageService: TokenStorageService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(credentials: LoginRequest): void {
    this.authenticationService.login(credentials).subscribe((authentication: SuccessfulLoginResponse) => {
      this.tokenStorageService.saveToken(authentication.accessToken);
      this.tokenStorageService.saveUser(authentication.user);
      this.router.navigateByUrl('');
    })
  }

}
