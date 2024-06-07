import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // คุณสามารถเพิ่มไฟล์ CSS สำหรับสไตล์

function Navbar() {
  return (
    // <nav className="navbar">
      
      <div className="navbar-menu">
        <div className="navbar-brand">
            <Link to="/" className="navbar-logo"> MyApp</Link>
        </div>
        <ul className="navbar-start">
          {/* <li className="navbar-item">
            <Link to="/patient">Patient Form</Link>
          </li> */}
          <li className="navbar-item">
            <Link to="/servicerequest">Service Request Form</Link>
          </li>
          <li className="navbar-item">
            <Link to="/requestlist">Service Request List</Link>
          </li>
          
          <li className="navbar-item">
            <Link to="/specimen">Specimen Form</Link>
          </li>
          <li className="navbar-item">
            <Link to="/specimenlist">Specimen List</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Observation">Observation Form</Link>
          </li>
          <li className="navbar-item">
            <Link to="/observationList">Observation List</Link>
          </li>
        </ul>
      </div>
    // </nav>
  );
}

export default Navbar;