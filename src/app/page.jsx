import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ImportantSection from "./components/ImportantSection";
import AllServicesSection from "./components/AllServicesSection";
import WhyYouChooseSection from "./components/WhyYouChooseSection";
import FeaturesSection from "./components/FeaturesSection";
import { IoSearch } from "react-icons/io5";
import { IoMdWatch } from "react-icons/io";
import { BsGraphDownArrow } from "react-icons/bs";
import { MdSupportAgent, MdOutlinePayment, MdLockOutline, MdOutlineWarning, MdLightMode } from "react-icons/md";
import ContentSection1 from "./components/ContentSection1";
import ContentSection2 from "./components/ContentSection2";
import FaqSection from "./components/FaqSection";
import ReviewsSection from "./components/ReviewsSection";
import youtubeReviews from "./reviewData/youtubeReviews.json"

export default function Home() {
  const faqData = [
    {
      id: 1,
      question: "Can this service help me reach 4,000 hours of view time required for monetization and partnership?",
      answer: "Yes! When you get YouTube views, the video you targeted will be watched from start to end by the specific amount of accounts you decided. With this service, you can easily surpass the 4,000 hours limit."
    },
    {
      id: 2,
      question: "Is it possible for YouTube to realize I'm not getting genuine views?",
      answer: "It's not likely. Since there isn't a list called viewers, or such, it's almost impossible for YouTube to catch you red-handed. It's not so much different than asking a friend to watch your video."
    },
    {
      id: 3,
      question: "What happens when you get 1K subscribers on YouTube?",
      answer: "When you hit 1K subscribers, YouTube sends you a mail to congratulate you. "
    },
    {
      id: 4,
      question: "Can YouTubers see who viewed their videos?",
      answer: "Unfortunately not. They can only see how many people viewed their videos."
    },
    {
      id: 5,
      question: "What İs The Traffic Source İn Youtube Views?",
      answer: "YouTube traffic sources are in 3 main categories."
    },
    {
      id: 6,
      question: "Can I Buy Views For Private Video?",
      answer: "No, you cannot use this service for private video. If the video is hidden after making the purchase, the order will be cancelled. You must make the video public until the order is complete."
    },
  ]
  return (
    <main className=" bg-white">
      <HeroSection title={"Grow your Bussiness <br/> and Profile with us"} subTitle={"<h3 class=text-primary>Buy YouTube <span class=text-secondary>Views</span></h3>"} imgUrl={"/homeBanner.png"} />
      <ImportantSection />
      <AllServicesSection />
      <WhyYouChooseSection heading={"✊ Why You Should Choose Tubeviews"} subHeading={"Buying Youtube views from Tubeviews can help you boost your video's visibility and reach."} />
      <div className='bg-white'>
        <p className='bg-primary p-1'></p>
        <div className='lg:w-[80%] w-[90%] m-auto lg:py-14 py-5 flex flex-col lg:flex-row items-center'>
          <div className="lg:w-[60%] w-[100%]">
            <h3 className='text-xl lg:text-[2rem] font-semibold text-slate-600 mt-3'>Buy YouTube Views from TubeViews</h3>
            <p className=' leading-relaxed text-slate-600 mt-3'>
              Have you ever thought of having a good amount of youtube views? The main objective is to increase your fan base. Every day,
              its customers watch almost one million hours of footage. There are few factors, which are taken into consideration when you
              select whether to subscribe to the channel. When individuals are not watching your videos, nobody will desire to enroll you.
              Finally, it is well understood that if you need YouTube subscribers, in turn you have to improve your views. Second,
              a more significant amount of views contributes to your video’s leading tanking. If you desire people to enjoy your film,
              it needs to rank in search results highly. During the ranking process, Google takes into account the number of views.
            </p>
            <p className=' leading-relaxed text-slate-600 mt-3'>
              <b className=''>Benefits:</b> We will show you how to figure out if you are an excellent applicant for Views on youtube.
            </p>
            <p className=' leading-relaxed text-slate-600 mt-3'>
              <b>Socially Accepted:</b> As the views increase you will be more acceptable to people. Some people may disregard your content at first.
              When people notice an up graph of your channel, they become more inclined to join it. With the views increment it also in turn improves your performance of the company..
              Your channels will almost certainly develop, and you would begin to receive more likes as well as shares once you realize it.
            </p>
            {/* <p className=' leading-relaxed text-slate-600 mt-3'>
              <b>When It Comes to Increasing Your Social Credibility:</b> The great news is that purchasing genuine YouTube views can significantly boost your interpersonal credibility.
              It renders your movie or channel extra reputable and trustworthy. As a consequence, the real Subscriber will start entering your domain.
              If you desire real YouTube Subscriber first, you might want to explore purchasing them from a reliable service.
            </p>
            <p className=' leading-relaxed text-slate-600 mt-3'>
              <b>When you need to get the most bang for your buck with your advertising:</b> If you think spending on Instagram and Facebook advertisements to advertise
              your product or business is a good idea, you must think of YouTube precisely the similar way. Spend money advertising your YouTube clips
              and other sorts of material. It is one of the important aspects for your business which many people just ignore.
              But it in turn boosts the presence of your business.
            </p> */}
          </div>
          <div className="lg:w-[40%] w-[100%] flex justify-center items-center">
            <Image width={400} height={300} alt="Tubeviews" src={"/tubeviews-about.webp"} />
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <p className='bg-primary p-1'></p>
        <div className='lg:w-[80%] w-[90%] m-auto lg:py-14 py-5 flex flex-col-reverse lg:flex-row items-center'>
          <div className="lg:w-[40%] w-[100%] flex justify-center items-center">
            <Image width={400} height={300} alt="Tubeviews" src={"/tubeviews-home.webp"} />
          </div>
          <div className="lg:w-[60%] w-[100%]">
            <h3 className='text-xl lg:text-[2rem] font-semibold text-slate-600 mt-3'>Why Should You Buy YouTube Views from TubeViews.co?</h3>
            <p className=' leading-relaxed text-slate-600 mt-3'>
              Its best to buy YouTube views from TubeViews as the services are very fast and reasonable.
              All of our operations, particularly our YouTube viewing business, are AdSense-safe.
              The delivery of the package is very safe.
            </p>
            <p className=' leading-relaxed text-slate-600 mt-3'>
              Buying Youtube views from Tube views helps to Boost your chances of going global. Nobody becomes famous suddenly.
              Even if you buy engagement, your fame does not magically appear out of nowhere. Buying views, on the other hand, allows you to go popular.
              It is a strategy to improve your chances and get ahead of the competitors. In physics, it is similar to semiconductors,
              although I doubt most people would comprehend that. Regardless, let’s say you require at least a hundred million views to become famous,
              but your movies only get fifty thousand at most. It makes no difference. You can invest some cash and purchase 50,000 views,
              which would just put you over the top and into the competition. Once you get there, your possibilities of being famous multiply by a factor of ten.
            </p>
          </div>

        </div>
      </div>
      <div className='bg-white'>
        <p className='bg-primary p-1'></p>
        <div className='lg:w-[80%] w-[90%] m-auto lg:py-14 py-5 flex lg:flex-row flex-col items-center'>
          <div className="lg:w-[60%] w-[100%]">
            <h3 className='text-xl lg:text-[2rem] font-semibold text-slate-600 mt-3'>What is the benefit of buying YouTube views from TubeViews.co?</h3>
            <p className=' leading-relaxed text-slate-600 mt-3'>
              Benefits of more buying Youtube views from Tube views are as follows:
            </p>
            <p className=' leading-relaxed text-slate-600 mt-3'>
              It demonstrates the importance of your channel’s ranking: When you want to put yourself as an influencer on YouTube.
              You are not going to discover clients whose items you wish to promote at random. A letter of reference,
              even if it comes from Satya Nadella personally, will not help. No. Numbers are king.
              A rise in the number of visits to your films indicates that they are popular and viewed by thousands
              upon thousands of additional people. When a business teams up with influencers, they are seeking a boost in popularity.
            </p>
          </div>
          <div className="lg:w-[40%] w-[100%] flex justify-center items-center">
            <Image width={400} height={300} alt="Tubeviews" src={"/tubeviews-views.webp"} />
          </div>
        </div>
      </div>
      <FaqSection
        heading={"🥇 Frequently Asked Questions"}
        subHeading={"Find answers to any questions you may have in mind about our products and tools. If you can't find your answer at FAQ you can reach us via our live support center without a fee."}
        faqData={faqData}
      />
      <ReviewsSection reviewsData={youtubeReviews || []} />
    </main>
  );
}
