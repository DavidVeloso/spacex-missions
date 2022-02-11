/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: [
      "farm5.staticflickr.com",
      "farm8.staticflickr.com",
      "live.staticflickr.com",
      "imgur.com",
      "i.imgur.com",
      "images2.imgbox.com",
    ]
  },
}

module.exports = nextConfig
