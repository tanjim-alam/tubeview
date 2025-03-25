
import React from 'react'
import dynamic from 'next/dynamic';
import { IoSearch } from "react-icons/io5";
import { IoMdWatch } from "react-icons/io";
import { BsGraphDownArrow } from "react-icons/bs";
import { MdSupportAgent, MdOutlinePayment, MdLockOutline, MdOutlineWarning, MdLightMode } from "react-icons/md";
const ServiceCard = dynamic(() => import('../components/ServiceCard'));
const HeroSection = dynamic(() => import('../components/HeroSection'));
import twRetweetsData from "../constant/twitter/twRetweetsData.json"

function TwitterRetweetsPage() {
    return (
        <div>
            <HeroSection title={"Buy Twitter Retweets<br/> with Instant Delivery"}
                subTitle={"<h3>Buy More <span class=text-primary>Retweets</span></h3>"}
                imgUrl={"/tubeviews-banner.webp"} />
            {/* package section start */}
            <div className='bg-white pb-16'>
                <div className='lg:w-[80%] w-[90%] flex flex-col gap-10 m-auto'>
                    <div className='flex flex-col items-center gap-4'>
                        <h3 className='lg:text-3xl text-2xl text-center lg:text-start font-semibold text-black'>Get Real Twitter Retweets from Active User</h3>
                        <p className='lg:text-xl text-lg text-center lg:text-start font-medium text-black'>We provide Real and Non-Drop Twitter Retweets for life-time</p>
                    </div>
                    <ServiceCard packageData={twRetweetsData} />
                </div>
            </div>
        </div>
    )
}

export default TwitterRetweetsPage