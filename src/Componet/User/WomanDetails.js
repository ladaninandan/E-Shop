import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { FaShoppingCart, FaTag } from "react-icons/fa";
import { SiPowerautomate } from "react-icons/si";
import { addToCart } from '../../store/cartSlice';

const Detail = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const Woman = useSelector((state) => state.product.Woman);
   const { id } = useParams();
   const product = Woman.find(p => p.Woman_id === parseInt(id));

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
            <div className="row bg-white p-3 shadow-sm">
               {/* Product Image Section */}
               <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 text-center mb-4">
                  <img src={product.image} alt={product.name} className="img-fluid mb-3" style={{ maxHeight: '400px', objectFit: 'contain' }} />
                  <div className="row mt-3 justify-content-center">
                     <div className="col-12 col-sm-6 mb-2">
                        <button className="btn btn-primary w-100 " onClick={handleAddToCart}>
                           <FaShoppingCart className="me-2" />
                           Add  Cart
                        </button>
                     </div>
                     <div className="col-12 col-sm-6 mb-2">
                        <button className="btn btn-warning w-100 ">
                           <SiPowerautomate className="me-2" />
                           Buy Now
                        </button>
                     </div>
                  </div>
               </div>

               {/* Product Details Section */}
               <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12">
                  <h2 className="fw-bold">{product.name}</h2>
                  <h4 className="fw-bold text-muted">{product.brand}</h4>
                  <p className="h5 mt-3">{product.ProductDetails}</p>
                  <p className="text-success h4">{product.PriceTag}</p>
                  <div className="mt-3 h3 d-flex align-items-center flex-wrap">
                     <span>Price: ₹{product.price}</span>
                     <span className="ms-md-5 ms-3 text-danger">Discount: {product.discount}%</span>
                  </div>
                  <p className="mt-3">About: {product.about}</p>
                  <div className="row mt-3">
                     <div className="col-auto fw-bold">Size:</div>
                     <div className="col-auto mb-2">
                        <button type="button" className="btn btn-outline-dark rounded-pill">26</button>
                     </div>
                     <div className="col-auto mb-2">
                        <button type="button" className="btn btn-outline-dark rounded-pill">30</button>
                     </div>
                     <div className="col-auto mb-2">
                        <button type="button" className="btn btn-outline-dark rounded-pill">32</button>
                     </div>
                     <div className="col-auto mb-2">
                        <button type="button" className="btn btn-outline-dark rounded-pill">36</button>
                     </div>
                  </div>
                  <ul className="list-unstyled mt-3">
                     <li className="mb-2"><FaTag className="me-2 text-primary" /> Bank Offer: Get ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and above</li>
                     <li className="mb-2"><FaTag className="me-2 text-primary" /> Bank Offer: 5% Cashback on Flipkart Axis Bank Card</li>
                     <li className="mb-2"><FaTag className="me-2 text-primary" /> Combo Offer: Buy 3 items save 3%; Buy 4 or more save 5%</li>
                     <li className="mb-2"><FaTag className="me-2 text-primary" /> Special Price: Get extra 9% off (price inclusive of cashback/coupon)</li>
                     <li className="mb-2"><FaTag className="me-2 text-primary" /> No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999</li>
                     <li className="mb-2"><FaTag className="me-2 text-primary" /> Buy for ₹2000 get ₹500 off your Next Buy</li>
                     <li className="mb-2"><FaTag className="me-2 text-primary" /> Partner Offer: Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*</li>
                  </ul>
                  <div className="text-danger mt-4">
                     <span className="text-black">Seller: </span>This product has a 10 Days Return Policy
                  </div>
               </div>
            </div>
         </div>

      </div>
   );
}

export default Detail;
