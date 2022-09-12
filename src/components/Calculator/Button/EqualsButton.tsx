import React from 'react';
import Button from './Button';
import { ButtonProps, ButtonValueSpecial } from './types';
import './EqualsButton.sass';

const EqualsButton = (props: Omit<ButtonProps, 'value'>): JSX.Element => {
  const buttonProps = {...props, value: ButtonValueSpecial.Equals};

  return <div className="equals-button">
    <Button {...buttonProps} />
  </div>;
};

export default EqualsButton;
