import { FaPlus } from "react-icons/fa";
import styles from "./Button.module.css";

function Button({ onClick, children }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <FaPlus />
      <span>{children}</span>
    </button>
  );
}

export default Button;
