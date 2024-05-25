import React, { useState } from "react";
import "./DoctorForm.css"; // Import the CSS file

function DoctorForm() {
  const [formData, setFormData] = useState({
    hnNumber: "",
    specimen: "",
    doctorName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(formData);
    alert("Form submitted successfully");

    setFormData({
      hnNumber: "",
      specimen: "",
      doctorName: "",
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Doctor Form</h1>
      <form onSubmit={handleSubmit} className="card card-body shadow">
        <div className="input-group">
          <label htmlFor="hnNumber">HN:</label>
          <input
            type="text"
            name="hnNumber"
            value={formData.hnNumber}
            onChange={handleChange}
            placeholder="Hospital Number (HN)"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="specimen">Specimen:</label>
          <select
            name="specimen"
            value={formData.specimen}
            onChange={handleChange}
            required
          >
            <option value="">Select Specimen</option>
            <option value="Blood Test 1">Blood Test 1</option>
            <option value="Blood Test 2">Blood Test 2</option>
            <option value="Blood Test 3">Blood Test 3</option>
            <option value="Blood Test 4">Blood Test 4</option>
            <option value="Blood Test 5">Blood Test 5</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="doctorName">Doctor Name:</label>
          <input
            type="text"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            placeholder="Doctor Name"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}

export default DoctorForm;
