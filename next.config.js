require('dotenv').config();
const withPWA = require('next-pwa');
const path = require('path');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    subdomainPrefix: process.env.GITHUB_PAGES
      ? process.env.REPOSITORY_NAME
      : '',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  basePath: process.env.GITHUB_PAGES ? process.env.REPOSITORY_NAME : '',
});
