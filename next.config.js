require('dotenv').config();
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    scope: process.env.GITHUB_PAGES ? process.env.REPOSITORY_NAME : '/',
    sw: process.env.GITHUB_PAGES
      ? process.env.REPOSITORY_NAME + '/sw.js'
      : '/sw.js',
  },
  assetPrefix: process.env.GITHUB_PAGES ? process.env.REPOSITORY_NAME : '',
});
