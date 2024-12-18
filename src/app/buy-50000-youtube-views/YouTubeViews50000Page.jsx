
"use client";
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import { IoSearch } from "react-icons/io5";
import { IoMdWatch, IoIosStarHalf, IoIosStar, IoMdDoneAll } from "react-icons/io";
import { BsGraphDownArrow } from "react-icons/bs";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaSteamSymbol, FaFireAlt } from "react-icons/fa";
import { MdSupportAgent, MdOutlinePayment, MdLockOutline, MdOutlineWarning, MdLightMode, MdNoEncryptionGmailerrorred, MdOutlinePrivacyTip } from "react-icons/md";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';



function YouTubeViews50000Page() {
    const router = useRouter();
    const [urlError, setUrlError] = useState(false);
    const [toast, setToast] = useState(false);

    const viewsData = [
        {
            id: 1,
            type: "High Quality",
            value: "STANDARD",
            keys: [
                "High Quality Views",
                "Fast delivery",
                "No password required",
                "24/7 support"
            ],
            packages: [
                {
                    id: 1,
                    quantity: "50000/50k",
                    price: 450
                },
                {
                    id: 2,
                    quantity: "70000/70k",
                    price: 650
                },
                {
                    id: 3,
                    quantity: "80000/80k",
                    price: 950
                },
                {
                    id: 4,
                    quantity: "100000/1M",
                    price: 1000
                },
            ]
        },
        {
            id: 2,
            type: "Premium",
            value: "PREMIUM",
            keys: [
                "High Quality Views",
                "Fast delivery",
                "No password required",
                "24/7 support"
            ],
            packages: [
                {
                    id: 1,
                    quantity: "50000/50k",
                    price: 470
                },
                {
                    id: 2,
                    quantity: "70000/70k",
                    price: 670
                },
                {
                    id: 3,
                    quantity: "80000/80k",
                    price: 970
                },
                {
                    id: 4,
                    quantity: "100000/1M",
                    price: 1070
                },
            ]
        },
        {
            id: 3,
            type: "Influncer",
            value: "STANDARD",
            keys: [
                "High Quality Views",
                "Fast delivery",
                "No password required",
                "24/7 support"
            ],
            packages: [
                {
                    id: 1,
                    quantity: "50000/50k",
                    price: 450
                },
                {
                    id: 2,
                    quantity: "70000/70k",
                    price: 650
                },
                {
                    id: 3,
                    quantity: "80000/80k",
                    price: 950
                },
                {
                    id: 4,
                    quantity: "100000/1M",
                    price: 1000
                },
            ]
        },
    ]
    const [currTypePackages, setCurrTypePackages] = useState(viewsData[0]);
    const [currItem, setCurrItem] = useState(viewsData[0].packages[0]);
    const [youtubeVideoLink, setYoutubeVideoLink] = useState("");
    const [currBtn, setCurrBtn] = useState("High Quality");
    const [currItemPrice, setCurrItemPrice] = useState(currItem?.price)
    console.log(currItemPrice)
    function handleOnChangePackageType(type) {
        const selectedPackageType = viewsData?.find((packageType) => packageType.type == type);
        setCurrBtn(type);
        if (selectedPackageType) {
            setCurrTypePackages(selectedPackageType)
            setCurrItemPrice(selectedPackageType?.packages[0]?.price)
            handleOnChange(selectedPackageType?.packages[0]?.id)
        }
    }
    function handleOnChange(id) {
        const selectedItem = currTypePackages?.packages?.find(item => item.id == id);
        if (selectedItem) {
            setCurrItem(selectedItem);
            setCurrItemPrice(selectedItem?.price)
        }
    }

    const { cartItems, addItemToCart } = useCart();
    function handleAddToCart() {
        let nextId = cartItems.length;
        if (youtubeVideoLink === "") {
            setUrlError(true);
            return;
        }
        const item = {
            id: nextId + 1,
            serviceName: "Real YouTube Views",
            serviceType: "General",
            price: currItem.price,
            quantity: currItem.quantity,
            url: youtubeVideoLink
        };

        addItemToCart(item);
        setYoutubeVideoLink("")
        setToast(true);
    }

    function handleGoToCart() {
        let nextId = cartItems.length;
        if (youtubeVideoLink === "") {
            setUrlError(true);
            return;
        }
        const item = {
            id: nextId + 1,
            serviceName: "Real YouTube Views",
            serviceType: "General",
            price: currItem.price,
            quantity: currItem.quantity,
            url: youtubeVideoLink
        };

        addItemToCart(item);
        router.push("/checkout");
        setYoutubeVideoLink("")
    }

    useEffect(() => {
        if (toast) {
            setTimeout(() => {
                setToast(false)
            }, 2000)
        }
    }, [toast]);

    return (
        <div>
            <div className='w-full bg-white py-10'>
                <div className='w-[70%] m-auto flex flex-col justify-center items-center'>
                    <div>
                        <Link href={"buy-youtube-views"} className='bg-[#edf2f7] px-8 py-1 rounded-full font-semibold text-xl text-black'>Buy YouTube Views</Link>
                    </div>
                    <div className='mt-6'>
                        <h1 className='text-3xl font-semibold text-black'>Buy 50000/50k YouTube Views with <span className='text-red-500'>Instant Delivery</span></h1>
                        <p className='text-xl text-gray-600 mt-4'>GoFamy offers only the highest quality services. Buy safely and securely below:</p>
                    </div>
                    <div className='mt-7'>
                        <div className='p-2 flex gap-4 shadow-[1px_1px_4px_rgba(0,0,0,0.20)] rounded-md'>
                            <button onClick={() => handleOnChangePackageType("High Quality")} className={`${currBtn == "High Quality" ? "bg-primary text-white" : "bg-white text-primary"} rounded-sm p-2`}>High Quality</button>
                            <button onClick={() => handleOnChangePackageType("Premium")} className={`${currBtn == "Premium" ? "bg-primary text-white" : "bg-white text-primary"} rounded-sm p-2`}>Premium</button>
                            <button onClick={() => handleOnChangePackageType("Influncer")} className={`${currBtn == "Influncer" ? "bg-primary text-white" : "bg-white text-primary"} rounded-sm p-2`}>Influncer</button>
                        </div>
                        <div className='mt-4 flex flex-col '>
                            <select name="" id=""
                                onChange={(e) => handleOnChange(e.target.value)}
                                className='border outline-none p-3 shadow-[1px_1px_4px_rgba(0,0,0,0.20)] text-black'>
                                {/* <option className='p-5 text-black'>Select Package</option> */}
                                {
                                    currTypePackages?.packages?.map((item, i) => <option key={i} value={item.id} className='p-5 text-black'>{item.quantity}</option>)
                                }
                            </select>
                        </div>
                        <div className='flex flex-col gap-3 bg-gray-100 mt-4 p-6 rounded-md text-white'>
                            <div className='flex items-center gap-1 text-white lg:text-black font-medium'>
                                <FaFireAlt />
                                <span>100% Real</span>
                            </div>
                            <div className='flex items-center gap-1 text-white lg:text-black font-medium'>
                                <MdNoEncryptionGmailerrorred />
                                <span>No Password</span>
                            </div>
                            <div className='flex items-center gap-1 text-white lg:text-black font-medium'>
                                <MdSupportAgent />
                                <span>24/7 Support</span>
                            </div>
                            <div className='flex items-center gap-1 text-white lg:text-black font-medium'>
                                <MdOutlinePrivacyTip />
                                <span>100% Privacy</span>
                            </div>
                        </div>
                        <div className='mt-3 flex gap-2 items-center'>
                            <span className='text-xl text-black font-medium w-[20%]'> $ {currItemPrice}</span>
                            <input
                                type="text"
                                name='youtube'
                                placeholder='Paste youtube video link...'
                                className='border p-2.5 outline-none shadow-[1px_1px_1px_rgba(0,0,0,0.10)] w-[80%]'
                                value={youtubeVideoLink}
                                onChange={(e) => setYoutubeVideoLink(e.target.value)}
                                onClick={() => setUrlError(false)}
                            />
                        </div>
                        <div className=''>
                            {
                                urlError ? <p className='text-primary text-sm font-medium'>Please Paste YouTube Video Link</p> : null
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
                        <div className='mt-3 flex gap-5'>
                            <button onClick={handleAddToCart} className='p-3 text-white font-semibold bg-secondary w-full'>ADD TO CART</button>
                            <button onClick={handleGoToCart} className='py-3 px-5 text-white font-semibold bg-secondary w-full'>BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YouTubeViews50000Page;