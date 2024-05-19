/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'blog1.storage.iran.liara.space'
        }]
    },
    output: 'standalone'
};

export default nextConfig;