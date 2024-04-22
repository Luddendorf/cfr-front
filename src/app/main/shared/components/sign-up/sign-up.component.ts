import { Component } from '@angular/core';
import { InputConfig } from '../../interfaces/input-config';

@Component({
  selector: 'cfr-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  buttonContinueText: string = 'Continue';
  linkRemindPasswordText: string = 'Remind password';
  linkLoginPhoneText: string = 'Login via phone number';

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

  phoneInputConfig: InputConfig = {
    placeholder: 'Enter Your phone',
    iconName: 'phone',
    type: 'phone',
    error: {
      required: null
    }
  };
}
