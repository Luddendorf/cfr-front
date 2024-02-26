import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialsRoutingModule } from './testimonials-routing.module';

@NgModule({
  declarations: [TestimonialsComponent],
  providers: [],
  imports: [
    CommonModule,
    TestimonialsRoutingModule
  ],
  exports: [TestimonialsComponent]
})
export class TestimonialsModule { }
