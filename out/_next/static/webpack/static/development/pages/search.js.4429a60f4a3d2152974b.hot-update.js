webpackHotUpdate("static\\development\\pages\\search.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      result = _useState[0],
      setResult = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var search = q.toLowerCase();
    var results = products.filter(function (product) {
      return product.name.toLowerCase().includes(search) || product.description.toLowerCase().includes(search);
    });
    setResult(results);
  }, [q, products]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "product-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", {
    className: "bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, result.map(function (product) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_layout_ProductDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: product.id,
      product: product,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 29
      }
    });
  }))))));
};

_s(Search, "rs6E0LF8N+wHjH3mSvQYc20lVFc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWFyY2guanMiXSwibmFtZXMiOlsiU2VhcmNoIiwicm91dGVyIiwidXNlUm91dGVyIiwicSIsInF1ZXJ5IiwidXNlUHJvZHVjdHMiLCJwcm9kdWN0cyIsInVzZVN0YXRlIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwidXNlRWZmZWN0Iiwic2VhcmNoIiwidG9Mb3dlckNhc2UiLCJyZXN1bHRzIiwiZmlsdGVyIiwicHJvZHVjdCIsIm5hbWUiLCJpbmNsdWRlcyIsImRlc2NyaXB0aW9uIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFFakIsTUFBTUMsTUFBTSxHQUFJQyw2REFBUyxFQUF6QjtBQUZpQixNQUdEQyxDQUhDLEdBR01GLE1BSE4sQ0FHVkcsS0FIVSxDQUdERCxDQUhDLEVBS2pCOztBQUxpQixxQkFNSUUsa0VBQVcsQ0FBQyxRQUFELENBTmY7QUFBQSxNQU1UQyxRQU5TLGdCQU1UQSxRQU5TOztBQUFBLGtCQU9XQyxzREFBUSxDQUFDLEVBQUQsQ0FQbkI7QUFBQSxNQU9WQyxNQVBVO0FBQUEsTUFPRkMsU0FQRTs7QUFTakJDLHlEQUFTLENBQUMsWUFBSztBQUVYLFFBQU1DLE1BQU0sR0FBR1IsQ0FBQyxDQUFDUyxXQUFGLEVBQWY7QUFDQSxRQUFNQyxPQUFPLEdBQUdQLFFBQVEsQ0FBQ1EsTUFBVCxDQUFnQixVQUFBQyxPQUFPLEVBQUk7QUFDdkMsYUFDSUEsT0FBTyxDQUFDQyxJQUFSLENBQWFKLFdBQWIsR0FBMkJLLFFBQTNCLENBQW9DTixNQUFwQyxLQUNBSSxPQUFPLENBQUNHLFdBQVIsQ0FBb0JOLFdBQXBCLEdBQWtDSyxRQUFsQyxDQUEyQ04sTUFBM0MsQ0FGSjtBQUtILEtBTmUsQ0FBaEI7QUFPQUYsYUFBUyxDQUFDSSxPQUFELENBQVQ7QUFDSCxHQVhRLEVBV1AsQ0FBQ1YsQ0FBRCxFQUFJRyxRQUFKLENBWE8sQ0FBVDtBQWFGLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLDBEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUUsTUFBTSxDQUFDVyxHQUFQLENBQVcsVUFBQUosT0FBTztBQUFBLFdBQ2QsMERBQUMseUVBQUQ7QUFDSSxTQUFHLEVBQUVBLE9BQU8sQ0FBQ0ssRUFEakI7QUFFSSxhQUFPLEVBQUVMLE9BRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURjO0FBQUEsR0FBbEIsQ0FESixDQURKLENBREYsQ0FESixDQURKLENBREo7QUFrQkQsQ0F4Q0Q7O0dBQU1mLE07VUFFY0UscUQsRUFJS0csMEQ7OztLQU5uQkwsTTtBQXlDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNlYXJjaC5qcy40NDI5YTYwZjRhM2QyMTUyOTc0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQge3VzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZVByb2R1Y3RzIGZyb20gXCIuLi9ob29rcy91c2VQcm9kdWN0c1wiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvUHJvZHVjdERldGFpbHMnO1xyXG5cclxuXHJcbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7cXVlcnkgOiB7cX19ID0gIHJvdXRlcjtcclxuICAgIFxyXG4gICAgLy9hbGwgcHJvZHVjdHNcclxuICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHVzZVByb2R1Y3RzKCdjcmVhZG8nKTtcclxuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IHEudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gcHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gpIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFJlc3VsdChyZXN1bHRzKTtcclxuICAgIH0sW3EsIHByb2R1Y3RzXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsICBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHQubWFwKHByb2R1Y3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICkpfSBcclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=