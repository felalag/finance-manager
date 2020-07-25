import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './default-layout/home/home.component';
import {LoginComponent} from './default-layout/login/login.component';
import {NavigationBarComponent} from './default-layout/home/navigation-bar/navigation-bar.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RegisterComponent} from './default-layout/register/register.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavigationBarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    NavigationBarComponent,
    LoginComponent
  ]
})
export class CoreModule { }
