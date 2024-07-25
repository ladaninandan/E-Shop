import React from 'react'
import Navbar from '../Navbar'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaRupeeSign } from "react-icons/fa";

export default function MotorolaMobiles() {

    const motorola = useSelector(state => state.motorolaMobiles.motorolaMobiles);


    const mystyle = {
        width: "auto",/* Your fixed width */
        height: "200px", /* Your fixed height */
        overflow: "hidden", /* Hide any overflow */
        // img center
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    };

    return (
        <div >
            <Navbar />
            <div className="background shadow bg-body-tertiary rounded">
                <div className="container-fluid">
                    <div className="row  border border-2  ">
                        <h5 className="p-4">Motorola Edge smartphones</h5>
                    </div>
                    <div className="container-fluid">
                        <div className="row pt-4">
                            {motorola.map(items => (
                                <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3   ">
                                    <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                        <div className="card border-0">
                                            <img style={mystyle} src={items.imageUrl} alt="" className="img-fluid " />
                                            <div className="card-body">
                                                <h6 className="text-center">{items.name}</h6>
                                            </div>
                                            <p className="card-text text-center"><FaRupeeSign /> {items.price}</p>
                                        </div>
                                    </NavLink>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
