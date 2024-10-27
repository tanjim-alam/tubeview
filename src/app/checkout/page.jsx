"use client";
import React, { useEffect, useState } from 'react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useCart } from '../context/CartContext';
import countries from "../constant/general/countries.json";
import { useRouter } from 'next/navigation'
import Spinner from '../components/Spinner';
function Page() {
    const router = useRouter()
    const { cartItems, totalPrice, clearCart } = useCart();
    const [isReadyToPayment, setIsReadyToPayment] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [billingDetails, setBillingDetails] = useState({
        name: "",
        email: "",
        country: "",
        message: ""
    });

    function handleInput(e) {
        const { name, value } = e.target;
        setBillingDetails(prev => ({ ...prev, [name]: value }));
    }

    function handleReadyToPayment() {
        const { name, email, country } = billingDetails;
        if (!name || !email || !country) {
            alert("Please enter required details");
            return;
        }
        setIsReadyToPayment(true);
    }

    async function sendOrderToAdmin() {
        try {
            setIsLoading(true);
            // document.getElementById('spinnerModal').showModal()
            let orderId = Math.floor((Math.random() * 10000) + 1111);
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const longDate = now.toLocaleDateString('en-US', options);
            const orderDetails = {
                id: orderId,
                date: longDate,
                billingDetails,
                products: cartItems,
                totalPrice
            }
            const res = await fetch('/api/smtp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ orderDetails }),
            });
            console.log(res);
            if (res?.ok) {
                localStorage.setItem("Order", JSON.stringify(orderDetails));
                clearCart();
                setIsLoading(false)
                router.push("/thankyou")
            }
            else {
                setIsLoading(false);
                alert("Order failed please try again");

            }
        } catch (error) {
            setIsLoading(false);
            alert("Order failed please try again");
        }
    }

    useEffect(() => {
        if (isLoading) {
            document.getElementById('spinnerModal').showModal()
        }
    }, [isLoading])


    return (
        <PayPalScriptProvider options={{ "client-id": "AdGX5uNCSCHAnafWXR40TLgMtPceAh2p2yOaqna3nR35DOA-1ogYdDyWkOLlsVIyxS0db8i0JPs7KhuE" }}>
            <div className='bg-[#f4f4fa] h-full'>
                {/* ======================== */}
                {isLoading ? <Spinner /> : null}

                {/* ========================= */}
                <div className='lg:w-[60%] w-[95%] m-auto flex flex-col md:flex-row lg:flex-row gap-10 py-10 lg:py-20'>
                    {/* Billing Details */}
                    <div className='lg:w-[55%] w-full flex flex-col gap-4 p-6 lg:p-16 bg-white rounded-3xl' style={{ boxShadow: "0 6px 6px rgba(0, 0, 0, .04), 0 0 42px rgba(0, 0, 0, .04)" }}>
                        <h4 className='lg:text-3xl text-2xl font-bold text-center'>BILLING DETAILS</h4>
                        <div className='flex flex-col'>
                            <label className='text-[15px] text-black'>Name <span className='text-orange-600'>*</span></label>
                            <input
                                type="text"
                                placeholder='First name'
                                name='name'
                                value={billingDetails.name}
                                onChange={handleInput}
                                className='border p-3 outline-none w-full rounded text-black'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[15px] text-black'>Email <span className='text-orange-600'>*</span></label>
                            <input
                                type="email"
                                placeholder='Email address'
                                name='email'
                                value={billingDetails.email}
                                onChange={handleInput}
                                className='border p-3 outline-none w-full rounded text-black'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[15px] text-black'>Country <span className='text-orange-600'>*</span></label>
                            <select id="country" className="border p-3 outline-none w-full text-black" name='country' onChange={handleInput}>
                                <option className="text-black" value="">Select a country</option>
                                {countries.map((country) => (
                                    <option className="text-black" key={country.code} value={country.name}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className='text-[15px] text-black'>Message</label>
                            <textarea
                                name="message"
                                value={billingDetails.message}
                                onChange={handleInput}
                                placeholder='Additional Information'
                                className='border p-3 outline-none w-full rounded text-black'
                            />
                        </div>
                    </div>

                    {/* Order Summary and Payment */}
                    <div className='lg:w-[50%] w-full bg-white p-6 lg:p-16 h-fit rounded-3xl' style={{ boxShadow: "0 6px 6px rgba(0, 0, 0, .04), 0 0 42px rgba(0, 0, 0, .04)" }}>
                        <h5 className='lg:text-3xl text-2xl font-bold text-center text-black'>YOUR ORDER</h5>
                        <div className='mt-3'>
                            <div className='flex flex-col gap-8'>
                                <div className='flex flex-col gap-8 mt-3'>
                                    <div className='flex justify-between items-center border-b border-slate-300 pb-1'>
                                        <span className='font-medium text-slate-500 px-1 '>Total Items</span>
                                        <span className='font-medium px-1 text-black'>{cartItems.length || 0}</span>
                                    </div>
                                    <div className='flex justify-between items-center border-b border-slate-300 pb-1'>
                                        <span className='font-medium text-slate-500 px-1'>Total Price</span>
                                        <span className='font-medium px-1 text-black'>$ {totalPrice || 0}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center mt-8 text-lg'>
                                <span className='font-medium px-1 text-black'>Total To Pay</span>
                                <span className='font-medium px-1 text-black'>$ {totalPrice || 0}</span>
                            </div>
                            <div className='mt-5'>
                                {isReadyToPayment ? <span className='text-sm text-black'>Select Payment Methods</span> : null}
                                <div className='mt-3'>
                                    {isReadyToPayment ? (
                                        <div>
                                            <PayPalButtons
                                                createOrder={(data, actions) => {
                                                    return actions.order.create({
                                                        purchase_units: [{
                                                            amount: {
                                                                value: (totalPrice).toFixed(2)
                                                            },
                                                        }],
                                                    });
                                                }}
                                                onApprove={async (data, actions) => {
                                                    const details = await actions.order.capture();
                                                    if (details.status === "COMPLETED") {
                                                        sendOrderToAdmin();

                                                    }
                                                }}
                                                onError={(err) => {
                                                    console.error("PayPal error:", err);
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <button onClick={handleReadyToPayment} className='p-3 bg-secondary text-lg font-medium text-white w-full rounded-md'>
                                            {isLoading ? "Sending Order" : "Go To Payment"}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PayPalScriptProvider>
    );
}

export default Page;
