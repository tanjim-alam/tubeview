import React from 'react';
import { SiGnuprivacyguard } from "react-icons/si";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiGrowth } from "react-icons/gi";
import { FaDiceD6 } from "react-icons/fa";

function WhyYouChooseSection({ heading, subHeading, title1, description1, title2, description2, title3, description3, title4, description4 }) {
    return (
        <div className='bg-white'>
            <div className=' bg-[#f5f7fe] py-5 px-4 flex flex-col gap-3 justify-center items-center'>
                <div className='lg:w-[90%] xl:w-[70%] w-[90%] '>
                    <h2 className='lg:text-[2rem] text-xl font-semibold text-center text-black'>{heading}</h2>
                    <p className='text-center text-black mt-4'>
                        {subHeading}
                    </p>
                </div>
            </div>
            <div className='lg:w-[70%] w-[90%] m-auto py-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-10 gap-5'>
                    <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                        <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white text-black'>
                            <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                <SiGnuprivacyguard />
                            </span>
                            <h4 className='text-xl font-semibold text-center'>{title1}</h4>
                        </div>
                        <div className='group-hover:text-white'>
                            <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white'>
                                {description1}
                            </p>
                        </div>
                    </div>
                    <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                        <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white text-black'>
                            <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                <GiGrowth />
                            </span>
                            <h4 className='text-xl font-semibold text-center'>{title2}</h4>
                        </div>
                        <div className='group-hover:text-white'>
                            <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white'>
                                {description2}
                            </p>
                        </div>
                    </div>
                    <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                        <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white text-black'>
                            <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                <FaDiceD6 />
                            </span>
                            <h4 className='text-xl font-semibold text-center'>{title3}</h4>
                        </div>
                        <div className='group-hover:text-white'>
                            <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white'>
                                {description3}
                            </p>
                        </div>
                    </div>
                    <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                        <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white text-black'>
                            <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                <MdOutlineSupportAgent />
                            </span>
                            <h4 className='text-xl font-semibold text-center'>{title4}</h4>
                        </div>
                        <div className='group-hover:text-white'>
                            <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white'>
                                {description4}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyYouChooseSection