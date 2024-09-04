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

export default function Home() {
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
      description: "YouTube subscribers show how interesting your content is. Your subscriber number is like the measure of your channel's quality. So, it is important to have a hight number of subscribers to attract more visitors to your channel.",
      icon: <IoSearch />
    },
    {
      id: 3,
      title: "What are Youtube Subscribers",
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

  ]
  return (
    <main className=" bg-white">
      <HeroSection title={"Grow your Bussiness <br/> and Profile with us"} subTitle={"Buy YouTube Views"} imgUrl={"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/08/Generation-z-Christmas-party-with-multi-ethnic-friends-1296x728-header.jpg?w=1155&h=1528"} />
      <ImportantSection />
      <AllServicesSection />
      <WhyYouChooseSection heading={"✊ Why You Should Choose Tubeviews"} subHeading={"Buying Youtube views from Tubeviews can help you boost your video's visibility and reach."} />
      <FeaturesSection featuresData={featuresData} heading={"🚀 Buy YouTube Views Features With Tubeviews"} subHeading={"Buying Youtube views from Tubeviews can help you boost your video's visibility and reach."} />
    </main>
  );
}
