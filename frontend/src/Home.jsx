import React from 'react'

import Navbar from "./Navbar";
import './DoctorForm.css';

function Home(){
    return(
        <div>
            <Navbar />{}
           <div className="containermt-5">
            <div className="text-center mb-4">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">Welcome</h1>
                <p className="py-6">This is a website written to simulate the operation of the system while sending the doctor's examination form to the laboratory within the hospital.</p>
                {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div> 
        </div>
        
    );
}
export default Home;

// import React from 'react';
// import "./Home.css";
// import Navbar from './Navbar'; // นำเข้า Navbar

// const Home = () => {
//   return (
//     <div className="home-container"> {/* เพิ่ม className เพื่อใช้ในการกำหนดพื้นหลัง */}
//       <Navbar /> {/*ใช้ Navbar*/}
//       <div className="welcome-message">
//         <h1>Welcome</h1>
//         <p>This is a website written to simulate the operation of the system while sending the doctor's examination form to the laboratory within the hospital.</p>
//       </div>
//     </div>
//   );
// }

// export default Home;