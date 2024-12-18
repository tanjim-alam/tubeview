import React from 'react'
import YtVideoAnlyticsPage from './YtVideoAnlyticsPage'
export const generateMetadata = () => {
    return {
        title: "YouTube Video Analytics - Track Your Video Performance with GoFamy",
        description: "Monitor and analyze your YouTube video performance with GoFamy' YouTube Video Analytics. Get insights into views, engagement, demographics, and more to optimize your content strategy.",
        keywords: "YouTube Video Analytics, YouTube performance tracking, YouTube insights, video performance, GoFamy, YouTube metrics, YouTube views analysis, video engagement, YouTube audience insights"
    }
}

function page() {
    return <YtVideoAnlyticsPage />
}

export default page