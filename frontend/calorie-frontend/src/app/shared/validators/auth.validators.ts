import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Custom cross-field validator (required by the spec).
 * Returns a group-level `passwordMismatch` error when the password and its
 * confirmation differ. Skips validation until the confirm field has a value.
 */
export function passwordMatchValidator(
  passwordKey = 'password',
  confirmKey = 'confirmPassword'
): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get(passwordKey)?.value;
    const confirm = group.get(confirmKey)?.value;

    if (!confirm) {
      return null;
    }

    return password === confirm ? null : { passwordMismatch: true };
  };
}
