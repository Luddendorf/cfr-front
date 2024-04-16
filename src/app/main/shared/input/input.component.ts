import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  // errorMessage: string = '';

  @Input()
  data = {
    placeholder: 'Enter Your email',
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
