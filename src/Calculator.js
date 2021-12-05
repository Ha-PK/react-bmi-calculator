import { useState, useRef } from "react";

function Calculator() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const weightRef = useRef();
  const heightRef = useRef();

  function compute() {
    if (!height || !weight) {
      setBmi(0);
    }

    const newBmi = ((weight * 10000) / height / height).toFixed(2);

    setBmi(newBmi);
  }

  function changeInput(e) {
    const name = e.target.name;
    const value = numberFormat(e.target.value);

    this.setState({
      [name]: value,
    });
  }

  function changeWeight() {
    const value = weightRef.current.value;
    setWeight(value);
  }

  function changeHeight() {
    const value = heightRef.current.value;
    setHeight(value);
  }

  return (
    <div className="calculator">
      <div>
        <label>Your height (centimeters):</label>
        <input
          type="text"
          value={height}
          ref={heightRef}
          onChange={changeHeight}
        />
      </div>
      <div>
        <label>Your weight (kilograms):</label>
        <input
          type="text"
          value={weight}
          ref={weightRef}
          onChange={changeWeight}
        />
      </div>
      <div>
        <button type="button" onClick={compute}>
          Compute BMI
        </button>
      </div>
      <div>
        <label>Your BMI:</label>
        <input type="text" value={bmi} readOnly />
      </div>
    </div>
  );
}

function numberFormat(input) {
  return parseInt(input) || 0;
}

export default Calculator;
