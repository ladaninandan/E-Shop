import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { HiUsers } from "react-icons/hi";
import { GrDropbox } from "react-icons/gr";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FcMoneyTransfer } from "react-icons/fc";

const Sidebar = () => {
   const location = useLocation();

   return (
      <div style={{ background: "#171821" }}>
         <div className="d-flex flex-column flex-shrink-0 p-3 text-white glass-bg" style={{ width: '240px', height: '100vh' }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
               <span className="fs-4">Admin Dashboard</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
               <li className="nav-item">
                  <NavLink
                     to="/Admin_dashboard"
                     className={`nav-link text-white ${location.pathname === "/Admin_dashboard" ? "active" : ""}`}
                     aria-current="page"
                  >
                     <MdDashboard size="30px" color='skyBlue' /> Dashboard
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/User_Register"
                     className={`nav-link text-white ${location.pathname === "/User_Register" ? "active" : ""}`}
                  >
                     <HiUsers size="30px" color='green' /> User Register
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/OrderShow"
                     className={`nav-link text-white ${location.pathname === "/Orders" ? "active" : ""}`}
                  >
                     <GrDropbox size="30px" color='red' /> Orders
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/PaymentsShow"
                     className={`nav-link text-white ${location.pathname === "/PaymentsShow" ? "active" : ""}`}
                  >
                     <FcMoneyTransfer size="30px" color='' /> Payments
                  </NavLink>
               </li>
            </ul>
            <hr />
            <div className="dropdown">
               <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://via.placeholder.com/40" alt="" width="32" height="32" className="rounded-circle me-2" />
                  <strong>Admin Name</strong>
               </a>
               <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                  <li><Link className="dropdown-item" to="">Settings</Link></li>
                  <li><Link className="dropdown-item" to="">Profile</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/Login">Sign out</Link></li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
