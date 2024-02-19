import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/login.css';
export default function Login() {
  return (
    <div className="login-out-container">
      <div className="container text-center">
        <div className="row">
          <div className="col left-div-login">
            <h1><strong>Login here</strong></h1>
            <form action="/"  className="login-form">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="email"  aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password"  required />
              </div>
              
              <div className="mb-3 form-check">
                <label className="form-check-label">Login as____</label>{" "}
                <input type="radio" name="loginRole" id="userLoginCheckbox" value="user" />
                <label htmlFor="userLoginCheckbox">User</label>
                <input type="radio" name="loginRole" id="artistLoginCheckbox" value="artist"  />
                <label htmlFor="artistLoginCheckbox">Artist</label>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>{" "}
              <button type="reset" className="btn btn-dark">
                Clear form
              </button>
            </form>
            <label>
              <strong>New User/Artist then</strong>
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