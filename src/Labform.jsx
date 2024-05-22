// src/LabForm.jsx
import React, { useState } from "react";
import Select from "react-select";
import "./LabForm.css";
 
function LabForm() {
  const [formData, setFormData] = useState({
    hnNumber: "",
    whiteBloodCells: "",
    redBloodCells: "",
    bloodTissue: "",
    bloodSugar: "",
    cholesterol: "",
    hemoglobin: "",
    diagnosticResults: "",
    supportingSubstances: "",
    toxins: "",
    otherFactors: "",
    analysis: ""
  });
 
  const handleChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(formData);
    alert("Lab results saved successfully");
 
    setFormData({
      hnNumber: "",
      whiteBloodCells: "",
      redBloodCells: "",
      bloodTissue: "",
      bloodSugar: "",
      cholesterol: "",
      hemoglobin: "",
      diagnosticResults: "",
      supportingSubstances: "",
      toxins: "",
      otherFactors: "",
      analysis: ""
    });
  };
 
  return (
<div className="container mt-5">
<h1 className="text-center mb-4">Lab Results Form</h1>
<form onSubmit={handleSubmit} className="card card-body shadow">
<div className="input-group">
<label htmlFor="hnNumber">HN:</label>
<input
            type="text"
            name="hnNumber"
            value={formData.hnNumber}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Hospital Number (HN)"
            required
          />
</div>
<div className="input-group">
<label htmlFor="Age">Age:</label>
<input
            type="text"
            name="Age"
            value={formData.Age}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Age"
          />
</div>
<div className="input-group">
          <label>Gender:</label>
          <div>
            <input
              type="radio"
              id="Male"
              name="Gender"
              value="Male"
              checked={formData.Gender === "Male"}
              onChange={handleChange}
            />
            
            <label htmlFor="Gender">M
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="Female"
              name="Gender"
              value="Female"
              checked={formData.Gender === "Female"}
              onChange={handleChange}
            />
            <label htmlFor="Female">F</label>
          </div>
        </div>
 
        <h2>Complete Blood (CBC)</h2>
<div className="input-group">
<label htmlFor="Hemoglobin">Hemoglobin (g/dl):</label>
<input
            type="text"
            name="Hemoglobin"
            value={formData.Hemoglobin}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Hemoglobin"
          />
</div>
<div className="input-group">
<label htmlFor="Leukocyte">Leukocyte (10^9/L):</label>
<input
            type="text"
            name="Leukocyte"
            value={formData.Leukocyte}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Leukocyte"
          />
</div>
<div className="input-group">
<label htmlFor="BloodSedimentationRate">Blood Sedimentation Rate (mm/1 hr):</label>
<input
            type="text"
            name="BloodSedimentationRate"
            value={formData.BloodSedimentationRate}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Blood Sedimentation Rate"
          />
</div>
<div className="input-group">
<label htmlFor="TrombositeAmount">Trombosite Amount (10^9/L):</label>
<input
            type="text"
            name="TrombositeAmount"
            value={formData.TrombositeAmount}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Trombosite Amount"
          />
</div>
<div className="input-group">
<label htmlFor="Hematocrite">Hematocrite (%):</label>
<input
            type="text"
            name="Hematocrite"
            value={formData.Hematocrite}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Hematocrite"
          />
</div>
<div className="input-group">
<label htmlFor="Erythrocyte">Erythrocyte (10^13/L):</label>
<input
            type="text"
            name="Erythrocyte"
            value={formData.Erythrocyte}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Erythrocyte"
          />
</div>
<div className="input-group">
<label htmlFor="MCV">MCV (Fl):</label>
<input
            type="text"
            name="MCV"
            value={formData.MCV}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="MCV"
          />
</div>
<div className="input-group">
<label htmlFor="MCH">MCH (Pg):</label>
<input
            type="text"
            name="MCH"
            value={formData.MCH}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="MCH"
          />
</div>
<div className="input-group">
<label htmlFor="MCHC">MCHC (g/dl):</label>
<input
            type="text"
            name="MCHC"
            value={formData.MCHC}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="MCHC"
          />
</div>
          <h2>Leukocytes type count</h2>
<div className="input-group">
<label htmlFor="Eosinophil">Eosinophil (%):</label>
<input
            type="text"
            name="Eosinophil"
            value={formData.Eosinophil}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Eosinophil"
          />
</div>
<div className="input-group">
<label htmlFor="Basophil">Basophil (%):</label>
<input
            type="text"
            name="Basophil"
            value={formData.Basophil}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Basophil"
          />
</div>
<div className="input-group">
<label htmlFor="Neutrophil">Neutrophil (%):</label>
<input
            type="text"
            name="Neutrophil"
            value={formData.Neutrophil}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Neutrophil"
          />
</div>
<div className="input-group">
<label htmlFor="Lymphocytes">Lymphocytes (%):</label>
<input
            type="text"
            name="Lymphocytes"
            value={formData.Lymphocytes}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Lymphocytes"
          />
</div>
<div className="input-group">
<label htmlFor="Monocytes">Monocytes (%):</label>
<input
            type="text"
            name="Monocytes"
            value={formData.Monocytes}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Monocytes"
          />
</div>
 
        <h2>Diagnostic Results</h2>
<div className="input-group">
<label htmlFor="diagnosticResults">Diagnostic Results:</label>
<textarea
            name="diagnosticResults"
            value={formData.diagnosticResults}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Diagnostic Results"
          />
</div>
<div className="input-group">
<label htmlFor="supportingSubstances">Supporting Substances:</label>
<textarea
            name="supportingSubstances"
            value={formData.supportingSubstances}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Supporting Substances"
          />
</div>
<div className="input-group">
<label htmlFor="toxins">Toxins:</label>
<textarea
            name="toxins"
            value={formData.toxins}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Toxins"
          />
</div>
<div className="input-group">
<label htmlFor="otherFactors">Other Factors:</label>
<textarea
            name="otherFactors"
            value={formData.otherFactors}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Other Factors"
          />
</div>
 
        <h2>Analysis and Explanation of Results</h2>
<div className="input-group">
<label htmlFor="analysis">Analysis:</label>
<textarea
            name="analysis"
            value={formData.analysis}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Analysis and Explanation"
          />

<label htmlFor="appointmentDate">วันที่บันทึก:</label>
        <input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
        />
        <label htmlFor="appointmentTime">เวลาที่บันทึก:</label>
        <input
          type="time"
          name="appointmentTime"
          value={formData.appointmentTime}
          onChange={handleChange}
        />
</div>
 
        <button type="submit" className="btn btn-primary w-100">Submit</button>
</form>
</div>
  );
}
 
export default LabForm;