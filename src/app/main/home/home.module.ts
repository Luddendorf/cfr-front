import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HolderComponent } from './holder/holder.component';
import { FooterModule } from '../footer/footer.module';
import { OfferingComponent } from './holder/offering/offering.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    SidebarComponent,
    HolderComponent,
    OfferingComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    SharedModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
