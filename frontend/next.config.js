
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:3001',
  },
};

if (process.env.NETLIFY) {
  const { withNetlify } = require('@netlify/next');
  module.exports = withNetlify()(nextConfig);
} else {
  module.exports = nextConfig;
}
