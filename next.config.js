/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/mb/home',
        destination: '/home',
        permanent: false,
      },
    ]
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['fakeimg.pl'],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
  //     },
  //   ]
  // },
}
