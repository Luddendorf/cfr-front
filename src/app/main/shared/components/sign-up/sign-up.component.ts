import { Component } from '@angular/core';
import { InputConfig } from '../../interfaces/input-config';
import { LinkSize } from '../../interfaces/link-size';
import { Position } from '../../interfaces/position';

@Component({
  selector: 'cfr-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  buttonLoginText: string = 'Login';
  linkLoginPhoneText: string = 'Login via phone number';

  linkRemindPasswordText: string = 'Remind password';
  remindPasswordSize: LinkSize = LinkSize.Small;
  checkboxId: string = 'checkbox-remember-me';
  checkboxText: string = 'Remember me';
  checkboxPosition: Position = Position.Left;

  signUpText: string = 'Sign Up';

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
