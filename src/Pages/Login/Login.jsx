import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/Index";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { loginFormHandler, error } = useAuthContext();

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    loginFormHandler(formData);
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={(e) => loginSubmitHandler(e)}>
        <div className="form-header">
          <h2 className="form-heading">Login</h2>
        </div>

        <div className="input-row">
          <label className="input-label form-label">Email: </label>
          <input
            type="text"
            placeholder="Enter email"
            className="input primary-input"
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, email: event.target.value }))
            }
            autoComplete="true"
            value={formData.email}
          />

          <p className="text-sm error">{error}</p>
        </div>

        <div className="input-row">
          <label className="input-label form-label">
            Password: <span className="required">*</span>
          </label>
          <input
            type="password"
            placeholder="******"
            className="input required-input form-password-input"
            required
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, password: event.target.value }))
            }
            autoComplete="true"
            value={formData.password}
          />
        </div>

        <div className="input-row">
          <label className="input-label">
            <input type="checkbox" className="input checkbox-input" />
            <span className="checkbox-text">Remember me</span>
          </label>
        </div>

        <div className="input-row">
          <button className="btn btn-primary btn-submit text-md">Login</button>
          <p
            className="text-credential center text-sm"
            onClick={() =>
              setFormData({
                email: "pritamvr9@gmail.com",
                password: "pritam123",
              })
            }
          >
            Login with Test Credential
          </p>
        </div>

        <div className="form-footer">
          <p className="paragraph">
            <Link to="/signup" className="links">
              Create an Account.
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
