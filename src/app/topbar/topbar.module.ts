import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { StarComponent } from './star/star.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SquareComponent } from './square/square.component';
import { SharedModule } from '../common/shared.module';

@NgModule({
  declarations: [SquareComponent, StarComponent, TopbarComponent],
  providers: [],
  imports: [
    CommonModule, RouterLink, SharedModule
  ],
  exports: [TopbarComponent]
})
export class TopbarModule { }
