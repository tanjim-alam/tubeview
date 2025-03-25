"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function ThankYouPage() {
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        const order = JSON.parse(localStorage.getItem("Order"));
        if (order) {
            setOrderData(order);
        }
    }, []);

    return (
        <div className='bg-[#e4effa] min-h-screen py-10 lg:px-4'>
            <div className='max-w-4xl lg:w-[40%] mx-auto bg-white shadow-md'>
                <h1 className='bg-secondary text-white text-2xl md:text-4xl font-semibold text-center p-4'>Thank You</h1>
                <p className='text-slate-600 p-4 text-center'>
                    Your Order Received. Check registered email for confirmation.
                </p>
                <div className='flex flex-col md:flex-row justify-between items-center p-4'>
                    <div className='mb-4 md:mb-0'>
                        <span className='text-slate-600 font-medium'>Order Number: </span>
                        <span className='text-secondary font-medium'>#{orderData?.id}</span>
                    </div>
                    <div>
                        <span className='text-slate-600 font-semibold'>Date: </span>
                        <span className='text-slate-600'>{orderData?.date}</span>
                    </div>
                </div>
                <div className='border-t-2 border-black'>
                    <div>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="text-left px-2 md:px-5 py-2 border-b-2 border-black text-slate-600">Product</th>
                                    <th className="text-right px-2 md:px-5 py-2 border-b-2 border-black text-slate-600">Type</th>
                                    <th className="text-right px-2 md:px-5 py-2 border-b-2 border-black text-slate-600">Quantity</th>
                                    <th className="text-right px-2 md:px-5 py-2 border-b-2 border-black text-slate-600">Price</th>
                                </tr>
                            </thead>
                            <tbody className='px-2 md:px-5'>
                                {orderData?.products?.map((data, i) => (
                                    <tr key={i}>
                                        <td className="px-2 md:px-5 py-2 border-b border-gray-300 text-slate-600">
                                            <span>{data?.serviceName}</span>
                                            <span className="mt-2 block">
                                                Link{' '}:
                                                <a href={data?.url} className="text-green-600 no-underline">
                                                    {data?.url?.substring(0, 16)}...
                                                </a>
                                            </span>
                                            {data?.duration ? <span>Duration: {data?.duration}</span> : null}
                                        </td>
                                        <td className="text-right px-2 md:px-5 py-2 border-b border-gray-300 text-slate-600">{data?.serviceType}</td>
                                        <td className="text-right px-2 md:px-5 py-2 border-b border-gray-300 text-slate-600">{data?.quantity}</td>
                                        <td className="text-right px-2 md:px-5 py-2 border-b border-gray-300 text-slate-600">${data?.price}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td className="px-2 md:px-5 py-2"></td>
                                    <td className="px-2 md:px-5 py-2"></td>
                                    <td className="text-right px-2 md:px-5 py-2 border-t border-gray-300 text-slate-600">Subtotal:</td>
                                    <td className="text-right px-2 md:px-5 py-2 border-t border-gray-300 text-slate-600">${orderData?.totalPrice}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 md:px-5 py-2"></td>
                                    <td className="px-2 md:px-5 py-2"></td>
                                    <td className="text-right px-2 md:px-5 py-2 text-slate-600">Shipping:</td>
                                    <td className="text-right px-2 md:px-5 py-2 text-slate-600">$0.00</td>
                                </tr>
                                <tr>
                                    <td className="px-2 md:px-5 py-2"></td>
                                    <td className="px-2 md:px-5 py-2"></td>
                                    <td className="text-right px-2 md:px-5 py-2 border-t border-gray-300 font-bold text-slate-600">Total:</td>
                                    <td className="text-right px-2 md:px-5 py-2 border-t border-gray-300 font-bold text-slate-600">${orderData?.totalPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="border-b-2 border-black"></div>
                <div className='p-5 text-slate-600'>
                    <h2 className="text-green-600">Shipping Information</h2>
                    <p className="text-gray-600">
                        {orderData?.billingDetails?.name}<br />
                        {orderData?.billingDetails?.email}<br />
                        {orderData?.billingDetails?.country} <br />
                        {orderData?.billingDetails?.message}
                    </p>
                </div>
                <div className="border-b-2 border-black"></div>
                <div className='p-5 text-slate-600'>
                    <h2 className="text-green-600">Need Help?</h2>
                    <p className="text-gray-600">
                        If you have any questions about your order, please contact our customer service team at{' '}
                        <a href="mailto:support@gofamy.com" className="text-green-600 no-underline">
                            support@gofamy.com
                        </a>.
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <Link href={"/"} className='text-center text-secondary underline'>Go back to home</Link>
            </div>
        </div>
    );
}

export default ThankYouPage;
