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


