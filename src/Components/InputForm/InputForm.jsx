const InputForm = (props) => {
  const { getSeedNum, submitTrue } = props;

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitTrue();
        }}
      >
        <label htmlFor="SeedNumber">
          <input
            min="2"
            max="5000"
            type="number"
            name="SeedNumber"
            id="SeedNumber"
            onChange={getSeedNum}
          />
          <button type="submit">Calculate</button>
        </label>
      </form>
    </>
  );
};

export default InputForm;
