import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { CardsService } from './cards.service';
import { HolderComponent } from './holder/holder.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [CardComponent, HolderComponent],
  providers: [CardsService],
  imports: [
    CommonModule, HttpClientModule, RouterLink
  ],
  exports: [HolderComponent]
})
export class CardsModule { }
