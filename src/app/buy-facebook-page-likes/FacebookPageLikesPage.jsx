/* eslint-disable */
import React from 'react';
import dynamic from 'next/dynamic';
import { IoSearch } from "react-icons/io5";
import { IoMdWatch } from "react-icons/io";
import { BsGraphDownArrow } from "react-icons/bs";
import { MdSupportAgent, MdOutlinePayment, MdLockOutline, MdOutlineWarning, MdLightMode, MdOutlineSpeed, MdOutlineSupportAgent, MdOutlineEditLocation, MdOutlineQuickreply, MdOutlineVisibility, MdPolicy, MdEnhancedEncryption } from "react-icons/md";
// Dynamically import components (Ensure these are default exports in their files)
const ServiceCard = dynamic(() => import('../components/ServiceCard'));
const HeroSection = dynamic(() => import('../components/HeroSection'));
import fbPageLikesData from "../constant/facebook/fbPageLikesData.json"
import { SiGoogleauthenticator } from 'react-icons/si';
import { GoPackage, GoPackageDependencies } from 'react-icons/go';
import { GiGrowth } from 'react-icons/gi';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbPackages } from 'react-icons/tb';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import FeaturesSection from '../components/FeaturesSection';
import { FaUsers } from 'react-icons/fa';
import { FcPodiumWithAudience } from 'react-icons/fc';
import { CiDeliveryTruck } from "react-icons/ci";
import Image from 'next/image';



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
           As soon as you buy, you&#39;ll start seeing likes on your page, which means that you&#39;ll grow quickly
and effectively.
            `
            ,
            icon: <AiFillSafetyCertificate />
        },
        {
            id: 6,
            title: "Packages that aren&#39;t too expensive",
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
                                    Buying Facebook likes quickly boosts your page&#39;s trustworthiness, making
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
                                    If you get more likes on your page, Facebook&#39;s system will help it grow naturally,
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
                                    Tubeviews offers tailored likes from real users, which ensures
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
                                    Tubeviews has price options that can fit any budget and growth plan, no
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
                            Buy Facebook Page Likes - Improve Your Social Profile with Tubeviews
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
                                Using a reliable social media marketing tool, Tubeviews, you can quickly raise your Facebook page likes,
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
                                Knowing the advantages of <b>Buying Facebook page likes</b>, let's now explore how Tubeviews will enable you to rapidly
                                expand your Facebook page.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ======== content section 3 end ========= */}
        </div>
    )
}

export default FacebookPageLikesPage