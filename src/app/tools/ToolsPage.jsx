"use client"
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react';
import {
    FaYoutube, FaFacebook, FaInstagramSquare, FaTwitter, FaTiktok, FaSpotify,
    FaSoundcloud, FaLinkedinIn, FaPinterest, FaSnapchatGhost, FaRedditAlien, FaTwitch, FaStar
} from "react-icons/fa";
import { SiBoost } from 'react-icons/si';
import { MdDashboard } from "react-icons/md";

function ToolsPage() {
    const allTools = [
        {
            id: 1,
            title: "Youtube Money Calculator",
            description: "Check out the YouTube money calculator is an easy-to-use online tool that will tell creators how much money their channel can make.",
            icon: FaYoutube,
            link: "/tools/youtube-money-calculator",
            category: "youtube"
        },
        {
            id: 2,
            title: "Youtube Thumbnail Downloader",
            description: "The YouTube thumbnail downloader allows you to grab the YouTube videos' thumbnails and YouTube banners you want for free.",
            icon: FaYoutube,
            link: "/tools/youtube-thumbnail-downloader",
            category: "youtube"
        },
        {
            id: 3,
            title: "Youtube Video Downloader",
            description: "The YouTube Video downloader allows you to grab the YouTube videos' thumbnails and YouTube banners you want for free.",
            icon: FaYoutube,
            link: "/tools/youtube-video-download",
            category: "youtube"
        },
        {
            id: 4,
            title: "YouTube Video Analytics",
            description: "The YouTube Video downloader allows you to grab the YouTube videos' thumbnails and YouTube banners you want for free.",
            icon: FaYoutube,
            link: "/tools/youtube-video-analytics",
            category: "youtube"
        },
        {
            id: 5,
            title: "Instagram Story Viewer",
            description: "GoFamy is an all-in-one Instagram Story Viewer tool that lets you anonymously view stories, track profile visits, and analyze engagement.",
            icon: FaInstagramSquare,
            link: "/tools/instagram-story-viewer",
            category: "instagram"
        },
        {
            id: 4,
            title: "Instagram Reels Downloader",
            description: "GoFamy lets you quickly and easily download Instagram Reels videos for free. Save your favorite Reels in high-quality MP4 format, without the need for any app.",
            icon: FaInstagramSquare,
            link: "/tools/instagram-reels-downloader",
            category: "instagram"
        },
        {
            id: 5,
            title: "Facebook Video Downloader",
            description: "The YouTube thumbnail downloader allows you to grab the YouTube videos' thumbnails and YouTube banners you want for free.",
            icon: FaFacebook,
            link: "/tools/facebook-video-downloader",
            category: "facebook"
        },
    ];
    const categories = [
        {
            id: 1,
            name: "All",
            icon: MdDashboard,
            category: "all",
            color: "red"
        },
        {
            id: 2,
            name: "YouTube",
            icon: FaYoutube,
            category: "youtube",
            color: "red"
        },
        {
            id: 3,
            name: "Instagram",
            icon: FaInstagramSquare,
            category: "instagram",
            color: "#fb3c44"
        },
        {
            id: 4,
            name: "Facebook",
            icon: FaFacebook,
            category: "facebook",
            color: "#0b82e8"
        },
        ,
        {
            id: 5,
            name: "TikTok",
            icon: FaTiktok,
            category: "tiktok",
            color: "#000000"
        }
    ]

    const [allData, setAllData] = useState(allTools);
    const [active, setActive] = useState(1);

    function handleFilter(category, id) {
        if (category == "all") {
            setAllData(allTools);
            return;
        }
        setActive(id)
        const filterData = allTools.filter((data) => data.category === category);
        if (filterData) {
            setAllData(filterData);
        }
    };
    return (
        <div className='w-full bg-white py-10'>
            <div className='w-[80%] py-10 flex flex-col m-auto'>
                <div>
                    <h2 className='text-center text-3xl font-semibold'>See All Our Tools</h2>
                </div>
                <div className='w-auto mt-10 flex justify-center items-center'>
                    <div className='md:flex grid grid-cols-3 gap-4'>
                        {
                            categories?.map((data, i) => (
                                <div
                                    key={i}
                                    onClick={() => handleFilter(data.category, data.id)}
                                    className=' flex cursor-pointer px-2 py-2 bg-primary items-center border-2 rounded-full shadow-[0_2px_2px_rgba(0,0,0,0.10)] group'                                >
                                    <div className="w-full ">
                                        <p
                                            className='text-center text-white lg:text-xl font-semibold group-hover:text-white'

                                        >
                                            {data.name}
                                        </p>
                                    </div>

                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className='mt-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-4 gap-3 lg:gap-y-14'>
                    {
                        allData?.map((data, i) => (
                            <div key={i} className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-6 '>
                                <div className='flex flex-col relative items-center justify-center gap-10  text-black'>
                                    <div className='text-5xl hidden md:block absolute bottom-8 bg-primary p-3 rounded-full text-white '>
                                        <data.icon />
                                    </div>
                                    <h4 className='text-xl font-semibold mt-2'>{data?.title}</h4>
                                </div>
                                <div className='group-hover:text-white'>
                                    <p className='text-[15px] text-slate-600 leading-normal  '>
                                        {data?.description}
                                    </p>
                                </div>
                                <div>
                                    <Link href={data.link}>
                                        <button className='w-full bg-primary py-2 text-lg font-semibold text-white rounded-md'>View Details</button>
                                    </Link>
                                    <div className='mt-3 flex gap-2'>
                                        <span><FaStar className='text-primary' /></span>
                                        <span><FaStar className='text-primary' /></span>
                                        <span><FaStar className='text-primary' /></span>
                                        <span><FaStar className='text-primary' /></span>
                                        <span><FaStar className='text-primary' /></span>

                                    </div>
                                </div>
                                {/* <div>
                            <span><FaStar /></span>
                        </div> */}
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default ToolsPage