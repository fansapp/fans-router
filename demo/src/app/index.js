import Root from './core/components/Root';
import render from './core/components/AppContainer';


document.addEventListener('DOMContentLoaded', () => {
  render(Root);
});

if (__HOT__ && module.hot) {
  /* eslint-disable global-require, no-undef */
  // This is dev-only code, require acceptable.
  module.hot.accept();
  module.hot.accept('./core/redux/reducers', () => {
    const nextRootReducer = require('./core/redux/reducers').default;
    providedStore.replaceReducer(nextRootReducer);
    render(Root);
  });
  module.hot.accept('./core/components/Root', () => {
    render(require('./core/components/Root').default);
  });
  /* eslint-enable global-require, no-undef */
}
