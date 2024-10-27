import Link from 'next/link'
import React from 'react';
import Image from 'next/image';
import { FaLinkedinIn, FaTwitter, FaFacebook, FaInstagramSquare, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer() {
    return (
        <div className='bg-secondary'>
            <div className='lg:w-[80%] w-[90%] m-auto py-5'>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className='lg:w-[28%] w-[100%] flex gap-4 flex-col'>
                        <div>
                            <Link href={"/"}>
                                <h4 className='text-3xl font-bold text-secondary bg-white w-fit'>Tube<span className='bg-primary text-white ml-0.5'>Views</span></h4>
                            </Link>
                        </div>
                        <div>
                            <p className='text-white'>
                                Tubeviews.co is an Organic and Instantly Social Media Services Provider,
                                Likes YouTube, Facebook, Instagram, and All Social Media Platform.
                                Our Services are Very Easy and Affordable.Read More
                            </p>
                        </div>
                        <div>
                            <p className='text-xl text-white font-semibold'>Support</p>
                            <div className='flex justify-between text-white mt-3'>
                                <Link className='flex items-center font-semibold text-sm gap-1' href={"https://wa.me/919319187564"}><FaWhatsapp /><span>+91-9319187564</span></Link>
                                <Link className='flex items-center font-semibold gap-1' href={"mailto:support@tubeviews.co"}><IoIosMail /><span>support@tubeviews.co</span></Link>
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
                            <h5 className='text-white text-xl font-semibold'>YouTube</h5>
                            <div className='flex flex-col gap-1 mt-2'>
                                <Link className='text-white hover:border-l-4' href={"buy-youtube-views"}>Buy YouTube Views</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-youtube-subscribers"}>Buy YouTube Subscriber</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-youtube-likes"}>Buy YouTube Likes</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-youtube-comments"}>Buy YouTube Comments</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-youtube-short-views"}>Buy YouTube Short Views</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-youtube-comments"}>Buy YouTube Live Views</Link>
                            </div>
                        </div>
                        <div className='w-full mt-3 lg:mt-0'>
                            <h5 className='text-white text-xl font-semibold'>Facebook</h5>
                            <div className='flex flex-col gap-1 mt-1 lg:mt-2'>
                                <Link className='text-white hover:border-l-4' href={"buy-facebook-followers"}>Buy Facebook Followers</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-facebook-likes"}>Buy Facebook Likes</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-facebook-comments"}>Buy Facebook Comments</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-facebook-video-views"}>Buy Facebook Video Views</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-facebook-page-likes"}>Buy Facebook Page Likes</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-facebook-page-followers"}>Buy Facebook Page Followers</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-facebook-live-stream-views-viewers"}>Buy Facebook Live Views</Link>
                            </div>
                        </div>
                        <div className='w-full mt-3 lg:mt-0'>
                            <h5 className='text-white text-xl font-semibold'>Instagram</h5>
                            <div className='flex flex-col gap-1 mt-1 lg:mt-2'>
                                <Link className='text-white hover:border-l-4' href={"buy-instagram-followers"}>Buy Instagram Followers</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-instagram-likes"}>Buy Instagram Likes</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-instagram-comments"}>Buy Instagram Comments</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-instagram-reels-views"}>Buy Instagram Reels Views</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-instagram-reels-likes"}>Buy Instagram Reels Likes</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-instagram-live-stream-views"}>Buy Instagram Live Views</Link>
                                <Link className='text-white hover:border-l-4' href={"buy-instagram-story-views"}>Buy Instagram Story Views</Link>
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
                <p>Copyright © TubeViews. All Rights Reserved 2024</p>
            </div>
        </div>
    )
}

export default Footer