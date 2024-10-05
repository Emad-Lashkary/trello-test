import { FaRegUser } from "react-icons/fa";
import styles from "./Header.module.css";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  const email = localStorage.getItem("email");

  return (
    <header className={styles.header}>
      <span>Trello Test</span>
      <nav className={styles.navigation}>
        <li>
          {/* cutting name out of email */}
          {email.slice(0, email.indexOf("@"))}
        </li>
        <li>
          <FaRegUser className={styles.icon} />
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </nav>
    </header>
  );
}

export default Header;
