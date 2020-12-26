require('dotenv').config();
const withPWA = require('next-pwa');
/*
module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  //phase === PHASE_DEVELOPMENT_SERVER && {basePath: 'test'},
  //basePath: process.env.GITHUB_PAGES ? '/nextjs_timer' : '',
});
*/
module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  basePath: process.env.GITHUB_PAGES
    ? process.env.REPOSITORY_NAME.match(/sakelog\/(.*$)/)[1]
    : '',
});
