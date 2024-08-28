
import React, { useState } from 'react'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from './Googlelogin';
import axios from "axios";

// import logo from "D:/project-react/my-project/src/Componet/img/logo2.png";

defineElement(lottie.loadAnimation);


export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);




  const handleEmailChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length === 0 || (newValue !== ' ')) {
      setEmail(newValue);
      const emailPattern = /^[A-Z 0-9._%+-]+@[A-Z 0-9.-]+\.[A-Z]{2,}$/i;
      setIsValid(emailPattern.test(newValue));
    }
  }


  const [password, setpassword] = useState("");

  const handlepasswordChange = (event) => {
    const passwordpatten = event.target.value.replace(/\s/g, '');
    setpassword(passwordpatten);
    setpassword(event.target.value.trim());
  }

  const [ShowPassword, setShowPassword] = useState(false);
  const seepassword = () => {
    setShowPassword((prev) => !prev);
  }


  const [error, seterror] = useState(false)

  const handlesubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/login', {
      email,
      password,
    }).then(res => {
      if (res.data === "admin") {
        navigate('/Admin_dashboard');
      } else if (res.data === "success") {
        localStorage.setItem("userData", JSON.stringify(res.config.data))
        navigate('/Home');
      } else {
        seterror(true)
        setTimeout(() => {
          seterror(false);
        }, 2000);
      }


    })
      .catch(err => console.log(err))
  }
  return (
    <>
      <form action='' method='' className=' needs-validation' onSubmit={handlesubmit} >
        <div className="container-fluid ">
          <div className="row">
            <div className="col-auto col-md-5 col-xl-3 px-0 col-lg-3  col-sm-7  bg-dark">
              <div className="d-flex flex-column text-white  min-vh-100">
                <h1 className="text-center mt-5 pt-5  ">Login</h1>
                <div className="text-center">
                </div>
                <div className="mt-4 ">
                  <div className=" col-8 mx-5" id="menu">
                    <div className="">
                      <input type="email" className="form-control mb-3 " onChange={handleEmailChange} data-bs-parent="#menu" id="validationCustom01" placeholder="Enter-email" required />
                    </div>
                    <div className="mb-3">
                      <input type={ShowPassword ? "text" : "password"} value={password} onChange={handlepasswordChange} className="form-control " id="validationCustom02" placeholder='Enter-password' required />
                      <div className="form-check mt-2">
                        <input className="form-check-input" onChange={seepassword} type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Show password
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button type="submit" className='btn btn-primary form-control' name="button" >submit</button>
                    </div>
                    <div className="">
                      <span>Don't have an account? <Link to="/Register">Register here </Link></span>
                    </div>
                    <div className="">
                      <span>forgot password <Link to="/ForgotPassword">Click</Link></span>
                    </div>
                    <div className="mt-3 rounded-4">
                    </div>
                    <br />
                    {
                      !isValid ? <p className='text-danger'>Please enter a valid email address.
                        <span className='text-success'> example44@gmail.com</span>
                      </p> : null}
                    <GoogleLogin />
                  </div>
                </div>
              </div>
            </div>
            {
              error ? < div className="alert alert-warning text-center h5 " style={{ position: "fixed" }} role="alert">
                Enter correct   email address and password
              </div> : null
            }
            <div className="col-lg-9 col-xl-9 col-md-7 col-sm-5 d-sm-block d-none img">
              <div className="mt-2 py-2  ">
                <h1 className='text-center'>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </form >
    </>
  )
}
