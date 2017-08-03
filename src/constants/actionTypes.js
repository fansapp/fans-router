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
    ABORT: prefix(NAV, 'ABORT'),
    END: prefix(NAV, 'END'),
    START: prefix(NAV, 'START'),
  },
  HISTORY: {
    POP: 'POP',
    PUSH: 'PUSH',
  },
};
