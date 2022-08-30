import { CommonModule } from '@angular/common';
import { Component, OnInit, Optional, Self } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NgControl,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { AddressDetails } from 'src/app/core/api/server/data.interface';
import { isNegativeValidator } from '../../../utils/validators/is-negative.validator';
import { isNumberValidator } from '../../../utils/validators/number.validator';

@UntilDestroy()
@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
})
export class AddressFormComponent
  implements ControlValueAccessor, OnInit, Validator
{
  control!: AbstractControl;

  form: FormGroup = new FormGroup({
    id: new FormControl<number | null>(null),
    nom: new FormControl<string>('', Validators.required),
    numero: new FormControl<number | null>(null, [
      Validators.required,
      isNegativeValidator,
      isNumberValidator,
    ]),
    rue: new FormControl<string>('', Validators.required),
    zip: new FormControl<number | null>(null, [
      Validators.required,
      isNegativeValidator,
      isNumberValidator,
    ]),
    ville: new FormControl<string>('', Validators.required),
    active: new FormControl<boolean>(false),
    isSuccursal: new FormControl<boolean>(true),
  });

  get error(): string | undefined {
    return Object.keys(this.form.errors ?? {})[0];
  }

  get invalid(): boolean {
    return this.form.invalid ?? false;
  }

  get value(): any {
    return this.form.value;
  }

  _onChange = (address: AddressDetails) => {};

  _onTouched = () => {};

  _onValidatorChanged = (address: AddressDetails) => {};

  constructor(
    @Self()
    @Optional()
    private readonly ngControl: NgControl
  ) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.control = this.ngControl.control ?? new FormControl();

    this.form.valueChanges
      .pipe(
        tap((value) => this._onChange(value)),
        tap(() => this.control.setErrors(this.validate())),
        untilDestroyed(this)
      )
      .subscribe();

    this.control.setErrors(this.validate());
  }

  writeValue(address?: AddressDetails): void {
    if (address) {
      this.form.setValue(address);
    }

    this.control?.updateValueAndValidity();
  }

  validate(): ValidationErrors | null {
    return Object.keys(this.form.controls).reduce(this.mergeErrors, null);
  }

  registerOnChange(fn: (address: AddressDetails) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this._onValidatorChanged = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  private mergeErrors = (
    errors: ValidationErrors | null,
    controlName: string
  ) => {
    const controlErrors = this.form.controls[controlName].errors;

    if (!errors && !controlErrors) {
      return null;
    }

    return { ...errors, ...controlErrors };
  };
}
