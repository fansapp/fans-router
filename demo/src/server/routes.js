import express from 'express';
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import buildConfig from '../dev/build/config';
import mw from './middlewares';

import webpackConfig from '../dev/webpack/config.dev';

const { SERVER_PORT } = process.env;


// Get hash from this build
let hash = '';
if (buildConfig.MINIMIZE) {
  const distPath = path.join(__dirname, '../../dist');
  const hashExt = '.hash';

  const [hashKey] = fs.readdirSync(distPath).find(file => file.includes(hashExt)).split(hashExt);
  hash = `?${hashKey}` || '';
}


const compiler = webpack(webpackConfig);

export default (app) => {
  if (process.env.HOT === 'true') {
    // Start a webpack-dev-server
    app.use(webpackDevMiddleware(compiler, {
      // server and middleware options
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
    }));

    // Enables HMR
    app.use(webpackHotMiddleware(compiler));
  }

  app.use('/public', express.static('dist'));

  app.listen(SERVER_PORT || 9000);

  // Prevent invalid URLs
  app.use(mw.whitelist);

  app.get('*', (req, res) => {
    res.render('index', { isMinimize: buildConfig.MINIMIZE, hash });
  });
};
