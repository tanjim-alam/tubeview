import React from 'react';
import PrivacyPolicyPage from './PrivacyPolicyPage';
export const generateMetadata = () => {
    return {
        title: "Privacy Policy - GoFamy Media",
        description: "Privacy Policy for GoFamy.com At GoFamy.com, accessible from www.gofamy.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by GoFamy.co and how we use it. If you have additional questions or require more information about our Privacy Policy, do not… Read More »Privacy Policy",
        keywords: "GoFamy Privacy Policy, Buy YouTube Views",
        alternates: {
            canonical: 'https://www.gofamy.com/privacy-policy',
        }
    }
}

function page() {
    return <PrivacyPolicyPage />
}

export default page