import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'cfr-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements ControlValueAccessor  {
  // errorMessage: string = '';
  @Input()
  data = {
    placeholder: 'Enter Your email',
    error: {
      required: 'Email is required.',
      pattern: 'Email is not valid',
      taken: 'Email is already in use.'
    }
  };

  get errorMessage(): string {
    return Object.values(this.data.error).filter(e => {
      return e !== undefined && e !== null && e !== ''
    })[0];
  }

  takeInput(event: KeyboardEvent): void {
    const targetElement = event.target as HTMLInputElement;
    const userInput: string = targetElement.value;
    console.log(userInput);
    
  }
}
