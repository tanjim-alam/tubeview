/* eslint-disable */
"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'

function YtVideoAnlyticsPage() {
    const [videoUrl, setVideoUrl] = useState("")
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const extractVideoId = (url) => {
        if (!url) {
            setError('Video Link is required');
            return;
        }
        const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const videoId = extractVideoId(videoUrl);
        if (!videoId) {
            setError('Invalid YouTube Link');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`/api/yt-video-analytics?videoId=${videoId}`);
            const result = await response.json();

            if (response.ok) {
                setData(result);
            } else {
                setError(result.error || 'Failed to fetch data');
            }
        } catch (err) {
            setError(err.message);
        }

        setLoading(false);
    };

    const formatNumber = (num) => {
        const n = parseInt(num, 10);
        if (n >= 1000000) {
            return (n / 1000000).toFixed(1) + 'M'; // Format as millions
        } else if (n >= 1000) {
            return (n / 1000).toFixed(1) + 'k'; // Format as thousands
        }
        return n; // Return the number as is for smaller values
    };
    return (
        <div className='w-full bg-white py-16'>
            <div className='lg:w-[80%] md:w-[80%] w-[95%] m-auto'>
                <div className='lg:w-[80%] m-auto'>
                    <h1 className='md:text-3xl lg:text-4xl text-2xl font-semibold text-black text-center'>YouTube Video Analytics and Reports</h1>
                    <p className='mt-6 leading-normal text-[18px] text-center text-neutral-800'>
                        A simple online tool that can help creators determine how much money their channel can generate is the YouTube money calculator.
                    </p>
                    <form onSubmit={handleSubmit} className='w-full flex border-2 p-1 rounded-full mt-8 border-black'>
                        <input type="text"
                            placeholder='Enter YouTube URL here'
                            className='w-full p-2 lg:p-3 text-black outline-none border-none rounded-full text-lg'
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                        />
                        <button className='bg-primary text-white rounded-full font-semibold py-2 px-6'>SEARCH</button>
                    </form>
                </div>
                <div>
                    {loading ? (
                        <div className='flex justify-center mt-14'>
                            <div className="loaderContainer flex flex-col items-center">
                                <div className="loader"></div>
                            </div>
                        </div>
                    ) :
                        (
                            <div>
                                {
                                    error ? (
                                        <div className='mt-10'>
                                            <p className='text-center text-lg font-semibold text-primary'>{error}</p>
                                        </div>
                                    ) : (
                                        <div>
                                            {
                                                data ? (
                                                    <div
                                                        className='mt-20 rounded-md lg:w-[80%] xl:w-[70%] m-auto'
                                                        style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}
                                                    >
                                                        <div className='lg:p-7 p-2'>
                                                            <div>
                                                                <img
                                                                    className='w-full'
                                                                    src={data?.video?.snippet?.thumbnails?.medium?.url} alt="thumbnail" />
                                                            </div>
                                                            <div className='mt-4'>
                                                                <h4
                                                                    className='text-xl font-semibold'
                                                                >
                                                                    {data?.video?.snippet?.title}
                                                                </h4>
                                                                <div className='mt-2 flex items-center gap-2'>
                                                                    <img
                                                                        className='w-[40px] rounded-full'
                                                                        src={data?.channel?.snippet?.thumbnails?.medium?.url}
                                                                        alt="thumbnail"
                                                                    />
                                                                    <div className='flex flex-col'>
                                                                        <span className='text-sm font-semibold'>{data?.video?.snippet?.channelTitle}</span>
                                                                        <span className='text-xs'>{formatNumber(data?.channel?.statistics?.subscriberCount)} Subscribers</span>
                                                                    </div>
                                                                </div>
                                                                <div className='mt-6 grid grid-cols-2 md:grid-cols-3 gap-7 justify-items-center items-center w-full'>
                                                                    <div className='flex flex-col gap-1'>
                                                                        <span className='text-lg text-neutral-700'>Video views</span>
                                                                        <p className='lg:text-3xl text-2xl font-semibold'>{formatNumber(data?.video?.statistics?.viewCount)}</p>
                                                                    </div>
                                                                    <div className='flex flex-col gap-1'>
                                                                        <span className='text-lg text-neutral-700'>Comments</span>
                                                                        <p className='lg:text-3xl text-2xl font-semibold'>{formatNumber(data?.video?.statistics?.commentCount)}</p>
                                                                    </div>
                                                                    <div className='flex flex-col gap-1'>
                                                                        <span className='text-lg text-neutral-700'>Est. Video value</span>
                                                                        <p className='lg:text-3xl text-2xl font-semibold'>{data?.estimatedVideoValue}</p>
                                                                    </div>
                                                                    <div className='flex flex-col gap-1'>
                                                                        <span className='text-lg text-neutral-700'>Likes ratio</span>
                                                                        <p className='lg:text-3xl text-2xl font-semibold'>{((data?.video?.statistics?.likeCount / data?.video?.statistics?.viewCount) * 100).toFixed(2)}%</p>
                                                                    </div>
                                                                    <div className='flex flex-col gap-1'>
                                                                        <span className='text-lg text-neutral-700'>Views ratio</span>
                                                                        <p className='lg:text-3xl text-2xl font-semibold'>{((data?.video?.statistics?.viewCount / 25000000) * 100).toFixed(2)}%</p>
                                                                    </div>
                                                                    <div className='flex flex-col gap-1'>
                                                                        <span className='text-lg text-neutral-700'>Estimated CPM</span>
                                                                        <p className='lg:text-3xl text-2xl font-semibold'>{data?.estimatedCPM}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='mt-10 flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-between px-6 pb-7'>
                                                            <Link
                                                                href="/buy-youtube-subscribers"
                                                                className='bg-primary py-3 px-9 md:px-2 lg:px-3 xl:px-5 text-center rounded-full text-lg text-white font-semibold'
                                                            >Boost Subscribers
                                                            </Link>
                                                            <Link
                                                                href="/buy-youtube-views"
                                                                className='bg-primary py-3 px-9 md:px-2 lg:px-3 xl:px-5 text-center rounded-full text-lg text-white font-semibold'
                                                            >Buy Views
                                                            </Link>
                                                            <Link
                                                                href="/buy-youtube-likes"
                                                                className='bg-primary py-3 px-9 md:px-2 lg:px-3 xl:px-5 text-center rounded-full text-lg text-white font-semibold'
                                                            >Buy Likes
                                                            </Link>
                                                            <Link
                                                                href="/buy-youtube-comments"
                                                                className='bg-primary py-3 px-9 md:px-2 lg:px-3 xl:px-5 text-center rounded-full text-lg text-white font-semibold'
                                                            >Buy Comments
                                                            </Link>

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
        </div>
    )
}

export default YtVideoAnlyticsPage