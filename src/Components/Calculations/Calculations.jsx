import mod from "../../functions/mod";
import { next } from "../../functions/mod";

import "./Calculations.scss";
const Calculations = (props) => {
  const { calcArray, seedNum } = props;

  if (!calcArray) {
    return (
      <section>
        <h1>Please enter a seed number.</h1>
      </section>
    );
  }
  if (calcArray) {
    return (
      <section>
        <h1>Calculations</h1>
        <h3>n: {seedNum}</h3>
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
};

export default Calculations;
