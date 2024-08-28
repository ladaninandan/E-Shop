import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import './home.css';
import img from "D:/project-react/my-project/src/Componet/img/navbarlogo.png";
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";


export default function Navbar() {

    const auth = localStorage.getItem("userData");
    const name = localStorage.getItem("RegisterUserData");
    const parsedData = JSON.parse(name);

    const cartItems = useSelector((state) => state.cart);

    const [sinup, setsinup] = useState(auth);
    const [time, settime] = useState(parsedData)
    setTimeout(() => {
        settime(false)
    }, 3000);


    const handleLogout = () => {
        localStorage.removeItem("userData");
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/Home">
                        <img src={img} alt="" style={{ width: '80px' }} />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                Menu
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-center">
                                <form className="d-flex w-50 mx-lg-4 search-form" role="search">
                                    <div className="input-container position-relative">
                                        <FaSearch className="search-icon position-absolute top-50 start-0 translate-middle-y ms-4" />
                                        <input
                                            className="form-control me-2 mx-3 border border-1 bg-white search-input ps-5"
                                            type="search"
                                            placeholder="Search for Products, Brands and More"
                                        />
                                    </div>
                                </form>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/#About">
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/services">
                                        Services
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Support">
                                        Support
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">
                                        Contact Us
                                    </NavLink>
                                </li>
                                <div className="mx-3">
                                    <NavLink to="/Login">
                                        <button type="button" className="btn1 mx-2" onClick={handleLogout}>
                                            {sinup ? 'Logout' : 'Sign up'}
                                        </button>
                                    </NavLink>
                                </div>
                                <div className="mx-3">
                                    <NavLink to="">
                                        <div className="dropdown">
                                            <div className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <CgProfile color='black' size="35px" />
                                            </div>
                                            {/* <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" to="">Order</Link></li>
                                                <hr className="dropdown-divider" />
                                            </ul> */}
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="mx-3">
                                    <div className="position-relative">
                                        <NavLink to="/Cart">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="35"
                                                height="35"
                                                fill="Black"
                                                className="bi bi-cart"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                            </svg>
                                        </NavLink>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {cartItems.length}
                                        </span>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    )
}
