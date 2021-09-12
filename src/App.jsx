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
      <h1>X3N</h1>
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
