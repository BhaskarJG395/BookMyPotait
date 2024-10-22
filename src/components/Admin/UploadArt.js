import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/registration.css";
import "../../css/card-body.css";
import ArtService from "../../Services/ArtService";
import loadingGif from "../../image/loading.gif";

function UpdateArt(props) {
  const navigate = useNavigate();
  const [artName, setartName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setdescription] = useState("");
  const [artType, setartType] = useState("");
  const [descriptionError, setdescriptionError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleartNameChange = (e) => setartName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handleartTypeChange = (e) => setartType(e.target.value);

  const handledescriptionChange = (e) => {
    const descriptionription = e.target.value;
    if (descriptionription.length <= 50) {
      setdescription(descriptionription);
      setdescriptionError("");
    } else {
      setdescriptionError("descriptionription must be at most 50 characters long.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const art = { artName, description, artType, quantity, price };
    setLoading(true); // Set loading to true when making the request
    try {
        console.log(art);
        const response = await ArtService.addNewArt(art); // Adjust service method if needed
        console.log(response);
        
        // Assuming response.data contains the ID
        const artId = response.data;
        localStorage.setItem("artIdTemp", artId); // Store the ID in localStorage
        // Navigate to the upload page
        navigate("/fileupload");
    } catch (error) {
        console.error("Error adding new art:", error);
    } finally {
        setLoading(false); // Set loading to false when the request is completed (either success or failure)
    }
};


  return (
    <div>
      {loading ? (
        <>
          <img src={loadingGif} alt="Loading..." /> uploading is being processed........
        </>
      ) : (
        <div className="registration-out-container">
          <div className="container registration-in-container">
            <form
              className="container registration-form-container"
              onSubmit={handleSubmit}
            >
              <h1 style={{ color: "white" }}>
                <strong>Add New Art Here</strong>
              </h1>
              {/* Row 1 */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="artName">Art Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="artName"
                    id="artName"
                    placeholder="Enter art name here."
                    value={artName}
                    onChange={handleartNameChange}
                    required
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="description">descriptionription</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    id="description"
                    placeholder="Write descriptionription within 50 chars"
                    value={description}
                    onChange={handledescriptionChange}
                    required
                  />
                  <p style={{ color: "black", fontSize: "12px" }}>
                    {50 - description.length} characters left
                  </p>
                  {descriptionError && <p style={{ color: "red" }}>{descriptionError}</p>}
                </div>
              </div>
              {/* Row 2 */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="artType">Art Type</label>
                  <select
                    className="col-12 custom-select"
                    name="artType"
                    id="artType"
                    aria-label="Select art type"
                    value={artType}
                    onChange={handleartTypeChange}
                    required
                  >
                    <option value="">------------ Select one type</option>
                    <option value="self">Self-Portrait</option>
                    <option value="conceptual">Conceptual-Portrait</option>
                    <option value="traditional">Traditional-Portrait</option>
                    <option value="half">Half-length-Portrait</option>
                    <option value="candid">Candid-Portrait</option>
                  </select>
                </div>
                <div className="col-6">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="text"
                    className="form-control"
                    name="quantity"
                    id="quantity"
                    placeholder="Enter quantity of art here"
                    value={quantity}
                    onChange={handleQuantityChange}
                    required
                  />
                </div>
              </div>
              {/* Row 3 */}
              <div className="row">
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
                {/* File upload removed */}
              </div>
              {/* Row 4 */}
              <div className="row"></div>
              {/* Row 5 */}
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-success">
                    Next
                  </button>{" "}
                  <button type="reset" className="btn btn-secondary">
                    Clear
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateArt;
