import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { CardsService } from './cards.service';
import { HolderComponent } from './holder/holder.component';



@NgModule({
  declarations: [CardComponent, HolderComponent],
  providers: [CardsService],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [HolderComponent]
})
export class CardsModule { }
