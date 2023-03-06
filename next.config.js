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
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
        port: '',
        //pathname: '/account123/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8082',
        //pathname: '/account123/**',
      }
    ],
  },
  // TODO no me mola esto, habra que ver una forma de quitar el jsdom
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
      // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
      net: false,
      tls: false,
      perf_hooks: false,
      child_process: false
    };

    return config;
  }
}
