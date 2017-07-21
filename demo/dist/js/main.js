webpackJsonp([1],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _dist = __webpack_require__(98);

var _routes = __webpack_require__(358);

var _routes2 = _interopRequireDefault(_routes);

var _middlewares = __webpack_require__(357);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _App = __webpack_require__(351);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(857);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react2.default.createElement(
  _dist.Provider,
  { router: (0, _dist.createRouter)(_routes2.default), middlewares: _middlewares2.default },
  _react2.default.createElement(_App2.default, null)
);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/core/components/Root.jsx');
}();

;

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _default = {
  REDUXFORM: {
    CHANGE: '@@redux-form/CHANGE',
    FOCUS: '@@redux-form/FOCUS',
    BLUR: '@@redux-form/BLUR'
  },
  ONBOARDING: {
    TOGGLE_TOOLTIP: 'ONBOARDING.TOGGLE_TOOLTIP',
    SET_NEXT_STEP: 'ONBOARDING.SET_NEXT_STEP'
  },
  PREONBOARDING: {
    CHANGE_ACTIVE_TAB: 'PREONBOARDING.CHANGE_ACTIVE_TAB',
    CONTINUE: 'PREONBOARDING.CONTINUE'
  },
  NOTIFICATION: {
    SHOW: 'NOTIFICATION.SHOW',
    DISMISS: 'NOTIFICATION.DISMISS'
  }
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/core/redux/actionTypes.js');
}();

;

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dist = __webpack_require__(98);

var _app = __webpack_require__(352);

var _app2 = _interopRequireDefault(_app);

var _notification = __webpack_require__(362);

var _notification2 = _interopRequireDefault(_notification);

var _posts = __webpack_require__(368);

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];
  return {
    app: (0, _app2.default)(state.app, action, state),
    notification: (0, _notification2.default)(state.notification, action, state),
    posts: (0, _posts2.default)(state.posts, action, state),
    router: (0, _dist.reducer)(state.router, action, state)
  };
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/core/redux/reducers.js');
}();

;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(115)(true);
// imports


// module
exports.push([module.i, ".App {\n  display: flex;\n  flex-direction: column;\n  min-height: inherit; }\n\n.Main {\n  display: flex;\n  flex-grow: 1;\n  height: 100%;\n  background: white; }\n\n.View {\n  width: 100%;\n  padding: 30px; }\n", "", {"version":3,"sources":["/Users/justinderrico/Projects/fans-router/example/src/app/common/components/App/src/app/common/components/App/styles.scss"],"names":[],"mappings":"AAAA;EACE,cAAa;EACb,uBAAsB;EACtB,oBAAmB,EACpB;;AAED;EACE,cAAa;EACb,aAAY;EACZ,aAAY;EACZ,kBAAiB,EAClB;;AAED;EACE,YAAW;EACX,cAAa,EACd","file":"styles.scss","sourcesContent":[".App {\n  display: flex;\n  flex-direction: column;\n  min-height: inherit;\n}\n\n.Main {\n  display: flex;\n  flex-grow: 1;\n  height: 100%;\n  background: white;\n}\n\n.View {\n  width: 100%;\n  padding: 30px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(115)(true);
// imports


// module
exports.push([module.i, ".SideBar {\n  width: 300px;\n  background: #035ea5;\n  flex-shrink: 0;\n  padding: 20px; }\n  .SideBar__logo {\n    padding: 15px 0;\n    margin-right: 40px;\n    font-size: 22px;\n    color: #5fbbe0; }\n  .SideBar__navigation {\n    margin-top: 40px; }\n  .SideBar__link {\n    display: block;\n    padding: 15px 0 7px;\n    margin-top: 10px;\n    color: white;\n    border-bottom: 4px solid #012541;\n    text-decoration: none; }\n    .SideBar__link a {\n      display: block;\n      text-decoration: none;\n      color: white; }\n      .SideBar__link a:hover {\n        background: #047bd7; }\n  .SideBar__link-text {\n    margin: auto; }\n", "", {"version":3,"sources":["/Users/justinderrico/Projects/fans-router/example/src/app/common/components/SideBar/src/app/common/components/SideBar/styles.scss"],"names":[],"mappings":"AAAA;EACE,aAAY;EACZ,oBAAmB;EACnB,eAAc;EACd,cAAa,EAoCd;EAlCC;IACE,gBAAe;IACf,mBAAkB;IAClB,gBAAe;IACf,eAAc,EACf;EAED;IACE,iBAAgB,EACjB;EAED;IACE,eAAc;IACd,oBAAmB;IACnB,iBAAgB;IAChB,aAAY;IACZ,iCAA6C;IAC7C,sBAAqB,EAYtB;IAlBD;MASI,eAAc;MACd,sBAAqB;MACrB,aAAY,EAKb;MAhBH;QAcM,oBAAiC,EAClC;EAKL;IACE,aAAY,EACb","file":"styles.scss","sourcesContent":[".SideBar {\n  width: 300px;\n  background: #035ea5;\n  flex-shrink: 0;\n  padding: 20px;\n\n  &__logo {\n    padding: 15px 0;\n    margin-right: 40px;\n    font-size: 22px;\n    color: #5fbbe0;\n  }\n\n  &__navigation {\n    margin-top: 40px;\n  }\n\n  &__link {\n    display: block;\n    padding: 15px 0 7px;\n    margin-top: 10px;\n    color: white;\n    border-bottom: 4px solid darken(#035ea5, 20%);\n    text-decoration: none;\n\n    a {\n      display: block;\n      text-decoration: none;\n      color: white;\n\n      &:hover {\n        background: lighten(#035ea5, 10%);\n      }\n    }\n\n  }\n\n  &__link-text {\n    margin: auto;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(115)(true);
// imports


// module
exports.push([module.i, ".TopBar {\n  background: #5fbbe0;\n  padding: 5px 20px;\n  display: flex; }\n", "", {"version":3,"sources":["/Users/justinderrico/Projects/fans-router/example/src/app/common/components/TopBar/src/app/common/components/TopBar/styles.scss"],"names":[],"mappings":"AAAA;EACE,oBAAmB;EACnB,kBAAiB;EACjB,cAAa,EACd","file":"styles.scss","sourcesContent":[".TopBar {\n  background: #5fbbe0;\n  padding: 5px 20px;\n  display: flex;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(115)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Poppins:300,500);", ""]);

// module
exports.push([module.i, "/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n/* Document\n   ========================================================================== */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  line-height: 1.15;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/* Remove default select arrow in IE11. */\nselect::-ms-expand {\n  display: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n\n/* Colors */\nbody,\nhtml {\n  min-height: 100vh;\n  width: 100%; }\n\n#app {\n  min-height: inherit; }\n\n* {\n  box-sizing: border-box; }\n\ninput,\nselect {\n  border: 0;\n  font-family: Poppins, Helvetica, \"Helvetica Neue\", sans-serif;\n  font-weight: 300; }\n\ninput {\n  padding: 0; }\n\nol,\nul {\n  margin: 0;\n  padding: 0;\n  list-style-position: inside;\n  list-style-type: none; }\n\ninput[type=checkbox] {\n  cursor: pointer;\n  transform: scale(1.3);\n  width: 18px; }\n\n@keyframes fadeInSlideLeft {\n  from {\n    transform: translateX(20px);\n    opacity: 0; }\n  to {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadeOutSlideRight {\n  from {\n    transform: translateX(0);\n    opacity: 1; }\n  to {\n    transform: translateX(20px);\n    opacity: 0; } }\n\n@keyframes fadeInSlideUp {\n  from {\n    transform: translateY(10px);\n    opacity: 0; }\n  to {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n", "", {"version":3,"sources":["/Users/justinderrico/Projects/fans-router/example/src/scss/src/scss/normalize.scss","/Users/justinderrico/Projects/fans-router/example/src/scss/app.scss","/Users/justinderrico/Projects/fans-router/example/src/scss/src/scss/variables.scss","/Users/justinderrico/Projects/fans-router/example/src/scss/src/scss/common.scss","/Users/justinderrico/Projects/fans-router/example/src/scss/src/scss/animations.scss"],"names":[],"mappings":"AAAA,4EAA4E;AAE5E;;;;;GAKG;AAEH;gFACgF;AAEhF;EACE,wBAAuB;EAAG,OAAO;EACjC,kBAAiB;EAAG,OAAO;EAC3B,2BAA0B;EAAG,OAAO;EACpC,+BAA8B;EAAG,OAAO,EACzC;;AAED;gFACgF;AAEhF;;GAEG;AAEH;EACE,UAAS,EACV;;AAED;;GAEG;AAEH;;;;;;EAME,eAAc,EACf;;AAED;;;GAGG;AAEH;EACE,eAAc;EACd,iBAAgB,EACjB;;AAED;gFACgF;AAEhF;;;GAGG;AAEH;;;EAEO,OAAO;EACZ,eAAc,EACf;;AAED;;GAEG;AAEH;EACE,iBAAgB,EACjB;;AAED;;;GAGG;AAEH;EACE,wBAAuB;EAAG,OAAO;EACjC,UAAS;EAAG,OAAO;EACnB,kBAAiB;EAAG,OAAO,EAC5B;;AAED;;;GAGG;AAEH;EACE,kCAAiC;EAAG,OAAO;EAC3C,eAAc;EAAG,OAAO,EACzB;;AAED;gFACgF;AAEhF;;;GAGG;AAEH;EACE,8BAA6B;EAAG,OAAO;EACvC,sCAAqC;EAAG,OAAO,EAChD;;AAED;;;GAGG;AAEH;;EAEE,iBAAgB,EACjB;;AAED;;;GAGG;AAEH;EACE,oBAAmB;EAAG,OAAO;EAC7B,2BAA0B;EAAG,OAAO;EACpC,kCAAiC;EAAG,OAAO,EAC5C;;AAED;;GAEG;AAEH;;EAEE,qBAAoB,EACrB;;AAED;;GAEG;AAEH;;EAEE,oBAAmB,EACpB;;AAED;;;GAGG;AAEH;;;EAGE,kCAAiC;EAAG,OAAO;EAC3C,eAAc;EAAG,OAAO,EACzB;;AAED;;GAEG;AAEH;EACE,mBAAkB,EACnB;;AAED;;GAEG;AAEH;EACE,uBAAsB;EACtB,YAAW,EACZ;;AAED;;GAEG;AAEH;EACE,eAAc,EACf;;AAED;;;GAGG;AAEH;;EAEE,eAAc;EACd,eAAc;EACd,mBAAkB;EAClB,yBAAwB,EACzB;;AAED;EACE,gBAAe,EAChB;;AAED;EACE,YAAW,EACZ;;AAED;gFACgF;AAEhF;;GAEG;AAEH;;EAEE,sBAAqB,EACtB;;AAED;;GAEG;AAEH;EACE,cAAa;EACb,UAAS,EACV;;AAED;;GAEG;AAEH;EACE,mBAAkB,EACnB;;AAED;;GAEG;AAEH;EACE,iBAAgB,EACjB;;AAED;gFACgF;AAEhF;;;GAGG;AAEH;;;;;EAKE,wBAAuB;EAAG,OAAO;EACjC,gBAAe;EAAG,OAAO;EACzB,kBAAiB;EAAG,OAAO;EAC3B,UAAS;EAAG,OAAO,EACpB;;AAED;;;GAGG;AAEH;;EACQ,OAAO;EACb,kBAAiB,EAClB;;AAED;;;GAGG;AAEH;;EACS,OAAO;EACd,qBAAoB,EACrB;;AAED,0CAA0C;AAC1C;EACE,cAAa,EACd;;AAED;;;;GAIG;AAEH;;;;EAIE,2BAA0B;EAAG,OAAO,EACrC;;AAED;;GAEG;AAEH;;;;EAIE,mBAAkB;EAClB,WAAU,EACX;;AAED;;GAEG;AAEH;;;;EAIE,+BAA8B,EAC/B;;AAED;;GAEG;AAEH;EACE,0BAAyB;EACzB,cAAa;EACb,+BAA8B,EAC/B;;AAED;;;;;GAKG;AAEH;EACE,uBAAsB;EAAG,OAAO;EAChC,eAAc;EAAG,OAAO;EACxB,eAAc;EAAG,OAAO;EACxB,gBAAe;EAAG,OAAO;EACzB,WAAU;EAAG,OAAO;EACpB,oBAAmB;EAAG,OAAO,EAC9B;;AAED;;;GAGG;AAEH;EACE,sBAAqB;EAAG,OAAO;EAC/B,yBAAwB;EAAG,OAAO,EACnC;;AAED;;GAEG;AAEH;EACE,eAAc,EACf;;AAED;;;GAGG;ACxCH;;ED4CE,uBAAsB;EAAG,OAAO;EAChC,WAAU;EAAG,OAAO,EACrB;;AAED;;GAEG;ACxCH;;ED4CE,aAAY,EACb;;AAED;;;GAGG;AC1CH;ED6CE,8BAA6B;EAAG,OAAO;EACvC,qBAAoB;EAAG,OAAO,EAC/B;;AAED;;GAEG;AC1CH;;ED8CE,yBAAwB,EACzB;;AAED;;;GAGG;AAEH;EACE,2BAA0B;EAAG,OAAO;EACpC,cAAa;EAAG,OAAO,EACxB;;AAED;gFACgF;AAEhF;;;GAGG;AAEH;;EAEE,eAAc,EACf;;AAED;;GAEG;AAEH;EACE,mBAAkB,EACnB;;AAED;gFACgF;AAEhF;;GAEG;AAEH;EACE,sBAAqB,EACtB;;AAED;;GAEG;AAEH;EACE,cAAa,EACd;;AAED;gFACgF;AAEhF;;GAEG;ACvDH;ED0DE,cAAa,EACd;;AE/cD,YAAY;ACAZ;;EAEE,kBAAiB;EACjB,YAAW,EACZ;;AAED;EACE,oBAAmB,EACpB;;AAED;EACE,uBAAsB,EACvB;;AAED;;EAEE,UAAS;EACT,8DDnBwD;ECoBxD,iBAAgB,EACjB;;AAED;EACE,WAAU,EACX;;AAED;;EAEE,UAAS;EACT,WAAU;EACV,4BAA2B;EAC3B,sBAAqB,EACtB;;AAED;EACE,gBAAe;EACf,sBAAqB;EAErB,YAAW,EACZ;;ACxCD;EACE;IACE,4BAA2B;IAC3B,WAAU,EAAA;EAGZ;IACE,yBAAwB;IACxB,WAAU,EAAA,EAAA;;AAId;EACE;IACE,yBAAwB;IACxB,WAAU,EAAA;EAGZ;IACE,4BAA2B;IAC3B,WAAU,EAAA,EAAA;;AAId;EACE;IACE,4BAA2B;IAC3B,WAAU,EAAA;EAGZ;IACE,yBAAwB;IACxB,WAAU,EAAA,EAAA;;AAId;EACE;IACE,WAAU,EAAA;EAGZ;IACE,WAAU,EAAA,EAAA","file":"app.scss","sourcesContent":["/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/* Remove default select arrow in IE11. */\nselect::-ms-expand {\n  display: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n","/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n/* Document\n   ========================================================================== */\n@import url(\"https://fonts.googleapis.com/css?family=Poppins:300,500\");\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  line-height: 1.15;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/* Remove default select arrow in IE11. */\nselect::-ms-expand {\n  display: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n\n/* Colors */\nbody,\nhtml {\n  min-height: 100vh;\n  width: 100%; }\n\n#app {\n  min-height: inherit; }\n\n* {\n  box-sizing: border-box; }\n\ninput,\nselect {\n  border: 0;\n  font-family: Poppins, Helvetica, \"Helvetica Neue\", sans-serif;\n  font-weight: 300; }\n\ninput {\n  padding: 0; }\n\nol,\nul {\n  margin: 0;\n  padding: 0;\n  list-style-position: inside;\n  list-style-type: none; }\n\ninput[type=checkbox] {\n  cursor: pointer;\n  transform: scale(1.3);\n  width: 18px; }\n\n@keyframes fadeInSlideLeft {\n  from {\n    transform: translateX(20px);\n    opacity: 0; }\n  to {\n    transform: translateX(0);\n    opacity: 1; } }\n\n@keyframes fadeOutSlideRight {\n  from {\n    transform: translateX(0);\n    opacity: 1; }\n  to {\n    transform: translateX(20px);\n    opacity: 0; } }\n\n@keyframes fadeInSlideUp {\n  from {\n    transform: translateY(10px);\n    opacity: 0; }\n  to {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n","$poppins: Poppins, Helvetica, 'Helvetica Neue', sans-serif;\n\n/* Colors */\n$theme-primary: #5fbbe0;\n$theme-secondary: #035ea5;\n$error: #c33;\n$success: #3c3;\n","@import url('https://fonts.googleapis.com/css?family=Poppins:300,500');\n\nbody,\nhtml {\n  min-height: 100vh;\n  width: 100%;\n}\n\n#app {\n  min-height: inherit;\n}\n\n* {\n  box-sizing: border-box;\n}\n\ninput,\nselect {\n  border: 0;\n  font-family: $poppins;\n  font-weight: 300;\n}\n\ninput {\n  padding: 0;\n}\n\nol,\nul {\n  margin: 0;\n  padding: 0;\n  list-style-position: inside;\n  list-style-type: none;\n}\n\ninput[type=checkbox] {\n  cursor: pointer;\n  transform: scale(1.3);\n  // Fix for Safari to make it larger.\n  width: 18px;\n}\n","@keyframes fadeInSlideLeft {\n  from {\n    transform: translateX(20px);\n    opacity: 0;\n  }\n\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOutSlideRight {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n\n  to {\n    transform: translateX(20px);\n    opacity: 0;\n  }\n}\n\n@keyframes fadeInSlideUp {\n  from {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Root = __webpack_require__(136);

var _Root2 = _interopRequireDefault(_Root);

var _AppContainer = __webpack_require__(353);

var _AppContainer2 = _interopRequireDefault(_AppContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  (0, _AppContainer2.default)(_Root2.default);
});

if (true) {
  /* eslint-disable global-require, no-undef */
  // This is dev-only code, require acceptable.
  module.hot.accept();
  module.hot.accept(138, function () {
    var nextRootReducer = __webpack_require__(138).default;
    providedStore.replaceReducer(nextRootReducer);
    (0, _AppContainer2.default)(_Root2.default);
  });
  module.hot.accept(136, function () {
    (0, _AppContainer2.default)(__webpack_require__(136).default);
  });
  /* eslint-enable global-require, no-undef */
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(33);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(854);

var _Notification = __webpack_require__(361);

var _Notification2 = _interopRequireDefault(_Notification);

var _Posts = __webpack_require__(367);

var _Posts2 = _interopRequireDefault(_Posts);

var _Post = __webpack_require__(366);

var _Post2 = _interopRequireDefault(_Post);

var _Welcome = __webpack_require__(350);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _TopBar = __webpack_require__(349);

var _TopBar2 = _interopRequireDefault(_TopBar);

var _SideBar = __webpack_require__(348);

var _SideBar2 = _interopRequireDefault(_SideBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderView = function renderView(route) {
  switch (route.name) {
    case 'root':
      return _react2.default.createElement(_Welcome2.default, null);
    case 'root.posts':
      return _react2.default.createElement(_Posts2.default, null);
    case 'root.posts.details':
      return _react2.default.createElement(_Post2.default, { id: route.params.postId });
    default:
      return null;
  }
};

var App = function App(_ref) {
  var route = _ref.route;
  return _react2.default.createElement(
    'div',
    { className: 'App' },
    _react2.default.createElement(_Notification2.default, null),
    _react2.default.createElement(_TopBar2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'Main' },
      _react2.default.createElement(_SideBar2.default, null),
      renderView(route)
    )
  );
};

App.propTypes = {
  route: _propTypes2.default.shape().isRequired
};

var _default = App;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(renderView, 'renderView', '/Users/justinderrico/Projects/fans-router/example/src/app/common/components/App/index.jsx');

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/justinderrico/Projects/fans-router/example/src/app/common/components/App/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/common/components/App/index.jsx');
}();

;

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _dist = __webpack_require__(98);

__webpack_require__(855);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SideBar = function SideBar() {
  return _react2.default.createElement(
    'div',
    { className: 'SideBar' },
    _react2.default.createElement(
      'div',
      { className: 'SideBar__logo' },
      'FANS Router Example'
    ),
    _react2.default.createElement(
      'div',
      { className: 'SideBar__navigation' },
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          { className: 'SideBar__link' },
          _react2.default.createElement(
            _dist.Link,
            { to: '/' },
            'Home'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'SideBar__link' },
          _react2.default.createElement(
            _dist.Link,
            { to: '/posts' },
            'Posts'
          )
        )
      )
    )
  );
};

var _default = SideBar;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SideBar, 'SideBar', '/Users/justinderrico/Projects/fans-router/example/src/app/common/components/SideBar/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/common/components/SideBar/index.jsx');
}();

;

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(856);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopBar = function TopBar() {
  return _react2.default.createElement('div', { className: 'TopBar' });
};

var _default = TopBar;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TopBar, 'TopBar', '/Users/justinderrico/Projects/fans-router/example/src/app/common/components/TopBar/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/common/components/TopBar/index.jsx');
}();

;

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paragraphs = ['Welcome to the wonderful world of Lorem ipsum dolor sit amet! Consectetur adipiscing elit. Utrum igitur tibi litteram videor an totas paginas commovere? Quantum Aristoxeni ingenium consumptum videmus in musicis? Duo Reges: constructio interrete. Ut in geometria, prima si dederis, danda sunt omnia. Iam illud quale tandem est, bona praeterita non effluere sapienti, mala meminisse non oportere? Summum a vobis bonum voluptas dicitur.', 'Quis est enim, in quo sit cupiditas, quin recte cupidus dici possit? Quod eo liquidius faciet, si perspexerit rerum inter eas verborumne sit controversia. Iam contemni non poteris. Omnes enim iucundum motum, quo sensus hilaretur. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Sit hoc ultimum bonorum, quod nunc a me defenditur; Vide, quantum, inquam, fallare, Torquate. An dolor longissimus quisque miserrimus, voluptatem non optabiliorem diuturnitas facit?', 'Negat esse eam, inquit, propter se expetendam. Propter nos enim illam, non propter eam nosmet ipsos diligimus. Quantum Aristoxeni ingenium consumptum videmus in musicis? Quae quidem sapientes sequuntur duce natura tamquam videntes;'].map(function (text, i) {
  return _react2.default.createElement(
    'p',
    { key: i.toString() },
    text
  );
});

var Welcome = function Welcome() {
  return _react2.default.createElement(
    'div',
    { className: 'View' },
    _react2.default.createElement(
      'h1',
      null,
      'Welcome !'
    ),
    paragraphs
  );
};

var _default = Welcome;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(paragraphs, 'paragraphs', '/Users/justinderrico/Projects/fans-router/example/src/app/common/components/Welcome.jsx');

  __REACT_HOT_LOADER__.register(Welcome, 'Welcome', '/Users/justinderrico/Projects/fans-router/example/src/app/common/components/Welcome.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/common/components/Welcome.jsx');
}();

;

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(95);

var _App = __webpack_require__(347);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapState = function mapState(state) {
  return {
    route: state.router.route,
    showNotification: !!state.notification.type
  };
};

var _default = (0, _reactRedux.connect)(mapState)(_App2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/justinderrico/Projects/fans-router/example/src/app/common/containers/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/common/containers/App.js');
}();

;

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(137);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {}; // Constants

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case _actionTypes2.default.NOTIFICATION.SHOW:
      return state;

    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/justinderrico/Projects/fans-router/example/src/app/common/reducers/app.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/common/reducers/app.js');
}();

;

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(186);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(95);

var _reactHotLoader = __webpack_require__(807);

var _store = __webpack_require__(356);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(Component) {
  _reactDom2.default.render(_react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: (0, _store2.default)() },
      Component
    )
  ), document.getElementById('app'));
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/core/components/AppContainer.jsx');
}();

;

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxLogger = __webpack_require__(845);

// redux-logger config
var _default = (0, _reduxLogger.createLogger)({
  timestamp: false,
  collapsed: true,
  diff: true
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/core/redux/logger.js');
}();

;

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _posts = __webpack_require__(363);

var _default = function _default(store) {
  return function (next) {
    return function (action) {
      var interceptables = ['@@fans-router/NAVIGATE.START', '@@fans-router/INITIALIZE.COMPLETE'];
      if (interceptables.includes(action.type) && action.route.name.includes('root.posts')) {
        store.dispatch((0, _posts.updatePosts)());
      }
      return next(action);
    };
  };
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/core/redux/middlewares/transition.js');
}();

;

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(319);

var _reduxThunk = __webpack_require__(846);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _transition = __webpack_require__(355);

var _transition2 = _interopRequireDefault(_transition);

var _logger = __webpack_require__(354);

var _logger2 = _interopRequireDefault(_logger);

var _reducers = __webpack_require__(138);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_reduxThunk2.default, _transition2.default];

if (true) {
  middlewares.push(_logger2.default);
}

var _default = function _default() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _redux.createStore)(_reducers2.default, initialState, _redux.applyMiddleware.apply(undefined, middlewares));
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(middlewares, 'middlewares', '/Users/justinderrico/Projects/fans-router/example/src/app/core/redux/store.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/core/redux/store.js');
}();

;

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(372);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [{
  to: ['root.posts'],
  call: function call() {
    return new _promise2.default(function (resolve) {
      return setTimeout(function () {
        return resolve();
      }, 1000);
    });
  },
  onResolve: function onResolve(result, route, dispatch, state, next) {
    next();
  }
}];
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/core/router/middlewares.js');
}();

;

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _default = [{
  name: 'root',
  path: '/',
  routes: [{
    name: 'posts',
    path: '/posts',
    routes: [{
      name: 'details',
      path: '/:postId'
    }]
  }]
}];
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/core/router/routes.js');
}();

;

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showErrorNotification = exports.showSuccessNotification = exports.dismissNotification = exports.showNotification = undefined;

var _actionTypes = __webpack_require__(137);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = null;
exports.default = _default;
var showNotification = exports.showNotification = function showNotification(msgType, text) {
  return {
    type: _actionTypes2.default.NOTIFICATION.SHOW,
    msgType: msgType,
    text: text
  };
};

var dismissNotification = exports.dismissNotification = function dismissNotification() {
  return {
    type: _actionTypes2.default.NOTIFICATION.DISMISS
  };
};

var showSuccessNotification = exports.showSuccessNotification = function showSuccessNotification(text) {
  return {
    type: _actionTypes2.default.NOTIFICATION.SHOW,
    msgType: 'success',
    text: text
  };
};

var showErrorNotification = exports.showErrorNotification = function showErrorNotification(text) {
  return {
    type: _actionTypes2.default.NOTIFICATION.SHOW,
    msgType: 'success',
    text: text
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(showNotification, 'showNotification', '/Users/justinderrico/Projects/fans-router/example/src/app/notification/actions/notification.js');

  __REACT_HOT_LOADER__.register(dismissNotification, 'dismissNotification', '/Users/justinderrico/Projects/fans-router/example/src/app/notification/actions/notification.js');

  __REACT_HOT_LOADER__.register(showSuccessNotification, 'showSuccessNotification', '/Users/justinderrico/Projects/fans-router/example/src/app/notification/actions/notification.js');

  __REACT_HOT_LOADER__.register(showErrorNotification, 'showErrorNotification', '/Users/justinderrico/Projects/fans-router/example/src/app/notification/actions/notification.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/notification/actions/notification.js');
}();

;

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(373);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(33);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(376);

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSTransitionGroup = __webpack_require__(825);

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = function Notification(_ref) {
  var dismiss = _ref.dismiss,
      type = _ref.type,
      text = _ref.text;

  var classes = (0, _classnames3.default)((0, _defineProperty3.default)({
    Notification: true
  }, 'Notification--' + type, true));

  var renderNotification = function renderNotification() {
    if (!type) {
      return null;
    }

    return _react2.default.createElement(
      'div',
      { className: classes },
      _react2.default.createElement(
        'div',
        { className: 'Notification__text' },
        text
      ),
      _react2.default.createElement(
        'button',
        { className: 'Notification__button', onClick: dismiss },
        'Dismiss'
      )
    );
  };

  return _react2.default.createElement(
    _CSSTransitionGroup2.default,
    {
      transitionName: 'notification',
      component: 'div',
      transitionEnterTimeout: 400,
      transitionLeaveTimeout: 400 },
    renderNotification()
  );
};

Notification.defaultProps = {
  type: null,
  text: null
};

Notification.propTypes = {
  dismiss: _propTypes2.default.func.isRequired,
  type: _propTypes2.default.string,
  text: _propTypes2.default.string
};

var _default = Notification;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Notification, 'Notification', '/Users/justinderrico/Projects/fans-router/example/src/app/notification/components/Notification.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/notification/components/Notification.jsx');
}();

;

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(95);

var _Notification = __webpack_require__(360);

var _Notification2 = _interopRequireDefault(_Notification);

var _notification = __webpack_require__(359);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapState = function mapState(state) {
  return {
    type: state.notification.type,
    text: state.notification.text
  };
};

var mapActions = function mapActions(dispatch) {
  return {
    dismiss: function dismiss() {
      dispatch((0, _notification.dismissNotification)());
    }
  };
};

var _default = (0, _reactRedux.connect)(mapState, mapActions)(_Notification2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/justinderrico/Projects/fans-router/example/src/app/notification/containers/Notification.js');

  __REACT_HOT_LOADER__.register(mapActions, 'mapActions', '/Users/justinderrico/Projects/fans-router/example/src/app/notification/containers/Notification.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/notification/containers/Notification.js');
}();

;

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(137);

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initial = {
  text: null,
  type: null
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {

    case _actionTypes2.default.NOTIFICATION.SHOW:
      {
        return {
          text: action.text,
          type: action.msgType
        };
      }

    case _actionTypes2.default.NOTIFICATION.DISMISS:
      return {
        text: initial.text,
        type: initial.type
      };

    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initial, 'initial', '/Users/justinderrico/Projects/fans-router/example/src/app/notification/reducers/notification.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/notification/reducers/notification.js');
}();

;

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePosts = undefined;

var _rest = __webpack_require__(369);

var _default = null;
exports.default = _default;
var updatePosts = exports.updatePosts = function updatePosts() {
  return function (dispatch) {
    _rest.json.get('https://jsonplaceholder.typicode.com/posts').then(function (posts) {
      dispatch({ type: 'POSTS.UPDATE', posts: posts });
    });
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(updatePosts, 'updatePosts', '/Users/justinderrico/Projects/fans-router/example/src/app/posts/actions/posts.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/posts/actions/posts.js');
}();

;

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(33);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = function Post(_ref) {
  var post = _ref.post;
  return _react2.default.createElement(
    'div',
    { className: 'View' },
    _react2.default.createElement(
      'h1',
      null,
      'Post: ',
      post.title
    ),
    'This is post view for post with id ',
    post.id,
    '.'
  );
};

Post.defaultProps = {
  post: {}
};

Post.propTypes = {
  post: _propTypes2.default.shape()
};

var _default = Post;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Post, 'Post', '/Users/justinderrico/Projects/fans-router/example/src/app/posts/components/Post.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/posts/components/Post.jsx');
}();

;

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(33);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dist = __webpack_require__(98);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderPosts = function renderPosts(posts) {
  return posts.map(function (post, i) {
    return _react2.default.createElement(
      'li',
      { key: i.toString() },
      '* ',
      _react2.default.createElement(
        _dist.Link,
        { to: '/posts/' + post.id },
        post.title
      )
    );
  });
};

var Posts = function Posts(_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement(
    'div',
    { className: 'View' },
    _react2.default.createElement(
      'h1',
      null,
      'Posts'
    ),
    _react2.default.createElement(
      'ul',
      null,
      renderPosts(posts)
    )
  );
};

Posts.propTypes = {
  posts: _propTypes2.default.arrayOf(_propTypes2.default.shape()).isRequired
};

var _default = Posts;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(renderPosts, 'renderPosts', '/Users/justinderrico/Projects/fans-router/example/src/app/posts/components/Posts.jsx');

  __REACT_HOT_LOADER__.register(Posts, 'Posts', '/Users/justinderrico/Projects/fans-router/example/src/app/posts/components/Posts.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/posts/components/Posts.jsx');
}();

;

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(95);

var _Post = __webpack_require__(364);

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapState = function mapState(state, props) {
  return {
    post: state.posts.items.find(function (post) {
      return post.id === Number(props.id);
    })
  };
};

var _default = (0, _reactRedux.connect)(mapState)(_Post2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/justinderrico/Projects/fans-router/example/src/app/posts/containers/Post.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/posts/containers/Post.js');
}();

;

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(95);

var _Posts = __webpack_require__(365);

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapState = function mapState(state) {
  return {
    posts: state.posts.items
  };
};

var _default = (0, _reactRedux.connect)(mapState)(_Posts2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/justinderrico/Projects/fans-router/example/src/app/posts/containers/Posts.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/posts/containers/Posts.js');
}();

;

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(374);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { items: [] };
  var action = arguments[1];

  switch (action.type) {
    case 'POSTS.UPDATE':
      return (0, _extends3.default)({}, state, {
        items: action.posts
      });
    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/posts/reducers/posts.js');
}();

;

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = undefined;

var _fansRest = __webpack_require__(603);

var _default = null;
exports.default = _default;
var json = exports.json = (0, _fansRest.create)();
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(json, 'json', '/Users/justinderrico/Projects/fans-router/example/src/app/utils/rest/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/justinderrico/Projects/fans-router/example/src/app/utils/rest/index.js');
}();

;

/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(132)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(173, function() {
			var newContent = __webpack_require__(173);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(174);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(132)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(174, function() {
			var newContent = __webpack_require__(174);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(132)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(175, function() {
			var newContent = __webpack_require__(175);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(132)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(176, function() {
			var newContent = __webpack_require__(176);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(340);
__webpack_require__(341);
__webpack_require__(339);
__webpack_require__(342);
__webpack_require__(343);
module.exports = __webpack_require__(344);


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports =
/******/function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 11);
  /******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var prefix = function prefix(scope, name) {
    return '@@fans-router/' + scope + '.' + name;
  };

  var INIT = 'INITIALIZE';
  var NAV = 'NAVIGATE';

  exports.default = {
    INITIALIZE: {
      END: prefix(INIT, 'END'),
      START: prefix(INIT, 'START')
    },
    NAVIGATE: {
      CANCEL: prefix(NAV, 'CANCEL'),
      END: prefix(NAV, 'END'),
      FAILURE: prefix(NAV, 'FAILURE'),
      START: prefix(NAV, 'START')
    }
  };
  module.exports = exports['default'];

  /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var _queryString = __webpack_require__(15);

  var _errorMessages = __webpack_require__(5);

  var _errorMessages2 = _interopRequireDefault(_errorMessages);

  var _routeFactory = __webpack_require__(18);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  /**
   * Creates route object from path string
   * @param {string} route The path string
   * @param {array} routes The route context
   * @returns {object} The route object
   */
  var interpretStringRoute = function interpretStringRoute(route, nestedRoutes) {
    var _route$split = route.split('?'),
        _route$split2 = _slicedToArray(_route$split, 2),
        url = _route$split2[0],
        query = _route$split2[1];

    if (!url) {
      throw new Error(_errorMessages2.default.routeNotFound);
    }

    var nodes = url.replace(/^\/|\/$/g, '');
    if (!nodes) {
      return (0, _routeFactory.makeRouteObject)('root', '/');
    }

    try {
      var validatedPath = (0, _routeFactory.validateStringPath)(nodes.split('/'), nestedRoutes[0]);
      return (0, _routeFactory.makeRouteObject)(validatedPath.name, route, query && (0, _queryString.parse)(query), validatedPath.params);
    } catch (_ref) {
      var message = _ref.message;

      throw new Error(_errorMessages2.default.invalidNestedRoute.replace(/{.*?}/g, message));
    }
  };

  /**
   * Creates route object from path object
   * @param {object} route The path object
   * @param {array} routes The route context
   * @returns {object} The route object
   */
  var interpretRouteObject = function interpretRouteObject(route, routes) {
    if (Array.isArray(route.query) || !['object', 'undefined'].includes(_typeof(route.query))) {
      throw new Error(_errorMessages2.default.invalidQueryType);
    }

    var component = routes.find(function (r) {
      return r.name === route.name;
    });
    if (!component) {
      throw new Error(_errorMessages2.default.routeNotFound);
    }

    if (route.query && (0, _routeFactory.hasUnexpectedQueryType)(route.query)) {
      throw new Error(_errorMessages2.default.invalidQueryValue);
    }

    var params = {};
    var name = component.name,
        path = component.path;

    var reqParams = path.replace(/^\/|\/$/g, '').split('/').filter(function (p) {
      return p.startsWith(':');
    });

    if (reqParams.length > 0) {
      try {
        params = (0, _routeFactory.validateObjectPathParams)(route.params, reqParams);
      } catch (_ref2) {
        var message = _ref2.message;

        throw new Error(_errorMessages2.default.paramNotFound.replace(/{.*?}/g, message));
      }
    }

    var stringQuery = route.query ? '?' + (0, _queryString.stringify)(route.query) : '';
    return (0, _routeFactory.makeRouteObject)(name, '' + (0, _routeFactory.replacePathParamsByValues)(path, params, reqParams) + stringQuery, (0, _queryString.parse)(stringQuery), params);
  };

  /**
   * Singleton factory class
   */

  var RouteFactory = function () {
    function RouteFactory() {
      _classCallCheck(this, RouteFactory);
    }

    _createClass(RouteFactory, [{
      key: 'init',
      value: function init(routes, nestedRoutes) {
        this.routes = routes;
        this.nestedRoutes = nestedRoutes;
      }

      /**
       * Creates route object from path string or path object
       * @param {string, object} route The path string or object
       * @returns {object} The route object
       */

    }, {
      key: 'parse',
      value: function parse() {
        var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if ([null, undefined].includes(route)) {
          throw new Error(_errorMessages2.default.invalidRouteName);
        }

        var routeType = Array.isArray(route) ? 'array' : typeof route === 'undefined' ? 'undefined' : _typeof(route);

        switch (routeType) {
          case 'string':
            return interpretStringRoute(route, this.nestedRoutes);
          case 'object':
            return interpretRouteObject(route, this.routes);
          default:
            throw new Error(_errorMessages2.default.invalidRouteType);
        }
      }
    }]);

    return RouteFactory;
  }();

  exports.default = new RouteFactory();
  module.exports = exports['default'];

  /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.navComplete = exports.navigate = exports.init = undefined;

  var _history = __webpack_require__(3);

  var _history2 = _interopRequireDefault(_history);

  var _routeFactory = __webpack_require__(1);

  var _routeFactory2 = _interopRequireDefault(_routeFactory);

  var _actionTypes = __webpack_require__(0);

  var _actionTypes2 = _interopRequireDefault(_actionTypes);

  var _middlewareController = __webpack_require__(9);

  var _middlewareController2 = _interopRequireDefault(_middlewareController);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.default = null;
  var init = exports.init = function init(route, routes) {
    return function (dispatch) {
      dispatch({
        type: _actionTypes2.default.INITIALIZE.START,
        route: route,
        routes: routes
      });
      dispatch({
        type: _actionTypes2.default.INITIALIZE.END,
        route: route
      });
    };
  };

  var navigate = exports.navigate = function navigate(path) {
    return function (dispatch, getState) {
      if (path === _history2.default.location.pathname) {
        return;
      }

      var route = _routeFactory2.default.parse(path);

      dispatch({
        type: _actionTypes2.default.NAVIGATE.START,
        route: route
      });

      _middlewareController2.default.execute(_routeFactory2.default.parse(path), dispatch, getState).then(function () {
        return;
      }).catch(function (e) {
        throw new Error(e);
      });
    };
  };

  var navComplete = exports.navComplete = function navComplete(route, action) {
    return {
      type: _actionTypes2.default.NAVIGATE.END,
      route: route,
      action: action
    };
  };

  /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createBrowserHistory = __webpack_require__(14);

  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var history = (0, _createBrowserHistory2.default)();

  exports.default = history;
  module.exports = exports['default'];

  /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var normalizeRoute = function normalizeRoute(route, nodeName, nodePath) {
    return {
      name: nodeName ? nodeName.concat('.', route.name) : route.name,
      path: nodePath.concat(route.path).replace('//', '/')
    };
  };

  var normalizeRoutes = function normalizeRoutes(routes) {
    var nodeName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var nodePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    return routes.reduce(function (normalized, route) {
      var normalizedRoute = normalizeRoute(route, nodeName, nodePath);
      if (route.routes) {
        return normalized.concat(normalizedRoute, normalizeRoutes(route.routes, normalizedRoute.name, normalizedRoute.path));
      }
      return normalized.concat(normalizedRoute);
    }, []);
  };

  exports.default = function (routes) {
    return normalizeRoutes(routes);
  };

  module.exports = exports['default'];

  /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    invalidRouteType: 'Unexpected route type.',
    invalidRouteName: 'Unable to parse route.',
    routeNotFound: 'Unable to find requested route name.',
    invalidQueryType: 'Unexpected query type.',
    invalidQueryValue: 'Unexpected query value.',
    paramNotFound: "Missing required dynamic parameter '{param}'.",
    invalidNestedRoute: "Invalid route: '{route}' node not found.",
    // middlewares
    invalidMWArray: 'The middlewares must be in an array.',
    invalidMWType: "Each middleware must be an object.",
    invalidMWRoute: "Route '{route}' not found for middleware.",
    requiredMWParams: "Each middleware needs the 'to' and 'call' attributes.",
    invalidTo: "The 'to' attribute can only be an array or string.",
    invalidCall: "The 'call' attribute can only be a function returning a Promise.",
    invalidFunction: 'The {param} attribute can only be an array or function.',
    noNext: "A middleware callback ('onResolve', 'onReject') did not call next()"
  };
  module.exports = exports['default'];

  /***/
},
/* 6 */
/***/function (module, exports) {

  module.exports = __webpack_require__(869);

  /***/
},
/* 7 */
/***/function (module, exports) {

  module.exports = __webpack_require__(209);

  /***/
},
/* 8 */
/***/function (module, exports) {

  module.exports = __webpack_require__(204);

  /***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _middlewareController = __webpack_require__(20);

  var _actionTypes = __webpack_require__(0);

  var _actionTypes2 = _interopRequireDefault(_actionTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  /**
   * Singleton route controller class
   */
  var MiddlewareController = function () {
    function MiddlewareController() {
      _classCallCheck(this, MiddlewareController);

      this.middlewares = [];
    }

    /**
     * Initialization of the middleware controller and validation of the middlewares
     * @param {array} middlewares The path string or object
     * @param {array} routes An array of the flat version of the routes (normalized)
     * @param {object} history The browser history object
     */

    _createClass(MiddlewareController, [{
      key: 'init',
      value: function init(middlewares, routes, history) {
        this.middlewares = (0, _middlewareController.validateMiddlewares)(middlewares, routes);
        this.routes = routes;
        this.history = history;
      }

      /**
       * Get the validated middlewares
       * @returns {object} The validated middlewares
       */

    }, {
      key: 'getMiddlewares',
      value: function getMiddlewares() {
        return this.middlewares;
      }

      /**
       * Execute each middleware sequentially for the route to be navigated
       * @param {object} route The route where the app is navigating
       * @param {function} dispatch The redux dispatch function
       * @param {function} getState The redux getState function
       * @returns {Promise} Resolved when reached the end of the middleware list without cancellation
       */

    }, {
      key: 'execute',
      value: function execute(route, dispatch, getState) {
        var _this = this;

        dispatch({
          type: _actionTypes2.default.NAVIGATE.START,
          route: route
        });

        return new Promise(function (resolve, reject) {
          (0, _middlewareController.applyMWs)((0, _middlewareController.filterMWs)(_this.middlewares, route.name), route, dispatch, getState, _this.history, resolve, reject);
        });
      }
    }]);

    return MiddlewareController;
  }();

  exports.default = new MiddlewareController();
  module.exports = exports['default'];

  /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    getRoute: function getRoute(state) {
      return state.router.route;
    },
    getRoutes: function getRoutes(state) {
      return state.router.routes;
    },
    getRouteName: function getRouteName(state) {
      return state.router.route.name;
    },
    getRoutePath: function getRoutePath(state) {
      return state.router.route.path;
    },
    getQuery: function getQuery(state) {
      return state.router.route.query;
    },
    getQueryParam: function getQueryParam(state, name) {
      return name in state.router.route.query ? state.router.route.query[name] : null;
    },
    getParam: function getParam(state, name) {
      return name in state.router.route.params ? state.router.route.params[name] : null;
    },
    getParams: function getParams(state) {
      return state.router.route.params;
    }
  };
  module.exports = exports["default"];

  /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

  module.exports = __webpack_require__(12);

  /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _actionTypes = __webpack_require__(0);

  var _actionTypes2 = _interopRequireDefault(_actionTypes);

  var _createRouter = __webpack_require__(13);

  var _createRouter2 = _interopRequireDefault(_createRouter);

  var _Provider = __webpack_require__(19);

  var _Provider2 = _interopRequireDefault(_Provider);

  var _LinkContainer = __webpack_require__(21);

  var _LinkContainer2 = _interopRequireDefault(_LinkContainer);

  var _actions = __webpack_require__(2);

  var _normalizeRoutes = __webpack_require__(4);

  var _normalizeRoutes2 = _interopRequireDefault(_normalizeRoutes);

  var _reducer = __webpack_require__(24);

  var _reducer2 = _interopRequireDefault(_reducer);

  var _selectors = __webpack_require__(10);

  var _selectors2 = _interopRequireDefault(_selectors);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.default = _extends({
    actionTypes: _actionTypes2.default,
    createRouter: _createRouter2.default,
    Link: _LinkContainer2.default,
    navigate: _actions.navigate,
    normalizeRoutes: _normalizeRoutes2.default,
    Provider: _Provider2.default,
    reducer: _reducer2.default
  }, _selectors2.default);
  module.exports = exports['default'];

  /***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _history = __webpack_require__(3);

  var _history2 = _interopRequireDefault(_history);

  var _normalizeRoutes = __webpack_require__(4);

  var _normalizeRoutes2 = _interopRequireDefault(_normalizeRoutes);

  var _routeFactory = __webpack_require__(1);

  var _routeFactory2 = _interopRequireDefault(_routeFactory);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.default = function (routes) {
    var normalizedRoutes = (0, _normalizeRoutes2.default)(routes);
    _routeFactory2.default.init(normalizedRoutes, routes);

    return {
      history: _history2.default,
      routes: normalizedRoutes
    };
  };

  module.exports = exports['default'];

  /***/
},
/* 14 */
/***/function (module, exports) {

  module.exports = __webpack_require__(872);

  /***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var strictUriEncode = __webpack_require__(16);
  var objectAssign = __webpack_require__(17);

  function encoderForArrayFormat(opts) {
    switch (opts.arrayFormat) {
      case 'index':
        return function (key, value, index) {
          return value === null ? [encode(key, opts), '[', index, ']'].join('') : [encode(key, opts), '[', encode(index, opts), ']=', encode(value, opts)].join('');
        };

      case 'bracket':
        return function (key, value) {
          return value === null ? encode(key, opts) : [encode(key, opts), '[]=', encode(value, opts)].join('');
        };

      default:
        return function (key, value) {
          return value === null ? encode(key, opts) : [encode(key, opts), '=', encode(value, opts)].join('');
        };
    }
  }

  function parserForArrayFormat(opts) {
    var result;

    switch (opts.arrayFormat) {
      case 'index':
        return function (key, value, accumulator) {
          result = /\[(\d*)\]$/.exec(key);

          key = key.replace(/\[\d*\]$/, '');

          if (!result) {
            accumulator[key] = value;
            return;
          }

          if (accumulator[key] === undefined) {
            accumulator[key] = {};
          }

          accumulator[key][result[1]] = value;
        };

      case 'bracket':
        return function (key, value, accumulator) {
          result = /(\[\])$/.exec(key);
          key = key.replace(/\[\]$/, '');

          if (!result) {
            accumulator[key] = value;
            return;
          } else if (accumulator[key] === undefined) {
            accumulator[key] = [value];
            return;
          }

          accumulator[key] = [].concat(accumulator[key], value);
        };

      default:
        return function (key, value, accumulator) {
          if (accumulator[key] === undefined) {
            accumulator[key] = value;
            return;
          }

          accumulator[key] = [].concat(accumulator[key], value);
        };
    }
  }

  function encode(value, opts) {
    if (opts.encode) {
      return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
    }

    return value;
  }

  function keysSorter(input) {
    if (Array.isArray(input)) {
      return input.sort();
    } else if ((typeof input === 'undefined' ? 'undefined' : _typeof2(input)) === 'object') {
      return keysSorter(Object.keys(input)).sort(function (a, b) {
        return Number(a) - Number(b);
      }).map(function (key) {
        return input[key];
      });
    }

    return input;
  }

  exports.extract = function (str) {
    return str.split('?')[1] || '';
  };

  exports.parse = function (str, opts) {
    opts = objectAssign({ arrayFormat: 'none' }, opts);

    var formatter = parserForArrayFormat(opts);

    // Create an object with no prototype
    // https://github.com/sindresorhus/query-string/issues/47
    var ret = Object.create(null);

    if (typeof str !== 'string') {
      return ret;
    }

    str = str.trim().replace(/^(\?|#|&)/, '');

    if (!str) {
      return ret;
    }

    str.split('&').forEach(function (param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      // Firefox (pre 40) decodes `%3D` to `=`
      // https://github.com/sindresorhus/query-string/pull/37
      var key = parts.shift();
      var val = parts.length > 0 ? parts.join('=') : undefined;

      // missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      val = val === undefined ? null : decodeURIComponent(val);

      formatter(decodeURIComponent(key), val, ret);
    });

    return Object.keys(ret).sort().reduce(function (result, key) {
      var val = ret[key];
      if (Boolean(val) && (typeof val === 'undefined' ? 'undefined' : _typeof2(val)) === 'object' && !Array.isArray(val)) {
        // Sort object keys, not values
        result[key] = keysSorter(val);
      } else {
        result[key] = val;
      }

      return result;
    }, Object.create(null));
  };

  exports.stringify = function (obj, opts) {
    var defaults = {
      encode: true,
      strict: true,
      arrayFormat: 'none'
    };

    opts = objectAssign(defaults, opts);

    var formatter = encoderForArrayFormat(opts);

    return obj ? Object.keys(obj).sort().map(function (key) {
      var val = obj[key];

      if (val === undefined) {
        return '';
      }

      if (val === null) {
        return encode(key, opts);
      }

      if (Array.isArray(val)) {
        var result = [];

        val.slice().forEach(function (val2) {
          if (val2 === undefined) {
            return;
          }

          result.push(formatter(key, val2, result.length));
        });

        return result.join('&');
      }

      return encode(key, opts) + '=' + encode(val, opts);
    }).filter(function (x) {
      return x.length > 0;
    }).join('&') : '';
  };

  /***/
},
/* 16 */
/***/function (module, exports) {

  module.exports = __webpack_require__(914);

  /***/
},
/* 17 */
/***/function (module, exports) {

  module.exports = __webpack_require__(97);

  /***/
},
/* 18 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.validateStringPath = exports.validateObjectPathParams = exports.replacePathParamsByValues = exports.hasUnexpectedQueryType = exports.makeRouteObject = undefined;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  var _fastMemoize = __webpack_require__(6);

  var _fastMemoize2 = _interopRequireDefault(_fastMemoize);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }

  /**
   * Builds the structure of the route object
   * @param {string} name The name of the route
   * @param {object} query The url query
   * @returns {object} The route object
   */
  var makeRouteObject = exports.makeRouteObject = (0, _fastMemoize2.default)(function (name, path) {
    var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return {
      name: name,
      path: path,
      params: params,
      query: query
    };
  });

  /**
   * Checks at least 1 of the queries has an unexpected type
   * @param {object} name The queries
   * @returns {boolean} True if has errors
   */
  var hasUnexpectedQueryType = exports.hasUnexpectedQueryType = (0, _fastMemoize2.default)(function (query) {
    return Object.keys(query).some(function (r) {
      return query[r] && ['object', 'function'].includes(_typeof(query[r]));
    });
  });

  /**
   * Replaces all dynamic parameters inside path by their value
   * Example: clients/:id/edit --> clients/9/edit
   * @param {string} path The starting path
   * @param {object} params The parameters the user specified
   * @param {object} requiredParams The needed parameters in the path
   * @returns {string} The replaced path
   */
  var replacePathParamsByValues = exports.replacePathParamsByValues = (0, _fastMemoize2.default)(function (path, params, requiredParams) {
    return requiredParams.reduce(function (builtPath, curReqParam) {
      return builtPath.replace(curReqParam, params[curReqParam.slice(1, curReqParam.length)]);
    }, path);
  });

  /**
   * Validates if the user provided all the necessary parameters for this path
   * @param {object} params The parameters the user specified
   * @param {object} requiredParams The needed parameters in the path
   * @returns {object} The validated parameters
   */
  var validateObjectPathParams = exports.validateObjectPathParams = (0, _fastMemoize2.default)(function (params, requiredParams) {
    return requiredParams.map(function (p) {
      return p.slice(1, p.length);
    }).reduce(function (parameters, currentParam) {
      if (!params.hasOwnProperty(currentParam)) {
        throw new Error(currentParam);
      }

      return _extends({}, parameters, _defineProperty({}, currentParam, String(params[currentParam])));
    }, {});
  });

  /**
   * Validates and parses dynamic parameters in a string route (recursive)
   * @param {array} nodes The number of nodes remaining to travel
   * @param {object} currentNode The current valid node
   * @param {object} params The dynamic parameters
   * @param {string} name The name of the current traveled path
   * @returns {object} The name of the path and the dynamic parameters
   */
  var validateStringPath = exports.validateStringPath = (0, _fastMemoize2.default)(function () {
    var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var currentNode = arguments[1];
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'root';

    var newParams = params;

    if (nodes.length === 0) {
      return {
        params: params,
        name: name
      };
    }

    var nextNode = currentNode.routes.find(function (r) {
      var path = r.path.replace(/^\/|\/$/g, '');

      if (path.startsWith(':')) {
        if (!nodes[0]) {
          throw new Error(nodes[0]);
        }
        newParams[path.slice(1, path.length)] = nodes[0];
        return r;
      }

      if (path === nodes[0]) {
        return r;
      }

      return false;
    });

    if (!nextNode) {
      throw new Error(nodes[0]);
    }

    return validateStringPath(nodes.slice(1, nodes.length), nextNode, newParams, name.concat('.' + nextNode.name));
  });

  /***/
},
/* 19 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _react = __webpack_require__(7);

  var _react2 = _interopRequireDefault(_react);

  var _propTypes = __webpack_require__(8);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _actions = __webpack_require__(2);

  var _routeFactory = __webpack_require__(1);

  var _routeFactory2 = _interopRequireDefault(_routeFactory);

  var _middlewareController = __webpack_require__(9);

  var _middlewareController2 = _interopRequireDefault(_middlewareController);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var FansRouterProvider = function (_Component) {
    _inherits(FansRouterProvider, _Component);

    function FansRouterProvider(props, context) {
      _classCallCheck(this, FansRouterProvider);

      var _this = _possibleConstructorReturn(this, (FansRouterProvider.__proto__ || Object.getPrototypeOf(FansRouterProvider)).call(this, props, context));

      var router = props.router,
          middlewares = props.middlewares;

      _this.history = router.history;
      _this.routes = router.routes;
      /* this.history.listen((location, action) => {
       *   const route = RouteFactory.parse(location.pathname.concat(location.search));
       *   context.store.dispatch(navComplete(route, action));
       * });
       */
      _middlewareController2.default.init(middlewares, _this.routes, _this.history);
      var location = _this.history.location;

      var route = _routeFactory2.default.parse(location.pathname.concat(location.search));

      context.store.dispatch((0, _actions.init)(route, _this.routes));
      return _this;
    }

    _createClass(FansRouterProvider, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          history: this.history,
          routes: this.routes
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.Children.only(this.props.children);
      }
    }]);

    return FansRouterProvider;
  }(_react.Component);

  FansRouterProvider.propTypes = {
    children: _propTypes2.default.element.isRequired,
    router: _propTypes2.default.shape().isRequired,
    middlewares: _propTypes2.default.arrayOf(_propTypes2.default.shape()).isRequired
  };

  FansRouterProvider.contextTypes = {
    store: _propTypes2.default.shape().isRequired
  };

  FansRouterProvider.childContextTypes = {
    history: _propTypes2.default.shape().isRequired,
    routes: _propTypes2.default.arrayOf(_propTypes2.default.shape()).isRequired
  };

  exports.default = FansRouterProvider;
  module.exports = exports['default'];

  /***/
},
/* 20 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.applyMWs = exports.validateMiddlewares = exports.filterMWs = exports.defaultHooks = undefined;

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  var _fastMemoize = __webpack_require__(6);

  var _fastMemoize2 = _interopRequireDefault(_fastMemoize);

  var _errorMessages = __webpack_require__(5);

  var _errorMessages2 = _interopRequireDefault(_errorMessages);

  var _actionTypes = __webpack_require__(0);

  var _actionTypes2 = _interopRequireDefault(_actionTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  /**
   * Default hooks for middlewares which didn't implement them
   * @returns {object} The default hooks
   */
  var defaultHooks = exports.defaultHooks = {
    shouldNavigate: function shouldNavigate() {
      return true;
    },
    onNavigationCancelled: function onNavigationCancelled() {
      return;
    },
    onResolve: function onResolve() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args[args.length - 1]();
    },
    onReject: function onReject() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      args[args.length - 1]();
    }
  };

  var filterMWs = exports.filterMWs = (0, _fastMemoize2.default)(function (mws, routeName) {
    return mws.filter(function (mw) {
      return mw.to.includes(routeName);
    });
  });

  /**
   * Validate each middleware and their attributes
   * @param {array} middlewares The middleware array
   * @param {array} routes An array of the flat version of the routes (normalized)
   * @returns {object} The validated middlewares
   */
  var validateMiddlewares = exports.validateMiddlewares = function validateMiddlewares(middlewares, routes) {
    if (!Array.isArray(middlewares)) {
      throw new Error(_errorMessages2.default.invalidMWArray);
    }

    return middlewares.map(function (mw) {
      if ((typeof mw === 'undefined' ? 'undefined' : _typeof(mw)) !== 'object') {
        throw new Error(_errorMessages2.default.invalidMWType);
      }

      var newMw = {};

      if (!mw.hasOwnProperty('to') || !mw.hasOwnProperty('call')) {
        throw new Error(_errorMessages2.default.requiredMWParams);
      }

      newMw.to = mw.to;
      newMw.call = mw.call;

      // validate 'to' data type
      if (typeof mw.to === 'string') {
        newMw.to = [mw.to];
      } else if (Array.isArray(mw.to)) {
        if (mw.to.some(function (t) {
          return typeof t !== 'string';
        })) {
          throw new Error(_errorMessages2.default.invalidTo);
        }
      } else {
        throw new Error(_errorMessages2.default.invalidTo);
      }

      if (typeof mw.call !== 'function') {
        throw new Error(_errorMessages2.default.invalidCall);
      }

      // validate if 'to' targets an existing route
      var routeNames = routes.map(function (r) {
        return r.name;
      });
      newMw.to.forEach(function (t) {
        if (!routeNames.includes(t)) {
          throw new Error(_errorMessages2.default.invalidMWRoute.replace(/{.*?}/g, t));
        }
      });

      // validate 'onResolve'
      if (!['function', 'undefined'].includes(_typeof(mw.onResolve))) {
        throw new Error(_errorMessages2.default.invalidFunction.replace(/{.*?}/g, 'onResolve'));
      } else if (typeof mw.onResolve === 'function') {
        newMw.onResolve = mw.onResolve;
      }

      // validate 'onReject'
      if (!['function', 'undefined'].includes(_typeof(mw.onReject))) {
        throw new Error(_errorMessages2.default.invalidFunction.replace(/{.*?}/g, 'onReject'));
      } else if (typeof mw.onReject === 'function') {
        newMw.onReject = mw.onReject;
      }

      // validate 'shouldNavigate'
      if (!['function', 'undefined'].includes(_typeof(mw.shouldNavigate))) {
        throw new Error(_errorMessages2.default.invalidFunction.replace(/{.*?}/g, 'shouldNavigate'));
      } else if (typeof mw.shouldNavigate === 'function') {
        newMw.shouldNavigate = mw.shouldNavigate;
      }

      // validate 'onNavigationCancelled'
      if (!['function', 'undefined'].includes(_typeof(mw.onNavigationCancelled))) {
        throw new Error(_errorMessages2.default.invalidFunction.replace(/{.*?}/g, 'onNavigationCancelled'));
      } else if (typeof mw.onNavigationCancelled === 'function') {
        newMw.onNavigationCancelled = mw.onNavigationCancelled;
      }

      return newMw;
    });
  };

  /**
   * Loops over every middleware and checks if or not it should be called,
   * then executes its appropriate callbacks (recursive)
   * @param {array} middlewares The filtered middleware array relevant to route to navigate
   * @param {object} route The route where the app is navigating
   * @param {function} dispatch The redux dispatch function
   * @param {function} getState The redux getState function
   * @param {object} history The browser history object
   * @param {function} resolve The resolution callback of the main Promise
   * @param {function} reject The rejection callback of the main Promise
   */
  var applyMWs = exports.applyMWs = function applyMWs(middlewares, route, dispatch, getState, history, resolve, reject) {
    var mw = middlewares[0];
    var nextMws = middlewares.slice(1, middlewares.length);

    // finished looping
    if (middlewares.length === 0) {
      dispatch({
        type: _actionTypes2.default.NAVIGATE.END,
        route: route
      });

      // change url in browser to the desired path
      history.push(route.path);
      resolve(route);
      return;
    }

    // if or not we should navigate to this route based on a middleware condition
    var shouldNavigate = mw.shouldNavigate || defaultHooks.shouldNavigate;
    if (!shouldNavigate(route, getState())) {
      dispatch({
        type: _actionTypes2.default.NAVIGATE.CANCEL,
        route: route
      });

      var onNavigationCancelled = mw.onNavigationCancelled || defaultHooks.onNavigationCancelled;
      onNavigationCancelled(route, dispatch, getState());
      resolve(route);
      return;
    }

    // if or not we should continue down the middleware list after a callback
    var willNext = false;
    var next = function next() {
      willNext = true;
    };

    // the desired call te be made before the navigation for this middleware
    mw.call(route, getState()).then(function (result) {
      var onResolve = mw.onResolve || defaultHooks.onResolve;
      onResolve(result, route, dispatch, getState(), next);
      if (willNext) {
        applyMWs(nextMws, route, dispatch, getState, history, resolve, reject);
      } else {
        reject(_errorMessages2.default.noNext);
        return;
      }
    }).catch(function (result) {
      var onReject = mw.onReject || defaultHooks.onReject;
      onReject(result, route, dispatch, getState(), next);
      if (willNext) {
        applyMWs(nextMws, route, dispatch, getState, history, resolve, reject);
      } else {
        reject(_errorMessages2.default.noNext);
        return;
      }
    });
  };

  /***/
},
/* 21 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _reactRedux = __webpack_require__(22);

  var _Link = __webpack_require__(23);

  var _Link2 = _interopRequireDefault(_Link);

  var _actions = __webpack_require__(2);

  var _selectors = __webpack_require__(10);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var mapState = function mapState(state) {
    return {
      route: (0, _selectors.getRoute)(state),
      routes: (0, _selectors.getRoutes)(state)
    };
  };

  var mapActions = function mapActions(dispatch) {
    return {
      navigate: function navigate(destination, routes) {
        dispatch((0, _actions.navigate)(destination, routes));
      }
    };
  };

  exports.default = (0, _reactRedux.connect)(mapState, mapActions)(_Link2.default);
  module.exports = exports['default'];

  /***/
},
/* 22 */
/***/function (module, exports) {

  module.exports = __webpack_require__(893);

  /***/
},
/* 23 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react = __webpack_require__(7);

  var _react2 = _interopRequireDefault(_react);

  var _propTypes = __webpack_require__(8);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var Link = function Link(_ref) {
    var children = _ref.children,
        to = _ref.to,
        navigate = _ref.navigate;

    var handleClick = function handleClick(e) {
      e.preventDefault();
      navigate(to);
    };

    return _react2.default.createElement('a', { href: to, onClick: handleClick }, children);
  };

  Link.propTypes = {
    children: _propTypes2.default.node.isRequired,
    to: _propTypes2.default.string.isRequired,
    navigate: _propTypes2.default.func.isRequired
  };

  exports.default = Link;
  module.exports = exports['default'];

  /***/
},
/* 24 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _actionTypes = __webpack_require__(0);

  var _actionTypes2 = _interopRequireDefault(_actionTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var initial = {
    route: null,
    routes: []
  };

  exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
    var action = arguments[1];

    switch (action.type) {
      case _actionTypes2.default.INITIALIZE.START:
        return _extends({}, state, {
          route: action.route,
          routes: action.routes
        });

      case _actionTypes2.default.NAVIGATE.END:
        return _extends({}, state, {
          route: action.route
        });

      default:
        return state;
    }
  };

  module.exports = exports['default'];

  /***/
}]
/******/);

/***/ })

},[919]);
//# sourceMappingURL=main.js.map