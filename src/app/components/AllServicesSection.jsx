"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import {
    FaYoutube, FaFacebook, FaInstagramSquare, FaTwitter, FaTiktok, FaSpotify,
    FaSoundcloud, FaLinkedinIn, FaPinterest, FaSnapchatGhost, FaRedditAlien, FaTwitch
} from "react-icons/fa";

function AllServicesSection() {
    const servicesCategoryData = [
        {
            id: 1,
            name: "YouTube",
            icon: FaYoutube,
            services: [
                { id: 1, title: "Buy YouTube Views", slug: "youtube-views" },
                { id: 2, title: "Buy YouTube Subscribers", slug: "youtube-subscribers" },
                { id: 3, title: "Buy YouTube Likes", slug: "youtube-likes" },
                { id: 4, title: "Buy YouTube Comments", slug: "youtube-comments" },
                { id: 5, title: "Buy YouTube Live Views", slug: "youtube-live-views" },
            ],
            color: "red"
        },
        {
            id: 2,
            name: "Facebook",
            icon: FaFacebook,
            services: [
                { id: 1, title: "Buy Facebook Followers", slug: "buy-facebook-followers" },
                { id: 2, title: "Buy Facebook Likes", slug: "buy-facebook-likes" },
                { id: 3, title: "Buy Facebook Video Views", slug: "buy-facebook-video-views" },
                { id: 4, title: "Buy Facebook Comments", slug: "buy-facebook-comments" },
                { id: 5, title: "Buy Facebook Page Likes", slug: "buy-facebook-page-likes" },
                { id: 6, title: "Buy Facebook Live Views", slug: "buy-facebook-live-views" }
            ],
            color: "blue"
        },
        {
            id: 3,
            name: "Instagram",
            icon: FaInstagramSquare,
            services: [
                { id: 1, title: "Buy Instagram Followers", slug: "buy-instagram-followers" },
                { id: 2, title: "Buy Instagram Likes", slug: "buy-instagram-likes" },
                { id: 3, title: "Buy Instagram Reels Likes", slug: "buy-instagram-reels-likes" },
                { id: 4, title: "Buy Instagram Reels Views", slug: "buy-instagram-reels-views" },
                { id: 5, title: "Buy Instagram Comments", slug: "buy-instagram-comments" },
                { id: 6, title: "Buy Instagram Story Views", slug: "buy-instagram-story-views" },
                { id: 7, title: "Buy Instagram Target Likes", slug: "buy-instagram-target-likes" },
                { id: 8, title: "Buy Instagram Target Followers", slug: "buy-instagram-target-followers" },
                { id: 9, title: "Buy Instagram Live Views", slug: "buy-instagram-live-views" },
            ],
            color: "#E1306C"
        },
        {
            id: 4,
            name: "Twitter",
            icon: FaTwitter,
            services: [
                { id: 1, title: "Buy Twitter Followers", slug: "buy-twitter-followers" },
                { id: 2, title: "Buy Twitter Likes", slug: "buy-twitter-likes" },
                { id: 3, title: "Buy Twitter Comments", slug: "buy-twitter-comments" },
                { id: 4, title: "Buy Twitter Video Views", slug: "buy-twitter-video-views" },
            ],
            color: "#1DA1F2"
        },
        {
            id: 5,
            name: "TikTok",
            icon: FaTiktok,
            services: [
                { id: 1, title: "Buy TikTok Followers", slug: "buy-tiktok-followers" },
                { id: 2, title: "Buy TikTok Likes", slug: "buy-tiktok-likes" },
                { id: 3, title: "Buy TikTok Comments", slug: "buy-tiktok-comments" },
            ],
            color: "#000000"
        },
        {
            id: 6,
            name: "Spotify",
            icon: FaSpotify,
            services: [
                { id: 1, title: "Buy Spotify Followers", slug: "buy-spotify-followers" },
                { id: 2, title: "Buy Spotify Plays", slug: "buy-spotify-plays" }
            ],
            color: "#1DB954"
        },
        {
            id: 7,
            name: "SoundCloud",
            icon: FaSoundcloud,
            services: [
                { id: 1, title: "Buy SoundCloud Followers", slug: "buy-soundcloud-followers" },
                { id: 2, title: "Buy SoundCloud Plays", slug: "buy-soundcloud-plays" },
            ],
            color: "#FF5500"
        },
        {
            id: 8,
            name: "LinkedIn",
            icon: FaLinkedinIn,
            services: [
                { id: 1, title: "Buy YouTube Views", slug: "youtube-views" },
                { id: 2, title: "Buy YouTube Subscribers", slug: "youtube-subscribers" },
            ],
            color: "#0A66C2"
        },
        {
            id: 9,
            name: "Pinterest",
            icon: FaPinterest,
            services: [
                { id: 1, title: "Buy YouTube Views", slug: "youtube-views" },
                { id: 2, title: "Buy YouTube Subscribers", slug: "youtube-subscribers" },
            ],
            color: "#E60023"
        },
        {
            id: 10,
            name: "Snapchat",
            icon: FaSnapchatGhost,
            services: [
                { id: 1, title: "Buy YouTube Views", slug: "youtube-views" },
                { id: 2, title: "Buy YouTube Subscribers", slug: "youtube-subscribers" },
            ],
            color: "#FFFC00"
        },
        {
            id: 11,
            name: "Reddit",
            icon: FaRedditAlien,
            services: [
                { id: 1, title: "Buy YouTube Views", slug: "youtube-views" },
                { id: 2, title: "Buy YouTube Subscribers", slug: "youtube-subscribers" },
            ],
            color: "#FF4500"
        },
        {
            id: 12,
            name: "Twitch",
            icon: FaTwitch,
            services: [
                { id: 1, title: "Buy YouTube Views", slug: "youtube-views" },
                { id: 2, title: "Buy YouTube Subscribers", slug: "youtube-subscribers" },
            ],
            color: "#9146FF"
        }
    ];

    const [activeId, setActiveId] = useState(null);

    function showServices(id) {
        setActiveId(id === activeId ? null : id); // Toggle the active id
    }

    return (
        <div className='bg-white'>
            <div className='lg:w-[70%] w-[90%] py-16 m-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-7 gap-4'>
                    {servicesCategoryData.map((data) => (
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
                                    <div className='absolute left-0 top-14 hidden group-hover:block shadow-lg z-50 w-full duration-500 ease-in-out'>
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
                            <div className='block sm:hidden md:hidden lg:hidden w-full px-7'>
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
                                    <ul className='flex flex-col mx-4 mt-1'>
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
