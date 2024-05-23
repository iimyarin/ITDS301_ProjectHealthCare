// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Select from "react-select"; // Import react-select
import "./PatientForm.css";

function PatientForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    idCard: "",
    bloodGroup: "",
    birthDate: "",
    age: "",
    contactNumber: "",
    hnNumber: "",
    symptoms: "",
    appointmentDate: "",
    appointmentTime: "",
    insurance: "",
    houseRegistration: "", // ทะเบียนบ้าน
    VillageNo: "", //หมู่
    alley: "", // ซอย
    subdistrict: "", // ตำบล
    district: "", // อำเภอ
    road: "", // ถนน
    province: "", //
    zipcode: "",
    drugAllergies: [],
    chronicDiseases: [],
  });

  const handleChange = (inputValue, actionMeta) => {
    if (actionMeta) {
      const { name, action } = actionMeta;

      // Handle multi-select options for react-select components
      if (
        action === "select-option" ||
        action === "remove-value" ||
        action === "clear"
      ) {
        const values = inputValue ? inputValue.map((item) => item.value) : [];
        setFormData((prevState) => ({
          ...prevState,
          [name]: values,
        }));
      } else if (action === "set-value") {
        // Handle single select changes
        setFormData((prevState) => ({
          ...prevState,
          [name]: inputValue ? inputValue.value : null,
        }));
      }
    } else {
      // Handle changes for standard inputs like text, radio, and checkboxes
      const target = inputValue.target;
      const name = target.name;
      let value = target.value;

      if (name === "contactNumber") {
        let formattedNumber = value.replace(/\D/g, ""); // Remove non-digit characters
        // Apply formatting
        formattedNumber = formattedNumber.substring(0, 10); // Limit to 10 digits
        if (formattedNumber.length > 6) {
          formattedNumber = `${formattedNumber.slice(
            0,
            3
          )}-${formattedNumber.slice(3, 6)}-${formattedNumber.slice(6)}`;
        } else if (formattedNumber.length > 3) {
          formattedNumber = `${formattedNumber.slice(
            0,
            3
          )}-${formattedNumber.slice(3)}`;
        }
        value = formattedNumber;
      }

      // Other validations
      if (target.name === "birthDate") {
        calculateAge(value);
      } else if (target.name === "hnNumber" && !/^\d*$/.test(value)) {
        return;
      } else if (target.name === "idCard" && !/^\d{0,13}$/.test(value)) {
        return;
      } else if (
        target.name === "contactNumber" &&
        !/^(\d{3}-\d{3}-\d{4})?$/.test(value)
      ) {
        return; // Validate formatted phone number
      }

      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const calculateAge = (birthDate) => {
    if (birthDate) {
      const birthday = new Date(birthDate);
      const today = new Date();
      const yearDifference = today.getFullYear() - birthday.getFullYear();
      const monthDifference = today.getMonth() - birthday.getMonth();
      const dayDifference = today.getDate() - birthday.getDate();

      let age = yearDifference;
      if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
      }
      setFormData((prevState) => ({
        ...prevState,
        age: age.toString(), // ปรับปรุงอายุใน state
      }));
    }
  };

  const [allergyStatus, setAllergyStatus] = useState("null"); // Options: 'noAllergies', 'hasAllergies'
  const [chronicDiseaseStatus, setChronicDiseaseStatus] =
    useState("null"); // Options: 'noDiseases', 'hasDiseases'

  const drugAllergyOptions = [
    //ควรดึงรายการมาจากฐานข้อมูลยา
    { value: "adapalene", label: "Adapalene" },
    { value: "aspirin", label: "Aspirin" },
    {
      value: "emergency_contraceptive_pill",
      label: "Emergency Contraceptive Pill",
    }, //ยาคุมฉุกเฉิน
    { value: "favipiravir)", label: "Favipiravir" },
    { value: "paracetamol", label: "Paracetamol" },
  ];

  const chronicDiseaseOptions = [
    { value: "diabetes", label: "Diabetes" },
    { value: "hypertension", label: "Hypertension" },
    { value: "asthma", label: "Asthma" },
    // Add more options as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(formData);

    if (!allergyStatus || !chronicDiseaseStatus) {
      alert("กรุณาเลือกการแพ้ยาและโรคประจำตัวก่อนทำการส่งข้อมูล");
      return; // ยุติการทำงานของฟังก์ชันหากไม่มีการเลือก
    }

    alert("บันทึกข้อมูลแล้ว");
    setFormData({
      firstName: "",
      lastName: "",
      idCard: "",
      birthDate: "",
      age: "",
      contactNumber: "",
      hnNumber: "",
      symptoms: "",
      appointmentDate: "",
      appointmentTime: "",
      insurance: "",
      houseRegistration: "", // ทะเบียนบ้าน
      VillageNo: "", //หมู่ที่
      alley: "", // ซอย
      subdistrict: "", // ตำบล
      district: "", // อำเภอ
      road: "", // ถนน
      province: "", // จังหวัด
      zipcode: "", //
      drugAllergies: [],
      chronicDiseases: [],
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">ระบบลงทะเบียนผู้ป่วย</h1>
      <form onSubmit={handleSubmit} className="card card-body shadow">
        <div className="form-group">
          <label htmlFor="title">คำนำหน้าชื่อ:</label>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          >
            <option value="">เลือก</option>
            <option value="Mr.">นาย</option>
            <option value="Mrs.">นาง</option>
            <option value="Ms.">นางสาว</option>
            <option value="None">ไม่ระบุ</option>
          </select>

          <label htmlFor="gender">เพศ:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">เลือก</option>
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
            <option value="other">อื่นๆ</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="firstName">ชื่อ:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="ชื่อ"
            required
          />
          <label htmlFor="lastName">นามสกุล:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="นามสกุล"
            required
          />
          <label htmlFor="hnNumber">HN:</label>
          <input
            type="text"
            name="hnNumber"
            value={formData.hnNumber}
            onChange={handleChange}
            placeholder="เลข HN (ตัวเลขเท่านั้น)"
            required
          />
        </div>
        <label htmlFor="idCard">เลขบัตรประชาชน:</label>
        <input
          type="text"
          name="idCard"
          value={formData.idCard}
          onChange={handleChange}
          placeholder="เลขบัตรประชาชน (13 หลัก)"
          required
        />
        <div className="form-group">
          <label>Blood Group:</label>
          <div className="radio-group">
            <div>
              <input
                type="radio"
                id="bloodGroupA"
                name="bloodGroup"
                value="A"
                checked={formData.bloodGroup === "A"}
                onChange={handleChange}
              />
              <label htmlFor="bloodGroupA">A</label>
            </div>
            <div>
              <input
                type="radio"
                id="bloodGroupB"
                name="bloodGroup"
                value="B"
                checked={formData.bloodGroup === "B"}
                onChange={handleChange}
              />
              <label htmlFor="bloodGroupB">B</label>
            </div>
            <div>
              <input
                type="radio"
                id="bloodGroupAB"
                name="bloodGroup"
                value="AB"
                checked={formData.bloodGroup === "AB"}
                onChange={handleChange}
              />
              <label htmlFor="bloodGroupAB">AB</label>
            </div>
            <div>
              <input
                type="radio"
                id="bloodGroupO"
                name="bloodGroup"
                value="O"
                checked={formData.bloodGroup === "O"}
                onChange={handleChange}
              />
              <label htmlFor="bloodGroupO">O</label>
            </div>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="birthDate">วัน-เดือน-ปี เกิด: </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
          <label htmlFor="age">อายุ: </label>
          <input
            type="text"
            name="age"
            value={formData.age}
            readOnly
            placeholder="อายุ"
          />{" "}
          {/* ช่องอายุที่คำนวณได้ */}
        </div>
        <label htmlFor="contactNumber">เบอร์ติดต่อ:</label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="เบอร์ติดต่อ"
          required
        />
        <div className="address-group">
          <div className="input-group">
            <label htmlFor="houseRegistration">เลขที่บ้าน:</label>
            <input
              type="text"
              name="houseRegistration"
              value={formData.houseRegistration}
              onChange={handleChange}
              placeholder="เลขที่บ้าน"
              required
            />
            <label htmlFor="VillageNo">หมู่ที่:</label>
            <input
              type="text"
              name="VillageNo"
              value={formData.VillageNo}
              onChange={handleChange}
              placeholder="หมู่ที่"
              required
            />
            <label htmlFor="road">ถนน:</label>
            <input
              type="text"
              name="road"
              value={formData.road}
              onChange={handleChange}
              placeholder="ถนน"
              // required
            />
            <label htmlFor="alley">ซอย:</label>
            <input
              type="text"
              name="alley"
              value={formData.alley}
              onChange={handleChange}
              placeholder="ซอย"
              // required
            />
            <label htmlFor="subdistrict">ตำบล:</label>
            <input
              type="text"
              name="subdistrict"
              value={formData.subdistrict}
              onChange={handleChange}
              placeholder="ตำบล"
              required
            />
            <label htmlFor="district">อำเภอ:</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="อำเภอ"
              required
            />
            <label htmlFor="province">จังหวัด:</label>
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
              placeholder="จังหวัด"
              required
            />
            <label htmlFor="zipcode">รหัสไปรษณีย์:</label>
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              placeholder="รหัสไปรษณีย์"
              required
            />
          </div>
        </div>

        <label htmlFor="symptoms">อาการป่วยเบื้องต้น:</label>
        <textarea
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          placeholder="อาการเบื้องต้น"
          required
        />
        <label>ประวัติการแพ้ยา</label>
        <div className="radio-group">
          <div>
            <input
              type="radio"
              id="noAllergies"
              name="drugAllergyStatus"
              value="noAllergies"
              checked={allergyStatus === "noAllergies"}
              onChange={() => setAllergyStatus("noAllergies")}
              required
            />
            <label htmlFor="noAllergies">ไม่มี</label>
          </div>
          <div>
            <input
              type="radio"
              id="hasAllergies"
              name="drugAllergyStatus"
              value="hasAllergies"
              checked={allergyStatus === "hasAllergies"}
              onChange={() => setAllergyStatus("hasAllergies")}
              required
            />
            <label htmlFor="hasAllergies">มี</label>
          </div>
        </div>

        {allergyStatus === "hasAllergies" && (
          <Select
            id="drugAllergies"
            name="drugAllergies"
            value={formData.drugAllergies.map((allergy) => ({
              value: allergy,
              label:
                drugAllergyOptions.find((option) => option.value === allergy)
                  ?.label || allergy,
            }))}
            onChange={(selectedOptions, actionMeta) =>
              handleChange(selectedOptions, actionMeta)
            }
            options={drugAllergyOptions}
            isMulti
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="เลือกยาที่แพ้..."
            isClearable
            isSearchable
            required
          />
        )}
        <label>ประวัติโรคประจำตัว</label>
        <div className="radio-group">
          <div>
            <input
              type="radio"
              id="noDiseases"
              name="chronicDiseaseStatus"
              value="noDiseases"
              checked={chronicDiseaseStatus === "noDiseases"}
              onChange={() => setChronicDiseaseStatus("noDiseases")}
              required
            />
            <label htmlFor="noDiseases">ไม่มี</label>
          </div>
          <div>
            <input
              type="radio"
              id="hasDiseases"
              name="chronicDiseaseStatus"
              value="hasDiseases"
              checked={chronicDiseaseStatus === "hasDiseases"}
              onChange={() => setChronicDiseaseStatus("hasDiseases")}
              required
            />
            <label htmlFor="hasDiseases">มี</label>
          </div>
        </div>

        {chronicDiseaseStatus === "hasDiseases" && (
          <Select
            id="chronicDiseases"
            name="chronicDiseases"
            value={formData.chronicDiseases.map((disease) => ({
              value: disease,
              label:
                chronicDiseaseOptions.find((option) => option.value === disease)
                  ?.label || disease,
            }))}
            onChange={(selectedOptions, actionMeta) =>
              handleChange(selectedOptions, actionMeta)
            }
            options={chronicDiseaseOptions}
            isMulti
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="เลือกโรคประจำตัว..."
            isClearable
            isSearchable
            required
          />
        )}

        <label htmlFor="appointmentDate">วันที่บันทึก:</label>
        <input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          required
        />
        <label htmlFor="appointmentTime">เวลาที่บันทึก:</label>
        <input
          type="time"
          name="appointmentTime"
          value={formData.appointmentTime}
          onChange={handleChange}
          required
        />
        {/* Dropdown สำหรับสิทธิ์การรักษา */}
        <label htmlFor="insurance">สิทธิ์การรักษา:</label>
        <select
          name="insurance"
          value={formData.insurance}
          onChange={handleChange}
        >
          <option value="">สิทธิ์การรักษา</option>
          <option value="universal">สิทธิบัตรทอง</option>
          <option value="socialSecurity">สิทธิประกันสังคม</option>
          <option value="UCS">สิทธิบัตรทอง</option> 
          <option value="privateInsurance">ประกันสุขภาพเอกชน</option>
        </select>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PatientForm;
