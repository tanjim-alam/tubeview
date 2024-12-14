"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaLinkedinIn, FaTwitter, FaFacebook, FaInstagramSquare, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaSquareWhatsapp } from 'react-icons/fa6';

function Footer() {
    const [currentYear, setCurrentYear] = useState(null);
    useEffect(() => {
        const now = new Date();
        if (now) {
            setCurrentYear(now.getFullYear());
        }
    }, [])
    return (
        <div className='bg-secondary'>
            <div className='lg:w-[80%] w-[90%] m-auto py-5'>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className='lg:w-[28%] w-[100%] flex gap-4 flex-col'>
                        <div>
                            <Link href={"/"}>
                                <h4 className='text-3xl font-bold text-secondary bg-white w-fit'>𝐆𝐨<span className='bg-primary text-white ml-0.5 px-0.5'>𝙁𝙖𝙢𝙮</span></h4>
                            </Link>
                        </div>
                        <div>
                            <p className='text-white'>
                                TubeVIews is Unique Social Media Company. They Providing Real and Active Video Views,
                                Subscribers, Comments  Likes, Followers, and <Link href="/about-us">More</Link>.
                            </p>
                        </div>
                        <div>
                            <p className='text-xl text-white font-semibold'>Support</p>
                            <div className='flex flex-col justify-between text-white mt-3'>
                                <Link className='flex items-center font-semibold text-lg gap-1' href={"https://wa.me/919319187564"}><FaSquareWhatsapp /><span>+91-9319187564</span></Link>
                                <Link className='flex items-center font-semibold text-lg gap-1' href={"mailto:support@tubeviews.co"}><IoIosMail className='mt-1' /><span>support@tubeviews.co</span></Link>
                            </div>
                        </div>
                        <div className='flex text-white gap-3'>
                            <Link className='bg-white p-2 rounded-full text-red-500' href={"#"}><FaLinkedinIn /></Link>
                            <Link className='bg-white p-2 rounded-full text-red-500' href={"#"}><FaTwitter /></Link>
                            <Link className='bg-white p-2 rounded-full text-red-500' href={"#"}><FaFacebook /></Link>
                            <Link className='bg-white p-2 rounded-full text-red-500' href={"#"}><FaInstagramSquare /></Link>
                            <Link className='bg-white p-2 rounded-full text-red-500' href={"#"}><FaYoutube /></Link>
                        </div>
                    </div>
                    <div className='lg:flex flex-col sm:grid sm:grid-cols-2 lg:flex-row justify-between gap-3 lg:w-[72%] w-full'>
                        <div className='w-full'>
                            <h5 className='text-white text-xl font-semibold'>TikTok</h5>
                            <div className='flex flex-col gap-1 mt-1 lg:mt-2'>
                                <Link className='text-white hover:border-l-4' href={"buy-tiktok-followers"}>Buy TikTok Followers</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-tiktok-likes"}>Buy TikTok Likes</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-tiktok-views"}>Buy TikTok Views</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-tiktok-comments"}>Buy TikTok Comments</Link>
                            </div>

                            <h5 className='text-white text-xl font-semibold mt-3'>LinkedIn</h5>
                            <div className='flex flex-col gap-1 mt-2'>
                                <Link className='text-white hover:border-l-4' href={"buy-linkedin-followers"}>Buy LinkedIn Followers</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-linkedin-likes"}>Buy LinkedIn likes</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-linkedin-connections"}>Buy LinkedIn Connections</Link>
                            </div>
                        </div>
                        <div className='w-full mt-3 lg:mt-0'>
                            <h5 className='text-white text-xl font-semibold'>Twitch</h5>
                            <div className='flex flex-col gap-1 mt-1 lg:mt-2'>
                                <Link className='text-white hover:border-l-4' href={"buy-twitch-followers"}>Buy Twitch Followers</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-twitch-views"}>Buy Twitch Views</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-twitch-live-viewers"}>Buy Twitch Live Viewers</Link>
                            </div>
                            <h5 className='text-white text-xl font-semibold mt-3'>Threads</h5>
                            <div className='flex flex-col gap-1 mt-2'>
                                <Link className='text-white hover:border-l-4' href={"buy-threads-followers"}>Buy Threads Followers</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-threads-likes"}>Buy Threads likes</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-threads-comments"}>Buy Threads Comments</Link>
                            </div>
                        </div>
                        <div className='w-full mt-3 lg:mt-0'>
                            <h5 className='text-white text-xl font-semibold'>YouTube</h5>
                            <div className='flex flex-col gap-1 mt-1 lg:mt-2'>
                                <Link className='text-white hover:border-l-4' href={"buy-youtube-views"}>Buy YouTube Views</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-youtube-subscribers"}>Buy YouTube Subscribers</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-youtube-likes"}>Buy YouTube Likes</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-youtube-comments"}>Buy YouTube Comments</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-youtube-short-views"}>Buy YouTube Short Views</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-youtube-live-stream-views-viewers"}>Buy YouTube Live views</Link>
                            </div>
                        </div>
                        <div className='w-full mt-3 lg:mt-0'>
                            <h5 className='text-white text-xl font-semibold'>Our Company</h5>
                            <div className='flex flex-col gap-1 mt-1 lg:mt-2'>
                                <Link className='text-white hover:border-l-4' href={"/about-us"}>About Us</Link>
                                <Link className='text-white hover:border-l-4' href={"/contact-us"}>Contact Us</Link>
                                <Link className='text-white hover:border-l-4' href={"/privacy-policy"}>Privacy Policy</Link>
                                <Link className='text-white hover:border-l-4' href={"/terms-and-conditions"}>Terms & Conditions</Link>
                                <Link className='text-white hover:border-l-4' href={"/returns-and-refunds-policy"}>Returns and Refunds Policy</Link>
                                <Image src={"/cards-icon.webp"}
                                    width={300}
                                    height={180}
                                    alt="Card"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-primary text-center p-2 text-white'>
                <p>Copyright © TubeViews. All Rights Reserved 2016 - {currentYear}</p>
            </div>
        </div>
    )
}

export default Footer