import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-small-number-input',
  templateUrl: './small-number-input.component.html',
  styleUrls: ['./small-number-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SmallNumberInputComponent),
      multi: true,
    },
  ],
})
export class SmallNumberInputComponent implements OnInit, ControlValueAccessor {
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() placeholder: string;
  @Input() disabled: boolean;

  constructor() {
    this.minValue = 0;
    this.maxValue = 10;
    this.placeholder = '';
    this.disabled = true;
  }

  value: number;
  onChange: Function;
  onTouched: Function;

  ngOnInit(): void {
    this.value = this.minValue;
  }

  increase() {
    this.value++;

    if (this.value > this.maxValue) this.value = this.minValue;
    if (this.value < this.minValue) this.value = this.minValue;

    this.onChange(this.value);
  }

  decrease() {
    this.value--;

    if (this.value < this.minValue) this.value = this.maxValue;
    if (this.value > this.maxValue) this.value = this.maxValue;

    this.onChange(this.value);
  }

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
