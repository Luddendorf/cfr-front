import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from './directives/color.directive';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [ButtonComponent, ColorDirective],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, ButtonComponent, ColorDirective]
})
export class SharedModule { }
