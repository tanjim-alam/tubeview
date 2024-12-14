/* eslint-disable */
"use client"
import FaqSection from '@/app/components/FaqSection';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function YtThumbailDownloadPage() {
    const [url, setUrl] = useState('');
    const [thumbnails, setThumbnails] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Extract video ID from URL
        const videoId = url.split('v=')[1];
        if (videoId) {
            fetchThumbnails(videoId);
        }
    };

    const fetchThumbnails = async (videoId) => {
        const thumbnailUrls = [
            `https://img.youtube.com/vi/${videoId}/0.jpg`,
            `https://img.youtube.com/vi/${videoId}/1.jpg`,
            `https://img.youtube.com/vi/${videoId}/2.jpg`,
        ];
        setThumbnails(thumbnailUrls);
    };
    async function downloadImage(imageUrl) {
        try {
            const response = await fetch(imageUrl, { mode: 'cors' });
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = blobUrl;
            link.setAttribute('download', "thumbnail");
            link.download = "thumbnail";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Clean up the URL object
            window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
            alert(error)
        }
    }
    const faqData = [
        {
            id: 1,
            question: "1. What is the TubeViews YouTube Thumbnail Downloader?",
            answer:
                `The YouTube Thumbnail Downloader is a free online tool that allows users to download high-quality YouTube thumbnails 
                without installing any software. It supports various sizes and qualities, making it versatile for different uses like branding, 
                presentations, or personal projects.
                `
        },
        {
            id: 2,
            question: "2. Can I download YouTube Thumbnail with this tool by Using TubeViews ?",
            answer:
                `Yes, the tool also includes a YouTube Banner (Thumbnail) Downloader feature. You can easily download banners in the recommended size 
                (2560x1440 pixels) or customize them to fit your needs. The safe area ensures that your design elements are displayed 
                properly across all devices.
                `
        },
        {
            id: 3,
            question: "3. What is the recommended size for YouTube thumbnails and banners?",
            answer:
                `Thumbnails: The recommended size is 1280x720 pixels with a 16:9 aspect.
Banners: The recommended size is 2560x1440 pixels, but the crucial "safe area" is 1235x338 pixels, where important design elements should be placed.
                `
        },
        {
            id: 4,
            question: "4. How do I ensure my thumbnail or banner looks good on all devices?",
            answer:
                `To optimize visuals for all devices:
For thumbnails, use high-quality images with a 16:9 aspect.
For banners, ensure all critical elements like text and logos are within the safe area of 1235x338 pixels. This prevents cropping on smaller screens.

                `
        },
        {
            id: 5,
            question: "5. Can this tool help me improve my channel’s performance?",
            answer:
                `Absolutely! By understanding metrics like views, engagement, and CPM, you can create better content strategies, target profitable 
                niches, and even explore options like buying views or subscribers to boost channel growth.
                `
        },
        {
            id: 6,
            question: "5. Why are high-quality thumbnails and banners important for YouTube channels?",
            answer:
                `Thumbnails and banners are essential for grabbing attention and improving engagement. A high-quality thumbnail can encourage 
                viewers to click on your video, while a well-designed banner enhances your channel's branding, making it more appealing to 
                potential subscribers.
                `
        }
    ]
    return (
        <div className='w-full bg-white py-20'>
            <div className='lg:w-[80%] w-[95%] m-auto'>
                <div className='lg:w-[80%] m-auto'>
                    <h1 className='lg:text-3xl text-2xl  font-semibold text-black text-center'>YouTube Thumbnail and Banner Downloader: The Ultimate Tool for Creators</h1>
                    <p className='mt-4 leading-normal text-[18px] text-center text-neutral-800'>
                        TubeViews <b>YouTube Thumbnail Downloader</b> is a free, user-friendly tool that lets you download YouTube thumbnails
                        and banners quickly and effortlessly no need to install any apps. With just a few clicks, you can access these
                        features directly from your computer or mobile device via our website.
                    </p>
                    <form onSubmit={handleSubmit} className='w-full flex border-2 p-1 rounded-full mt-6 border-black'>
                        <input type="text"
                            placeholder='Enter YouTube URL here'
                            className='w-full p-2 lg:p-3 text-black outline-none border-none rounded-full text-lg'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button className='bg-primary text-white rounded-full font-semibold py-2 px-6'>DOWNLOAD</button>
                    </form>
                </div>
                {thumbnails.length > 0 ? (
                    <div className='lg:p-7 p-2 mt-10 flex flex-col lg:flex-row gap-4 rounded-md'
                        style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                        <div className='lg:w-[70%]'>
                            <div className='lg:p-7 p-2 rounded-md' style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
                                <img
                                    className=' rounded-md w-full'
                                    src={thumbnails[0]} alt="" />
                                <div className='flex items-center justify-between mt-4'>
                                    <h6 className='lg:text-2xl text-xl font-semibold text-black'>Video Thumbnail</h6>
                                    <button
                                        onClick={() => downloadImage(thumbnails[0])}
                                        className=' bg-secondary py-3 px-4 rounded-md text-white text-xl'
                                    >Download
                                    </button>
                                </div>
                            </div>
                            <div className='mt-10 flex flex-col gap-5 lg:grid lg:grid-cols-2 xl:flex xl:flex-row justify-between  pb-7'>
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
                        <div className='lg:w-[30%]'>
                            <div className='flex flex-col gap-7 justify-between'>
                                {thumbnails.slice(1).map((thumbnail, index) => (
                                    <div key={index}>
                                        <img
                                            className='w-full rounded-md'
                                            src={thumbnail} alt="" />
                                        <button
                                            onClick={() => downloadImage(thumbnail)}
                                            className='w-full bg-secondary text-white mt-2 p-1 rounded-md text-lg'>
                                            Download
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className='lg:w-[80%] w-[95%] m-auto'>
                <div className='mt-32 p-1 sm:p-0'>
                    <div>
                        <h2
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >
                            Flexible Thumbnail Options for Every Need
                        </h2>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            With the <b>YouTube Thumbnail Downloader</b>, you can choose from various sizes and qualities, tailored to your needs.
                            The most popular YouTube thumbnail size is 1280x720 pixels, maintaining the recommended 16:9 aspect ratio.
                            This flexibility ensures your visuals look professional and eye-catching, whether for online content or
                            offline presentations.
                        </p>
                        <p className="leading-relaxed text-slate-700 mt-3">
                            <b>TubeViews Thumbnail Downloader</b> also includes a YouTube banner downloader feature, enabling you to access high-quality banners in seconds.
                        </p>
                    </div>
                    <div className='mt-6'>
                        <h2
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >
                            What Are YouTube Thumbnails?
                        </h2>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            Thumbnails are the first impression of your video—a visual preview enticing viewers to click. A custom YouTube thumbnail that aligns with
                            your video content significantly boosts viewer engagement. The algorithm prioritizes attention-grabbing visuals, so ensuring your
                            thumbnails stand out is crucial for growth.
                        </p>
                        <Image
                            src={"/thumbnail.png"}
                            width={1000}
                            height={200}
                            alt='YouTube Money Calculator'
                        />
                    </div>
                    <div className='mt-6'>
                        <h2
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >Why Are YouTube Thumbnails So Important?</h2>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            Your thumbnail is a digital storefront for your video. Viewers judge whether to click based on how appealing it looks.
                            A compelling thumbnail can:
                        </p>
                        <ul className='list-disc list-inside leading-relaxed text-slate-700 mt-2 flex flex-col gap-3 pl-5'>
                            <li>
                                Attract thousands of viewers.
                            </li>
                            <li>
                                Improve video rankings.
                            </li>
                            <li>
                                Increase channel subscriptions.
                            </li>
                        </ul>
                        <p className="leading-relaxed text-slate-700 mt-4">
                            Key Tips for Thumbnails:
                        </p>
                        <ol className='list-decimal list-inside leading-relaxed text-slate-700 mt-2 flex flex-col gap-3 pl-5'>
                            <li>
                                Use high-quality, relevant images.
                            </li>
                            <li>
                                Ensure the thumbnail resonates with the video’s content.
                            </li>
                            <li>
                                Design with clarity and appeal in mind.
                            </li>
                        </ol>
                    </div>
                    <div className='mt-6'>
                        <h3
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >
                            How to Download YouTube Thumbnails
                        </h3>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            Follow these simple steps to download YouTube thumbnails in your preferred quality:
                        </p>
                        <ul className='list-decimal list-inside leading-relaxed text-slate-700 mt-2 flex flex-col gap-3 pl-5'>
                            <li>
                                <b>Find Your Video:</b> Open the YouTube video with the thumbnail you want to download.
                            </li>
                            <li>
                                <b>Copy the Link:</b> Copy the video URL from the browser’s address bar.
                            </li>
                            <li>
                                <b>Paste in the Tool:</b> Paste the URL into the input box on the YouTube Thumbnail Downloader.
                            </li>
                            <li>
                                <b>Select Your Quality:</b> Choose from options like High-Quality (HQ), 4K, or Standard Definition, depending on your needs.
                            </li>
                            <li>
                                <b>Download:</b> Click the “Download” button, and the thumbnail will be saved to your device.
                            </li>
                        </ul>
                    </div>
                    <div className='mt-6'>
                        <h3
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >
                            Why You Need High-Quality Thumbnails
                        </h3>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            The quality of your thumbnail can determine whether viewers engage with your content. Options range from:
                        </p>
                        <ul className='list-disc list-inside leading-relaxed text-slate-700 mt-2 flex flex-col gap-3 pl-5'>
                            <li>
                                <b>High-Quality (HQ):</b> Perfect for professional branding.
                            </li>
                            <li>
                                <b>Medium-Quality:</b> Adequate for casual or basic projects.
                            </li>
                            <li>
                                <b>Low-Quality:</b> Not recommended, as it may reduce viewer interest.
                            </li>
                        </ul>
                    </div>
                    <div className='mt-6'>
                        <h3
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >
                            YouTube Banner Downloader
                        </h3>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            Banners are like the cover of a book, capturing attention and setting the tone for your channel.
                            A well-designed banner improves channel branding, making it more memorable and professional.
                            Use the YouTube Thumbnail Downloader to download and customize banners that fit your style.
                        </p>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            Key Banner Specifications:
                        </p>
                        <ul className='list-disc list-inside leading-relaxed text-slate-700 mt-2 flex flex-col gap-3 pl-5'>
                            <li>
                                Recommended size: 2560x1440 pixels.
                            </li>
                            <li>
                                Minimum size: 2048px wide (16:9 aspect ratio).
                            </li>
                            <li>
                                Safe area for essential elements: 1235x338 pixels.
                            </li>
                            <li>
                                Maximum file size: 15MB.
                            </li>
                        </ul>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            Design banners that look stunning on all screen sizes, from desktops to smartphones, ensuring consistent brand appeal across platforms.
                        </p>
                    </div>
                    <div className='mt-6'>
                        <h3
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >
                            How to Design an Impactful YouTube Thumbnail
                        </h3>
                        <ul className='list-decimal list-inside leading-relaxed text-slate-700 mt-2 flex flex-col gap-3 pl-5'>
                            <li>
                                <b>Focus on the Safe Area:</b> Keep crucial design elements like text and logos within the safe area (1235x338 pixels).
                            </li>
                            <li>
                                <b>Prioritize Clarity:</b> Avoid clutter and ensure readability.
                            </li>
                            <li>
                                <b>Adapt for All Devices:</b> Ensure the banner looks great on both small and large screens.
                            </li>
                        </ul>
                    </div>
                    <div className='mt-6'>
                        <h3
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >
                            The Complete Solution for Creators
                        </h3>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            Whether you're creating content for fun or professional branding, the YouTube Thumbnail and Banner Downloader
                            empowers you to optimize visuals for maximum impact. With this tool, you can:
                        </p>
                        <ul className='list-disc list-inside leading-relaxed text-slate-700 mt-2 flex flex-col gap-3 pl-5'>
                            <li>
                                View and download high-definition thumbnails.
                            </li>
                            <li>
                                Access and customize banners.
                            </li>
                            <li>
                                Elevate your YouTube channel's visual appeal effortlessly.
                            </li>
                        </ul>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            Try our free YouTube Thumbnail Downloader today and see the difference professional visuals can make for your content!
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
    )
}

export default YtThumbailDownloadPage