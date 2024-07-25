import React, { useState } from "react";
import Navbar from "../Navbar";
import { NavLink } from 'react-router-dom';

const Mobile = () => {
    const [realmePhone, setRealmePhone] = useState([
        { id: 1, name: 'phone 1', price: 200, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/p/f/-original-imahyaaxj2kcvvuw.jpeg?q=70" },
        { id: 2, name: "phone 2", price: 40, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/i/x/-original-imagt4qptrkzwmxa.jpeg?q=70" },
        { id: 3, name: "phone 3", price: 55, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/y/b/-original-imahyzygycuyg3mq.jpeg?q=70" },
        { id: 4, name: "phone 4", price: 550, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/n/y/-original-imahyaaxkyph4hbm.jpeg?q=70" },
        { id: 5, name: "phone 5", price: 555, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/8/i/-original-imahy99nvkpewtzy.jpeg?q=70" },
        { id: 6, name: "phone 6", price: 505, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70" },
    ]);





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
                        <h5 className="p-4">Realme smartphones</h5>
                    </div>
                    <div className="container-fluid">
                        <div className="row pt-4">
                            {realmePhone.map(items => (
                                <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3  ">
                                    <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                        <div className="card border-0">
                                            <img style={mystyle} src={items.image} alt="" className="img-fluid " />
                                            <div className="card-body">
                                                <h6 className="text-center">{items.name}</h6>
                                            </div>
                                            <p className="card-text text-center">{items.price}</p>
                                        </div>
                                    </NavLink>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* Poco smartphones */}
            <div className="background shadow bg-body-tertiary rounded">
                <div className="container-fluid">
                    <div className="row  border border-2  ">
                        <h5 className="p-4">Poco smartphones</h5>
                    </div>
                    <div className="container-fluid">
                        <div className="row pt-4">
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3  ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card border-0">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/3/g/-original-imagy2v5ggthbvfe.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="text-center">Realme p1 5g (128GB)</h6>
                                        </div>
                                        <p className="card-text text-center">Text</p>
                                    </div>
                                </NavLink>
                            </div>

                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card border-0">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/k/k/c65-mzb0g8rin-poco-original-imagw6gyhhu7hur5.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Realme p1 5g (128GB)</h6>
                                        </div>
                                        <p className="card-text text-center">Text</p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card border-0">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/u/8/c65-mzb0g8nin-poco-original-imagw6j2kp5t5jek.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Realme p1 5g (128GB)</h6>
                                        </div>
                                        <p className="card-text text-center">Text</p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card border-0">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/3/g/-original-imagy2v5ggthbvfe.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Realme p1 5g (128GB)</h6>
                                        </div>
                                        <p className="card-text text-center">Text</p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card border-0">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/u/8/c65-mzb0g8nin-poco-original-imagw6j2kp5t5jek.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Realme p1 5g (128GB)</h6>
                                        </div>
                                        <p className="card-text text-center">Text</p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card border-0">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/o/w/-original-imagzcfjjbheykct.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Realme p1 5g (128GB)</h6>
                                        </div>
                                        <p className="card-text text-center">Text</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Samsung smartphones */}
            <div className="background shadow bg-body-tertiary rounded">
                <div className="container-fluid">
                    <div className="row  border border-2  ">
                        <h5 className="p-4">Samsung smartphones</h5>
                    </div>
                    <div className="container-fluid">
                        <div className="row pt-4">
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3  ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card border-0">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/8/k/-original-imagtyxcgmgvtm7y.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="text-center">Realme p1 5g (128GB)</h6>
                                        </div>
                                        <p className="card-text text-center">Text</p>
                                    </div>
                                </NavLink>
                            </div>

                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card border-0">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/w/e/-original-imagtyw9fdfnsune.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Realme p1 5g (128GB)</h6>
                                        </div>
                                        <p className="card-text text-center">Text</p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card border-0">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/e/f/-original-imagymhw8g7tdyhk.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Realme p1 5g (128GB)</h6>
                                        </div>
                                        <p className="card-text text-center">Text</p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card border-0">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/r/8/-original-imagtywatxffk3yh.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Realme p1 5g (128GB)</h6>
                                        </div>
                                        <p className="card-text text-center">Text</p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card border-0">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/x/-original-imagtrrqkxprtd4n.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Realme p1 5g (128GB)</h6>
                                        </div>
                                        <p className="card-text text-center">Text</p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card border-0">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/8/n/-original-imagymhwtgmdr3v2.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Realme p1 5g (128GB)</h6>
                                        </div>
                                        <p className="card-text text-center">Text</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile;