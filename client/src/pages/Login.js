import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";


function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
        <div  className="col-lg-3 col-md-2"></div>
        <div  
          className="col-lg-6 col-md-8 login-box"
          style={{
            background: "linear-gradient(30deg, #FFff, #ffe5d9)",
          }}
        >
          <div   className="col-lg-12 login-form">
            <h1 className="text-center" style={{ color: "darkgrey" }}>
              Login
            </h1>

            <form onSubmit={handleFormSubmit}>
              <div  className="form-group">
                <label className="form-control-label">EMAIL ADDRESS</label>
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
                      The provided credentials are incorrect
                    </p>
                  )}
                </div>
                <div className="col-lg-6 login-btm login-button">
                  <button type="submit" className="btn btn-outline-primary">
                    LOGIN
                  </button>
                </div>
              </div>
            </form>
          </div>
          <p className="mt text-center">
            {" "}
            Don't have an account? <Link to="/signup">Sign up here</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
