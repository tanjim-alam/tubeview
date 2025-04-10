import IgStoryViewerPage from './IgStoryViewerPage'
export const generateMetadata = () => {
    return {
        title: "Instagram Story Viewer - Untraceable Profile Exploration | GoFamy",
        description: "Use our Instagram Story Viewer to experience the freedom of anonymous Instagram story viewing. You can use this tool to view content from any public account",
        keywords: "Instagram Story Viewer, Instagram story viewer tool, Instagram story viewer online, Instagram story viewer free, Instagram story viewer app, Instagram story checker",
        alternates: {
            canonical: 'https://www.gofamy.com/tools/instagram-story-viewer',
        }
    }
}

function page() {
    return <IgStoryViewerPage />
}

export default page