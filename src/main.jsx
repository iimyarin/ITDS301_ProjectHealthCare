import React from 'react'
import ReactDOM from 'react-dom/client'
import PatientForm from './Patientform.jsx'
import LabForm from "./Labform.jsx"
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/patient" element={<PatientForm />} />
        <Route path="/lab" element={<LabForm />} />
      </Routes>
    </React.StrictMode>
  </Router>
);
