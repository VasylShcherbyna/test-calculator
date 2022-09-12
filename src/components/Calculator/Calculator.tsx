import { Operator } from './types';
import Button from './Button/Button';
import Display from './Display/Display';
import React, { useState } from 'react';
import './Calculator.sass';

const Calculator = (): JSX.Element => {
  const [currentNumber, setCurrentNumber] = useState<string>('0');
  const [currentOperator, setCurrentOperator] = React.useState<Operator | null>(null);
  const [firstOperand, setFirstOperand] = React.useState<number | null>(null);

  const handleClearButtonClick = () => {};

  return (
    <div className="calculator">

      <Display currentNumber={currentNumber} />

      <div className="keyboard">

        <Button caption="+" onClick={handleClearButtonClick} />
        <Button caption="-" onClick={handleClearButtonClick} />
        <Button caption="*" onClick={handleClearButtonClick} />
        <Button caption="/" onClick={handleClearButtonClick} />

        <Button caption="7" onClick={handleClearButtonClick} />
        <Button caption="8" onClick={handleClearButtonClick} />
        <Button caption="9" onClick={handleClearButtonClick} />

        <Button caption="4" onClick={handleClearButtonClick} />
        <Button caption="5" onClick={handleClearButtonClick} />
        <Button caption="6" onClick={handleClearButtonClick} />

        <Button caption="1" onClick={handleClearButtonClick} />
        <Button caption="2" onClick={handleClearButtonClick} />
        <Button caption="3" onClick={handleClearButtonClick} />

        <Button caption="0" onClick={handleClearButtonClick} />
        <Button caption="." onClick={handleClearButtonClick} />
        <Button caption="AC" onClick={handleClearButtonClick} />

        <Button caption="=" onClick={handleClearButtonClick} />
      </div>

    </div>
  );
};

export default Calculator;
