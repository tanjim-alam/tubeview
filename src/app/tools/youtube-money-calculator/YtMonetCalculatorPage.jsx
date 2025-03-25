/* eslint-disable */
"use client"
import { formatDate } from '@/utils/formatDate';
import Link from 'next/link';
import React, { useState } from 'react';
import countries from "../../constant/general/countries.json"
import FaqSection from '@/app/components/FaqSection';
import Image from 'next/image';

function YtMonetCalculatorPage() {
    const [url, setUrl] = useState('');
    const [channelData, setChannelData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const channelId = await extractChannelId(url);
        setIsLoading(true)
        if (channelId) {
            setIsLoading(true)
            fetchChannelData(channelId);
        } else {
            setIsLoading(false)
            setError('Invalid YouTube URL');
        }
    };

    const extractChannelId = async (url) => {
        let channelId = null;
        if (url.includes('/channel/')) {
            channelId = url.split('/channel/')[1].split('/')[0];
        } else if (url.includes('/c/') || url.includes('/user/') || url.includes('/@')) {
            setIsLoading(true)
            const response = await fetch(`/api/getChannelId?url=${url}`);
            const data = await response.json();
            channelId = data.channelId;
        }
        setIsLoading(false)
        return channelId;
    };

    const fetchChannelData = async (channelId) => {
        const response = await fetch(`/api/channel?channelId=${channelId}`);
        const data = await response.json();
        setChannelData(data);
        setIsLoading(false)
    };

    function getCountryName(code) {
        const country = countries.find((c) => c.code === code);
        return country ? country.country : "Unknown country code";
    }

    const faqData = [
        {
            id: 1,
            question: "1. How does the YouTube Money Calculator estimate earnings?",
            answer:
                `The calculator uses key metrics like your channel’s total views, CPM (Cost Per Mille), daily view averages, 
                and CTR (Click-Through Rate). By analyzing these factors, it provides an estimated revenue for daily, monthly, 
                and yearly earnings.
                `
        },
        {
            id: 2,
            question: "2. What is CPM, and why is it important for revenue calculations?",
            answer:
                `CPM stands for Cost Per Mille, which is the revenue earned per 1,000 views. It is influenced by factors like audience location, 
                content niche, and ad performance, making it a critical factor in estimating YouTube earnings.
                `
        },
        {
            id: 3,
            question: "3. Can I use the tool to analyze someone else’s channel?",
            answer:
                `Yes, you can paste the URL of any public YouTube channel into the calculator to estimate 
                its revenue and analyze its performance metrics.
                `
        },
        {
            id: 4,
            question: "4. What additional data does the calculator provide besides estimated earnings?",
            answer:
                `Along with earnings estimates, the calculator shows details like total subscribers, sponsorship value per video, 
                total views, engagement rate, channel creation date, and country of origin.
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
            question: "6. Is the YouTube Money Calculator free and beginner-friendly?",
            answer:
                `Yes, the calculator is completely free to use and designed for creators of all experience levels. Its simple interface makes it 
                easy to calculate potential revenue and plan your channel’s growth.
                `
        }
    ]
    return (
        <div className='w-full bg-white py-16'>
            <div className='lg:w-[80%] md:w-[80%] w-[95%] m-auto'>
                <div className='lg:w-[80%] m-auto'>
                    <h1 className='md:text-3xl lg:text-4xl text-2xl font-semibold text-black text-center'>YouTube Money Calculator The Earning Potential of YouTubers</h1>
                    <p className='mt-6 leading-normal text-[18px] text-center text-neutral-800'>
                        A simple online tool that can help creators determine how much money their channel can generate is the YouTube money calculator.
                    </p>
                    <form onSubmit={handleSubmit} className='w-full flex border-2 p-1 rounded-full mt-8 border-black'>
                        <input type="text"
                            placeholder='Enter YouTube URL here'
                            className='w-full p-2 lg:p-3 text-black outline-none border-none rounded-full text-lg'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button className='bg-primary text-white rounded-full font-semibold py-2 px-6'>CALCULATE</button>
                    </form>
                </div>
                <div>
                    {
                        isLoading ? (
                            <div className='flex justify-center mt-14'>
                                <div className="loaderContainer flex flex-col items-center">
                                    <div className="loader"></div>
                                    <div className='mt-4'>
                                        <p
                                            className=' p-2 text-gray-500 flex items-center gap-1'
                                        >
                                            Calculating
                                        </p>
                                    </div>

                                </div>
                            </div>
                        )
                            : <div>
                                {channelData ? (
                                    <div
                                        className='mt-32 rounded-md'
                                        style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}
                                    >
                                        <div className='flex justify-center relative bottom-16'>
                                            <div className='flex flex-col justify-center items-center'>
                                                <div className=' bg-white rounded-full'>
                                                    <img
                                                        src={channelData?.profileImageUrl || "https://yt3.googleusercontent.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s900-c-k-c0x00ffffff-no-rj"}
                                                        className='w-[130px] rounded-full'
                                                        alt="" />
                                                </div>
                                                <h4 className='text-xl font-semibold mt-1'>{channelData?.title}</h4>
                                            </div>
                                        </div>
                                        <div className='px-12 pb-4 grid grid-cols-1 lg:grid-cols-3 justify-between gap-8'>
                                            <div>
                                                <p className='text-lg text-neutral-700'>Total subscribers</p>
                                                <p className='lg:text-4xl text-3xl font-bold mt-2'>{channelData?.subscribers}</p>
                                            </div>
                                            <div>
                                                <p className='text-lg text-neutral-700'>Est. YouTube partner earnings (monthly)</p>
                                                <p className='lg:text-4xl text-3xl font-bold mt-2'>${channelData?.earnings}</p>
                                                <p className='text-primary font-bold mt-2'>CPM: $0.96</p>
                                            </div>
                                            <div>
                                                <p className='text-lg text-neutral-700'>Est. Sponsorships price (each video)</p>
                                                <p className='lg:text-4xl text-3xl font-bold mt-2'>${channelData?.sponsorship}</p>
                                                <p className='text-primary font-bold mt-2'>CPM: $0.96</p>
                                            </div>
                                            <div>
                                                <p className='text-lg text-neutral-700'>Total views</p>
                                                <p className='lg:text-4xl text-3xl font-bold mt-2'>{channelData?.views}</p>
                                            </div>
                                            <div>
                                                <p className='text-lg text-neutral-700'>Total Videos</p>
                                                <p className='lg:text-4xl text-3xl font-bold mt-2'>{channelData?.videoCount}</p>
                                            </div>
                                            <div>
                                                <p className='text-lg text-neutral-700'>Channel's Creation Date</p>
                                                <p className='lg:text-4xl text-3xl font-bold mt-2'>{formatDate(channelData?.publishedAt)}</p>
                                            </div>
                                            <div>
                                                <p className='text-lg text-neutral-700'>Channel's Country</p>
                                                <p className='lg:text-4xl text-3xl font-bold mt-2'>{getCountryName(channelData?.country)}</p>
                                            </div>
                                        </div>
                                        <div className='mt-5 flex flex-col gap-5 lg:flex-row justify-between px-8 lg:px-20 pb-7'>
                                            <Link
                                                href="/buy-youtube-subscribers"
                                                className='bg-primary py-3 px-9 text-center rounded-full text-lg text-white font-semibold'
                                            >Boost Subscribers
                                            </Link>
                                            <Link
                                                href="/buy-youtube-views"
                                                className='bg-primary py-3 px-9 text-center rounded-full text-lg text-white font-semibold'
                                            >Buy Views
                                            </Link>
                                            <Link
                                                href="/buy-youtube-likes"
                                                className='bg-primary py-3 px-9 text-center rounded-full text-lg text-white font-semibold'
                                            >Buy Likes
                                            </Link>
                                            <Link
                                                href="/buy-youtube-comments"
                                                className='bg-primary py-3 px-9 text-center rounded-full text-lg text-white font-semibold'
                                            >Buy Comments
                                            </Link>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                    }
                </div>
                <div className='mt-16 p-1 sm:p-0'>
                    <div>
                        <h2
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >Discover Your YouTube Channel’s Value with the Free YouTube Money Calculator</h2>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            Curious about how much your YouTube channel or even million dollar channels of top creators can earn? The GoFamy
                            YouTube Money Calculator is your go-to tool for estimating potential revenue, providing an effortless way to assess
                            your channel’s worth and plan your journey toward financial success.
                        </p>
                        <p className="leading-relaxed text-slate-700 mt-3">
                            Whether you're an aspiring YouTuber or a seasoned creator, YouTube offers limitless possibilities for building wealth.
                            Our calculator is designed to help you understand your earning potential and create a roadmap to achieving your goals.
                        </p>
                    </div>
                    <div className='mt-6'>
                        <h2
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >Why Use the YouTube Money Calculator?</h2>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            With this tool, you can:
                        </p>
                        <ul className='list-disc list-inside leading-relaxed text-slate-700 mt-2 flex flex-col gap-3'>
                            <li>
                                <b>Analyze Subscriber Impact:</b> See how subscriber growth affects video views and boosts revenue.
                            </li>
                            <li>
                                <b>Understand Your Metrics:</b> Discover how daily views, CTR (Click-Through Rate), and engagement drive earnings.
                            </li>
                            <li>
                                <b>Boost Channel Growth:</b> Consider strategies like buying YouTube subscribers or views to increase performance and revenue.
                            </li>
                            <li>
                                <b>Plan Content for Niches:</b> Evaluate whether creating videos in specific niches would be profitable.
                            </li>
                        </ul>
                        <p className="leading-relaxed text-slate-700 mt-4">
                            The <b>YouTube Money Calculator</b> offers a user-friendly interface that allows you to explore your channel’s potential earnings and take
                            the first step toward creating a sustainable income stream.
                        </p>
                        <Image
                            src={"/ytmoney.png"}
                            width={1000}
                            height={200}
                            alt='YouTube Money Calculator'
                        />
                    </div>
                    <div className='mt-6'>
                        <h2
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >How Does the GoFamy Money Calculator Work?</h2>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            This straightforward tool provides accurate revenue projections based on your channel’s key metrics. Here's how:
                        </p>
                        <div className='mt-4 pl-10 flex flex-col gap-3'>
                            <div>
                                <h6 className='font-medium'>1. Enter Your Channel URL</h6>
                                <p className="leading-relaxed text-slate-700">Paste your YouTube channel URL into the search bar.</p>
                            </div>
                            <div>
                                <h6 className='font-medium'>2. Analyze Performance Data</h6>
                                <p className="leading-relaxed text-slate-700">
                                    The system calculates total views, engagement rates, CPM (Cost Per Mille), and more to estimate your earnings.
                                </p>
                            </div>
                            <div>
                                <h6 className='font-medium'>3. Adjust Key Metrics</h6>
                                <p className="leading-relaxed text-slate-700">
                                    Drag sliders to reflect average daily views and CTR, giving you a customized estimate of your revenue potential.
                                </p>
                            </div>
                            <div>
                                <h6 className='font-medium'>4. Get Instant Results</h6>
                                <p className="leading-relaxed text-slate-700">
                                    See detailed projections of daily, monthly, and yearly earnings, along with potential sponsorship rates.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <h2
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >What Metrics Does the Tool Analyze?</h2>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            When you paste your channel URL, the calculator gathers:
                        </p>
                        <ul className='list-disc list-inside leading-relaxed text-slate-700 mt-2 font-medium flex flex-col gap-3'>
                            <li>
                                Subscriber Count
                            </li>
                            <li>
                                Total and Monthly Views
                            </li>
                            <li>
                                Estimated YouTube Partner Program Earnings
                            </li>
                            <li>
                                Sponsorship Pricing Per Video
                            </li>
                            <li>
                                Channel Details: Creation date, country, and engagement rate
                            </li>
                        </ul>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            By tweaking sliders for daily video views, you’ll also get:
                        </p>
                        <ul className='list-disc list-inside leading-relaxed text-slate-700 mt-2 font-medium flex flex-col gap-3'>
                            <li>
                                Monthly View Projections
                            </li>
                            <li>
                                Annual View Projections
                            </li>
                            <li>
                                Daily, Monthly, and Yearly Earnings Estimates
                            </li>
                        </ul>
                        <p className="leading-relaxed text-slate-700 mt-3">
                            This detailed analysis helps you refine your content strategy, grow your audience, and maximize revenue.
                        </p>
                    </div>
                    <div className='mt-6'>
                        <h3
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >Behind the Algorithm: How Revenue Is Calculated
                        </h3>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            The calculator uses a systematic approach:
                        </p>
                        <div className='mt-4 pl-10 flex flex-col gap-3'>
                            <div>
                                <p className='leading-relaxed text-slate-700'>1. Identifies the channel’s country.</p>
                            </div>
                            <div>
                                <p className='leading-relaxed text-slate-700'>2. Confirms the total view count.</p>
                            </div>
                            <div>
                                <p className='leading-relaxed text-slate-700'>3. Analyzes the channel’s activation date and removes the first 18 months to account for active validity.</p>
                            </div>
                            <div>
                                <p className='leading-relaxed text-slate-700'>4. Divides the total view count by 1,000 to calculate CPM.</p>
                            </div>
                            <div>
                                <p className='leading-relaxed text-slate-700'>5. Adjusts CPM based on active months to estimate revenue.</p>
                            </div>
                        </div>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            With these steps, the tool provides a reliable estimate of your channel’s potential earnings.
                        </p>
                    </div>
                    <div className='mt-6'>
                        <h3
                            className='lg:text-[30px] text-xl font-semibold leading-8 text-black'
                        >Start Your Journey Today
                        </h3>
                        <p className="leading-relaxed text-slate-700 mt-2">
                            With the <b>GoFamy YouTube Money Calculator</b>, you can unlock valuable insights, understand your channel’s performance, and plan your next steps toward content creation success.
                            Whether you’re just starting or aiming to scale your channel, this tool is your first step to turning creativity into a lucrative business.
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

export default YtMonetCalculatorPage