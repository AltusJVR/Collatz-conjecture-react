const ChartBar = (props) => {
  const { max, value } = props;

  let height = 0;
  if (max > 0) {
    height = (value / max) * 100 + "%";
  }

  return (
    <div className={props.className} style={{ height: height }}>
      <p>n: {value}</p>
    </div>
  );
};

export default ChartBar;
