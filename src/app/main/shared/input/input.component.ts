import { Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputConfig } from '../interfaces/input-config';

@Component({
  selector: 'cfr-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements ControlValueAccessor  {
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
    error: {
      required: null,
      // pattern: 'Email is not valid',
      // taken: 'Email is already in use.'
    }
  };

  @ViewChild('inputElement')
	private inputElement = {} as ElementRef;

  onChange = (unserInput: string) => {};

  onTouched: Function = (touched: boolean) => {
    this.touched = touched;
  };

  get errorMessage(): string | null {
    return Object.values(this.data.error).filter(e => {
      return e !== undefined && e !== null && e !== ''
    })[0];
  }

  onInput(event: KeyboardEvent): void {
    this.markAsTouched();
    if (this.disabled) {
      return;
    }
    const targetElement = event.target as HTMLInputElement;
    const userInput: string = targetElement.value;
    this.userInput = userInput;
    this.onChange(this.userInput);
  }

  clearInput(): void {
    this.markAsTouched();
    if (this.disabled) {
      return;
    }
    this.userInput = '';
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

  writeValue(userInput: string): void {
    this.userInput = userInput;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.touched = true;
      this.onTouched(this.touched);
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
    this.inputElement.nativeElement.disabled = disabled;
    if (disabled) {
      this.inputElement.nativeElement.value = '';
    }
  }
}
