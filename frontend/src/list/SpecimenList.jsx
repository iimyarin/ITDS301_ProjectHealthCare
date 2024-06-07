import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';

function SpecimenList() {
    const [specimenLists, setSpecimenList] = useState([]);

    useEffect(() => {
        fetchSpecimenList();
    }, []);

    const fetchSpecimenList = async () => {
        try {
            const response = await axios.get("http://localhost:8080/fhir/Specimen");
            setSpecimenList(response.data.entry || []);
        } catch (error) {
            console.error("Error fetching Specimen List data:", error);
        }
    };

    return (
        <div>
            <Navbar /> {}
            <div className="container mt-5">
                <h1 className="text-center mb-4">Specimen List</h1>
                <form className="card card-body shadow">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Specimen ID</th>
                                <th>Status</th>
                                {/* <th>Type Code</th>
                                <th>Type Name</th> */}
                                <th>Subject ID</th>
                                <th>Subject Name</th>
                                <th>Identifier Value</th>
                                <th>Description</th>
                                <th>Container Type</th>
                                <th>Capacity Value</th>
                                <th>Specimen Quantity Value</th>
                                <th>Note</th>
                            </tr>
                        </thead>
                        <tbody>
                            {specimenLists.map(entry => {
                                const specimen = entry.resource;
                                return (
                                    <tr key={specimen.id}>
                                        <td>{specimen.id}</td>
                                        <td>{specimen.status}</td>
                                        {/* <td>{specimen.type?.coding?.[0]?.code}</td>
                                        <td>{specimen.type?.coding?.[0]?.display}</td> */}
                                        <td>{specimen.subject?.reference?.split('/')[1]}</td>
                                        <td>{specimen.subject?.display}</td>
                                        <td>{specimen.container?.[0]?.identifier?.[0]?.value}</td>
                                        <td>{specimen.container?.[0]?.description}</td>
                                        <td>{specimen.container?.[0]?.type?.text}</td>
                                        <td>{specimen.container?.[0]?.capacity?.value}</td>
                                        <td>{specimen.container?.[0]?.specimenQuantity?.value}</td>
                                        <td>{specimen.note?.[0]?.text}</td>
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

export default SpecimenList;
