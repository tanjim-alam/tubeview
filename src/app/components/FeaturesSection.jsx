"use client"
import React from 'react';

function FeaturesSection({ featuresData, heading, subHeading }) {
    return (
        <div className='bg-white'>
            <div className='bg-[#f5f7fe] py-5 px-4 lg:px-0 flex flex-col gap-3 justify-center items-center'>
                <div className='lg:w-[70%] w-[90%] '>
                    <h2 className='lg:text-[2rem] text-xl font-semibold text-center text-black'>{heading}</h2>
                    <p className='text-center text-black mt-2'>
                        {subHeading}
                    </p>
                </div>
            </div>
            <div className='lg:w-[80%] w-[90%] m-auto py-10'>
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5'>
                    {
                        featuresData.map((data, i) => (
                            <div key={i} className='flex lg:items-center border-t border-b border-l p-2 lg:gap-4 gap-2'>
                                <div>
                                    <span className=' text-5xl text-slate-600'>{data.icon}</span>
                                </div>
                                <div className=''>
                                    <h3 className=' lg:text-xl text-lg font-normal text-slate-600'>{data.title}</h3>
                                    <p className=' text-sm text-slate-600'>{data.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection