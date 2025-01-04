import React from 'react';
import ContactUsPage from './ContactUsPage';
export const generateMetadata = () => {
    return {
        title: "Contact Us - GoFamy Media",
        description: "GoFamy is Unique Social Media Company. They Providing Real and Active Video Views, Subscribers, Comments  Likes, Followers, and More. You can Buy cheap Social Media Services.We are a dedicated company that strives to make your social media marketing easy and convenient. This we do by selling you followers and likes, which form the standards",
        keywords: "GoFamy Contact Us, Buy YouTube Views",
        alternates: {
            canonical: 'https://www.gofamy.com/contact-us',
        }
    }
}

function page() {
    return <ContactUsPage />
}

export default page