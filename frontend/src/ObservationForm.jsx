import React, { useState } from 'react';
import "./DoctorForm.css";

function ObservationForm() {
    const [observationData, setObservationData] = useState({
        id: "rhstatus",
        category: "laboratory",
        code: "88027-8",
        subject: "Patient/infant",
        effectiveDateTime: "2018-03-11T16:07:54+00:00",
        valueCodeableConcept: "165747007",
        status: "final"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setObservationData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
            <h2>Observation Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    ID:
                    <input
                        type="text"
                        name="id"
                        value={observationData.id}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Category:
                    <input
                        type="text"
                        name="category"
                        value={observationData.category}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Code:
                    <input
                        type="text"
                        name="code"
                        value={observationData.code}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Subject:
                    <input
                        type="text"
                        name="subject"
                        value={observationData.subject}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Effective Date Time:
                    <input
                        type="datetime-local"
                        name="effectiveDateTime"
                        value={observationData.effectiveDateTime}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Value Codeable Concept:
                    <input
                        type="text"
                        name="valueCodeableConcept"
                        value={observationData.valueCodeableConcept}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Status:
                    <input
                        type="text"
                        name="status"
                        value={observationData.status}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ObservationForm;