import React from 'react';
import AboutPage from './AboutPage';
export const generateMetadata = () => {
    return {
        title: "About Us - TubeViews Media",
        description: "TubeVIews is Unique Social Media Company. They Providing Real and Active Video Views, Subscribers, Comments  Likes, Followers, and More. You can Buy cheap Social Media Services.We are a dedicated company that strives to make your social media marketing easy and convenient. This we do by selling you followers and likes, which form the standards",
        keywords: "TubeViews AboutUs, Buy YouTube Views",
        alternates: {
            canonical: 'https://www.gofamy.com/about-us',
        }
    }
}

function page() {
    return <AboutPage />
}

export default page