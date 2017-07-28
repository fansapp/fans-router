import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import store from '../redux/store';


export default (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store()}>
        {Component}
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};
