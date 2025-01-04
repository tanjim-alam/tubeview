import React from 'react'
import ToolsPage from './ToolsPage'
export const generateMetadata = () => {
    return {
        title: "Free YouTube, Instagram, Facebook & TikTok Tools - GoFamy",
        description: "Discover free tools for YouTube, Instagram, Facebook, and TikTok at GoFamy. Boost your social media presence with our easy-to-use tools and grow your followers, engagement, and reach.",
        keywords: "free YouTube tools, free Instagram tools, free Facebook tools, free TikTok tools, social media tools, GoFamy, grow social media, increase followers, social media growth tools",
        alternates: {
            canonical: 'https://www.gofamy.com/tools',
        }
    }
}

function page() {
    return <ToolsPage />
}

export default page