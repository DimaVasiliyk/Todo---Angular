import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [AuthComponent],
})
export class AuthModule { }