import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FooterService } from './footer.service';

@NgModule({
  declarations: [FooterComponent],
  providers: [FooterService],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }