import axios from 'axios';
import React, { useState } from 'react';


const DiagnosticReportForm = () => {
    const [formData, setFormData] = useState({
        identifierSystem: 'http://hospital.org/reports',
        identifierValue: '',
        resultCodeSystem: 'http://loinc.org',
        resultCode: '',
        resultDisplay: '',
        patientReference: 'Patient/67890',
        observationReference: 'Observation/30358'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const diagnosticReport = {
            "resourceType": "DiagnosticReport",
            "identifier": [
            {
                "system": "http://hospital.org/reports",
                "value": formData.identifierValue
            }
        ],
            "status": "final",
            "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": formData.resultCode,
                    "display": formData.resultDisplay
                }
            ]
        },
            "subject": {
                "reference": "Patient/"+formData.patientReference
            },
            "result": [
            {
                "reference": "Observation/"+formData.observationReference
            }
            ]
        }

        try {
            await axios.post('/diagnostic-report', diagnosticReport);
            alert('Diagnostic Report sent successfully!');
        } catch (error) {
            console.error('Error sending Diagnostic Report:', error);
            alert('Failed to send Diagnostic Report. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Identifier Value:
                <input
                    type="text"
                    name="identifierValue"
                    value={formData.identifierValue}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Result Code:
                <input
                    type="text"
                    name="resultCode"
                    value={formData.resultCode}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Result Display:
                <input
                    type="text"
                    name="resultDisplay"
                    value={formData.resultDisplay}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default DiagnosticReportForm;
