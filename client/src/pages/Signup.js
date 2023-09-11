import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

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
    <div className="container my-1">
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
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName" className="form-control-label">First Name:</label>
          <input
            placeholder="First Name"
            className="form-control"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName" className="form-control-label">Last Name:</label>
          <input
            placeholder="Surname"
            className="form-control"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email" className="form-control-label">Email:</label>
          <input
            placeholder="youremail@test.com"
            className="form-control"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd" className="form-control-label">Password:</label>
          <input
            placeholder="******"
            className="form-control"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="col-lg-6 login-btm login-button">
          <button type="submit" className="btn btn-outline-primary">SIGN UP</button>
        </div>
      </form>
      <p className="mt text-center">
                   {" "}
            Already have an account? <Link to="/login">Login</Link>{" "}
          </p>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Signup;
