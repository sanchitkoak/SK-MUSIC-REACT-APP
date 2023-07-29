"use strict";
exports.id = 963;
exports.ids = [963];
exports.modules = {

/***/ 4963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IJ: () => (/* binding */ fetchTrack),
/* harmony export */   J2: () => (/* binding */ fetchTopRadio),
/* harmony export */   KN: () => (/* binding */ fetchTopArtists),
/* harmony export */   Lz: () => (/* binding */ fetchAlbum),
/* harmony export */   SP: () => (/* binding */ fetchTopTracks),
/* harmony export */   _Y: () => (/* binding */ fetchPlaylist),
/* harmony export */   hf: () => (/* binding */ fetchTopPlaylists),
/* harmony export */   id: () => (/* binding */ fetchArtistTopTracks),
/* harmony export */   p_: () => (/* binding */ fetchRadio),
/* harmony export */   rf: () => (/* binding */ fetchArtist),
/* harmony export */   xz: () => (/* binding */ fetchArtistAlbums),
/* harmony export */   y_: () => (/* binding */ fetchSearchData)
/* harmony export */ });
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8875);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);

const base = "https://api.deezer.com";
async function fetchData(endpoint) {
    const response = await fetch(base + endpoint);
    const data = await response.json();
    // Deezer API internal notfound error
    if (data.error?.code === 800) {
        return (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.notFound)();
    }
    return data;
}
async function fetchTrack(id) {
    const endpoint = `/track/${id}`;
    const data = await fetchData(endpoint);
    return data;
}
async function fetchTopTracks({ limit = 10 } = {}) {
    const endpoint = `/chart/0/tracks?limit=${limit}`;
    const { data } = await fetchData(endpoint);
    return data;
}
async function fetchTopArtists({ limit = 3 } = {}) {
    const endpoint = `/chart/0/artists?limit=${limit}`;
    const { data } = await fetchData(endpoint);
    const promises = data.map((artist)=>fetchArtist(artist.id));
    const topArtists = await Promise.all(promises);
    return topArtists;
}
async function fetchTopPlaylists() {
    const endpoint = `/chart/0/playlists`;
    const { data } = await fetchData(endpoint);
    return data;
}
async function fetchArtist(id) {
    const endpoint = `/artist/${id}`;
    const data = await fetchData(endpoint);
    return data;
}
async function fetchArtistTopTracks(id) {
    const endpoint = `/artist/${id}/top`;
    const { data } = await fetchData(endpoint);
    return data;
}
async function fetchArtistAlbums(id, { limit = 9999 } = {}) {
    const endpoint = `/artist/${id}/albums?limit=${limit}`;
    const { data } = await fetchData(endpoint);
    return data;
}
async function fetchAlbum(id) {
    const endpoint = `/album/${id}`;
    const data = await fetchData(endpoint);
    return data;
}
async function fetchPlaylist(id) {
    const endpoint = `/playlist/${id}`;
    const data = await fetchData(endpoint);
    return data;
}
async function fetchTopRadio() {
    const endpoint = "/radio/top";
    const { data } = await fetchData(endpoint);
    return data;
}
async function fetchRadio(id) {
    const radioPromise = fetchData(`/radio/${id}`);
    const trackListPromise = fetchData(`/radio/${id}/tracks`);
    const [radio, tracks] = await Promise.all([
        radioPromise,
        trackListPromise
    ]);
    return {
        ...radio,
        tracks: tracks.data
    };
}
async function fetchSearchData(query, { limit = 3 } = {}) {
    const endpoint = (category)=>`/search/${category}?q=${query}&limit=${limit}`;
    const tracksPromise = fetchData(endpoint("track"));
    const albumsPromise = fetchData(endpoint("album"));
    const artistsPromise = fetchData(endpoint("artist"));
    return await Promise.all([
        tracksPromise,
        albumsPromise,
        artistsPromise
    ]);
}


/***/ })

};
;