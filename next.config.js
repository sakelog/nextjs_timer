require('dotenv').config();
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
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
module.exports = (phase, { defaultConfig }) => {
  withPWA({
    pwa: {
      dest: 'public',
    },
  });
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    };
  }

  return {
    /* config options for all phases except development here */
  };
};
