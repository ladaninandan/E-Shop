import React from "react";
import { Link } from 'react-router-dom';
import grocery from "D:/project-react/my-project/src/Componet/img/grocery.jpg"
import mobile from "D:/project-react/my-project/src/Componet/img/mobile.jpg"
import fashion from "D:/project-react/my-project/src/Componet/img/fashion.jpg"
import electronics from "D:/project-react/my-project/src/Componet/img/electronics.jpg"
import Furniture from "D:/project-react/my-project/src/Componet/img/farnichar.jpg"
import toy from "D:/project-react/my-project/src/Componet/img/toy.jpg";



function Navbar2() {
    return (
        <>

            <div className="background shadow  mb-3 bg-body-tertiary rounded">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-xl-2 col-md-4 col-sm-6 col-xs-6">
                            <Link to="" style={{ textDecoration: "none", color: "black" }}>
                                <div className="card1">
                                    <div className="">
                                        <img src={grocery} className="img-fluid" alt="" style={{ width: "80px" }} />
                                    </div>
                                    <span className="fixed">
                                        Grocery</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-2  col-md-4 col-sm-6 col-xs-6 ">
                            <Link to="/Mobile" style={{ textDecoration: "none", color: "black" }}>
                                <div className="card2">
                                    <div className="">
                                        <img src={mobile} className="img-fluid" alt="" style={{ width: "120px" }} />
                                    </div>
                                    <span className="">Mobile</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-2  col-md-4 col-sm-6 col-xs-6 ">
                            <div style={{ textDecoration: "none", color: "black" }}>
                                <div className="card3">
                                    <div className="">
                                        <img src={fashion} className="img-fluid" alt="" style={{ width: "60px" }} />
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            fashion
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/Man">Man</Link></li><hr className="dropdown-divider" />
                                            <li><Link className="dropdown-item" to="/Woman">Woman</Link></li><hr className="dropdown-divider" />
                                            <li><Link className="dropdown-item" to="/Child">Child</Link></li><hr className="dropdown-divider" />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2  col-md-4 col-sm-6 col-xs-6 ">
                            <Link to="" style={{ textDecoration: "none", color: "black" }}>
                                <div className="card4">
                                    <div className="">
                                        <img src={electronics} className="img-fluid" alt="" style={{ width: "120px" }} />
                                    </div>
                                    <span>electronics</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-2  col-md-4 col-sm-6 col-xs-6 ">
                            <Link to="" style={{ textDecoration: "none", color: "black" }}>
                                <div className="card5">
                                    <div className="">
                                        <img src={Furniture} className="img-fluid" alt="" style={{ width: "60px" }} />
                                    </div>
                                    <span>Furniture</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-2  col-md-4 col-sm-6 col-xs-6 lign-self-end">
                            <Link to="" style={{ textDecoration: "none", color: "black" }}>
                                <div className="card6">
                                    <div className="">
                                        <img src={toy} className="img-fluid" alt="" style={{ width: "100px" }} />
                                    </div>
                                    <span>Toys</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Navbar2;