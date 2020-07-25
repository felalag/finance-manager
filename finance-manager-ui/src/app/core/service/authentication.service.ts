import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorageService} from './token-storage.service';
import {LoginRequest} from '../../shared/model/wrapper/LoginRequest';
import {RegistrationRequest} from '../../shared/model/wrapper/RegistrationRequest';
import {SuccessfulLoginResponse} from '../../shared/model/wrapper/SuccessfulLoginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,
              private tokenService: TokenStorageService) { }

  login(credentials: LoginRequest): Observable<SuccessfulLoginResponse> {
    return this.http.post<SuccessfulLoginResponse>('signin', credentials);
  }

  register(user: RegistrationRequest): Observable<any> {
    return this.http.post('signup', user);
  }

  isAuthenticated(): boolean {
    return !!this.tokenService.getToken();
  }

}
