import React from "react";
import Styles from "../Sign-Up-Form/css/style3.module.css";
function SignUpForm() {
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.hero}>
          <div className={Styles.signup}>
            <div className={Styles.title}>
              <h3>Join us!</h3>
            </div>
            <form>
              <div className={Styles.name}>
                <input type="text" placeholder="First Name" />
              </div>
              <div className={Styles.last}>
                <input type="text" placeholder="Last Name" />
              </div>
              <div className={Styles.email}>
                <input type="text" placeholder="Email" />
              </div>
              <div className={Styles.password}>
                <input type="password" placeholder="Password" />
              </div>
              <div className={Styles.confirm}>
                <input type="password" placeholder="Confirm Password" />
              </div>
              <div className={Styles.signin}>
                <button type="submit" value="Signin">
                  Sign Up
                </button>
              </div>
              <a href="#" className={Styles.issue}>
                Having issue when signup?
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
