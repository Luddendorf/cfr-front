import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterOutlet } from '@angular/router';
import { TopbarModule } from './topbar/topbar.module';
import { FooterModule } from './footer/footer.module';
import { FooterService } from './footer/footer.service';
import { CardsModule } from './cards/cards.module';
import { RectangleModule } from './rectangle/rectangle.module';
import { SharedModule } from './common/shared.module';
import { SignUpModule } from './sign-up/sign-up.module';

@Component({
  selector: 'cfr-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterModule,
    TopbarModule,
    CardsModule,
    RectangleModule,
    SharedModule,
    SignUpModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'couzy-forum';
  ourContactNumber: string = '(050) 987-65-43';
  userFeedback: string = 'Normal';
  greetingToTop: string = '';

  constructor(private footerService: FooterService) {}

  ngOnInit() {
    if (environment.production == true) {
      // console.log('Production!');
    } else {
      // console.log('Development!');
    }
  }

  saveAndSendUserMark(userMark: string): void {
    this.userFeedback = userMark;

    this.greetingToTop = 'User said you from bottom - ' 
      + this.footerService.getUserRemark();
  }
}
