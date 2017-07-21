import dotenv from 'dotenv';

dotenv.config({ silent: true });

const config = {
  BROWSERS: ['Chrome', 'Safari', 'iOS'].map(b => `last 2 ${b} versions`),
  MAPS: ['dev', 'qa'].includes(process.env.SERVER_ENV),
  MINIMIZE: ['staging', 'prod'].includes(process.env.SERVER_ENV),
};


export default {
  ...config,
  SASS_STYLE: config.MINIMIZE ? 'compressed' : 'expanded',
};
