import React from 'react';
import TermsAndConditionsPage from './TermsAndConditionsPage';
export const generateMetadata = () => {
    return {
        title: "Terms and Conditions - TubeViews Media",
        description: "Terms and Conditions Welcome to Tubeviews! These terms and conditions outline the rules and regulations for the use of TubeViews Media’s Website, located at www.tubeviews.co. By accessing this website we assume you accept these terms and conditions. Do not continue to use Tubeviews if you do not agree to take all of the terms and… Read More »Terms and Conditions"
    }
}

function page() {
    return <TermsAndConditionsPage />
}

export default page