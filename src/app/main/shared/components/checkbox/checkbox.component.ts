import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Position } from '../../interfaces/position';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cfr-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: CheckboxComponent
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  isChecked: boolean = false;
  touched: boolean = false;

  @Input()
  checkboxId: string = 'checkbox1';
  @Input()
  checkboxText: string = 'Check Me';
  @Input()
  position: Position = Position.Left;
  @Input()
  disabled: boolean = false;

  @ViewChild('checkboxElement')
	private checkboxElement = {} as ElementRef;

  onCheck(event: Event) {
    this.markAsTouched();
    if (this.disabled) {
      return;
    }
    const targetElement = event.target as HTMLInputElement;
    const isChecked: boolean = targetElement.checked;
    this.isChecked = isChecked;
    this.onChange(this.isChecked);
  }

  onChange = (checked: boolean) => {
    this.checkboxElement.nativeElement.value = checked;
  };

  onTouched: Function = (touched: boolean) => {
    this.touched = touched;
  };

  writeValue(isChecked: boolean): void {
    this.isChecked = isChecked;
  }
  
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
    this.checkboxElement.nativeElement.disabled = disabled;
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.touched = true;
      this.onTouched(this.touched);
    }
  }
}
