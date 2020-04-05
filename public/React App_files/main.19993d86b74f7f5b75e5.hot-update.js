webpackHotUpdate("main",{

/***/ "./src/components/NewsLists/NewsList.js":
/*!**********************************************!*\
  !*** ./src/components/NewsLists/NewsList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_requestService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/requestService */ "./src/utils/requestService.js");
/* harmony import */ var _utils_requestService__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_requestService__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NewsLists_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewsLists.module.scss */ "./src/components/NewsLists/NewsLists.module.scss");
/* harmony import */ var _NewsLists_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NewsLists_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/rakkumar0/Documents/Projects/TGA/hacker-news/src/components/NewsLists/NewsList.js";




function NewsLists() {
  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const [newsLists, setNewsLists] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getNewLists();
  }, [page]);

  const loadMoreNews = () => {
    setPage(page + 1);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _NewsLists_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ListContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "total-records",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Total records found ", newsLists && newsLists.hits.length), newsLists && newsLists.hits.length ? newsLists.hits.map(item => {
    return item.title;
  }) : "loading...");

  async function getNewLists() {
    const response = await _utils_requestService__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/search?page=${page}`);

    if (response && response.data) {
      setNewsLists(response.data);
      console.log(newsLists, page, "==============");
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (NewsLists);

/***/ })

})
//# sourceMappingURL=main.19993d86b74f7f5b75e5.hot-update.js.map