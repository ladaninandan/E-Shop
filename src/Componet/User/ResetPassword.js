import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ResetPassword() {

   const navigate = useNavigate();

   const [email, setemail] = useState();
   const [otp, setotp] = useState();
   const [password, setpassword] = useState();
   const [conformPassword, setconformPassword] = useState();


   const handelotp = (e) => {
      const val = e.target.value.trim();
      if (/^\d*\.?\d*$/.test(val) && val.length <= 6) {
         setotp(val);
      }
      console.log(otp);
   }

   const [chack, setchack] = useState(true);
   const handleClick = (e) => {

      if (password === "" && conformPassword === "") {
         setchack("place enter password");

         alert("enter your password ")
      } else if (password === conformPassword) {
         setchack(`password are match`);

      } else {
         setchack("password are not match");
      }
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await axios.post("http://localhost:5000/reset-password", {
            email,
            otp,
            password,
            conformPassword
         });
         alert("password reset successfull");
         navigate("/Login");
      } catch (error) {
         alert("Error resetting password");
      }
   }


   return (
      <div>
         <div className="d-flex justify-content-center align-items-center min-vh-100 " style={{ backgroundColor: '#97C7F7' }}>
            <div className="card p-4" style={{ width: '400px', borderRadius: '10px' }}>
               <div className="text-center mb-4"><img src="logointeb.png" alt="" className='fluid-img w-25 ' height="90px" /></div>
               <h2 className="text-center mb-4">Reset Password</h2>
               <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                     <label htmlFor="email" className="form-label">Email address</label>
                     <input type="email" className="form-control" id="email" onChange={(e) => setemail(e.target.value)} placeholder="Enter email" required />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="text" className="form-label">OTP</label>
                     <input type="text" className="form-control" value={otp} onChange={handelotp} id="text" placeholder="Enter OTP" required />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="text" className="form-label">NewPassword</label>
                     <input type="text" className="form-control" id="text" onChange={(e) => setpassword(e.target.value)} placeholder="Enter newPassword" required />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="password" className="form-label">New conformPassword</label>
                     <input type="password" className="form-control" id="password" onChange={(e) => setconformPassword(e.target.value)} placeholder="Enter new conformPassword" required />
                  </div>
                  <button type="submit" onClick={handleClick} className="btn btn-primary w-100">Reset Password</button>
               </form>
               <div className="text-center mt-3">
                  <Link to="/Login" className="text-decoration-none">Sign Up</Link>
               </div>
               {chack === 'place enter password' ? null : <p className='text-warning'>{chack}</p>}
            </div>
         </div>
      </div>
   )
}
