import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import 'D:/project-react/my-project/src/Componet/User/TopDeals.css';
import { productAction } from '../../store/productSlice';
import Navbar from "../User/Navbar";


const Man = () => {
    const products = useSelector((state) => state.product.products);
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

    const filteredProducts = selectedBrands.length > 0
        ? products.filter(product => selectedBrands.includes(product.brand))
        : products;

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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 background shadow bg-body-tertiary rounded" style={{ maxHeight: "400px" }}>
                        <div className="header h2">
                            Filter
                            <hr className="border border-Black border-2 opacity-50" />
                        </div>
                        <p className="text-center">Sort By</p>
                        <div className="dropdown row">
                            <div className="border dropdown-toggle text-start p-2" data-bs-toggle="dropdown">
                                Select Price to items
                            </div>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" onClick={sortByPriceHighToLow}>Price__High to Low</button></li>
                                <li><button className="dropdown-item" onClick={sortByPriceLowToHigh}>Price__Low to High</button></li>
                                <li><button className="dropdown-item" onClick={sortByNameAToZ}>a to z</button></li>
                                <li><button className="dropdown-item" onClick={sortByNameZToA}>z to a</button></li>
                            </ul>
                        </div>
                        <div className="dropdown row mt-3">
                            <div className="border dropdown-toggle text-start p-2" data-bs-toggle="dropdown">
                                Select Price to brand
                            </div>
                            <ul className="dropdown-menu">
                                <li>
                                    <div className="mx-2">
                                        {Array.from(new Set(products.map(product => product.brand))).map(brand => (
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
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown row pt-3">
                            <div className="border dropdown-toggle text-start p-2" data-bs-toggle="dropdown">
                                Discount
                            </div>
                            <ul className="dropdown-menu">
                                <li><input type="checkbox" className="mx-3" onChange={sortByDiscount} /> discount High to Low</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9 background shadow bg-body-tertiary rounded">
                        <div className="row pt-3">
                            {filteredProducts.map(items => (
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 mb-5 py-2" key={items.id}>
                                    <Link to={`product/${items.id}`} style={{ textDecoration: "none", color: "black" }}>
                                        <div className="card border hov">
                                            <img style={mystyle} src={items.image} alt="" className="img-fluid" />
                                            <div className="card-body">
                                                <p className="card-subtitle text-center">{items.name}</p>
                                                <p className="card-subtitle text-center">{items.brand}</p>
                                                <p className="card-subtitle text-center">{items.discount}%</p>
                                            </div>
                                            <h6 className="card-text text-center border">₹{items.price}</h6>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Man;
