import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ForgotPassword() {

   const [email, setEmail] = useState("");
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await axios.post("http://localhost:5000/forgot-password", { email });
         alert("OTP sent to your email");
         navigate("/ResetPassword");
      } catch (error) {
         alert("Error sending OTP");
      }
   };
   return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 " style={{ backgroundColor: '#97C7F7' }}>
         <div className="card p-4" style={{ width: '400px', borderRadius: '10px' }}>
            <div className="text-center mb-4"><img src="logointeb.png" alt="" className='fluid-img w-25 ' height="90px" /></div>
            <h2 className="text-center mb-4">Forgot Password</h2>
            <form onSubmit={handleSubmit}>
               <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter email" />
               </div>
               <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
            <div className="text-center mt-3">
               <Link to="/Login" className="text-decoration-none">Sign Up</Link>
            </div>
         </div>
      </div>
   )
}
