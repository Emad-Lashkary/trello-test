import { FaRegUser } from "react-icons/fa";
import styles from "./Header.module.css";

function Header() {
  const email = localStorage.getItem("email");

  return (
    <header className={styles.header}>
      <span>Trello Test</span>
      <nav className={styles.navigation}>
        <li>{email}</li>
        <li>
          <FaRegUser className={styles.icon} />
        </li>
      </nav>
    </header>
  );
}

export default Header;
