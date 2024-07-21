/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://your-vercel-domain.vercel.app/api/:path*',
          },
        ];
      },
};

export default nextConfig;
