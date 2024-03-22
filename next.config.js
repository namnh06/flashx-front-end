/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.AWS_OBJECT_URL,
                port: '',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
