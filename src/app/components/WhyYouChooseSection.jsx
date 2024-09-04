import React from 'react';
import { SiGnuprivacyguard } from "react-icons/si";

function WhyYouChooseSection({ heading, subHeading }) {
    return (
        <div className='bg-white'>
            <div className=' bg-[#f5f7fe] py-5 px-4 flex flex-col gap-3 justify-center items-center'>
                <h2 className='lg:text-[2rem] text-xl font-semibold text-center text-black'>{heading}</h2>
                <p className='text-center text-black'>
                    {subHeading}
                </p>
            </div>
            <div className='lg:w-[70%] w-[90%] m-auto py-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-10 gap-5'>
                    <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                        <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white'>
                            <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                <SiGnuprivacyguard />
                            </span>
                            <h4 className='text-xl font-semibold'>Privacy & Safety</h4>
                        </div>
                        <div className='group-hover:text-white'>
                            <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white'>
                                Prioritize Privacy & Safety with Famoid’s secure YouTube Views service,
                                ensuring your channel grows in a secure environment, enabling you to
                                focus on crafting outstanding content while we manage the views.
                            </p>
                        </div>
                    </div>
                    <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                        <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white'>
                            <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                <SiGnuprivacyguard />
                            </span>
                            <h4 className='text-xl font-semibold'>Experience</h4>
                        </div>
                        <div className='group-hover:text-white'>
                            <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white'>
                                Prioritize Privacy & Safety with Famoid’s secure YouTube Views service,
                                ensuring your channel grows in a secure environment, enabling you to
                                focus on crafting outstanding content while we manage the views.
                            </p>
                        </div>
                    </div>
                    <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                        <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white'>
                            <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                <SiGnuprivacyguard />
                            </span>
                            <h4 className='text-xl font-semibold'>Ad-Driven Delivery</h4>
                        </div>
                        <div className='group-hover:text-white'>
                            <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white'>
                                Prioritize Privacy & Safety with Famoid’s secure YouTube Views service,
                                ensuring your channel grows in a secure environment, enabling you to
                                focus on crafting outstanding content while we manage the views.
                            </p>
                        </div>
                    </div>
                    <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                        <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white'>
                            <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                <SiGnuprivacyguard />
                            </span>
                            <h4 className='text-xl font-semibold'>24/7 Support</h4>
                        </div>
                        <div className='group-hover:text-white'>
                            <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white'>
                                Prioritize Privacy & Safety with Famoid’s secure YouTube Views service,
                                ensuring your channel grows in a secure environment, enabling you to
                                focus on crafting outstanding content while we manage the views.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyYouChooseSection