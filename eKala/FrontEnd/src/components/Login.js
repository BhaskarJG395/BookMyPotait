import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/login.css';
import { useLogin } from './LoginContext';
import userService from "../Services/UserService";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useLogin(); // Now only using login function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validate = async (e) => {
    e.preventDefault();
  
    try {
      const isPasswordCorrect = await userService.checkPassword(email, password);
  
      if (isPasswordCorrect) {
        alert('Login successful!   \nclick ok to go to home page.');
        login(); // Call login function from LoginContext.js
        navigate("/"); // Redirect to the homepage
      } else {
        alert('Incorrect credentials.');
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-out-container">
      <div className="container text-center col-6">
        <div className="row">
          <div className="col left-div-login">
            <h1><strong>Login here</strong></h1>
            <form className="login-form" onSubmit={validate}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>{" "}
              <button type="reset" className="btn btn-dark">
                Clear form
              </button>
            </form>
            <label>
              <strong>New here? Register here </strong>
            </label>
            <NavLink to="/register" className={'col'}>
              <button type="button" className="btn btn-success">
                click here
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <NavLink to="/">
        <button type="button" className="btn btn-dark">
          Back to home page
        </button>
      </NavLink>
    </div>
  );
}
