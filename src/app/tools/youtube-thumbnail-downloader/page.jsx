import YtThumbailDownloadPage from './YtThumbailDownloadPage';
export const generateMetadata = () => {
    return {
        title: "YouTube Thumbnail and Banner Downloader | GoFamy",
        description: "GoFamy YouTube Thumbnail Downloader is a free, user-friendly tool that lets you download YouTube thumbnails and banners quickly and effortlessly",
        keywords: "YouTube Thumbnail Downloader, YouTube Banner Downloader"
    }
}
function page() {

    return <YtThumbailDownloadPage />
}

export default page;