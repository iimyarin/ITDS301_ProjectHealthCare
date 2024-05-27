import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DoctorForm from "./DoctorForm.jsx"
import ObservationForm from './ObservationForm.jsx'
import PatientForm from './Patientform.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/patient" element={<PatientForm />} />
        <Route path="/ServiceRequest" element={<DoctorForm />} />
        <Route path="/Observation" element={<ObservationForm />} />
      </Routes>
    </React.StrictMode>
  </Router>
);
