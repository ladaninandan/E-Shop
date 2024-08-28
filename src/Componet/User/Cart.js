import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import Navbar from "./Navbar";
import { MdFileDownloadDone, MdRemoveShoppingCart } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { BsFillSaveFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


export default function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);



  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch('http://localhost:5000/showdatacart');
        const data = await response.json();
        console.log(data)
        setCart(data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, [dispatch]);

  const handleRemoveFromCart = async (itemId) => {
    console.log(itemId)
    try {
      const response = await fetch(`http://localhost:5000/deleteartitems/${itemId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        dispatch(removeFromCart(itemId));
        setCart(cart.filter(item => item.id !== itemId));
      } else {
        console.error('Failed to remove item from cart');
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  // Calculate the total price of items in the cart
  const totalItemPrice = cart.reduce((total, item) => total + item.price, 0);
  const taxesAndCharges = 100; // Example value for taxes and charges
  const totalPriceToPay = totalItemPrice + taxesAndCharges;

  const handleBuyitems = () => {
    navigate("/Buytoproduct", { state: { totalPriceToPay } });
  }
  return (
    <div>
      <Navbar />
      <div className="mt-2">
        <div className="container">
          <div className="row">
            {/* Shopping Cart Section */}
            <div className="col-lg-7 col-md-7 col-sm-12 bg-white shadow-lg mb-3">
              <div className="row">
                <div className="h4 m-3">Shopping Cart</div>
                <hr className="border border-secondary border-1 opacity-25" />
                {cart.map((item) => (
                  <div className="row mb-3" key={item.id}>
                    <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
                      <div className="text-center">
                        <img src={item.image} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12">
                      <div className="text-end">Price: ₹{item.price}</div>
                      <div className="h6">{item.name}</div>
                      <div className="h6">{item.brand}</div>
                      <span className="h6">Discount: {item.discount}%</span>
                      <div className="text-success">In Stock</div>
                      <p>{item.ProductDetails}</p>
                      <button
                        className="btn btn-outline-danger btn-sm me-2"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        <MdRemoveShoppingCart size="20px" /> Remove
                      </button>
                      <button className="btn btn-sm btn-outline-info">
                        <BsFillSaveFill size="20px" /> Save for Later
                      </button>
                    </div>
                    <hr className="border border-black border-1 opacity-25 mt-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Total Amount Section */}
            <div className="col-lg-4 col-md-5 col-sm-12 bg-white shadow-lg mx-lg-2">
              <div className="h4 m-2">Total Amount</div>
              <hr className="border border-black border-1 opacity-50" />
              <div>
                <div className="text-success fw-bold" style={{ fontSize: '11.2px' }}>
                  <MdFileDownloadDone /> Your order is eligible for FREE Delivery
                </div>
                <div className="pay-items">
                  <div className="row m-2">
                    <div className="col-8">Item Total:</div>
                    <div className="col-4 text-end">
                      <FaRupeeSign />{totalItemPrice}
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-8">Taxes & Charges:</div>
                    <div className="col-4 text-end">
                      <FaRupeeSign />{taxesAndCharges}
                    </div>
                  </div>
                  <hr className="border border-black border-1 opacity-50 mt-2" />
                  <div className="row m-2">
                    <div className="col-8">To Pay:</div>
                    <div className="col-4 text-end">
                      <FaRupeeSign />{totalPriceToPay}
                    </div>
                  </div>
                </div>
              </div>
              <div className="buy-button text-center mt-3">
                <button
                  className={`btn btn-success w-100 ${cart.length > 0 ? '' : 'disabled'}`}
                  onClick={handleBuyitems}
                >
                  Buy Now <FaRupeeSign />{totalPriceToPay}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
