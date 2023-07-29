"use strict";
exports.id = 609;
exports.ids = [609];
exports.modules = {

/***/ 4609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ others_TrackListContainer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7887);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./src/components/list-items/TrackListItem.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/sanchitkoak/Desktop/project-app/music-app/src/components/list-items/TrackListItem.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const TrackListItem = (__default__);
;// CONCATENATED MODULE: ./src/components/others/TrackListContainer.jsx



const TrackListContainer = ({ header, tracks })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "track-list-container",
        children: [
            !!header && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: header
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: tracks.map((track, index)=>/*#__PURE__*/ jsx_runtime_.jsx(TrackListItem, {
                        index: index,
                        playlist: tracks,
                        track: track
                    }, track.id))
            })
        ]
    });
};
/* harmony default export */ const others_TrackListContainer = (TrackListContainer);


/***/ })

};
;