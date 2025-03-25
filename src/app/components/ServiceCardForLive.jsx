"use client";
import React, { useEffect, useRef, useState } from 'react';
import { MdNoEncryptionGmailerrorred, MdSupportAgent, MdOutlinePrivacyTip } from "react-icons/md";
import { FaSteamSymbol, FaFireAlt } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";

import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useCart } from '../context/CartContext';

function ServiceCardForLive({ packageData, serviceName, placeholder }) {
    const router = useRouter();
    const sectionRef = useRef(null);
    const [isActiveQuantityCard, setIsActiveQuantityCard] = useState(1);
    const [isActiveDurationCard, setIsActiveDurationCard] = useState(1);
    const [currQuantity, setCurrQuantity] = useState(50);
    const [currDuration, setCurrDuration] = useState(15)
    const [currPrice, setCurrPrice] = useState(0)
    const [url, setUrl] = useState("");
    const [toast, setToast] = useState(false);
    const [urlError, setUrlError] = useState(false);

    function handleOnClickQuantity(item) {
        setIsActiveQuantityCard(item.id);
        setCurrQuantity(item.qnt)
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    function handleOnClickDuration(item) {
        setIsActiveDurationCard(item.id);
        setCurrDuration(item.duration)
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    function getPrice() {
        let totalMinutes = 30;
        let totalLiveViews = 50;
        let totalPrice = 1.50;

        // Calculate price per minute and price per live view
        let pricePerMinute = totalPrice / totalMinutes;
        let pricePerLiveView = totalPrice / totalLiveViews;

        // Calculate the current price based on given duration and live views
        let currentPrice = (pricePerMinute * currDuration) * (pricePerLiveView * currQuantity);
        setCurrPrice(currentPrice)
    }

    useEffect(() => {
        getPrice()
    }, [isActiveQuantityCard, isActiveDurationCard])
    const { cartItems, addItemToCart } = useCart();

    function handleAddToCart() {
        let nextId = cartItems.length;
        if (url === "") {
            setUrlError(true);
            return;
        }
        const item = {
            id: nextId + 1,
            serviceName,
            duration: currDuration + " Minutes",
            price: currPrice,
            quantity: currDuration,
            url: url
        };

        addItemToCart(item);
        setUrl("")
        setToast(true);
    }

    function handleGoToCart() {
        let nextId = cartItems.length;
        if (url === "") {
            setUrlError(true);
            return;
        }
        const item = {
            id: nextId + 1,
            serviceName,
            duration: currDuration + " Minutes",
            price: currPrice,
            quantity: currDuration,
            url: url
        };

        addItemToCart(item);
        router.push("/checkout");
        setUrl("")
    }
    useEffect(() => {
        if (toast) {
            setTimeout(() => {
                setToast(false)
            }, 2000)
        }
    }, [toast]);

    return (
        <div className='flex flex-col xl:flex-row lg:flex-col' id='services'>
            <div className='lg:w-[80%] w-full m-auto border p-2 lg:p-10 mt-7 relative rounded-2xl shadow-[0_2px_2px_rgba(0,0,0,0.10)]'>
                <div className='flex justify-center items-center'>
                    <p className=' absolute top-[-19px]  lg:top-[-26px] bg-white border py-1 px-4 lg:py-2 text-black lg:px-8 border-black rounded-md  text-lg font-semibold'>{serviceName}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='lg:flex sm:flex grid grid-cols-2 w-full justify-between text-sm font-medium border-b border-black p-5 lg:bg-red-100 bg-primary rounded-2xl'>
                        <div className='flex items-center gap-1 text-white lg:text-black'>
                            <FaFireAlt />
                            <span>100% Real</span>
                        </div>
                        <div className='flex items-center gap-1 text-white lg:text-black'>
                            <MdNoEncryptionGmailerrorred />
                            <span>No Password</span>
                        </div>
                        <div className='flex items-center gap-1 text-white lg:text-black'>
                            <MdSupportAgent />
                            <span>24/7 Support</span>
                        </div>
                        <div className='flex items-center gap-1 text-white lg:text-black'>
                            <MdOutlinePrivacyTip />
                            <span>100% Privacy</span>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row lg:flex-row justify-between items-center gap-3 p-2'>
                        <div className='bg-primary w-full lg:p-2 p-1 flex justify-center'>
                            <h6 className='text-lg font-semibold text-white'>Quantity</h6>
                        </div>
                        <div className='bg-primary w-full lg:p-2 p-1 lg:flex justify-center hidden'>
                            <h6 className='text-lg font-semibold text-white'>Duration</h6>
                        </div>
                    </div>
                    <div className='p-2'>
                        <div className='flex flex-col lg:flex-row justify-between items-center border-l-3'>
                            <div className='lg:w-[50%] w-full lg:border-r-2 flex justify-center'>
                                <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 md:grid-cols-5 grid-cols-3 gap-3'>
                                    {
                                        packageData?.quantity?.map((data, i) => (
                                            <div
                                                key={i}
                                                onClick={() => handleOnClickQuantity(data)}
                                                className={`rounded-md p-2 ${isActiveQuantityCard === data.id ? "bg-secondary text-white" : "bg-[#f1f3f5] text-black"} cursor-pointer hover:bg-secondary hover:text-white group flex justify-center flex-col items-center`}>
                                                <p className='text-2xl font-semibold'>{data.qnt}</p>
                                                <p className=''>Live Views</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='bg-primary w-full p-1 flex justify-center lg:hidden mt-6'>
                                <h6 className='text-lg font-semibold text-white'>Duration</h6>
                            </div>
                            <div className='lg:w-[50%] w-full lg:border-l-2 flex justify-center mt-6 lg:mt-0' ref={sectionRef}>
                                <div className='grid lg:grid-cols-4 grid-cols-4 md:grid-cols-5 gap-3'>
                                    {
                                        packageData?.durations?.map((data, i) => (
                                            <div
                                                key={i}
                                                onClick={() => handleOnClickDuration(data)}
                                                className={`rounded-md p-2 ${isActiveDurationCard === data.id ? "bg-secondary text-white" : "bg-[#f1f3f5] text-black"} cursor-pointer hover:bg-secondary hover:text-white group flex justify-center flex-col items-center`}>
                                                <p className='text-2xl font-semibold'>{data.duration}</p>
                                                <p className=''>Minutes</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='mt-7 lg:flex  gap-3 justify-between items-center'>
                            <div className='flex justify-center items-center lg:w-[65%]'>
                                <div className='lg:w-[14%] w-[25%] sm:w-[12%] md:w-[10%]'>
                                    <span className='text-xl font-semibold text-black'>$ {currPrice || 0}</span>
                                </div>
                                <div className='lg:w-[86%] w-[90%] flex justify-center items-center'>
                                    <input value={url} onChange={(e) => setUrl(e.target.value)} onClick={() => setUrlError(false)} className='border-2 p-2 w-full rounded-sm outline-none text-black border-secondary' type="text" placeholder={placeholder} />

                                </div>
                            </div>
                            <div className='lg:w-[35%] w-full mt-3 lg:mt-0 flex gap-3 justify-between lg:justify-end'>
                                <button onClick={handleAddToCart} className='bg-secondary w-full rounded-sm py-2 px-4 lg:px-1 xl:px-1 font-semibold text-white'>Add to Cart</button>
                                <button onClick={handleGoToCart} className='bg-secondary w-full rounded-sm py-2 px-4 lg:px-1 xl:px-1 font-semibold text-white'>Buy Now</button>
                            </div>
                        </div>
                        <div className='lg:w-[82%] m-auto'>
                            {
                                urlError ? <p className='text-primary text-sm font-medium'>{placeholder}</p> : null
                            }
                        </div>
                        {toast ? (
                            <div className='flex mt-4 items-center gap-2 p-2 text-slate-600 bg-green-200'>
                                <span><IoMdDoneAll /></span>
                                <p className='text-black'>
                                    The product has been added to your Shopping Cart.
                                </p>
                                <Link href={"/cart"}>Go to Cart</Link>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ServiceCardForLive;
