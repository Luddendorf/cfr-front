import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModule } from './profile/profile.module';
import { TopbarComponent } from './topbar/topbar.component';



@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    ProfileModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
