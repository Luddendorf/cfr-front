import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SquareComponent } from './square/square.component';
import { RouterLink } from '@angular/router';
import { TopbarService } from './topbar.service';

@NgModule({
  declarations: [SquareComponent, TopbarComponent],
  providers: [TopbarService],
  imports: [
    CommonModule, RouterLink
  ],
  exports: [TopbarComponent]
})
export class TopbarModule { }
