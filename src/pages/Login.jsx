import LoginForm from "../ui/LoginForm";
import styles from "./Login.module.css"

function Login() {
  return (
    <div className={styles.loginPage}>
      <LoginForm />
    </div>
  );
}

export default Login;
