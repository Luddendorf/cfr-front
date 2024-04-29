import { Component, OnInit } from '@angular/core';
import { InputConfig } from '../../interfaces/input-config';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cfr-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  isEmailLogin: boolean = false;
  buttonLoginText: string = 'Continue';
  loginViaEmail: string = 'Login via email';
  loginViaPhone: string = 'Login via phone';
  remindPassword: string = 'Remind password';
  passwordRegx: RegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\!\@\#\$\%\^\?\&\']).{8,30}/;

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

  loginFormPhone: FormGroup; 
  // = new FormGroup({phone: new FormControl('')});
  loginFormEmail: FormGroup; 
 // = new FormGroup({email: new FormControl('')});

  constructor(private formBuilder: FormBuilder) {
    // this.initLoginForm();
    this.loginFormEmail = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(this.passwordRegx)]]
    });
    this.loginFormPhone = this.formBuilder.group({
      phone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
   // this.initLoginForm();

  }

  toggleLoginFlow() {
    this.isEmailLogin = !this.isEmailLogin;
    this.initLoginForm();
  }

  initLoginForm(): void {
    if (this.isEmailLogin) {
      this.loginFormEmail = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(this.passwordRegx)]]
      });
    }
    if (!this.isEmailLogin) {
      this.loginFormPhone = this.formBuilder.group({
        phone: ['', Validators.required]
      });
    }
  }

  login() {
    console.log(this.loginFormEmail);
    console.log(this.loginFormPhone);
  }
}
