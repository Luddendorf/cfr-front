import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarModule } from './topbar/topbar.module';
import { HomeModule } from './home/home.module';
import { FooterModule } from './footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    TopbarModule,
    HomeModule,
    FooterModule
  ],
  exports: [
    FooterModule,
    HomeModule,
    // SharedModule,
    SidebarModule,
    TopbarModule
  ]
})
export class MainModule { }
