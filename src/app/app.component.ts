import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterOutlet } from '@angular/router';
import { TopbarModule } from './topbar/topbar.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, TopbarModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'couzy-forum';

  ngOnInit() {
    if (environment.production == true) {
      console.log('Production!');
    } else {
      console.log('Development!');
    }
  }
}
