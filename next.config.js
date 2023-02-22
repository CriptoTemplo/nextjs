/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "Variables.scss";`
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'empezarainvertir.com',
        port: '',
        //pathname: '/account123/**',
      },
    ],
  },
}
