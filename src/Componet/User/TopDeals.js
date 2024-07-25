import React from 'react'
import { NavLink } from 'react-router-dom';
import './TopDeals.css';


export default function TopDeals() {
    const mystyle = {
        width: "auto",/* Your fixed width */
        height: "240px", /* Your fixed height */
        overflow: "hidden", /* Hide any overflow */
        // img center
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",

    };
    return (
        <div>
            <div className="background shadow bg-body-tertiary rounded">
                <div className="container-fluid">
                    <div className="row  border border-2  ">
                        <h5 className="p-4">Best Deals on SmartPhone</h5>
                    </div>
                    <div className="container-fluid">
                        <div className="row py-4">
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="/motorola-mobiles" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card  ">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/c/r/-original-imagx24ftn9fyuam.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Moto edge 40 neo</h6>
                                        </div>
                                        <p className="card-text text-center"> </p>
                                    </div>
                                </NavLink>
                            </div>

                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card  ">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Vivo t2 pro 5g</h6>
                                        </div>
                                        <p className="card-text text-center"></p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card  ">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/9/i/m6-pro-5g-mzb0eqjin-poco-original-imags3e7dazavyje.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center"> Poco m6 Pro</h6>
                                        </div>
                                        <p className="card-text text-center">  </p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card  ">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/v/h/-original-imagxaqtzmqgtfen.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Redmi 12 5G</h6>
                                        </div>
                                        <p className="card-text text-center"></p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card  ">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/8/i/-original-imahy99nvkpewtzy.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Realme p1 5g </h6>
                                        </div>
                                        <p className="card-text text-center"></p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card  ">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Realme p1 5g </h6>
                                        </div>
                                        <p className="card-text text-center"> </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* offer  */}
            <div className="background shadow mt-3 bg-body-tertiary rounded">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4 ">
                            <img src='https://rukminim2.flixcart.com/fk-p-flap/520/280/image/22e305bf45e2e1a2.jpeg?q=20' alt="" className='img-fluid' />
                        </div>
                        <div className="col-4">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6537e82f357a7f59.jpg?q=20" alt="" className='img-fluid' />
                        </div>
                        <div className="col-4">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c9f829023c573ba8.jpg?q=20" alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            {/* second deals */}
            <div className="background shadow bg-body-tertiary rounded">
                <div className="container-fluid">
                    <div className="row  border border-2  ">
                        <h5 className="p-4">Best Deals on SmartPhone</h5>
                    </div>
                    <div className="container-fluid">
                        <div className="row py-4">
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card  ">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/a/g/-original-imagxq8p8rs8tutu.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Moto edge 40 neo</h6>
                                        </div>
                                        <p className="card-text text-center"> </p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card  ">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/n/z/1/-original-imagpfdvsuhqmxew.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Vivo t2 pro 5g</h6>
                                        </div>
                                        <p className="card-text text-center"></p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card  ">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/y/q/m/l-chi00121-c1-royal-son-original-imagvyp7bd92p5zp.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center"> Poco m6 Pro</h6>
                                        </div>
                                        <p className="card-text text-center">  </p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card  ">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-bottle/g/z/c/1000-summer-cool-single-wall-stainless-steel-fridge-water-bottle-original-imagynqncecp2mpj.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Redmi 12 5G</h6>
                                        </div>
                                        <p className="card-text text-center"></p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card  ">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/3/l/f/na-na-yctjns-202prlmul-wh-yellow-chimes-original-imagjh488bvvnyde.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Realme p1 5g </h6>
                                        </div>
                                        <p className="card-text text-center"></p>
                                    </div>
                                </NavLink>
                            </div>
                            <div className=" col-xl-2 col-lg-3 col-md-2 col-sm-3 ">
                                <NavLink to="" style={{ textDecoration: "none", color: "black" }}  >
                                    <div className="card  ">
                                        <img style={mystyle} src="https://rukminim2.flixcart.com/image/612/612/l1b1oy80/track-pant/9/9/g/32-rjo0104-red-tape-original-imagcwbshhzs5rzx.jpeg?q=70" alt="" className="img-fluid" />
                                        <div className="card-body">
                                            <h6 className="card-subtitle text-center">Realme p1 5g </h6>
                                        </div>
                                        <p className="card-text text-center"> </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* offer  */}
            <div className="background shadow mt-3 bg-body-tertiary rounded">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-3  col-sm-2 ">
                            <img src='https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ee4e016a681fc34b.jpg?q=20' alt="" className='img-fluid' />
                        </div>
                        <div className="col-xl-4 col-lg-3  col-sm-2">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8eacc329e456d1e2.jpg?q=20" alt="" className='img-fluid' />
                        </div>
                        <div className="col-xl-4 col-lg-3  col-sm-2">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/3563cb9934232526.jpg?q=20" alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            {/* offer  */}
            <div className="background shadow mt-3 bg-body-tertiary rounded">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-3  col-sm-2 ">
                            <img src='https://rukminim2.flixcart.com/fk-p-flap/520/280/image/5406db3888580955.jpg?q=20' alt="" className='img-fluid' />
                        </div>
                        <div className="col-xl-4 col-lg-3  col-sm-2">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/24b3a35f26a0bb4b.jpg?q=20" alt="" className='img-fluid' />
                        </div>
                        <div className="col-xl-4 col-lg-3  col-sm-2">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/9926b000d9e06f79.jpg?q=20" alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            {/* offer  */}
            <div className="background shadow mt-3 bg-body-tertiary rounded">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-3  col-sm-2 ">
                            <img src='https://rukminim2.flixcart.com/fk-p-flap/520/280/image/36a25c42073677a6.jpg?q=20' alt="" className='img-fluid' />
                        </div>
                        <div className="col-xl-4 col-lg-3  col-sm-2">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/2581779c0be1e566.jpeg?q=20" alt="" className='img-fluid' />
                        </div>
                        <div className="col-xl-4 col-lg-3  col-sm-2">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/f44101cc97507393.jpg?q=20" alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
