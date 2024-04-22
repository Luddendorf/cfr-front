import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    HoverDirective,
    InputComponent,
    LinkComponent,
    LoginComponent,
    ModalComponent,
    SignUpComponent,
    UkrCurrencyPipe,
    CheckboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    HoverDirective,
    InputComponent,
    LinkComponent,
    LoginComponent,
    ModalComponent,
    SignUpComponent,
    UkrCurrencyPipe
  ]
})
export class SharedModule { }
