import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/registration.css"
import UserService from "../services/UserService";

export default function Registration(props) {
  return (
    <div>
      <div className='registration-out-container'>
        <div className="container registration-in-container">
        <form action="/login" className="container registration-form-container" >
          <h1 style={{color:"white"}}><storong>Registration here</storong></h1>
          {/* Row 1 */}
          <div className="row">
            <div className="col-6">
              <label htmlFor="first_name">First Name</label>
              <input type="text" className="form-control" name="first_name" id="first_name" placeholder="Enter first name" required />
            </div>
            <div className="col-6">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Enter last name" required/>
            </div>
          </div>
          {/* Row 2 */}
          <div className="row">
            <div className="col-6">
              <label htmlFor="mobile_no">Mobile No</label>
              <input type="number" className="form-control" name="mobile_no" id="mobile_no" placeholder="Enter mobile number" />
              <p id="errmobile_no" className='text-danger'></p>
            </div>
            <div className="col-6">
              <label htmlFor="role">Select a Role</label>
              <select className="col-12 custom-select" name="role" id="role" aria-label="Select role" >
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
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
              <p id="errEmail" className='text-danger'></p>
            </div>
          </div>
          {/* Row 4 */}
          <div className="row">
            <div className="col-6">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" />
              <p id="errPass" className='text-danger'></p>
            </div>
            <div className="col-6">
              <label htmlFor="cpassword" className="form-label">Confirmed Password</label>
              <input type="password" className="form-control" id="cpassword" placeholder="Confirm password" />
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