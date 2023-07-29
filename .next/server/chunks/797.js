"use strict";
exports.id = 797;
exports.ids = [797];
exports.modules = {

/***/ 3357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_fetchers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4963);
/* harmony import */ var _list_items_LinkCardItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3942);
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1517);




const TopArtistsContainer = async ({ limit })=>{
    const artists = await (0,_utils_fetchers__WEBPACK_IMPORTED_MODULE_1__/* .fetchTopArtists */ .KN)({
        limit
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "top-artists-container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Top Artist"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: artists.map((artist)=>{
                    const { id, name, picture_medium, nb_album, nb_fan } = artist;
                    const formattedFanNumber = (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__/* .compactNumber */ .JP)(nb_fan);
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_list_items_LinkCardItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        title: name,
                        imgSrc: picture_medium,
                        href: `/artist/${id}`,
                        description: `${formattedFanNumber} Fans | ${nb_album} Albums`
                    }, id);
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopArtistsContainer);


/***/ })

};
;