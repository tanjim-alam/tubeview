import React from 'react'
import YtTitleGeneratorPage from './YtTitleGeneratorPage'

export const generateMetadata = () => {
    return {
        title: "YouTube Title Generator - Create Engaging Video Titles with TubeViews",
        description: "Generate catchy and optimized YouTube video titles with TubeViews' YouTube Title Generator. Improve your video visibility and boost engagement with the perfect title that attracts more viewers.",
        keywords: "YouTube Title Generator, Yt Title Generator"
    }
}
function page() {
    return <YtTitleGeneratorPage />
}

export default page