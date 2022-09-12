import React from 'react';
import Button from './Button';
import { ButtonProps, ButtonValueSpecial } from './types';
import './ClearButton.sass';

const ClearButton = (props: Omit<ButtonProps, 'value'>): JSX.Element => {
  const buttonProps = {...props, value: ButtonValueSpecial.Clear};

  return <div className="clear-button">
    <Button {...buttonProps} />
  </div>;
};

export default ClearButton;
