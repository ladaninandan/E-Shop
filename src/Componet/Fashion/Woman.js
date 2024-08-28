import React from "react";
import Navbar from "../User/Navbar";
import { Link } from "react-router-dom";
import 'D:/project-react/my-project/src/Componet/User/TopDeals.css';
import { useSelector, useDispatch } from "react-redux";
import { productAction } from '../../store/productSlice';

const Woman = () => {

    const Woman = useSelector((state) => state.product.Woman);
    const selectedBrands = useSelector((state) => state.product.selectedBrands);
    const dispatch = useDispatch();

    const sortByPriceHighToLow = () => {
        dispatch(productAction.sortpricehightolow())
    }
    const sortByPriceLowToHigh = () => {
        dispatch(productAction.sortpricelowtohigh())
    }

    const sortByNameAToZ = () => {
        dispatch(productAction.sortnameatoz())
    }

    const sortByNameZToA = () => {
        dispatch(productAction.sortnameztoa())
    }
    const sortByDiscount = () => {
        dispatch(productAction.sortdiscounthightolow())
    }

    const handleBrandCheckboxChange = (brand) => {
        dispatch(productAction.toggleBrand(brand))
    }

    const filteredWoman = selectedBrands.length > 0
        ? Woman.filter(product => selectedBrands.includes(product.brand))
        : Woman;

    const mystyle = {
        width: "auto",
        height: "310px",
        overflow: "hidden",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    };

    return (
        <div>
            <Navbar />
            <div className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 background shadow bg-body-tertiary rounded">
                            <div className="header h2">
                                Filter
                                <hr className="border border-Black border-2 opacity-50"></hr>
                            </div>
                            <p className="text-center">Sort By</p>
                            <div className="dropdown row">
                                <div className="border dropdown-toggle text-start p-2" type="" data-bs-toggle="dropdown">
                                    Select Price to items
                                </div>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button"><Link to="" style={{ textDecoration: "none", color: "black" }} onClick={sortByPriceHighToLow}>
                                        <p>Price__High to Low</p>
                                    </Link></button></li>
                                    <li><button className="dropdown-item" type="button"><Link to="" style={{ textDecoration: "none", color: "black" }} onClick={sortByPriceLowToHigh}>
                                        <p>Price__Low to High</p>
                                    </Link></button></li>
                                    <li><button className="dropdown-item" type="button"><Link to="" style={{ textDecoration: "none", color: "black" }} onClick={sortByNameAToZ}>
                                        <p>a to z</p>
                                    </Link></button></li>
                                    <li><button className="dropdown-item" type="button"><Link to="" style={{ textDecoration: "none", color: "black" }} onClick={sortByNameZToA}>
                                        <p>z to a</p>
                                    </Link></button></li>
                                </ul>
                            </div>
                            <div className="dropdown row mt-3">
                                <div className="border dropdown-toggle text-start p-2" type="" data-bs-toggle="dropdown">
                                    Select Price to brand
                                </div>
                                <ul className="dropdown-menu">
                                    <li><div className="mx-2" type="">{Array.from(new Set(Woman.map(product => product.brand))).map(brand => (
                                        <div key={brand}>
                                            <input
                                                type="checkbox"
                                                id={brand}
                                                value={brand}
                                                checked={selectedBrands.includes(brand)}
                                                onChange={() => handleBrandCheckboxChange(brand)}
                                            />
                                            <label htmlFor={brand}>{brand}</label>
                                        </div>
                                    ))}</div></li>
                                </ul>
                            </div>
                            <div className="dropdown row pt-3">
                                <div className="border dropdown-toggle text-start p-2" type="" data-bs-toggle="dropdown">
                                    Discount
                                </div>
                                <ul className="dropdown-menu">
                                    <li><input type="checkbox" className="mx-3" onChange={sortByDiscount} />discount High to Low</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 background shadow bg-body-tertiary rounded">
                            <div className="row pt-3">
                                {
                                    filteredWoman.map(item => (
                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 mb-5 py-2" key={item.Woman_id}>
                                            <Link to={`products/${item.Woman_id}`} style={{ textDecoration: "none", color: "black" }} >
                                                <div className="card border hov">
                                                    <img style={mystyle} src={item.image} alt="" className="img-fluid" />
                                                    <div className="card-body">
                                                        <p className="card-subtitle text-center">{item.name}</p>
                                                        <p className="card-subtitle text-center">{item.brand}</p>
                                                        <p className="card-subtitle text-center">{item.discount}%</p>
                                                    </div>
                                                    <h6 className="card-text text-center border">₹{item.price}</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Woman;
