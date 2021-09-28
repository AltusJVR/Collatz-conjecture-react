import mod from "../../functions/mod";
import { next } from "../../functions/mod";
import Chart from "../Chart/Chart";
import "./Calculations.scss";
const Calculations = (props) => {
  const { calcArray, seedNum, showCalc, max, sortedArray } = props;
  if (!seedNum) {
    return (
      <section className="calcSection">
        <h2>Please enter a seed number</h2>
      </section>
    );
  }
  if (seedNum && showCalc) {
    return (
      <section className="calcSection">
        <h1>Iterations:</h1>
        <h3>
          n: {seedNum} = {mod(seedNum)}
        </h3>
        <h3>Total iterations: {calcArray.length}</h3>
        <h4>Highest n: {max}</h4>
        <Chart calcArray={calcArray} max={max} />
        <div className="calculations">
          {calcArray.map((num, index) => {
            return (
              <div className="calc" key={index}>
                <h4>X: {num}</h4>
                <p>{mod(num)}</p>
                <p>Iteration: {index}</p>
                <span className="arrow">→ {next(num)}</span>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  if (seedNum && !showCalc) {
    return (
      <section className="calcSection">
        <h2>Calculation done click on show iterations to see all iterations.</h2>
      </section>
    );
  }
};

export default Calculations;
