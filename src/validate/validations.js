export const required = (value) => (value ? undefined : 'Required');

export const number = (value) =>
  !Number(value) ? 'Must be numeric only' : undefined;

export const minValue = (value) =>
  value < 17 ? 'Age must be minimun of 17 years' : undefined;

export const trim = (value) =>
  !/(^\s)|(\s$)/.test(value) ? undefined : 'Invalid format';

export const string = (value) =>
  /^[A-Za-z\s]+$/.test(value) ? undefined : 'Must be letters only';

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
