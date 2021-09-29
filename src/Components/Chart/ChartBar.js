const ChartBar = (props) => {
  const { max, value } = props;

  let height = 0;
  if (max > 0) {
    height = (value / max) * 100 + "%";
  }

  let bg = "hsl(125, 50%, 50%)";

  if (value) {
    if (value === max) {
      bg = "hsl(1, 50%, 50%)";
    }
  }

  return (
    <div className={props.className} style={{ height: height, backgroundColor: bg }}>
      <p>n: {value}</p>
    </div>
  );
};

export default ChartBar;
