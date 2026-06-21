/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/legacy/index.html",
        permanent: false,
      },
      {
        source: "/pitch-room.html",
        destination: "/legacy/pitch-room.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
