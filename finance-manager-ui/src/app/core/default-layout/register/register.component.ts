import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';
import {RegistrationRequest} from '../../../shared/model/wrapper/RegistrationRequest';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hidePassword: boolean = true;

  user: RegistrationRequest = {
    username: null,
    email: null,
    password: null
  };

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  register(user: RegistrationRequest): void {
    this.authenticationService.register(user).subscribe(() => {
      this.router.navigateByUrl('/login');
    })
  }

}
