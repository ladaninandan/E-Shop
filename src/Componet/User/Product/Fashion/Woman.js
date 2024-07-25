import React, { useState } from "react";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import 'D:/project-react/my-project/src/Componet/User/TopDeals.css'


const Woman = () => {

    const [product, setproduct] = useState([
        {
            id: 1, name: 'aProduct 1', price: 30, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/top/0/x/g/xxl-top01-harshwal-clothing-original-imagwdpngeuwwdyg.jpeg?q=70', brand: 'Brand A', discount: 40
        },
        { id: 2, name: 'cProduct 2', price: 20, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/2/y/0/s-ku767grn-mokshi-original-imagk5myfhduxgfq.jpeg?q=70', brand: 'Brand A', discount: 50 },
        { id: 3, name: 'bProduct 3', price: 40, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/i/f/i/xxl-psk117-glorious-original-imafwsexqgtgjyhc-bb.jpeg?q=70', brand: 'Brand b', discount: 60 },
        { id: 4, name: 'Product 4', price: 10, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/6/d/l/xl-kr-32-wine-kriska-original-imagh4cvdchjrjcx.jpeg?q=70', brand: 'Brand c', discount: 40 },
        { id: 5, name: 'abroduct 5', price: 930, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/j/3/x/m-musted-big-bandhni-cheer-grahan-original-imaguad5kghchxur.jpeg?q=70', brand: 'Brand b', discount: 40 },
        { id: 7, name: 'cProduct 7', price: 620, image: 'https://rukminim2.flixcart.com/image/612/612/kpzt7680/kurta/c/k/i/s-12077o-black-libas-original-imag43q55hthhdwq.jpeg?q=70', brand: 'Brand A', discount: 50 },
        { id: 8, name: 'bProduct 8', price: 440, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/o/c/x/m-127-yellow-sa-rasa-original-imahyshxatuhdp7t.jpeg?q=70', brand: 'Brand b', discount: 60 },
        { id: 9, name: 'Product 9', price: 210, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/x/l/3/xs-23747o-libas-original-imagmwudzeyyxbhf.jpeg?q=70', brand: 'Brand c', discount: 70 },
    ]);

    const sortByPriceLowToHigh = () => {
        const sortedProducts = [...product].sort((a, b) => a.price - b.price);
        setproduct(sortedProducts);
    }


    const sortByPriceHighToLow = () => {
        const sortedProducts = [...product].sort((a, b) => b.price - a.price);
        setproduct(sortedProducts);
    }

    const sortByNameAToZ = () => {
        const sortedProducts = [...product].sort((a, b) => a.name.localeCompare(b.name));
        setproduct(sortedProducts);
    }

    const sortByNameZToA = () => {
        const sortedProducts = [...product].sort((a, b) => b.name.localeCompare(a.name));
        setproduct(sortedProducts);
    }

    // checkbox fliter 

    const [selectedBrands, setSelectedBrands] = useState([]);

    const handleBrandCheckboxChange = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter(item => item !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    }



    const sortByDiscount = () => {
        const sortedProducts = [...product].sort((a, b) => (b.discount - a.discount));
        setproduct(sortedProducts);
    };
    const filteredProducts = selectedBrands.length > 0 ? product.filter(product => selectedBrands.includes(product.brand)) : product;



    const mystyle = {
        width: "auto",/* Your fixed width */
        height: "310px", /* Your fixed height */
        overflow: "hidden", /* Hide any overflow */
        // img center
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",

    };


    return (
        <div >
            <Navbar />
            <div className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 background shadow bg-body-tertiary rounded  ">
                            <div className="header h2 ">
                                Filter
                                <hr className="border border-Black border-2 opacity-50"></hr>
                            </div>
                            <p className="text-center">Sort By</p>
                            <div className="dropdown row">
                                <div className="border  dropdown-toggle  text-start p-2" type="" data-bs-toggle="dropdown" >
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
                                <div className=" border  dropdown-toggle  text-start p-2" type="" data-bs-toggle="dropdown" >
                                    Select Price to brand
                                </div>
                                <ul className="dropdown-menu">
                                    <li><div className="mx-2" type="">{Array.from(new Set(product.map(product => product.brand))).map(brand => (
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
                                <div className="border  dropdown-toggle  text-start p-2" type="" data-bs-toggle="dropdown" >
                                    Discount
                                </div>
                                <ul className="dropdown-menu">
                                    <li> <input type="checkbox" className="mx-3" onChange={sortByDiscount} />discount High to Low</li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 background shadow bg-body-tertiary rounded ">
                            <div className="row pt-3">
                                {
                                    filteredProducts.map(items => (
                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3  mb-5 py-2 " key={items.id}>
                                            <Link to="" style={{ textDecoration: "none", color: "black" }}  >
                                                <div className="card border hov">
                                                    <img style={mystyle} src={items.image} alt="" className="img-fluid" />
                                                    <div className="card-body">
                                                        <p className="card-subtitle text-center">{items.name}</p>
                                                        <p className="card-subtitle text-center">{items.brand}</p>
                                                        <p className="card-subtitle text-center">{items.discount}%</p>
                                                    </div>
                                                    <h6 className="card-text text-center  border">₹{items.price}</h6>
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
        </div >
    )
}
export default Woman;