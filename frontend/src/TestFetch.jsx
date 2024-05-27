import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <h1>Service Request</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TestFetch;