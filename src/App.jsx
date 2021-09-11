import "./App.scss";
import InputForm from "./Components/InputForm/InputForm";
import Calculations from "./Components/Calculations/Calculations";
import { useState } from "react";

function App() {
  const [SeedNum, setSeedNum] = useState(false);
  const [HasSeed, setHasSeed] = useState(false);

  const checkSubmitHandler = () => {
    if (!SeedNum) {
      setHasSeed(false);
    } else {
      setHasSeed(true);
    }
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
      />

      <Calculations HasSeed={HasSeed} SeedNum={SeedNum} />
    </div>
  );
}

export default App;
