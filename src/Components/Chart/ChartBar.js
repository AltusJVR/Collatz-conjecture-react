const ChartBar = (props) => {
  const { max, value } = props;

  let barValue = 0;
  if (max > 0) {
    barValue = (value / max) * 100 + "%";
  }

  return <div className={props.className} style={{ height: barValue }}></div>;
};

export default ChartBar;
