require('dotenv').config();
const withPWA = require('next-pwa');

module.exports = withPWA({
  assetPrefix: process.env.GITHUB_PAGES ? '/nextjs_timer' : '',
  dest: 'public',
});
