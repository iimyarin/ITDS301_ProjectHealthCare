import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DiagnosticReportForm from './DiagnosticReport.jsx'
import DoctorForm from "./DoctorForm.jsx"
import LabForm from "./Labform.jsx"
import ObservationForm from './ObservationForm.jsx'
import PatientForm from './Patientform.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/patient" element={<PatientForm />} />
        <Route path="/lab" element={<LabForm />} />
        <Route path="/doctor" element={<DoctorForm />} />
        <Route path="/DiagnosticReport" element={<DiagnosticReportForm />} />
        <Route path="/Observation" element={<ObservationForm />} />
      </Routes>
    </React.StrictMode>
  </Router>
);
