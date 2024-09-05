import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/registration.css";
import UserService from "../Services/UserService";
import loadingGif from "../image/loading.gif";

function Registration(props) {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [adminExists, setAdminExists] = useState(false);

  useEffect(() => {
    const checkAdminExists = async () => {
      try {
        const exists = await UserService.checkAdminExists();
        setAdminExists(exists); // Assuming exists is a boolean
      } catch (error) {
        console.error("Error checking if admin exists:", error);
      }
    };

    checkAdminExists();
  }, []);

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleMobileNoChange = (e) => setMobileNo(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleCPasswordChange = (e) => setCPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      const user = { firstName, lastName, role, mobileNo, email, password };
      console.log(user);
      setLoading(true);
      try {
        const response = await UserService.addNewUser(user);
        console.log(response.data);
        navigate("/login");
      } catch (error) {
        console.error("Error adding new user:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Validation functions
  const validateEmail = () => {
    const regEmail = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?:com|in|org|microsoft|co.in)$/;
    if (regEmail.test(email)) {
      document.getElementById("errEmail").innerHTML = "";
      return true;
    }
    document.getElementById("errEmail").innerHTML = "Enter a valid email, e.g., xyz123@gmail.com";
    return false;
  };

  const validatePassword = () => {
    const regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()":<>?]){8,}/;
    if (regPass.test(password)) {
      document.getElementById("errPass").innerHTML = "";
      return true;
    }
    document.getElementById("errPass").innerHTML = "Password must include at least one lowercase letter, one uppercase letter, one number, one symbol, and be at least 8 characters long.";
    return false;
  };

  const validateConfirmedPassword = () => {
    if (password === cpassword) {
      document.getElementById("errcPass").innerHTML = "";
      return true;
    }
    document.getElementById("errcPass").innerHTML = "Password and confirmed password do not match.";
    return false;
  };

  const validateMobileNo = () => {
    if (mobileNo.trim().length === 10) {
      document.getElementById("errMobileNo").innerHTML = "";
      return true;
    }
    document.getElementById("errMobileNo").innerHTML = "Enter a 10-digit mobile number.";
    return false;
  };

  const validateRole = () => {
    if (role === "artist" || role === "user" || (!adminExists && role === "admin")) {
      document.getElementById("errRole").innerHTML = "";
      return true;
    }
    document.getElementById("errRole").innerHTML = "Select at least one role.";
    return false;
  };

  const validate = () => {
    const f1 = validateEmail();
    const f2 = validatePassword();
    const f3 = validateConfirmedPassword();
    const f4 = validateMobileNo();
    const f5 = validateRole();
    return f1 && f2 && f3 && f4 && f5;
  };

  return (
    <div>
      {loading ? (
        <>
          <img src={loadingGif} alt="Loading..." /> Registration is being processed........
        </>
      ) : (
        <div className="registration-out-container">
          <div className="container registration-in-container">
            <form className="container registration-form-container" onSubmit={handleSubmit}>
              <h1 style={{ color: "white" }}>Registration Here</h1>
              {/* Row 1 */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" name="firstName" id="firstName" placeholder="Enter first name" value={firstName} onChange={handleFirstNameChange} required />
                </div>
                <div className="col-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Enter last name" value={lastName} onChange={handleLastNameChange} required />
                </div>
              </div>
              {/* Row 2 */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="mobileNo">Mobile No</label>
                  <input type="number" className="form-control" name="mobileNo" id="mobileNo" placeholder="Enter mobile number" value={mobileNo} onChange={handleMobileNoChange} />
                  <p id="errMobileNo" className="text-danger"></p>
                </div>
                <div className="col-6">
                  <label htmlFor="role">Select a Role</label>
                  <select className="col-12 custom-select" name="role" id="role" aria-label="Select role" value={role} onChange={handleRoleChange}>
                    <option value="">------------ Select one role</option>
                    <option value="user">user</option>
                    <option value="artist">artist</option>
                    {!adminExists && <option value="admin">admin</option>} {/* Show admin option if admin does not exist */}
                  </select>
                  <p id="errRole" className="text-danger"></p>
                </div>
              </div>
              {/* Row 3 */}
              <div className="row">
                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                  <p id="errEmail" className="text-danger"></p>
                </div>
              </div>
              {/* Row 4 */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
                  <p id="errPass" className="text-danger"></p>
                </div>
                <div className="col-6">
                  <label htmlFor="cpassword" className="form-label">Confirmed Password</label>
                  <input type="password" className="form-control" id="cpassword" placeholder="Confirm password" value={cpassword} onChange={handleCPasswordChange} />
                  <p id="errcPass" className="text-danger"></p>
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
      )}
    </div>
  );
}

export default Registration;
