import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModule } from './profile/profile.module';
import { TopbarComponent } from './topbar/topbar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    ProfileModule,
    SharedModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
