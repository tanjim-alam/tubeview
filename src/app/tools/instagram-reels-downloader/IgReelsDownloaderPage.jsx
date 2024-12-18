/* eslint-disable */
'use client';
import FaqSection from '@/app/components/FaqSection';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaDownload } from "react-icons/fa";

function IgReelsDownloaderPage() {
    const [url, setUrl] = useState('');
    const [reelData, setReelData] = useState(null);
    const [reel, setReel] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const handleDownload = async (e) => {
        e.preventDefault();
        setError('');
        setReelData(null);

        // Check if URL is provided
        if (!url) {
            setError('Please enter a URL.');
            return;
        }
        try {
            // Make request to the backend API
            setIsLoading(true)
            const response = await axios.get(`/api/download-ig-reels?url=${encodeURIComponent(url)}`);
            if (response.data.status == false) {
                // setError(response.data.error);
                setIsLoading(false)
                setError(response.data.message);
                return;
            } else {
                setIsLoading(false)
                setReelData(response?.data);
                setReel(response?.data?.result[0]?.url);
            }
        } catch (err) {
            setIsLoading(false)
            setError('Failed to fetch reel data. Please try again.');
        }
    };

    // Function to validate Instagram URL format
    const isValidInstagramUrl = (url) => {
        const regex = /^https:\/\/www\.instagram\.com\/reel\/[\w-]+\/\??.*$/;
        return regex.test(url);
    };

    const downloadVideo = async (storyLink) => {
        try {
            // Fetch the video as a blob
            const response = await axios.get(storyLink, { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));

            // Create a link element and trigger the download
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'instagram_reel.mp4'); // Specify the filename
            document.body.appendChild(link);
            link.click();

            // Clean up
            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            alert("Error downloading video")
        }
    };


    const faqData = [
        {
            id: 1,
            question: "Is GoFamy Instagram Reels Downloader Free to Use?",
            answer:
                `Yes! GoFamy Provide tool is completely free, and there are no restrictions on the number of downloads.
                `
        },
        {
            id: 2,
            question: "Can I Use the Downloaded Reels for Commercial Purposes?",
            answer:
                `Downloaded content is for personal use only. Please respect the original creator's copyrights.
                `
        },
        {
            id: 3,
            question: "Do I Need to Install Any Software?",
            answer:
                `No installations are required. GoFamy works directly in your browser for maximum convenience.
                `
        },
        {
            id: 4,
            question: "Is My Data Safe?",
            answer:
                `Absolutely. We do not store any of your download history or personal data.
                `
        }
    ]
    return (
        <div className='w-full bg-white py-16'>
            <div className='lg:w-[80%] md:w-[80%] w-[95%] m-auto'>
                <div className='lg:w-[80%] m-auto'>
                    <h1 className='text-3xl font-semibold text-black text-center'>Instagram Reels Downloader - Fast, Free & Secure</h1>
                    <p className='mt-6 leading-normal text-[18px] text-center text-neutral-800'>
                        Welcome to GoFamy, your one-stop solution for effortless and seamless Instagram Reels downloads! Our Instagram Reels Downloader
                        is designed to help you save your favorite Reels instantly, without any hassle. Whether it’s for inspiration, offline viewing,
                        or sharing with friends, GoFamy ensures a fast, secure, and user-friendly experience.
                    </p>
                    <form onSubmit={handleDownload} className='w-full flex border-2 p-1 rounded-full mt-10 border-black'>
                        <input type="text"
                            placeholder='Enter Link here'
                            className='w-full lg:p-3 p-2 text-black outline-none border-none rounded-full text-lg'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button
                            className='bg-primary text-white rounded-full py-2 px-6'
                            type='submit'
                        >
                            DOWNLOAD
                        </button>
                    </form>
                    <div className='flex justify-center p-3'>
                        <div className='lg:flex sm:flex grid grid-cols-4 gap-8 lg:gap-16'>
                            <Link href={"/tools/instagram-reels-downloader"} className='flex flex-col justify-center items-center gap-0 p-0'>
                                <svg xmlns="" className="h-10 w-10 m-auto rounded-md border border-gray-200 p-1 stroke-2 stroke-blue-400" fill="none" viewBox="0 0 24 24">
                                    <path strokelinecap="round" strokelinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
                                </svg>
                                <p className='text-sm'>Reels</p>
                            </Link>
                            <Link href={"/tools/instagram-story-viewer"} className='flex flex-col justify-center items-center gap-0 p-0'>
                                <svg className="h-10 w-10 m-auto rounded-md border border-gray-200 p-1 stroke-2 stroke-green-500" fill="none" viewBox="0 0 24 24">
                                    <path strokelinecap="round" strokelinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                    <path strokelinecap="round" strokelinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <p className='text-sm'>Stories</p>
                            </Link>
                            <Link href={"#"} className='flex flex-col justify-center items-center gap-0 p-0'>
                                <svg className="h-10 w-10 m-auto rounded-md border border-gray-200 p-1 stroke-2 stroke-pink-600" viewBox="0 0 24 24" fill="none">
                                    <path d="M10 3 6 21M18 3l-4 18M4 8h17M3 16h17" strokewidth="2" strokelinecap="round" strokelinejoin="round"></path>
                                </svg>
                                <p className='text-sm'>Hashtag</p>
                            </Link>
                            <Link href={"/tools/instagram-reels-downloader"} className='flex flex-col justify-center items-center gap-0 p-0'>
                                <svg className="h-10 w-10 m-auto stroke-2 rounded-md border border-gray-200 p-1 stroke-amber-500" fill="none" viewBox="0 0 24 24">
                                    <path strokelinecap="round" strokelinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                </svg>
                                <p className='text-sm'>Videos</p>
                            </Link>
                            <Link href={"/tools/instagram-reels-downloader"} className='flex flex-col justify-center items-center gap-0 p-0'>
                                <svg className="h-10 w-10 m-auto rounded-md border border-gray-200 p-1 stroke-2 stroke-purple-500" fill="none" viewBox="0 0 24 24">
                                    <path strokelinecap="round" strokelinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-5-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <p className='text-sm'>Photo</p>
                            </Link>
                            <Link href={"/tools/instagram-reels-downloader"} className='flex flex-col justify-center items-center gap-0 p-0'>
                                <svg className="h-10 w-10 m-auto rounded-md border border-gray-200 p-1 stroke-2 stroke-cyan-500" fill="none" viewBox="0 0 24 24">
                                    <path strokelinecap="round" strokelinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                                </svg>
                                <p className='text-sm'>Audio</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        {
                            isLoading ? (
                                <div className='flex justify-center mt-14'>
                                    <div className="loaderContainer flex flex-col items-center">
                                        <div className="loader"></div>
                                        <p>Downloading...</p>
                                    </div>
                                </div>
                            ) :
                                <div>
                                    {
                                        error !== "" ? <div className='mt-10'>
                                            <p className='text-center text-lg font-semibold text-primary'>{error}</p>
                                        </div>
                                            : (
                                                <div>
                                                    {
                                                        reel ? (
                                                            <div className='flex flex-col items-center justify-center mt-12'>
                                                                <video width="300" height="800" controls className='h-[500px]'>
                                                                    <source src={reel} type="video/mp4" />
                                                                </video>
                                                                <div className='w-[300px] mt-2'>
                                                                    <button
                                                                        className='bg-primary p-3 w-full text-lg font-semibold text-white flex items-center justify-center gap-1'
                                                                        style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}
                                                                        onClick={() => downloadVideo(reel)}
                                                                    >
                                                                        <FaDownload />
                                                                        Download
                                                                    </button>
                                                                </div>
                                                                <div className='mt-10 flex flex-col gap-5 lg:grid lg:grid-cols-2 xl:flex xl:flex-row justify-between  pb-7'>
                                                                    <Link
                                                                        href="/buy-instagram-followers"
                                                                        className='bg-primary py-3 px-9 md:px-2 lg:px-3 xl:px-5 text-center rounded-full text-lg text-white font-semibold'
                                                                    >Boost Followers
                                                                    </Link>
                                                                    <Link
                                                                        href="/buy-instagram-reels-views"
                                                                        className='bg-primary py-3 px-9 md:px-2 lg:px-3 xl:px-5 text-center rounded-full text-lg text-white font-semibold'
                                                                    >Buy Reels Views
                                                                    </Link>
                                                                    <Link
                                                                        href="/buy-instagram-reels-likes"
                                                                        className='bg-primary py-3 px-9 md:px-2 lg:px-3 xl:px-5 text-center rounded-full text-lg text-white font-semibold'
                                                                    >Buy Reels Likes
                                                                    </Link>
                                                                    <Link
                                                                        href="/buy-instagram-comments"
                                                                        className='bg-primary py-3 px-9 md:px-2 lg:px-3 xl:px-5 text-center rounded-full text-lg text-white font-semibold'
                                                                    >Buy Reels Comments
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        ) : null
                                                    }
                                                </div>
                                            )
                                    }
                                </div>
                        }
                    </div>
                </div>
                <div className='mt-16 p-1 sm:p-0 ' >
                    <div>
                        <h2
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >
                            Why Choose GoFamy for Instagram Reels Download?
                        </h2>
                        <div className='flex flex-col gap-3 md:pl-10'>
                            <div>
                                <p className="leading-relaxed text-slate-700 font-medium mt-2">
                                    1. Fast & Reliable Downloads
                                </p>
                                <p className="leading-relaxed text-slate-700">
                                    With our advanced technology, you can download Instagram Reels at lightning speed without compromising quality.
                                </p>
                            </div>
                            <div>
                                <p className="leading-relaxed text-slate-700 font-medium">
                                    2. High-Quality Downloads
                                </p>
                                <p className="leading-relaxed text-slate-700">
                                    Save Reels in HD quality, ensuring every detail of the content is preserved.
                                </p>
                            </div>
                            <div>
                                <p className="leading-relaxed text-slate-700 font-medium">
                                    3. No Login Required
                                </p>
                                <p className="leading-relaxed text-slate-700">
                                    Unlike other services, GoFamy doesn’t ask for your Instagram login credentials. Your privacy is 100% protected.
                                </p>
                            </div>
                            <div>
                                <p className="leading-relaxed text-slate-700 font-medium">
                                    4. Completely Free
                                </p>
                                <p className="leading-relaxed text-slate-700">
                                    Our Instagram Reels Downloader is available to all users at no cost. Enjoy unlimited downloads with no hidden charges!
                                </p>
                            </div>
                            <div>
                                <p className="leading-relaxed text-slate-700 font-medium">
                                    5. User-Friendly Interface
                                </p>
                                <p className="leading-relaxed text-slate-700">
                                    Our intuitive design makes downloading Instagram Reels simple for everyone. Just copy, paste, and download.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <h2
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >
                            How to Download Instagram Reels with GoFamy
                        </h2>
                        <p className="leading-relaxed text-slate-700 font-medium mt-2">
                            Follow these easy steps to download Instagram Reels:
                        </p>
                        <div className='flex flex-col gap-3 lg:pl-10'>
                            <div>
                                <p className="leading-relaxed text-slate-700 font-medium mt-2">
                                    1. Copy the Link
                                </p>
                                <p className="leading-relaxed text-slate-700">
                                    Open Instagram, find the Reel you want to download, and copy the link from the share menu.
                                </p>
                            </div>
                            <div>
                                <p className="leading-relaxed text-slate-700 font-medium">
                                    2. Paste the Link
                                </p>
                                <p className="leading-relaxed text-slate-700">
                                    Visit the GoFamy Instagram Reels Downloader page and paste the copied link into the input field.
                                </p>
                            </div>
                            <div>
                                <p className="leading-relaxed text-slate-700 font-medium">
                                    3. Download
                                </p>
                                <p className="leading-relaxed text-slate-700">
                                    Click the "Download" button. Within seconds, your Reel will be ready to save to your device.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <h2
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >
                            Features That Make GoFamy Stand Out
                        </h2>
                        <p className="leading-relaxed text-slate-700 font-medium mt-2">
                            Follow these easy steps to download Instagram Reels:
                        </p>
                        <ul className='flex flex-col gap-3 lg:pl-10 list-disc list-inside mt-3'>
                            <div>
                                <li className='font-medium'>
                                    Compatible All Devices
                                </li>
                                <p className="leading-relaxed text-slate-700 pl-5">
                                    Access our tool on any device, whether it's a smartphone, tablet, or desktop.
                                </p>
                            </div>
                            <div>
                                <li className='font-medium'>
                                    No Watermarks
                                </li>
                                <p className="leading-relaxed text-slate-700 pl-5">
                                    Download Reels without any unwanted watermarks for professional use or personal enjoyment.
                                </p>
                            </div>
                            <div>
                                <li className='font-medium'>
                                    Supports Multiple Formats
                                </li>
                                <p className="leading-relaxed text-slate-700 pl-5">
                                    Save videos in MP4 or other formats for optimal compatibility with various media players.
                                </p>
                            </div>
                            <div>
                                <li className='font-medium'>
                                    Secure Downloads
                                </li>
                                <p className="leading-relaxed text-slate-700 pl-5">
                                    We prioritize your data security, ensuring a safe and worry-free experience.
                                </p>
                            </div>
                        </ul>
                    </div>
                    <div className='mt-6'>
                        <h2
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >
                            Why GoFamy is Your Best Choice
                        </h2>
                        <p className="leading-relaxed text-slate-700 font-medium mt-2">
                            At GoFamy, we understand the importance of preserving great content. Whether it’s a funny Reel, an inspirational video,
                            or a creative masterpiece, our tool empowers you to save and cherish your favorite moments.
                        </p>
                        <p className="leading-relaxed text-slate-700 font-medium mt-3">
                            Experience the GoFamy difference today! Start downloading Instagram Reels effortlessly, securely, and for free.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <FaqSection
                    heading={"🥇 Frequently Asked Questions (FAQs)"}
                    faqData={faqData}
                />
            </div>
        </div>
    );
}

export default IgReelsDownloaderPage;
