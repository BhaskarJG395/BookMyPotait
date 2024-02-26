import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/registration.css"
import UserService from "../services/UserService";

export default function Registration(props) {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [mobile_no, setmobile_no] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [role, setRole] = useState("");
  
  //individual handle chainge are given below
  const handlefirst_nameChange = (e) => setfirst_name(e.target.value);
  const handlelast_nameChange = (e) => setlast_name(e.target.value);
  const handlemobile_noChange = (e) => setmobile_no(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleCPasswordChange = (e) => setCPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  //validation of email-----------------------------------------------------------------------------------
  function validateEmail(){
    var regEmail=/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?:com|in|org|microsoft|co.in)$/;
    if(regEmail.test(email)){
      document.getElementById("errEmail").innerHTML="";
      return true;
    }
    document.getElementById("errEmail").innerHTML="enter valid email, e.g: xyz123@gmail.com";
    return false;
  }
  //validation of password -------------------------------------------------------------------------------
  function validatePassword(){
    var regPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()":<>?]){8,}/
    if(regPass.test(password)){
      document.getElementById("errPass").innerHTML="";
      return true;
    }
    document.getElementById("errPass").innerHTML="enter atleast one lower case character,one upper casecharacter,one number ,one symbol and minimum length is 8 chatacter.";
    return false;
  }
  // validation of confirmed password -------------------------------------------------------------------
  function validateConfirmedPassword(){
    if(password===cpassword){
      document.getElementById("errcPass").innerHTML="";
      return true;
    }
    document.getElementById("errcPass").innerHTML="password and confirmed passwords are not matching.";
    return false;
  }
  //validation of mobile number --------------------------------------------------------------------------
  function validatemobile_no(){
    if(mobile_no.trim().length===10){
      document.getElementById("errmobile_no").innerHTML="";
      return true;
    }
    document.getElementById("errmobile_no").innerHTML="enter 10 digit mobile number .";
    return false;
  }
  //validation of role -----------------------------------------------------------------------------------
  function validateRole(){
    if(role==="artist" || role==="user"){
      document.getElementById("errRole").innerHTML="";
      return true;
    }
    document.getElementById("errRole").innerHTML="select atleast one role";
    return false;
  }
  //general validation ----------------------------------------------------------------------------------
  const validate = (e) => {
    e.preventDefault();

    var f1=validateEmail();
    var f2=validatePassword();
    var f3=validateConfirmedPassword();
    var f4=validatemobile_no();
    var f5=validateRole();
    var flag=f1 && f2 && f3 && f4 && f5;
    if(flag){
      alert("Successfully logged in, Now log in to get batter experience.");
      e.target.submit();
    }
  };

  return (
    <div>
      <div className='registration-out-container'>
        <div className="container registration-in-container">
        <form action="/login" className="container registration-form-container" onSubmit={validate}>
          <h1 style={{color:"white"}}><storong>Registration here</storong></h1>
          {/* Row 1 */}
          <div className="row">
            <div className="col-6">
              <label htmlFor="first_name">First Name</label>
              <input type="text" className="form-control" name="first_name" id="first_name" placeholder="Enter first name" value={first_name} onChange={handlefirst_nameChange} required />
            </div>
            <div className="col-6">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Enter last name" value={last_name} onChange={handlelast_nameChange} required/>
            </div>
          </div>
          {/* Row 2 */}
          <div className="row">
            <div className="col-6">
              <label htmlFor="mobile_no">Mobile No</label>
              <input type="number" className="form-control" name="mobile_no" id="mobile_no" placeholder="Enter mobile number" value={mobile_no} onChange={handlemobile_noChange} />
              <p id="errmobile_no" className='text-danger'></p>
            </div>
            <div className="col-6">
              <label htmlFor="role">Select a Role</label>
              <select className="col-12 custom-select" name="role" id="role" aria-label="Select role" value={role} onChange={handleRoleChange}>
                <option value="">------------ Select one role</option>
                <option value="artist">Artist</option>
                <option value="user">User</option>
              </select>
              <p id="errRole" className='text-danger'></p>
            </div>
          </div>
          {/* Row 3 */}
          <div className="row">
            <div className="col-12">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
              <p id="errEmail" className='text-danger'></p>
            </div>
          </div>
          {/* Row 4 */}
          <div className="row">
            <div className="col-6">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
              <p id="errPass" className='text-danger'></p>
            </div>
            <div className="col-6">
              <label htmlFor="cpassword" className="form-label">Confirmed Password</label>
              <input type="password" className="form-control" id="cpassword" placeholder="Confirm password" value={cpassword} onChange={handleCPasswordChange} />
              <p id="errcPass" className='text-danger'></p>
            </div>
          </div>
          {/* Row 5 */}
          <div className="row">
            <div className="col-12">
              <button type="submit" className="btn btn-success">Submit</button>{" "}
              <button type="reset" className="btn btn-secondary">Clear</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}