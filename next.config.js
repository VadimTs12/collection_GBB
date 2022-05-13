/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = {
  nextConfig,
  i18n: {
    locales: ['en', 'ja', 'cn', 'ru'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  // images: {
  //   domains: ['collection-gbb.vercel.app'],
  // },
};
