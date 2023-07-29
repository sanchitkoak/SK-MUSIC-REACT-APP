exports.id = 291;
exports.ids = [291];
exports.modules = {

/***/ 4166:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 8178:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7977, 23))

/***/ }),

/***/ 124:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2015))

/***/ }),

/***/ 449:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6255));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5716));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4803));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7977, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2879))

/***/ }),

/***/ 4914:
/***/ (() => {



/***/ }),

/***/ 2015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function Error({ reset }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "error-page",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Something went wrong!"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                children: [
                    "For Developers: the occurrence of errors could be due to limitations on",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "gradient-text",
                        children: " Deezer API "
                    }),
                    "requests."
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>reset(),
                children: "Try again"
            })
        ]
    });
}
;


/***/ }),

/***/ 2879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const NavLink = ({ slug, children })=>{
    const segment = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSelectedLayoutSegment)() || "";
    const isActive = segment === slug;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/${slug}`,
        className: isActive ? "active" : null,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);


/***/ }),

/***/ 5716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ player_Player)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/wavesurfer.js/dist/wavesurfer.esm.js
var wavesurfer_esm = __webpack_require__(8118);
;// CONCATENATED MODULE: ./src/hooks/useWavesurfer.js


const options = {
    progressColor: "#1cc39f",
    waveColor: "#9094a7",
    fillParent: true,
    responsive: true,
    autoplay: true,
    cursorWidth: 0,
    barHeight: 0.5,
    barGap: 3
};
const useWavesurfer = (waveContainerRef, audioSrc, onFinish)=>{
    const waveSurferRef = (0,react_.useRef)(null);
    const [isPlaying, setIsPlaying] = (0,react_.useState)(false);
    const [audioVolume, setAudioVolume] = (0,react_.useState)({
        isMuted: false,
        value: 1
    });
    (0,react_.useEffect)(()=>{
        waveSurferRef.current = wavesurfer_esm/* default */.Z.create({
            ...options,
            url: audioSrc,
            container: waveContainerRef.current,
            height: waveContainerRef.current.clientHeight
        });
        waveSurferRef.current.on("play", ()=>setIsPlaying(true));
        waveSurferRef.current.on("pause", ()=>setIsPlaying(false));
        waveSurferRef.current.on("finish", ()=>onFinish());
        waveSurferRef.current.setVolume(audioVolume.isMuted ? 0 : audioVolume.value);
        return ()=>{
            waveSurferRef.current.destroy();
        };
    }, [
        audioSrc
    ]);
    waveSurferRef?.current?.setVolume(audioVolume.isMuted ? 0 : audioVolume.value);
    return {
        handlePlayPause: ()=>waveSurferRef?.current?.playPause(),
        audioVolume,
        setAudioVolume,
        isPlaying
    };
};
/* harmony default export */ const hooks_useWavesurfer = (useWavesurfer);

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slider/dist/index.mjs + 3 modules
var dist = __webpack_require__(8738);
;// CONCATENATED MODULE: ./src/components/player/VolumeSlider.jsx


const VolumeSlider = ({ onChange, audioVolume })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Root */.fC, {
        className: "slider-root",
        orientation: "vertical",
        min: 0,
        step: 0.1,
        max: 1,
        value: [
            audioVolume.isMuted ? 0 : audioVolume.value
        ],
        onValueChange: (value)=>onChange(value),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(dist/* Track */.fQ, {
                className: "slider-track",
                children: /*#__PURE__*/ jsx_runtime_.jsx(dist/* Range */.e6, {
                    className: "slider-range"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(dist/* Thumb */.bU, {
                className: "slider-thumb"
            })
        ]
    });
};
/* harmony default export */ const player_VolumeSlider = (VolumeSlider);

// EXTERNAL MODULE: ./src/utils/formatters.js
var formatters = __webpack_require__(7852);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(1560);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var index_esm = __webpack_require__(4348);
// EXTERNAL MODULE: ./src/redux/features/songsSlice.js
var songsSlice = __webpack_require__(7042);
;// CONCATENATED MODULE: ./src/components/player/Player.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Player = ()=>{
    const dispatch = (0,lib.useDispatch)();
    const waveContainerRef = (0,react_.useRef)(null);
    const { album, title, artist, preview: audioSrc, duration } = (0,lib.useSelector)(songsSlice/* selectCurrentSong */.W3);
    const { handlePlayPause, isPlaying, setAudioVolume, audioVolume } = hooks_useWavesurfer(waveContainerRef, audioSrc, ()=>dispatch((0,songsSlice/* playNextSong */.h_)()));
    const formattedDuration = (0,formatters/* formatDuration */.LU)(duration);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: audioSrc ? "player" : "player disable",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: album?.cover_medium,
                    alt: ""
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "song-details",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "song-title overflowing-text",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "artist-name",
                            children: artist?.name
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "control-buttons",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>dispatch((0,songsSlice/* playPreviousSong */.Fw)()),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* MdSkipPrevious */.Sw4, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "play-pause-btn",
                            onClick: audioSrc && handlePlayPause,
                            children: isPlaying ? /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* MdPause */.hPq, {}) : /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* MdPlayArrow */.Nhx, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>dispatch((0,songsSlice/* playNextSong */.h_)()),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* MdSkipNext */.p0p, {})
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "wave-container",
                    ref: waveContainerRef
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "duration",
                    children: formattedDuration
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "volume-slider-container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>setAudioVolume((prev)=>({
                                        ...prev,
                                        isMuted: prev.value <= 0 ? true : !prev.isMuted
                                    })),
                            children: audioVolume.isMuted ? /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* MdVolumeMute */.MCI, {}) : /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* MdVolumeUp */.hwG, {})
                        }),
                        audioSrc && /*#__PURE__*/ jsx_runtime_.jsx(player_VolumeSlider, {
                            audioVolume: audioVolume,
                            onChange: ([value])=>{
                                setAudioVolume({
                                    isMuted: value <= 0 ? true : false,
                                    value
                                });
                            }
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const player_Player = (Player);


/***/ }),

/***/ 4803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ searchbar_SearchBar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(9722);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var dist = __webpack_require__(8149);
// EXTERNAL MODULE: ./src/redux/features/songsSlice.js
var songsSlice = __webpack_require__(7042);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(1560);
;// CONCATENATED MODULE: ./src/components/searchbar/SearchResultItem.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const SearchResultItem = ({ type, result })=>{
    const router = (0,navigation.useRouter)();
    const dispatch = (0,lib.useDispatch)();
    const { id, name, title, picture_medium, md5_image } = result;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        onClick: type === "track" ? ()=>dispatch((0,songsSlice/* playSong */._n)({
                playlist: [
                    result
                ],
                index: 0
            })) : ()=>router.push(`/${type}/${id}`),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: picture_medium || `https://e-cdns-images.dzcdn.net/images/artist/${md5_image}/1000x1000-000000-80-0-0.jpg`,
                alt: title || name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "overflowing-text",
                children: name || title
            })
        ]
    });
};
/* harmony default export */ const searchbar_SearchResultItem = (SearchResultItem);

;// CONCATENATED MODULE: ./src/components/searchbar/SearchResults.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const SearchResults = ({ query })=>{
    const { data: resultsObj = {}, error, isLoading } = (0,dist/* default */.ZP)(query, async ()=>{
        const response = await fetch(`/api/search?q=${query}`);
        return await response.json();
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: query && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "search-results-container",
            children: [
                isLoading && /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: "Loading..."
                }),
                error && /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: "Something went wrong..."
                }),
                Object.keys(resultsObj).map((type)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: type + "s"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: !resultsObj[type].length ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "not-found-error",
                                    children: "Item not found. Please try a different search term."
                                }) : resultsObj[type].map((result)=>/*#__PURE__*/ jsx_runtime_.jsx(searchbar_SearchResultItem, {
                                        type: type,
                                        result: result
                                    }, result.id))
                            })
                        ]
                    }, type);
                })
            ]
        })
    });
};
/* harmony default export */ const searchbar_SearchResults = (SearchResults);

;// CONCATENATED MODULE: ./src/components/searchbar/SearchBar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const SearchBar = ()=>{
    const [searchQuery, setSearchQuery] = (0,react_.useState)("");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "searchbar",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiOutlineSearch */.RB5, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: "Search for songs, artists...",
                value: searchQuery,
                onChange: (e)=>setSearchQuery(e.target.value)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(searchbar_SearchResults, {
                query: searchQuery
            })
        ]
    });
};
/* harmony default export */ const searchbar_SearchBar = (SearchBar);


/***/ }),

/***/ 6255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ redux_ReduxProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/integration/react.js
var react = __webpack_require__(7370);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/index.js
var lib = __webpack_require__(7698);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(668);
// EXTERNAL MODULE: ./src/redux/features/songsSlice.js
var songsSlice = __webpack_require__(7042);
// EXTERNAL MODULE: ./src/redux/features/favoritesSlice.js
var favoritesSlice = __webpack_require__(869);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/storage/createWebStorage.js
var createWebStorage = __webpack_require__(1867);
;// CONCATENATED MODULE: ./src/redux/utils/storage.js

const isServer = "undefined" !== "undefined";
// If running on the server-side (RSC)
// fallback to a "noop storage" to prevent errors when creating synchronous storage
const createNoopStorage = ()=>{
    return {
        getItem (_key) {
            return Promise.resolve(null);
        },
        setItem (_key, value) {
            return Promise.resolve(value);
        },
        removeItem (_key) {
            return Promise.resolve();
        }
    };
};
const storage = isServer ? (0,createWebStorage/* default */.Z)("local") : createNoopStorage();
/* harmony default export */ const utils_storage = (storage);

;// CONCATENATED MODULE: ./src/redux/store.js





const persistConfig = {
    key: "favorites",
    storage: utils_storage
};
const persistedReducer = (0,lib.persistReducer)(persistConfig, favoritesSlice/* default */.ZP);
const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        songs: songsSlice/* default */.ZP,
        favorites: persistedReducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    lib.FLUSH,
                    lib.REHYDRATE,
                    lib.PAUSE,
                    lib.PERSIST,
                    lib.PURGE,
                    lib.REGISTER
                ]
            }
        })
});
/* harmony default export */ const redux_store = (store);

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var react_redux_lib = __webpack_require__(1560);
// EXTERNAL MODULE: ./node_modules/redux-persist/es/persistStore.js + 1 modules
var persistStore = __webpack_require__(9754);
;// CONCATENATED MODULE: ./src/redux/ReduxProvider.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const persistor = (0,persistStore/* default */.Z)(redux_store);
const ReduxProvider = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_redux_lib.Provider, {
        store: redux_store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react/* PersistGate */.r, {
            persistor: persistor,
            children: children
        })
    });
};
/* harmony default export */ const redux_ReduxProvider = (ReduxProvider);


/***/ }),

/***/ 869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tc: () => (/* binding */ selectFavorites),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   _p: () => (/* binding */ addToFavorites),
/* harmony export */   zm: () => (/* binding */ removeFromFavorites)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(668);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    album: [],
    track: [],
    radio: [],
    artist: [],
    playlist: []
};
const favoriteSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorites (state, { payload }) {
            const { type, id } = payload;
            state[type].push(id);
        },
        removeFromFavorites (state, { payload }) {
            const { type, id } = payload;
            state[type] = state[type].filter((favoriteId)=>favoriteId !== id);
        }
    }
});
const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
const selectFavorites = (state)=>state.favorites;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (favoriteSlice.reducer);


/***/ }),

/***/ 7042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fw: () => (/* binding */ playPreviousSong),
/* harmony export */   W3: () => (/* binding */ selectCurrentSong),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   _n: () => (/* binding */ playSong),
/* harmony export */   h_: () => (/* binding */ playNextSong)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(668);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    entities: [],
    activeEntity: null
};
const songsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "songs",
    initialState,
    reducers: {
        playSong (state, action) {
            const { payload } = action;
            return state = {
                entities: payload.playlist,
                activeEntity: payload.index
            };
        },
        playNextSong (state) {
            const { entities, activeEntity } = state;
            const isLastSong = entities.length - 1 <= activeEntity;
            if (isLastSong) {
                state.activeEntity = 0;
                return;
            }
            state.activeEntity = activeEntity + 1;
        },
        playPreviousSong (state) {
            const { entities, activeEntity } = state;
            if (activeEntity <= 0) {
                state.activeEntity = entities.length - 1;
                return;
            }
            state.activeEntity = activeEntity - 1;
        }
    }
});
const { playSong, playNextSong, playPreviousSong } = songsSlice.actions;
const selectCurrentSong = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state)=>state.songs, (songs)=>{
    return songs.entities[songs.activeEntity] || {};
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (songsSlice.reducer);


/***/ }),

/***/ 7852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JP: () => (/* binding */ compactNumber),
/* harmony export */   LU: () => (/* binding */ formatDuration),
/* harmony export */   Ws: () => (/* binding */ getYearFromDate)
/* harmony export */ });
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


/***/ }),

/***/ 3374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/sanchitkoak/Desktop/project-app/music-app/src/app/error.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 4986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.jsx","import":"Rubik","arguments":[{"subsets":["latin"]}],"variableName":"rubik"}
var layout_jsx_import_Rubik_arguments_subsets_latin_variableName_rubik_ = __webpack_require__(7893);
var layout_jsx_import_Rubik_arguments_subsets_latin_variableName_rubik_default = /*#__PURE__*/__webpack_require__.n(layout_jsx_import_Rubik_arguments_subsets_latin_variableName_rubik_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5553);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(495);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var fi_index_esm = __webpack_require__(3825);
// EXTERNAL MODULE: ./node_modules/react-icons/gi/index.esm.js
var gi_index_esm = __webpack_require__(4026);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./src/components/navigation/NavLink.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/sanchitkoak/Desktop/project-app/music-app/src/components/navigation/NavLink.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const NavLink = (__default__);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(4834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/navigation/Sidebar.jsx






const Sidebar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "sidebar",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                className: "app-logo",
                href: "/",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(gi_index_esm/* GiMusicSpell */.QlA, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "SK Music"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "DISCOVER"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink, {
                                    slug: "",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiFillHome */.V9Z, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Home"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink, {
                                    slug: "top_tracks",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(fi_index_esm/* FiMusic */.Xm1, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Songs"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink, {
                                    slug: "top_artists",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(fi_index_esm/* FiUsers */.WY8, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Artists"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink, {
                                    slug: "radio",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(fi_index_esm/* FiRadio */.rpR, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Radio"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "LIBRARY"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink, {
                                slug: "favorites",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(fi_index_esm/* FiHeart */.$aX, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Favorites"
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: "https://github.com/sanchitkoak/",
                target: "_blank",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiFillGithub */.RrF, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Github"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const navigation_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./src/components/player/Player.jsx

const Player_proxy = (0,module_proxy.createProxy)(String.raw`/Users/sanchitkoak/Desktop/project-app/music-app/src/components/player/Player.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Player_esModule, $$typeof: Player_$$typeof } = Player_proxy;
const Player_default_ = Player_proxy.default;


/* harmony default export */ const Player = (Player_default_);
;// CONCATENATED MODULE: ./src/components/searchbar/SearchBar.jsx

const SearchBar_proxy = (0,module_proxy.createProxy)(String.raw`/Users/sanchitkoak/Desktop/project-app/music-app/src/components/searchbar/SearchBar.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: SearchBar_esModule, $$typeof: SearchBar_$$typeof } = SearchBar_proxy;
const SearchBar_default_ = SearchBar_proxy.default;


/* harmony default export */ const SearchBar = (SearchBar_default_);
;// CONCATENATED MODULE: ./src/redux/ReduxProvider.jsx

const ReduxProvider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/sanchitkoak/Desktop/project-app/music-app/src/redux/ReduxProvider.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ReduxProvider_esModule, $$typeof: ReduxProvider_$$typeof } = ReduxProvider_proxy;
const ReduxProvider_default_ = ReduxProvider_proxy.default;


/* harmony default export */ const ReduxProvider = (ReduxProvider_default_);
;// CONCATENATED MODULE: ./src/app/layout.jsx







const metadata = {
    title: "Music platform",
    description: "Discover new artists and music. Find top trending songs, artists information, and album tracklists."
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        className: (layout_jsx_import_Rubik_arguments_subsets_latin_variableName_rubik_default()).className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: "./favicon.png",
                sizes: "any"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ReduxProvider, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(navigation_Sidebar, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                                        children: children
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Player, {})
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 7877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7887);


const loading = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "loader",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loading);


/***/ }),

/***/ 8276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4834);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function NotFound() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "not-found-page",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                children: [
                    "The page you looking for is ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "gradient-text",
                        children: "not found"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                children: "The link you followed may ne broken, or the page may have been removed"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                children: "View Home Page"
            })
        ]
    });
}
;


/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;