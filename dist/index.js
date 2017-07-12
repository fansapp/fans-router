module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navComplete = exports.navigate = exports.init = undefined;

var _history = __webpack_require__(2);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = null;
var init = exports.init = function init(location, routes) {
  return function (dispatch) {
    dispatch({
      type: '@@fans-router/INITIALIZE',
      location: location,
      routes: routes
    });

    dispatch({
      type: '@@fans-router/INITIALIZE.COMPLETE'
    });
  };
};

var navigate = exports.navigate = function navigate(path) {
  return function (dispatch) {
    if (path === _history2.default.location.pathname) {
      return;
    }

    dispatch({
      type: '@@fans-router/NAVIGATE.START',
      path: path
    });

    _history2.default.push(path);
  };
};

var navComplete = exports.navComplete = function navComplete(location, action) {
  return {
    type: '@@fans-router/NAVIGATE.COMPLETE',
    location: location,
    action: action
  };
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _queryString = __webpack_require__(6);

var makeRouteObject = function makeRouteObject(name) {
  var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    name: name,
    params: null,
    search: search
  };
};

exports.default = function (location, routes) {
  var pathname = location.pathname,
      search = location.search;

  var component = routes.find(function (r) {
    return r.path === pathname;
  });

  if (!component) {
    return makeRouteObject('');
  }

  if (!search) {
    return makeRouteObject(component.name);
  }

  return makeRouteObject(component.name, (0, _queryString.parse)(search));
};

module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = __webpack_require__(10);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

exports.default = history;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var normalizeRoute = function normalizeRoute(route, nodeName, nodePath) {
  return {
    name: nodeName ? nodeName.concat('.', route.name) : route.name,
    path: nodePath.concat(route.path)
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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(15);
var objectAssign = __webpack_require__(16);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
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
	} else if (typeof input === 'object') {
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
	opts = objectAssign({arrayFormat: 'none'}, opts);

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
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createRouter = __webpack_require__(9);

var _createRouter2 = _interopRequireDefault(_createRouter);

var _Provider = __webpack_require__(11);

var _Provider2 = _interopRequireDefault(_Provider);

var _LinkContainer = __webpack_require__(12);

var _LinkContainer2 = _interopRequireDefault(_LinkContainer);

var _actions = __webpack_require__(0);

var _normalizeRoutes = __webpack_require__(3);

var _normalizeRoutes2 = _interopRequireDefault(_normalizeRoutes);

var _pathToRoute = __webpack_require__(1);

var _pathToRoute2 = _interopRequireDefault(_pathToRoute);

var _routeToPath = __webpack_require__(17);

var _routeToPath2 = _interopRequireDefault(_routeToPath);

var _reducer = __webpack_require__(18);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createRouter: _createRouter2.default,
  Provider: _Provider2.default,
  Link: _LinkContainer2.default,
  navigate: _actions.navigate,
  normalizeRoutes: _normalizeRoutes2.default,
  pathToRoute: _pathToRoute2.default,
  reducer: _reducer2.default,
  routeToPath: _routeToPath2.default
};
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _history = __webpack_require__(2);

var _history2 = _interopRequireDefault(_history);

var _normalizeRoutes = __webpack_require__(3);

var _normalizeRoutes2 = _interopRequireDefault(_normalizeRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (routes) {
  return {
    history: _history2.default,
    routes: (0, _normalizeRoutes2.default)(routes)
  };
};

module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FansRouterProvider = function (_Component) {
  _inherits(FansRouterProvider, _Component);

  function FansRouterProvider(props, context) {
    _classCallCheck(this, FansRouterProvider);

    var _this = _possibleConstructorReturn(this, (FansRouterProvider.__proto__ || Object.getPrototypeOf(FansRouterProvider)).call(this, props, context));

    var router = props.router;

    _this.history = router.history;
    _this.routes = router.routes;
    _this.history.listen(function (location, action) {
      context.store.dispatch((0, _actions.navComplete)(location, action));
    });
    context.store.dispatch((0, _actions.init)(_this.history.location, _this.routes));
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
  router: _propTypes2.default.shape().isRequired
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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(13);

var _Link = __webpack_require__(14);

var _Link2 = _interopRequireDefault(_Link);

var _actions = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapState = function mapState(state) {
  return {
    route: state.router.route,
    routes: state.router.routes
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

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pathToRoute = __webpack_require__(1);

var _pathToRoute2 = _interopRequireDefault(_pathToRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(_ref) {
  var label = _ref.label,
      to = _ref.to,
      navigate = _ref.navigate,
      routes = _ref.routes;

  var destination = (0, _pathToRoute2.default)(to, routes);
  var handleClick = function handleClick(e) {
    e.preventDefault();
    navigate(destination, routes);
  };

  return _react2.default.createElement(
    'a',
    { href: to, onClick: handleClick },
    label
  );
};

Link.propTypes = {
  label: _propTypes2.default.string.isRequired,
  to: _propTypes2.default.string.isRequired,
  navigate: _propTypes2.default.func.isRequired,
  routes: _propTypes2.default.arrayOf(_propTypes2.default.shape()).isRequired
};

exports.default = Link;
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("strict-uri-encode");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _queryString = __webpack_require__(6);

var makePath = function makePath(basePath) {
  var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var path = basePath;

  if (search) {
    path = path.concat('?' + (0, _queryString.stringify)(search));
  }

  return path;
};

exports.default = function (name, routes) {
  var search = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var component = routes.find(function (r) {
    return r.name === name;
  });

  if (!component) {
    return '';
  }

  if (!search) {
    return makePath(component.path);
  }

  return makePath(component.path, search);
};

module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _pathToRoute = __webpack_require__(1);

var _pathToRoute2 = _interopRequireDefault(_pathToRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initial = {
  location: null,
  route: null,
  routes: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {
    case '@@fans-router/INITIALIZE':
      return _extends({}, state, {
        location: action.location,
        route: (0, _pathToRoute2.default)(action.location, action.routes),
        routes: action.routes
      });

    case '@@fans-router/NAVIGATE.COMPLETE':
      return _extends({}, state, {
        location: action.location,
        route: (0, _pathToRoute2.default)(action.location, state.routes)
      });

    default:
      return state;
  }
};

module.exports = exports['default'];

/***/ })
/******/ ]);