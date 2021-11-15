import React from "react";
import Styles from "../Login-Form/css/style2.module.css";

function LoginForm() {
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.hero}>
          <div className={Styles.form}>
            <div className={Styles.formLogin}>
              <div className={Styles.title}>
                <h3>Welcome back!</h3>
              </div>
              <form>
                <div className={Styles.email}>
                  <input type="text" placeholder="Email" />
                </div>
                <div className={Styles.password}>
                  <input type="password" placeholder="Password" />
                </div>
                <div className={Styles.signin}>
                  <button type="submit" value="Signin">
                    Sign In
                  </button>
                </div>
                <a href="#" className={Styles.forgot}>
                  Forgot Password?
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
