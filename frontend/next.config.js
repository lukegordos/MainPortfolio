
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:3001',
  },
};

if (process.env.NETLIFY) {
  module.exports = require('@netlify/next')();
} else {
  module.exports = nextConfig;
}
