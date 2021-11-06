import "./App.css";
import Calculator from "./Calculator";

function App() {
  return (
    <div className="app">
      <div className="app-calculator">
        <Calculator />
      </div>
      <div className="app-information">
        <p>
          <strong>BMI Categories:</strong>
        </p>
        <p>
          Underweight = &lt;18.5
          <br />
          Normal weight = 18.5–24.9
          <br />
          Overweight = 25–29.9
          <br />
          Obesity = BMI of 30 or greater
        </p>
      </div>
    </div>
  );
}

export default App;
