import { useState } from "react";
import x3n from "../../functions/x3n";

const Calculations = (props) => {
  const { HasSeed, SeedNum } = props;
  const [CalcArray, setCalcArray] = useState(0);

  if (!SeedNum) {
    return (
      <>
        <h1>Calculations</h1>
        <h6>Please enter a seed number.</h6>
      </>
    );
  }
  if (SeedNum && HasSeed) {
    return (
      <>
        <h1>Calculations</h1>
        <h3>{SeedNum}</h3>
      </>
    );
  }
};

export default Calculations;
