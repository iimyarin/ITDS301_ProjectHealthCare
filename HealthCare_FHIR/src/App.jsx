// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
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
    province: "", // จังหวัด
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "birthDate") {
      calculateAge(value);
    }
    if (name === "hnNumber" && !/^\d*$/.test(value)) {
      // ถ้าช่อง hnNumber ถูกกรอกด้วยค่าที่ไม่ใช่ตัวเลข ไม่ทำอะไร
      return;
    }
    if (name === "idCard") {
      // ตรวจสอบว่าเป็นตัวเลขและความยาวไม่เกิน 13 หลัก
      if (!/^\d{0,13}$/.test(value)) return;
    }
    if (name === "contactNumber" && !/^\d{0,10}$/.test(value)) {
      return;
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(formData);

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
    });
  };

  return (
    <div>
      <h1>ระบบลงทะเบียนผู้ป่วย</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
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
          />
          <label htmlFor="lastName">นามสกุล:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="นามสกุล"
          />
          <label htmlFor="hnNumber">HN:</label>
          <input
            type="text"
            name="hnNumber"
            value={formData.hnNumber}
            onChange={handleChange}
            placeholder="เลข HN (ตัวเลขเท่านั้น)"
          />
        </div>
        <label htmlFor="idCard">เลขบัตรประชาชน:</label>
        <input
          type="text"
          name="idCard"
          value={formData.idCard}
          onChange={handleChange}
          placeholder="เลขบัตรประชาชน (13 หลัก)"
          // required
        />
        <div className="input-group">
          <label>Blood Group:</label>
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

        <div className="input-group">
          <label htmlFor="birthDate">วัน-เดือน-ปี เกิด: </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
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
            />
            <label htmlFor="VillageNo">หมู่ที่:</label>
            <input
              type="text"
              name="VillageNo"
              value={formData.VillageNo}
              onChange={handleChange}
              placeholder="หมู่ที่"
            />
            <label htmlFor="road">ถนน:</label>
            <input
              type="text"
              name="road"
              value={formData.road}
              onChange={handleChange}
              placeholder="ถนน"
            />
            <label htmlFor="alley">ซอย:</label>
            <input
              type="text"
              name="alley"
              value={formData.alley}
              onChange={handleChange}
              placeholder="ซอย"
            />
            <label htmlFor="subdistrict">ตำบล:</label>
            <input
              type="text"
              name="subdistrict"
              value={formData.subdistrict}
              onChange={handleChange}
              placeholder="ตำบล"
            />
            <label htmlFor="district">อำเภอ:</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="อำเภอ"
            />
            <label htmlFor="province">จังหวัด:</label>
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
              placeholder="จังหวัด"
            />
          </div>
        </div>

        <label htmlFor="symptoms">อาการป่วยเบื้องต้น:</label>
        <textarea
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          placeholder="อาการเบื้องต้น"
        />
        <label htmlFor="appointmentDate">วันที่บันทึก:</label>
        <input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
        />
        <label htmlFor="appointmentTime">เวลาที่บันทึก:</label>
        <input
          type="time"
          name="appointmentTime"
          value={formData.appointmentTime}
          onChange={handleChange}
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
          <option value="privateInsurance">ประกันสุขภาพเอกชน</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PatientForm;
