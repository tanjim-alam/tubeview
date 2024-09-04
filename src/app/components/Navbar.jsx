"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCartPlus, FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks"
import { FaYoutube, FaFacebook, FaInstagramSquare, FaTwitter, FaTiktok, FaSpotify, FaSoundcloud, FaLinkedinIn, FaTelegramPlane, FaPinterest, FaSnapchatGhost, FaRedditAlien, FaTwitch } from "react-icons/fa";
import { useCart } from '../context/CartContext';


function Navbar() {
    const navLinksData = [
        {
            id: 1,
            name: "YouTube",
            icon: FaYoutube,
            services: [
                {
                    id: 1,
                    title: "Buy YouTube Views",
                    slug: "/buy-youtube-views"
                },
                {
                    id: 2,
                    title: "Buy YouTube Subscribers",
                    slug: "/buy-youtube-subscribers"
                },
                {
                    id: 3,
                    title: "Buy YouTube Likes",
                    slug: "/buy-youtube-likes"
                },
                {
                    id: 4,
                    title: "Buy YouTube Comments",
                    slug: "/buy-youtube-comments"
                },
                {
                    id: 5,
                    title: "Buy YouTube Live Views",
                    slug: "/buy-youtube-live-views"
                },
            ],
            color: "red"
        },
        {
            id: 2,
            name: "Facebook",
            icon: FaFacebook,
            services: [
                {
                    id: 1,
                    title: "Buy Facebook Followers",
                    slug: "buy-facebook-followers"
                },
                {
                    id: 2,
                    title: "Buy Facebook Likes",
                    slug: "buy-facebook-likes"
                },
                {
                    id: 3,
                    title: "Buy Facebook Video Views",
                    slug: "buy-facebook-video-views"
                },
                {
                    id: 4,
                    title: "Buy Facebook Comments",
                    slug: "buy-facebook-comments"
                },
                {
                    id: 4,
                    title: "Buy Facebook Page Likes",
                    slug: "buy-facebook-page-likes"
                },
                {
                    id: 4,
                    title: "Buy Facebook Live Views",
                    slug: "buy-facebook-live-viewd"
                }
            ],
            color: "blue"
        },
        {
            id: 3,
            name: "Instagram",
            icon: FaInstagramSquare,
            services: [
                {
                    id: 1,
                    title: "Buy Instagram Followers",
                    slug: "buy-instagram-followers"
                },
                {
                    id: 2,
                    title: "Buy Instagram Likes",
                    slug: "buy-instagram-likes"
                },
                {
                    id: 1,
                    title: "Buy Instagram Reels Likes",
                    slug: "buy-instagram-reels-likes"
                },
                {
                    id: 1,
                    title: "Buy Instagram Reels Views",
                    slug: "buy-instagram-reels-views"
                },
                {
                    id: 1,
                    title: "Buy Instagram Comments",
                    slug: "buy-instagram-comments"
                },
                {
                    id: 1,
                    title: "Buy Instagram Story Views",
                    slug: "buy-instagram-story-views"
                },
                {
                    id: 1,
                    title: "Buy Instagram Target Likes",
                    slug: "buy-instagram-target-likes"
                },
                {
                    id: 1,
                    title: "Buy Instagram Target Followers",
                    slug: "buy-instagram-target-followers"
                },
                {
                    id: 1,
                    title: "Buy Instagram Live Views",
                    slug: "buy-instagram-live-views"
                },
            ],
            color: "#E1306C"
        },
        {
            id: 4,
            name: "Twitter",
            icon: FaTwitter,
            services: [
                {
                    id: 1,
                    title: "Buy Twitter Followers",
                    slug: "buy-twitter-followers"
                },
                {
                    id: 2,
                    title: "Buy Twitter Likes",
                    slug: "buy-twitter-likes"
                },
                {
                    id: 3,
                    title: "Buy Twitter Comments",
                    slug: "buy-twitter-comments"
                },
                {
                    id: 4,
                    title: "Buy Twitter Video Views",
                    slug: "buy-twitter-video-views"
                },
            ],
            color: "#1DA1F2"
        },
        {
            id: 5,
            name: "TikTok",
            icon: FaTiktok,
            services: [
                {
                    id: 1,
                    title: "Buy TikTok Followers",
                    slug: "buy-tiktok-followers"
                },
                {
                    id: 1,
                    title: "Buy TikTok Likes",
                    slug: "buy-tiktok-likes"
                },
                {
                    id: 1,
                    title: "Buy TikTok Comments",
                    slug: "buy-tiktok-comments"
                },
            ],
            color: "#000000"
        },
        {
            id: 6,
            name: "Spotify",
            icon: FaSpotify,
            services: [
                {
                    id: 1,
                    title: "Buy Spotify Followers",
                    slug: "buy-spotify-followers"
                },
                {
                    id: 2,
                    title: "Buy Spotify Plays",
                    slug: "buy-spotify-plays"
                }
            ],
            color: "#1DB954"
        },
        {
            id: 7,
            name: "SoundCloud",
            color: "#FF5500",
            icon: FaSoundcloud,
            services: [
                {
                    id: 1,
                    title: "Buy SoundCloud Followers",
                    slug: "buy-soundcloud-followers"
                },
                {
                    id: 1,
                    title: "Buy SoundCloud Plays",
                    slug: "buy-soundcloud-plays"
                },
            ],
            color: "#FF5500"
        }
    ];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const { cartItems } = useCart();
    // console.log(cartItems);
    return (
        <>
            <div className='bg-white border-b sticky top-0 z-50 hidden lg:block h-[55px]'>
                <nav className='w-[80%] m-auto flex justify-between items-center p-2'>
                    <div>
                        <img
                            src={"https://web.archive.org/web/20231226075428im_/https://www.tubeviews.co/wp-content/uploads/2023/01/TubeViews-3.svg"}
                            width={150}

                            alt="Logo"
                        />
                    </div>
                    <div>
                        <ul className='flex gap-10'>
                            {
                                navLinksData.map((navLink, i) => <NavLinks key={i} navLink={navLink} />)
                            }
                        </ul>
                    </div>
                    <div>
                        <Link href={"/cart"} className=' p-1 relative flex'>
                            <p className=' text-xl'><FaCartPlus /></p>
                            <span className=' absolute top-[-5px] right-[-4px]'>{cartItems.length || 0}</span>
                        </Link>
                    </div>
                </nav>
            </div>
            <div className='sticky top-0 z-50 lg:hidden block'>
                <nav className='w-full m-auto flex flex-col justify-between'>
                    <div className='flex justify-between items-center p-2 bg-white border-b w-full'>
                        <div>
                            <Image
                                src="https://web.archive.org/web/20231226075428im_/https://www.tubeviews.co/wp-content/uploads/2023/01/TubeViews-3.svg"
                                width={150}
                                height={150}
                                alt="Logo"
                            />
                        </div>
                        <div className='flex justify-center gap-5 items-center'>
                            <div>
                                <Link href={"/cart"} className=' p-1 relative flex'>
                                    <p className=' text-xl'><FaCartPlus /></p>
                                    <span className=' absolute top-[-5px] right-[-4px]'>{cartItems.length || 0}</span>
                                </Link>
                            </div>
                            <div>
                                <button onClick={toggleMenu} className='bg-primary p-2 text-white'><FaBars /></button>
                            </div>
                        </div>
                    </div>
                    <div className={`fixed top-14 right-0 h-full z-50 bg-white w-[96%] sm:w-[40%] transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <ul className='flex flex-col lg:gap-10 gap-2 py-2 w-full'>
                            {navLinksData.map((navLink, i) => <NavLinks key={i} navLink={navLink} toggleMenu={toggleMenu} />)}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
