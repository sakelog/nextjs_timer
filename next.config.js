require('dotenv').config();
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  assetPrefix: process.env.GITHUB_PAGES ? '/nextjs_timer' : '',
});
