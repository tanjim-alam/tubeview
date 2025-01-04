import FbVideoDonwloaderPage from "./FbVideoDonwloaderPage";

export const generateMetadata = () => {
    return {
        title: "Facebook Video Download - Save Videos from Facebook Easily | GoFamy",
        description: "Download Facebook videos quickly and easily with our free online tool. Save any video from Facebook in HD quality with just a few clicks. Start downloading now!",
        keywords: "Facebook video download, download videos from Facebook, save Facebook video, Facebook downloader, download Facebook videos online, free Facebook video download tool",
        alternates: {
            canonical: 'https://www.gofamy.com/tools/facebook-video-downloader',
        }
    }
}

function page() {
    return <FbVideoDonwloaderPage />
}

export default page;
