const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "samovensdemo.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "fast.wistia.com",
      },
    ],
  },
};

export default nextConfig;
