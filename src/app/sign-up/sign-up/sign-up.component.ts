import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cfr-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  // name = new FormControl('');
  nameControl: AbstractControl;
  planetControl: AbstractControl;
  galaxyControl: AbstractControl;
  passwordControl: AbstractControl;
  
  signUpForm = this.fb.group({
    name: ['Bob', Validators.required],
    planet: [''],
    galaxy: [''],
    password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9!@#$%^&*]{6,16}$')]]
    // address: this.fb.group({
    //   street: [''],
    //   city: ['']
    // })
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.nameControl = this.signUpForm.get('name');
    this.planetControl = this.signUpForm.get('planet');
    this.galaxyControl = this.signUpForm.get('galaxy');
    this.passwordControl = this.signUpForm.get('password');
  }
//   this.teamForm = this.formBuilder.group({
//     teamName: ['', Validators.required ],
//     teamManager: '',
//     teamDept: this.formBuilder.group(new Department()),
//     employees: this.formBuilder.array([]) 
//  });
 
  onSignUpSubmit(): void {
    console.log(this.signUpForm.valid);
    console.log(this.signUpForm);
  }
}
