"use client"
import React, { useContext, useEffect, useState } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import { useCart } from '../context/CartContext';
// AUUMinS7Bgotcs7qemDMqchLepIQJjtI-HAW0_ppf3EWceYdEATO9-cydIaDGvZh5e5eGARDawg1P329

function Page() {
    const { cartItems, totalPrice } = useCart();
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [isReadyToPayment, setIsReadyToPayment] = useState(false);
    const [billingDetails, setBillingDetails] = useState({
        name: "",
        email: "",
        country: "",
        message: ""
    })

    function handleInput(e) {
        const { name, value } = e.target;
        setBillingDetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const addPaypalScript = () => {
        if (window.paypal) {
            setScriptLoaded(true);
            return;
        }
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `https://www.paypal.com/sdk/js?client-id=AdGX5uNCSCHAnafWXR40TLgMtPceAh2p2yOaqna3nR35DOA-1ogYdDyWkOLlsVIyxS0db8i0JPs7KhuE`;
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);
    };

    useEffect(() => {
        addPaypalScript();
    }, []);

    function handleReadyToPayment() {
        if (!billingDetails.name || !billingDetails.email || !billingDetails.country) {
            alert("Please enter required details");
            return;
        }
        setIsReadyToPayment(true);
    }

    function sendOrderToAdmin() {
        console.log(billingDetails, cartItems)
    }
    return (
        <div className='bg-[#f4f4fa] h-full'>
            <div className='lg:w-[60%] w-[95%] m-auto flex flex-col md:flex-row lg:flex-row gap-10 py-10 lg:py-20'>
                <div className='lg:w-[55%] w-full flex flex-col gap-4 p-6 lg:p-16 bg-white rounded-3xl' style={{ boxShadow: "0 6px 6px rgba(0, 0, 0, .04), 0 0 42px rgba(0, 0, 0, .04)" }}>
                    <h4 className='lg:text-3xl text-2xl font-bold text-center'>BILLING DETAILS</h4>
                    <div className='flex flex-col justify-between'>
                        <label htmlFor="" className='text-[15px]'>Name <span className='text-orange-600'>*</span></label>
                        <input
                            type="text"
                            placeholder='First name'
                            name='name'
                            value={billingDetails.name}
                            onChange={handleInput}
                            className='border p-3 outline-none w-full rounded'
                        />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <label htmlFor="" className='text-[15px]'>Email <span className='text-orange-600'>*</span></label>
                        <input
                            type="email"
                            placeholder='Email address'
                            name='email'
                            value={billingDetails.emailAddress}
                            onChange={handleInput}
                            className='border p-3 outline-none w-full rounded'
                        />

                    </div>
                    <div className='flex flex-col justify-between'>
                        <label htmlFor="" className='text-[15px]'>Country <span className='text-orange-600'>*</span></label>
                        <input
                            type="text"
                            placeholder='Country name'
                            name='country'
                            value={billingDetails.country}
                            onChange={handleInput}
                            className='border p-3 outline-none w-full rounded'
                        />
                    </div>
                    <div>
                        <label htmlFor="" className='text-[15px]'>Message</label>
                        <textarea
                            name="message"
                            id=""
                            value={billingDetails.message}
                            onChange={handleInput}
                            placeholder='Additional Information'
                            className='border p-3 outline-none w-full rounded'
                        >
                        </textarea>
                    </div>
                </div>
                <div className='lg:w-[50%] w-full bg-white p-6 lg:p-16 h-fit rounded-3xl' style={{ boxShadow: "0 6px 6px rgba(0, 0, 0, .04), 0 0 42px rgba(0, 0, 0, .04)" }}>
                    <h5 className='lg:text-3xl text-2xl font-bold text-center'>YOUR ORDER</h5>
                    <div className=' mt-3'>
                        <div className='flex flex-col gap-8'>

                            <div className='flex flex-col gap-8 mt-3 '>
                                <div className='flex justify-between items-center border-b border-slate-300 pb-1'>
                                    <span className='font-medium text-slate-500 px-1'>Total Items</span>
                                    <span className='font-medium px-1'>{cartItems.length || 0}</span>
                                </div>
                                <div className='flex justify-between items-center border-b border-slate-300 pb-1'>
                                    <span className='font-medium text-slate-500 px-1'>Total Price</span>
                                    <span className='font-medium px-1'>$ {totalPrice || 0}</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-8 text-lg'>
                            <span className='font-medium px-1'>Total To Pay</span>
                            <span className='font-medium px-1'>$ {totalPrice || 0}</span>
                        </div>
                        <div className='mt-5'>
                            {isReadyToPayment ? <span className='text-sm'>Select Payment Methods</span> : null}
                            <div className='mt-3'>
                                {
                                    isReadyToPayment ? (
                                        <div>
                                            {scriptLoaded ? (
                                                <PayPalButton
                                                    amount={totalPrice || 1}
                                                    onSuccess={(details, data) => {
                                                        console.log(details.status, data)
                                                        if (details.status == "COMPLETED") {
                                                            sendOrderToAdmin();
                                                        }
                                                    }
                                                    }
                                                />
                                            ) : (
                                                <span>Loading...</span>
                                            )}
                                        </div>
                                    ) : (
                                        <button onClick={handleReadyToPayment} className='p-3 bg-secondary text-lg font-medium text-white w-full rounded-md'>Go To Payment</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
