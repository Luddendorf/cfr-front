import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { CardComponent } from './card/card.component';
import { HoverDirective } from './directives/hover.directive';
import { UkrCurrencyPipe } from './pipes/urk-currency.pipe';

@NgModule({
  declarations: [
    ModalComponent,
    CardComponent,
    HoverDirective,
    UkrCurrencyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, ModalComponent, HoverDirective, UkrCurrencyPipe]
})
export class SharedModule { }
