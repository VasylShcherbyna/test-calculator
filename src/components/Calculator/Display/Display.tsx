import React from 'react';
import './Display.sass';

interface DisplayProps {
  currentNumber: string,
}

const Display = (props: DisplayProps): JSX.Element =>
  <div className="display">
    {props.currentNumber}
  </div>;

export default Display;
