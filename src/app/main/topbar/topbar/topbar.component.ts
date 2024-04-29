import { Component } from '@angular/core';
import { InputConfig } from '../../shared/interfaces/input-config';

@Component({
  selector: 'cfr-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  hasCookie: boolean = true;
  signUpHeader = 'Sign Up';
  loginHeader = 'Login';
  metaData = {
    name: 'John',
    surname: 'Travolta',
    age: 33
  };

  getModalHeader(): string {
    return this.hasCookie ? this.loginHeader : this.signUpHeader;
  }
}
