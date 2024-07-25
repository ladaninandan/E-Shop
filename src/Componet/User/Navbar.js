import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './home.css';
import img from "D:/project-react/my-project/src/Componet/img/navbarlogo.png";
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';


export default function Navbar() {

    const auth = localStorage.getItem("userData");
    const name = localStorage.getItem("RegisterUserData");
    const parsedData = JSON.parse(name);

    const [sinup, setsinup] = useState(auth);
    const [time, settime] = useState(parsedData)
    setTimeout(() => {
        settime(false)
    }, 3000);


    const handleLogout = () => {
        localStorage.removeItem("userData");
    }

    const cartItems = useSelector((state) => state.cart); // Adjust according to your Redux store structure
    const cartCount = cartItems.length;


    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow bg-body-tertiary  ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand " to="/Home"><img src={img} alt="" style={{ width: "80px" }} /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header ">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        {/* means */}
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-center">
                                <form className="d-flex w-50 mx-lg-5 search-form" role="search">
                                    <div className="input-container">
                                        <FaSearch className="search-icon" />
                                        <input
                                            className="form-control me-2 mx-3 border border-1 bg-white search-input"
                                            type="search"
                                            placeholder="Search for Products, Brands and More "
                                        />
                                    </div>
                                </form>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/#About">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                </li>
                                <div className="mx-3">
                                    <NavLink to="/Login"><button type="button" className="btn1 mx-2" onClick={handleLogout}  >{sinup ? "Logout" : "Sign up"}</button></NavLink>
                                </div>
                                <div className="mx-3">
                                    <div type="div" className="position-relative">
                                        <NavLink to="/Cart" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="Black" className="bi bi-cart" viewBox="0 0 16 16">
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                            </svg>
                                        </NavLink>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {cartCount}
                                        </span>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        {/* end */}
                    </div>
                </div>
            </nav >
        </div >
    )
}
