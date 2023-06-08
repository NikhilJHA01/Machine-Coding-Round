import React, { useState } from "react";
import "./styles.css";
function Calculator() {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
    } else if (value === "=") {
      try {
        setExpression(eval(expression).toString());
      } catch (e) {
        setExpression("Error");
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="calculator">
      <div className="calculator__result">
        <input type="text" value={expression} readOnly />
      </div>
      <div className="calculator__buttons">
        <div>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>
        </div>
        <div>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
        </div>
        <div>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>
        </div>
        <div>
          <button onClick={() => handleClick("C")}>C</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick("=")}>=</button>
          <button onClick={() => handleClick("/")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
