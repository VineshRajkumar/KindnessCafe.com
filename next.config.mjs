/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://kindness-cafe.vercel.app/',
          },
        ];
      },
};

export default nextConfig;
