import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createRouter, Provider as RouterProvider } from '../../../dist';
import routes from './core/router/routes';
import middlewares from './core/router/middlewares';
import initStore from './core/redux/store';
import App from './common/components/App';


/* eslint-disable react/jsx-filename-extension */
document.addEventListener('DOMContentLoaded', () => {
  const store = initStore();
  ReactDOM.render(
    <Provider store={store}>
      <RouterProvider router={createRouter(routes)} middlewares={middlewares} store={store}>
        <App />
      </RouterProvider>
    </Provider>,
    document.getElementById('app')
  );
});
