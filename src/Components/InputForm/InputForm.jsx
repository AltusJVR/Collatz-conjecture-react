import styles from "./Form.module.scss";
import Card from "../UI/Card";
import Button from "../UI/Button";
const InputForm = (props) => {
  const { calculate, setseedNum, showCalc, calcArray } = props;
  let showCalcButton = <Button>No calculations</Button>;
  if (calcArray.length > 0) {
    showCalcButton = <Button onClick={showCalc}>Show calculations</Button>;
  }

  return (
    <Card>
      <form
        className={styles.form}
        onSubmit={async (e) => {
          e.preventDefault();
        }}
      >
        <label className={styles.label} htmlFor="SeedNumber">
          Seednumber: (min 2, max 5000)
        </label>

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
        {showCalcButton}
      </form>
    </Card>
  );
};

export default InputForm;
