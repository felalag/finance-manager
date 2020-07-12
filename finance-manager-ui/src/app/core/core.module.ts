import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './default-layout/home/home.component';
import {LoginComponent} from './default-layout/login/login.component';
import {NavigationBarComponent} from './default-layout/home/navigation-bar/navigation-bar.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    NavigationBarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    NavigationBarComponent,
    LoginComponent
  ]
})
export class CoreModule { }
