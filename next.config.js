/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  basePath: '/random', //if deploying to a sub-directory, e.g. /restaurant/
  assetPrefix: '/random/', //if deploying to a sub-directory, e.g. /restaurant/
  nextConfig,
  trailingSlash: true,
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    nextImageExportOptimizer: {
      imageFolderPath: "public/images",
      exportFolderPath: "out",
      quality: 75,
    },
  },
  env: {
    storePicturesInWEBP: true,
    generateAndUseBlurImages: true,
  },
};
