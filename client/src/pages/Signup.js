import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser, { error }] = useMutation(ADD_USER);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container mt-10">
      <div className="row">
        <div className="col-lg-3 col-md-2"></div>
        <div
          className="col-lg-6 col-md-8 login-box"
          style={{
            background: "linear-gradient(30deg, #FFff, #ffe5d9)",
          }}
        >
          <div className="col-lg-12 login-form">
            <h1 className="text-center" style={{ color: "darkgrey" }}>
              Sign Up
            </h1>

            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-control-label">USERNAME</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="youremail@test.com"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-control-label">PASSWORD</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="******"
                  name="password"
                  onChange={handleChange}
                />
              </div>

              <div className="col-lg-12 loginbttm">
                <div className="col-lg-6 login-btm login-text">
                  {error && (
                    <p className="error-text">
                      An error occurred during signup.
                    </p>
                  )}
                </div>
                <div className="col-lg-6 login-btm login-button">
                  <button type="submit" className="btn btn-outline-primary">
                    SIGN UP
                  </button>
                </div>
              </div>
            </form>
          </div>
          <p className="mt text-center">
            {" "}
            Already have an account? <Link to="/login">Login</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
