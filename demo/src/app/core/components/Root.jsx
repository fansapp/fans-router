import React from 'react';
import { createRouter, Provider as RouterProvider } from '../../../../../dist';

import routes from '../../core/router/routes';
import middlewares from '../../core/router/middlewares';

import App from '../../common/containers/App';

import '../../../scss/app.scss';


export default
  <RouterProvider router={createRouter(routes)} middlewares={middlewares}>
    <App />
  </RouterProvider>;
