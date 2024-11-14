"use client";
import React, { useEffect, useRef, useState } from 'react';
import { MdNoEncryptionGmailerrorred, MdSupportAgent, MdOutlinePrivacyTip } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import Spinner from './Spinner';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useCart } from '../context/CartContext';

function ServiceCard({ packageData }) {
    const router = useRouter();
    const sectionRef = useRef(null);
    const [filteredPackageData, setFilteredPackageData] = useState(packageData.services[0].packages || []);
    const [keys, setKeys] = useState(packageData.services[0].keys || [])
    const [isActiveBtn, setIsActiveBtn] = useState(packageData.services[0].type);
    const [isActiveCard, setIsActiveCard] = useState(1);
    const [currItemPrice, setCurrItemPrice] = useState(filteredPackageData[0].price)
    const [selectedPackage, setSalactedPackage] = useState(filteredPackageData[0]);
    const [url, setUrl] = useState("");
    const [toast, setToast] = useState(false);
    const [placeholder, setPlaceholder] = useState("");
    const [urlError, setUrlError] = useState(false);

    function getLastWord(str) {
        const words = str.trim().split(' ');
        return words[words.length - 1];
    }

    function getPlaceholder(str) {
        if (str.includes("YouTube Subscribers")) {
            return "Enter your YouTube Chennal Link";
        }
        else if (str.includes("YouTube")) {
            return "Enter your YouTube video Link";
        }
        else if (str.includes("Facebook Followers")) {
            return "Enter your fb profile Link";
        }
        else if (str.includes("Facebook Video")) {
            return "Enter your fb video Link";
        }
        else if (str.includes("Facebook Page")) {
            return "Enter your fb page Link";
        }
        else if (str.includes("Facebook")) {
            return "Enter your fb post Link";
        }
        else if (str.includes("Instagram Followers")) {
            return "Enter your Ig usernane or Link";
        }
        else if (str.includes("Instagram Reels")) {
            return "Enter your Ig Reels Link";
        }
        else if (str.includes("Instagram Story")) {
            return "Enter your Ig Story Link";
        }
        else if (str.includes("Instagram")) {
            return "Enter your Ig post Link";
        }
        else if (str.includes("Twitter Followers")) {
            return "Enter your x profile Link";
        }
        else if (str.includes("Twitter")) {
            return "Enter your x post Link";
        }
        else if (str.includes("TikTok Followers")) {
            return "Enter your tiktok profile Link";
        }
        else if (str.includes("TikTok")) {
            return "Enter your tiktok post Link";
        }
        else if (str.includes("Spotify Followers")) {
            return "Enter your spotify profile Link";
        }
        else if (str.includes("Spotify")) {
            return "Enter your spotify post Link";
        }
        else if (str.includes("SoundCloud Followers")) {
            return "Enter your sc profile Link";
        }
        else if (str.includes("SoundCloud")) {
            return "Enter your sc post Link";
        }
        else if (str.includes("SoundCloud Followers")) {
            return "Enter your sc profile Link";
        }
        else if (str.includes("SoundCloud")) {
            return "Enter your sc post Link";
        }
        else if (str.includes("LinkedIn Followers")) {
            return "Enter your ln profile Link";
        }
        else if (str.includes("LinkedIn Connections")) {
            return "Enter your ln profile Link";
        }
        else if (str.includes("LinkedIn")) {
            return "Enter your ln post Link";
        }
        else if (str.includes("Pinterest Followers")) {
            return "Enter your Pinterest Profile Link";
        }
        else if (str.includes("Pinterest")) {
            return "Enter your Pinterest Link";
        }
        else if (str.includes("Threads Followers")) {
            return "Enter your Threads Profile Link";
        }
        else if (str.includes("Threads")) {
            return "Enter your Threads Post Link";
        }
        else if (str.includes("Twitch Followers")) {
            return "Enter your Twitch Profile Link";
        }
        else if (str.includes("Twitch Live")) {
            return "Enter your Twitch Live Link";
        }
        else if (str.includes("Twitch")) {
            return "Enter your Twitch Video Link";
        }
        return "Enter you Link"
    }

    useEffect(() => {
        setPlaceholder(getPlaceholder(packageData.serviceName))
    }, [packageData]);

    function handleChagePackege(type) {
        const filteredData = packageData.services.filter((data) => data.type === type);
        if (filteredData.length > 0) {
            const newFilteredPackageData = filteredData[0].packages;

            setIsActiveBtn(filteredData[0].type);
            setFilteredPackageData(newFilteredPackageData);
            setKeys(filteredData[0].keys);
            setIsActiveCard(1);
            setCurrItemPrice(newFilteredPackageData[0].price);
            setSalactedPackage(newFilteredPackageData[0]);
        }
    }

    function handleOnClickCard(item) {
        setIsActiveCard(item.id);
        setSalactedPackage(item);
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        const selectedData = filteredPackageData.find((data) => data.id === item.id);
        if (selectedData) {
            setCurrItemPrice(selectedData.price);
        }
    }

    const { cartItems, addItemToCart } = useCart();

    function handleAddToCart() {
        let nextId = cartItems.length;
        if (url === "") {
            setUrlError(true);
            return;
        }
        const item = {
            id: nextId + 1,
            serviceName: packageData.serviceName,
            serviceType: isActiveBtn,
            price: selectedPackage.price,
            quantity: selectedPackage.qnt,
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
            serviceName: packageData.serviceName,
            serviceType: isActiveBtn,
            price: selectedPackage.price,
            quantity: selectedPackage.qnt,
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
            <div className='lg:w-[90%] w-full m-auto border p-2 lg:p-10 mt-7 relative rounded-2xl shadow-[0_2px_2px_rgba(0,0,0,0.10)]'>
                <div className='flex justify-center items-center'>
                    <p className=' absolute top-[-19px]  lg:top-[-26px] bg-white border py-1 px-4 lg:py-2 text-black lg:px-8 border-black rounded-md  text-lg font-semibold'>{packageData.serviceName || "Real YouTube Views"}</p>
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
                        {/* {
                            packageData?.services?
                        } */}
                        {
                            packageData?.services?.length > 1 ?
                                packageData?.services?.map((data, i) => (
                                    <div key={i} className='w-full relative'>
                                        <span className=' absolute text-[9px] right-1 top-[-10px] bg-sky-800 text-white rounded py-0.5 px-2 font-semibold'>{data.value}</span>
                                        <button onClick={() => handleChagePackege(data.type)} className={` ${isActiveBtn == data.type ? "bg-primary text-white" : "bg-white border border-primary text-primary"} w-full text-primary text-lg font-semibold p-2 rounded-md`}>{data.type}</button>
                                    </div>
                                ))
                                :
                                <div className='w-full relative'>
                                    <span className=' absolute text-[9px] right-1 top-[-10px] bg-sky-800 text-white rounded py-0.5 px-2 font-semibold'>{packageData?.services[0]?.value}</span>
                                    <button className={` bg-primary text-white" w-full text-white text-lg font-semibold p-2 rounded-md`}>{packageData?.services[0]?.type}</button>
                                </div>
                        }

                    </div>
                    <div className='p-2' ref={sectionRef}>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
                            {filteredPackageData.map((data, i) => (
                                <div
                                    key={i}
                                    className={`rounded-md p-2 ${isActiveCard === data.id ? "bg-secondary text-white" : "bg-[#f1f3f5] text-black"} cursor-pointer hover:bg-secondary hover:text-white group flex justify-center flex-col items-center`}
                                    onClick={() => handleOnClickCard(data)}
                                >
                                    <div className='flex flex-col items-center'>
                                        <p className={`text-2xl font-semibold ${isActiveCard === data.id ? "text-white" : "text-black"} group-hover:text-white text-center`}>
                                            {data.qnt}
                                        </p>
                                        <span className={`pb-1 text-md ${isActiveCard === data.id ? "text-white" : "text-black"} group-hover:text-white text-center`}>{data.package}</span>
                                    </div>
                                    {data.discount && (
                                        <p className={`text-xs mt-1 ${isActiveCard === data.id ? "bg-white text-black" : "bg-secondary text-white"} text-right w-fit py-1 px-2 rounded-md group-hover:text-secondary group-hover:bg-white`}>
                                            {data.discount} % Off
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className='mt-7 lg:flex  gap-3 justify-between items-center'>
                            <div className='flex justify-center items-center lg:w-[65%]'>
                                <div className='lg:w-[14%] w-[25%] sm:w-[12%] md:w-[10%]'>
                                    <span className='text-xl font-semibold text-black'>$ {currItemPrice || 12}</span>
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
                                urlError ? <p className='text-primary text-sm font-medium'>Please {placeholder}</p> : null
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
            <div className='lg:w-[80%] xl:w-[30%] m-auto w-full flex mt-7'>
                <div className=' border w-full p-10 flex flex-col gap-4 rounded-2xl shadow-[0_2px_2px_rgba(0,0,0,0.10)]'>
                    {
                        packageData?.services?.length > 1 ?
                            <h4 className='text-lg font-semibold bg-primary text-center text-white rounded-md p-1'>{isActiveBtn} {getLastWord(packageData.serviceName)}</h4>
                            : <h4 className='text-lg font-semibold bg-primary text-center text-white rounded-md p-1'>{isActiveBtn}</h4>
                    }

                    <div className='flex flex-col gap-2 '>
                        {
                            keys.map((key, i) => (
                                <div key={i} className='flex items-center gap-2 text-sm text-black'>
                                    <span><IoMdDoneAll /></span>
                                    <span>{key}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;
