require('dotenv').config();
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  basePath: process.env.GITHUB_PAGES ? '/nextjs_timer' : '',
});
