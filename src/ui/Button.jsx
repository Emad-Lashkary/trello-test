import { FaPlus, FaTrash } from "react-icons/fa";
import styles from "./Button.module.css";

function Button({ onClick, children, remove }) {
  return (
    <button
      className={!remove ? styles.button : styles.buttonRemove}
      onClick={onClick}
    >
      {!remove ? <FaPlus /> : <FaTrash />}
      <span>{children}</span>
    </button>
  );
}

export default Button;
