import React, { useState } from 'react';
import axios from 'axios';
import './DoctorForm.css'; // Assuming you have a CSS file for styling
import Navbar from './Navbar';

function SpecimenForm() {
    const initialFormData = {
        resourceType: 'Specimen',
        status: 'available',
        type: {
            coding: [
                {
                    system: 'http://snomed.info/sct',
                    code: '',
                    display: '-',
                },
            ],
        },
        subject: {
            display: '',
            reference: ""
        },
        container: [
            {
                identifier: [
                    {
                        value: 'Select Capacity Unit',
                    },
                ],
                description: '',
                type: {
                    text: '',
                },
                capacity: {
                    value: 0,
                    unit: 'mL',
                },
                specimenQuantity: {
                    value: 0,
                    unit: 'mL',
                },
            },
        ],
        note: [
            {
                text: '',
            },
        ],
    };

    const [jsonData, setJsonData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);

    const handleChange = (e, path) => {
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

    const handleFetchPatient = async (id) => {
        if (!id) return; // Avoid empty fetch
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8080/fhir/Patient/${id}`);
            if (response.status === 200) {
                const patient = response.data;
                const patientName = patient.name[0].text;
                setJsonData(prevState => ({
                    ...prevState,
                    subject: {
                        ...prevState.subject,
                        display: patientName,
                        reference: `Patient/${id}`,
                    }
                }));
            } else {
                console.error(`Error fetching patient: Status code ${response.status}`);
                alert(`Error fetching patient details: Status code ${response.status}`);
            }
        } catch (error) {
            console.error('Error fetching patient:', error);
            alert('Error fetching patient details');
        }
        setLoading(false);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/fhir/Specimen', jsonData);
            console.log(response.data); // Log the response from the backend
            alert('Specimen details saved successfully');
            setJsonData(initialFormData);
        } catch (error) {
            console.error('Error:', error);
            alert('Error saving Specimen Form');
        }
    };

    // Assuming jsonData contains the selected Type ID
    const selectedTypeId = jsonData.type.coding[0].code;

    // Mapping Type IDs to their respective names
    const typeMap = {
        "119349000": "Oral specimen",
        "76086005": "Nasopharyngeal specimen",
        "302810000000109": "Nasal specimen",
        "119342007": "Gastric specimen",
        "300176007": "Renal specimen",
        "122555007": "Venous blood specimen"
    };

    return (
        <div>
        <Navbar /> {}
        <div className="containermt-5">
            <h1 className="text-center mb-4">Specimen Form</h1>
            <form onSubmit={handleSubmit} className="card card-body shadow">
                {/* Resource Type */}
                <div className="input-group">
                <label className="label">
                    Resource Type:
                    <input
                        type="text"
                        value={jsonData.resourceType}
                        onChange={e => handleChange(e, ['resourceType'])}
                        disabled={true}
                    />
                </label>
                </div>
            

                {/* Status */}
                <div className="input-group">
                    <label className="label">
                    Status:
                    <select
                        type="text"
                        value={jsonData.status}
                        onChange={e => handleChange(e, ['status'])}
                        required
                    >
                        <option value="">Select Status</option>
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                    </select>
                </label>
                </div>
                

                {/* Type */}
                <div className="input-group">
                    <label className="label">
                    Type Code:
                    <input
                        type="text"
                        value={selectedTypeId}
                        onChange={e => handleChange(e, ['type', 'coding', 0, 'code'])}
                        placeholder="code"
                    />
                </label>
                </div>
                
                <div className="input-group">
                    <label className="label">
                    Type Name:
                    <input
                        type="text"
                        value={typeMap[selectedTypeId] || jsonData.type.coding[0].display}
                        onChange={e => handleChange(e, ['type', 'coding', 0, 'display'])}
                        disabled={true}
                    />
                </label>
                </div>
                

                {/* Subject */}
                <div className="input-group">
                    <label className="label">
                    Subject ID:
                    <input
                        type="text"
                        value={jsonData.subject.reference.split('/')[1] || ''}
                        onChange={e => {
                            const id = e.target.value;
                            handleChange(e, ['subject', 'reference']);
                            handleFetchPatient(id);
                        }}
                        placeholder="id"
                    />
                </label>
                </div>
                

                <div className="input-group">
                    <label className="label">
                    Subject Name:
                    <input
                        type="text"
                        value={jsonData.subject.display}
                        disabled={true}
                    />
                </label>
                </div>
              

                {/* Container */}
                {jsonData.container.map((container, index) => (
                    <div key={index}>
                        <h3>Container</h3>
                        <div className="input-group">
                            <label className="label">
                            Identifier Value:
                            <select
                                type="text"
                                value={container.identifier[0].value}
                                onChange={e =>
                                    handleChange(e, ['container', index, 'identifier', 0, 'value'])
                                }
                                required
                            >
                                <option value="">Select Container</option>
                                <option value="Select Capacity Unit">Capacity Unit</option>
                            </select>
                            </label>
                        </div>
                        
                        <div className="input-group">
                            <label className="label">
                            Description:
                            <input
                                type="text"
                                value={container.description}
                                onChange={e => handleChange(e, ['container', index, 'description'])}
                                placeholder="Container Description"
                            />
                        </label>
                        </div>
                        
                        <div className="input-group">
                            <label className="label">
                            Type:
                            <select
                                type="text"
                                value={container.type.text}
                                onChange={e => handleChange(e, ['container', index, 'type', 'text'])}
                                required
                            >
                                <option value="">Select Container Type</option>
                                <option value="vacutainer">Vacutainer</option>
                            </select>
                        </label>
                        </div>
                        
                        <div className="input-group">
                            <label className="label">
                            Capacity Value (mL):
                            <input
                                type="number"
                                value={container.capacity.value}
                                onChange={e => handleChange(e, ['container', index, 'capacity', 'value'])}
                            />
                        </label>
                        </div>
                        
                        <div className="input-group">
                            <label className="label">
                            Specimen Quantity Value (mL):
                            <input
                                type="number"
                                value={container.specimenQuantity.value}
                                onChange={e => handleChange(e, ['container', index, 'specimenQuantity', 'value'])}
                            />
                        </label>
                        </div>
                    
                    </div>
                ))}
                <br />

                {/* Note */}
                {jsonData.note.map((note, index) => (
                    <div key={index}>
                        <h3>Note</h3>
                        <div className="input-group">
                            <label className="label">
                            Note Text:
                            <input
                                type="text"
                                value={note.text}
                                onChange={e => handleChange(e, ['note', index, 'text'])}
                                placeholder="Note"
                            />
                        </label>
                        </div>
                        
                    </div>
                ))}
                <br />

                <button type="submit" className="btn btn-primary w-100" disabled={loading}>Submit</button>
            </form>
        </div>
        </div>
    );
}

export default SpecimenForm;
