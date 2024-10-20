"use client"
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import { IoSearch } from "react-icons/io5";
import { IoMdWatch } from "react-icons/io";
import { BsGraphDownArrow } from 'react-icons/bs';
import { MdSupportAgent, MdOutlinePayment, MdLockOutline, MdOutlineWarning, MdLightMode, MdOutlineSpeed, MdOutlineSelfImprovement } from 'react-icons/md';
// Dynamically import components (Ensure these are default exports in their files)
const ServiceCard = dynamic(() => import('../components/ServiceCard'));
const HeroSection = dynamic(() => import('../components/HeroSection'));

// Import JSON data directly
import fbCommentsData from "../constant/facebook/fbCommentsData.json";
import { SiBoost, SiGoogleauthenticator } from 'react-icons/si';
import { SlSizeActual } from 'react-icons/sl';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { TbPackages } from 'react-icons/tb';


function FacebookCommentsPage() {

    return (
        <div>
            <HeroSection
                title="Buy Facebook Comments <br/> with Instant Delivery"
                subTitle="<h3>Buy More <span class=text-secondary>Comments</span></h3>"
                imgUrl="/tubeviews-banner.webp"
            />

            {/* Package section start */}
            <div className="bg-white pb-16">
                <div className="lg:w-[80%] w-[90%] flex flex-col gap-10 m-auto">
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="lg:text-3xl text-2xl text-center text-black lg:text-start font-semibold">
                            Get Real Facebook Comments from 100% Real and Active Users
                        </h3>
                        <p className="lg:text-xl text-lg text-center text-black lg:text-start font-medium">
                            We provide Real and Non-Drop Facebook Comments for life-time
                        </p>
                    </div>
                    <ServiceCard packageData={fbCommentsData} />
                </div>
            </div>
            {/* Package section end */}

            {/* ================= */}
            <div className='bg-white'>
                <div className=' bg-[#f5f7fe] py-5 px-4 flex flex-col gap-3 justify-center items-center'>
                    <div className='lg:w-[90%] xl:w-[70%] w-[90%] '>
                        <h3 className='lg:text-[2rem] text-xl font-semibold text-center text-black'>✊ Buy Facebook Comments from Tubeviews</h3>
                    </div>
                </div>
                <div className='lg:w-[70%] w-[90%] m-auto py-5'>
                    <p className="leading-relaxed text-slate-600 text-center mt-1">
                        It has never been more simple to improve your Facebook interaction! Choosing to purchase Facebook
                        comments from Tubeviews opens a number of advantages meant to improve your social media profile.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-10 gap-5 mt-4'>
                        <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                            <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white text-black'>
                                <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                    <SiBoost />
                                </span>
                                <h4 className='text-xl font-semibold'>Boost Involvement Right Now</h4>
                            </div>
                            <div className='group-hover:text-white'>
                                <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white '>
                                    Purchasing comments immediately increases the interaction on your postings. More comments increase
                                    users&#39; news feed prominence, therefore raising the possibility of drawing in fresh followers and clients.
                                </p>
                            </div>
                        </div>
                        <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                            <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white text-black'>
                                <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                    <MdOutlineSelfImprovement />
                                </span>
                                <h4 className='text-xl font-semibold'>Improve Brand Credibility</h4>
                            </div>
                            <div className='group-hover:text-white'>
                                <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white'>
                                    Many comments on a post indicate credibility and authority to potential consumers. Knowing others have
                                    previously expressed interest, this social proof motivates consumers to interact with your business.
                                </p>
                            </div>
                        </div>
                        <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                            <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white text-black'>
                                <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                    <TbPackages />
                                </span>
                                <h4 className='text-xl font-semibold'>Designed Comment Packages</h4>
                            </div>
                            <div className='group-hover:text-white'>
                                <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white'>
                                    Customisable packages from Tubeviews let you match your particular demand. Select the comments&#39; tone
                                    and approach that fit your brand language to guarantee real conversations that speak to your readers.
                                </p>
                            </div>
                        </div>
                        <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                            <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white text-black'>
                                <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                    <RiSecurePaymentLine />
                                </span>
                                <h4 className='text-xl font-semibold '>Quick and Consistent Service</h4>
                            </div>
                            <div className='group-hover:text-white'>
                                <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white'>
                                    Our flawless system guarantees that you get your comments fast and safely. Knowing that you are dealing
                                    with a reliable vendor that gives customer satisfaction first priority will help you to relax.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============ */}
        </div>
    );
}

export default FacebookCommentsPage;
