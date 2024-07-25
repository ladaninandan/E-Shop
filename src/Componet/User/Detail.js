import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { FaShoppingCart, FaTag } from "react-icons/fa";
import { SiPowerautomate } from "react-icons/si";
import { addToCart } from '../../store/cartSlice';

const Detail = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = async () => {
        try {
            const response = await fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product_id: product.id,
                    name: product.name,
                    brand: product.brand,
                    price: product.price,
                    discount: product.discount,
                    image: product.image,
                    quantity: 1
                }),
            });

            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
        navigate("/Cart");
    };


    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <div className="row bg-white">
                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-5 col-xs-2" >
                        <img src={product.image} alt={product.name} className='img-fluid text-center' />
                        <div className="row">
                            <div className=" align-items-start mt-1 col-6 col-xs-6  col-lg-6 col-xl-6">
                                <button className="btn btn-primary" onClick={handleAddToCart}>
                                    <FaShoppingCart />
                                    Add to cart
                                </button>
                            </div>
                            <div className=" align-items-start mt-1  col-6  col-xs-6 col-xl-5">
                                <button className="btn btn-warning">
                                    <SiPowerautomate />
                                    Buy  Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-xs-10 mt-3">
                        <p className='fw-bold '>{product.name}</p>
                        <p className='fw-bold '>{product.brand}</p>
                        <p className='h5'>{product.ProductDetails}</p>
                        <p className='text-success'>{product.PriceTag}</p>
                        <div className="mt-3">
                            <div className="h3">
                                Price: ₹{product.price}
                                <span className="ms-5 ">Discount: {product.discount}%</span>
                            </div>
                        </div>
                        <div>{product.ProductDetails}</div>
                        <p className="mt-3">About: {product.about}</p>
                        <div className="row ">
                            <div className="col-lg-1 ">Size:</div>
                            <div className="col-lg-1">
                                <button type="button" className="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on bottom">
                                    26
                                </button>
                            </div>
                            <div className="col-lg-1 ">
                                <button type="button" className="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
                                    30
                                </button>
                            </div>
                            <div className="col-lg-1 ">
                                <button className='btn btn-dark'>32</button>
                            </div>
                            <div className="col-lg-1 ">
                                <button className='btn btn-dark'>36</button>
                            </div>
                            <div className="row mt-3">

                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item mt-2">
                                        <FaTag /> Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and above
                                    </li>
                                    <li className="nav-item mt-2">
                                        <FaTag />  Bank Offer5% Cashback on Flipkart Axis Bank Card
                                    </li>
                                    <li className="nav-item mt-2">
                                        <FaTag />  Combo OfferBuy 3 items save 3%; Buy 4 or more save 5%
                                    </li>
                                    <li className="nav-item mt-2">
                                        <FaTag />  Special PriceGet extra 9% off (price inclusive of cashback/coupon)
                                    </li>
                                    <li className="nav-item mt-2">
                                        <FaTag /> No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999
                                    </li>
                                    <li className="nav-item mt-2">
                                        <FaTag /> Buy for 2000 get ₹500 off your Next Buy
                                    </li>
                                    <li className="nav-item mt-2">
                                        <FaTag /> Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*
                                    </li>
                                </ul>
                            </div>
                            <div className="row mt-4">
                                <div className='text-danger'><span className='text-black'>seller :-</span>This product 10 Days Return Policy </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;

