## Frontend
- Setting
```
- cd frontend
- npm install
- npm run dev 
```

- url
```
ServiceRequest    : http://localhost:5173/ServiceRequest
DiagnosticReport  : http://localhost:5173/DiagnosticReport
Observation       : http://localhost:5173/Observation
```

## Backend
- Setting
```
- cd backend
- mvn spring-boot:run
```

- url
```
POST
ServiceRequest    : http://localhost:8080/service-request
DiagnosticReport  : http://localhost:8080/diagnostic-report
Observation       : http://localhost:8080/observation-report
```
```
PUT/GET
ServiceRequest    : http://localhost:8080/service-request/{id}
DiagnosticReport  : http://localhost:8080/diagnostic-report/{id}
Observation       : http://localhost:8080/observation-report/{id}
```

- Postman test setting
ServiceRequest :
```
POST     | http://localhost:8080/service-request
Header   | Content-Type : application/json

GET      | http://localhost:8080/service-request/1521
Header   | Accept : application/json

PUT      | http://localhost:8080/service-request/1521
Header   | Content-Type : application/json

Body (raw JSON) [Example]
{
    "resourceType": "ServiceRequest",
    "id": "request",
    "text": {
        "div": "<div>Peter CHALMERS </div>"
    },
    "contained": [{
        "resourceType": "Specimen",
        "id": "serum",
        "type": {
            "coding": [{
                "display": "Serum sample"
            }]
        },
        "subject": {
            "reference": "Patient/example"
        }
    }],
    "status": "active",
    "intent": "original-order",
    "category": [{
        "coding": [{
            "display": "Laboratory procedure"
        }]
    }],
    "priority": "",
    "code": {
        "coding": [{
            "display": ""
        }]
    },
    "requester": {
        "reference": "Practitioner/example"
    },
    "subject": {
        "reference": "Patient/example"
    },
    "performer": [{
        "reference": "Organization/example"
    }],
    "note": [{
        "text": ""
    }]
}
```

ObservationReport :
```
POST     | http://localhost:8080/observation-report
Header   | Content-Type : application/json

GET      | http://localhost:8080/observation-report/6858260
Header   | Accept : application/json

PUT      | http://localhost:8080/observation-report/6858260
Header   | Content-Type : application/json

Body (raw JSON) [Example]
{
    "resourceType": "Observation",
    "id": "6858260",
    "meta": {
        "versionId": "1",
        "lastUpdated": "2022-07-31T18:25:24.448+00:00",
        "source": "#tUknMcV50i9EPfbu"
    },
    "text": {
        "status": "additional",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">aaa</div>"
    },
    "identifier": [
        {
            "use": "official",
            "value": "CODICE---FISCALE",
            "assigner": {
                "display": "Ministero Economia e Finanze"
            }
        }
    ],
    "status": "final",
    "category": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                    "code": "activity",
                    "display": "Activity"
                }
            ]
        }
    ],
    "code": {
        "coding": [
            {
                "system": "http://loinc.org",
                "code": "Heart rate"
            }
        ]
    },
    "subject": {
        "id": "6857562",
        "reference": "Patient/6857562",
        "display": "Patient"
    },
    "effectiveDateTime": "2022-07-31T17:17:16Z",
    "issued": "2022-07-31T20:23:27.701015+02:00",
    "performer": [
        {
            "id": "6857562",
            "reference": "Patient/6857562",
            "display": "Patient"
        }
    ],
    "valueQuantity": {
        "value": 456.0,
        "unit": "/min",
        "system": "http://unitsofmeasure.org",
        "code": "8867-4"
    },
    "note": [
        {
            "authorString": "Patient",
            "text": "bbbb"
        }
    ],
    "device": {
        "display": "Gear Fit e"
    }
}
```

DiagnosticReport :
```
POST | http://localhost:8080/diagnostic-report
Header   | Content-Type : application/json

GET      | http://localhost:8080/diagnostic-report/44716109
Header   | Accept : application/json

PUT      | http://localhost:8080/diagnostic-report/44716109
Header   | Content-Type : application/json

Body (raw JSON) [Example]
{
  "resourceType": "DiagnosticReport",
  "identifier": [
    {
      "system": "http://hospital.org/reports",
      "value": "54321"
    }
  ],
  "status": "final",
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "1234-5",
        "display": "Blood test report"
      }
    ]
  },
  "subject": {
    "reference": "Patient/30358"
  },
  "result": [
    {
      "reference": "Observation/30536"
    }
  ]
}

```


