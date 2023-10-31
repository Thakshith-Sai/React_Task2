import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calculator.css';
import { evaluate } from 'mathjs';

function Calculator() {
  const [input, setInput] = useState('');
  

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = evaluate(input);
        setInput(evalResult.toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
      
    } else if (value === 'B') {
      setInput(input.slice(0, -1)); // Remove the last character
    } else {
      setInput(input + value);
    }
  };


  return (
    <div className="calculator-container" >
      <div className="calculator" id="calci">
        <input type="text" value={input} id="display" className="form-control" readOnly />
        <div className="buttons">
            <tr></tr>
            <tr></tr>
          <button className="btn btn-primary" onClick={() => handleButtonClick('C')}>C</button>
          <button className="btn btn-primary" onClick={() => handleButtonClick('B')}>B</button> {/* Back button */}

          <button className="btn btn-dark" onClick={() => handleButtonClick('7')}>7</button>
          <button className="btn btn-dark" onClick={() => handleButtonClick('8')}>8</button>
          <button className="btn btn-dark" onClick={() => handleButtonClick('9')}>9</button>
          <button className="btn btn-danger" onClick={() => handleButtonClick('/')}>/</button>

          <button className="btn btn-dark" onClick={() => handleButtonClick('4')}>4</button>
          <button className="btn btn-dark" onClick={() => handleButtonClick('5')}>5</button>
          <button className="btn btn-dark" onClick={() => handleButtonClick('6')}>6</button>
          <button className="btn btn-danger" onClick={() => handleButtonClick('*')}>*</button>

          <button className="btn btn-dark" onClick={() => handleButtonClick('1')}>1</button>
          <button className="btn btn-dark" onClick={() => handleButtonClick('2')}>2</button>
          <button className="btn btn-dark" onClick={() => handleButtonClick('3')}>3</button>
          <button className="btn btn-danger" onClick={() => handleButtonClick('-')}>-</button>

          <button className="btn btn-dark" onClick={() => handleButtonClick('0')}>0</button>
          <button className="btn btn-dark" onClick={() => handleButtonClick('.')}>.</button>
          <button className="btn btn-success" onClick={() => handleButtonClick('=')}>=</button>
          <button className="btn btn-danger" onClick={() => handleButtonClick('+')}>+</button>

        </div>
      </div>
      
    </div>
  );
}

export default Calculator;


