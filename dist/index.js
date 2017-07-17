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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _queryString = __webpack_require__(10);

var _constants = __webpack_require__(13);

var _routerFactory = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Creates route object from path string
 * @param {string} route The path string
 * @param {array} routes The route context
 * @returns {object} The route object
*/
var interpretStringRoute = function interpretStringRoute(route, routes, nestedRoutes) {
  var _route$split = route.split('?'),
      _route$split2 = _slicedToArray(_route$split, 2),
      url = _route$split2[0],
      query = _route$split2[1];

  var nodes = url.replace(/^\/|\/$/g, '');

  if (!nodes) {
    throw new Error(_constants.errorMessages.routeNotFound);
  }

  try {
    var validatedPath = (0, _routerFactory.validateStringPath)(nodes.split('/'), nestedRoutes[0]);
    return (0, _routerFactory.makeRouteObject)(validatedPath.name, route, query && (0, _queryString.parse)(query), validatedPath.params);
  } catch (_ref) {
    var message = _ref.message;

    throw new Error(_constants.errorMessages.invalidNestedRoute.replace(/{.*?}/g, '\'' + message + '\''));
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
    throw new Error(_constants.errorMessages.invalidQueryType);
  }

  var component = routes.find(function (r) {
    return r.name === route.name;
  });
  if (!component) {
    throw new Error(_constants.errorMessages.routeNotFound);
  }

  if (route.query && (0, _routerFactory.hasUnexpectedQueryType)(route.query)) {
    throw new Error(_constants.errorMessages.invalidQueryValue);
  }

  var params = {};
  var name = component.name,
      path = component.path;

  var reqParams = path.replace(/^\/|\/$/g, '').split('/').filter(function (p) {
    return p.startsWith(':');
  });

  if (reqParams.length > 0) {
    try {
      params = (0, _routerFactory.validateObjectPathParams)(route.params, reqParams);
    } catch (_ref2) {
      var message = _ref2.message;

      throw new Error(_constants.errorMessages.paramNotFound.replace(/{.*?}/g, '\'' + message + '\''));
    }
  }

  var stringQuery = route.query ? '?' + (0, _queryString.stringify)(route.query) : '';
  return (0, _routerFactory.makeRouteObject)(name, '' + (0, _routerFactory.replacePathParamsByValues)(path, params, reqParams) + stringQuery, (0, _queryString.parse)(stringQuery), params);
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
        throw new Error(_constants.errorMessages.invalidRouteName);
      }

      var routeType = Array.isArray(route) ? 'array' : typeof route === 'undefined' ? 'undefined' : _typeof(route);

      switch (routeType) {
        case 'string':
          return interpretStringRoute(route, this.routes, this.nestedRoutes);
        case 'object':
          return interpretRouteObject(route, this.routes);
        default:
          throw new Error(_constants.errorMessages.invalidRouteType);
      }
    }
  }]);

  return RouteFactory;
}();

exports.default = new RouteFactory();
module.exports = exports['default'];

/***/ }),
/* 1 */
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
var init = exports.init = function init(route, routes) {
  return function (dispatch) {
    dispatch({
      type: '@@fans-router/INITIALIZE',
      route: route,
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

var navComplete = exports.navComplete = function navComplete(route, action) {
  return {
    type: '@@fans-router/NAVIGATE.COMPLETE',
    route: route,
    action: action
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = __webpack_require__(9);

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

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createRouter = __webpack_require__(8);

var _createRouter2 = _interopRequireDefault(_createRouter);

var _Provider = __webpack_require__(15);

var _Provider2 = _interopRequireDefault(_Provider);

var _LinkContainer = __webpack_require__(16);

var _LinkContainer2 = _interopRequireDefault(_LinkContainer);

var _actions = __webpack_require__(1);

var _normalizeRoutes = __webpack_require__(3);

var _normalizeRoutes2 = _interopRequireDefault(_normalizeRoutes);

var _reducer = __webpack_require__(19);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createRouter: _createRouter2.default,
  Provider: _Provider2.default,
  Link: _LinkContainer2.default,
  navigate: _actions.navigate,
  normalizeRoutes: _normalizeRoutes2.default,
  reducer: _reducer2.default
};
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _history = __webpack_require__(2);

var _history2 = _interopRequireDefault(_history);

var _normalizeRoutes = __webpack_require__(3);

var _normalizeRoutes2 = _interopRequireDefault(_normalizeRoutes);

var _routeFactory = __webpack_require__(0);

var _routeFactory2 = _interopRequireDefault(_routeFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (routes) {
  var normalizedRoutes = (0, _normalizeRoutes2.default)(routes);
  _routeFactory2.default.init(normalizedRoutes, routes);

  return {
    history: _history2.default,
    routes: normalizedRoutes
  };
};

module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(11);
var objectAssign = __webpack_require__(12);

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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("strict-uri-encode");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = null;
var errorMessages = exports.errorMessages = {
  invalidRouteType: 'Unexpected route type.',
  invalidRouteName: 'Unable to parse route.',
  routeNotFound: 'Unable to find requested route name.',
  invalidQueryType: 'Unexpected query type.',
  invalidQueryValue: 'Unexpected query value.',
  paramNotFound: 'Missing required dynamic parameter {param}.',
  invalidNestedRoute: 'Invalid route: {route} node not found.'
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Builds the structure of the route object
 * @param {string} name The name of the route
 * @param {object} query The url query
 * @returns {object} The route object
 */
var makeRouteObject = exports.makeRouteObject = function makeRouteObject(name, path) {
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return {
    name: name,
    path: path,
    params: params,
    query: query
  };
};

/**
 * Checks at least 1 of the queries has an unexpected type
 * @param {object} name The queries
 * @returns {boolean} True if has errors
 */
var hasUnexpectedQueryType = exports.hasUnexpectedQueryType = function hasUnexpectedQueryType(query) {
  return Object.keys(query).some(function (r) {
    return query[r] && ['object', 'function'].includes(_typeof(query[r]));
  });
};

/**
 * Replaces all dynamic parameters inside path by their value
 * Example: clients/:id/edit --> clients/9/edit
 * @param {string} path The starting path
 * @param {object} params The parameters the user specified
 * @param {object} requiredParams The needed parameters in the path
 * @returns {string} The replaced path
 */
var replacePathParamsByValues = exports.replacePathParamsByValues = function replacePathParamsByValues(path, params, requiredParams) {
  return requiredParams.reduce(function (builtPath, curReqParam) {
    return builtPath.replace(curReqParam, String(params[curReqParam.slice(1, curReqParam.length)]));
  }, path);
};

/**
 * Validates if the user provided all the necessary parameters for this path
 * @param {object} params The parameters the user specified
 * @param {object} requiredParams The needed parameters in the path
 * @returns {object} The validated parameters
 */
var validateObjectPathParams = exports.validateObjectPathParams = function validateObjectPathParams(params, requiredParams) {
  return requiredParams.map(function (p) {
    return p.slice(1, p.length);
  }).reduce(function (parameters, currentParam) {
    if (!params.hasOwnProperty(currentParam)) {
      throw new Error(currentParam);
    }

    return _extends({}, parameters, _defineProperty({}, currentParam, params[currentParam]));
  }, {});
};

/**
 * Validates and parses dynamic parameters in a string route
 * @param {array} splitUrl The number of nodes remaining to travel
 * @param {object} currentNode The current valid node
 * @param {object} params The dynamic parameters
 * @param {string} name The name of the current traveled path
 * @returns {object} The name of the path and the dynamic parameters
 */
var validateStringPath = exports.validateStringPath = function validateStringPath() {
  var splitUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentNode = arguments[1];
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'root';

  var newParams = params;

  if (splitUrl.length === 0) {
    return {
      params: params,
      name: name
    };
  }

  var nextNode = currentNode.routes.find(function (r) {
    var path = r.path.replace(/^\/|\/$/g, '');

    if (path.startsWith(':')) {
      newParams[path.slice(1, path.length)] = splitUrl[0];
      return r;
    }

    if (r.path.replace(/^\/|\/$/g, '') === splitUrl[0]) {
      return r;
    }

    return false;
  });

  if (!nextNode) {
    throw new Error(splitUrl[0]);
  }

  return validateStringPath(splitUrl.slice(1, splitUrl.length), nextNode, newParams, name.concat('.' + nextNode.name));
};

/***/ }),
/* 15 */
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

var _actions = __webpack_require__(1);

var _routeFactory = __webpack_require__(0);

var _routeFactory2 = _interopRequireDefault(_routeFactory);

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
      var route = _routeFactory2.default.parse(location.pathname.concat(location.search));
      context.store.dispatch((0, _actions.navComplete)(route, action));
    });

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(17);

var _Link = __webpack_require__(18);

var _Link2 = _interopRequireDefault(_Link);

var _actions = __webpack_require__(1);

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
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _routeFactory = __webpack_require__(0);

var _routeFactory2 = _interopRequireDefault(_routeFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(_ref) {
  var label = _ref.label,
      to = _ref.to,
      navigate = _ref.navigate;

  var _RouteFactory$parse = _routeFactory2.default.parse(to),
      path = _RouteFactory$parse.path;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    navigate(path);
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
  navigate: _propTypes2.default.func.isRequired
};

exports.default = Link;
module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initial = {
  route: null,
  routes: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {
    case '@@fans-router/INITIALIZE':
      return _extends({}, state, {
        route: action.route,
        routes: action.routes
      });

    case '@@fans-router/NAVIGATE.COMPLETE':
      return _extends({}, state, {
        route: action.route
      });

    default:
      return state;
  }
};

module.exports = exports['default'];

/***/ })
/******/ ]);