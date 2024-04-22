import { Component } from '@angular/core';
import { InputConfig } from '../../shared/interfaces/input-config';

@Component({
  selector: 'cfr-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  signUpHeader = 'Sign Up';
  metaData = {
    name: 'John',
    surname: 'Travolta',
    age: 33
  };

}
