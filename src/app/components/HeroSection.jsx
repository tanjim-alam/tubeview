"use client";
import React from 'react';
import Image from 'next/image';
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import WordChanger from './WordChanger';

function HeroSection({ title, subTitle, words, imgUrl }) {
    const scrollToServices = () => {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    };
    // const words = ['Views', 'Subscribers', 'Likes', 'Comments'];
    return (
        <div className='bg-white'>
            <div className='lg:w-[80%] w-[90%] pt-5 sm:pt-5 lg:h-[40rem] m-auto flex flex-col justify-center gap-16 items-center'>
                <div className='flex flex-col lg:flex-row w-full justify-between items-center mt-5 gap-10'>
                    <div>
                        {/* <h1 className='text-3xl lg:text-5xl font-bold text-center sm:text-start lg:text-start leading-tight hidden lg:block'>{title.substring(0, 24)} <br /> {title.substring(24)}</h1> */}
                        <h1 className='text-3xl lg:text-5xl font-bold text-center sm:text-start lg:text-start text-black leading-tight hidden lg:block' dangerouslySetInnerHTML={{ __html: title }}></h1>
                        <h1 className='text-3xl lg:text-5xl font-bold text-center sm:text-center lg:text-start text-black leading-tight block lg:hidden'>Boost Your Social Media Presence In Minutes!</h1>
                        <div className='flex justify-center items-center gap-2'>
                            <div className='lg:text-3xl text-xl text-center lg:text-start font-semibold mt-2 text-black' dangerouslySetInnerHTML={{ __html: subTitle }}></div>
                            {words ? <h3 className='text-secondary lg:text-3xl text-xl text-center lg:text-start font-semibold mt-2'><WordChanger words={words} /></h3> : null}
                        </div>
                        {/* <div className='lg:text-3xl text-xl text-center lg:text-start font-semibold mt-2 text-black'>
                            <h3>Buy YouTube</h3>
                            <WordChanger words={words} />
                        </div> */}
                        <div>
                            <div className='flex flex-col lg:flex-row items-center gap-1 mt-5'>
                                <div className='flex items-center'>
                                    <span className=' text-orange-500'><IoIosStar /></span>
                                    <span className=' text-orange-500'><IoIosStar /></span>
                                    <span className=' text-orange-500'><IoIosStar /></span>
                                    <span className=' text-orange-500'><IoIosStar /></span>
                                    <span className=' text-orange-500'><IoIosStarHalf /></span>
                                </div>
                                <p className='text-black'>1000+ Verified Customer Reviews</p>
                            </div>
                            <div className=' mt-1'>
                                <p className=' text-sm text-center lg:text-start text-black'>1.5 million individual users and counting</p>
                            </div>
                        </div>
                        <div className='flex gap-8 items-center mt-8 justify-center'>
                            <button onClick={scrollToServices} className=' bg-primary px-6 py-3 mt-1 font-semibold rounded text-white'>Get Started</button>
                            <div>
                                <div className='flex items-center text-center justify-center'>
                                    <span className=' text-secondary text-2xl'><IoIosStar /></span>
                                    <p className=' text-xl lg:text-2xl font-semibold text-black'>Trustpilot</p>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <span className=' text-white bg-secondary p-1'><IoIosStar /></span>
                                    <span className=' text-white bg-secondary p-1'><IoIosStar /></span>
                                    <span className=' text-white bg-secondary p-1'><IoIosStar /></span>
                                    <span className=' text-white bg-secondary p-1'><IoIosStar /></span>
                                    <span className=' text-white bg-secondary p-1'><IoIosStarHalf /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={imgUrl || "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/08/Generation-z-Christmas-party-with-multi-ethnic-friends-1296x728-header.jpg?w=1155&h=1528"}
                            width={600}
                            height={100}
                            className=' rounded-md'
                            alt='Image'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:flex sm:mb-4 lg:flex items-center gap-3 lg:gap-8'>
                    <div>
                        <Image
                            src={"/logo-img-2.svg"}
                            width={150}
                            height={150}
                            alt="Logo"
                        />
                    </div>
                    <div>
                        <Image
                            src={"/logo-img-1.svg"}
                            width={150}
                            height={150}
                            alt="Logo"
                        />
                    </div>
                    <div>
                        <Image
                            src={"/logo-img-4.svg"}
                            width={150}
                            height={150}
                            alt="Logo"
                        />
                    </div>
                    <div>
                        <Image
                            src={"/publication3.svg"}
                            width={150}
                            height={150}
                            alt="Logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection