import LoginForm from "../ui/LoginForm";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.loginPage}>
      <img
        className={styles.loginBackground}
        src="loginBackground.jpg"
        alt="login background"
      />
      <LoginForm />
    </div>
  );
}

export default Login;
