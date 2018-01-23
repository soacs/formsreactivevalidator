import {FormControl} from '@angular/forms';

/**
 * Returns `true` if FormControl's value represents a valid PHONE,
 * otherwise returns `false`.
 */
export function phoneValidator(control: FormControl): { [key: string]: any } {
  const value: string = control.value || '';
  const valid = value.match(/^[0-9()-]+$/) || value.match(/^(?![\s\S])/);
  return valid ? null : {phone: {description: 'Phone is invalid: can only contain 0-9, () characters'}};
}

