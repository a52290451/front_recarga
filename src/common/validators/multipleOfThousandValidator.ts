import { ValidatorFn, AbstractControl } from '@angular/forms';

export function multipleOfThousandValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    return value % 1000 === 0 ? null : { 'multipleOfThousand': true };
  };
}
