import React, { useEffect, useState } from "react";
import ArtService from "../../Services/ArtService"; // Ensure the path is correct
import loadingGif from "../../image/loading.gif";
import { useNavigate } from "react-router-dom";

function UpdateArtFile() {
  const navigate = useNavigate();
    const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [loading, setLoading] = useState(false);
  const [idTemp, setIdTemp] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("artIdTemp"); // Retrieve artIdTemp from local storage
    if (id) {
      setIdTemp(id);
    }
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Check if the file type is valid
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (allowedTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        setFileError("");
      } else {
        // File type is not allowed
        setFileError("Please select a valid JPG, JPEG, or PNG image file.");
        setFile(null);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file && idTemp) {
      const formData = new FormData();
      formData.append("imageFile", file); // Ensure the key matches the backend controller parameter name
  
      setLoading(true); // Set loading to true when making the request
      try {
        const response = await ArtService.uploadImage(idTemp, formData); // Upload image with idTemp as the path variable
        console.log("File uploaded successfully:", response.data);
        alert("file uploaded successfully.");
        navigate("/profile");
        // Optionally handle response or provide user feedback
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setLoading(false); // Set loading to false when the request is completed (either success or failure)
      }
    } else {
      console.error("No file selected or art ID is missing.");
    }
  };
  
  

  return (
    <div>
      {loading ? (
        <>
          <img src={loadingGif} alt="Loading..." /> uploading is being processed...
        </>
      ) : (
        <div className="upload-file-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="file">Upload Art Image</label>
              <input
                type="file"
                className="form-control"
                id="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleFileChange}
                required
              />
              {fileError && <p style={{ color: "red" }}>{fileError}</p>}
            </div>
            <button type="submit" className="btn btn-primary">
              Upload
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default UpdateArtFile;
