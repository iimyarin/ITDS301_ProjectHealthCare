import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./ServiceRequestList.css";
import Navbar from '../Navbar';

function ServiceRequestList() {
    const [serviceRequests, setServiceRequests] = useState([]);

    useEffect(() => {
        fetchServiceRequests();
    }, []);

    const fetchServiceRequests = async () => {
        try {
            // โหลดข้อมูลจากเซิร์ฟเวอร์
            const response = await axios.get("http://localhost:8080/fhir/ServiceRequest");
            setServiceRequests(response.data.entry || []); // อัพเดต state ด้วยข้อมูลที่ได้รับ (ตรวจสอบโครงสร้าง JSON ที่ได้รับ)
        } catch (error) {
            console.error("Error fetching Service Request data:", error);
        }
    };

    return (
        <div>
        <Navbar /> {}
        <div className="container mt-5">
            <h1 className="text-center mb-4">Request List</h1>
            <form className="card card-body shadow">
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Priority</th>
                        <th>Specimen</th>
                        <th>Requested Test</th>
                        <th>Requester</th>
                        <th>Subject</th>
                        <th>Performer</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {serviceRequests.map(entry => {
                        const serviceRequest = entry.resource; // ปรับการเข้าถึงข้อมูลตามโครงสร้าง JSON
                        return (
                            <tr key={serviceRequest.id}>
                                <td>{serviceRequest.id}</td>
                                <td>{serviceRequest.category?.[0]?.coding?.[0]?.display}</td>
                                <td>{serviceRequest.priority}</td>
                                <td>{serviceRequest.contained[0].type.coding[0].display}</td>
                                <td>{serviceRequest.code?.coding?.[0]?.display}</td>
                                <td>{serviceRequest.requester?.reference}</td>
                                <td>{serviceRequest.subject?.reference}</td>
                                <td>{serviceRequest.performer?.[0]?.reference}</td>
                                <td>{serviceRequest.note?.[0]?.text}</td>
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

export default ServiceRequestList;
