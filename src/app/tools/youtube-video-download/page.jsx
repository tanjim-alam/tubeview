import React from 'react'
import YtVideoDownloadPage from './YtVideoDownloadPage'
export const generateMetadata = () => {
    return {
        title: "YouTube Video Downloader - 100% Free and Safe | TubeViews",
        description: "Looking to download your favorite YouTube videos? TubeViews is the easiest and fastest way to download videos directly from YouTube to your device for offline viewing",
        keywords: "YouTube Video Downloader, Yt Video Downloader, YouTube Video Save, YouTube Video Downloader Free",
        alternates: {
            canonical: 'https://www.gofamy.com/tools/youtube-video-download',
        }
    }
}
function page() {
    return <YtVideoDownloadPage />
}

export default page