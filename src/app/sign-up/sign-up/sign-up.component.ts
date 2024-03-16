import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cfr-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  // name = new FormControl('');
  hasGuests: boolean = false;
  nameControl: AbstractControl;
  planetControl: AbstractControl;
  galaxyControl: AbstractControl;
  passwordControl: AbstractControl;
  hasGuestsControl: AbstractControl;
  allGuests: FormArray;
  hasGuestsSub: Subscription;
  
  signUpForm = this.fb.group({
    name: ['Bob', Validators.required],
    planet: [''],
    galaxy: [''],
    password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9!@#$%^&*]{6,16}$')]],
    hasAdditionalGuests: [false],
    guests: this.fb.array([])
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
    this.hasGuestsControl = this.signUpForm.get('hasAdditionalGuests');
    this.allGuests = this.signUpForm.get('guests') as FormArray;

    this.hasGuestsSub = this.hasGuestsControl.valueChanges.subscribe(hasGuests => {
      this.hasGuests = hasGuests;
    });
  }
//   this.teamForm = this.formBuilder.group({
//     teamName: ['', Validators.required ],
//     teamManager: '',
//     teamDept: this.formBuilder.group(new Department()),
//     employees: this.formBuilder.array([]) 
//  });

  addGuest(): void {
    const newGuest: FormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.guests.push(newGuest);
  }

  removeGuest(): void {
    this.guests.removeAt(this.guests.length - 1);
  }
 
  onSignUpSubmit(): void {
    console.log(this.signUpForm.valid);
    console.log(this.signUpForm);
  }

  get guests(): FormArray {
    return this.signUpForm.controls["guests"] as FormArray;
  }
}
