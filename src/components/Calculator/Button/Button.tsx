import React from 'react';
import './Button.sass';

interface ButtonProps {
  caption?: string,
  onClick: () => void,
}

const Button = (props: ButtonProps): JSX.Element =>
  <button className="calculator-button">
    {props.caption}
  </button>;

export default Button;
