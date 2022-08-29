import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isNegativeValidator(control: AbstractControl): ValidationErrors | null {
  if (control.value !== null && +control.value < 0) {
    return { isNegative: true };
  }

  return null;
}
