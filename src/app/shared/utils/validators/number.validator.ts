import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isNumberValidator(control: AbstractControl): ValidationErrors | null {
  if (control.value !== null && isNaN(control.value)) {
    return { isNumber: true };
  }
  return null;
}
