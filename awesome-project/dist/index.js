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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
__vue_options__.__file = "/Users/biyao.com/Desktop/weexDemo/awesome-project/src/components/BYSlider.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d3d6dfb0"
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
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "image": {
    "width": "750",
    "height": "600",
    "backgroundColor": "#0000FF"
  }
}

/***/ }),
/* 2 */
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
//
//
//
//

exports.default = {
  props: ['imgList']

};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, _vm._l((_vm.dataJson.imgList), function(img) {
    return _c('div', {
      key: img,
      staticClass: ["sliderFrame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "scr": img
      }
    })])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(9);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(13)
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
__vue_options__.__file = "/Users/biyao.com/Desktop/weexDemo/awesome-project/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
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
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "flex": 1,
    "height": "667"
  },
  "BYSlider": {
    "height": "600",
    "width": "750",
    "backgroundColor": "#00FFFF"
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BYSlider = __webpack_require__(0);

var _BYSlider2 = _interopRequireDefault(_BYSlider);

var _price = __webpack_require__(14);

var _price2 = _interopRequireDefault(_price);

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
//
//
//

var dataJsonFile = __webpack_require__(12);
exports.default = {
  components: {
    BYSlider: _BYSlider2.default,
    price: _price2.default

  },
  data: function data() {
    return {
      dataJson: dataJsonFile.mdata
    };
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"mdata":{"supportArGlass":0,"shareInfo":{"shareContent":"简约大格子花纹，尽显大气","shareImageUrl":"http://bfs.biyao.com/group1/M00/5D/B4/rBACVFu66YGAREumAABgakci-H8120.jpg","shareTitle":"领口装饰格子毛呢大衣","shareUrl":"http://www.biyao.com/products/1301815275010100001-0.html"},"shelfStatus":"1","suID":"1301815275010100001","carveInfo":{"normalSignPrice":"","normalSignDuration":"","haQiSignDuration":"","haQiSignPrice":""},"supportOpt":"0","tips":{"tipsTitle":"价格和生产周期说明","tipsContent":"根据所选规格的不同，价格可能会不同，最终价格以所选商品规格为准。\n\n为了让您买到最具性价比的商品，我们不会预先准备库存，因此会有一定的生产周期，请您耐心等待哦。"},"suMap":{"78741,78743":{"duration":7,"suDescription":"中灰，S","priceStr":"389","priceCent":"38900","price":389,"imageUrl":"http://bfs.biyao.com/group1/M00/5D/B4/rBACVFu66JyAVJiNAAB7IYWU6uY968_400x400.jpg","suID":"1301815275010100001","storeNum":1},"78741,78744":{"duration":7,"suDescription":"中灰，M","priceStr":"389","priceCent":"38900","price":389,"imageUrl":"http://bfs.biyao.com/group1/M00/5D/B4/rBACVFu66JyAVJiNAAB7IYWU6uY968_400x400.jpg","suID":"1301815275010200001","storeNum":1},"78741,78745":{"duration":7,"suDescription":"中灰，L","priceStr":"389","priceCent":"38900","price":389,"imageUrl":"http://bfs.biyao.com/group1/M00/5D/B4/rBACVFu66JyAVJiNAAB7IYWU6uY968_400x400.jpg","suID":"1301815275010300001","storeNum":1},"78742,78744":{"duration":7,"suDescription":"藏青蓝，M","priceStr":"389","priceCent":"38900","price":389,"imageUrl":"http://bfs.biyao.com/group1/M00/5F/64/rBACYVu66J-ADRJ8AACcjRnLKl8662_400x400.jpg","suID":"1301815275020200001","storeNum":1},"78742,78745":{"duration":7,"suDescription":"藏青蓝，L","priceStr":"389","priceCent":"38900","price":389,"imageUrl":"http://bfs.biyao.com/group1/M00/5F/64/rBACYVu66J-ADRJ8AACcjRnLKl8662_400x400.jpg","suID":"1301815275020300001","storeNum":1},"78742,78743":{"duration":7,"suDescription":"藏青蓝，S","priceStr":"389","priceCent":"38900","price":389,"imageUrl":"http://bfs.biyao.com/group1/M00/5F/64/rBACYVu66J-ADRJ8AACcjRnLKl8662_400x400.jpg","suID":"1301815275020100001","storeNum":1}},"zcIMInfo":{"goodsImage":"http://bfs.biyao.com/group1/M00/5D/B4/rBACVFu66JyAVJiNAAB7IYWU6uY968_400x400.jpg","goodsSendText":"商品链接：http://www.biyao.com/products/1301815275010100001-0.html","goodsTitle":"领口装饰格子毛呢大衣","groupId":"130181","showGoods":true,"supportRecord":false},"live800Info":{"chatUrl":"https://chat.biyao.com/chat/chatClient/chatbox.jsp?companyID=130181&page=suId%3D1301815275010100001&enterurl=%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85%E9%A1%B5%EF%BC%88APP%EF%BC%89","routerUrl":"biyao://product/web/live800?mUrl=https%3A%2F%2Fchat.biyao.com%2Fchat%2FchatClient%2Fchatbox.jsp%3FcompanyID%3D130181%26page%3DsuId%253D1301815275010100001%26enterurl%3D%25E5%2595%2586%25E5%2593%2581%25E8%25AF%25A6%25E6%2583%2585%25E9%25A1%25B5%25EF%25BC%2588APP%25EF%25BC%2589","shopID":"130181"},"goodsDetailUrl":"https://m.biyao.com/nativeHtmls/Details?suid=1301815275010100001","onSellGoodsInfo":{"onsellCount":"65","recommendProducts":[{"groupId":null,"groupNum":null,"imageUrl":"http://bfs.biyao.com/group1/M00/5B/82/rBACVFuu7HyAMX06AABBWN6cHUU254.jpg","imageUrlWebp":"http://bfs.biyao.com/group1/M00/5B/82/rBACVFuu7HyAMX06AABBWN6cHUU254.webp","isGroupIcon":"0","isModel":"false","isShowIcon":"3","manufacturer":null,"price":"199","priceCent":"19900","priceStr":"199","productId":"1301815271","productTypeDTO":null,"rankingProductDto":null,"recommendText":null,"routerUrl":"biyao://product/togetherGroup/goodsDetail?suId=1301815271010100001","salePoint":"时尚的版型设计，优雅中流露着干练，无论度假还是职场它都让你清新自然","showPrivilege":"0","suId":"1301815271010100001","supplierId":"130181","title":"金属扣装饰中长款外套"},{"groupId":null,"groupNum":null,"imageUrl":"http://bfs.biyao.com/group1/M00/61/BA/rBACVFvJigSAE4HoAABFPeeyRQ4458.jpg","imageUrlWebp":"http://bfs.biyao.com/group1/M00/61/BA/rBACVFvJigSAE4HoAABFPeeyRQ4458.webp","isGroupIcon":"0","isModel":"false","isShowIcon":"0","manufacturer":null,"price":"399","priceCent":"39900","priceStr":"399","productId":"1301815282","productTypeDTO":null,"rankingProductDto":null,"recommendText":null,"routerUrl":"biyao://product/browse/goodsDetail?goodsID=1301815282010100001","salePoint":"斗篷设计，大气有型，彰显迷人背影，时尚新潮","showPrivilege":"0","suId":"1301815282010100001","supplierId":"130181","title":"铆钉系腰带麂皮绒格子风衣"},{"groupId":null,"groupNum":null,"imageUrl":"http://bfs.biyao.com/group1/M00/45/AB/rBACVFtZLF-AfDk2AAA8YwnlHRs352.jpg","imageUrlWebp":"http://bfs.biyao.com/group1/M00/45/AB/rBACVFtZLF-AfDk2AAA8YwnlHRs352.webp","isGroupIcon":"0","isModel":"false","isShowIcon":"0","manufacturer":null,"price":"199","priceCent":"19900","priceStr":"199","productId":"1301815225","productTypeDTO":null,"rankingProductDto":null,"recommendText":null,"routerUrl":"biyao://product/browse/goodsDetail?goodsID=1301815225010100001","salePoint":"纯色裙装没有色彩之间的喧杂,这种美低调不乏惊艳,稳妥而不夸张","showPrivilege":"0","suId":"1301815225010100001","supplierId":"130181","title":"七分袖毛呢连衣裙"},{"groupId":null,"groupNum":null,"imageUrl":"http://bfs.biyao.com/group1/M00/5A/3E/rBACW1uh4r2AYfgNAABWJ-8OytQ983.jpg","imageUrlWebp":"http://bfs.biyao.com/group1/M00/5A/3E/rBACW1uh4r2AYfgNAABWJ-8OytQ983.webp","isGroupIcon":"0","isModel":"false","isShowIcon":"3","manufacturer":null,"price":"299","priceCent":"29900","priceStr":"299","productId":"1301815264","productTypeDTO":null,"rankingProductDto":null,"recommendText":null,"routerUrl":"biyao://product/togetherGroup/goodsDetail?suId=1301815264010100001","salePoint":"立体剪裁，简约流畅，穿着轻松随意，舒适又不缺时尚感","showPrivilege":"0","suId":"1301815264010100001","supplierId":"130181","title":"落肩袖大口袋宽松毛呢外套"},{"groupId":null,"groupNum":null,"imageUrl":"http://bfs.biyao.com/group1/M00/45/08/rBACVFtVrtGANzcgAABNK7EuL60179.jpg","imageUrlWebp":"http://bfs.biyao.com/group1/M00/45/08/rBACVFtVrtGANzcgAABNK7EuL60179.webp","isGroupIcon":"0","isModel":"false","isShowIcon":"0","manufacturer":null,"price":"169","priceCent":"16900","priceStr":"169","productId":"1301815221","productTypeDTO":null,"rankingProductDto":null,"recommendText":null,"routerUrl":"biyao://product/browse/goodsDetail?goodsID=1301815221010100001","salePoint":"领口做了不规则领结设计，为衬衫注入更多的活力","showPrivilege":"0","suId":"1301815221010100001","supplierId":"130181","title":"袖子拼接条纹衬衫"},{"groupId":null,"groupNum":null,"imageUrl":"http://bfs.biyao.com/group1/M00/5B/F3/rBACYVup7g2AYCRoAACVlWj_z-c772.jpg","imageUrlWebp":"http://bfs.biyao.com/group1/M00/5B/F3/rBACYVup7g2AYCRoAACVlWj_z-c772.webp","isGroupIcon":"0","isModel":"false","isShowIcon":"0","manufacturer":null,"price":"399","priceCent":"39900","priceStr":"399","productId":"1301815268","productTypeDTO":null,"rankingProductDto":null,"recommendText":null,"routerUrl":"biyao://product/browse/goodsDetail?goodsID=1301815268010100001","salePoint":"A型摆呢大衣，是优雅与酷感共存的廓形","showPrivilege":"0","suId":"1301815268010100001","supplierId":"130181","title":"双排扣时尚长款毛呢大衣"},{"groupId":null,"groupNum":null,"imageUrl":"http://bfs.biyao.com/group1/M00/63/56/rBACYVvJRkWAPfx0AABFgQaut7w031.jpg","imageUrlWebp":"http://bfs.biyao.com/group1/M00/63/56/rBACYVvJRkWAPfx0AABFgQaut7w031.webp","isGroupIcon":"0","isModel":"false","isShowIcon":"0","manufacturer":null,"price":"399","priceCent":"39900","priceStr":"399","productId":"1301815281","productTypeDTO":null,"rankingProductDto":null,"recommendText":null,"routerUrl":"biyao://product/browse/goodsDetail?goodsID=1301815281010100001","salePoint":"肌理感十足的亮光面料，提升整件衣服的质感","showPrivilege":"0","suId":"1301815281010100001","supplierId":"130181","title":"气质百搭系带收腰漆皮大衣"},{"groupId":null,"groupNum":null,"imageUrl":"http://bfs.biyao.com/group1/M00/59/85/rBACVFulpruAB8auAABGW6nrObk688.jpg","imageUrlWebp":"http://bfs.biyao.com/group1/M00/59/85/rBACVFulpruAB8auAABGW6nrObk688.webp","isGroupIcon":"0","isModel":"false","isShowIcon":"3","manufacturer":null,"price":"399","priceCent":"39900","priceStr":"399","productId":"1301815267","productTypeDTO":null,"rankingProductDto":null,"recommendText":null,"routerUrl":"biyao://product/togetherGroup/goodsDetail?suId=1301815267020100001","salePoint":"清朗利落的轮廓一气呵成，大气西装领，强大气场，干练显年轻","showPrivilege":"0","suId":"1301815267020100001","supplierId":"130181","title":"简洁大气中长款毛呢大衣"},{"groupId":null,"groupNum":null,"imageUrl":"http://bfs.biyao.com/group1/M00/5E/A7/rBACYVu21bmAc7tCAABCAWCYYNk538.jpg","imageUrlWebp":"http://bfs.biyao.com/group1/M00/5E/A7/rBACYVu21bmAc7tCAABCAWCYYNk538.webp","isGroupIcon":"0","isModel":"false","isShowIcon":"0","manufacturer":null,"price":"239","priceCent":"23900","priceStr":"239","productId":"1301815269","productTypeDTO":null,"rankingProductDto":null,"recommendText":null,"routerUrl":"biyao://product/browse/goodsDetail?goodsID=1301815269010100001","salePoint":"立体剪裁，以独特的设计理念倾述潮流典范","showPrivilege":"0","suId":"1301815269010100001","supplierId":"130181","title":"金属圆环装饰衬衣"}],"supplierID":"130181","supplierImg":"http://bfs.biyao.com/group1/M00/18/70/rBACVFmSW5iALvYHAAATerXNje8041.jpg","supplierName":"KENNY LINE服饰"},"sizeDetailUrl":"http://bfs.biyao.com/group1/M00/5D/B4/rBACVFu66ZiAE2uXAABkn53toYM555.jpg","arTryOnUrl":"biyao://xg/product/ARGlasses?suId=1301815275010100001","goodsName":"领口装饰格子毛呢大衣","policy":[{"policyDescription":"根据国家七天无理由退货规范，为您办理退货退款，具体退货政策见商品详情页。","policyName":"7天无忧退货"},{"policyDescription":"争议可申诉，申诉成功，立即退款。","policyName":"先行赔付"},{"policyDescription":"未按承诺时间发货，系统自动赔付（赔款金额为订单商品金额的30%，上限500元）。","policyName":"超时赔偿"},{"policyDescription":"运费由商家承担","policyName":"顺丰包邮"}],"suData":{"suID":"1301815275010100001","specKey":"78741,78743"},"manufacturerLabel":[{"name":"Max Mara制造商直供"}],"supplierID":"130181","address":null,"specList":[{"specType":"0","specTypeName":"颜色","isGlassLens":"0","detailList":[{"specID":"78741","materialName":"","materialImageUrl":"","specName":"中灰","specImageUrl":"http://bfs.biyao.com/group1/M00/5D/B4/rBACVFu66JyAVJiNAAB7IYWU6uY968.jpg"},{"specID":"78742","materialName":"","materialImageUrl":"","specName":"藏青蓝","specImageUrl":"http://bfs.biyao.com/group1/M00/5F/64/rBACYVu66J-ADRJ8AACcjRnLKl8662.jpg"}]},{"specType":"0","specTypeName":"尺寸","isGlassLens":"0","detailList":[{"specID":"78743","materialName":"","materialImageUrl":"","specName":"S","specImageUrl":""},{"specID":"78744","materialName":"","materialImageUrl":"","specName":"M","specImageUrl":""},{"specID":"78745","materialName":"","materialImageUrl":"","specName":"L","specImageUrl":""}]}],"modelType":"0","carveUrl":"","salePoint":"简约大格子花纹，尽显大气","designAR":{"designQuality":"根据您对图片的操作，实时反馈作品的效果清晰度","supportDesign":"1","selfDesignDuration":"","isDesignProduct":"0","suPrice":"","selfDesignPrice":"","designTitle":"定制帆布鞋","OEMInfo":"VANS"},"stockStyle":"1","commentInfo":{"allCommentCount":"","bestComment":{}},"supportAr":0,"renderRotation":"0","shortGoodsName":"领口装饰格子毛呢大衣","designRouterUrl":"biyao://xg/product/design?suId=1301815275010100001&designId=","supplierTel":"06315700315","isShowRedPacketSign":"0","goodsDetail":{"descriptionList":[{"descriptionContent":"领口装饰格子毛呢大衣","descriptionName":"品名"},{"descriptionContent":"KL8407013","descriptionName":"款号"},{"descriptionContent":"面料 聚酯纤维57% 羊毛22.1% 腈纶16.3% 锦纶2.4% 粘胶纤维2.2% 里料 聚酯纤维100%","descriptionName":"面料"},{"descriptionContent":"中灰 藏青蓝","descriptionName":"颜色"},{"descriptionContent":"KENNY LINE","descriptionName":"品牌"},{"descriptionContent":"山东威海","descriptionName":"产地"},{"descriptionContent":"舒适的毛呢面料，哑光质感，内敛温馨，简约大格子花纹，尽显大气","descriptionName":"推荐理由"},{"descriptionContent":"请专业干洗护理。自然通风晾干，低温隔层顺毛熨烫","descriptionName":"洗涤说明"}],"tipsList":[],"imageList":[]},"imgList":["http://bfs.biyao.com/group1/M00/5F/6C/rBACW1u66YqAPDsXAACcjRnLKl8571.jpg","http://bfs.biyao.com/group1/M00/5F/6D/rBACW1u66YyAUqgyAAB7IYWU6uY661.jpg","http://bfs.biyao.com/group1/M00/5F/65/rBACYVu66Y2AZpB3AAB0DqcQfwg512.jpg","http://bfs.biyao.com/group1/M00/5D/B4/rBACVFu66Y-ATHCtAAB-S3JGcyg616.jpg","http://bfs.biyao.com/group1/M00/5F/65/rBACYVu66ZGAXzyHAABvPsqBC1w672.jpg"],"shareInfoList":[{"shareContent":"大牌制造商直供","shareImageUrl":"http://bfs.biyao.com/group1/M00/5F/65/rBACYVu66YWAesKEAADwc0ole-w912.jpg","shareName":"微信好友","shareTitle":"Max Mara制造商直供【领口装饰格子毛呢大衣】","shareType":"2","shareUrl":"pages/products/products?suId=1301815275010100001&utm=share.wx.9.500012...","statisticsInfo":"9.500012.share.wx."},{"shareContent":"","shareImageUrl":"http://bfs.biyao.com/group1/M00/5F/6C/rBACW1u66YqAPDsXAACcjRnLKl8571.jpg","shareName":"朋友圈","shareTitle":"Max Mara制造商直供【领口装饰格子毛呢大衣】","shareType":"3","shareUrl":"https://s.biyao.com/YEEMbnqVqVyQ","statisticsInfo":"9.500012.share.pyq."},{"priceStr":"","shareContent":"简约大格子花纹，尽显大气","shareImageUrl":"http://bfs.biyao.com/group1/M00/5F/6C/rBACW1u66YqAPDsXAACcjRnLKl8571.jpg","shareName":"长图","shareTitle":"Max Mara制造商直供【领口装饰格子毛呢大衣】","shareType":"8","shareUrl":"eyJwYWdlIjoicGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMiLCJzY2VuZVN0ciI6IjEzMDE4MTUyNzUw\r\nMTAxMDAwMDE7NzdGZll1ekEzSkVpIn0=\r\n","statisticsInfo":"9.500012.share.ct."},{"shareContent":"打开必要APP扫一扫","shareImageUrl":"","shareName":"当面扫码","shareTitle":"","shareType":"9","shareUrl":"https://s.biyao.com/AfBeAZzznAUA","statisticsInfo":"9.500012.share.sm."},{"shareContent":"分享给你一个Max Mara制造商直供【领口装饰格子毛呢大衣】，点击https://s.biyao.com/NjMrQzfyBANB，选择浏览器打开，或复制这段口令￥36o0Zj2MBbaR￥打开必要App","shareImageUrl":"","shareName":"口令","shareTitle":"","shareType":"6","shareUrl":"","statisticsInfo":"9.500012.share.Kl."},{"shareContent":"","shareImageUrl":"","shareName":"复制链接","shareTitle":"","shareType":"11","shareUrl":"https://s.biyao.com/nIaBIFyIMmBy","statisticsInfo":"9.500012.share.lj."},{"shareContent":"分享给你一个Max Mara制造商直供【领口装饰格子毛呢大衣】，点击https://s.biyao.com/BvqzqjIa3aVz，选择浏览器打开，或复制这段口令￥36DvA6IzymEU￥打开必要App","shareImageUrl":"","shareName":"短信","shareTitle":"","shareType":"10","shareUrl":"","statisticsInfo":"9.500012.share.dx."},{"shareContent":"","shareImageUrl":"","shareName":"其他","shareTitle":"","shareType":"12","shareUrl":"https://s.biyao.com/JMyY6meuMaVJ","statisticsInfo":"9.500012.share.qt."}]},"success":1,"error":{}}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_c('price', {
    staticClass: ["price"]
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(17)
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
__vue_options__.__file = "/Users/biyao.com/Desktop/weexDemo/awesome-project/src/components/price.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0ec09e2e"
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
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  "title": {
    "fontSize": "38",
    "color": "#000000",
    "textAlign": "left",
    "alignSelf": "left",
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis",
    "overflow": "hidden",
    "marginLeft": "20"
  },
  "subTitle": {
    "fontSize": "18",
    "color": "#808080",
    "textAlign": "left",
    "marginLeft": "20",
    "marginTop": "20"
  },
  "price": {
    "fontSize": "50",
    "color": "#FF0000",
    "textAlign": "left",
    "marginLeft": "20",
    "marginTop": "10"
  },
  "bottomTitle": {
    "fontSize": "18",
    "color": "#FFA500",
    "marginLeft": "20",
    "marginTop": "10"
  }
}

/***/ }),
/* 16 */
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
//
//
//
//
//
//
//
//

exports.default = {
  //   scope: ['model']
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("彩棉婴儿 ")]), _c('text', {
    staticClass: ["subTitle"]
  }, [_vm._v("天然彩棉")]), _c('text', {
    staticClass: ["price"]
  }, [_vm._v("79")]), _c('text', {
    staticClass: ["bottomTitle"]
  }, [_vm._v("joules制造商直供")])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);