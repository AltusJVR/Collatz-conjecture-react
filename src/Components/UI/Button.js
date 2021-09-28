import styles from "./Button.module.scss";

const Button = (props) => {
  const { children, className, onClick, type } = props;
  return (
    <button type={type || "button"} onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
