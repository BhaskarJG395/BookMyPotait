import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/registration.css";

function UpdateArt(props) {
  const [aName, setAName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState("");
  const [aType, setAType] = useState("");
  const [fileError, setFileError] = useState("");
  const [descError, setDescError] = useState("");

  const handleANameChange = (e) => setAName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleDescChange = (e) => {
    const description = e.target.value;
    if (description.length <= 50) {
      setDesc(description);
      setDescError("");
    } else {
      setDescError("Description must be at most 50 characters long.");
    }
  };
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleATypeChange = (e) => setAType(e.target.value);

  const validate = (e) => {
    e.preventDefault();
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    const selectedFile = e.target.email.files[0];

    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      // File format is valid, submit the form
      e.target.submit();
    } else {
      // File format is invalid, set error message
      setFileError("Please select a valid JPG, JPEG, or PNG image file.");
    }
  };

  return (
    <div>
      <div className="registration-out-container">
        <div className="container registration-in-container">
          <form
            action="/artList"
            className="container registration-form-container"
            onSubmit={validate}
          >
            <h1 style={{ color: "white" }}>
              <storong>Add New Art Here</storong>
            </h1>
            {/* Row 1 */}
            <div className="row">
              <div className="col-6">
                <label htmlFor="aName">Art Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="aName"
                  id="aName"
                  placeholder="Enter art name here."
                  value={aName}
                  onChange={handleANameChange}
                  required
                />
              </div>
              <div className="col-6">
                <label htmlFor="price">Price (in Indian Rs/-)</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  id="price"
                  placeholder="Enter price of art here"
                  value={price}
                  onChange={handlePriceChange}
                  required
                />
              </div>
            </div>
            {/* Row 2 */}
            <div className="row">
              <div className="col-6">
                <label htmlFor="desc">Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="desc"
                  id="desc"
                  placeholder="write description within 50 char"
                  required
                  value={desc}
                  onChange={handleDescChange}
                />
                <p style={{ color: "black", fontSize: "12px" }}>
                  {50 - desc.length} characters left
                </p>
                {descError && (
                  <p style={{ color: "red" }}>{descError}</p>
                )}
              </div>
              <div className="col-6">
                <label htmlFor="role">Art Type</label>
                <select
                  className="col-12 custom-select"
                  name="aType"
                  id="aType"
                  aria-label="Select role"
                  value={aType}
                  onChange={handleATypeChange}
                >
                  <option value="">------------ Select one role</option>
                  <option value="self">Self-Portrait</option>
                  <option value="conceptual">Conceptual-Portrait</option>
                  <option value="traditional">Traditonal-Portrait</option>
                  <option value="half">Half-length-Portrait</option>
                  <option value="candid">Candid-Portrait</option>
                </select>
                <p id="errRole" className="text-danger"></p>
              </div>
            </div>
            {/* Row 3 */}
            <div className="row">
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Art image
                </label>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {fileError && (
                  <p style={{ color: "red" }}>{fileError}</p>
                )}
              </div>
            </div>
            {/* Row 4 */}
            <div className="row"></div>
            {/* Row 5 */}
            <div className="row">
              <div className="col-12">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>{" "}
                <button type="reset" className="btn btn-secondary">
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateArt;
