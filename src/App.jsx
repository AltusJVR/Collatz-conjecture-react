// Functions
import x3n from "./functions/x3n";

// Styles
import "./App.scss";
// Components
import InputForm from "./Components/InputForm/InputForm";
import Calculations from "./Components/Calculations/Calculations";
import { useState } from "react";

function App() {
  const [SeedNum, setSeedNum] = useState(false);
  const [HasSeed, setHasSeed] = useState(false);
  const [calcArray, setCalcArray] = useState([]);

  const checkSubmitHandler = () => {
    if (!SeedNum) {
      setHasSeed(false);
    } else {
      setHasSeed(true);
    }
  };

  const calculateArray = async () => {
    let array = await x3n(SeedNum);
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

      <InputForm
        getSeedNum={(e) => setSeedNum(e.target.value)}
        seedSet={(e) => {
          setHasSeed(true);
        }}
        submitTrue={() => checkSubmitHandler()}
        calculate={() => calculateArray()}
      />

      <Calculations HasSeed={HasSeed} SeedNum={SeedNum} calcArray={calcArray} />
    </div>
  );
}

export default App;
