import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputConfig } from '../../interfaces/input-config';

@Component({
  selector: 'cfr-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements AfterViewInit, ControlValueAccessor  {
  userInput: string = '';
  touched: boolean = false;
  disabled: boolean = false;
  showPassword: boolean = false;
  // errorMessage: string = '';

  @Input()
  data: InputConfig = {
    placeholder: 'Enter Your email',
    iconName: 'password',
    type: 'email',
    errors: null
  };

  @Output()
  userInputFinal = new EventEmitter<string>();

  @ViewChild('inputElement')
	private inputElement = {} as ElementRef;

  ngAfterViewInit(): void {
    if (this.data.type == 'phone') {
      this.inputElement.nativeElement.value = '+38';
    }
  }

  onChange = (userInput: string): void => {
    console.log('UPDATED userInput ', userInput);
    this.inputElement.nativeElement.value = userInput;
    // this.userInputFinal.emit(userInput);
  };

  onTouched: Function = (touched: boolean) => {
    this.touched = touched;
  };

  get errorMessage(): string {
    if (this.data.errors) {
      //console.log(Object.keys(this.data.errors)[0]);
      switch (Object.keys(this.data.errors)[0]) {
        case 'email':
          return 'Not a valid email';
        case 'required':
          if (this.data.type == 'email') {
            return 'Email is required';
          }
          if (this.data.type == 'password') {
            return 'Password is required';
          }
          if (this.data.type == 'phone') {
            return 'Phone is required';
          }
          break;
        case 'maxlength':
          if (this.data.type == 'email') {
            return 'Email is 320 letters max.';
          }
          if (this.data.type == 'phone') {
            return 'Phone is 13 letters max.';
          }
          break;
        case 'minlength':
          if (this.data.type == 'phone') {
            return 'Phone is 13 letter min.';
          }
          break;
        case 'pattern':
          return 'Password must have 1 letter, 1 digit and 1 symbol and '
            + 'be at least 8 letters long';  
        default:
          'The field is required';
      }
    }
    return '';
  }

  onInput(event: KeyboardEvent): void {
    this.markAsTouched();
    if (this.disabled) {
      return;
    }
    const targetElement = event.target as HTMLInputElement;
    const userInput: string = targetElement.value;
    this.userInput = this.data.type == 'phone' ? this.modifyPhoneInput(userInput) : userInput;
    console.log('FRESH INPUT ', this.userInput);
    // this.userInputFinal.emit(this.userInput);
    this.onChange(this.userInput);
  }

  clearInput(): void {
    this.markAsTouched();
    if (this.disabled) {
      return;
    }
    this.userInput = this.data.type == 'phone' ? '+38' : '';
    this.inputElement.nativeElement.value = this.userInput;
    this.onChange(this.userInput);
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.inputElement.nativeElement.type = 'text';
    } else {
      this.inputElement.nativeElement.type = 'password';
    }
  }

  modifyPhoneInput(phoneInput: string): string {
    if (!(phoneInput.substring(0, 3)).match(/\+38/g)) {
      phoneInput = '+38';
    }
    let userPhone: string = phoneInput.substring(3);
    const charsPhone: string[] = userPhone.replaceAll(/\D/g, '').substring(0, 11).split('');
    
    charsPhone.splice(0, 0, ' ');
    if (charsPhone.length > 4) {
      charsPhone.splice(4, 0, ' ');
    }
    if (charsPhone.length > 8) {
      charsPhone.splice(8, 0, ' ');
    }
    if (charsPhone.length > 11) {
      charsPhone.splice(11, 0, ' ');
    }

    return ('+38' + charsPhone.join('')).substring(0, 17);
  }

  writeValue(userInput: string): void {
    this.userInput = userInput;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.touched = true;
      this.onTouched(this.touched);
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
    if (!this.inputElement || !this.inputElement.nativeElement) {
      return;
    }
    this.inputElement.nativeElement.disabled = disabled;
    if (disabled) {
      this.inputElement.nativeElement.value = '';
    }
  }
}
