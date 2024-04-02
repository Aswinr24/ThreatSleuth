/** @type {import('next').NextConfig} */
const nextConfig = {}

export default {
  webpack: (config, { isServer }) => {
    // Exclude HTML files from being processed by webpack
    config.module.rules.push({
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'file-loader', // or any other appropriate loader
    })

    return config
  },
}
