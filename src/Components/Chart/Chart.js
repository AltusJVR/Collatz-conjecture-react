import ChartBar from "./ChartBar";
import styles from "./Chart.module.scss";

const Chart = (props) => {
  const { max, calcArray } = props;

  return (
    <div className={styles.chart}>
      {calcArray.map((num, index) => {
        return <ChartBar key={index} value={num} className={styles.chart__bar} max={max} />;
      })}
    </div>
  );
};

export default Chart;
