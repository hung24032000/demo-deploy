/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
  },
  trailingSlash: true,
  output: 'standalone',
  ...nextTranslate(),
};

module.exports = nextConfig;
