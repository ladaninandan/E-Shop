import axios from 'axios';
import React, { useState } from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

export default function Pay() {
    const location = useLocation();
    const { totalPriceToPay } = location.state || { totalPriceToPay: 0 };

    const [responseId, setResponseId] = useState("");
    const [responseState, setResponseState] = useState([]);




    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");

            script.src = src;

            script.onload = () => {
                resolve(true);
            }

            script.onerror = () => {
                resolve(false);
            }

            document.body.appendChild(script);
        });
    };

    const createRazorpayOrder = (amount) => {
        let data = JSON.stringify({
            amount: amount * 100,
            currency: "INR",
        });

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "http://localhost:5000/orders",
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                handleRazoepayScreen(response.data.amount);
            })
            .catch((error) => {
                console.error("Error creating order:", error);
            });
    };

    const handleRazoepayScreen = async (amount) => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("some error at razorpay screen loading");
            return;
        }

        const options = {
            key: "rzp_test_U30XP8raz2jBPn",
            amount: amount,
            currency: "INR",
            name: "E-Shop",
            description: "hi",
            image: "https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg",
            handler: function (response) {
                setResponseId(response.razorpay_payment_id);
            },
            prefill: {
                name: "E-Shop",
                email: "ladaninandan46@gmail.com",
            },
            theme: {
                color: "#F4C430",
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    const paymentFetch = (e) => {
        e.preventDefault();
        const paymentId = e.target.paymentId.value;

        axios.get(`http://localhost:5000/payment/${paymentId}`)
            .then((response) => {
                console.log(response.data);
                setResponseState(response.data);
            })
            .catch((error) => {
                console.error("Error fetching payment:", error);
            });
    };

    const getdeatiles = async () => {
        await axios.post("http://localhost:5000/payment")
    }

    const [orderId, setOrderId] = useState('');
    const [showOrderId, setShowOrderId] = useState('');

    const handleDownload = async () => {
        try {
            const response = await fetch(`http://localhost:5000/download-receipt?order_id=${orderId.trim()}`);

            if (!response.ok) {
                throw new Error('Failed to download the PDF');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `order-receipt-${orderId.trim()}.pdf`;
            a.click();
            window.URL.revokeObjectURL(url);

            // Set the order ID to be displayed
            setShowOrderId(orderId.trim());
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };


    return (
        <div>
            < div className="alert alert-success text-center" style={{ minWidth: "100%" }} role="alert">
                <h3 className='text-center'>This is payment verification form</h3>
            </div>
            <div className='container'>
                <div className="text-center">
                    <button className='btn btn-success' onClick={() => createRazorpayOrder(totalPriceToPay)}>payment <FaRupeeSign />{totalPriceToPay}</button>
                </div>
                <div className="text-center mt-5">
                    {
                        responseId && <h5>PaymentID:- {responseId}</h5>
                    }
                </div>

                <form onSubmit={paymentFetch} className='mt-4'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="input-group mb-3 ">
                                <input type="text" name="paymentId" className="form-control " placeholder="Recipient's PaymentId" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn  btn-success" type="submit" id="button-addon2">Featch</button>
                            </div>
                            {responseState.length !== 0 && (
                                <ul className="list-group h5">
                                    <li className="list-group-item">Amount:- {responseState.amount / 100}rs.</li>
                                    <li className="list-group-item">currency:- {responseState.currency}</li>
                                    <li className="list-group-item">Payment status:- {responseState.status}</li>
                                    <li className="list-group-item">Payment method:- {responseState.method}</li>
                                </ul>
                            )}
                        </div>
                        <div className="col-lg-6">
                            <h1>Download Order Receipt</h1>
                            <input
                                type="text"
                                placeholder="Enter Order ID"
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                            />
                            <button onClick={handleDownload}>Download PDF</button>

                            {/* Display the Order ID after the user downloads the PDF */}
                            {showOrderId && (
                                <div>
                                    <h2>Order ID:</h2>
                                    <p>{showOrderId}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
