import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/login.css';
import UserService from '../services/UserService';

export default function Login() {
  //for backend
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    UserService.getAllUsers()
    .then((result)=>{
      console.log(result);
      setUsers([...result.data])
    })
  },[])

  //from the form
  const [loginFormEmail, setEmail] = useState('');
  const [loginFormPassword, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setSelectedRole(e.target.value);
  //checking email

  function checkEmail() {
    for (var u1 of users) {
      if (u1.email === loginFormEmail) {
        return u1.id;   
      }
    }
    return 0;
  }
  //checking password
  function checkPassword(){
    for( var u2 of users){
      if(u2.password===loginFormPassword && u2.id===checkEmail()){
        return true
      }
    }
    return false;
  }
  
  const validate = (e) => {
    e.preventDefault();
    // Perform validation
    if (checkEmail()) {
      if (checkPassword()) {
        if (selectedRole === 'user' || selectedRole === 'artist') {
          // Validation successful
          alert('Login successful!');
          // Redirect or perform further actions here
          e.target.submit();
        } else {
          alert('You have to choose a role: user or artist.');
        }
      } else {
        alert('Password is wrong.');
      }
    } else {
      alert('Email is wrong.');
    }
  };

  return (
    <div className="login-out-container">
      <div className="container text-center">
        <div className="row">
          <div className="col left-div-login">
            <h1><strong>Login here</strong></h1>
            <form action="/"  className="login-form" onSubmit={validate}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" value={loginFormEmail} onChange={handleEmailChange} aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" value={loginFormPassword} onChange={handlePasswordChange} required />
              </div>
              
              <div className="mb-3 form-check">
                <label className="form-check-label">Login as____</label>{" "}
                <input type="radio" name="loginRole" id="userLoginCheckbox" value="user" onChange={handleRoleChange} />
                <label htmlFor="userLoginCheckbox">User</label>
                <input type="radio" name="loginRole" id="artistLoginCheckbox" value="artist" onChange={handleRoleChange} />
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
