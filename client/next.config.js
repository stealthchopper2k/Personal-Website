/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/link-share",
  //       destination: "https://link-share.co.uk",
  //       permanent: true, // Use permanent: true for a 301 redirect
  //       basePath: false,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
