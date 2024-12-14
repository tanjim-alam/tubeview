import puppeteer from 'puppeteer';

async function getInstagramReelVideoUrl(instagramUrl) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Set user agent and cookies if required for private access
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    // Optionally, set cookies if you need to authenticate
    // const cookies = await getCookiesFromSomewhere();
    // await page.setCookie(...cookies);

    let videoUrl = null;

    await page.setRequestInterception(true);
    page.on('request', (request) => request.continue());

    page.on('response', async (response) => {
        const request = response.request();
        if (request.url().includes('.mp4')) {
            videoUrl = request.url();
        }
    });

    try {
        await page.goto(instagramUrl, { waitUntil: 'networkidle2' });
        await page.waitForSelector('video', { visible: true });
    } catch (error) {
        console.error('Error navigating to Instagram URL:', error);
    } finally {
        await browser.close();
    }

    if (!videoUrl) {
        throw new Error('Video URL not found');
    }

    return videoUrl;
}

export default getInstagramReelVideoUrl;
