import express from 'express';
import fs from 'fs';
import path from 'path';
import buildConfig from '../dev/build/config';
import mw from './middlewares';


const { SERVER_PORT } = process.env;

// Get hash from this build
let hash = '';
if (buildConfig.MINIMIZE) {
  const distPath = path.join(__dirname, '../../dist');
  const hashExt = '.hash';

  const [hashKey] = fs.readdirSync(distPath).find(file => file.includes(hashExt)).split(hashExt);
  hash = `?${hashKey}` || '';
}

export default (app) => {
  app.use('/public', express.static('dist'));

  app.listen(SERVER_PORT || 9000);

  // Prevent invalid URLs
  app.use(mw.whitelist);

  app.get('*', (req, res) => {
    res.render('index', { isMinimize: buildConfig.MINIMIZE, hash });
  });
};
