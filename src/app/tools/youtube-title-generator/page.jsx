import React from 'react'
import YtTitleGeneratorPage from './YtTitleGeneratorPage'

export const generateMetadata = () => {
    return {
        title: "YouTube Title Generator - Create Engaging Video Titles with GoFamy",
        description: "Generate catchy and optimized YouTube video titles with GoFamy' YouTube Title Generator. Improve your video visibility and boost engagement with the perfect title that attracts more viewers.",
        keywords: "YouTube Title Generator, Yt Title Generator",
        alternates: {
            canonical: 'https://www.gofamy.com/tools/youtube-title-generator',
        }
    }
}
function page() {
    return <YtTitleGeneratorPage />
}

export default page