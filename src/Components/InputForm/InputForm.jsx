import "./Form.scss";

const InputForm = (props) => {
  const { getSeedNum, submitTrue, calculate } = props;

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await submitTrue();
          await calculate();
        }}
      >
        <label htmlFor="SeedNumber"></label>
        Seednumber:
        <input
          min="2"
          max="5000"
          type="number"
          name="SeedNumber"
          id="SeedNumber"
          onChange={getSeedNum}
        />
        <button type="submit">Calculate</button>
      </form>
    </>
  );
};

export default InputForm;
