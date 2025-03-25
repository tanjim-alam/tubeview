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
        source: '/:path*', // Matches all paths (root and nested paths)
        has: [
          {
            type: 'host',
            value: 'gofamy.com', // Ensure the request is from gofamy.com
          },
        ],
        destination: 'https://www.gofamy.com/:path*', // Redirect to the www version while preserving the path
        permanent: true, // Permanent 301 redirect
      },
    ];
  },
};

export default nextConfig;
