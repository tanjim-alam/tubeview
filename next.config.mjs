/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [],
        deviceSizes: [320, 420, 768, 1024, 1200], // Device sizes for responsive images
        imageSizes: [16, 32, 48, 64, 96], // Sizes for srcset
    }
};

export default nextConfig;
