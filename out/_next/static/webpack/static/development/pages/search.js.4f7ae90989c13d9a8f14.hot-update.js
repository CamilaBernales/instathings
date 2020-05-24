webpackHotUpdate("static\\development\\pages\\search.js",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useProducts */ "./hooks/useProducts.js");
/* harmony import */ var _components_layout_ProductDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/ProductDetails */ "./components/layout/ProductDetails.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Camila Bernales\\Documents\\Programacion\\REACT\\producthuntclone\\pages\\search.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Search = function Search() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var q = router.query.q; //all products

  var _useProducts = Object(_hooks_useProducts__WEBPACK_IMPORTED_MODULE_3__["default"])('creado'),
      products = _useProducts.products;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var search = q.toLowerCase();
    var results = products.filter(function (product) {
      return product.name.toLowerCase().includes(search);
    });
    console.log(results);
  }, [q, products]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, "Search")));
};

_s(Search, "H6si0ma0v2YPRIN7GZ95o+0Wu4I=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], _hooks_useProducts__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWFyY2guanMiXSwibmFtZXMiOlsiU2VhcmNoIiwicm91dGVyIiwidXNlUm91dGVyIiwicSIsInF1ZXJ5IiwidXNlUHJvZHVjdHMiLCJwcm9kdWN0cyIsInVzZUVmZmVjdCIsInNlYXJjaCIsInRvTG93ZXJDYXNlIiwicmVzdWx0cyIsImZpbHRlciIsInByb2R1Y3QiLCJuYW1lIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBRWpCLE1BQU1DLE1BQU0sR0FBSUMsNkRBQVMsRUFBekI7QUFGaUIsTUFHREMsQ0FIQyxHQUdNRixNQUhOLENBR1ZHLEtBSFUsQ0FHREQsQ0FIQyxFQUtqQjs7QUFMaUIscUJBTUlFLGtFQUFXLENBQUMsUUFBRCxDQU5mO0FBQUEsTUFNVEMsUUFOUyxnQkFNVEEsUUFOUzs7QUFRakJDLHlEQUFTLENBQUMsWUFBSztBQUVYLFFBQU1DLE1BQU0sR0FBR0wsQ0FBQyxDQUFDTSxXQUFGLEVBQWY7QUFDQSxRQUFNQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0ssTUFBVCxDQUFnQixVQUFBQyxPQUFPLEVBQUk7QUFDdkMsYUFDSUEsT0FBTyxDQUFDQyxJQUFSLENBQWFKLFdBQWIsR0FBMkJLLFFBQTNCLENBQW9DTixNQUFwQyxDQURKO0FBSUgsS0FMZSxDQUFoQjtBQU1BTyxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sT0FBWjtBQUNILEdBVlEsRUFVUCxDQUFDUCxDQUFELEVBQUlHLFFBQUosQ0FWTyxDQUFUO0FBWUYsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksMERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixDQURKLENBREo7QUFPRCxDQTNCRDs7R0FBTU4sTTtVQUVjRSxxRCxFQUlLRywwRDs7O0tBTm5CTCxNO0FBNEJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2VhcmNoLmpzLjRmN2FlOTA5ODljMTNkOWE4ZjE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHt1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB1c2VQcm9kdWN0cyBmcm9tIFwiLi4vaG9va3MvdXNlUHJvZHVjdHNcIjtcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1Byb2R1Y3REZXRhaWxzJztcclxuXHJcblxyXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyICA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge3F1ZXJ5IDoge3F9fSA9ICByb3V0ZXI7XHJcbiAgICBcclxuICAgIC8vYWxsIHByb2R1Y3RzXHJcbiAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSB1c2VQcm9kdWN0cygnY3JlYWRvJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG5cclxuICAgICAgICBjb25zdCBzZWFyY2ggPSBxLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cylcclxuICAgIH0sW3EsIHByb2R1Y3RzXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgPGgxPlNlYXJjaDwvaDE+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=