/* eslint-disable */
import React from "react";
import dynamic from "next/dynamic";
import { IoSearch } from "react-icons/io5";
import { IoMdWatch } from "react-icons/io";
import { BsGraphDownArrow } from "react-icons/bs";
import {
  MdSupportAgent,
  MdOutlinePayment,
  MdLockOutline,
  MdOutlineWarning,
  MdLightMode,
  MdOutlineQuickreply,
  MdOutlineSupportAgent,
  MdOutlineVisibility,
  MdPolicy,
  MdEnhancedEncryption,
} from "react-icons/md";
// Dynamically import components (Ensure these are default exports in their files)
const ServiceCard = dynamic(() => import("../components/ServiceCard"));
const HeroSection = dynamic(() => import("../components/HeroSection"));
import igReelsLikesData from "../constant/instagram/igReelsLikesData.json";
import Image from "next/image";
import { SiGoogleauthenticator } from "react-icons/si";
import { TbPackages } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";

function InstagramReelsLikesPage() {
    const featuresData = [
            {
                id: 1,
                title: "1. Real and authentic likes",
                description:
                    `
              We offer likes from real, high-quality accounts to make sure they are real. Our likes come from real 
              people, not bots like those used by other services. This keeps your involvement natural and in line 
              with Instagram's rules.
                `,
                icon: <SiGoogleauthenticator />
            },
            {
                id: 2,
                title: "2. Reasonable Prices",
                description: `
                Our deals are made so that they can fit any budget. It doesn't matter if you're a small business 
                or an influencer you can find deals that will get you more interaction without breaking the bank.
                `,
                icon: <MdOutlineQuickreply />
            },
            {
                id: 3,
                title: "Flexible Packages",
                description:
                    `
                Select from many solutions catered to your particular requirements and financial capacity.
                `,
                icon: <TbPackages />
            },
            {
                id: 5,
                title: "Safe Interactions",
                description:
                    `
               Every payment is handled securely, therefore protecting your financial and personal data.
                `
                ,
                icon: <AiFillSafetyCertificate />
            },
            {
                id: 6,
                title: "Customer Support Available 24/7",
                description: `
                Around-the-clock availability of our committed support staff helps you with any questions or problems.
                `,
                icon: <MdOutlineSupportAgent />
            },
            {
                id: 7,
                title: "Better Visibility",
                description:
                    `
              Make sure your followers; feeds show your live broadcast so naturally additional people will be drawn in.
                `,
                icon: <MdOutlineVisibility />
            },
            {
                id: 8,
                title: "Adhering to Facebook Policies",
                description:
                    `Our services follow Facebook policies, thereby making sure your account stays secure and in good
    standing.
                `,
                icon: <MdPolicy />
            },
            {
                id: 9,
                title: "Enhanced Involvement",
                description:
                    `More interactions—including likes, comments, and shares—result from higher view counts, therefore
    strengthening a thriving community.
                `,
                icon: <MdEnhancedEncryption />
            }
        ];

  return (
    <div>
      <HeroSection
        title={"Buy Instagram Reels Likes<br/> with Instant Delivery"}
        subTitle={
          "<h3>Buy More <span class=text-primary>Reels Likes</span></h3>"
        }
        imgUrl={"/tubeviews-banner.webp"}
      />
      {/* package section start */}
      <div className="bg-white pb-16">
        <div className="lg:w-[80%] w-[90%] flex flex-col gap-10 m-auto">
          <div className="flex flex-col items-center gap-4">
            <h3 className="lg:text-3xl text-2xl text-center lg:text-start font-semibold">
              Get Real Instagram Reels Likes from 100% Real and Active Users
            </h3>
            <p className="lg:text-xl text-lg text-center lg:text-start font-medium">
              We provide Real and Non-Drop Instagram Reels Likes for life-time
            </p>
          </div>
          <ServiceCard packageData={igReelsLikesData} />
        </div>
      </div>
      {/* package section end */}

      {/* ======== content section 2 start ========= */}
      <div className="bg-white">
        <div className="bg-[#f5f7fe] py-5 px-4 lg:px-0 flex flex-col gap-3 justify-center items-center">
          <div className="lg:w-[70%] w-[90%] ">
            <h3 className="lg:text-[2rem] text-xl font-semibold text-center text-black">
              Buy Instagram Reels Likes to Interact More
            </h3>
          </div>
        </div>
        <div className="lg:w-[80%] w-[90%] m-auto lg:py-8 py-5">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
            <div>
              <p className="leading-relaxed text-slate-600 mt-1">
                The newest thing to do is Instagram Reels. Since you're here,
                it's likely that you have already made a Reel and are now
                looking for ways to get more Likes on it. We're here to help
                you. You can buy Instagram Reels Likes right away from our
                service and become more visible on the network. The people who
                like your Reels are real people who care about what you post.
                Get these Likes to really take off on Instagram.
              </p>
            </div>
            <Image
              className=""
              width={400}
              height={200}
              src={"/buy-instagram-reels-views.webp"}
              alt="buy instagram reels views"
            />
          </div>
        </div>
      </div>
      {/* ======== content section 2 end ========= */}

      {/* ======== content section 3 start ========= */}
      <div className="bg-white">
        <div className="bg-[#f5f7fe] py-5 px-4 lg:px-0 flex flex-col gap-3 justify-center items-center">
          <div className="lg:w-[70%] w-[90%] ">
            <h3 className="lg:text-[2rem] text-xl font-semibold leading-none text-center text-black">
              🤚🏿 What are Instagram Reels?
            </h3>
          </div>
        </div>
        <div className="lg:w-[80%] w-[90%] m-auto py-5">
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
            <div>
              <p className="leading-relaxed text-slate-600 mt-1">
                It's not too long ago that Instagram added Instagram Reels to
                its network. A certain kind of movie that went viral on the
                internet and became very famous thanks to TikTok. These are
                short movies that you can use to tell stories or show off new
                dance moves to cool music. There are no conditions at all. You
                are free to be artistic! These movies are really popular,
                especially among younger people on social media, and they're a
                great way to get new people to watch your content. When
                Instagram added Reels in 2020, they did it to appeal to young
                people who mostly use TikTok. The most-watched TikTok videos can
                now also be found in Instagram Reels. At first, Instagram only
                added this function in a few countries. Slowly, it's being added
                to all of them. These short films are interesting to many
                businesses and leaders around the world, and they know how to
                use them to their advantage.
              </p>
              <p className="leading-relaxed text-slate-600 mt-3">
                An already huge number of people love Instagram Reels. Due to
                the success of TikTok, Instagram's growth has been slow lately.
                To get more people to use Instagram, they added a useful feature
                called "Reels." You can now record or share Reels right from
                your phone. This means that there is no reason to use anything
                other than Instagram since it has the same editing tools as its
                rivals. You've come to the right website if you also record a
                lot of Reels and make money from their fame. We're happy to help
                you buy Instagram Reels Likes so that you can become more famous
                quickly. You can be one of the first people to use Instagram
                Reels.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ======== content section 3 end ========= */}

      {/* ======== content section 3 start ========= */}
      <div className="bg-white">
        <div className=" py-5 px-4 lg:px-0 flex flex-col gap-3 justify-center items-center">
          <div className="lg:w-[70%] w-[90%] ">
            <h3 className="lg:text-[2rem] text-xl font-semibold leading-none text-center text-black">
              🤚🏿 Why Buy Instagram Reels Likes?
            </h3>
          </div>
        </div>
        <div className="lg:w-[80%] w-[90%] m-auto py-5">
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
            <div>
              <p className="leading-relaxed text-slate-600 mt-1">
              With Instagram Reels, users can now watch videos on the app in a whole new way. 
              It gives people a unique way to connect with viewers through short, very interesting movies. 
              But being creative alone isn't enough to stand out in this crowded field. This is why buying 
              likes from GoFamy can make all the difference-
              </p>
              <ul className="list-disc list-inside flex flex-col gap-3 leading-relaxed text-slate-600 mt-3">
                <li>
                It gets more people to interact with you and raises your chances of being listed on the Explore page.
                </li>
                <li>
                It gives your material quick trustworthiness, which makes people more likely to interact with it.
                </li>
                <li>
                Over time, it helps you get more natural friends, likes, and comments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ======== content section 3 end ========= */}

      {/* ======== content section 3 start ========= */}
      <div className="bg-white">
        <div className=" py-5 px-4 lg:px-0 flex flex-col gap-3 justify-center items-center">
          <div className="lg:w-[70%] w-[90%] ">
            <h3 className="lg:text-[2rem] text-xl font-semibold leading-none text-center text-black">
              How to Get Instagram Reel Likes Organically
            </h3>
          </div>
        </div>
        <div className="lg:w-[80%] w-[90%] m-auto py-5">
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
            <div>
              <p className="leading-relaxed text-slate-600 mt-1">
              If you want to be successful on Instagram, you need to Buy Likes on Instagram Reels. 
              But that's not all. You will also need to work on your direct user reach if you want to 
              build an audience that will stick around. Here are some useful tips and tricks that will 
              help you reach a lot of people naturally-
              </p>
              <div className="mt-4 flex flex-col gap-6">
                <div>
                    <h4 className=" text-xl font-semibold leading-none text-black">Create compelling content.</h4>
                    <p className="leading-relaxed text-slate-600 mt-2">
                    As you might expect, the better your information, the easier it will be to get more people to 
                    read it. Your Reels should have great sound and video from the start and keep people interested 
                    throughout.
                    </p>
                    <p className="leading-relaxed text-slate-600 mt-3">
                    It will only take people a few seconds to decide if they want to watch your whole video or not. 
                    Make them matter! Make it clear what the video is about and give interesting reasons why your 
                    Reel is cool. Don't take too long to set everything up. Learn more in our guide on how to get 
                    more people to interact with your Instagram posts.
                    </p>
                </div>
                <div>
                    <h4 className=" text-xl font-semibold leading-none text-black">Find the best time to post for you.</h4>
                    <p className="leading-relaxed text-slate-600 mt-2">
                    If you want to grow naturally, post when most of your possible fans are on Instagram. 
                    The best times to work are usually in the morning, when everyone has time for their travels 
                    and drinks. A lot of people are also online at night during the week and on the weekends.
                    </p>
                    <p className="leading-relaxed text-slate-600 mt-3">
                    But these rules aren't set in stone. A lot will depend on your material and the people who 
                    might be interested in it. Things can be tried out in any way. You can always delete your 
                    Reels and try again if the first ones don't work. As time goes on, you'll write your own 
                    success stories and know when to post to get the most out of it.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======== content section 3 end ========= */}
    </div>
  );
}

export default InstagramReelsLikesPage;
