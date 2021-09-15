import "./Form.scss";

const InputForm = (props) => {
  const { calculate, setseedNum, showCalc } = props;

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="SeedNumber"></label>
        Seednumber: (min 2, max 5000)
        <input
          min="2"
          max="5000"
          type="number"
          name="SeedNumber"
          id="SeedNumber"
          onChange={(e) => {
            calculate(e.target.value);
            setseedNum(e.target.value);
          }}
          required={true}
        />
        <button onClick={showCalc}>Show Iterations:</button>
      </form>
    </>
  );
};

export default InputForm;
