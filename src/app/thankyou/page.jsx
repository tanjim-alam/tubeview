import React from 'react'
import ThankYouPage from './ThankYouPage';

export const generateMetadata = () => {
    return {
        title: "Thank You - GoFamy Media",
        alternates: {
            canonical: 'https://www.gofamy.com/thankyou',
        }
    }
}

function page() {
    return (
        <ThankYouPage />
    )
}

export default page