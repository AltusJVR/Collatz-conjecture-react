import styles from "./card.module.scss";

const Card = (props) => {
  const { className, children } = props;
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
