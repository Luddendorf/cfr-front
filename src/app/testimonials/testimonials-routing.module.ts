import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialsComponent } from './testimonials/testimonials.component';


const routes: Routes = [
  { path: ':testimonialId', component: TestimonialsComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TestimonialsRoutingModule { }
