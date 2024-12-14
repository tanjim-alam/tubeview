/* eslint-disable */
"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { FaDownload } from 'react-icons/fa';
import { CiWarning } from "react-icons/ci";
import axios from 'axios';
import FaqSection from '@/app/components/FaqSection';
// https://rapidapi.com/social-api1-instagram/api/instagram-scraper-api2/playground/apiendpoint_08c86019-85b3-4e91-8971-25dd68886184
function IgStoryViewerPage() {
    const [url, setUrl] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);  // State to track loading status

    // Function to fetch Instagram story data
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url) {
            setError('Please enter a valid Instagram URL');
            return;
        }

        setLoading(true);  // Start loading

        try {
            const response = await axios.get(`/api/ig-story-viewer?url=${url}`);

            if (response.status === 200) {
                const data = response.data; // Get the data from the response
                if (data.success && data.stories && data.stories.length > 0) {
                    // Extract video_versions of type 103
                    setData(data.stories)
                } else {
                    setError('No stories found');
                }
            } else {
                setError('Failed to fetch Instagram story');
            }
        } catch (err) {
            console.error('Error:', err); // Log the error for debugging
            setError(err.message);
        } finally {
            setLoading(false);  // Stop loading when the request is complete
        }
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
            question: "1. Can I view Instagram stories anonymously without having an Instagram account?",
            answer:
                `Yes, you can! The Instagram Story Viewer allows you to watch stories anonymously without the need for an Instagram account. 
                Simply enter the username or URL of the public profile you want to view.
                `
        },
        {
            id: 2,
            question: "2. Is it legal to use the Instagram Story Viewer?",
            answer:
                `Yes, it’s completely legal to use this tool for viewing and downloading stories from public accounts. However, it does not allow access 
                to private accounts, as this would violate Instagram's terms of service.
                `
        },
        {
            id: 3,
            question: "3. Are my personal details safe when using this tool?",
            answer:
                `Absolutely. The tool does not require any personal information or login credentials, ensuring your privacy is 
                fully protected while you browse Instagram stories anonymously.
                `
        },
        {
            id: 4,
            question: "4. Can I download Instagram stories using this tool?",
            answer:
                `Yes, you can use the Instagram Story Viewer as a story downloader. It allows you to save high-quality Instagram stories 
                directly to your device for later viewing or sharing.

                `
        },
        {
            id: 5,
            question: "5. Does the Instagram Story Viewer work on all devices?",
            answer:
                `Yes, the tool is compatible with various devices, including Android phones, iOS devices, and Mac laptops. 
                It is accessible through any web browser, making it convenient to use from anywhere.
                `
        }
    ]
    return (
        <div className='w-full bg-white py-16'>
            <div className='lg:w-[80%] md:w-[80%] w-[95%] m-auto'>
                <div className='2xl:w-[80%] m-auto'>
                    <h1 className='text-3xl font-semibold text-black text-center'>Instagram Story Viewer: Untraceable Profile Exploration</h1>
                    <p className='mt-6 leading-normal text-[18px] text-center text-neutral-800'>
                        Use our Instagram Story Viewer to experience the freedom of anonymous Instagram story viewing. You can use this tool to view content
                        from any public account without jeopardizing your identity or privacy.
                    </p>
                    <form onSubmit={handleSubmit} className='w-full flex border-2 p-1 rounded-full mt-10 border-black'>
                        <input type="text"
                            placeholder='Enter Link here'
                            className='w-full p-3 text-black outline-none border-none rounded-full text-lg'
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
                        <div className='grid grid-cols-4 gap-8 justify-center items-center sm:grid-cols-6 lg:gap-16'>
                            <Link href={"/tools/instagram-story-viewer"} className='flex flex-col justify-center items-center gap-0 p-0'>
                                <svg className="h-10 w-10 m-auto rounded-md border border-gray-200 p-1 stroke-2 stroke-green-500" fill="none" viewBox="0 0 24 24">
                                    <path strokelinecap="round" strokelinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                    <path strokelinecap="round" strokelinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <p className='text-sm'>Stories</p>
                            </Link>
                            <Link href={"/tools/instagram-reels-downloader"} className='flex flex-col justify-center items-center gap-0 p-0'>
                                <svg xmlns="" className="h-10 w-10 m-auto rounded-md border border-gray-200 p-1 stroke-2 stroke-blue-400" fill="none" viewBox="0 0 24 24">
                                    <path strokelinecap="round" strokelinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
                                </svg>
                                <p className='text-sm'>Reels</p>
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
                    <div className='mt-10 flex justify-center '>
                        {
                            loading ? (
                                <div className='flex justify-center mt-14'>
                                    <div className="loaderContainer flex flex-col items-center">
                                        <div className="loader"></div>
                                        <div className='mt-4'>
                                            <p
                                                className='bg-[#fff3cd] border p-2 text-gray-500 flex items-center gap-1'
                                            ><CiWarning className='text-xl' /> Our tools may work with delay due to security measures. After entering your information, you have to wait 1-2 minutes.                                            </p>
                                        </div>

                                    </div>
                                </div>
                            ) :
                                <div>
                                    {error ? (
                                        <div>
                                            <p className='text-center text-lg font-semibold text-primary'>{error}</p>
                                        </div>
                                    ) :
                                        (
                                            <div>
                                                {
                                                    data.length > 0 ? (
                                                        <div className='flex flex-col justify-center items-center w-full'>
                                                            <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 justify-items-center items-center w-full gap-3">
                                                                {
                                                                    data ? data?.map((story, i) => (
                                                                        <div key={i} className='flex flex-col items-center justify-center'>
                                                                            <video width="300" height="800" controls className='h-[]'>
                                                                                <source src={story?.url} type="video/mp4" />
                                                                            </video>
                                                                            <div className='w-[300px] mt-2'>
                                                                                <button
                                                                                    className='bg-primary p-3 w-full text-lg font-semibold text-white flex items-center justify-center gap-1'
                                                                                    style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}
                                                                                    onClick={() => downloadVideo(story?.url)}
                                                                                >
                                                                                    <FaDownload />
                                                                                    Download
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    )) :
                                                                        null
                                                                }
                                                            </div>
                                                            <div className='mt-10 flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-between  pb-7'>
                                                                <Link
                                                                    href="/buy-instagram-followers"
                                                                    className='bg-primary py-3 px-9 md:px-2 lg:px-3 xl:px-5 text-center rounded-full text-lg text-white font-semibold'
                                                                >Boost Followers
                                                                </Link>
                                                                <Link
                                                                    href="/buy-instagram-story-views"
                                                                    className='bg-primary py-3 px-9 md:px-2 lg:px-3 xl:px-5 text-center rounded-full text-lg text-white font-semibold'
                                                                >Buy Story Views
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
                <div>
                    <div className='mt-32 p-1 sm:p-0'>
                        <div>
                            <h2
                                className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                            >
                                What is an Instagram Story Viewer?
                            </h2>
                            <p className="leading-relaxed text-slate-700 mt-2">
                                An Instagram Story Viewer is a free, user-friendly tool that allows you to view the stories of active Instagram accounts anonymously.
                                With this tool,
                                you can discreetly watch stories without revealing your identity or personal information.
                            </p>
                            <p className="leading-relaxed text-slate-700 mt-3">
                                Whether you're curious about someone’s updates or just prefer to remain unnoticed, this tool is perfect for you. Additionally,
                                if you’re looking to boost your own Instagram presence, consider options like purchasing Instagram likes to enhance your profile's
                                visibility and appeal.
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h2
                                className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                            >How to Use the TubeViews Instagram Story Viewer</h2>
                            <p className="leading-relaxed text-slate-700 mt-2">
                                Using the Instagram Story Viewer is simple and straightforward:
                            </p>
                            <ul className='list-decimal list-inside leading-relaxed text-slate-700 mt-2 flex flex-col gap-3 pl-5'>
                                <li>
                                    Enter the username or URL of the Instagram account in the designated search box.
                                </li>
                                <li>
                                    Click the ‘Search’ button.
                                </li>
                                <li>
                                    View the stories anonymously.
                                </li>
                            </ul>
                            <p className="leading-relaxed text-slate-700 mt-4">
                                <b>Bonus Feature:</b> You can also use this tool as an <b>Instagram Story Downloader</b> to save stories directly to your device.
                                Keep in mind that the account must be public, as private accounts are protected under Instagram’s terms of service.
                            </p>
                            <p className="leading-relaxed text-slate-700 mt-4">
                                For even greater engagement and audience reach, you might also explore <b><Link href="/buy-instagram-followers">buying Instagram followers</Link></b> to grow your account effectively.
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h3
                                className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                            >
                                Key Features of the Instagram Story Viewer
                            </h3>
                            <p className="leading-relaxed text-slate-700 mt-2">
                                The Instagram Story Viewer offers a host of impressive features:
                            </p>
                            <ul className='list-disc list-inside leading-relaxed text-slate-700 mt-2 flex flex-col gap-3 pl-5'>
                                <li>
                                    <b>Anonymous Viewing:</b> Watch Instagram stories without revealing your identity. No account or personal details are required.
                                </li>
                                <li>
                                    <b>No Sign-Up Needed:</b> Use the tool hassle-free without creating an account or sharing your information.
                                </li>
                                <li>
                                    <b>Completely Free:</b> Enjoy unlimited access to the tool at no cost.
                                </li>
                                <li>
                                    <b>No Digital Trace:</b> View stories privately without leaving any evidence, such as your username or account details.
                                </li>
                                <li>
                                    <b>High-Quality Downloads:</b> Save Instagram stories in high resolution quickly and easily.
                                </li>
                            </ul>
                        </div>
                        <div className='mt-6'>
                            <h3
                                className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                            >
                                Why Use the Instagram Viewer Tool?
                            </h3>
                            <p className="leading-relaxed text-slate-700 mt-2">
                                Here are some advantages of using the Instagram Story Viewer tool:
                            </p>
                            <div className='mt-3 flex flex-col gap-3'>
                                <div>
                                    <h4 className=" text-slate-700 text-lg font-medium">
                                        1. Discreet Browsing
                                    </h4>
                                    <p className="leading-relaxed text-slate-700">
                                        Maintain complete anonymity while viewing stories. The tool ensures your privacy is respected,
                                        making it ideal for private or professional use.
                                    </p>
                                </div>
                                <div>
                                    <h4 className=" text-slate-700 text-lg font-medium">
                                        2. Access Without Boundaries
                                    </h4>
                                    <p className="leading-relaxed text-slate-700">
                                        Even if you don’t have an Instagram account or if the platform is restricted in your region,
                                        this tool enables you to view public stories effortlessly.
                                    </p>
                                </div>
                                <div>
                                    <h4 className=" text-slate-700 text-lg font-medium">
                                        3. Privacy Protection
                                    </h4>
                                    <p className="leading-relaxed text-slate-700">
                                        The tool guarantees your user information remains secure. It doesn’t store any data, so you can browse worry-free.
                                    </p>
                                </div>
                                <div>
                                    <h4 className=" text-slate-700 text-lg font-medium">
                                        4. Effortless Sharing and Saving
                                    </h4>
                                    <p className="leading-relaxed text-slate-700">
                                        Save stories before they disappear. Whether you’re on Android, iOS, or Mac, the tool works seamlessly across devices,
                                        allowing you to revisit and share content anytime.
                                    </p>
                                </div>
                                <div>
                                    <h4 className=" text-slate-700 text-lg font-medium">
                                        5. Maximize Your Experience
                                    </h4>
                                    <p className="leading-relaxed text-slate-700">
                                        Combine the Instagram Story Viewer with strategies like purchasing followers or likes to enhance your account’s reach and influence.
                                        Whether you're watching anonymously or growing your own presence, this tool provides a seamless solution for Instagram users.
                                    </p>
                                </div>
                            </div>
                        </div>
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
    )
}

export default IgStoryViewerPage