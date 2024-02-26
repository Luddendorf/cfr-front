import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from '../common/shared.module';
// import { ButtonComponent } from '../common/components/button/button.component';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SharedModule
    //ButtonComponent
  ]
})
export class SignUpModule { }
