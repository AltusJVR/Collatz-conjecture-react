// Functions
import x3n from "./functions/x3n";

// Styles
import "./App.scss";
// Components
import InputForm from "./Components/InputForm/InputForm";
import Calculations from "./Components/Calculations/Calculations";
import { useState } from "react";

function App() {
  // const [SeedNum, setSeedNum] = useState(false);
  const [calcArray, setCalcArray] = useState([]);
  const [seedNum, setseedNum] = useState(0);

  const calculateArray = async (x) => {
    let array = await x3n(x);
    setCalcArray(array);
  };

  return (
    <div className="App">
      <h1>Collatz conjecture</h1>
      <p>
        The{" "}
        <strong>
          <a href="https://en.wikipedia.org/wiki/Collatz_conjecture">Collatz conjecture</a>
        </strong>{" "}
        is a conjecture in mathematics that concerns sequences defined as follows: start with any
        positive integer <strong>n</strong>. Then each term is obtained from the previous term as
        follows: if the previous term is even, the next term is one half of the previous term. If
        the previous term is odd, the next term is 3 times the previous term plus 1. The conjecture
        is that no matter what value of <strong>n</strong>, the sequence will always reach 1.
      </p>

      <ul>
        <li>if (n % 2 === 0) = n / 2</li>
        <li>if (n % 2 !== 0) = n * 3 + 1</li>
        <li>if( n === 1) stop</li>
      </ul>

      <InputForm calculate={calculateArray} setseedNum={setseedNum} />

      <Calculations calcArray={calcArray} seedNum={seedNum} />
    </div>
  );
}

export default App;
