"use strict";
exports.id = 570;
exports.ids = [570];
exports.modules = {

/***/ 810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ others_Carousel)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/utils/carousel.js
/**
 * Retrieves data about the carousel based on the provided carousel element.
 *
 * @param {HTMLElement} carousel - The HTML element representing the carousel.
 * @returns {Object} An object containing carousel data.
 * @property {number} childWidth - The width of each child element in the carousel.
 * @property {number} lastSlide - The index of the last slide in the carousel.
 */ const getCarouselData = (carousel)=>{
    const childWidth = carousel.scrollWidth / carousel.children.length;
    const childsInSlide = Math.floor(carousel.clientWidth / childWidth);
    const lastSlide = carousel.children.length - (childsInSlide || 1);
    return {
        childWidth,
        lastSlide
    };
};

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/hooks/useCarousel.js


const useCarousel = ()=>{
    const slide = (0,react_.useRef)(0);
    const carouselRef = (0,react_.useRef)(null);
    const setSlide = (slideIndex)=>{
        slide.current = slideIndex;
        const { childWidth } = getCarouselData(carouselRef.current);
        carouselRef.current.style.transform = `translateX(-${childWidth * slideIndex}px)`;
    };
    const next = ()=>{
        const { lastSlide } = getCarouselData(carouselRef.current);
        const newIndex = lastSlide === slide.current ? 0 : slide.current + 1;
        setSlide(newIndex);
    };
    const prev = ()=>{
        const { lastSlide } = getCarouselData(carouselRef.current);
        const newIndex = slide.current === 0 ? lastSlide : slide.current - 1;
        setSlide(newIndex);
    };
    return {
        carouselRef,
        next,
        prev
    };
};
/* harmony default export */ const hooks_useCarousel = (useCarousel);

;// CONCATENATED MODULE: ./src/components/others/Carousel.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

const Carousel = ({ children, header })=>{
    const { carouselRef, next, prev } = hooks_useCarousel();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "carousel-header-container",
                children: [
                    header && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: header
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "carousel-buttons",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: prev,
                                children: "<"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: next,
                                children: ">"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "carousel",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    ref: carouselRef,
                    children: children
                })
            })
        ]
    });
};
/* harmony default export */ const others_Carousel = (Carousel);


/***/ }),

/***/ 3942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4834);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7887);



const LinkCardItem = ({ href, imgSrc, title, description })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: "card-container",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: imgSrc,
                    alt: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                    children: title
                }),
                description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                    children: description
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkCardItem);


/***/ }),

/***/ 7619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/sanchitkoak/Desktop/project-app/music-app/src/components/others/Carousel.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 1517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JP: () => (/* binding */ compactNumber),
/* harmony export */   Ws: () => (/* binding */ getYearFromDate)
/* harmony export */ });
/* unused harmony export formatDuration */
function getYearFromDate(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
}
function compactNumber(number) {
    return Intl.NumberFormat("en-us", {
        notation: "compact"
    }).format(number);
}
;
const formatDuration = (time)=>{
    if (isNaN(time)) {
        return "00:00";
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const padNumber = (number)=>String(number).padStart(2, 0);
    return padNumber(minutes) + ":" + padNumber(seconds);
};


/***/ })

};
;