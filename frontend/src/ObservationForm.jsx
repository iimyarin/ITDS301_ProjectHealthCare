import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './DoctorForm.css'; // Assuming you have a CSS file for styling

function ObservationForm() {
    const initialFormData = {
        resourceType: "Observation",
        status: "final",
        category: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/observation-category",
                code: "laboratory",
                display: "Laboratory"
              }
            ]
          }
        ],
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "57698-3",
              display: "Hematology study report"
            }
          ],
          text: "Complete Blood Count (CBC)"
        },
        subject: {
          reference: "",
          display: ""
        },
        specimen: {
            reference: ""
        },
        // effectiveDateTime: "2024-05-29T00:00:00Z",
        component: [
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "6690-2",
                  display: "Leukocytes [#/volume] in Blood"
                }
              ],
              text: "WBC"
            },
            valueQuantity: {
              value: 0,
              unit: "10^3/uL",
              system: "http://unitsofmeasure.org",
              code: "10*3/uL"
            },
            referenceRange: [
              {
                low: {
                  value: 4.5,
                  unit: "10^3/uL",
                  system: "http://unitsofmeasure.org",
                  code: "10*3/uL"
                },
                high: {
                  value: 11.5,
                  unit: "10^3/uL",
                  system: "http://unitsofmeasure.org",
                  code: "10*3/uL"
                }
              }
            ]
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "789-8",
                  display: "Erythrocytes [#/volume] in Blood"
                }
              ],
              text: "RBC"
            },
            valueQuantity: {
              value: 0,
              unit: "10^6/uL",
              system: "http://unitsofmeasure.org",
              code: "10*6/uL"
            },
            referenceRange: [
              {
                low: {
                  value: 4.00,
                  unit: "10^6/uL",
                  system: "http://unitsofmeasure.org",
                  code: "10*6/uL"
                },
                high: {
                  value: 5.40,
                  unit: "10^6/uL",
                  system: "http://unitsofmeasure.org",
                  code: "10*6/uL"
                }
              }
            ]
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "718-7",
                  display: "Hemoglobin [Mass/volume] in Blood"
                }
              ],
              text: "HGB"
            },
            valueQuantity: {
              value: 0,
              unit: "g/dL",
              system: "http://unitsofmeasure.org",
              code: "g/dL"
            },
            referenceRange: [
              {
                low: {
                  value: 12,
                  unit: "g/dL",
                  system: "http://unitsofmeasure.org",
                  code: "g/dL"
                },
                high: {
                  value: 15,
                  unit: "g/dL",
                  system: "http://unitsofmeasure.org",
                  code: "g/dL"
                }
              }
            ]
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "4544-3",
                  display: "Hematocrit [Volume Fraction] of Blood"
                }
              ],
              text: "HCT"
            },
            valueQuantity: {
              value: 0,
              unit: "%",
              system: "http://unitsofmeasure.org",
              code: "%"
            },
            referenceRange: [
              {
                low: {
                  value: 35,
                  unit: "%",
                  system: "http://unitsofmeasure.org",
                  code: "%"
                },
                high: {
                  value: 49,
                  unit: "%",
                  system: "http://unitsofmeasure.org",
                  code: "%"
                }
              }
            ]
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "787-2",
                  display: "Mean corpuscular volume [Entitic volume] of Erythrocytes by Automated count"
                }
              ],
              text: "MCV"
            },
            valueQuantity: {
              value: 0,
              unit: "fL",
              system: "http://unitsofmeasure.org",
              code: "fL"
            },
            referenceRange: [
              {
                low: {
                  value: 80,
                  unit: "fL",
                  system: "http://unitsofmeasure.org",
                  code: "fL"
                },
                high: {
                  value: 100,
                  unit: "fL",
                  system: "http://unitsofmeasure.org",
                  code: "fL"
                }
              }
            ]
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "785-6",
                  display: "Mean corpuscular hemoglobin [Entitic mass] in Blood"
                }
              ],
              text: "MCH"
            },
            valueQuantity: {
              value: 0,
              unit: "pg",
              system: "http://unitsofmeasure.org",
              code: "pg"
            },
            referenceRange: [
              {
                low: {
                  value: 27,
                  unit: "pg",
                  system: "http://unitsofmeasure.org",
                  code: "pg"
                },
                high: {
                  value: 31,
                  unit: "pg",
                  system: "http://unitsofmeasure.org",
                  code: "pg"
                }
              }
            ]
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "777-3",
                  display: "Mean corpuscular hemoglobin concentration [Mass/volume] in Blood"
                }
              ],
              text: "MCHC"
            },
            valueQuantity: {
              value: 0,
              unit: "g/dL",
              system: "http://unitsofmeasure.org",
              code: "g/dL"
            },
            referenceRange: [
              {
                low: {
                  value: 32.0,
                  unit: "g/dL",
                  system: "http://unitsofmeasure.org",
                  code: "g/dL"
                },
                high: {
                  value: 36.0,
                  unit: "g/dL",
                  system: "http://unitsofmeasure.org",
                  code: "g/dL"
                }
              }
            ]
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "777-3",
                  display: "Platelets [#/volume] in Blood"
                }
              ],
              text: "PLT"
            },
            valueQuantity: {
              value: 0,
              unit: "10^3/uL",
              system: "http://unitsofmeasure.org",
              code: "10*3/uL"
            },
            referenceRange: [
              {
                low: {
                  value: 140,
                  unit: "10^3/uL",
                  system: "http://unitsofmeasure.org",
                  code: "10*3/uL"
                },
                high: {
                  value: 440,
                  unit: "10^3/uL",
                  system: "http://unitsofmeasure.org",
                  code: "10*3/uL"
                }
              }
            ]
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "26499-4",
                  display: "Neutrophils/100 leukocytes in Blood by Automated count"
                }
              ],
              text: "Neutrophil"
            },
            valueQuantity: {
              value: 0,
              unit: "%",
              system: "http://unitsofmeasure.org",
              code: "%"
            },
            referenceRange: [
              {
                low: {
                  value: 50,
                  unit: "%",
                  system: "http://unitsofmeasure.org",
                  code: "%"
                },
                high: {
                  value: 70,
                  unit: "%",
                  system: "http://unitsofmeasure.org",
                  code: "%"
                }
              }
            ]
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "731-0",
                  display: "Lymphocytes/100 leukocytes in Blood by Automated count"
                }
              ],
              text: "Lymphocyte"
            },
            valueQuantity: {
              value: 0,
              unit: "%",
              system: "http://unitsofmeasure.org",
              code: "%"
            },
            referenceRange: [
              {
                low: {
                  value: 18,
                  unit: "%",
                  system: "http://unitsofmeasure.org",
                  code: "%"
                },
                high: {
                  value: 42,
                  unit: "%",
                  system: "http://unitsofmeasure.org",
                  code: "%"
                }
              }
            ]
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "742-7",
                  display: "Monocytes/100 leukocytes in Blood by Automated count"
                }
              ],
              text: "Monocyte"
            },
            valueQuantity: {
              value: 0,
              unit: "%",
              system: "http://unitsofmeasure.org",
              code: "%"
            },
            referenceRange: [
              {
                low: {
                  value: 2,
                  unit: "%",
                  system: "http://unitsofmeasure.org",
                  code: "%"
                },
                "high": {
                  value: 11,
                  unit: "%",
                  system: "http://unitsofmeasure.org",
                  code: "%"
                }
              }
            ]
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "713-8",
                  display: "Eosinophils/100 leukocytes in Blood by Automated count"
                }
              ],
              text: "Eosinophil"
            },
            valueQuantity: {
              value: 0,
              unit: "%",
              system: "http://unitsofmeasure.org",
              code: "%"
            },
            referenceRange: [
              {
                low: {
                  value: 1,
                  unit: "%",
                  system: "http://unitsofmeasure.org",
                  code: "%"
                },
                high: {
                  value: 3,
                  unit: "%",
                  system: "http://unitsofmeasure.org",
                  code: "%"
                }
              }
            ]
          },
          {
            code: {
              coding: [
                {
                  system: "http://loinc.org",
                  code: "706-2",
                  display: "Basophils/100 leukocytes in Blood by Automated count"
                }
              ],
              text: "Basophil"
            },
            valueQuantity: {
              value: 0,
              unit: "%",
              system: "http://unitsofmeasure.org",
              code: "%"
            },
            referenceRange: [
              {
                low: {
                  value: 0,
                  unit: "%",
                  system: "http://unitsofmeasure.org",
                  code: "%"
                },
                high: {
                  value: 2,
                  unit: "%",
                  system: "http://unitsofmeasure.org",
                  code: "%"
                }
              }
            ]
          },
          {
            code: {
              coding: [
                {
                  system: "http://example.com/CodeSystem/custom-codes",
                  code: "RBCM",
                  display: "RBC Morphology"
                }
              ],
              text: "RBC Morphology"
            },
            valueString: "Microcyte: 3+"
          },
          {
            code: {
              coding: [
                {
                  system: "http://example.com/CodeSystem/custom-codes",
                  code: "PS",
                  display: "Platelet Smear"
                }
              ],
              text: "Platelet Smear"
            },
            valueString: ""
          }
        ]
      }


      const [jsonData, setJsonData] = useState(initialFormData);
      const [loading, setLoading] = useState(false);
  
      
      const handleChange = (e, path) => {
        const { value } = e.target;
        setJsonData((prevState) => {
          let currentState = {...prevState };
          let current = currentState;
          for (let i = 0; i < path.length - 1; i++) {
            if (!current[path[i]]) {
              current[path[i]] = {}; // create the object if it doesn't exist
            }
            current = current[path[i]];
          }
          if (current) {
            current[path[path.length - 1]] = value;
          }
          return currentState;
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
              const response = await axios.post('http://localhost:8080/fhir/Observation', jsonData);
              console.log(response.data); // Log the response from the backend
              alert('Specimen details saved successfully');
              setJsonData(initialFormData);
          } catch (error) {
              console.error('Error:', error);
              alert('Error saving Specimen Form');
          }
      };
  
      const getComponentValue = (text, type = 'valueQuantity') => {
          const component = jsonData.component.find(component => component.code.text === text);
          if (type === 'valueQuantity') {
              return component?.valueQuantity?.value || '';
          } else if (type === 'valueString') {
              return component?.valueString || '';
          }
          return '';
      };
  
      return (
          <div>

          <Navbar />{}
          <div className="containermt-5">
              <h1 className="text-center mb-4">Observation Form</h1>
              <form onSubmit={handleSubmit} className="card card-body shadow">
                  {/* Resource Type */}
                  <div className="input-group">
                    <label className="label">
                      Resource Type:
                      <input
                          type="text"
                          value={jsonData.resourceType}
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
                              handleChange(e, ['subject', 'reference'], 'value');
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
            
  
                  {/* Specimen ID */}
                  <div className="input-group">
                     <label className="label">
                      Specimen ID:
                      <input
                       type="text"
                       value={jsonData.specimen.reference}
                       onChange={e => handleChange(e, ['specimen', 'reference'], 'value')}
                       placeholder="specimen/{id}"
                      />
                  </label>
                  </div>
                 
                  
                  {/* WBC (10^3/uL) */}
                  <div className="input-group">
                     <label className="label">
                      WBC (10^3/uL):
                      <input
                          type="number"
                          value={getComponentValue('WBC')}
                          onChange={e => handleChange(e, ['component', 0, 'valueQuantity', 'value'])}
                      />
                  </label>
                  </div>
                
                  {/* RBC (10^6/uL) */}
                  <div className="input-group">
                    <label className="label">
                      RBC (10^6/uL):
                      <input
                          type="number"
                          value={getComponentValue('RBC')}
                          onChange={e => handleChange(e, ['component', 1, 'valueQuantity', 'value'])}
                      />
                  </label>
                  </div>
                 
                  {/* HGB (g/dL) */}
                  <div className="input-group">
                     <label className="label">
                      HGB (g/dL):
                      <input
                          type="number"
                          value={getComponentValue('HGB')}
                          onChange={e => handleChange(e, ['component', 2, 'valueQuantity', 'value'])}
                      />
                  </label>
                  </div>
                 
  
                  {/* HCT (%) */}
                  <div className="input-group">
                    <label className="label">
                      HCT (%):
                      <input
                          type="number"
                          value={getComponentValue('HCT')}
                          onChange={e => handleChange(e, ['component', 3, 'valueQuantity', 'value'])}
                      />
                  </label>
                  </div>

  
                  {/* MCV (fL) */}
                  <div className="input-group">
                    <label className="label">
                      MCV (fL):
                      <input
                          type="number"
                          value={getComponentValue('MCV')}
                          onChange={e => handleChange(e, ['component', 4, 'valueQuantity', 'value'])}
                      />
                  </label>
                  </div>
         
  
                  {/* MCH (pg) */}
                  <div className="input-group">
                    <label className="label">
                      MCH (pg):
                      <input
                          type="number"
                          value={getComponentValue('MCH')}
                          onChange={e => handleChange(e, ['component', 5, 'valueQuantity', 'value'])}
                      />
                  </label>
                  </div>
             
  
                  {/* MCHC (g/dL) */}
                  <div className="input-group">
                     <label className="label">
                      MCHC (g/dL):
                      <input
                          type="number"
                          value={getComponentValue('MCHC')}
                          onChange={e => handleChange(e, ['component', 6, 'valueQuantity', 'value'])}
                      />
                  </label>
                  </div>
               
  
                  {/* PLT (10^3/uL) */}
                  <div className="input-group">
                    <label className="label">
                      PLT (10^3/uL):
                      <input
                          type="number"
                          value={getComponentValue('PLT')}
                          onChange={e => handleChange(e, ['component', 7, 'valueQuantity', 'value'])}
                      />
                  </label>
                  </div>
              
  
                  {/* Neutrophil (%) */}
                  <div className="input-group">
                     <label className="label">
                      Neutrophil (%):
                      <input
                          type="number"
                          value={getComponentValue('Neutrophil')}
                          onChange={e => handleChange(e, ['component', 8, 'valueQuantity', 'value'])}
                      />
                  </label>
                  </div>
                 

                  {/* Lymphocyte (%) */}
                  <div className="input-group">
                    <label className="label">
                  Lymphocyte (%):
                      <input
                          type="number"
                          value={getComponentValue('Lymphocyte')}
                          onChange={e => handleChange(e, ['component', 9, 'valueQuantity', 'value'])}
                      />
                  </label>
                  </div>
                

                  {/* Monocyte (%) */}
                  <div className="input-group">
                    <label className="label">
                  Monocyte (%):
                      <input
                          type="number"
                          value={getComponentValue('Monocyte')}
                          onChange={e => handleChange(e, ['component', 10, 'valueQuantity', 'value'])}
                      />
                  </label>
                  </div>
                  
                  {/* Eosinophil (%) */}
                  <div className="input-group">
                    <label className="label">
                  Eosinophil (%):
                      <input
                          type="number"
                          value={getComponentValue('Eosinophil')}
                          onChange={e => handleChange(e, ['component', 11, 'valueQuantity', 'value'])}
                      />
                  </label>
                  </div>
                  

                  {/* Basophil (%) */}
                  <div className="input-group">
                     <label className="label">
                  Basophil (%):
                      <input
                          type="number"
                          value={getComponentValue('Basophil')}
                          onChange={e => handleChange(e, ['component', 12, 'valueQuantity', 'value'])}
                      />
                  </label>
                  </div>
                 

                  {/* RBC Morphology */}
                  <div className="input-group">
                    <label className="label">
                    RBC Morphology:
                    <select
                        value={getComponentValue('RBC Morphology')}
                        onChange={e => handleChange(e, ['component', 13, 'valueQuantity', 'value'])}
                        required
                      >
                        <option value="">--Select--</option>
                        <option value="Normocytic: 1+">Normocytic: 1+</option>
                        <option value="Normocytic: 2+">Normocytic: 2+</option>
                        <option value="Normocytic: 3+">Normocytic: 3+</option>
                        <option value="Normocytic: 4+">Normocytic: 4+</option>
                        <option value="Microcytic: 1+">Microcytic: 1+</option>
                        <option value="Microcytic: 2+">Microcytic: 2+</option>
                        <option value="Microcytic: 3+">Microcytic: 3+</option>
                        <option value="Microcytic: 4+">Microcytic: 4+</option>
                        <option value="Macrocytic: 1+">Macrocytic: 1+</option>
                        <option value="Macrocytic: 2+">Macrocytic: 2+</option>
                        <option value="Macrocytic: 3+">Macrocytic: 3+</option>
                        <option value="Macrocytic: 4+">Macrocytic: 4+</option>
                        <option value="Hypochromic: 1+">Hypochromic: 1+</option>
                        <option value="Hypochromic: 2+">Hypochromic: 2+</option>
                        <option value="Hypochromic: 3+">Hypochromic: 3+</option>
                        <option value="Hypochromic: 4+">Hypochromic: 4+</option>
                        <option value="Hyperchromic: 1+">Hyperchromic: 1+</option>
                        <option value="Hyperchromic: 2+">Hyperchromic: 2+</option>
                        <option value="Hyperchromic: 3+">Hyperchromic: 3+</option>
                        <option value="Hyperchromic: 4+">Hyperchromic: 4+</option>
                        <option value="Anisocytosis: 1+">Anisocytosis: 1+</option>
                        <option value="Anisocytosis: 2+">Anisocytosis: 2+</option>
                        <option value="Anisocytosis: 3+">Anisocytosis: 3+</option>
                        <option value="Anisocytosis: 4+">Anisocytosis: 4+</option>
                        <option value="Poikilocytosis: 1+">Poikilocytosis: 1+</option>
                        <option value="Poikilocytosis: 2+">Poikilocytosis: 2+</option>
                        <option value="Poikilocytosis: 3+">Poikilocytosis: 3+</option>
                        <option value="Poikilocytosis: 4+">Poikilocytosis: 4+</option>
                    </select>
                </label>
                  </div>
          

                {/* Platelet Smear */}
                <div className="input-group">
                  <label className="label">
                    Platelet Smear:
                    <select
                        value={getComponentValue('Platelet Smear')}
                        onChange={e => handleChange(e, ['component', 14, 'valueQuantity', 'value'])}
                        required
                    >
                        <option value="">--Select--</option>
                        <option value="Adequate">Adequate</option>
                        <option value="Inadequate">Inadequate</option>
                        <option value="Clumped">Clumped</option>
                        <option value="Giant Platelets">Giant Platelets</option>
                        <option value="Hypogranular Platelets">Hypogranular Platelets</option>
                        <option value="Agranular Platelets">Agranular Platelets</option>
                    </select>
                </label>
                </div>
                
  
                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? 'Saving...' : 'Save Observation'}
                  </button>
              </form>
          </div>
          </div>
      );
  }

export default ObservationForm;