/* eslint-disable */
"use client"
import FaqSection from '@/app/components/FaqSection';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import { CiWarning } from 'react-icons/ci';

function YtVideoDownloadPage() {
    const [videoUrl, setVideoUrl] = useState("");
    // https://rapidapi.com/ugodavidpay/api/youtube-video-and-shorts-downloader1/playground/apiendpoint_04a763f7-6038-4331-b887-11fb64f4c030
    const [videoData, setVideoData] = useState(null);
    const [videos, setVideos] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`/api/yt-video-downloader?url=${videoUrl}`);
            setVideoData(response.data);
        } catch (error) {
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    const downloadVideo = async (videoLink) => {
        try {
            const response = await axios.get(videoLink, { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));

            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'video.mp4');
            document.body.appendChild(link);
            link.click();

            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading video:', error);
        }
    };

    const faqData = [
        {
            id: 1,
            question: "Is TubeViews free to use?",
            answer:
                `Yes! TubeViews is completely free with no hidden charges. Download as many videos as you like!
                `
        },
        {
            id: 2,
            question: "Do I need to install anything?",
            answer:
                `No. TubeViews is a web-based tool, so there's nothing to download or install. Just visit the website and start using it.
                `
        },
        {
            id: 3,
            question: "What video formats and resolutions can I choose from?",
            answer:
                `You can download videos in various formats (MP4, WEBM, MP3) and select from different video resolutions like 720p, 1080p, and 4K.
                `
        },
        {
            id: 4,
            question: "Is TubeViews safe to use?",
            answer:
                `Yes, TubeViews is 100% safe to use. We do not host any malware or unwanted pop-up ads. Your security and privacy are our priority.

                `
        },
        {
            id: 5,
            question: "Can I download YouTube playlists?",
            answer:
                `Yes! TubeViews supports downloading entire playlists from YouTube, making it easy to save multiple videos in one go.
                `
        }
    ]

    return (
        <div className='w-full bg-white py-16'>
            <div className='lg:w-[80%] md:w-[80%] w-[95%] m-auto'>
                <div className='xl:w-[80%] m-auto'>
                    <h1 className='text-3xl font-semibold text-black text-center'>YouTube Video Downloader</h1>
                    <p className='mt-6 leading-normal text-[18px] text-center text-neutral-800'>
                        Looking to download your favorite YouTube videos? TubeViews is the easiest and fastest way to download videos directly from
                        YouTube to your device for offline viewing, without the hassle. Our tool is free, simple, and works across all devices.
                        Whether you’re on a desktop, tablet, or smartphone, TubeViews makes it simple to download and save videos in just a few clicks.
                    </p>
                    <form onSubmit={handleSubmit} className='w-full flex border-2 p-1 rounded-full mt-10 border-black'>
                        <input type="text"
                            placeholder='Enter Link here'
                            className='w-full lg:p-3 p-2 text-black outline-none border-none rounded-full text-lg'
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                        />
                        <button
                            className='bg-primary text-white rounded-full py-2 px-6'
                            type='submit'
                        >
                            DOWNLOAD
                        </button>
                    </form>
                    <div className='md:flex hidden justify-center items-center w-full p-3 mt-5 text-black'>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center lg:flex items-center sm:grid-cols-6'>
                            <Link href={"/tools/youtube-thumbnail-downloader"} className='bg-primary text-white text-lg font-semibold hover:bg-transparent hover:text-primary border-2  hover:border-primary py-2 px-4 rounded-full transition-transform duration-300'>
                                Thumbails Download
                            </Link>
                            <Link href={"/tools/youtube-money-calculator"}
                                className='bg-primary text-white text-lg font-semibold hover:bg-transparent hover:text-primary border-2  hover:border-primary py-2 px-4 rounded-full transition-transform duration-300'
                            >
                                Money Calculator
                            </Link>
                            <Link href={"/tools/youtube-video-analytics"}
                                className='bg-primary text-white text-lg font-semibold hover:bg-transparent hover:text-primary border-2  hover:border-primary py-2 px-4 rounded-full transition-transform duration-300'
                            >
                                Video Analytics
                            </Link>
                            <Link href={"#"}
                                className='bg-primary text-white text-lg font-semibold hover:bg-transparent hover:text-primary border-2  hover:border-primary py-2 px-4 rounded-full transition-transform duration-300'
                            >
                                Title Generator
                            </Link>
                        </div>
                    </div>
                    <div>
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
                                (
                                    <div>
                                        {error ? (
                                            <div>
                                                <p className='text-center text-lg font-semibold text-primary'>{error}</p>
                                            </div>
                                        ) :
                                            (
                                                <div>
                                                    {
                                                        videoData?.links ? (
                                                            <div
                                                                className='p-7 mt-10 flex flex-col gap-4 rounded-md'
                                                                style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}
                                                            >
                                                                <div>
                                                                    <h4
                                                                        className='text-lg font-medium'
                                                                    >{videoData?.description}</h4>
                                                                </div>
                                                                <div className='flex gap-4'>
                                                                    <div>
                                                                        <img src={videoData?.picture} alt="Thumbnail" />
                                                                    </div>
                                                                    <div className='w-[50%]'>
                                                                        <div>
                                                                            <div
                                                                                className='flex w-full justify-between items-center border-b-2 p-2 border-primary'>
                                                                                <p><span>MP3 - Audio</span></p>
                                                                                <button
                                                                                    onClick={() => downloadVideo(videoData?.links?.link)}
                                                                                    className='bg-primary py-2 px-3 text-white font-semibold'
                                                                                >Dowload [MP3]
                                                                                </button>
                                                                            </div>
                                                                            {
                                                                                videoData?.links?.slice(1, 5).map((item, i) => (
                                                                                    <div
                                                                                        key={i}
                                                                                        className='flex w-full justify-between items-center border-b-2 p-2 border-primary'>
                                                                                        <p><span>{(item?.container).toUpperCase()} - {item?.qualityLabel}</span></p>
                                                                                        <button
                                                                                            onClick={() => downloadVideo(item?.link)}
                                                                                            className='bg-primary py-2 px-3 text-white font-semibold'
                                                                                        >Dowload [{(item?.container).toUpperCase()}]</button>
                                                                                    </div>
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : null
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                        }
                    </div>
                </div>
                <div className='mt-16 p-1 sm:p-0 ' >
                    <div>
                        <h2
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >
                            Why Choose TubeViews?
                        </h2>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            <b>Free to Use:</b> TubeViews is completely free. No hidden costs, no subscriptions—just quick and easy downloads.
                        </p>
                        <p className="leading-relaxed text-slate-700 mt-3">
                            <b>Multiple Formats & Resolutions:</b> Choose your preferred video format (MP4, WEBM, etc.) and resolution (720p, 1080p, 4K) for the best quality.
                        </p>
                        <p className="leading-relaxed text-slate-700 mt-3">
                            <b>Download Audio:</b> You can also download videos as MP3 files for music, podcasts, and more.
                        </p>
                        <p className="leading-relaxed text-slate-700 mt-3">
                            <b>No Software Required:</b> You don’t need to install anything. TubeViews works directly in your browser.
                        </p>
                        <p className="leading-relaxed text-slate-700 mt-3">
                            <b>100% Safe and Secure:</b> We prioritize your privacy and security. TubeViews is free from malware and unwanted ads.
                        </p>
                    </div>
                    <div className='mt-6'>
                        <h2
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >
                            How to Use TubeViews
                        </h2>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            <b>1. Copy the Video URL:</b> Open YouTube, find the video you want to download, and copy its URL from the browser address bar.
                        </p>
                        <p className="leading-relaxed text-slate-700 mt-3">
                            <b>2. Visit TubeViews:</b> Go to www.TubeViews in your browser.
                        </p>
                        <p className="leading-relaxed text-slate-700 mt-3">
                            <b>3. Paste the URL:</b> Paste the copied URL into the search bar on the TubeViews homepage and press Enter.
                        </p>
                        <p className="leading-relaxed text-slate-700 mt-3">
                            <b>4. Select the Format and Quality:</b> TubeViews will show you a list of download options. Choose from various formats like MP4, MP3, or WEBM, and pick the resolution (720p, 1080p, 4K).
                        </p>
                        <p className="leading-relaxed text-slate-700 mt-3">
                            <b>5. Click Download:</b> Once you’ve selected your desired format and resolution, click the Download button, and your video will begin downloading instantly.
                        </p>
                    </div>
                    <div className='mt-6'>
                        <h2
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >
                            Supported Features
                        </h2>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            <b>HD & 4K Video Downloading:</b> Download videos in high-definition (720p, 1080p) or ultra-high-definition (4K) quality for the best viewing experience.
                        </p>
                        <p className="leading-relaxed text-slate-700 mt-3">
                            <b>Audio Downloads:</b> Convert videos to MP3 for easy music or podcast listening on any device.
                        </p>
                        <p className="leading-relaxed text-slate-700 mt-3">
                            <b>No Registration Needed:</b> You don’t need to sign up or create an account to use TubeViews.
                        </p>
                        <p className="leading-relaxed text-slate-700 mt-3">
                            <b>Fast and Efficient:</b> Get your video in just seconds, even for longer videos and playlists.
                        </p>
                        <p className="leading-relaxed text-slate-700 mt-3">
                            <b>Mobile & Desktop Friendly:</b> TubeViews works across all devices and platforms, so you can download on Windows, Mac, Android, or iOS.
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
            <div className='lg:w-[80%] md:w-[80%] w-[95%] m-auto'>
                <div>
                    <h3
                        className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                    >
                        Legal Disclaimer
                    </h3>
                    <p className="leading-relaxed text-slate-700 mt-2">
                        Please remember to follow YouTube’s Terms of Service. You should only download videos for personal use or with permission from the content creator.
                        Downloading copyrighted material without permission may violate YouTube's policies.
                    </p>
                </div>
                <div className='mt-6'>
                    <h3
                        className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                    >
                        Start Downloading Now!
                    </h3>
                    <p className="leading-relaxed text-slate-700 mt-2">
                        Ready to start saving your favorite YouTube videos? With TubeViews, you can download videos in a flash and enjoy them offline anytime,
                        anywhere. No more buffering, no more limits—just seamless downloads in the highest quality. Try TubeViews today and start saving your
                        content for offline enjoyment!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default YtVideoDownloadPage