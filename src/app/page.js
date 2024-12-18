import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ImportantSection from "./components/ImportantSection";
import AllServicesSection from "./components/AllServicesSection";
import WhyYouChooseSection from "./components/WhyYouChooseSection";
import FaqSection from "./components/FaqSection";
import ReviewsSection from "./components/ReviewsSection";
import homePageReviews from "./reviewData/homePageReviews.json"

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
  const words = ['Views', 'Subscribers', 'Likes', 'Comments'];
  return (
    <main className=" bg-white">
      <HeroSection title={"Grow your Bussiness <br/> and Profile with us"} subTitle={"<h3 class=text-primary>Buy YouTube</h3>"} words={words} imgUrl={"/homeBanner.png"} />
      <ImportantSection />
      <AllServicesSection />
      <WhyYouChooseSection
        heading={"✊ Why Choose GoFamy for YouTube Views?"}
        subHeading={"Buying YouTube views from GoFamy improves the exposure and reach of your video, not just increases quantities. Our approach increases your chances of becoming viral, helps you get momentum, and draws a bigger audience."}
        title1={"Security and Privacy First"}
        description1={
          `
                    At GoFamy, we value your privacy rather highly. Our platform guarantees a 100% safe and confidential
                    service, thereby assuring that your channel develops in a secure surroundings while you concentrate on
                    producing excellent material. Let us address the opinions while you focus on what is important—your
                    audience.
                    `
        }
        title2={"Proven YouTube Growth"}
        description2={
          `
                    Having years of expertise guiding YouTube artists towards growth, GoFamy provides a dependable
                    and quick service. We know the dynamics of YouTube and customise our strategy to guarantee that your
                    material receives the exposure it deserves.
                    `
        }
        title3={"Ad-Driven, Organic Sourcing"}
        description3={
          `
                    Our ad-driven distribution method guarantees real, engaged viewers are the source of your YouTube
                    viewing. We employ focused adverts to attract the correct audience for your material, therefore increasing
                    not just your views but also channel activity.
                    `
        }
        title4={"24/7 Exclusive Support"}
        description4={
          `
                    Have questions or want help? Our staff at GoFamy is on hand around-the-clock to help you as
                    required. Whether it's monitoring your views or answering any questions, we are here to make sure your
                    experience is seamless and free from concerns.
                    `
        }
      />
      <div className='bg-white'>
        <p className='bg-primary p-1'></p>
        <div className='lg:w-[80%] w-[90%] m-auto lg:py-14 py-5 flex flex-col lg:flex-row items-center'>
          <div className="lg:w-[60%] w-[100%]">
            <h3 className='text-xl lg:text-[2rem] font-semibold text-slate-600 mt-3'>Buy YouTube Views from GoFamy</h3>
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
          </div>
          <div className="lg:w-[40%] w-[100%] flex justify-center items-center">
            <Image width={400} height={300} alt="GoFamy" src={"/tubeviews-about.webp"} />
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <p className='bg-primary p-1'></p>
        <div className='lg:w-[80%] w-[90%] m-auto lg:py-14 py-5 flex flex-col-reverse lg:flex-row items-center'>
          <div className="lg:w-[40%] w-[100%] flex justify-center items-center">
            <Image width={400} height={300} alt="GoFamy" src={"/tubeviews-home.webp"} />
          </div>
          <div className="lg:w-[60%] w-[100%]">
            <h3 className='text-xl lg:text-[2rem] font-semibold text-slate-600 mt-3'>Why Should You Buy YouTube Views from GoFamy.com?</h3>
            <p className=' leading-relaxed text-slate-600 mt-3'>
              Its best to buy YouTube views from GoFamy as the services are very fast and reasonable.
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
            <h3 className='text-xl lg:text-[2rem] font-semibold text-slate-600 mt-3'>What is the benefit of buying YouTube views from GoFamy.com?</h3>
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
            <Image width={400} height={300} alt="GoFamy" src={"/tubeviews-views.webp"} />
          </div>
        </div>
      </div>
      <FaqSection
        heading={"🥇 Celebrating Success: Stories Straight from Our Clients!"}
        subHeading={"At GoFamy, your satisfaction comes first. Enjoy exceptional customer Support and watch your social media presence skyrocket!"}
        faqData={faqData}
      />
      <ReviewsSection reviewsData={homePageReviews || []} />
    </main>
  );
}
