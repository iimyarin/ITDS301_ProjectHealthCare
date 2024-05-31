import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';

function LabTestList() {
    const [labTestLists, setLabTestList] = useState([]);
    const [id, setId] = useState([]);

    useEffect(() => {
        if (!id) return("No data"); // ไม่มี id จะไม่ทำอะไร
        fetchLabTestList(id);
    }, [id]); // เพิ่ม id เป็น dependency ที่ใช้ตรวจสอบการเปลี่ยนแปลงของ id

    const fetchLabTestList = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/fhir/Observation/${id}`);
            setLabTestList(response.data.entry || []);
        } catch (error) {
            console.error("Error fetching Observation data:", error);
        }
    };

    const renderReferenceRange = (referenceRange) => {
        if (!referenceRange || referenceRange.length === 0) return '';
        const { low, high } = referenceRange[0];
        return `${low.value} - ${high.value} ${low.unit}`;
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // ดึงข้อมูลใหม่เมื่อส่งฟอร์ม
    //     fetchLabTestList(id);
    // };


    return (
        <div>
            <Navbar /> {}
            <div className="container mt-5">
                <h1 className="text-center mb-4">Hematology Table</h1>
                <form className="card card-body shadow">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Observation ID</th>
                                <th>Lab Test</th>
                                <th>Value</th>
                                <th>Unit</th>
                                <th>Reference Range</th>
                            </tr>
                        </thead>
                        <tbody>
                            {labTestLists.map(entry => {
                                const labTestList = entry.resource;

                                const getComponent = (text) => {
                                    if (labTestList && labTestList.component) {
                                        return labTestList.component.find(component => component.code.text === text);
                                    }
                                    return null; // หรือค่าที่คุณต้องการส่งกลับเมื่อไม่พบ component
                                };

                                const parameters = [
                                    { name: 'WBC (Leukocytes)', code: 'WBC', unit: '10^3/uL' },
                                    { name: 'RBC (Erythrocytes)', code: 'RBC', unit: '10^6/uL' },
                                    { name: 'HGB (Hemoglobin)', code: 'HGB', unit: 'g/dL' },
                                    { name: 'HCT (Hematocrit)', code: 'HCT', unit: '%' },
                                    { name: 'MCV (Mean Corpuscular Volume)', code: 'MCV', unit: 'fL' },
                                    { name: 'MCH (Mean Corpuscular Hemoglobin)', code: 'MCH', unit: 'pg' },
                                    { name: 'MCHC (Mean Corpuscular Hemoglobin Concentration)', code: 'MCHC', unit: 'g/dL' },
                                    { name: 'PLT (Platelets)', code: 'PLT', unit: '10^3/uL' },
                                    { name: 'Neutrophil', code: 'Neutrophil', unit: '%' },
                                    { name: 'Lymphocyte', code: 'Lymphocyte', unit: '%' },
                                    { name: 'Monocyte', code: 'Monocyte', unit: '%' },
                                    { name: 'Eosinophil', code: 'Eosinophil', unit: '%' },
                                    { name: 'Basophil', code: 'Basophil', unit: '%' },
                                    { name: 'RBC Morphology', code: 'RBC Morphology', unit: '' },
                                    { name: 'Platelet Smear', code: 'Platelet Smear', unit: '' }
                                ];

                                return parameters.map(param => {
                                    const component = getComponent(param.code);
                                    return (
                                        <tr key={`${labTestList.id}-${param.code}`}>
                                            <td>{labTestList.id}</td>
                                            <td>{param.name}</td>
                                            <td>{component?.valueQuantity?.value || component?.valueString || ''}</td>
                                            <td>{param.unit}</td>
                                            <td>{component?.referenceRange ? renderReferenceRange(component.referenceRange) : param.range}</td>
                                        </tr>
                                    );
                                });
                            })}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default LabTestList;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from '../Navbar';

// function LabTestList() {
//     const [labTestLists, setLabTestList] = useState([]);
//     const [id, setId] = useState('');

//     useEffect(() => {
//         if (id) {
//             fetchLabTestList(id);
//         }
//     }, [id]);

//     const fetchLabTestList = async (id) => {
//         console.log(`Fetching data for ID: ${id}`);
//         try {
//             const response = await axios.get(`http://localhost:8080/fhir/Observation/${id}`);
//             console.log('Response:', response.data);
//             setLabTestList(response.data.entry || []);
//         } catch (error) {
//             console.error("Error fetching Observation data:", error);
//         }
//     };

//     const renderReferenceRange = (referenceRange) => {
//         if (!referenceRange || referenceRange.length === 0) return '';
//         const { low, high } = referenceRange[0];
//         return `${low.value} - ${high.value} ${low.unit}`;
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         fetchLabTestList(id);
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className="container mt-5">
//                 <h1 className="text-center mb-4">Hematology Table</h1>
//                 <form className="card card-body shadow" onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="observationId">Observation ID</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="observationId"
//                             value={id}
//                             onChange={(e) => setId(e.target.value)}
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary mt-3">Fetch Data</button>
//                 </form>
//                 <table border="1" className="mt-4">
//                     <thead>
//                         <tr>
//                             <th>Lab Test</th>
//                             <th>Value</th>
//                             <th>Unit</th>
//                             <th>Reference Range</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {labTestLists.length === 0 && (
//                             <tr>
//                                 <td colSpan="4" className="text-center">No data available</td>
//                             </tr>
//                         )}
//                         {labTestLists.map((entry, index) => {
//                             const labTestList = entry.resource;

//                             const getComponent = (text) => {
//                                 if (labTestList && labTestList.component) {
//                                     return labTestList.component.find(component => component.code.text === text);
//                                 }
//                                 return null;
//                             };

//                             const parameters = [
//                                 { name: 'WBC (Leukocytes)', code: 'WBC', unit: '10^3/uL' },
//                                 { name: 'RBC (Erythrocytes)', code: 'RBC', unit: '10^6/uL' },
//                                 { name: 'HGB (Hemoglobin)', code: 'HGB', unit: 'g/dL' },
//                                 { name: 'HCT (Hematocrit)', code: 'HCT', unit: '%' },
//                                 { name: 'MCV (Mean Corpuscular Volume)', code: 'MCV', unit: 'fL' },
//                                 { name: 'MCH (Mean Corpuscular Hemoglobin)', code: 'MCH', unit: 'pg' },
//                                 { name: 'MCHC (Mean Corpuscular Hemoglobin Concentration)', code: 'MCHC', unit: 'g/dL' },
//                                 { name: 'PLT (Platelets)', code: 'PLT', unit: '10^3/uL' },
//                                 { name: 'Neutrophil', code: 'Neutrophil', unit: '%' },
//                                 { name: 'Lymphocyte', code: 'Lymphocyte', unit: '%' },
//                                 { name: 'Monocyte', code: 'Monocyte', unit: '%' },
//                                 { name: 'Eosinophil', code: 'Eosinophil', unit: '%' },
//                                 { name: 'Basophil', code: 'Basophil', unit: '%' },
//                                 { name: 'RBC Morphology', code: 'RBC Morphology', unit: '' },
//                                 { name: 'Platelet Smear', code: 'Platelet Smear', unit: '' }
//                             ];

//                             return parameters.map(param => {
//                                 const component = getComponent(param.code);
//                                 return (
//                                     <tr key={`${labTestList.id}-${param.code}-${index}`}>
//                                         <td>{param.name}</td>
//                                         <td>{component?.valueQuantity?.value || component?.valueString || ''}</td>
//                                         <td>{param.unit}</td>
//                                         <td>{component?.referenceRange ? renderReferenceRange(component.referenceRange) : ''}</td>
//                                     </tr>
//                                 );
//                             });
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default LabTestList;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from '../Navbar';

// function LabTestList() {
//     const [labTestLists, setLabTestList] = useState([]);
//     const [id, setId] = useState('');

//     useEffect(() => {
//         if (id) {
//             fetchLabTestList(id);
//         }
//     }, [id]);

//     const fetchLabTestList = async (id) => {
//         console.log(`Fetching data for ID: ${id}`);
//         try {
//             const response = await axios.get(`http://localhost:8080/fhir/Observation/${id}`);
//             console.log('Response:', response.data);
//             setLabTestList(response.data.entry || []);
//         } catch (error) {
//             console.error("Error fetching Observation data:", error);
//         }
//     };

//     const renderReferenceRange = (referenceRange) => {
//         if (!referenceRange || referenceRange.length === 0) return '';
//         const { low, high } = referenceRange[0];
//         return `${low.value} - ${high.value} ${low.unit}`;
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         fetchLabTestList(id);
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className="container mt-5">
//                 <h1 className="text-center mb-4">Hematology Table</h1>
//                 <form className="card card-body shadow" onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="observationId">Observation ID</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="observationId"
//                             value={id}
//                             onChange={(e) => setId(e.target.value)}
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary mt-3">Fetch Data</button>
//                 </form>
//                 <table border="1" className="mt-4">
//                     <thead>
//                         <tr>
//                             <th>Lab Test</th>
//                             <th>Value</th>
//                             <th>Unit</th>
//                             <th>Reference Range</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {labTestLists.length === 0 && (
//                             <tr>
//                                 <td colSpan="4" className="text-center">No data available</td>
//                             </tr>
//                         )}
//                         {labTestLists.map((entry, index) => {
//                             const labTestList = entry.resource;

//                             const getComponent = (text) => {
//                                 if (labTestList && labTestList.component) {
//                                     return labTestList.component.find(component => component.code.text === text);
//                                 }
//                                 return null;
//                             };

//                             const parameters = [
//                                 { name: 'WBC (Leukocytes)', code: 'WBC', unit: '10^3/uL' },
//                                 { name: 'RBC (Erythrocytes)', code: 'RBC', unit: '10^6/uL' },
//                                 { name: 'HGB (Hemoglobin)', code: 'HGB', unit: 'g/dL' },
//                                 { name: 'HCT (Hematocrit)', code: 'HCT', unit: '%' },
//                                 { name: 'MCV (Mean Corpuscular Volume)', code: 'MCV', unit: 'fL' },
//                                 { name: 'MCH (Mean Corpuscular Hemoglobin)', code: 'MCH', unit: 'pg' },
//                                 { name: 'MCHC (Mean Corpuscular Hemoglobin Concentration)', code: 'MCHC', unit: 'g/dL' },
//                                 { name: 'PLT (Platelets)', code: 'PLT', unit: '10^3/uL' },
//                                 { name: 'Neutrophil', code: 'Neutrophil', unit: '%' },
//                                 { name: 'Lymphocyte', code: 'Lymphocyte', unit: '%' },
//                                 { name: 'Monocyte', code: 'Monocyte', unit: '%' },
//                                 { name: 'Eosinophil', code: 'Eosinophil', unit: '%' },
//                                 { name: 'Basophil', code: 'Basophil', unit: '%' },
//                                 { name: 'RBC Morphology', code: 'RBC Morphology', unit: '' },
//                                 { name: 'Platelet Smear', code: 'Platelet Smear', unit: '' }
//                             ];

//                             return parameters.map(param => {
//                                 const component = getComponent(param.code);
//                                 return (
//                                     <tr key={`${labTestList.id}-${param.code}-${index}`}>
//                                         <td>{param.name}</td>
//                                         <td>{component?.valueQuantity?.value || component?.valueString || ''}</td>
//                                         <td>{param.unit}</td>
//                                         <td>{component?.referenceRange ? renderReferenceRange(component.referenceRange) : ''}</td>
//                                     </tr>
//                                 );
//                             });
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default LabTestList;

