/** @type {import('next').NextConfig} */
const nextConfig = {
  // 외부 이미지를 추가하려면 링크를 등록해야한다.
  images: {
    domains: ["images.unsplash.com", "images.pexels.com"],
  },
};

module.exports = nextConfig;
