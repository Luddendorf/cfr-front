import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { CardComponent } from './card/card.component';
import { HoverDirective } from './directives/hover.directive';
import { UkrCurrencyPipe } from './pipes/urk-currency.pipe';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    CardComponent,
    HoverDirective,
    InputComponent,
    ModalComponent,
    UkrCurrencyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    HoverDirective,
    InputComponent,
    ModalComponent,
    UkrCurrencyPipe]
})
export class SharedModule { }
