import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import DoctorForm from "./DoctorForm.jsx"
import ObservationForm from './ObservationForm.jsx'
// import PatientForm from './Patientform.jsx'
import ServiceRequestList from './list/ServiceRequestList.jsx'
import Home from './Home.jsx'
import ObservationList from './list/ObservationList.jsx'
import SpecimenForm from './SpecimenForm.jsx'
import LabTestList from './list/LabTestList.jsx'
import SpecimenList from './list/SpecimenList.jsx'


import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <Router>
    {/* <Navbar /> */}
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/patient" element={<PatientForm />} /> */}
        <Route path="/ServiceRequest" element={<DoctorForm />} />
        <Route path="/Observation" element={<ObservationForm />} />
        <Route path="/requestlist" element={<ServiceRequestList />} />
        <Route path="/observationList" element={<ObservationList />} />
        <Route path="/specimen" element={<SpecimenForm />} />
        <Route path="/specimenlist" element={<SpecimenList />} />
        <Route path="/lablist" element={<LabTestList/>} />
        <Route path="/lablist/:id" element={<LabTestList/>} />
      </Routes>
    </div>
  </Router>
</React.StrictMode>
);