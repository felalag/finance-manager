import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ErrorNotificationModalComponent} from '../../shared/error-notification-modal/error-notification-modal.component';

@Injectable()
export class HttpErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              public dialog: MatDialog) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {}, (error: any) => {
      if (error instanceof  HttpErrorResponse) {
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }
        if (error.status === 0) {
          this.openErrorNotification('No Internet connection');
        } else {
          this.openErrorNotification(error.message);
        }
      }
      }));
  }

  private openErrorNotification(message: string): void {
    this.dialog.open(ErrorNotificationModalComponent, {data: {message}});
  }
}
