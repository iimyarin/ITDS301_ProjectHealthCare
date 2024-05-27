import axios from 'axios';
import React, { useState } from 'react';
import "./DoctorForm.css";

function DoctorForm() {
    const [jsonData, setJsonData] = useState({
        resourceType: "ServiceRequest",
        id: "request",
        text: {
            div: "<div>Peter CHALMERS </div>"
        },
        contained: [{
            resourceType: "Specimen",
            id: "serum",
            type: {
                coding: [{
                    display: "Serum sample"
                }]
            },
            subject: {
                reference: "Patient/example"
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
            reference: "Practitioner/example"
        },
        subject: {
            reference: "Patient/example"
        },
        performer: [{
            reference: "Organization/example"
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
      setLoading(true);
      setSuccess(false);
      setError('');
  
      try {
          const response = await axios.post('/service-request', JSON.stringify(jsonData), {
              headers: {
                  'Content-Type': 'application/json'
              }
          });
          console.log(response.data);
          setSuccess(true);
      } catch (error) {
          console.error(error);
          setError('Failed to submit the form');
      } finally {
          setLoading(false);
      }
  };


    return (
        <div className="container mt-4">
            <h1 className="text-center mb-2">Doctor Form</h1>
            <form onSubmit={handleSubmit} className="card card-body shadow">

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
                <label className="label">
                    Display:
                    <input
                        name="codeDisplay"
                        value={jsonData.code.coding[0].display}
                        onChange={(e) => handleNestedChange(e, ['code', 'coding', 0, 'display'])}
                        //example - Cholesterol [Mass/volume] in Serum or Plasma
                        placeholder='Order Detail'
                    />
                </label>
                </div>

                <div className="input-group">
                <label className="label">
                    Requester Reference:
                    <input
                        name="requesterReference"
                        value={jsonData.requester.reference} //add practitioner reference to Practitioner/[ID]
                        onChange={(e) => handleNestedChange(e, ['requester', 'reference'])}
                        //placeholder="Practitioner ID"
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
                        //placeholder="Patient ID"
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
                        //placeholder="Organization ID"
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
                <button>Send</button>
            </form>

            
        </div>
    );
};

export default DoctorForm;