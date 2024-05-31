import axios from 'axios';
import React, { useState } from 'react';
import "./DoctorForm.css";
import Navbar from './Navbar';

function DoctorForm() {
    const [jsonData, setJsonData] = useState({
        resourceType: "ServiceRequest",
        id: "request",
        text: {
            div: "<div></div>"
        },
        contained: [{
            resourceType: "Specimen",
            id: "specimen",
            type: {
                coding: [{
                    display: ""
                }]
            },
            subject: {
                reference: "Patient/"
            }
        }],
        status: "active",
        intent: "original-order",
        category: [{
            coding: [{
                display: "Laboratory procedure"
            }]
        }],
        priority: "",
        code: {
            coding: [{
                display: ""
            }]
        },
        requester: {
            reference: "Practitioner/"
        },
        subject: {
            reference: "Patient/"
        },
        performer: [{
            reference: "Organization/"
        }],
        note: [{
            text: ""
        }]
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setJsonData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Nested handler for deeper properties
    const handleNestedChange = (e, path) => {
        const { value } = e.target;
        setJsonData(prevState => {
            const newState = { ...prevState };
            let current = newState;
            for (let i = 0; i < path.length - 1; i++) {
                current = current[path[i]];
            } 
            current[path[path.length - 1]] = value;
            return newState;
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/fhir/ServiceRequest', jsonData); //change to local fhir later https://hapi.fhir.org/baseR4/ServiceRequest
            console.log(response.data);
            alert("Service Request sent successfully");
        } catch (error) {
            console.error("Error submit service request data:", error);
        }
    };


    return (
        <div>
            <Navbar /> {}
        <div className="containermt-5">
            <h1 className="text-center mb-4">Service Request Form</h1>
            <form onSubmit={handleSubmit} className="card card-body shadow ">
            <div className="form-group">
                <div className="input-group">
                <label className="label">
                    Category :
                    <input
                        name="categoryCodeDisplay"
                        value={jsonData.category[0].coding[0].display}
                        onChange={(e) => handleNestedChange(e, ['category', 0, 'coding', 0, 'display'])}
                        disabled={true}
                    />
                </label>
                </div>

                <div className="input-group">
                    <label>Priority:</label>
                    <select
                    name="priority"
                    value={jsonData.priority}
                    onChange={handleChange}
                    required
                    >
                        <option value="">Select Priority</option>
                        <option value="routine">Routine</option>
                        <option value="urgent">Urgent</option>
                        <option value="asap">Asap</option>
                        <option value="stat">Stat</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Specimen:</label>
                    <select
                    name="specimen"
                    value={jsonData.contained[0].type.coding[0].display}
                    onChange={(e) => handleNestedChange(e, ['contained', 0, 'type', 'coding', 0, 'display'])}
                    required
                    >
                        <option value="">Select Specimen</option>
                        <option value="serum">Serum</option>
                        <option value="plasma">Plasma</option>
                        <option value="whole blood">Whole Blood</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>What is being requested :</label>
                    <select
                    name="priority"
                    value={jsonData.code.coding[0].display}
                    onChange={(e) => handleNestedChange(e, ['code', 'coding', 0, 'display'])}
                    required
                    >
                        <option value="">Select Blood Test Type</option>
                        <option value="White blood cell count">White blood cell count</option>
                        <option value="Special blood coagulation test, explain by report">Special blood coagulation test, explain by report</option>
                        <option value="Blood unit collection for directed donation, donor">Blood unit collection for directed donation, donor</option>
                        <option value="DNA analysis, antenatal, blood">DNA analysis, antenatal, blood</option>
                        <option value="Blood coagulation panel">Blood coagulation panel</option>
                        <option value="Blood cell morphology">Blood cell morphology</option>
                        <option value="White blood cell histogram evaluation">White blood cell histogram evaluation</option>
                        <option value="Leukocyte poor blood preparation">Leukocyte poor blood preparation</option>

                    </select>
                </div>

                <div className="input-group">
                <label className="label">
                    Requester Reference: 
                    <input
                        name="requesterReference"
                        value={jsonData.requester.reference} //add practitioner reference to Practitioner/[ID]
                        onChange={(e) => handleNestedChange(e, ['requester', 'reference'])}
                    />
                </label>
                </div>

                <div className="input-group">
                <label className="label">
                    Subject Reference:
                    <input
                        name="subjectReference"
                        value={jsonData.subject.reference}  //add patient reference to Patient/[ID]
                        onChange={(e) => handleNestedChange(e, ['subject', 'reference'])}
                    />
                </label>
                </div>

                <div className="input-group">
                <label className="label">
                    Performer Reference:
                    <input
                        name="performerReference"
                        value={jsonData.performer[0].reference} //add Organization reference to Organization/[ID]
                        onChange={(e) => handleNestedChange(e, ['performer', 0, 'reference'])}
                    />
                </label>
                </div>

                <div className="input-group">
                <label className="label">
                    Note:
                    <input
                        name="note"
                        value={jsonData.note[0].text}
                        onChange={(e) => handleNestedChange(e, ['note', 0, 'text'])}
                    />
                </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
                </div>
            </form>

            
        </div>
    </div>
    );
};

export default DoctorForm;