
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
// Dynamically import components (Ensure these are default exports in their files)
const WhyYouChooseSection = dynamic(() => import('../components/WhyYouChooseSection'));
const FeaturesSection = dynamic(() => import('../components/FeaturesSection'));
const ContentSection1 = dynamic(() => import('../components/ContentSection1'));
const ContentSection2 = dynamic(() => import('../components/ContentSection2'));
const FaqSection = dynamic(() => import('../components/FaqSection'));
const ReviewsSection = dynamic(() => import('../components/ReviewsSection'));


function YouTubeViews50000Page() {
    const router = useRouter();
    const [urlError, setUrlError] = useState(false);
    const [toast, setToast] = useState(false);
    const featuresData = [
        {
            id: 1,
            title: "What is the Difference between Regular Subscribers and Real Subscribers?",
            description: "Regular subscribers are real-looking virtual accounts. Real subscribers are real, active accounts with real posts and followers.",
            icon: <MdLightMode />
        },
        {
            id: 2,
            title: "Why should you buy YouTube subscribers?",
            description: "YouTube subscribers show how interesting your content is. Your subscriber number is like the measure of your channel's quality. So, it is important to have a hight number of subscribers to attract more visitors to your channel.",
            icon: <IoSearch />
        },
        {
            id: 3,
            title: "What are Youtube Subscribers",
            description: "If you can get a person's interest on YouTube, they may subscribe to your channel. After that, they will start seeing your content on their homepage and get notified often.",
            icon: <IoMdWatch />
        },
        {
            id: 5,
            title: "NO Risk of Decrease",
            description: "The services that you buy will be permanent, and there won't be any decrease. Otherwise, we guarantee you that we will refill your losses in six months after your purchase.",
            icon: <BsGraphDownArrow />
        },
        {
            id: 6,
            title: "24/7 Live Support",
            description: "We provide 24/7 live customer support. You can contact us anytime via our embedded chat system, WhatsApp, and email address. Our staff is always ready to help you.",
            icon: <MdSupportAgent />
        },
        {
            id: 7,
            title: "Secure Payment",
            description: "You can pay with your credit card through the most secure and trusted payment systems in the world. You don’t have to register to make your payment.",
            icon: <MdOutlinePayment />
        },
        {
            id: 8,
            title: "No Password is Required",
            description: "We never ask your password or any other private information. We recommend you to protect your account and never share your passwords with anyone.",
            icon: <MdLockOutline />
        },
        {
            id: 9,
            title: "Warning",
            description: "In order for your order interactions to be tracked correctly after your purchases, you should not purchase the same products from different sites simultaneously.",
            icon: <MdOutlineWarning />
        }

    ]
    const faqData = [
        {
            id: 1,
            question: "Can this service help me reach 4,000 hours of view time required for monetization and partnership?",
            answer: "Yes! When you get YouTube views, the video you targeted will be watched from start to end by the specific amount of accounts you decided. With this service, you can easily surpass the 4,000 hours limit."
        },
        {
            id: 2,
            question: "Is it possible for YouTube to realize I'm not getting genuine views?",
            answer: "It's not likely. Since there isn't a list called viewers, or such, it's almost impossible for YouTube to catch you red-handed. It's not so much different than asking a friend to watch your video."
        },
        {
            id: 3,
            question: "What happens when you get 1K subscribers on YouTube?",
            answer: "When you hit 1K subscribers, YouTube sends you a mail to congratulate you. "
        },
        {
            id: 4,
            question: "Can YouTubers see who viewed their videos?",
            answer: "Unfortunately not. They can only see how many people viewed their videos."
        },
        {
            id: 5,
            question: "What İs The Traffic Source İn Youtube Views?",
            answer: "YouTube traffic sources are in 3 main categories."
        },
        {
            id: 6,
            question: "Can I Buy Views For Private Video?",
            answer: "No, you cannot use this service for private video. If the video is hidden after making the purchase, the order will be cancelled. You must make the video public until the order is complete."
        },
    ]

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
    // console.log(currItem)
    function handleOnChangePackageType(type) {
        const selectedPackageType = viewsData.find((packageType) => packageType.type == type);
        if (selectedPackageType) {
            setCurrTypePackages(selectedPackageType)
        }
    }
    function handleOnChange(id) {
        const selectedItem = currTypePackages.find(item => item.id == id);
        if (selectedItem) {
            setCurrItem(selectedItem);
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
                        <Link href={"#"} className='bg-[#edf2f7] px-8 py-1 rounded-full font-semibold text-xl text-black'>Buy YouTube Views</Link>
                    </div>
                    <div className='mt-6'>
                        <h1 className='text-3xl font-semibold text-black'>Buy 50000/50k YouTube Views with <span className='text-red-500'>Instant Delivery</span></h1>
                        <p className='text-xl text-gray-600 mt-4'>Tubeviews offers only the highest quality services. Buy safely and securely below:</p>
                    </div>
                    <div className='mt-7'>
                        <div className='p-2 flex gap-4 shadow-[1px_1px_4px_rgba(0,0,0,0.20)] rounded-md'>
                            <button onClick={() => handleOnChangePackageType("High Quality")} className='bg-primary p-3 rounded-md text-white font-semibold'>High Quality</button>
                            <button onClick={() => handleOnChangePackageType("Premium")} className='p-3 rounded-md text-black font-semibold'>Premium</button>
                            <button onClick={() => handleOnChangePackageType("Influncer")} className='p-3 rounded-md text-black font-semibold'>Influncer</button>
                        </div>
                        <div className='mt-4 flex flex-col '>
                            <select name="" id=""
                                onChange={(e) => handleOnChange(e.target.value)}
                                className='border outline-none p-3 shadow-[1px_1px_4px_rgba(0,0,0,0.20)] text-black'>
                                <option className='p-5 text-black'>Select Package</option>
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
                            <span className='text-xl text-black font-medium w-[20%]'> $ {currItem.price}</span>
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