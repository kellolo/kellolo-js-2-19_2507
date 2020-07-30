/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
      /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
      /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
}
    /******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
    /******/
};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
    /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
    /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
  /******/
})
/************************************************************************/
/******/({

/***/ "./src/components/basket.js":
/*!**********************************!*\
  !*** ./src/components/basket.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n\r\nvar basket = {\r\n    items: [],\r\n    container: null,\r\n    basket: basket,\r\n    total: 0,\r\n\r\n    init() {\r\n        this.container = document.querySelector(\"#basket\");\r\n        this._render();\r\n        this._handleActions();\r\n    },\r\n    _handleActions() {\r\n        this.container.addEventListener('click', evt => {\r\n            if (evt.target.classList.contains('remove')) {\r\n                this.remove(evt.target.dataset.id);\r\n            }\r\n        })\r\n    },\r\n    _render() {\r\n        let str = \"\";\r\n        this.items.forEach(item => {\r\n            str += `\r\n            <div class=\"d-flex headerCartWrapIn\">\r\n                <a href=\"#\" class=\"d-flex\">\r\n                    <img src=\"${item.img}\" alt=\"\" style=\"height: 85px\">\r\n                    <div>\r\n                        <div>${item.name}</div>\r\n                        <span>\r\n                            <i class=\"fas fa-star\"></i>\r\n                            <i class=\"fas fa-star\"></i>\r\n                            <i class=\"fas fa-star\"></i>\r\n                            <i class=\"fas fa-star\"></i>\r\n                            <i class=\"fas fa-star-half-alt\"></i>\r\n                        </span>\r\n                        <div class=\"headerCartWrapPrice\">${item.amount} \r\n                            <span>x</span> $${item.price}\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n                <a href=\"#\" class=\"remove\"><i class=\"fas fa-times-circle remove\" data-id=\"${item.id}\"></i></a>\r\n            </div>\r\n            `\r\n        })\r\n        this.container.innerHTML = str + `\r\n        <div class=\"headerCartWrapTotalPrice\">\r\n                            <div>total&nbsp;</div>\r\n                            <div>$${this.total}</div>\r\n                        </div>\r\n\r\n                        <button type=\"button\" class=\"productsButtonIndex\">Checkout</button>\r\n                        <button type=\"button\" class=\"productsButtonIndex\">Go to cart</button>`;\r\n\r\n    },\r\n    add(item) {\r\n        let find = this.items.find(el => el.id == item.id);\r\n\r\n        if (!find) {\r\n            this.items.push(item);\r\n            this.total = this.total + Number(item.price);\r\n        } else {\r\n            find.amount++;\r\n            this.total = this.total + Number(find.price);            \r\n        }\r\n        this._render();\r\n    },\r\n    remove(itemId) {\r\n\r\n        let find = this.items.find(el => el.id == itemId);\r\n\r\n        if (find.amount > 1) {\r\n            find.amount--;\r\n            this.total = this.total - Number(find.price);\r\n        } else {\r\n            this.items.splice(this.items.indexOf(find), 1);\r\n            this.total = this.total - Number(find.price);\r\n        }\r\n        this._render();\r\n    }\r\n}\r\n\r\nbasket.init();\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (basket);\n\n//# sourceURL=webpack:///./src/components/basket.js?");

      /***/
}),

/***/ "./src/components/product.js":
/*!***********************************!*\
  !*** ./src/components/product.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _basket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket */ \"./src/components/basket.js\");\n\r\n\r\n\r\nfunction createItem(id, name, price, img) {\r\n    return { id, name, price, img };\r\n};\r\n\r\nfunction initCatalog(qty) {\r\n    //let ids = [0, 1, 2, 3, 4, 5, 6, 7, 8];\r\n    //let names = [\"MANGO PEOPLE T-SHIRT\", \"MANGO PEOPLE T-SHIRT\", \"MANGO //PEOPLE T-SHIRT\", \"MANGO PEOPLE T-SHIRT\", \"MANGO PEOPLE T-SHIRT\",\r\n    //    \"MANGO PEOPLE T-SHIRT\", \"MANGO PEOPLE T-SHIRT\", \"MANGO PEOPLE T-// SHIRT\", \"MANGO PEOPLE T-SHIRT\"];\r\n\r\n    // let prices = [\"52.00\", \"62.00\", \"72.00\", \"82.00\", \"52.00\", \"62.00\", \"72.00\", \"82.00\", \"72.00\"];\r\n\r\n\r\n    let ids = [];\r\n    let names = [];\r\n    let imgs = [];\r\n    let prices = [];\r\n\r\n    for (let i = 0; i <= qty - 1; i++) {\r\n        ids.push(i);\r\n        names.push(\"MANGO PEOPLE T-SHIRT\");\r\n        prices.push(\"1\" + String(i) + \".00\");\r\n        imgs.push(\"../src/assets/imgs/Product\" + String(i + 1) + \".jpg\");\r\n    }\r\n\r\n    return names.map((names, index) => createItem(ids[index], names, prices[index], imgs[index]));\r\n};\r\n\r\nconst catalog = {\r\n    items: [],\r\n    container: null,\r\n    basket: _basket__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    comp: _basket__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    \r\n\r\n\r\n    init(qty) {\r\n        this.items = initCatalog(qty);\r\n        this.container = document.querySelector(\"#catalog\");\r\n        this._render(qty);\r\n        this._handleActions();\r\n    },\r\n    _handleActions() {\r\n        this.container.addEventListener('click', evt => {\r\n            if (evt.target.classList.contains(\"add\")) {\r\n                let item = {\r\n                    name: evt.target.dataset.name,\r\n                    price: +evt.target.dataset.price,\r\n                    img: evt.target.dataset.img,\r\n                    amount: 1,\r\n                    id: evt.target.dataset.id\r\n                }\r\n                this.basket.add(item);\r\n            }\r\n        })\r\n    },\r\n    _render() {\r\n\r\n        let str = \"\";\r\n        this.items.forEach(item => {\r\n            str += `\r\n            <div class=\"col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 feturedItems\" >\r\n                <div class=\"feturedItem\">\r\n                    <div class=\"feturedImgWrap\">\r\n                        <div class=\"feturedBuy\">\r\n                            <button class=\"add\" data-name=\"${item.name}\" data-price=\"${item.price}\" data-img=\"${item.img}\" data-id=\"${item.id}\">\r\n                                <div class=\"add\" data-name=\"${item.name}\" data-price=\"${item.price}\" data-img=\"${item.img}\" data-id=\"${item.id}\"><i class=\"add fas fa-shopping-cart\" data-name=\"${item.name}\" data-price=\"${item.price}\" data-img=\"${item.img}\" data-id=\"${item.id}\"></i>Add to Cart</div>\r\n                            </button>\r\n                        </div>\r\n                        <img class=\"feturedProduct\" src=\"${item.img}\" alt=\"product1\">\r\n                    </div>\r\n                    <div class=\"feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start\">\r\n                        <div class=\"feturedItemName\">${item.name}</div>\r\n                        <div class=\"feturedItemPrice\">$${item.price}</div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            `\r\n\r\n\r\n        })\r\n        this.container.innerHTML = str;\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (catalog);\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/product.js?");

      /***/
}),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/product */ \"./src/components/product.js\");\n\r\n\r\n_components_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\r\n_components_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].comp.init();\r\n_components_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].comp.add(item);\r\n_components_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].comp.remove(itemId);\n\n//# sourceURL=webpack:///./src/index.js?");

      /***/
})

  /******/
});
