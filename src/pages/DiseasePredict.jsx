import React, { useState } from "react";
import "./DiseasePredict.css";

const DiseasePredict = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("File uploaded successfully! (Backend integration needed)");
  };

  return (
    <div className="disease-container">
      <div className="header">
        <h1>Find out which disease has been caught by your plant</h1>
      </div>

      <div className="upload-box">
        <h3>Please upload the image</h3>
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleFileChange} required />
          <button type="submit">Upload</button>
        </form>

        {file && <p>Selected File: {file.name}</p>}
      </div>
    </div>
  );
};

export default DiseasePredict;
