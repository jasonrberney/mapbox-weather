(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("WDT", [], factory);
	else if(typeof exports === 'object')
		exports["WDT"] = factory();
	else
		root["WDT"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radar = exports.Cat = exports.Dog = undefined;

var _cat = __webpack_require__(1);

var _cat2 = _interopRequireDefault(_cat);

var _dog = __webpack_require__(2);

var _dog2 = _interopRequireDefault(_dog);

var _radar = __webpack_require__(3);

var _radar2 = _interopRequireDefault(_radar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Dog = _dog2.default;
exports.Cat = _cat2.default;
exports.Radar = _radar2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cat = function () {
  function Cat() {
    _classCallCheck(this, Cat);

    this._name = 'Cat';
  }

  _createClass(Cat, [{
    key: 'name',
    get: function get() {
      return this._name;
    }
  }]);

  return Cat;
}();

exports.default = Cat;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dog = function () {
  function Dog() {
    _classCallCheck(this, Dog);

    this._name = 'Dog';
  }

  _createClass(Dog, [{
    key: 'name',
    get: function get() {
      return this._name;
    }
  }]);

  return Dog;
}();

exports.default = Dog;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var axios = require('axios');

var Radar = function () {
  function Radar() {
    _classCallCheck(this, Radar);

    this._name = 'Radar';
    this.colorRamp = undefined;
  }

  _createClass(Radar, [{
    key: 'fetchColorRamp',
    value: function fetchColorRamp() {
      var _this = this;

      fetch('http://apps.integralgis.com/wdt/proxy/wdt.ashx?https://gisweb.wdtinc.com/arcgis/rest/services/Radar/CONUS_Radar_Loop/MapServer/0?f=json').then(function (response) {
        return response.json().then(function (data) {
          return {
            colorRamp: data
          };
        }).then(function (res) {
          _this.colorRamp = res.colorRamp;
          console.log(_this.colorRamp);

          var colorRampDict = {};

          for (var i = 0; i < res.colorRamp.drawingInfo.renderer.uniqueValueInfos.length; i++) {
            var r = res.colorRamp.drawingInfo.renderer.uniqueValueInfos[i].symbol.color[0];
            var g = res.colorRamp.drawingInfo.renderer.uniqueValueInfos[i].symbol.color[1];
            var b = res.colorRamp.drawingInfo.renderer.uniqueValueInfos[i].symbol.color[2];
            var hexColor = _this.rgbToHex(r, g, b);

            colorRampDict[res.colorRamp.drawingInfo.renderer.uniqueValueInfos[i].value] = hexColor;
          }
          console.log(colorRampDict);
        });
      });
    }
  }, {
    key: 'componentToHex',
    value: function componentToHex(c) {
      var hex = c.toString(16);

      return hex.length === 1 ? '0' + hex : hex;
    }
  }, {
    key: 'rgbToHex',
    value: function rgbToHex(r, g, b) {
      return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    //   fetchColorRamp() {
    //     axios.get('http://apps.integralgis.com/wdt/proxy/wdt.ashx?https://gisweb.wdtinc.com/arcgis/rest/services/Radar/CONUS_Radar_Loop/MapServer/0?f=json').then(function (response) {
    //       console.log(response);
    //     })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   }

  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }
  }]);

  return Radar;
}();

exports.default = Radar;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=WDT.js.map