import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import "D:/project-react/my-project/src/Componet/User/loginpage.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



export default function Register(props) {

    const Navigat = useNavigate();

    const [name, setname] = useState("");
    const handlename = (e) => {
        let a = e.target.value.trimStart();
        setname(a);
        console.log(name)
    }

    const [email, setemail] = useState("");
    const [isValid, setIsValid] = useState(true);

    const handleEmailChange = (e) => {
        const newvalue = e.target.value;
        setemail(newvalue);

    }

    const [number, setnumber] = useState("");
    const handlenumber = (e) => {
        let a = e.target.value;
        setnumber(a);
    }


    const [password, setpassword] = useState("");
    const handlepassword = (e) => {
        setpassword(e.target.value.trim());

    }


    const [conformPassword, setconformPassword] = useState("");
    const handleconformpassword = (e) => {
        setconformPassword(e.target.value.trim());
    }

    const [ShowPassword, setShowPassword] = useState(false);
    const seepassword = (e) => {
        let a = e.target.checked;
        setShowPassword((prev) => !prev);
        setShowPassword(a);

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


    const [error, seterror] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:5000/register', {
            name,
            email,
            number,
            password,
            conformPassword
        }).then(res => {
            if (res.data === 'Email already exists') {
                seterror(true);
                setTimeout(() => {
                    seterror(false);
                }, 2000);
            } else if (password === conformPassword) {
                localStorage.setItem('RegisterUserData', JSON.stringify(res.config.data));
                Navigat('/Login');
            }
        }
        )

    };



    return (

        <div >
            <form className="form" onSubmit={handleSubmit} >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-auto col-md-5 col-xl-3 px-0 col-sm-7 bg-dark">
                            <div className="d-flex flex-column text-white min-vh-100">
                                <h1 className="text-center mt-5 pt-4 ">
                                    {props.name}
                                </h1>
                                <div className="text-center">
                                </div>
                                <div className="mt-4">
                                    <div className="col-8 mx-5" id='menu'>
                                        <div className="mt-3">
                                            <input type="text" data-bs-parent="#menu" value={name} onChange={handlename} className='form-control md-4' placeholder='Enter-name' required />
                                        </div>

                                        <div className="mt-3">
                                            <input type="email" data-bs-parent="#menu" value={email} onChange={handleEmailChange} className='form-control md-4' placeholder='Enter-email' required />
                                        </div>
                                        <div className="mt-3">
                                            <input type="text" data-bs-parent="#menu" onChange={handlenumber} className='form-control md-4' placeholder='Enter-number' name='phone' pattern="[0-9]{10}" minLength={1} maxLength={10} title="Please enter valid phone number" required />
                                        </div>
                                        <div className="mt-3">
                                            <input type={ShowPassword ? "text" : "password"} value={password} onChange={handlepassword} data-bs-parent="#menu" className='form-control md-4' placeholder='Enter-password' minLength={8} required />
                                        </div>
                                        <div className="mt-3">
                                            <input type={ShowPassword ? "text" : "password"} value={conformPassword} onChange={handleconformpassword} data-bs-parent="#menu" className='form-control md-4' placeholder='Enter-conformPassword' minLength={8} required />
                                        </div>
                                        <div className="form-check mt-2">
                                            <input className="form-check-input" id="flexCheckDefault" type="checkbox" value={ShowPassword} onChange={seepassword} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                show password
                                            </label>
                                        </div>
                                        <div className="mt-3">
                                            <button type="submit" onClick={handleClick} className='btn btn-primary form-control' name="button">submit</button>
                                        </div>
                                        <div className="mt-2">
                                            <span>Do have an account? <Link to="/" >Login here </Link></span>
                                        </div>

                                        {!isValid && <p className="text-danger">Please enter a valid email
                                            <span className='text-success'>example44@gmail.com</span> </p>}
                                        {chack === 'place enter password' ? null : <p className='text-warning'>{chack}</p>}

                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            error ? < div className="alert alert-warning text-center h5 " style={{ position: "fixed" }} role="alert">
                                Email already exists
                            </div> : null
                        }
                        <div className="col-lg-9 col-xl-9 col-md-7 col-sm-5 d-sm-block d-none rimg">
                            <div className="mt-5 py-5 ">

                                <h1 className='text-center '>

                                </h1>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>



    )
}

