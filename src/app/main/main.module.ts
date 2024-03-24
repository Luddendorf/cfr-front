import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarModule } from './topbar/topbar.module';
import { HomeModule } from './home/home.module';
import { FooterModule } from './footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TopbarModule,
    HomeModule,
    FooterModule,
    SidebarModule
  ],
  exports: [FooterModule, HomeModule, SidebarModule, TopbarModule]
})
export class MainModule { }
