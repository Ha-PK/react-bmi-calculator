import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      weight: 0,
      bmi: 0,
    };
  }

  compute() {
    const height = this.state.height;
    const weight = this.state.weight;

    if (!height || !weight) {
      return this.setState({
        bmi: 0,
      });
    }

    const bmi = ((weight * 10000) / height / height).toFixed(2);

    this.setState({
      bmi: bmi,
    });
  }

  changeInput(e) {
    const name = e.target.name;
    const value = numberFormat(e.target.value);

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="calculator">
        <div>
          <label>Your height (centimeters):</label>
          <input
            type="text"
            value={this.state.height}
            name="height"
            onChange={(e) => this.changeInput(e, "height")}
          />
        </div>
        <div>
          <label>Your weight (kilograms):</label>
          <input
            type="text"
            value={this.state.weight}
            name="weight"
            onChange={(e) => this.changeInput(e, "weight")}
          />
        </div>
        <div>
          <button type="button" onClick={() => this.compute()}>
            Compute BMI
          </button>
        </div>
        <div>
          <label>Your BMI:</label>
          <input type="text" value={this.state.bmi} readOnly />
        </div>
      </div>
    );
  }
}

function numberFormat(input) {
  return parseInt(input) || 0;
}

export default Calculator;
