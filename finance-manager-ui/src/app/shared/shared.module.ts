import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {ErrorNotificationModalComponent} from './error-notification-modal/error-notification-modal.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ErrorNotificationModalComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    MDBBootstrapModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class SharedModule { }
