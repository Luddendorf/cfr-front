import { Component } from '@angular/core';

@Component({
  selector: 'cfr-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  metaData = {
    name: 'John',
    surname: 'Travolta',
    age: 33
  };
}
