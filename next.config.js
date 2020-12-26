require('dotenv').config();
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    subdomainPrefix: process.env.GITHUB_PAGES
      ? process.env.REPOSITORY_NAME
      : '',
  },
  basePath: process.env.GITHUB_PAGES ? process.env.REPOSITORY_NAME : '',
});
