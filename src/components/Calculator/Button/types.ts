export interface ButtonProps {
  value: ButtonValue,
  caption?: string,
  onClick: () => void,
}

export type ButtonValueDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export enum ButtonValueOperator {
  Add = 'button.operator.add',
  Subtract = 'button.operator.subtract',
  Multiply = 'button.operator.multiply',
  Divide = 'button.operator.divide',
}

export enum ButtonValueSpecial {
  Dot = 'button.special.dot',
  Clear = 'button.special.clear',
  Equals = 'button.special.equals',
}

export type ButtonValue = ButtonValueDigit | ButtonValueOperator | ButtonValueSpecial;
