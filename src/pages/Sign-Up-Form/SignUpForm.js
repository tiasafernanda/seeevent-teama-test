import React, { useState, useEffect } from "react";
import Styles from "../Sign-Up-Form/css/style3.module.css";
import { FiEyeOff, FiEye } from "react-icons/fi";

function SignUpForm() {
  const initialValues = { firstname: "", lastname: "", email: "", password: "", confirmpassword: "" };
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
    if (!values.firstname) {
      errors.firstname = "This field is required";
    }
    if (!values.lastname) {
      errors.lastname = "This field is required";
    }
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
    if (!values.confirmpassword) {
      errors.confirmpassword = "This field is required";
    } else if (values.password !== values.confirmpassword) {
      errors.confirmpassword = "Confirmation password is not the same as the password";
    }

    return errors;
  };

  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.hero}>
          <div className={Styles.title}>
            <h3>Join us!</h3>
          </div>
          <form className={Styles.form1} onSubmit={handleSubmit}>
            <div className={Styles.warning}>
              <input className={formErrors.firstname && isSubmit ? Styles.errorhover : Styles.hover} name="firstname" type="text" placeholder="First Name" value={formValues.firstname} onChange={handleChange} />
              <p>{formErrors.firstname}</p>
            </div>
            <div className={Styles.warning}>
              <input className={formErrors.lastname && isSubmit ? Styles.errorhover : Styles.hover} name="lastname" type="text" placeholder="Last Name" value={formValues.lastname} onChange={handleChange} />
              <p>{formErrors.lastname}</p>
            </div>
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
            <div className={Styles.warning}>
              <input
                className={formErrors.confirmpassword && isSubmit ? Styles.errorhover : Styles.hover}
                name="confirmpassword"
                type={passwordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                value={formValues.confirmpassword}
                onChange={handleChange}
              />
              <p>{formErrors.confirmpassword}</p>
              <button type="button" className={Styles.Eye} onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            <button className={Styles.regist}>Sign Up</button>
            <a href="#"> Having issue when signup?</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
