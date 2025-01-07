/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [], // Add your allowed image domains here if needed
        deviceSizes: [320, 420, 768, 1024, 1200], // Device sizes for responsive images
        imageSizes: [16, 32, 48, 64, 96], // Sizes for srcset
    },

    // Add redirects to redirect traffic from gofamy.com to www.gofamy.com
    async redirects() {
        return [
            {
                source: '/',
                has: [
                    {
                        type: 'host',
                        value: 'gofamy.com', // Check if the request is from gofamy.com
                    },
                ],
                destination: 'https://www.gofamy.com', // Redirect to the www version
                permanent: true, // Use a permanent 301 redirect
            },
        ];
    },
};

export default nextConfig;
