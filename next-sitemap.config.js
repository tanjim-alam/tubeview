/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.tubeviews.co/', // Replace with your domain
    generateRobotsTxt: true, // (optional) Generate a robots.txt file
    changefreq: 'weekly', // (optional) Change frequency for all pages
    priority: 0.7, // (optional) Default priority for all pages
    sitemapSize: 5000, // Limit for sitemap files per `sitemap.xml`
}
