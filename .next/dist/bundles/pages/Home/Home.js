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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external__semantic_ui_react_ = __webpack_require__(1);
var external__semantic_ui_react__default = /*#__PURE__*/__webpack_require__.n(external__semantic_ui_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(2);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./src/components/Header/HeaderPage.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var HeaderPage_HeaderPage = function (_Component) {
  _inherits(HeaderPage, _Component);

  function HeaderPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderPage.__proto__ || Object.getPrototypeOf(HeaderPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeItem: 'Home'
    }, _this.handleClickMenu = function (name) {
      _this.setState({ activeItem: name });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderPage, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var activeItem = this.state.activeItem;

      return external__react__default.a.createElement(
        external__semantic_ui_react_["Menu"],
        { secondary: true, borderless: true, inverted: true, style: styles.Menu },
        external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, { name: 'Home', active: activeItem === 'Home', onClick: function onClick() {
            _this2.handleClickMenu('Home');
          } }),
        external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, { name: 'Apps', active: activeItem === 'Apps', onClick: function onClick() {
            _this2.handleClickMenu('Apps');
          } }),
        external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, { name: 'Photo', active: activeItem === 'Photo', onClick: function onClick() {
            _this2.handleClickMenu('Photo');
          } }),
        external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, { name: 'Profile', active: activeItem === 'Profile', onClick: function onClick() {
            _this2.handleClickMenu('Profile');
          } })
      );
    }
  }]);

  return HeaderPage;
}(external__react_["Component"]);

var styles = {
  Menu: {
    margin: 15
  },
  Item: {
    backgroundColor: '#EEEFF7',
    fontFamily: 'Open Sans',
    padding: 15,
    margin: 10,
    borderWidth: 0
  }
};

/* harmony default export */ var Header_HeaderPage = (HeaderPage_HeaderPage);
// CONCATENATED MODULE: ./pages/Home/Home.js
var Home__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Home__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Home__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Home__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Home_Home = function (_Component) {
  Home__inherits(Home, _Component);

  function Home() {
    Home__classCallCheck(this, Home);

    return Home__possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  Home__createClass(Home, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        null,
        external__react__default.a.createElement(
          head__default.a,
          null,
          external__react__default.a.createElement(
            'title',
            null,
            'Cremappuchino'
          ),
          external__react__default.a.createElement('link', { rel: 'stylesheet', href: '../../static/styles/styles.css' }),
          external__react__default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,600,700', rel: 'stylesheet' }),
          external__react__default.a.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css' }),
          external__react__default.a.createElement(
            'style',
            null,
            '\n            body {\n              background-color: #1C1D21\n            }\n          '
          )
        ),
        external__react__default.a.createElement(Header_HeaderPage, null),
        external__react__default.a.createElement(
          'div',
          { className: 'Root-Component' },
          external__react__default.a.createElement(
            external__semantic_ui_react_["Container"],
            null,
            external__react__default.a.createElement(
              external__semantic_ui_react_["Header"],
              null,
              external__react__default.a.createElement(
                external__semantic_ui_react_["Header"].Content,
                { as: 'h1' },
                'Buenvenida'
              ),
              external__react__default.a.createElement(
                external__semantic_ui_react_["Header"].Subheader,
                null,
                external__react__default.a.createElement(
                  'h3',
                  null,
                  'Hi, I\'m Tifo'
                )
              ),
              external__react__default.a.createElement(
                external__semantic_ui_react_["Header"].Subheader,
                null,
                external__react__default.a.createElement(
                  'h3',
                  null,
                  'a React-Native Developer'
                )
              ),
              external__react__default.a.createElement(
                external__semantic_ui_react_["Header"].Subheader,
                null,
                external__react__default.a.createElement(
                  'h3',
                  null,
                  'an Entity that turning caffeinees into a code'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(external__react_["Component"]);

/* harmony default export */ var pages_Home_Home = __webpack_exports__["default"] = (Home_Home);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);