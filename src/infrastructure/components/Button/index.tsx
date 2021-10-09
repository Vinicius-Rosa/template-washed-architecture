import styles from "./Button.module.css";

const Button = (props: any) => {
  return (
    <button
      {...props}
      className={props.async ? styles.asyncButton : styles.button}
    >
      {props.children}
    </button>
  );
};

export default Button;
