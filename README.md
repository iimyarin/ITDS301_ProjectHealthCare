## Frontend
- Setting
```
- cd frontend
- npm install
- npm run dev 
```

- path
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

- path
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

- Postman Setting
-- ServiceRequest :
```
POST/PUT | http://localhost:8080/service-request
GET      | http://localhost:8080/service-request/1521
Header   | Accept : application/json
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

-- ServiceRequest :
```

```


