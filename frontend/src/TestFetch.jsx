import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const TestFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/fhir/ServiceRequest')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching the data', error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar /> {}
      <div className="container mt-5">
        <h1 className="text-center mb-4">Service Request</h1>
        <form className="card card-body shadow">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </form>
        
      </div>
    </div>
  );
};

export default TestFetch;