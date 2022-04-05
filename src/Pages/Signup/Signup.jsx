import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { useAuthContext } from "../../Context/Index";
import { useEffect } from "react/";
import { regEx } from "../../Utils/Index";

const Signup = () => {
  const { signupFormHandler } = useAuthContext();
  const [error, setError] = useState("");
  const [color, setColor] = useState({ color: "#a50f0f" });

  const [showHide, setShowHide] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    checked: false,
  });

  const signUpHandler = (e) => {
    e.preventDefault();

    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      setColor({ color: "#a50f0f" });
      setError("Input field can not be Empty.");
    } else if (formData.password !== formData.confirmPassword) {
      setColor({ color: "#a50f0f" });
      setError("Password does not matched.");
    } else if (!regEx.test(formData.email)) {
      setColor({ color: "#a50f0f" });
      setError("Enter a valid email.");
    } else if (formData.checked === false) {
      setColor({ color: "#a50f0f" });
      setError("Please checked All terms and condition.");
    } else {
      setColor({ color: "#068154" });
      setError("Form successfully submit");
      //Sending Data to Auth context
      signupFormHandler(formData);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        checked: false,
      });
    }
  };

  return (
    <div className="signup-container">
      <form className="form">
        <div className="form-header">
          <h2 className="form-heading">Signup </h2>
          {error && (
            <p className="error center" style={color}>
              {error}
            </p>
          )}
        </div>

        <div className="inputs-wrapper">
          <div className="left-wrapper">
            <div className="input-row">
              <label className="input-label form-label">First Name: </label>
              <input
                value={formData.firstName}
                type="text"
                placeholder="Enter First Name"
                className="input primary-input"
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    firstName: event.target.value,
                  }))
                }
              />
            </div>

            <div className="input-row">
              <label className="input-label form-label">
                Password: <span className="required">*</span>
              </label>
              <input
                type="password"
                value={formData.password}
                placeholder="******"
                className="input required-input form-password-input"
                required
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="right-wrapper">
            <div className="input-row">
              <label className="input-label form-label">Last Name: </label>
              <input
                type="text"
                value={formData.lastName}
                placeholder="Enter Last Name"
                className="input primary-input"
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    lastName: event.target.value,
                  }))
                }
              />
            </div>
            <div className="input-row">
              <label className="input-label form-label">
                Confirm Password: <span className="required">*</span>
              </label>
              <div className="confirm-Password-input">
                <input
                  value={formData.confirmPassword}
                  type={!showHide ? "password" : "text"}
                  placeholder="******"
                  className="input required-input form-password-input "
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      confirmPassword: event.target.value,
                    }))
                  }
                />
                {showHide ? (
                  <FaIcons.FaEye
                    className="icons eye-icon"
                    onClick={() => setShowHide(!showHide)}
                  />
                ) : (
                  <FaIcons.FaEyeSlash
                    className="icons eye-icon"
                    onClick={() => setShowHide(!showHide)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/*Email input filed */}
        <div className="input-row">
          <label className="input-label form-label">
            Email: <span className="required">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            placeholder="example@gmail.com"
            className="input required-input form-password-input"
            required
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, email: event.target.value }))
            }
          />
        </div>

        {/*checkbox input filed */}
        <div className="input-row checkbox-row">
          <label className="input-label">
            <input
              type="checkbox"
              checked={formData.checked}
              className="input checkbox-input "
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  checked: event.target.checked,
                }))
              }
            />
            <span className="checkbox-text">Accept all terms & conditions</span>
          </label>
        </div>

        <div className="input-row">
          <button
            className="btn btn-primary btn-submit text-md"
            onClick={(e) => signUpHandler(e)}
          >
            Signup
          </button>
        </div>
        <div className="form-footer">
          <p className="paragraph">
            {" "}
            <Link to="/login" className="links">
              Already have an Account.{" "}
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export { Signup };
