import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InputConfig } from '../../interfaces/input-config';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cfr-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  isEmailLogin: boolean = true;
  buttonLoginText: string = 'Continue';
  loginViaEmail: string = 'Login via email';
  loginViaPhone: string = 'Login via phone';
  remindPassword: string = 'Remind password';
  passwordRegex: RegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\!\@\#\$\%\^\?\&\']).{8,30}/;
  // phoneRegex: RegExp = //;

  emailInputConfig: InputConfig = {
    placeholder: 'Enter Your email',
    iconName: 'email',
    type: 'email',
    errors: null
  };

  passwordInputConfig: InputConfig = {
    placeholder: 'Enter Your password',
    iconName: 'password',
    type: 'password',
    errors: null
  };

  phoneInputConfig: InputConfig = {
    placeholder: 'Enter Your phone',
    iconName: 'phone',
    type: 'phone',
    errors: null
  };

  loginFormEmail: FormGroup; 
  loginFormPhone: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private cdRef: ChangeDetectorRef) {
    this.loginFormEmail = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(320)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordRegex)]]
    });
    this.loginFormPhone = this.formBuilder.group({
      phone: ['', [Validators.required, Validators.minLength(17), Validators.maxLength(17)
      // Validators.pattern()
      ]]
    });
  }

  ngOnInit(): void {}

  toggleLoginFlow() {
    this.isEmailLogin = !this.isEmailLogin;
  }

  patchPhoneInput(phoneInput: string): void {
    console.log('GOT phoneInput ', phoneInput);
    
    this.loginFormPhone.get('phone')?.setValue(phoneInput);
    //this.cdRef.markForCheck();
  }



  login() {
    // console.log(this.loginFormPhone);
    if (this.isEmailLogin) {

      //console.log(this.loginFormEmail.get('email')?.errors);
      //console.log(this.loginFormEmail.get('password')?.errors);

      this.emailInputConfig = { ...this.emailInputConfig, errors: this.loginFormEmail
        .get('email')?.errors };
      this.passwordInputConfig = { ...this.passwordInputConfig, errors: this.loginFormEmail
        .get('password')?.errors };
    } else {
      console.log(this.loginFormPhone);
      this.phoneInputConfig = { ...this.phoneInputConfig, errors: this.loginFormPhone
        .get('phone')?.errors };
    }
  }
}
