(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(9);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(32)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(8);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(31);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(33);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(14);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(34);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(9);

var _helpers = __webpack_require__(35);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/app.scss
var app = __webpack_require__(44);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(3);

// EXTERNAL MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/components/LayoutProvider/style.scss
var style = __webpack_require__(45);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(1);

// CONCATENATED MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/components/LayoutProvider/index.js




function LayoutProvider(_ref) {
  var children = _ref.children,
      variant = _ref.variant;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("main", {
    id: "container"
  }, external_react_default.a.createElement("div", {
    id: variant
  }, children)));
}

/* harmony default export */ var components_LayoutProvider = (LayoutProvider);
// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(20);

// EXTERNAL MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/assets/profile_id.ico
var profile_id = __webpack_require__(21);
var profile_id_default = /*#__PURE__*/__webpack_require__.n(profile_id);

// CONCATENATED MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/components/Header/index.js


 // assets - My Favicon



function Header(_ref) {
  var title = _ref.title,
      description = _ref.description;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_react_static_["Head"], null, external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), external_react_default.a.createElement("title", null, title), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/ico",
    href: profile_id_default.a
  }), external_react_default.a.createElement("meta", {
    name: "description",
    content: description
  })));
}

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/assets/Human.svg
var Human = __webpack_require__(22);
var Human_default = /*#__PURE__*/__webpack_require__.n(Human);

// EXTERNAL MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/components/Button/style.scss
var Button_style = __webpack_require__(46);

// CONCATENATED MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/components/Button/index.js




var Button_Button = function Button(_ref) {
  var title = _ref.title,
      variant = _ref.variant,
      action = _ref.action;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("button", {
    id: variant,
    onClick: function onClick() {
      return action();
    }
  }, title));
};

/* harmony default export */ var components_Button = (Button_Button);
// EXTERNAL MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/components/NavigationBar/style.scss
var NavigationBar_style = __webpack_require__(47);

// EXTERNAL MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/assets/MyLogo.svg
var MyLogo = __webpack_require__(23);
var MyLogo_default = /*#__PURE__*/__webpack_require__.n(MyLogo);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(24);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// CONCATENATED MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/hooks/useDimensions.js



function getWindowDimensions() {
  var _window = window,
      width = _window.innerWidth,
      height = _window.innerHeight;
  return {
    width: width,
    height: height
  };
}

function useDimensions() {
  var _useState = Object(external_react_["useState"])(getWindowDimensions()),
      _useState2 = slicedToArray_default()(_useState, 2),
      windowDimensions = _useState2[0],
      setWindowDimensions = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowDimensions;
}
// CONCATENATED MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/components/NavigationBar/index.js






function NavigationBar() {
  var _useDimensions = useDimensions(),
      width = _useDimensions.width;

  console.log(width, 'WIDTH');
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("nav", {
    className: "navbar"
  }, external_react_default.a.createElement("div", {
    className: "navbar__container"
  }, external_react_default.a.createElement("div", {
    className: "navbar__container-position-left"
  }, external_react_default.a.createElement("img", {
    src: MyLogo_default.a,
    className: "navbar__logo",
    alt: "myLogo"
  })), external_react_default.a.createElement("div", {
    className: "navbar__container-position-right"
  }, external_react_default.a.createElement("div", {
    className: "navbar__title"
  }, "Home"), external_react_default.a.createElement("div", {
    className: "navbar__title"
  }, "About Me"), external_react_default.a.createElement("div", {
    className: "navbar__title"
  }, "My Project"), external_react_default.a.createElement("div", {
    className: "navbar__title"
  }, "Contact")))));
}

/* harmony default export */ var components_NavigationBar = (NavigationBar);
// EXTERNAL MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/pages/Home/style.scss
var Home_style = __webpack_require__(15);

// CONCATENATED MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/pages/Home/index.js








function Home() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(components_Header, {
    title: "Andrei Melo | Home",
    description: "n/a"
  }), external_react_default.a.createElement(components_NavigationBar, null), external_react_default.a.createElement(components_LayoutProvider, null, external_react_default.a.createElement("div", {
    className: "container__row"
  }, external_react_default.a.createElement("div", {
    className: "container__column"
  }, external_react_default.a.createElement("div", {
    className: "container__column-inner"
  }, external_react_default.a.createElement("div", {
    className: "container__title-ct1"
  }, "Hey There !"), external_react_default.a.createElement("div", {
    className: "container__title-ct2"
  }, "I\u2019m Andrei Melo"), external_react_default.a.createElement("div", {
    className: "container__title-ct3"
  }, "A Front End Developer"), external_react_default.a.createElement(components_Button, {
    title: "Contact Me",
    variant: 'button__state-contact'
  }))), external_react_default.a.createElement("div", {
    className: "container__column"
  }, external_react_default.a.createElement("img", {
    src: Human_default.a,
    id: "human-flat-ct",
    alt: "human"
  })))));
}

/* harmony default export */ var pages_Home = (Home);
// CONCATENATED MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/pages/404/index.js






function NotFound() {
  var history = Object(external_react_router_dom_["useHistory"])();
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(components_Header, {
    title: "Andrei Melo | 404 "
  }), external_react_default.a.createElement("main", {
    className: "container"
  }, external_react_default.a.createElement("section", {
    className: "container__image"
  }, external_react_default.a.createElement("section", {
    className: "container__image-clock"
  }), external_react_default.a.createElement("section", {
    className: "container__content"
  }, external_react_default.a.createElement("div", {
    className: "container__content-title"
  }, "404: Page Not Found"), external_react_default.a.createElement("div", {
    className: "container__content-subtitle"
  }, "Stop wasting your time!"), external_react_default.a.createElement(components_Button, {
    variant: "button__state-gohome",
    action: function action() {
      return history.push('/');
    },
    title: "Go to Homepage"
  })))));
}

/* harmony default export */ var _404 = (NotFound);
// EXTERNAL MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/components/Icon/style.scss
var Icon_style = __webpack_require__(51);

// EXTERNAL MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/assets/twitter_io.svg
var twitter_io = __webpack_require__(25);
var twitter_io_default = /*#__PURE__*/__webpack_require__.n(twitter_io);

// EXTERNAL MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/assets/github_io.svg
var github_io = __webpack_require__(26);
var github_io_default = /*#__PURE__*/__webpack_require__.n(github_io);

// EXTERNAL MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/assets/linkedin_io.svg
var linkedin_io = __webpack_require__(27);
var linkedin_io_default = /*#__PURE__*/__webpack_require__.n(linkedin_io);

// CONCATENATED MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/components/Icon/index.js







function Icon(_ref) {
  var source = _ref.source,
      variant = _ref.variant,
      alt = _ref.alt;

  function getSpecificIcon() {
    return {
      Twitter: twitter_io_default.a,
      Github: github_io_default.a,
      LinkedIn: linkedin_io_default.a
    };
  }

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("img", {
    src: getSpecificIcon()[source],
    className: variant,
    alt: alt
  }));
}

/* harmony default export */ var components_Icon = (Icon);
// CONCATENATED MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/components/ALink/index.js



function ALink(_ref) {
  var children = _ref.children,
      link = _ref.link,
      target = _ref.target,
      rel = _ref.rel;
  // noopener noreferrer
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("a", {
    href: link,
    target: target,
    rel: rel
  }, children));
}

/* harmony default export */ var components_ALink = (ALink);
// EXTERNAL MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/components/Footer/style.scss
var Footer_style = __webpack_require__(52);

// CONCATENATED MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/components/Footer/index.js





var Footer_Footer = function Footer() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("footer", null, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "container__content"
  }, external_react_default.a.createElement("div", {
    className: "container__outside_position"
  }, external_react_default.a.createElement("div", {
    className: "container__inside_position"
  }, external_react_default.a.createElement(components_ALink, {
    link: "https://github.com/andreimelo",
    target: "_blank",
    rel: "noopener noreferrer"
  }, external_react_default.a.createElement(components_Icon, {
    source: "Github",
    variant: "icon",
    alt: "twitterIcon"
  }))), external_react_default.a.createElement("div", {
    className: "container__inside_position"
  }, external_react_default.a.createElement(components_ALink, {
    link: "https://linkedin.com/in/andrei-melo-4a4635191",
    target: "_blank",
    rel: "noopener noreferrer"
  }, external_react_default.a.createElement(components_Icon, {
    source: "LinkedIn",
    variant: "icon",
    alt: "linkedInIcon"
  }))), external_react_default.a.createElement("div", {
    className: "container__inside_position"
  }, external_react_default.a.createElement(components_ALink, {
    link: "https://twitter.com/imdreimelo",
    target: "_blank",
    rel: "noopener noreferrer"
  }, external_react_default.a.createElement(components_Icon, {
    source: "Twitter",
    variant: "icon",
    alt: "githubIcon"
  }))))))));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: /Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/src/App.js


 // Components

 // Pages





function App() {
  return external_react_default.a.createElement(components_LayoutProvider, {
    variant: "container__content"
  }, external_react_default.a.createElement(external_react_router_dom_["BrowserRouter"], null, external_react_default.a.createElement(external_react_router_dom_["Switch"], null, external_react_default.a.createElement(external_react_router_dom_["Route"], {
    exact: true,
    path: "/",
    component: pages_Home
  }), external_react_default.a.createElement(external_react_router_dom_["Route"], {
    component: _404
  }))), external_react_default.a.createElement(components_Footer, null));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(8);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(4);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins = [{
  location: "/Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/node_modules/react-static-plugin-sass",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("/Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/node_modules/react-static/lib/browser");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_andreiagnomelo_Desktop_Projects_myOfficialPortfolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _Users_andreiagnomelo_Desktop_Projects_myOfficialPortfolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_andreiagnomelo_Desktop_Projects_myOfficialPortfolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);




Object(_Users_andreiagnomelo_Desktop_Projects_myOfficialPortfolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_andreiagnomelo_Desktop_Projects_myOfficialPortfolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/node_modules/react-static/lib/browser/components/Default404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 16, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return "Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/node_modules/react-static/lib/browser/components/Default404";
  }
}), universalOptions);
t_0.template = '/Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/node_modules/react-static/lib/browser/components/Default404'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '/Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/node_modules/react-static/lib/browser/components/Default404': t_0
}); // Not Found Template

var notFoundTemplate = "/Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/node_modules/react-static/lib/browser/components/Default404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Imports
var urlEscape = __webpack_require__(48);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(49));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(50));

// Module
exports.push([module.i, ".container{display:block;width:100%;margin:0 auto}.container__row{height:auto;margin:auto;display:flex;max-width:1300px}.container__column{flex:50% 1;height:300px}.container__column-inner{position:absolute;top:220px}.container__title-ct1{width:340px;color:#0d102d;font-weight:lighter;font-size:25px;margin-bottom:10px}.container__title-ct2{width:350px;color:#0d102d;font-weight:600;-webkit-animation:typing 2.5s steps(30, end),blink-caret 0.5s step-end infinite;animation:typing 2.5s steps(30, end),blink-caret 0.5s step-end infinite;font-size:39px;line-height:45px;overflow:hidden;border-right:0.15em solid #7f8c8d;white-space:nowrap;letter-spacing:0.15em;margin-bottom:10px}.container__title-ct3{width:390px;color:#0d102d;font-weight:lighter;font-size:35px;margin-bottom:10px}.container__image{background-image:url(" + ___CSS_LOADER_URL___0___ + ");width:520px;position:absolute;margin-top:10%;background-repeat:no-repeat;height:500px;left:0;right:0;margin-left:auto;margin-right:auto}.container__image-clock{background-image:url(" + ___CSS_LOADER_URL___1___ + ");width:150px;height:150px;margin:70px auto;background-repeat:no-repeat}.container__content{margin-top:-80px;text-align:center}.container__content-title{font-weight:700;color:#fff;font-size:34px;margin-bottom:10px}.container__content-subtitle{font-weight:500;font-size:18px;color:#fff}#human-flat-ct{margin-right:-30px}@media (min-width: 1024px) and (max-width: 1366px){.container__column-inner{text-align:center;margin-left:auto;margin-right:auto;left:0;right:0}.container__title-ct1{margin:0 auto}.container__title-ct2{margin:0 auto;width:350px}.container__title-ct3{margin:0 auto}#human-flat-ct{display:none}}@media (min-width: 768px) and (max-width: 1203px){.container__column-inner{text-align:center;margin-left:auto;margin-right:auto;left:0;right:0}.container__title-ct1{margin:0 auto}.container__title-ct2{margin:0 auto;width:350px}.container__title-ct3{margin:0 auto}#human-flat-ct{display:none}}@media (min-width: 481px) and (max-width: 767px){.container__column-inner{text-align:center;margin-left:auto;margin-right:auto;left:0;right:0}.container__title-ct1{margin:0 auto}.container__title-ct2{margin:0 auto;width:350px}.container__title-ct3{margin:0 auto}#human-flat-ct{display:none}}@media (min-width: 320px) and (max-width: 480px){.container__column-inner{text-align:center;margin-left:auto;margin-right:auto;left:0;right:0}.container__title-ct1{margin:0 auto}.container__title-ct2{margin:0 auto;width:350px}.container__title-ct3{margin:0 auto}#human-flat-ct{display:none}}@-webkit-keyframes typing{from{width:0}to{width:70%}}@keyframes typing{from{width:0}to{width:70%}}@-webkit-keyframes blink-caret{from,to{border-color:transparent}50%{border-color:#7f8c8d}}@keyframes blink-caret{from,to{border-color:transparent}50%{border-color:#7f8c8d}}\n", ""]);



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("/Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/node_modules/react-static/lib/browser/components/Default404");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7837fa3ed783695d83e8e639b61499fe.ico";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQ0IiBoZWlnaHQ9IjYwNyIgdmlld0JveD0iMCAwIDg0NCA2MDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDczLjY1MyA3Ljk0MzI0QzU3NC40NDkgNy4yOTM4NiA2OTkuMzcyIC0xOS4wNzA4IDc2Ni45MjkgMjcuOTg5QzgzNi43ODcgNzYuNjUyIDc2Ni40OTcgMTU0LjU3MiA3NzcuNzI1IDIxOS43NThDNzg1LjcxNCAyNjYuMTQyIDgzNS41OTEgMzA3LjMyNyA4MjIuOTYyIDM1My4zMDFDODA5LjE4NSA0MDMuNDU3IDc2Mi4xMDcgNDQ2LjI3MiA3MDUuNTExIDQ4Mi42NUM2MzkuMzQ0IDUyNS4xNzkgNTY3LjE2OCA1ODYuODA5IDQ3My42NTMgNTc3LjgyMUMzNzcuNzE0IDU2OC42MDEgMzYzLjI0IDQ4MS4xOTYgMjg4LjEyNyA0NDIuNTM1QzIyMC4yNTcgNDA3LjYwMiAxMTEuNzk0IDQxMS40ODQgNjIuMTQxIDM2Ni4wMTVDNi4xMTQyMSAzMTQuNzA4IC0xMy4yMjE1IDI0Ny41OTMgOS4wMTgwNyAxODYuOTQxQzMyLjI3ODkgMTIzLjUwNCA5Ni40NTEyIDY1Ljc0MTMgMTg0LjcxIDMxLjc0QzI2OS42MjQgLTAuOTcyNTczIDM3NC4wODYgOC41ODQ3MSA0NzMuNjUzIDcuOTQzMjRaIiBmaWxsPSIjNDI0MDQwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDg0LjU2MiAzNi4yMzk1QzU4Ny42NzggMzUuNTkwMSA3MTUuNDc4IDkuMjI1NDUgNzg0LjU5MSA1Ni4yODUzQzg1Ni4wNTggMTA0Ljk0OCA3ODQuMTQ5IDE4Mi44NjggNzk1LjYzNiAyNDguMDU1QzgwMy44MDkgMjk0LjQzOSA4NTQuODM1IDMzNS42MjMgODQxLjkxNSAzODEuNTk3QzgyNy44MjEgNDMxLjc1NCA3NzkuNjU5IDQ3NC41NjkgNzIxLjc2IDUxMC45NDZDNjU0LjA2OSA1NTMuNDc1IDU4MC4yMyA2MTUuMTA1IDQ4NC41NjIgNjA2LjExN0MzODYuNDEzIDU5Ni44OTcgMzcxLjYwNSA1MDkuNDkyIDI5NC43NjMgNDcwLjgzMUMyMjUuMzI5IDQzNS44OTggMTE0LjM2OSA0MzkuNzgxIDYzLjU3MjEgMzk0LjMxMUM2LjI1NTAzIDM0My4wMDUgLTEzLjUyNiAyNzUuODkgOS4yMjU3NiAyMTUuMjM3QzMzLjAyMjIgMTUxLjggOTguNjcyNSA5NC4wMzc1IDE4OC45NjQgNjAuMDM2MkMyNzUuODM0IDI3LjMyMzcgMzgyLjcwMSAzNi44ODA5IDQ4NC41NjIgMzYuMjM5NVoiIGZpbGw9IiMxRDE4MTgiIGZpbGwtb3BhY2l0eT0iMC4zOCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc3MC4wNzUgMzQwLjYzOEw3NDUuMjYgNDEwLjY4OEw3MjcuODY3IDQ2Mi4zMTlINzE3Ljk0OUw3NDEuODU4IDM0MC42MzhMNzcwLjA3NSAzNDAuNjM4WiIgZmlsbD0iIzFGMjhDRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc3Ni4yMDggMzQwLjYzOEM3NzYuNDc3IDM2NC42NzMgNzc2LjI4MiAzOTcuMDM0IDc3Ni45MTEgMzk4LjUzMkM3NzcuMzMgMzk5LjUzMSA3OTAuMzYyIDQxMC45MTEgODE2LjAwNyA0MzIuNjczTDgxMC44OTUgNDQxLjk0N0M3ODAuNDQ4IDQyMSA3NjQuNDQ3IDQwOS4xMzEgNzYyLjg5IDQwNi4zNEM3NjAuNTU1IDQwMi4xNTQgNzQ4LjgyNSAzNjMuNjMyIDc0Mi43MjIgMzQwLjYzOEg3NzYuMjA4WiIgZmlsbD0iIzJCNDRGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTgyNSA0MzkuMDE5TDgxNi4yNiA0MzEuOTAyTDgwOS4zMzEgNDQwLjcyM0M4MDguODQ4IDQ0Ny40MTggODA2LjgyNyA0NTQuOTEzIDgwMy4yNjkgNDYzLjIwN0w4MDQuODcxIDQ2NC42NDJMODE3LjQxIDQ0OC42OEw4MjAuODk5IDQ0Mi41MDJMODIxLjcgNDQzLjIyTDgyNSA0MzkuMDE5WiIgZmlsbD0iIzE5MTg0NyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcyOC43ODYgNDcyLjIzTDcyOC4yNyA0NjAuNjY3SDcxNy40MzJDNzEyLjI5MyA0NjQuNTIxIDcwNS41ODQgNDY3LjY0MSA2OTcuMzA1IDQ3MC4wMjdWNDcyLjIzSDcxNi45MTZMNzIzLjYyNSA0NzEuMTI5VjQ3Mi4yM0g3MjguNzg2WiIgZmlsbD0iIzE5MTg0NyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc2Ni4zMzMgMjYzLjI3Qzc2OC41NTcgMjYwLjU3IDc3MC4wNjIgMjU3LjI2MSA3NjkuODExIDI1My41NTRDNzY5LjA4NiAyNDIuODcyIDc1NC43MDcgMjQ1LjIyMSA3NTEuOTEgMjUwLjYxM0M3NDkuMTEyIDI1Ni4wMDQgNzQ5LjQ0NSAyNjkuNjggNzUzLjA2IDI3MC42NDRDNzU0LjUwMSAyNzEuMDI4IDc1Ny41NzMgMjcwLjA4NyA3NjAuNjk4IDI2OC4xMzlMNzU4LjczNiAyODIuNDkySDc3MC4zMjFMNzY2LjMzMyAyNjMuMjdaIiBmaWxsPSIjQjI4QjY3Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzU3LjAxOSAyNTEuMzk1Qzc1OC41OTEgMjUyLjMwNCA3NTkuNzEgMjU0LjAwOCA3NjEuMDU2IDI1Ni4yNDNDNzYxLjM4NCAyNTYuMTEgNzYxLjc0MiAyNTYuMDM3IDc2Mi4xMTUgMjU2LjAzN0M3NjMuNzE1IDI1Ni4wMzcgNzY1LjAxMiAyNTcuMzc4IDc2NS4wMTIgMjU5LjAzMkM3NjUuMDEyIDI1OS44NzIgNzY0LjY3NyAyNjAuNjMxIDc2NC4xMzkgMjYxLjE3NEM3NjQuODA5IDI2Mi4xNTIgNzY1LjU2IDI2My4xNzQgNzY2LjQyMSAyNjQuMjI5Qzc2OS42MzIgMjYyLjIzNiA3NzIuMDIxIDI1Ni40MjkgNzY4Ljk1NSAyNTAuODIzQzc2Ni4zMTYgMjM5LjU5MyA3NTEuMzY3IDI0Ni41NjMgNzQ4LjQ5MSAyNDQuNjY5Qzc0Ny44NjIgMjQ4Ljc0NCA3NDkuODkgMjUyLjAzIDc1Ny4wMTkgMjUxLjM5NVoiIGZpbGw9IiMxOTE4NDciLz4KPHJlY3QgeD0iMjA2LjM4NyIgeT0iMTA4LjA1NiIgd2lkdGg9IjUxMC43ODIiIGhlaWdodD0iMzQwLjQ1NiIgcng9IjIwIiBmaWxsPSIjRUJFMUUxIi8+CjxyZWN0IHg9IjIxOC40NDciIHk9IjE1MC4xMzUiIHdpZHRoPSI0ODYuNjYxIiBoZWlnaHQ9IjI4MC4wMTYiIHJ4PSIxMCIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNjAuMDU2IDI0NC41MzhDMTU3LjU4NCAyNDEuNTQ2IDE1NS45MTEgMjM3Ljg3OCAxNTYuMTkgMjMzLjc2OEMxNTYuOTk2IDIyMS45MjYgMTcyLjk3NyAyMjQuNTMxIDE3Ni4wODUgMjMwLjUwOEMxNzkuMTk0IDIzNi40ODUgMTc4LjgyNCAyNTEuNjQ1IDE3NC44MDcgMjUyLjcxM0MxNzMuMjA1IDI1My4xMzkgMTY5Ljc5MSAyNTIuMDk2IDE2Ni4zMTggMjQ5LjkzNkwxNjguNDk4IDI2NS44NDhIMTU1LjYyNEwxNjAuMDU2IDI0NC41MzhaIiBmaWxsPSIjQjI4QjY3Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTY0LjA2MiAyMzguMTA3QzE2My42NCAyMzcuODA4IDE2My4xMzcgMjM3LjYyNyAxNjIuNTk3IDIzNy42MjdDMTYxLjExNiAyMzcuNjI3IDE1OS45MTUgMjM4Ljk5IDE1OS45MTUgMjQwLjM5NEMxNTkuOTE1IDI0MS44NTUgMTYwLjU4NCAyNDIuOTg0IDE2MS41MzkgMjQzLjQ2M0MxNjEuMDI5IDI0NC40OTIgMTYwLjUxNiAyNDUuMjM4IDE1OS45MTUgMjQ1LjM3NEMxNTcuNTk3IDI0NS4xMzIgMTU0LjU1MSAyMzkuMTg4IDE1NC41NTEgMjM0LjMwN0MxNTQuNTUxIDIyOC45NjUgMTU4LjY3MSAyMjQuMzQ3IDE2Ni4zNTIgMjI0LjM0N0MxNzMuMjU2IDIyNC4zNDcgMTc1Ljg3MyAyMjcuMjgzIDE3Ni4wMDggMjI5Ljg4QzE3My4wNSAyMzAuNzE5IDE2Ny44ODEgMjMxLjA0MiAxNjAuNDUxIDIzMC45ODdWMjMxLjU0TDE2Ni44ODkgMjMyLjA5NEwxNjcuOTYyIDIzNS40MTRDMTY2LjI1NSAyMzUuMjgyIDE2NS4wMzUgMjM2LjQ5IDE2NC4wNjIgMjM4LjEwN1oiIGZpbGw9IiMxOTE4NDciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNDcuMDQgMzMwLjAzNUwxNjYuNDg5IDQwMC40MzVMMTgwLjY3OSA0NTIuMzI0SDE5MS4wMjhMMTc1Ljk0OSAzMzAuMDM1SDE0Ny4wNFoiIGZpbGw9IiMxOTE4NDciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNDEuODM5IDMzMC4wMzVDMTQxLjM5IDM2Ni4zMiAxMzkuODU2IDM4Ni4xMTEgMTM5LjM4MyAzODkuNDA4QzEzOC45MTEgMzkyLjcwNCAxMzEuNzY5IDQxMy42NzYgMTE3Ljk1OCA0NTIuMzI0SDEyOC42OEMxNDYuMjYyIDQxNS4yNDggMTU2LjA3NyAzOTQuMjc2IDE1OC4xMjUgMzg5LjQwOEMxNjAuMTcyIDM4NC41MzkgMTY2LjQ5MSAzNjQuNzQ4IDE3Ni4wMDggMzMwLjAzNUgxNDEuODM5WiIgZmlsbD0iIzJGMzY3NiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExNyA0NjIuMjg0TDExNy41MzYgNDUwLjY2NEgxMjguODAyQzEzNC4xNDMgNDU0LjUzNyAxNDEuMTE3IDQ1Ny42NzMgMTQ5LjcyMyA0NjAuMDdWNDYyLjI4NEgxMjkuMzM4TDEyMi4zNjQgNDYxLjE3N1Y0NjIuMjg0SDExN1oiIGZpbGw9IiMxOTE4NDciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNzkuMjI3IDQ2Mi4yODRMMTc5Ljc2MyA0NTAuNjY0SDE5MS4wMjhDMTk2LjM3IDQ1NC41MzcgMjAzLjM0NCA0NTcuNjczIDIxMS45NSA0NjAuMDdWNDYyLjI4NEgxOTEuNTY1TDE4NC41OTEgNDYxLjE3N1Y0NjIuMjg0SDE3OS4yMjdaIiBmaWxsPSIjMTkxODQ3Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTc5LjQ0OSAyODEuMTc1TDE5OC4wNjkgMjcwLjY1NkMyMDEuMTY1IDI2Ni44NjMgMjA0LjIxNiAyNjMuOTE4IDIwNy4yMjEgMjYxLjgxOUMyMDguMTM5IDI2MS40MjQgMjA5Ljc0NSAyNjEuMTg0IDIwOC4yNDMgMjYzLjkzNEMyMDYuNzQyIDI2Ni42ODMgMjA1LjI4MiAyNjkuNjQ1IDIwNi4wNDcgMjcwLjQ5MkMyMDYuODEyIDI3MS4zMzkgMjA4LjcyIDI3MC4xNTYgMjA5LjYzMyAyNzEuNTYzQzIxMC4yNDEgMjcyLjUwMiAyMDYuOTgyIDI3My45ODQgMTk5Ljg1NSAyNzYuMDFMMTg2LjMyNSAyODguNzg4TDE3OS40NDkgMjgxLjE3NVpNMjA4LjYxMSAyOTAuMDUxTDIxNi43OSAyODUuNDE2QzIxNy45MzcgMjgwLjkxMiAyMTkuMzA5IDI3OC42NDUgMjIwLjkwNSAyNzguNjE3QzIyMi4xMzEgMjc4LjAyOSAyMTkuOTk2IDI4My43MiAyMjIuMzIgMjgzLjIyN0MyMjQuNjQ1IDI4Mi43MzMgMjMwLjMxOCAyNzguMzgxIDIzMS4yOTUgMjc5LjI2NUMyMzIuNzQxIDI4MC41NzIgMjMxLjQ1MiAyODQuNTg2IDIyOS45MzMgMjg2LjU4M0MyMjcuMDkzIDI5MC4zMTUgMjI0Ljc0MiAyOTEuNTkxIDIxOC45MzEgMjkzLjI2M0MyMTUuODkzIDI5NC4xMzYgMjEyLjYwOCAyOTUuODg4IDIwOS4wNzcgMjk4LjUxN0wyMDguNjExIDI5MC4wNTFaIiBmaWxsPSIjOTk3NjU5Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcwLjM4MSAyNzguODMyQzE3Ni45MDMgMjc4Ljc2MSAxODUuNiAyNzcuMzQgMTk0Ljg3OSAyNzEuMjY0TDE5OC41MjQgMjc5LjY0N0MxOTIuMTIzIDI4Ni4yIDE4My4xMjMgMjkxLjU4MyAxNzUuMjUzIDI5MS4zNTVDMTY5LjA1MSAyOTEuMTc2IDE2NS44ODIgMjgzLjQzOCAxNzAuMzgxIDI3OC44MzJaIiBmaWxsPSIjMjAyNkEyIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTc5LjE2MyAyOTIuMjc2QzE4Ni4wODYgMjk0LjA1NyAxOTcuNjk3IDI5MS45NTcgMjEzLjk5NSAyODUuOTc1QzIxOC4wMzcgMjk0LjYwMSAyMTkuOTA2IDMwMC43NTEgMjE5LjYwMSAzMDQuNDI1QzIwNS42MiAzMTEuOTU4IDE5My42MzcgMzE1LjMxNyAxODMuNzY1IDMxNS41MzhDMTg0LjA3OSAzMjEuNTgxIDE4My4zNjYgMzI3LjMzIDE4MC45NyAzMzIuNTg0QzE3Ni4wNDYgMzQzLjM4NCAxNDcuMjEzIDMzMy4zODIgMTM3LjUxOCAzMzUuMzUxQzEzMS40NDcgMzE1LjAxMyAxNDMuMTg2IDMwNi43NDcgMTQzLjE5NSAyOTMuNzM0QzE0My4yMDYgMjc5LjQ4MyAxNTQuMjk5IDI1Ny41NDcgMTU1LjkzMSAyNTcuNTQ3TDE3MC44MTUgMjU3LjU0N0MxNzEuNjM3IDI2OC40MzEgMTc1Ljc3IDI4MC40MjYgMTc5LjE2MyAyOTIuMjc2WiIgZmlsbD0iIzk0RjZFNCIvPgo8ZWxsaXBzZSBjeD0iMjI0LjgzMiIgY3k9IjEyOC4zMzEiIHJ4PSI0Ljk2NTk0IiByeT0iNC45NzI5NyIgZmlsbD0iI0UyNTc1NyIvPgo8ZWxsaXBzZSBjeD0iMjQzLjI3NiIgY3k9IjEyOC4zMzEiIHJ4PSI0Ljk2NTk0IiByeT0iNC45NzI5NyIgZmlsbD0iI0ZGQ0M4MCIvPgo8ZWxsaXBzZSBjeD0iMjYxLjcyMiIgY3k9IjEyOC4zMzEiIHJ4PSI0Ljk2NTk0IiByeT0iNC45NzI5NyIgZmlsbD0iI0E2RjE4QyIvPgo8cGF0aCBkPSJNMjE4LjQ0NyAxNjAuMTM1QzIxOC40NDcgMTU0LjYxMiAyMjIuOTI0IDE1MC4xMzUgMjI4LjQ0NyAxNTAuMTM1SDY5NS4xMDhDNzAwLjYzMSAxNTAuMTM1IDcwNS4xMDggMTU0LjYxMiA3MDUuMTA4IDE2MC4xMzVWMTc5Ljk3M0gyMTguNDQ3VjE2MC4xMzVaIiBmaWxsPSIjMjkzNDVFIi8+CjxyZWN0IHg9IjI2Ni42ODgiIHk9IjMwNi45NzUiIHdpZHRoPSIzODQuNTA1IiBoZWlnaHQ9IjEyLjI0MTEiIHJ4PSI2LjEyMDU3IiBmaWxsPSIjRTFEREREIi8+CjxyZWN0IHg9IjI2Ni42ODgiIHk9IjM0NS4yMjgiIHdpZHRoPSIyMDAuMDU2IiBoZWlnaHQ9IjEyLjI0MTEiIHJ4PSI2LjEyMDU0IiBmaWxsPSIjRTFEREREIi8+CjxyZWN0IHg9IjI2Ni42ODgiIHk9IjM3OC44OTEiIHdpZHRoPSIyMDAuMDU2IiBoZWlnaHQ9IjEyLjI0MTEiIHJ4PSI2LjEyMDU1IiBmaWxsPSIjRTFEREREIi8+CjxyZWN0IHg9IjQ5Mi4yODMiIHk9IjM0NS4yMjgiIHdpZHRoPSIxNTguOTEiIGhlaWdodD0iMTIuMjQxMSIgcng9IjYuMTIwNTQiIGZpbGw9IiNFMUREREQiLz4KPHJlY3QgeD0iNDA2LjQ0MyIgeT0iMjEyLjg3MSIgd2lkdGg9IjIzMS45OCIgaGVpZ2h0PSIxMi4yNDExIiByeD0iNi4xMjA1NSIgZmlsbD0iI0UxRERERCIvPgo8cmVjdCB4PSI0MDYuNDQzIiB5PSIyNDUuMDA0IiB3aWR0aD0iMjMxLjk4IiBoZWlnaHQ9IjEyLjI0MTEiIHJ4PSI2LjEyMDU3IiBmaWxsPSIjRTFEREREIi8+CjxyZWN0IHg9IjQwNi40NDMiIHk9IjI3Ni4zNzIiIHdpZHRoPSIyMzEuOTgiIGhlaWdodD0iMTIuMjQxMSIgcng9IjYuMTIwNTciIGZpbGw9IiNFMUREREQiLz4KPHJlY3QgeD0iNDkyLjI4MyIgeT0iMzc4Ljg5MSIgd2lkdGg9IjE1OC45MSIgaGVpZ2h0PSIxMi4yNDExIiByeD0iNi4xMjA1NSIgZmlsbD0iI0UxRERERCIvPgo8cmVjdCB4PSIyNjYuNjg4IiB5PSIyMDIuMTYiIHdpZHRoPSIxMTQuMjE2IiBoZWlnaHQ9Ijc2LjUwNyIgZmlsbD0iI0U5RTRFNCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTczMi43MzMgMzI4LjAzOUw3MTYuNjg2IDM0MS40MzFDNzEyLjMzNCAzNDIuNzY2IDcwOC42OTggMzQ0LjQyNiA3MDUuNzc4IDM0Ni40MTNDNzA1LjA4OCAzNDcuMTI3IDcwNC4yNTUgMzQ4LjU3NCA3MDcuMTE1IDM0OC4zMjRDNzA5Ljk3NiAzNDguMDc0IDcxMi45OTUgMzQ3Ljk1NyA3MTMuMzg5IDM0OS4wNjZDNzEzLjc4NCAzNTAuMTc1IDcxMi4wNTMgMzUxLjUwMSA3MTIuODUxIDM1Mi45OTdDNzEzLjM4MyAzNTMuOTk0IDcxNS44OTYgMzUxLjQ5MyA3MjAuMzkgMzQ1LjQ5NEw3MzYuMjggMzM4LjAwNUw3MzIuNzMzIDMyOC4wMzlaTTc5NC4zNDQgMzI4LjUwMUw3ODMuODMyIDMyOC41NDhDNzkwLjMyMyAzNTIuMzYzIDc5My44MjcgMzY0Ljk5OCA3OTQuMzQ0IDM2Ni40NTZDNzk1LjUwOCAzNjkuNzM0IDc5My4wNDUgMzc0LjcyNyA3OTEuOTkyIDM3Ny40MTFDNzk1LjQyMiAzNzkuMTU1IDc5NS4wNTcgMzcyLjY5NCA3OTkuMzg1IDM3NC45ODJDODAzLjMzNSAzNzcuMDcxIDgwNi4zNCAzODAuODU1IDgxMC45MDQgMzc3LjY1NUM4MTEuNDY1IDM3Ny4yNjEgODEyLjA4IDM3NS43OCA4MTAuNTk1IDM3NC42MjJDODA2Ljg5MyAzNzEuNzM4IDgwMS41NTkgMzY2LjY4OSA4MDAuODM5IDM2NS4wMjhDNzk5Ljg1NiAzNjIuNzYyIDc5Ny42OTEgMzUwLjU4NiA3OTQuMzQ0IDMyOC41MDFaIiBmaWxsPSIjQjI4QjY3Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzY0LjQ2OSAyNzguMzY5TDc2MC4xMTkgMjc3LjUyMUM3NDMuOTc5IDI5My4zNjYgNzM3LjM1IDMyMy44MDcgNzE3LjU2NiAzMzkuOTMzTDcyMi4zMjggMzQ2LjY0MUM3NTYuNjQ5IDM0MS44MTEgNzY1LjE1NSAzMDQuNjgxIDc2NC40NjkgMjc4LjM2OVoiIGZpbGw9IiNFODc2MTMiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03ODMuNDMxIDM0MC40OTZDNzY1Ljk5IDM0MC40OTYgNzUzLjE2IDM0MC40OTYgNzQ0Ljk0MiAzNDAuNDk2Qzc0My4xODMgMzQwLjQ5NiA3NDMuNTE0IDMzNy42MSA3NDMuNzY5IDMzNi4xNTRDNzQ2LjcwMyAzMTkuMzQ1IDc1OC4xNTcgMzAxLjIyNiA3NTguMTU3IDI3Ny4yOTlMNzY5LjI1OSAyNzUuMzJDNzc4LjQ0MiAyOTIuMTA1IDc4MS42MTggMzEyLjc3IDc4My40MzEgMzQwLjQ5NloiIGZpbGw9IiNEREUzRTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03ODMuMTIyIDI5MS44MTlDNzg0LjczNSAyOTEuMjkyIDc4Ni4wMTIgMjkwLjA2MyA3ODYuOTUzIDI4OC4xMzNDNzkxLjAxMSAyNzkuODEyIDc4OS41NDUgMjc1LjIzIDc4NS4yMDkgMjczLjcyNEM3ODAuODcyIDI3Mi4yMTggNzc3LjAwNSAyNzUuMzIgNzcwLjA5NiAyNzUuMzJDNzY5LjcyIDI3NS4zMiA3NjkuMzc2IDI3NS4zNDcgNzY5LjA2MyAyNzUuNEw3NjUuNTg3IDI3NS42MjZDNzU1LjYxNiAzMTQuMDM0IDc1Mi44NjUgMzM5LjY2IDc1Ny4zMzcgMzUyLjUwMkg3ODcuNjMxQzc4OS40MjYgMzU3LjI1OSA3OTEuMTQ0IDM2MS4yNjEgNzkyLjc4NCAzNjQuNTA5SDgwMS4wMzlDODAxLjgxNiAzMzUuOTYxIDc5NS44NDMgMzExLjczMSA3ODMuMTIyIDI5MS44MTlaIiBmaWxsPSIjRkY5QjIxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzgxLjAzNSAzMzIuNzc3Qzc4MC4wODIgMzQxLjgzNiA3NzguNTMzIDM0OC40MTIgNzc2LjM4OSAzNTIuNTAySDc4Ny42MzFDNzg1LjUzOCAzNDYuOTU0IDc4My4zMzkgMzQwLjM3OSA3ODEuMDM1IDMzMi43NzdaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+Cg=="

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjciIGhlaWdodD0iNTciIHZpZXdCb3g9IjAgMCA2NyA1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYyLjk2NDMgNDguODg0NEwzMy41Mzk5IDBMNC4xMTU0OCA0OC44ODQ0SDE1LjI0NTNMMzMuNTM5OSAxOC40OTA2TDUxLjgzNDUgNDguODg0NEg2Mi45NjQzWiIgZmlsbD0iIzNBM0Q0NCIvPgo8L2c+CjxwYXRoIGQ9Ik01NiAyMkw0IDQ5SDE1LjI1ODlMNTYgMjJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNTYgMjJMNi43ODU3MSA0NC40MjM3TDQgNDlMNTYgMjJaIiBmaWxsPSIjNTc1NzU3Ii8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9IjAuMTE1NDc5IiB5PSIwIiB3aWR0aD0iNjYuODQ4OSIgaGVpZ2h0PSI1Ni44ODQ0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iNCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjI1IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjYzMyAzLjk5NzA0QzE3LjY0NiA0LjE3MjA0IDE3LjY0NiA0LjM0NjA0IDE3LjY0NiA0LjUyMDA0QzE3LjY0NiA5Ljg0NTA0IDEzLjU5MyAxNS45ODEgNi4xODYgMTUuOTgxQzMuOTA0IDE1Ljk4MSAxLjc4NCAxNS4zMiAwIDE0LjE3MkMwLjMyNCAxNC4yMDkgMC42MzYgMTQuMjIyIDAuOTczIDE0LjIyMkMyLjg1NiAxNC4yMjIgNC41ODkgMTMuNTg2IDUuOTc0IDEyLjUwMUM0LjIwMyAxMi40NjQgMi43MTkgMTEuMzA0IDIuMjA3IDkuNzA4MDRDMi40NTYgOS43NDUwNCAyLjcwNiA5Ljc3MDA0IDIuOTY4IDkuNzcwMDRDMy4zMjkgOS43NzAwNCAzLjY5MiA5LjcyMDA0IDQuMDI5IDkuNjMzMDRDMi4xODIgOS4yNTkwNCAwLjc5OSA3LjYzODA0IDAuNzk5IDUuNjgwMDRWNS42MzAwNEMxLjMzNiA1LjkyOTA0IDEuOTU5IDYuMTE2MDQgMi42MTkgNi4xNDEwNEMxLjUzNCA1LjQxOTA0IDAuODIzIDQuMTg0MDQgMC44MjMgMi43ODcwNEMwLjgyMyAyLjAzOTA0IDEuMDIyIDEuMzUzMDQgMS4zNzEgMC43NTUwNDNDMy4zNTQgMy4xOTgwNCA2LjMzNSA0Ljc5NTA0IDkuNjc3IDQuOTcwMDRDOS42MTUgNC42NzAwNCA5LjU3NyA0LjM1OTA0IDkuNTc3IDQuMDQ3MDRDOS41NzcgMS44MjcwNCAxMS4zNzMgMC4wMTkwNDMgMTMuNjA1IDAuMDE5MDQzQzE0Ljc2NSAwLjAxOTA0MyAxNS44MTIgMC41MDUwNDMgMTYuNTQ4IDEuMjkxMDRDMTcuNDU4IDEuMTE2MDQgMTguMzMgMC43NzkwNDMgMTkuMTA0IDAuMzE4MDQzQzE4LjgwNSAxLjI1MzA0IDE4LjE2OCAyLjAzOTA0IDE3LjMzMyAyLjUzODA0QzE4LjE0NCAyLjQ1MDA0IDE4LjkzIDIuMjI2MDQgMTkuNjUyIDEuOTE0MDRDMTkuMTA0IDIuNzEyMDQgMTguNDE5IDMuNDIzMDQgMTcuNjMzIDMuOTk3MDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyNCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAwQzUuMzcxOTcgMCAwIDUuMjc4NDUgMCAxMS43OTExQzAgMTYuOTk5OCAzLjQzNzM0IDIxLjQyIDguMjA2NTQgMjIuOTgwNUM4LjgwNjkgMjMuMDg2OSA5LjAyMzQ2IDIyLjcyMzkgOS4wMjM0NiAyMi40MTE4QzkuMDIzNDYgMjIuMTMxNyA5LjAxMzg0IDIxLjM4OTIgOS4wMTAyMyAyMC40MDY4QzUuNjcxNTUgMjEuMTE4NSA0Ljk2NjUxIDE4LjgyNTEgNC45NjY1MSAxOC44MjUxQzQuNDIyNyAxNy40NjMyIDMuNjM0NjUgMTcuMTAwMyAzLjYzNDY1IDE3LjEwMDNDMi41NDU4MiAxNi4zNjg1IDMuNzE3NjcgMTYuMzg1MSAzLjcxNzY3IDE2LjM4NTFDNC45MjMyIDE2LjQ2NzggNS41NTQ4NCAxNy42MDAzIDUuNTU0ODQgMTcuNjAwM0M2LjYyNTYzIDE5LjQwMiA4LjM2NTM1IDE4Ljg4MTggOS4wNDYzMiAxOC41ODA0QzkuMTU1OCAxNy44MTc5IDkuNDY4NjIgMTcuMjk3NyA5LjgxMDMxIDE3LjAwMzNDNy4xNDY1OCAxNi43MDY2IDQuMzQ1NyAxNS42OTQ3IDQuMzQ1NyAxMS4xNzUyQzQuMzQ1NyA5Ljg5MDE1IDQuODEzNzIgOC44MzU2NCA1LjU3NzcgOC4wMTI4NEM1LjQ1NjE5IDcuNzEzNzUgNS4wNDExMSA2LjUxMzgzIDUuNjk2ODEgNC44OTE4N0M1LjY5NjgxIDQuODkxODcgNi43MDM4MyA0LjU3Mzg3IDguOTk1NzkgNi4wOTg4OEM5Ljk1NTg4IDUuODM3NjIgMTAuOTc5NyA1LjcwNjQgMTEuOTk4OCA1LjcwMTY3QzEzLjAyMDMgNS43MDY0IDE0LjA0NTMgNS44Mzc2MiAxNS4wMDE4IDYuMDk4ODhDMTcuMjk1IDQuNTcyNjkgMTguMzAwOCA0Ljg5MTg3IDE4LjMwMDggNC44OTE4N0MxOC45NTY1IDYuNTEzODMgMTguNTQ1IDcuNzEzNzUgMTguNDE5OSA4LjAxMjg0QzE5LjE4OTkgOC44MzU2NCAxOS42NTE5IDkuODg4OTYgMTkuNjUxOSAxMS4xNzUyQzE5LjY1MTkgMTUuNzA2NSAxNi44NDg2IDE2LjcwMTkgMTQuMTc1MyAxNi45OTM5QzE0LjYwMjQgMTcuMzU4IDE0Ljk4NzQgMTguMDc2OCAxNC45ODc0IDE5LjE3NjJDMTQuOTg3NCAyMC43NTMyIDE0Ljk3MjkgMjIuMDI1MyAxNC45NzI5IDIyLjQxMThDMTQuOTcyOSAyMi43Mjc1IDE1LjE4NzEgMjMuMDk0IDE1Ljc5OTUgMjIuOTc4MUMyMC41NjYzIDIxLjQxNTMgMjQgMTYuOTk4NiAyNCAxMS43OTExQzI0IDUuMjc4NDUgMTguNjI4IDAgMTIgMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyNCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjY2NjcgMEgxLjMzMzMzQzAuNTk2IDAgMCAwLjU3MjQ0NCAwIDEuMjc3NzhWMjEuNzIyMkMwIDIyLjQyNzYgMC41OTYgMjMgMS4zMzMzMyAyM0gyMi42NjY3QzIzLjQwNCAyMyAyNCAyMi40Mjc2IDI0IDIxLjcyMjJWMS4yNzc3OEMyNCAwLjU3MjQ0NCAyMy40MDQgMCAyMi42NjY3IDBaTTcuMTE4NjcgMTkuNTk3M0gzLjU1NlY4LjYyMTE3SDcuMTE4NjdWMTkuNTk3M1pNNS4zMzczMyA3LjEyMjMzQzQuMTk2IDcuMTIyMzMgMy4yNzMzMyA2LjIzNTU2IDMuMjczMzMgNS4xNDQzM0MzLjI3MzMzIDQuMDUzMTEgNC4xOTQ2NyAzLjE2NjMzIDUuMzM3MzMgMy4xNjYzM0M2LjQ3NiAzLjE2NjMzIDcuNDAxMzMgNC4wNTE4MyA3LjQwMTMzIDUuMTQ0MzNDNy40MDEzMyA2LjIzNjgzIDYuNDc2IDcuMTIyMzMgNS4zMzczMyA3LjEyMjMzWk0yMC40NTA3IDE5LjU5NzNIMTYuODkyVjE0LjI2QzE2Ljg5MiAxMi45ODczIDE2Ljg2OCAxMS4zNTA1IDE1LjA0MTMgMTEuMzUwNUMxMy4xODggMTEuMzUwNSAxMi45MDY3IDEyLjczODIgMTIuOTA2NyAxNC4xNzA2VjE5LjU5ODZIOS4zNTA2N1Y4LjYyMjQ1SDEyLjc2NFYxMC4xMjI2SDEyLjgxMzNDMTMuMjg2NyA5LjI2MDA2IDE0LjQ0OTMgOC4zNTAyOCAxNi4xNzg3IDguMzUwMjhDMTkuNzg0IDguMzUwMjggMjAuNDQ5MyAxMC42MjIyIDIwLjQ0OTMgMTMuNTc4OUwyMC40NTA3IDE5LjU5NzNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(30);
module.exports = __webpack_require__(36);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(11)["default"];

var _require = __webpack_require__(12),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(11)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(12),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(13),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(13),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(9);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 4,
	"./": 4,
	"./index": 4,
	"./index.js": 4
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 32;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(8);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(14);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(37);

var _interopRequireDefault = __webpack_require__(38);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(39));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(40));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(41);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(42)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("/Users/andreiagnomelo/Desktop/Projects/myOfficialPortfolio/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(43)(module)))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,600i,700&display=swap);", ""]);

// Module
exports.push([module.i, "body,button{margin:0;padding:0;font-family:\"Source Sans Pro\", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro, Menlo, Monaco, Consolas, \"Courier New\", monospace}\n", ""]);



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, "#container{display:block;width:100%;margin:0 auto}#container__content{position:relative;display:block;width:100%;margin:0 auto;max-width:1300px;height:100px}\n", ""]);



/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, "#button__navbar{width:120px;height:51px;border:4px solid #0d102d;background:#fff;font-size:20px;margin-top:20px}#button__state-gohome{border:4px solid #fff;margin-top:20px;box-sizing:border-box;padding:5px;width:239px;height:55px;font-weight:600;font-size:20px;color:#fff;background-color:#1d1818;cursor:pointer}#button__state-gohome:hover{background-color:#fff;color:#1d1818}#button__state-contact{border:4px solid #0d102d;margin-top:20px;box-sizing:border-box;padding:5px;width:239px;height:55px;font-weight:600;font-size:20px;cursor:pointer}#button__state-contact:hover{background-color:#0d102d;color:#fff}\n", ""]);



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".navbar__container{margin:0 auto;height:100px}.navbar__container-position-left{float:left}.navbar__container-position-right{float:right;margin-right:50px}.navbar__title{display:inline-block;position:relative;color:#0d102d;margin:30px;font-size:18px;cursor:pointer;font-weight:600;background-image:linear-gradient(180deg, transparent 65%, #3e4054 0);background-repeat:no-repeat;background-position:bottom;background-size:0 100%;transition:background-size 0.2s ease;height:5px}.navbar__title:hover{background-size:100% 100%}.navbar__logo{margin-top:20px;-webkit-animation-name:floating;animation-name:floating;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@media (min-width: 1024px) and (max-width: 1366px){.navbar{max-width:1030px}.navbar__logo{margin-left:70px}.navbar__title{display:none}}@media (min-width: 768px) and (max-width: 1023px){.navbar{max-width:770px}.navbar__logo{margin-left:40px}.navbar__title{display:none}}@media (min-width: 481px) and (max-width: 767px){.navbar{max-width:490px}.navbar__logo{margin-left:40px}.navbar__title{display:none}}@media (min-width: 320px) and (max-width: 480px){.navbar{max-width:340px}.navbar__logo{margin-left:40px}.navbar__title{display:none}}@-webkit-keyframes floating{from{transform:translate(0, 0px)}65%{transform:translate(0, 5px)}to{transform:translate(0, 0px)}}@keyframes floating{from{transform:translate(0, 0px)}65%{transform:translate(0, 5px)}to{transform:translate(0, 0px)}}\n", ""]);



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTE0IiBoZWlnaHQ9IjQ4OCIgdmlld0JveD0iMCAwIDUxNCA0ODgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjY5LjgzNCAyLjc3NDg4QzMyNS45NDggMTEuMDQ1NSAzNjYuMzI1IDQ5Ljc5OCA0MDYuMDI2IDg0LjU1NDVDNDM5LjM5NiAxMTMuNzY5IDQ2MS45NTggMTQ4LjIxIDQ3OS4zMyAxODYuMTgxQzQ5Ny44MDEgMjI2LjU1MiA1MjQuOTYzIDI2OS4xNCA1MDkuMzQyIDMxMC4zNzNDNDkzLjcxMyAzNTEuNjI5IDQ0MC4xNDIgMzY5Ljk0OSAzOTkuNzIzIDM5Ni4zMTRDMzU3Ljk3OCA0MjMuNTQ1IDMyMi4yNDEgNDYyLjg2MiAyNjkuODM0IDQ2Ni42MDZDMjE1LjkzMSA0NzAuNDU3IDE2NC42NzIgNDQ1LjUxNiAxMjMuMDc0IDQxNi4wODFDODMuMzg3MiAzODcuOTk4IDYyLjc0MTkgMzQ3LjUxMiA0My43ODYgMzA2LjY1QzIzLjUyMDcgMjYyLjk2NiAxLjE5MzQyIDIxOC42MTggOS45NTgzNiAxNzIuMjQ3QzE5LjYzNDUgMTIxLjA1NSA0Ni4wOTQ4IDcwLjE2MjIgOTQuNDQ2NiAzOC42MzA2QzE0My4zNzMgNi43MjQzIDIwOS4xMDQgLTYuMTc2MDYgMjY5LjgzNCAyLjc3NDg4WiIgZmlsbD0iIzQyNDA0MCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2MS44MzQgMjMuNzc0OUMzMTcuOTQ4IDMyLjA0NTUgMzU4LjMyNSA3MC43OTggMzk4LjAyNiAxMDUuNTU0QzQzMS4zOTYgMTM0Ljc2OSA0NTMuOTU4IDE2OS4yMSA0NzEuMzMgMjA3LjE4MUM0ODkuODAxIDI0Ny41NTIgNTE2Ljk2MyAyOTAuMTQgNTAxLjM0MiAzMzEuMzczQzQ4NS43MTMgMzcyLjYyOSA0MzIuMTQyIDM5MC45NDkgMzkxLjcyMyA0MTcuMzE0QzM0OS45NzggNDQ0LjU0NSAzMTQuMjQxIDQ4My44NjIgMjYxLjgzNCA0ODcuNjA2QzIwNy45MzEgNDkxLjQ1NyAxNTYuNjcyIDQ2Ni41MTYgMTE1LjA3NCA0MzcuMDgxQzc1LjM4NzIgNDA4Ljk5OCA1NC43NDE5IDM2OC41MTIgMzUuNzg2IDMyNy42NUMxNS41MjA3IDI4My45NjYgLTYuODA2NTggMjM5LjYxOCAxLjk1ODM2IDE5My4yNDdDMTEuNjM0NSAxNDIuMDU1IDM4LjA5NDggOTEuMTYyMiA4Ni40NDY2IDU5LjYzMDZDMTM1LjM3MyAyNy43MjQzIDIwMS4xMDQgMTQuODIzOSAyNjEuODM0IDIzLjc3NDlaIiBmaWxsPSIjMUQxODE4IiBmaWxsLW9wYWNpdHk9IjAuMzgiLz4KPC9zdmc+Cg=="

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwIiBoZWlnaHQ9IjEyOSIgdmlld0JveD0iMCAwIDEzMCAxMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxlbGxpcHNlIGN4PSI2NSIgY3k9IjY0LjUiIHJ4PSI2NSIgcnk9IjY0LjUiIGZpbGw9IiNEN0Q3RDciLz4KPHBhdGggZD0iTTY2IDExOEM5NS4yNzExIDExOCAxMTkgOTQuMjcxMSAxMTkgNjVDMTE5IDM1LjcyODkgOTUuMjcxMSAxMiA2NiAxMkMzNi43Mjg5IDEyIDEzIDM1LjcyODkgMTMgNjVDMTMgOTQuMjcxMSAzNi43Mjg5IDExOCA2NiAxMThaIiBmaWxsPSIjRjJGMkYyIi8+CjxwYXRoIGQ9Ik02NiAyNkM2Ny42NTY5IDI2IDY5IDI0LjY1NjkgNjkgMjNDNjkgMjEuMzQzMSA2Ny42NTY5IDIwIDY2IDIwQzY0LjM0MzEgMjAgNjMgMjEuMzQzMSA2MyAyM0M2MyAyNC42NTY5IDY0LjM0MzEgMjYgNjYgMjZaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHBhdGggZD0iTTI0IDY4QzI1LjY1NjkgNjggMjcgNjYuNjU2OSAyNyA2NUMyNyA2My4zNDMxIDI1LjY1NjkgNjIgMjQgNjJDMjIuMzQzMSA2MiAyMSA2My4zNDMxIDIxIDY1QzIxIDY2LjY1NjkgMjIuMzQzMSA2OCAyNCA2OFoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMTA4IDY4QzEwOS42NTcgNjggMTExIDY2LjY1NjkgMTExIDY1QzExMSA2My4zNDMxIDEwOS42NTcgNjIgMTA4IDYyQzEwNi4zNDMgNjIgMTA1IDYzLjM0MzEgMTA1IDY1QzEwNSA2Ni42NTY5IDEwNi4zNDMgNjggMTA4IDY4WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4xIi8+CjxwYXRoIGQ9Ik02NiAxMTBDNjcuNjU2OSAxMTAgNjkgMTA4LjY1NyA2OSAxMDdDNjkgMTA1LjM0MyA2Ny42NTY5IDEwNCA2NiAxMDRDNjQuMzQzMSAxMDQgNjMgMTA1LjM0MyA2MyAxMDdDNjMgMTA4LjY1NyA2NC4zNDMxIDExMCA2NiAxMTBaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02NiAyOUw2OCA2NEg2NEw2NiAyOVoiIGZpbGw9IiNBRkI5QzUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04My42OTg2IDgyLjY5ODVMNjUuMzEzOCA2Ny4xNDIyTDY4LjE0MjIgNjQuMzEzN0w4My42OTg2IDgyLjY5ODVaIiBmaWxsPSIjQUZCOUM1Ii8+CjxwYXRoIGQ9Ik02NiA2OUM2OC4yMDkxIDY5IDcwIDY3LjIwOTEgNzAgNjVDNzAgNjIuNzkwOSA2OC4yMDkxIDYxIDY2IDYxQzYzLjc5MDkgNjEgNjIgNjIuNzkwOSA2MiA2NUM2MiA2Ny4yMDkxIDYzLjc5MDkgNjkgNjYgNjlaIiBmaWxsPSIjQzVDRkQ2Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".icon{transition:all 0.2s ease-in-out}.icon:hover{transform:scale(1.5)}\n", ""]);



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, "footer{position:fixed;left:0;bottom:0;width:100%;background-color:#1d1818;text-align:center}.container{display:block;width:100%;margin:0 auto}.container__content{position:relative;display:block;width:100%;margin:0 auto;max-width:1300px}.container__inside_position{display:inline;cursor:pointer;padding:10px}.container__outside_position{float:right;padding:20px}\n", ""]);



/***/ })
/******/ ]);
});