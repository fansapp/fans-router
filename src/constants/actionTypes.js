const prefix = (scope, name) => `@@fans-router/${scope}.${name}`;

const INIT = 'INITIALIZE';
const NAV = 'NAVIGATE';

export default {
  INITIALIZE: {
    END: prefix(INIT, 'END'),
    START: prefix(INIT, 'START'),
  },
  NAVIGATE: {
    CANCEL: prefix(NAV, 'CANCEL'),
    END: prefix(NAV, 'END'),
    FAILURE: prefix(NAV, 'FAILURE'),
    START: prefix(NAV, 'START'),
    COMPLETE: prefix(NAV, 'COMPLETE'),
  },
};
