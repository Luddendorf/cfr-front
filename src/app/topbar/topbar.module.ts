import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SquareComponent } from './square/square.component';

@NgModule({
  declarations: [SquareComponent, TopbarComponent],
  imports: [
    CommonModule
  ],
  exports: [TopbarComponent]
})
export class TopbarModule { }
