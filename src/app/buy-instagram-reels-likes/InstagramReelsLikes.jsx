
import React from 'react'
import dynamic from 'next/dynamic';
import { IoSearch } from "react-icons/io5";
import { IoMdWatch } from "react-icons/io";
import { BsGraphDownArrow } from "react-icons/bs";
import { MdSupportAgent, MdOutlinePayment, MdLockOutline, MdOutlineWarning, MdLightMode } from "react-icons/md";
// Dynamically import components (Ensure these are default exports in their files)
const ServiceCard = dynamic(() => import('../components/ServiceCard'));
const HeroSection = dynamic(() => import('../components/HeroSection'));
import igReelsLikesData from "../constant/instagram/igReelsLikesData.json"

function InstagramReelsLikesPage() {
    return (
        <div>
            <HeroSection title={"Buy Instagram Reels Likes<br/> with Instant Delivery"} subTitle={"<h3>Buy More <span class=text-primary>Reels Likes</span></h3>"} imgUrl={"/tubeviews-banner.webp"} />
            {/* package section start */}
            <div className='bg-white pb-16'>
                <div className='lg:w-[80%] w-[90%] flex flex-col gap-10 m-auto'>
                    <div className='flex flex-col items-center gap-4'>
                        <h3 className='lg:text-3xl text-2xl text-center lg:text-start font-semibold'>Get Real Instagram Reels Likes from 100% Real and Active Users</h3>
                        <p className='lg:text-xl text-lg text-center lg:text-start font-medium'>We provide Real and Non-Drop Instagram Reels Likes for life-time</p>
                    </div>
                    <ServiceCard packageData={igReelsLikesData} />
                </div>
            </div>
            {/* package section end */}
        </div>
    )
}

export default InstagramReelsLikesPage