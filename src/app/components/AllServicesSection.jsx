"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import navLinksData from "../constant/general/navlinksData.js"

function AllServicesSection() {
    const [activeId, setActiveId] = useState(null);
    function showServices(id) {
        setActiveId(id === activeId ? null : id);
    }

    return (
        <div className='bg-white' id='services'>
            <div className='lg:w-[80%] xl:w-[70%] md:w-[90%] w-[90%] py-16 m-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 lg:gap-7 gap-4'>
                    {navLinksData.map((data) => (
                        <React.Fragment key={data.id}>
                            {/* Desktop View */}
                            <div className='hidden sm:block md:block lg:block'>
                                <div
                                    className='relative flex cursor-pointer items-center border-2 rounded-full shadow-[0_2px_2px_rgba(0,0,0,0.10)] group'
                                    style={{ borderColor: data.color }}
                                >
                                    <div className='p-3 rounded-full' style={{ backgroundColor: data.color }}>
                                        <span className='lg:text-4xl text-2xl text-white'>
                                            <data.icon />
                                        </span>
                                    </div>
                                    <div className='w-full'>
                                        <p
                                            className='text-center lg:text-xl font-semibold group-hover:text-white'
                                            style={{ color: data.color }}
                                        >
                                            {data.name}
                                        </p>
                                    </div>
                                    <div className='absolute left-0 top-14 hidden group-hover:block shadow-lg z-30 w-full duration-500 ease-in-out'>
                                        <div className='flex flex-col gap-3 bg-primary p-4 mt-2'>
                                            {data.services.map((service, i) => (
                                                <Link key={i} href={`/${service.slug}`} className="text-white hover:border-l-4 border-white font-semibold">
                                                    {service.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile View */}
                            <div className='block sm:hidden md:hidden lg:hidden w-full px-4'>
                                <div
                                    onClick={() => showServices(data.id)}
                                    className='relative flex cursor-pointer items-center border-2 rounded-full shadow-[0_2px_2px_rgba(0,0,0,0.10)] group'
                                    style={{ borderColor: data.color }}
                                >
                                    <div className='p-3 rounded-full' style={{ backgroundColor: data.color }}>
                                        <span className='text-4xl text-white'>
                                            <data.icon />
                                        </span>
                                    </div>
                                    <div className='w-full'>
                                        <p
                                            className='text-center text-xl font-semibold group-hover:text-white'
                                            style={{ color: data.color }}
                                        >
                                            {data.name}
                                        </p>
                                    </div>
                                </div>
                                <div className={`transition-all duration-500 ease-in-out ${data.id === activeId ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
                                    <ul className='flex flex-col mx-2 mt-1'>
                                        {data.services.map((item, i) => (
                                            <li key={item.id} className="pl-4 py-1 bg-primary text-white">
                                                <Link href={`/${item.slug}`}>{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default AllServicesSection;
