import React, { useState, useEffect } from "react";
import Styles from "../Login-Form/css/style2.module.css";
import { FiEyeOff, FiEye } from "react-icons/fi";

function LoginForm() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    // console.log(formErrors);
    // if (Object.keys(formErrors).length === 0 && isSubmit) {
    //   console.log(formValues);
    // }
    console.log(formErrors);
  }, [formErrors]);
  const validate = (values) => {
    console.log(values);
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "This field is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.password) {
      errors.password = "This field is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    } else if (values.password.length > 15) {
      errors.password = "Password cannot exceed more than 15 characters";
    }

    return errors;
  };

  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.hero}>
          <div className={Styles.title}>
            <h3>Welcome Back!</h3>
          </div>
          <form className={Styles.form1} onSubmit={handleSubmit}>
            <div className={Styles.warning}>
              <input className={formErrors.email && isSubmit ? Styles.errorhover : Styles.hover} name="email" type="email" placeholder="Email" value={formValues.email} onChange={handleChange} />
              <p>{formErrors.email}</p>
            </div>
            <div className={Styles.warning}>
              <input className={formErrors.password && isSubmit ? Styles.errorhover : Styles.hover} name="password" type={passwordVisible ? "text" : "password"} placeholder="Password" value={formValues.password} onChange={handleChange} />
              <p>{formErrors.password}</p>
              <button type="button" className={Styles.Eye} onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            <button className={Styles.login}>Sign In</button>
            <a href="#"> Forgot Password?</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
