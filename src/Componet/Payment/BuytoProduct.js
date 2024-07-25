import React, { useEffect, useState } from 'react'
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom'
import img from "D:/project-react/my-project/src/Componet/img/navbarlogo.png";
import axios from "axios";
import { FaRupeeSign } from 'react-icons/fa';


export default function BuytoProduct() {
    const navigat = useNavigate();
    const location = useLocation();
    const { totalPriceToPay } = location.state || { totalPriceToPay: 0 };

    const [FirstName, setFirestName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Address, setAddress] = useState("");
    const [Number, setNumber] = useState("");
    const [City, setCity] = useState("");
    const [State, setState] = useState("");
    const [Zip, setZip] = useState("");

    const handleFirestname = (e) => {
        let name = e.target.value.trimStart();
        setFirestName(name);
    }

    const handleLastname = (e) => {
        const name = e.target.value.trim();
        setLastName(name);
    }

    const handleEmail = (e) => {
        const useremail = e.target.value.trim().toLowerCase();
        setEmail(useremail);
    }

    const handleAddress = (e) => {
        const userAddress = e.target.value.trimStart();
        setAddress(userAddress);
    }

    const handleNumber = (e) => {
        let userNumber = e.target.value.trim();
        if (userNumber.length >= 10) {
            userNumber = userNumber.slice(0, 10)
        }
        setNumber(userNumber);
    }

    const handleCity = (e) => {
        const userCity = e.target.value.trim();
        setCity(userCity);
    }

    const handleState = (e) => {
        const userState = e.target.value;
        setState(userState);
    }

    const handleZip = (e) => {
        let userZip = e.target.value.trim();
        if (userZip >= 6) {
            userZip = userZip.slice(0, 6)
        }
        setZip(userZip);
    }

    const [error, seterror] = useState(false)


    const handlesubmitdata = async (event) => {
        event.preventDefault();
        console.log(FirstName);
        console.log(LastName);
        console.log(Email);
        console.log(Address);
        console.log(Number);
        console.log(City);
        console.log(State);
        console.log(Zip);

        await axios.post("http://localhost:5000/Userdetails", {
            FirstName,
            LastName,
            Email,
            Address,
            Number,
            City,
            State,
            Zip
        }).then(res => {
            if (res.data === "Success") {
                seterror(true)
                setTimeout(() => {
                    seterror(false);
                }, 2000);
                navigat("./Home")
            }
        });


    }

    const states = [
        // { id: 1, name: " Pradesh" },
        "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", " Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", " Tripura", " Uttar Pradesh",
    ];

    const handleClick = () => {
        navigat("/Payment")
    }


    return (
        <div>
            <nav>
                <div className="bg-white shadow">
                    <div className="text-center">
                        <NavLink className="navbar-brand" to="/Home"><img src={img} alt="" style={{ width: "80px" }} /></NavLink>
                    </div>
                </div>
            </nav>
            {
                error ? < div className="alert alert-success text-center h5 " style={{ minWidth: "100%" }} role="alert">
                    Your Information Received
                </div> : null
            }
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 col-sm-12" >
                        <div className=" bg-white  shadow p-5 " >
                            <div className="h4 text-center">
                                Add Your information
                            </div>
                            <hr />
                            <form className="row g-3 needs-validation" onSubmit={handlesubmitdata} >
                                <div className="col-md-6 " >
                                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="validationCustom01" placeholder='Enter Your first Name' onChange={handleFirestname} value={FirstName} required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="validationCustom02" placeholder='Enter Your Last Name' onChange={handleLastname} value={LastName} required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-10 ">
                                    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" onChange={handleEmail} value={Email} required />
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "50px" }} onChange={handleAddress} value={Address}></textarea>
                                        <label htmlFor="floatingTextarea2">Enter Your  Address</label>
                                    </div>
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                </div>
                                <div className="col-md-10 " >
                                    <label htmlFor="validationCustom01" className="form-label">Enter Number</label>
                                    <input type="tel" className="form-control" id="validationCustom01" placeholder='Enter Your First Name' onChange={handleNumber} value={Number} required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationCustom03" className="form-label">City</label>
                                    <input type="text" className="form-control" id="validationCustom03" onChange={handleCity} value={City} required />
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationCustom04" className="form-label">State</label>
                                    <select className="form-select " id="validationCustom04" value={State} onChange={handleState} required>
                                        {
                                            states.map((items) => (
                                                <option key={items} className=''>{items}</option>
                                            ))
                                        }
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationCustom05" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="validationCustom05" onChange={handleZip} value={Zip} required />
                                    <div className="invalid-feedback">
                                        Please provide a valid zip.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label" htmlFor="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn btn-primary" type="submit" onClick={handleClick}>Payment <FaRupeeSign />{totalPriceToPay} </button>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="col-6  d-md-block d-none ">
                        <img src="https://img.freepik.com/free-vector/directions-concept-illustration_114360-5203.jpg?t=st=1721211845~exp=1721215445~hmac=f832048f211574a27a4fe5f25e1814c36d499092fd252ee7b191973a11111ade&w=740" alt="" className='img-fluid shadow ' />
                    </div>
                </div>
            </div>
        </div >


    )
}
