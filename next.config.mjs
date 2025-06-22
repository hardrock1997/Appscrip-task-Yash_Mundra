/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{hostname:"fakestoreapi.com"}],
    },
    output: "standalone",
};

export default nextConfig;
