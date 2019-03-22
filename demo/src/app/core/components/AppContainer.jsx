import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../redux/store';


export default (Component) => {
  ReactDOM.render(
      <Provider store={store()}>
        {Component}
      </Provider>
    document.getElementById('app')
  );
};
