import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {TokenStorageService} from '../service/token-storage.service';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService: TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const headers = new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest'
    });
    const jwtToken = this.tokenStorageService.getToken();
    if (jwtToken != null) {
      headers.set('Authorization', 'Bearer ' + jwtToken);
    }
    const decoratedRequest: HttpRequest<any> = request.clone({
      url: environment.restApiBaseUrl + request.url,
      headers
    });
    return next.handle(decoratedRequest);
  }
}
