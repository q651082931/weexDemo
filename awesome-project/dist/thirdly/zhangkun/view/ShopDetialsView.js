// { "framework": "Vue"} 

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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/biyao.com/Desktop/weexDemo/awesome-project/src/thirdly/zhangkun/components/SlideView.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-389094d0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = {
  "wraper": {
    "alignItems": "flex-start",
    "justifyContent": "flex-start"
  },
  "frame": {
    "width": "750",
    "height": "750"
  },
  "text": {
    "fontSize": "28",
    "borderColor": "#a85695",
    "borderWidth": "1",
    "color": "#FFFFFF"
  },
  "indicator": {
    "position": "absolute",
    "right": "30",
    "bottom": "20",
    "itemSelectedColor": "#a85695"
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
  data: function data() {
    return {
      imageList: [{
        src: 'http://bfs.biyao.com/group1/M00/63/31/rBACW1vITcKAX-wiAADKyOSl6cI589.webp'
      }, {
        src: 'http://bfs.biyao.com/group1/M00/61/76/rBACVFvITdmAb7UNAABU86zpaZw373.webp'
      }, {
        src: 'http://bfs.biyao.com/group1/M00/61/76/rBACVFvITe6ASjEiAADGWDgPXz4054.webp'
      }, {
        src: 'http://bfs.biyao.com/group1/M00/63/2A/rBACYVvIThOAD4YjAACADC065_g026.webp'
      }, {
        src: 'http://bfs.biyao.com/group1/M00/63/2A/rBACYVvITkqAVu9jAADlrAV9LmQ237.webp'
      }]
    };
  }
};

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(25)
)

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(27)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/biyao.com/Desktop/weexDemo/awesome-project/src/thirdly/zhangkun/view/ShopDetialsView.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-933adf6c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "flex-start",
    "alignItems": "flex-start"
  },
  "shopDetailsStyle": {
    "height": "192",
    "backgroundColor": "#FF0000"
  },
  "shopDetailsTagStyle": {
    "height": "66",
    "backgroundColor": "#FFFF00"
  },
  "shopDetailsTagCellStyle": {
    "backgroundColor": "#F5F5DC"
  },
  "shopDetalsAddressCellStyle": {
    "backgroundColor": "#0000FF"
  },
  "shopDetalsSizeCellStyle": {
    "backgroundColor": "#FFC0CB"
  },
  "frameWidth": {
    "width": "750"
  },
  "cellHeight": {
    "height": "80"
  }
}

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SlideView = __webpack_require__(0);

var _SlideView2 = _interopRequireDefault(_SlideView);

var _index = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../../lessons/second/ryan/index.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: {
    // HelloWorld,
    SlideView: _SlideView2.default,
    RecommendShopsView: _index2.default
  },
  data: function data() {
    return {};
  }
};

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "wrapper": "",
      "frameWidth": ""
    }
  }, [_c('SlideView'), _c('div', {
    staticClass: ["shopDetailsStyle", "frameWidth"]
  }), _c('div', {
    staticClass: ["shopDetailsTagStyle", "frameWidth"]
  }), _c('div', {
    staticClass: ["shopDetailsTagCellStyle", "frameWidth", "cellHeight"]
  }), _c('div', {
    staticClass: ["shopDetalsAddressCellStyle", "frameWidth", "cellHeight"]
  }), _c('div', {
    staticClass: ["shopDetalsSizeCellStyle", "frameWidth", "cellHeight"]
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wraper", "frame"]
  }, [_c('slider', {
    staticClass: ["frame"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, [_vm._l((_vm.imageList), function(img, i) {
    return _c('div', {
      key: i,
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["frame"],
      attrs: {
        "resize": "strech",
        "src": _vm.imageList[i].src
      }
    })])
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ShopDetialsView = __webpack_require__(24);

var _ShopDetialsView2 = _interopRequireDefault(_ShopDetialsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ShopDetialsView2.default.el = '#root';
new Vue(_ShopDetialsView2.default);

/***/ })

/******/ });