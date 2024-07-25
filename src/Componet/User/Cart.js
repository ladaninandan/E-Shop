import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice';
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
        setCart(data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };


    fetchCartData();
  }, []);

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
            <div className="col-7 bg-white shadow-lg">
              <div className="row">
                <div className="h4 m-3">
                  Shopping Cart
                </div>
                <hr className="border border-secondary border-1 opacity-25" />
                {cart.map((item) => (
                  <div className="row" key={item.id}>
                    <div className="col-3">
                      <div className="text-center">
                        <img src={item.image} alt="" className='img-fluid' width="110px" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className='text-end'>Price: ₹{item.price}</div>
                      <div className="h6">
                        {item.name}
                      </div>
                      <div className="h6">
                        {item.brand}
                      </div>
                      <span className="h6">Discount: {item.discount}%</span>
                      <div className="text-success">
                        In Stock
                      </div>
                      <p>{item.ProductDetails}</p>
                      <button className='btn btn-outline-danger btn-sm' onClick={() => handleRemoveFromCart(item.id)}><MdRemoveShoppingCart size="20px" /> Remove</button>
                      <button className='btn btn-sm btn-outline-info mx-1'><BsFillSaveFill size="20px" /> Save for Later</button>
                    </div>
                    <hr className="border border-black border-1 opacity-25 mt-2" />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-4 bg-white shadow-lg mx-2">
              <div className="h4 m-2">
                Total Amount
              </div>
              <hr className="border border-black border-1 opacity-50" />
              <div>
                <div className="text-success fw-bold" style={{ fontSize: "11.2px" }}>
                  <MdFileDownloadDone /> Your order is eligible for FREE Delivery
                </div>
                <div className="pay-items">
                  <div className="row m-2 text-c">
                    <div className="col-8">
                      Item Total:
                    </div>
                    <div className="col-4">
                      <FaRupeeSign />{totalItemPrice}
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-8">
                      Taxes & Charges:
                    </div>
                    <div className="col-4">
                      <FaRupeeSign />{taxesAndCharges}
                    </div>
                  </div>
                  <hr className="border border-black border-1 opacity-50 mt-2" />
                  <div className="row m-2">
                    <div className="col-8">
                      To Pay:
                    </div>
                    <div className="col-4">
                      <FaRupeeSign />{totalPriceToPay}
                    </div>
                  </div>
                </div>
              </div>
              <div className="buy-button text-center">
                {

                  <button className={`btn btn-success ${cart.length > 0 ? null : "disabled"} `} onClick={handleBuyitems}>
                    Buy Now  <FaRupeeSign />{totalPriceToPay}
                  </button>

                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
