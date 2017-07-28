import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import expressHandlebars from 'express-handlebars';

import configureRoutes from './routes';
import hbsHelpers from './helpers/hbsHelpers';

dotenv.config({ silent: true });

const app = express();
const hbs = expressHandlebars.create({
  extname: '.hbs',
  helpers: hbsHelpers,
});


app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// handlebars
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './views'));

configureRoutes(app);
