import React from 'react';
import './CropPrediction.css'; // CSS styles separated for cleanliness

const CropPrediction = () => {
  return (
    <div className="crop-body">
      <div className="form-container">
        <label>NITROGEN</label>
        <input type="number" placeholder="Enter nitrogen level" />

        <label>PHOSPHOROUS</label>
        <input type="number" placeholder="Enter phosphorus level" />

        <label>POTASSIUM</label>
        <input type="number" placeholder="Enter potassium level" />

        <label>PH</label>
        <input type="number" placeholder="Enter pH level" />

        <label>RAINFALL</label>
        <input type="number" placeholder="Enter rainfall in mm" />

        <label>STATE</label>
        <select>
          <option>Andhra Pradesh</option>
          <option>Karnataka</option>
          <option>Kerala</option>
          <option>Tamil Nadu</option>
          <option>Telangana</option>
        </select>

        <label>CITY</label>
        <select>
          <option>Select City</option>
          <option>Kadapa</option>
          <option>Nellore</option>
          <option>Anantapur</option>
          <option>Kurnool</option>
          <option>Tirupathi</option>
          <option>Chittor</option>
          <option>Madurai</option>
          <option>Coimbatore</option>
          <option>Chikkamangaluru</option>
          <option>Mysuru</option>
          <option>Kochi</option>
          <option>Palakkad</option>
          <option>Thiruvananthapuram</option>
          <option>Kodaikanal</option>
          <option>Thanjavur</option>
          <option>Warangal</option>
          <option>Nizamabad</option>
          <option>Hyderabad</option>
          <option>Khammam</option>
        </select>

        <button className="predict-btn">Predict</button>
      </div>
    </div>
  );
};

export default CropPrediction;
