import React from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { changeTheme } = useTheme();

  return (
    <div className={styles.themeSwitcher}>
      <select onChange={(e) => changeTheme(e.target.value)}>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
        <option value="teal">Teal</option>
        <option value="amber">Yellow</option>
        <option value="pink">Pink</option>
        <option value="brown">Brown</option>
        <option value="blue-grey">Gray</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
