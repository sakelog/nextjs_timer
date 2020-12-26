require('dotenv').config();
const withPWA = require('next-pwa');
module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  basePath: process.env.GITHUB_PAGES ? process.env.REPOSITORY_NAME : '',
});
*/
module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  basePath: process.env.GITHUB_PAGES
    ? process.env.GITHUB_REPOSITORY.match(/sakelog\/(.*$)/)
    : '',
});
