import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignInComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignupComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    VMessageModule,
    RouterModule
  ]
})
export class HomeModule { }
