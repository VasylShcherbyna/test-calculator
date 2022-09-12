import React from 'react';
import Button from './Button';
import { ButtonProps, ButtonValueOperator } from './types';

const OperatorButton = (props: ButtonProps & { value: ButtonValueOperator }): JSX.Element =>
  <div className="operator-button">
    <Button {...props} />
  </div>;

export default OperatorButton;
