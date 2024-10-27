/* eslint-disable */
import React from 'react';
import dynamic from 'next/dynamic';
import { MdOutlineSupportAgent, MdOutlineEditLocation, MdPolicy, MdEnhancedEncryption } from "react-icons/md";
// Dynamically import components (Ensure these are default exports in their files)
const ServiceCard = dynamic(() => import('../components/ServiceCard'));
const HeroSection = dynamic(() => import('../components/HeroSection'));
import fbPageLikesData from "../constant/facebook/fbPageLikesData.json"
import { GoPackage } from 'react-icons/go';
import { GiGrowth } from 'react-icons/gi';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbPackages } from 'react-icons/tb';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import FeaturesSection from '../components/FeaturesSection';
import { FaUsers } from 'react-icons/fa';
import { FcPodiumWithAudience } from 'react-icons/fc';
import { CiDeliveryTruck } from "react-icons/ci";
import Image from 'next/image';
import FaqSection from '../components/FaqSection';



function FacebookPageLikesPage() {
    const featuresData = [
        {
            id: 1,
            title: "Real and Active Users",
            description:
                `
          Tubeviews gets you likes from real, active Facebook users, so you know that the people
who are engaging with your page are real people.
            `,
            icon: <FaUsers />
        },
        {
            id: 2,
            title: "Options for a Specific Audience",
            description: `
            For more targeted growth, you can pick likes from people of a certain age,
area, or hobbies.
            `,
            icon: <FcPodiumWithAudience />
        },
        {
            id: 3,
            title: "Safe and Slow Delivery",
            description:
                `
            Likes are sent out slowly, making it look like your account is growing naturally and
keeping it safe from being found out and penalized.
            `,
            icon: <CiDeliveryTruck />
        },
        {
            id: 5,
            title: "Quick Results",
            description:
                `
           As soon as you buy, you'll start seeing likes on your page, which means that you'll grow quickly
and effectively.
            `
            ,
            icon: <AiFillSafetyCertificate />
        },
        {
            id: 6,
            title: "Packages that aren't too expensive",
            description: `
            Tubeviews has a variety of packages that can fit a variety of budgets,
giving small companies and big names a choice.
            `,
            icon: <TbPackages />
        },
        {
            id: 7,
            title: "Protecting your privacy",
            description:
                `
          You don't have to give out private information like passwords; Tubeviews only
needs the URL of your Facebook page to send the video.
            `,
            icon: <MdEnhancedEncryption />
        },
        {
            id: 8,
            title: "Repeat promise",
            description:
                `If the number of likes drops, Tubeviews will make sure you get your money back with a
repeat promise.
standing.
            `,
            icon: <MdPolicy />
        },
        {
            id: 9,
            title: "24/7 Customer help",
            description:
                `If you have any questions or problems during your buy, a help team is open 24 hours a
day, seven days a week.
            `,
            icon: <MdOutlineSupportAgent />
        }
    ];

    const faqData = [
        {
            id: 1,
            question: "1. When I buy Facebook likes, can I target certain communities?",
            answer:
                `Yes, TubeViews lets you target specific groups based on things like area, age, and hobbies to get the best growth.
                `
        },
        {
            id: 2,
            question: "2. Are those likes from real people?",
            answer:
                `Of course. When you buy Facebook likes from TubeViews, they all come from real, busy people. This makes sure that your page is getting real activity.
                `
        },
        {
            id: 3,
            question: "3. Can I buy a certain number of likes?",
            answer:
                `No, TubeViews has options that are open. No matter what your goals are, you can buy as many likes as you want.
                `
        },
        {
            id: 4,
            question: "4. How long does it take for the likes to arrive?",
            answer:
                `Each package has its own delivery time. You'll see likes right away, and the full release will happen in a few days.
                `
        },
        {
            id: 5,
            question: "5. If I buy likes, can I lose them?",
            answer:
                `It's not common for likes to go away over time. TubeViews offers a refill promise to make sure that the likes you buy last.
                `
        },
        {
            id: 6,
            question: "6. Will buying Facebook likes change the way my account works?",
            answer:
                `Because TubeViews follows Facebook's rules, your account will stay safe and unchanged even if you buy likes.
                `
        }
    ]
    return (
        <div>
            <HeroSection title={"Buy Facebook Page <br/> Likes with Instant Delivery"} subTitle={"<h3>Buy More <span class=text-secondary>Likes</span></h3>"} imgUrl={"/tubeviews-banner.webp"} />
            {/* package section start */}
            <div className='bg-white pb-16'>
                <div className='lg:w-[80%] w-[90%] flex flex-col gap-10 m-auto'>
                    <div className='flex flex-col items-center gap-4'>
                        <h3 className='lg:text-3xl text-2xl text-center lg:text-start font-semibold text-black'>Get Real Facebook Page Likes from 100% Real and Active Users</h3>
                        <p className='lg:text-xl text-lg text-center lg:text-start font-medium text-black'>We provide Real and Non-Drop Facebook Page Likes for life-time</p>
                    </div>
                    <ServiceCard packageData={fbPageLikesData} />
                </div>
            </div>
            {/* package section end */}

            {/* ================= */}
            <div className='bg-white'>
                <div className=' bg-[#f5f7fe] py-5 px-4 flex flex-col gap-3 justify-center items-center'>
                    <div className='lg:w-[90%] xl:w-[70%] w-[90%] '>
                        <h3 className='lg:text-[2rem] text-xl font-semibold text-center text-black'>✊ Buy Facebook Pages Likes from TubeViews</h3>
                    </div>
                </div>
                <div className='lg:w-[70%] w-[90%] m-auto py-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-10 gap-5'>
                        <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                            <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white text-black'>
                                <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                    <VscWorkspaceTrusted />
                                </span>
                                <h4 className='text-xl font-semibold'>Boost trustworthiness and Trust</h4>
                            </div>
                            <div className='group-hover:text-white'>
                                <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white'>
                                    Buying Facebook likes quickly boosts your page's trustworthiness, making
                                    it look more trustworthy to new viewers and possible buyers.
                                </p>
                            </div>
                        </div>
                        <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                            <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white text-black'>
                                <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                    <GiGrowth />
                                </span>
                                <h4 className='text-xl font-semibold'>Increase Organic Growth</h4>
                            </div>
                            <div className='group-hover:text-white'>
                                <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white'>
                                    If you get more likes on your page, Facebook's system will help it grow naturally,
                                    which will make it more visible and reach more people across the site.
                                </p>
                            </div>
                        </div>
                        <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                            <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white text-black'>
                                <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                    <MdOutlineEditLocation />
                                </span>
                                <h4 className='text-xl font-semibold'>Solutions That Fit Your Needs and Are Safe</h4>
                            </div>
                            <div className='group-hover:text-white'>
                                <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white'>
                                    <b>TubeViews</b> offers tailored likes from real users, which ensures
                                    safe, slow growth without the risk of fines or account closure.
                                </p>
                            </div>
                        </div>
                        <div className='group border rounded-tl-3xl rounded-br-3xl shadow-[0_2px_2px_rgba(0,0,0,0.10)] p-8 flex flex-col gap-4 hover:bg-primary'>
                            <div className='flex flex-col items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white text-black'>
                                <span className='text-5xl bg-primary p-3 rounded-full text-white group-hover:bg-white group-hover:text-primary'>
                                    <GoPackage />
                                </span>
                                <h4 className='text-xl font-semibold '>Packages that are Affordably Priced</h4>
                            </div>
                            <div className='group-hover:text-white'>
                                <p className='text-[15px] text-slate-600 leading-normal group-hover:text-white'>
                                    <b>TubeViews</b> has price options that can fit any budget and growth plan, no
                                    matter how big or small your business is.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============ */}

            {/* FeaturesSection start */}
            <FeaturesSection
                featuresData={featuresData}
                heading={"🚀 Buy Facebook Pages Likes features"}
            />
            {/* FeaturesSection end */}

            {/* ======== content section 2 start ========= */}
            <div className='bg-white'>
                <div className='bg-[#f5f7fe] py-5 px-4 lg:px-0 flex flex-col gap-3 justify-center items-center'>
                    <div className='lg:w-[70%] w-[90%] '>
                        <h3 className='lg:text-[2rem] text-xl font-semibold text-center text-black'>
                            Buy Facebook Page Likes - Improve Your Social Profile with TubeViews
                        </h3>
                    </div>
                </div>
                <div className='lg:w-[80%] w-[90%] m-auto lg:py-8 py-5'>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                        <div>
                            <p className="leading-relaxed text-slate-600 mt-1">
                                The fast-paced digital era of today calls for greater online presence of your company than before.
                                With billions of daily users, Facebook has evolved into a formidable tool for companies, influencers,
                                and content producers looking to reach and interact with their audience. On Facebook, however,
                                developing a strong and active following may be difficult especially for new pages or companies
                                attempting to stand out among the noise. Here is when Buying Facebook page likes becomes relevant.
                                Using a reliable social media marketing tool, <b>TubeViews</b>, you can quickly raise your Facebook page likes,
                                improve brand awareness, and naturally expand in no time.
                            </p>
                        </div>
                        <Image
                            className=''
                            width={400}
                            height={200}
                            src={"/buy-facebook-real-likes.webp"}
                            alt="buy facebook live views"
                        />
                    </div>
                </div>
            </div>
            {/* ======== content section 2 end ========= */}

            {/* ======== content section 3 start ========= */}
            <div className='bg-white'>
                <div className='bg-[#f5f7fe] py-5 px-4 lg:px-0 flex flex-col gap-3 justify-center items-center'>
                    <div className='lg:w-[70%] w-[90%] '>
                        <h3 className='lg:text-[2rem] text-xl font-semibold text-center text-black'>
                            🤚🏿 Why does one need likes on a Facebook page?
                        </h3>
                    </div>
                </div>
                <div className='lg:w-[80%] w-[90%] m-auto lg:py-14 py-5'>
                    <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-10'>
                        <Image
                            className=''
                            width={400}
                            height={400}
                            src={"/buy-facebook-real-page-likes.webp"}
                            alt="Buy Facebook Page Likes"
                        />
                        <div>
                            <p className="leading-relaxed text-slate-600 mt-1">
                                Making credibility and drawing more natural followers depend much on the likes you get when you start a Facebook
                                profile. <b>Buying Facebook page likes</b> is a calculated action for these reasons among others:
                            </p>
                            <p className="leading-relaxed text-slate-600 mt-3">
                                Improved Credibility: A Facebook page with a lot of likes comes right out as reliable and respectable. Individuals are more
                                inclined to follow sites with already significant following.
                            </p>
                            <p className="leading-relaxed text-slate-600 mt-3">
                                More likes on your page mean that your posts are more likely to be viewed, shared, and commented on, therefore raising
                                general page engagement.
                            </p>
                            <p className="leading-relaxed text-slate-600 mt-3">
                                Facebook's algorithm prefers pages with more likes, thereby increasing the natural reach of your content without having
                                to pay outrageous amounts for advertisements.
                            </p>
                            <p className="leading-relaxed text-slate-600 mt-3">
                                <b>Buy Facebook Pages Likes</b> that provide the target you need to advance whether you're just starting out or if your
                                page development has stagnated.
                            </p>
                            <p className="leading-relaxed text-slate-600 mt-3">
                                Popular and well-liked Facebook pages may direct visitors to your website or product, therefore increasing the
                                conversion rates.
                            </p>
                            <p className="leading-relaxed text-slate-600 mt-3">
                                Knowing the advantages of <b>Buying Facebook page likes</b>, let's now explore how <b>TubeViews</b> will enable you to rapidly
                                expand your Facebook page.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ======== content section 3 end ========= */}

            {/* ======== content section 5 start ========= */}
            <div className='bg-white'>
                <div className='bg-[#f5f7fe] py-5 px-4 lg:px-0 flex flex-col gap-3 justify-center items-center'>
                    <div className='lg:w-[70%] w-[90%] '>
                        <h3 className='lg:text-[2rem] text-xl font-semibold text-center text-black'>
                            🧍 Why Choose Tubeviews to Buy Facebook Page Likes?
                        </h3>
                    </div>
                </div>
                <div className='lg:w-[80%] w-[90%] m-auto lg:py-8 py-5'>
                    <div>
                        <div className="mt-4 flex flex-col gap-4">
                            <div>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    Here at <b>TubeViews</b>, we provide a safe and trustworthy venue to <b>Buy real Facebook page likes</b>. Our solution is
                                    meant to let companies, influencers, and content producers easily meet their social media objectives.
                                    The following explains why <b>TubeViews</b> is your preferred method for <b>Buying Facebook page likes</b>:
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">1. Active and Real Likes</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    Buying likes from <b>TubeViews</b> results in actual, active Facebook users rather than bots or phoney profiles.
                                    People who really enjoy your page will aid to boost credibility and engagement by means of these likes.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">2. Customized Services</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    Every company has various requirements, as we are aware. Whether your company is big or a tiny startup, we provide many options
                                    fit for all budgets and needs. The date for delivery and your desired number of likes will determine your selection of choices.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">3. Quick Deliverability</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    <b>TubeViews</b> let you see outcomes without waiting endlessly. Our technology is meant to provide likes quick and consistent
                                    delivery. Your page likes will start to rise within hours depending on the plan you decide upon.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">4. Safe and Safely secure</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    Our first concerns are your privacy and security. <b>TubeViews</b> guarantees that your payment information and personal
                                    data are kept private; we never request your Facebook login. Our approaches follow Facebook policies and are
                                    absolutely safe.
                                </p>

                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">5. 24/7 Client Assistance</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    Here we are for you around-the-clock. Our committed customer support staff is here around-the-clock to assist
                                    with any questions or problems you may run into using our products. We can help you monitor your order or
                                    aid with selecting the correct package.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">6 High Quality Post Likes</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    We guarantee perfect satisfaction by offering the best quality Facebook post likes. Increase interaction,
                                    establish credibility, and draw even more attention to the content by boosting your articles with sincere likes.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">7. Organic Development: Gradual Distribution</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    <b>TubeViews</b> offers slow likes to guarantee your page develops gradually and stays hidden from Facebook's algorithms.
                                    This gradual and consistent technique lets your website acquire traction without drawing any attention, therefore
                                    simulating natural development.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">8. Reasonably Cost Solutions</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    <b>TubeViews</b> is dedicated to provide reasonably priced top-notch service. <b>TubeViews</b> provides reasonable pricing
                                    with various packages to fit all budgets, whether you're a little company on a budget or an influencer
                                    seeking for a huge boost.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">9. No Chance of Facebook Account Suspension</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    Buying likes raises one of the main issues about account suspension. You may be confident with <b>TubeViews</b> that we
                                    follow Facebook terms of service. Our techniques are 100% compliant, so there is no chance that your account
                                    will be banned or fined.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">10. Customizable Approaches</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    Every company and brand is different, we are aware of. <b>TubeViews</b> therefore provides tailored strategies to fit
                                    your particular requirements. <b>TubeViews</b> is flexible enough to meet your needs whether your needs are targeted
                                    depending on age, region, or hobbies or likes distributed over a certain period of time.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">11. Enhancement in Page Analytics & Insights</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    Page likes will help you to notice changes in your Facebook Insights. More data results from higher engagement
                                    levels, which lets you monitor the effectiveness of your articles, analyze audience behavior, and modify your
                                    content strategy for best outcomes.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">12. Improve Social Veracity</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    Many likes serve as social evidence for other users indicating that your page is reliable and popular.
                                    <b>TubeViews</b> lets you improve this social evidence, therefore facilitating the attraction of new natural likes
                                    and followers without further work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ======== content section 5 end ========= */}

            {/* ======== content section 5 start ========= */}
            <div className='bg-white'>
                <div className='bg-[#f5f7fe] py-5 px-4 lg:px-0 flex flex-col gap-3 justify-center items-center'>
                    <div className='lg:w-[70%] w-[90%] '>
                        <h3 className='lg:text-[2rem] text-xl font-semibold text-center text-black'>
                            🧍 How to Buy Facebook page likes on TubeViews?
                        </h3>
                    </div>
                </div>
                <div className='lg:w-[80%] w-[90%] m-auto lg:py-8 py-5'>
                    <div>
                        <div className="mt-4 flex flex-col gap-4">
                            <div>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    On <b>TubeViews</b>, <b>buying Facebook page likes</b> is as simple 1-2-3. Here is a detailed instructions on Buying Facebook page likes:
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">1st step: choose a package</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    Look over our range of customised packages and choose one that most fits your requirements.
                                    We offer choices to satisfy every need, regardless of your desired little boost or a large inflow of likes.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">2nd Step: Enter Your Information</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    Once you have chosen a package, just input the URL of your Facebook page along with the desired likes Buy count.
                                    There is no critical information needed, hence the procedure is safe and secure without your Facebook login.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">3rd step: Finish Your Buy</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    Go on to check out and pay using our safe gateway. To your convenience, we provide many payment choices.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-slate-700">4th: See Your Likes Develop</h4>
                                <p className='leading-relaxed text-slate-600 mt-1'>
                                    Our system will start running the likes to your page as your order is validated. As actual people interact with your website,
                                    the like count will rise gradually. The bundle you decide upon determines the delivery timeframe.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ======== content section 5 end ========= */}
            {/* ======== content section 5 start ========= */}
            <div className='bg-white'>
                <div className='bg-[#f5f7fe] py-5 px-4 lg:px-0 flex flex-col gap-3 justify-center items-center'>
                    <div className='lg:w-[70%] w-[90%] '>
                        <h3 className='lg:text-[2rem] text-xl font-semibold text-center text-black'>
                            🧍 How Buying Facebook Page Likes Helps Your Company Grow?
                        </h3>
                    </div>
                </div>
                <div className='lg:w-[80%] w-[90%] m-auto lg:py-8 py-5'>
                    <div>
                        <div className="mt-4 flex flex-col gap-4">
                            <div>
                                <p className='leading-relaxed text-slate-600'>
                                    One of the most effective marketing tools accessible to companies nowadays is Facebook,
                                    so a big following can greatly increase your success on the network. <b>Buying Facebook page likes</b>:
                                </p>
                            </div>
                            <div>
                                <p className='leading-relaxed text-slate-600'>
                                    Boost brand awareness by means of more likes, therefore greater exposure.
                                    More people will start to know your brand, goods, or services as your page expands.
                                </p>
                            </div>
                            <div>
                                <p className='leading-relaxed text-slate-600'>
                                    Create Trust with New Audiences: People are more willing to interact with and follow sites with already significant likes.
                                    This social proof starts a snowball effect wherein new people believe your page because others already do.
                                </p>
                            </div>
                            <div>
                                <p className='leading-relaxed text-slate-600'>
                                    The algorithm of Facebook gives popular pages and posts top priority, hence the more likes your page gets, the more people will see your updates.
                                </p>
                            </div>
                            <div>
                                <p className='leading-relaxed text-slate-600'>
                                    A well-liked Facebook page may drive attention to your website or product pages, therefore generating leads and hence increasing sales.
                                </p>
                            </div>
                            <div>
                                <p className='leading-relaxed text-slate-600'>
                                    Social media signals like Facebook page likes help to define the SEO ranking of your website. Your page will provide search engines favorable signals
                                    as it becomes more popular, therefore enhancing your whole rating.
                                </p>
                            </div>
                            <div>
                                <p className='leading-relaxed text-slate-600'>
                                    Any company or influencer trying to thrive in the digital environment of today must first establish a strong social media presence. <b>TubeViews</b> let
                                    you easily <b>Buy Facebook page likes</b> and expand your audience on other platforms. <b>TubeViews</b> offers the tools and techniques you
                                    need to succeed whether your page needs improvement or you're just starting out.
                                </p>
                            </div>
                            <div>
                                <p className='leading-relaxed text-slate-600'>
                                    Avoid waiting! <b>TubeViews</b> now can help you to really improve your social media profile.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ======== content section 5 end ========= */}
            <FaqSection
                heading={"🥇 Frequently Asked Questions"}
                subHeading={"Find answers to any questions you may have in mind about Buy Facebook Page Likes. If you can't find your answer at FAQ you can reach us via our live support Chat/Mail and WhatsApp!"}
                faqData={faqData}
            />
        </div>
    )
}

export default FacebookPageLikesPage