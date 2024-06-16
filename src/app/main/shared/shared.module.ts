import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { CardComponent } from './components/card/card.component';
import { HoverDirective } from './directives/hover.directive';
import { UkrCurrencyPipe } from './pipes/urk-currency.pipe';
import { InputComponent } from './components/input/input.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { LinkComponent } from './components/link/link.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonSocialComponent } from './components/button-social/button-social.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { BallComponent } from './components/ball/ball.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonSocialComponent,
    CardComponent,
    HoverDirective,
    InputComponent,
    LinkComponent,
    LoginComponent,
    ModalComponent,
    SignUpComponent,
    UkrCurrencyPipe,
    CheckboxComponent,
    TypeaheadComponent,
    BallComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    ButtonSocialComponent,
    CardComponent,
    HoverDirective,
    InputComponent,
    LinkComponent,
    LoginComponent,
    ModalComponent,
    SignUpComponent,
    TypeaheadComponent,
    UkrCurrencyPipe,
    BallComponent
  ]
})
export class SharedModule { }
