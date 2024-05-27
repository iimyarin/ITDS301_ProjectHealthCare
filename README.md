## Start Project
```
 - npm install
 - npm run dev
```

## URL Server
- Docker
```
 - HAPI FHIR    : http://localhost:8080/
 - FHIR BASE    : http://localhost:8080/fhir/
```
Query URL
```
 - ServiceRequest : http://localhost:8080/fhir/ServiceRequest
 - Observation    : http://localhost:8080/fhir/Observation
```

## SETUP RESOURCE
- Main Resource
```
 - ServiceRequest | Require Refr (Practitioner, Patient, Organization)
 - Observation    | Require Refr (Patient)

RefResource
 - Practitioner
 - Patient
 - Organization
```

# START HERE

## Setup Ref Resource
Before add Main resource, We must be add Ref Resource First by follow this order (Practitioner, Patient, Organization)
* Use PostMan *
- Practitioner
```
POST     | http://localhost:8080/fhir/Practitioner

Bodt (raw JSON) [For Demo]
{
  "resourceType": "Practitioner",
  "identifier": [
    {
      "system": "http://thai-medical-council.or.th/doctor-id",
      "value": "99999"
    }
  ],
  "active": true,
  "name": [
    {
      "family": "จริงใจ",
      "given": [
        "สมหญิง"
      ],
      "prefix": [
        "พญ."
      ]
    }
  ],
  "telecom": [
    {
      "system": "email",
      "value": "somying.jingjai@example.com",
      "use": "work"
    }
  ],
  "gender": "female"
}
```

- Patient
```
POST     | http://localhost:8080/fhir/Practitioner

Bodt (raw JSON) [For Demo]
{
    "resourceType": "Patient",
    "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>HN: KK0001 นายพรชัย</p> <p>(เกิด: 1 มกราคม 2543, ชาย)</p></div>"
    },
    "identifier": [
        {
            "system": "http://www.myhospital.com/hn",
            "value": "KK0001"
        }
    ],
    "active": true,
    "name": [
        {
            "use": "official",
            "text": "นายพรชัย แข็งแรง",
            "family": "แข็งแรง",
            "given": [
                "นายพรชัย"
                ],
            "prefix": [
                "นาย"
                ]
        }
    ],
    "telecom": [
        {
            "system": "phone",
            "value": "0 2123 4567",
            "use": "home"
        },
        {
            "system": "phone",
            "value": "08 1123 4567",
            "use": "mobile"
        }
    ],
    "gender": "male",
    "birthDate": "2000-01-01",
    "address": [
        {
            "use": "home",
            "type": "both",
            "text": "เลขที่ 2 ถนนวังหลัง แขวงศิริราช เขตบางกอกน้อย กรุงเทพมหานคร, 10700",
            "line": [
                "เลขที่ 2 ถนนวังหลัง"
                ],
            "city": "ศิริราช",
            "district": "บางกอกน้อย",
            "state": "กรุงเทพมหานคร",
            "postalCode": "10700"
        }
    ]
}
```
- Organization
```
POST     | http://localhost:8080/fhir/Organization

Bodt (raw JSON) [For Demo]
{
  "resourceType": "Organization",
  "identifier": [
    {
      "system": "http://demo.thai-hospital-database.go.th",
      "value": "KK0001"
    }
  ],
  "active": true,
  "type": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/organization-type",
          "code": "prov",
          "display": "Healthcare Provider"
        }
      ],
      "text": "Healthcare Provider"
    }
  ],
  "name": "โรงพยาบาลขอนแก่น",
  "telecom": [
    {
      "system": "phone",
      "value": "043236974"
    }
  ],
  "address": [
    {
      "line": [
        "54 ถ.ศรีจันทร์ ต.ในเมือง"
      ],
      "city": "เมืองขอนแก่น",
      "state": "ขอนแก่น",
      "postalCode": "40000",
      "country": "TH"
    }
  ]
}
```

## DEMO
After we add Ref Resource, Now we ready to use webpage to send Request,Lab result to server
- ServiceRequest
```
Direct to : http://localhost:5173/ServiceRequest
Fill form and submit form. 
    - Requester Reference = Practitioner/1
    - Subject Reference = Patient/2
    - Performer Reference = Organization/3
Use Dev Tool(F12) to peek through the console for a ServiceRequestId 
Now we can see result at http://localhost:8080/fhir/ServiceRequest/
```

## NOTE
```
เราลองทำหน้า Fetch ข้อมูลเล่นๆดูแล้ว ลองใช้เป็น Template ดึงข้อมูลจาก FHIR มาแสดงผลได้เลย
ชื่อไฟล์ TestFetch.jsx :  http://localhost:5173/fetchRequest
```


