import { Component } from '@angular/core';
import { InputConfig } from '../../shared/interfaces/input-config';

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

  emailInputConfig: InputConfig = {
    placeholder: 'Enter Your email',
    iconName: 'email',
    type: 'email',
    error: {
      required: null
    }
  };

  passwordInputConfig: InputConfig = {
    placeholder: 'Enter Your password',
    iconName: 'password',
    type: 'password',
    error: {
      required: null
    }
  };
}
