import { Routes } from '@angular/router';
import { HolderComponent } from './cards/holder/holder.component';
import { RectangleComponent } from './rectangle/rectangle/rectangle.component';
import { FooterComponent } from './footer/footer/footer.component';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar/topbar.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  // { path: '',   redirectTo: 'home', pathMatch: 'full' }
  // { path: 'home', component: AppComponent },
  { path: 'topbar', component: TopbarComponent },
  { path: 'posts', component: HolderComponent },
  { path: 'rect', component: RectangleComponent },
  { path: '**', component: FooterComponent }
];
