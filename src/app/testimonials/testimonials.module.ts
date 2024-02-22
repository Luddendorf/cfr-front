import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TopbarService } from '../topbar/topbar.service';

@NgModule({
  declarations: [TestimonialsComponent],
  providers: [{ provide: TopbarService }],
  imports: [
    CommonModule,
    TestimonialsRoutingModule
  ],
  exports: [TestimonialsComponent]
})
export class TestimonialsModule { }
