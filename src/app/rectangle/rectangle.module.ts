import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectangleComponent } from './rectangle/rectangle.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [RectangleComponent],
  imports: [
    CommonModule, RouterLink
  ],
  exports: [RectangleComponent]
})
export class RectangleModule { }
