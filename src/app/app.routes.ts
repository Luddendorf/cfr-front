import { Routes } from '@angular/router';
import { HolderComponent } from './cards/holder/holder.component';
import { RectangleComponent } from './rectangle/rectangle/rectangle.component';
import { FooterComponent } from './footer/footer/footer.component';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar/topbar.component';
import { SignUpComponent } from './sign-up/sign-up/sign-up.component';

export const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: '',   redirectTo: 'topbar', pathMatch: 'full' },
  { path: 'posts', component: HolderComponent },
  { path: 'rect', component: RectangleComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'testimonials', 
    loadChildren: () => import('./testimonials/testimonials.module')
      .then(m => m.TestimonialsModule) },
  { path: 'topbar', component: TopbarComponent },
  { path: '**', component: FooterComponent }
];
