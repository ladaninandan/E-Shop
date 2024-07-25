import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import './home.css';
import Navbar2 from './Navbar2';
import img from "D:/project-react/my-project/src/Componet/img/navbarlogo.png";
import Imageslider from './Imageslider';
import About from './About';
import TopDeals from './TopDeals';
import Navbar from './Navbar';
import WellcomName from './WellcomName';




const Home = () => {
	return (
		<>
			<Navbar />
			<Navbar2 />
			<Imageslider />
			<TopDeals />
			<About />

		</>
	)
}

export default Home;