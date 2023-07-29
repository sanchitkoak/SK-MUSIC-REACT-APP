"use strict";
exports.id = 874;
exports.ids = [874];
exports.modules = {

/***/ 6874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7852);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1560);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_features_songsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7042);
/* harmony import */ var _others_FavoriteButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2656);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const TrackListItem = ({ index, playlist, track: { id, title, duration, artist, album, type } })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const formattedDuration = (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_6__/* .formatDuration */ .LU)(duration);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: "track-list-item",
        onClick: ()=>dispatch((0,_redux_features_songsSlice__WEBPACK_IMPORTED_MODULE_4__/* .playSong */ ._n)({
                index,
                playlist
            })),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: album.cover_medium,
                alt: ""
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "song-details",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                className: "overflowing-text",
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/artist/${artist.id}`,
                                className: "artist-name overflowing-text",
                                onClick: (e)=>e.stopPropagation(),
                                children: artist.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: formattedDuration
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_others_FavoriteButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        id: id,
                        type: type
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrackListItem);


/***/ }),

/***/ 2656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_features_favoritesSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(869);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9722);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1560);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const FavoriteButton = ({ type, id })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const favorites = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_features_favoritesSlice__WEBPACK_IMPORTED_MODULE_1__/* .selectFavorites */ .Tc);
    const isFavorite = favorites[type].find((favoriteId)=>favoriteId === id);
    const handleFavoriteClick = (e)=>{
        e.stopPropagation();
        isFavorite ? dispatch((0,_redux_features_favoritesSlice__WEBPACK_IMPORTED_MODULE_1__/* .removeFromFavorites */ .zm)({
            type,
            id
        })) : dispatch((0,_redux_features_favoritesSlice__WEBPACK_IMPORTED_MODULE_1__/* .addToFavorites */ ._p)({
            type,
            id
        }));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: isFavorite ? `favorite active` : "favorite",
        onClick: handleFavoriteClick,
        children: isFavorite ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__/* .AiFillHeart */ .M_L, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__/* .AiOutlineHeart */ .lo, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteButton);


/***/ })

};
;