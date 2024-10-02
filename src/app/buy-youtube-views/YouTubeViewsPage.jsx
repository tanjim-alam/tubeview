/* eslint-disable */
"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import { IoSearch } from "react-icons/io5";
import { IoMdWatch, IoMdDoneAll } from "react-icons/io";
import { BsGraphDownArrow } from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa6";
import { MdSupportAgent, MdOutlinePayment, MdLockOutline, MdOutlineWarning, MdLightMode, MdDone } from "react-icons/md";


const WhyYouChooseSection = dynamic(() => import('../components/WhyYouChooseSection'));
const FeaturesSection = dynamic(() => import('../components/FeaturesSection'));
const ContentSection1 = dynamic(() => import('../components/ContentSection1'));
const ContentSection2 = dynamic(() => import('../components/ContentSection2'));
const FaqSection = dynamic(() => import('../components/FaqSection'));
const ServiceCard = dynamic(() => import('../components/ServiceCard'));
const ReviewsSection = dynamic(() => import('../components/ReviewsSection'));

import youtubeViewsData from "../constant/youtube/youtubeViewsData.json";
import HeroSection from '../components/HeroSection';

function YouTubeViewsPage() {
    const featuresData = [
        {
            id: 1,
            title: "What is the Difference between Regular Subscribers and Real Subscribers?",
            description: "Regular subscribers are real-looking virtual accounts. Real subscribers are real, active accounts with real posts and followers.",
            icon: <MdLightMode />
        },
        {
            id: 2,
            title: "Why should you buy YouTube subscribers?",
            description: "YouTube subscribers show how interesting your content is. Your subscriber number is like the measure of your channel's quality. So, it is important to have a high number of subscribers to attract more visitors to your channel.",
            icon: <IoSearch />
        },
        {
            id: 3,
            title: "What are YouTube Subscribers",
            description: "If you can get a person's interest on YouTube, they may subscribe to your channel. After that, they will start seeing your content on their homepage and get notified often.",
            icon: <IoMdWatch />
        },
        {
            id: 5,
            title: "NO Risk of Decrease",
            description: "The services that you buy will be permanent, and there won't be any decrease. Otherwise, we guarantee you that we will refill your losses in six months after your purchase.",
            icon: <BsGraphDownArrow />
        },
        {
            id: 6,
            title: "24/7 Live Support",
            description: "We provide 24/7 live customer support. You can contact us anytime via our embedded chat system, WhatsApp, and email address. Our staff is always ready to help you.",
            icon: <MdSupportAgent />
        },
        {
            id: 7,
            title: "Secure Payment",
            description: "You can pay with your credit card through the most secure and trusted payment systems in the world. You don’t have to register to make your payment.",
            icon: <MdOutlinePayment />
        },
        {
            id: 8,
            title: "No Password is Required",
            description: "We never ask your password or any other private information. We recommend you to protect your account and never share your passwords with anyone.",
            icon: <MdLockOutline />
        },
        {
            id: 9,
            title: "Warning",
            description: "In order for your order interactions to be tracked correctly after your purchases, you should not purchase the same products from different sites simultaneously.",
            icon: <MdOutlineWarning />
        }
    ];

    const faqData = [
        {
            id: 1,
            question: "Is YouTube able to understand I'm not receiving actual views?",
            answer: "Not likely is the response. YouTube practically cannot find you red-handed as there is no list designated for viewers, or such. It's not all that different from asking a buddy to see your video."
        },
        {
            id: 2,
            question: "What happens once 1K YouTube followers are acquired?",
            answer: "YouTube mails you to congrats when you get 1K subscribers."
        },
        {
            id: 3,
            question: "Could YouTube find out I'm not receiving actual views?",
            answer: "Not likely is the response. YouTube practically cannot find you red-handed as there is no list designated for viewers, or such. It's not much different from asking a buddy to see your video."
        },
        {
            id: 4,
            question: "Can this solution enable me to reach 4,000 hours of watch time needed for partnership and monetization?",
            answer: "Exactly! Once you get YouTube views, the video you targeted will be seen from beginning to finish exactly the number of accounts you agreed upon. You may easily exceed the 4,000 hours restriction with this service."
        },
        {
            id: 5,
            question: "Is buying YouTube views safe?",
            answer: "Absolutely. An SSL certificate guards our website, so you may relax when making purchases of services from us."
        },
        {
            id: 6,
            question: "Can I buy views for a YouTube playlist?",
            answer: "You can't buy views on YouTube for a Playlist is not qualified for the YouTube watching system. This service is valid for a video link. Consequently, the order will be canceled should the Playlist URL be supplied at order placement. During purchase, you just need to submit one video URL. You might put all of your films in your cart if you want to purchase them all."
        },
        {
            id: 7,
            question: "Is buying YouTube views illegal?",
            answer: "Paying others to see your movies is not unlawful, hence no."
        },
        {
            id: 8,
            question: "Is Real the YouTube Views Service?",
            answer: "The YouTube views on the Tubeviews include entirely actual individuals. This tool allows you to gain new viewers by enhancing the interactivity in your videos, thereby enabling you to purchase totally securely without compromising your channel in any form."
        },
        {
            id: 9,
            question: "Will I be paid if I buy YouTube views?",
            answer: "Unfortunately, your money is not immediately raised by YouTube views of service. Your engagement rate and view count will nonetheless rise. The video may so inevitably appeal to larger viewers. This helps to raise your revenue indirectly."
        },
        {
            id: 10,
            question: "When will my order of YouTube views start?",
            answer: "Automatic processing to buy YouTube views service you will purchase on our website is done. The amount of views will rise over ten minutes to twenty-four hours. Verify the video link; failing which your purchase could not be executed."
        },
        {
            id: 11,
            question: "Does my viewing count change with time?",
            answer: "Not! One cannot lose their video views. Those opinions are meant to remain on your profile for a somewhat amazing length of time. Those points of view will definitely stay on your account."
        },
    ];

    return (
        <div>
            <HeroSection
                title={"Buy YouTube Views with <br/> Instant Delivery"}
                subTitle={"<h3>Buy YouTube <span class='text-secondary'>Views</span></h3>"}
                imgUrl={"/buy-youtube-views.webp"}
            />
            {/* package section start */}
            <div className='bg-white pb-16'>
                <div className='lg:w-[80%] w-[90%] flex flex-col gap-10 m-auto'>
                    <div className='flex flex-col items-center gap-4'>
                        <h3 className='lg:text-3xl text-2xl text-center text-black lg:text-start font-semibold'>Buy Youtube Views to Boost Engagements!</h3>
                        <p className='lg:text-xl text-lg text-center text-black lg:text-start font-medium'>Get Real Youtube Views and Boost Your Video Impressions.</p>
                    </div>
                    <ServiceCard packageData={youtubeViewsData} />
                </div>
            </div>
            {/* package section end */}
            {/* <PackageSection /> */}
            <WhyYouChooseSection
                heading={"✊ Why You Should Choose Tubeviews"}
                subHeading={"Buying Youtube views from Tubeviews can help you boost your video's visibility and reach."}
            />
            <FeaturesSection
                featuresData={featuresData}
                heading={"🚀 Buy YouTube Views Features With Tubeviews"}
                subHeading={"Buying Youtube views from Tubeviews can help you boost your video's visibility and reach."}
            />
            <ContentSection1
                heading={"🎉 Why Would Someone Buy Views on YouTube?"}
                subHeading={"Tubeviews helps you grow your Youtube Channel with fully Ad-Based and Real Views."}
                imgUrl={"/buy-real-youtube-views.webp"}
                contents={
                    `
                    <div>
                    <p class='leading-relaxed text-slate-600'><b>Buying youtube views</b> for more public visibility! Which kinds of video content are you ready to click on 
                    while searching YouTube for anything intriguing to view? We guess you would most likely choose the video
                    with the most views. View rates often determine whether or not a video is worth seeing. Having stated that,
                    the number one position is not very simple to get. We can assist you with obtaining sufficient views on your 
                    videos should you find it difficult. Apart from strategies of YouTube advertising, you might attempt this 
                    service to boost your YouTube views. One of our most sold things is YouTube views, hence you might 
                    purchase them from us.
                    </p>
                    <br>
                    <p class='leading-relaxed text-slate-600'>
                    To <b>buy views on youtube</b> only from tube veiws is just going to cause your natural traffic rates and view 
                    count to rise sooner than later. People will try your videos as they seem to be worth seeing. Should your 
                    content be of good quality, they may follow your channel, thus accomplishing many objectives 
                    simultaneously.
                    </p>
                    </div>
                    `
                }
            />
            <ContentSection2
                heading={"✔ Is Buying YouTube Views Safe?"}
                subHeading={"Tubeviews helps you grow your Youtube Channel with fully Ad-Based and Real Views."}
                imgUrl={"/buy-active-youtube-views.webp"}
                contents={
                    `
                    <div>
                    <p class='leading-relaxed text-slate-600'>
                    Definitely! There is no current safety issue that would prevent you from <b>buying YouTube views</b>. Unless it is 
                    regarded as spam, YouTube does not stop these kinds of operations. Paying-wise, we provide credit card and
                    PayPal alternatives. Our 256-bit SSL certificate encrypts credit card information, hence neither third parties
                    nor we can see it. Not even our personnel could see your payment details. Making any transaction on tube
                    views is therefore absolutely secure. To improve your channel, you might also get YouTube Shorts Comments.
                    </p>
                    <br>
                    <p class='leading-relaxed text-slate-600'>
                    Apart from its quality, the preferred provider should offer customer service. You should be able to get in touch with them whenever you so want. We provides WhatsApp 24/7 online customer assistance. Your 
                    received service should be quick. Your order should arrive in the specified timeframe during the transaction.
                    Usually, we arrive with your good in minutes. We never, under any circumstances ask for your password
                    either.
                    </p>
                    </div>
                    `
                }
            />
            <ContentSection1
                heading={"✔ A great plan to improve your YouTube channel"}
                subHeading={"Tubeviews helps you grow your Youtube Channel with fully Ad-Based and Real Views."}
                imgUrl={"/buy-active-youtube-views.webp"}
                contents={
                    `
                    <div>
                    <p class='leading-relaxed text-slate-600'>
                    Although organic views are fantastic, if you&#39;re in need for <b>buying youtube views</b> 
                    and purchase YouTube watch hours that will provide you just as much impact in much less time.
                    </p>
                    <br>
                    <p class='leading-relaxed text-slate-600'>
                    Most YouTube users never wonder about the source of these data. They are seen as excellent interaction; 
                    their validity or source is not given much thought. This implies that the views you purchase might be a good 
                    foundation for your channel as they will help it to acquire the legitimacy required to persuade people to join 
                    in subscription. <b>Buying youtube views</b> from us might be a great approach whether your goal is to increase
                    the subscriber base of your channel or make the next video unique among the great competition.
                    </p>
                    </div>
                    `
                }
            />
            <ContentSection2
                heading={"✔ Buy YouTube Views To expand Your Channel"}
                subHeading={"Tubeviews helps you grow your Youtube Channel with fully Ad-Based and Real Views."}
                imgUrl={"/buy-active-youtube-views.webp"}
                contents={
                    `
                    <div>
                    <p class='leading-relaxed text-slate-600'>
                    With millions of people producing and viewing videos daily, YouTube is the go-to site for video content. 
                    Choosing to purchase YouTube views from tube views, a service providing views for your YouTube
                    content—is one way you may increase your profile on this network. Using the purchase YouTube views tool
                    from Tubeviews can help your channel becoming a lot more visible and credible right away. Your videos are
                    more likely to show up in search results and suggestions when they have a big view count, attained maybe via
                    instantaneous YouTube views, therefore drawing natural viewers and perhaps subscribers.
                    </p>
                    <br>
                    <p class='leading-relaxed text-slate-600'>
                    Using tube vuiew’s reliable buy YouTube views service will help you to guarantee your views as well as help
                    your channel to keep integrity and reputation. Buying YouTube views can enable your channel to develop
                    more quickly and provide a competitive advantage in the packed online video market. Thus, buying real views
                    from us for your content using the dependable and excellent service of Tubeviews.
                    </p>
                    </div>
                    `
                }
            />
            <div className='bg-white'>
                <p className='bg-primary p-1'></p>
                <div className='lg:w-[80%] w-[90%] m-auto lg:py-14 py-5'>
                    <div>
                        <h3 className='text-xl lg:text-[2rem] font-semibold text-slate-600'>Why Would One Want YouTube Views?</h3>
                        <p className=' leading-relaxed text-slate-600 mt-3'>
                            Knowing that buying YouTube from us now is legal and secure now let's discuss the advantages of acquiring views for YouTube.
                            These advantages include:
                        </p>
                        <br />
                        <p className=' leading-relaxed text-slate-600 '>
                            The first and most immediate result is your videos will seem more popular. People often see popular videos. As your videos are seen, their appeal will grow as well.
                            More people will notice them as their appeal rises. It resembled a chain reaction. <br />
                            Your videos will be seen by others even if you do not purchase views. Still, it might take time. But if you purchase views,
                            you will save time and get sooner popularity for your videos. These all apply also to YouTube Shorts. You may thus get YouTube Shorts Likes to complement your videos.
                        </p>
                    </div>
                    <div className='mt-6'>
                        <h3 className='text-xl lg:text-[2rem] font-semibold text-slate-600'>YouTube Views Increase Your Income</h3>
                        <p className=' leading-relaxed text-slate-600 mt-3'>
                            From little children to elderly people, everyone desires money via YouTube. Making money from phones seems straightforward, but it is not really simple either.
                            Dream of nothing but filming one video and not of riches. Although it was feasible previously, AdSense and the new YouTube algorithm have certain rules.
                            You have to have a reasonable watch time in the past months and 1000 members as well. YouTube therefore regulates your behavior;
                            only when you are engaged can you activate monetizing features.
                        </p>
                        <p className=' leading-relaxed text-slate-600 mt-3'>
                            For a quicker procedure, you may buy YouTube views however. Once again, this is legal service that does not compromise your YouTube account.
                            This product exists only to help your YouTuber career. It thus enables you to increase your channel and make more money.
                            Combining this service with the buy YouTube likes offer can rapidly improve your YouTube account. From novices to experts, this tool will help any YouTuber.
                        </p>
                        <p className=' leading-relaxed text-slate-600 mt-3'>
                            You bought perpetual YouTube views; they never disappear. If you have any questions, kindly get in touch with us via our 24/7 online WhatsApp customer support.
                        </p>
                        <p className=' leading-relaxed text-slate-600 mt-3'>
                            Thanks to AdSense, many individuals have begun to make extra money uploading movies via YouTube. Thanks to AdSense, YouTube is the site where we can earn the
                            most money from video upload. Naturally, we want money from our videos, hence you must have a YouTube channel connected to a Google AdSense account.
                        </p>
                        <p className=' leading-relaxed text-slate-600 mt-3'>
                            Back off and savor your income as others see videos you uploaded to your YouTube account. If a visitor views your content for at least thirty seconds, YouTube will pay for every video view. Views under less than thirty seconds pay nothing.
                        </p>
                        <p className=' leading-relaxed text-slate-600 mt-3'>
                            An essential statistic reflecting the general popularity of the video is the count of YouTube video views, which indicates how often a video is seen. Videos are turned into money after genuine individuals are watching them confirmed.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <p className='bg-primary p-1'></p>
                <div className='lg:w-[80%] w-[90%] m-auto lg:py-14 py-5'>
                    <div>
                        <h3 className='text-xl lg:text-[2rem] font-semibold text-slate-600'>Build Credibility in Your Sector</h3>
                        <p className=' leading-relaxed text-slate-600 mt-3'>
                            Like many things in life - it depends. SocialPlug just avoids making any guarantees about natural development as it fluctuates depending on a great number of elements.
                            Your first priorities should be concentrating on producing world-class content people want to interact with. Organic development is more likely to take place the better your content is.
                        </p>
                        <br />
                        <p className=' leading-relaxed text-slate-600 '>
                            Most films with many views are fantastic for this reason: people want to see them! What niche you work in, how saturated it is, public general interest levels, etc.
                            all affect organic development as well. All we will tell is that it will arrive.
                        </p>
                    </div>
                    <div className='mt-6'>
                        <h3 className='text-xl lg:text-[2rem] font-semibold text-slate-600'>Does Buying YouTube views change your ranking?</h3>
                        <p className=' leading-relaxed text-slate-600 mt-3'>
                            YouTube views and ranking show a quite high association. Your video will display higher in the rankings the more views it gets.
                            As far as feasible, it will be beneficial to raise the view count. To increase views on your YouTube channel, therefore,
                            think about advertising it on other social media platforms. To increase your live streaming and get more viewers,
                            you may also purchase YouTube shorts views or YouTube live views.
                        </p>
                    </div>
                    <div className='mt-6'>
                        <h3 className='text-xl lg:text-[2rem] font-semibold text-slate-700'>Benefits of Buying YouTube Views</h3>
                        <p className=' leading-relaxed text-slate-600 mt-3 '>
                            Now <b>buying youtube views</b> can get a lot of advantage. Many of these advantages fall below here;
                        </p>
                        <div className='flex flex-col gap-2 mt-3'>
                            <div className='flex items-start gap-1'>
                                <span className=' p-1 text-lg font-bold rounded-full bg-primary text-white'> <MdDone className=' font-extrabold' /></span>
                                <p className='leading-relaxed text-slate-600 '>
                                    High view counts help your films to seem more credible and appealing, thereby inspiring natural viewers to interact with your content. <br />
                                </p>
                            </div>
                            <div className='flex items-start gap-1'>
                                <span className=' p-1 text-lg font-bold rounded-full bg-primary text-white'> <MdDone /></span>
                                <p className='leading-relaxed text-slate-600 '>
                                    YouTube's search ranking system considers views in order to decide search results. Buying you tube views will increase the exposure of your movies and assist them to rank higher in search results.
                                </p>
                            </div>
                            <div className='flex items-start gap-1'>
                                <span className=' p-1 text-lg font-bold rounded-full bg-primary text-white'> <MdDone /></span>
                                <p className='leading-relaxed text-slate-600 '>
                                    Improved Channel Growth: New guests are more inclined to investigate your content, subscribe, and start long-term viewing when they see that your channel has a sizable view count.
                                </p>
                            </div>
                            <div className='flex items-start gap-1'>
                                <span className=' p-1 text-lg font-bold rounded-full bg-primary text-white'> <MdDone /></span>
                                <p className='leading-relaxed text-slate-600 '>
                                    A strong YouTube channel with a lot of views may attract sponsorships and marketers, therefore creating monetizing possibilities.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-6'>
                        <h3 className='text-xl lg:text-[2rem] font-semibold text-slate-600'>How should I organically expand my YouTube channel?</h3>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            There is no one 100% perfect plan that assures the growth of your channel. We may provide you some useful advice if you want more views for your efforts and natural organic approaches:
                        </p>
                        <div className='mt-4 flex flex-col gap-4'>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white p-1 rounded-full text-lg font-semibold'><FaRegSnowflake /></span>
                                <p className='leading-relaxed text-slate-600 '>
                                    Under popular videos of others, provide amusing video comments.
                                </p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white p-1 rounded-full text-lg font-semibold'><FaRegSnowflake /></span>
                                <p className='leading-relaxed text-slate-600 '>Before loading the movie, rename the file. The YouTube title should be the same title for the video file.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white p-1 rounded-full text-lg font-semibold'><FaRegSnowflake /></span>
                                <p className='leading-relaxed text-slate-600 '>
                                    Edit labels in videos.
                                </p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white p-1 rounded-full text-lg font-semibold'><FaRegSnowflake /></span>
                                <p className='leading-relaxed text-slate-600 '>
                                    Simplify thumbnail images. It's a very crucial element.
                                </p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white p-1 rounded-full text-lg font-semibold'><FaRegSnowflake /></span>
                                <p className='leading-relaxed text-slate-600 '>
                                    Create lists for plays.
                                </p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white p-1 rounded-full text-lg font-semibold'><FaRegSnowflake /></span>
                                <p className='leading-relaxed text-slate-600 '>
                                    Work constantly.
                                </p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white p-1 rounded-full text-lg font-semibold'><FaRegSnowflake /></span>
                                <p className='leading-relaxed text-slate-600 '>Point people to your video using other social media sites.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white p-1 rounded-full text-lg font-semibold'><FaRegSnowflake /></span>
                                <p className='leading-relaxed text-slate-600 '>Present presents and discounts to your fans.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white p-1 rounded-full text-lg font-semibold'><FaRegSnowflake /></span>
                                <p className='leading-relaxed text-slate-600 '>Subtitles for your videos</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white p-1 rounded-full text-lg font-semibold'><FaRegSnowflake /></span>
                                <p className='leading-relaxed text-slate-600 '>Post content on a regular basis.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-white'>
                <p className='bg-primary p-1'></p>
                <div className='lg:w-[80%] w-[90%] m-auto lg:py-14 py-5'>
                    <div>
                        <h3 className='text-xl lg:text-[2rem] font-semibold text-slate-600'>Numbers, Involvement, and Reputation; Tubeviews</h3>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            You have what expectation? Are your only goals numerical excellence? Do you want more people to see your videos? Alternatively, do you want the advertisement from your business to seem great online?
                            And how could one profit from YouTube?
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            In the digital society of today, numbers rule everything. Buying views instantly and significantly increases your numerical dominance, therefore presenting you as a credible source for viewers to swarm to.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            For what count of views will satisfy you? On a video advertising your business, would 100,000 views seem good? Tubeviews can provide this for you. We may activate the YouTube algorithm and enable
                            the system to run for you by means of the quality views we provide to your videos.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            You naturally have greater opportunity to reach more people with a little help from our YouTube growth service. Tubeviews offers you an opportunity to make money from YouTube if you so wish.
                        </p>
                    </div>
                    <div className='mt-5'>
                        <h3 className='text-xl lg:text-[2rem] font-semibold text-slate-600'>Buying Views on YouTube</h3>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            Here is a basic manual for buying YouTube views. Learn <a href='https://www.tubeviews.co/buy-youtube-views'>"How to Buy YouTube Views"</a> right now by clicking the button under!
                        </p>
                    </div>
                    <div>
                        <h3 className='text-xl lg:text-[2rem] font-semibold text-slate-600 mt-6'>Buying YouTube Views: How to do it?</h3>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            Knowing what our YouTube Views Service provides now helps. On our website, YouTube views are the least expensive purchasable. Should your ultimate choice be to purchase high retention YouTube views,
                            you should use these guidelines:
                        </p>

                        <div className='mt-4 flex flex-col gap-4'>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white px-2.5 rounded-full text-lg font-semibold'>1</span>
                                <p className='leading-relaxed text-slate-600 '>
                                    Choose first of all the perspective you want to have. Choose the actual tab if you want to purchase actual YouTube views.
                                </p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white px-2.5 rounded-full text-lg font-semibold'>2</span>
                                <p className='leading-relaxed text-slate-600 '>
                                    Paste your video URL straight to the box provided.
                                </p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white px-2.5 rounded-full text-lg font-semibold'>3</span>
                                <p className='leading-relaxed text-slate-600 '>
                                    Then enter the overall number of views you want to buy into the following box.
                                </p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white px-2.5 rounded-full text-lg font-semibold'>4</span>
                                <p className='leading-relaxed text-slate-600 '>
                                    Click the "Buy Now" or "Add to Cart" buttons to access the payment page.
                                </p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white px-2.5 rounded-full text-lg font-semibold'>5</span>
                                <p className='leading-relaxed text-slate-600 '>
                                    Completing the payment procedure
                                </p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white px-2.5 rounded-full text-lg font-semibold'>6</span>
                                <p className='leading-relaxed text-slate-600 '>
                                    Your profile will show the sorted views soon. You may obviously get this product for YouTube Shorts as well.
                                </p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white px-2.5 rounded-full text-lg font-semibold'>7</span>
                                <p className='leading-relaxed text-slate-600 '>
                                    Contact us for any delays or other kind of problem. You may purchase YouTube subscribers as well if you so wish.
                                </p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='bg-primary text-white px-2.5 rounded-full text-lg font-semibold'>9</span>
                                <p className='leading-relaxed text-slate-600 '>
                                    Leave your YouTube channel stock; use our services to obtain some aid to increase its performance. YouTube auto views are now purchaseable
                                    to automatically generate your next YouTube videos.
                                </p>
                            </div>

                        </div>

                        {/* <ul type='number' className='mt-4 flex flex-col gap-3'>
                            <li className='text-slate-600'>
                                Choose first of all the perspective you want to have. Choose the actual tab if you want to purchase actual YouTube views.
                            </li>
                            <li className='text-slate-600'>Paste your video URL straight to the box provided.</li>
                            <li className='text-slate-600'>Then enter the overall number of views you want to buy into the following box.</li>
                            <li className='text-slate-600'>Click the "Buy Now" or "Add to Cart" buttons to access the payment page.</li>
                            <li className='text-slate-600'>Completing the payment procedure</li>
                            <li className='text-slate-600'>Your profile will show the sorted views soon. You may obviously get this product for YouTube Shorts as well.</li>
                            <li className='text-slate-600'>Contact us for any delays or other kind of problem. You may purchase YouTube subscribers as well if you so wish.</li>
                            <li className='text-slate-600'>
                                Leave your YouTube channel stock; use our services to obtain some aid to increase its performance. YouTube auto views are now purchaseable
                                to automatically generate your next YouTube videos.
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
            <FaqSection faqData={faqData} />
            <ReviewsSection />
        </div>
    );
}

export default YouTubeViewsPage;


