import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import './ObservationList.css'

function ObservationList() {
    const [observationLists, setObservationList] = useState([]);

    useEffect(() => {
        fetchObservationList();
    }, []);

    const fetchObservationList = async () => {
        try {
            const response = await axios.get("http://localhost:8080/fhir/Observation");
            setObservationList(response.data.entry || []);
        } catch (error) {
            console.error("Error fetching Observation data:", error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h1 className="text-center mb-4">Observation List</h1>
                <form className="card card-body shadow">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Observation ID</th>
                                <th>Subject ID</th>
                                <th> Subject Name</th>
                                <th>Specimen ID</th>
                                <th>Lab test</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {observationLists.map(entry => {
                                const observation = entry.resource;
                                return (
                                    <tr key={observation.id}>
                                        <td>{observation.id}</td>
                                        <td>{observation.subject?.reference?.split('/')[1] || ''}</td>
                                        <td>{observation.subject.display}</td>
                                        <td>{observation.specimen?.reference?.split('/')[1] || ''}</td>
                                        <td>
                                            <Link to={`/lablist/${observation.id}`}>View Details</Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default ObservationList;
