"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_ssr_src_components_page_heading_tsx";
exports.ids = ["_ssr_src_components_page_heading_tsx"];
exports.modules = {

/***/ "(ssr)/./src/components/general/heading.tsx":
/*!********************************************!*\
  !*** ./src/components/general/heading.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Heading)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Heading({ type, children }) {\n    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(type, {}, children);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL2hlYWRpbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUNzQztBQU12QixTQUFTQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFnQztJQUM1RSxxQkFBT0gsb0RBQWFBLENBQUNFLE1BQU0sQ0FBQyxHQUFHQztBQUNuQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbW1lcmNlLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9oZWFkaW5nLnRzeD80MGIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwiQC90eXBlcy9jb21wb25lbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEhlYWRpbmdQcm9wcyB7XG4gICAgdHlwZTogJ2gxJyB8ICdoMicgfCAnaDMnIHwgJ2g0JyB8ICdoNScgfCAnaDYnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkaW5nKHsgdHlwZSwgY2hpbGRyZW4gfTogQ29tcG9uZW50UHJvcHM8SGVhZGluZ1Byb3BzPikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHR5cGUsIHt9LCBjaGlsZHJlbik7XG59Il0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJIZWFkaW5nIiwidHlwZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./src/components/general/heading.tsx\n");

/***/ }),

/***/ "(ssr)/./src/components/page/heading.tsx":
/*!*****************************************!*\
  !*** ./src/components/page/heading.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PageHeading)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_useSiteStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/useSiteStore */ \"(ssr)/./src/store/useSiteStore.ts\");\n/* harmony import */ var _general_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/heading */ \"(ssr)/./src/components/general/heading.tsx\");\n/* harmony import */ var _utils_debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/debug */ \"(ssr)/./src/utils/debug.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction PageHeading() {\n    const titles = (0,_store_useSiteStore__WEBPACK_IMPORTED_MODULE_1__.useSiteStore)((state)=>state.activePage.titles);\n    const locale = (0,_store_useSiteStore__WEBPACK_IMPORTED_MODULE_1__.useSiteStore)((state)=>state.siteData.currentLanguage);\n    const heading = titles?.[locale];\n    (0,_utils_debug__WEBPACK_IMPORTED_MODULE_3__.useDebug)(\"PageHeading\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_general_heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        type: \"h1\",\n        children: heading\n    }, void 0, false, {\n        fileName: \"/home/siim/www/commerce/commerce/src/components/page/heading.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvY29tcG9uZW50cy9wYWdlL2hlYWRpbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFb0Q7QUFDWDtBQUNBO0FBRTFCLFNBQVNHO0lBQ3BCLE1BQU1DLFNBQVNKLGlFQUFZQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1DLFVBQVUsQ0FBQ0YsTUFBTTtJQUM5RCxNQUFNRyxTQUFTUCxpRUFBWUEsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNRyxRQUFRLENBQUNDLGVBQWU7SUFDckUsTUFBTUMsVUFBVU4sUUFBUSxDQUFDRyxPQUFPO0lBRWhDTCxzREFBUUEsQ0FBQztJQUVULHFCQUNJLDhEQUFDRCx3REFBT0E7UUFBQ1UsTUFBSztrQkFBTUQ7Ozs7OztBQUU1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbW1lcmNlLy4vc3JjL2NvbXBvbmVudHMvcGFnZS9oZWFkaW5nLnRzeD80OTE2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTaXRlU3RvcmUgfSBmcm9tIFwiQC9zdG9yZS91c2VTaXRlU3RvcmVcIjtcbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuLi9nZW5lcmFsL2hlYWRpbmdcIjtcbmltcG9ydCB7IHVzZURlYnVnIH0gZnJvbSBcIkAvdXRpbHMvZGVidWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUhlYWRpbmcoKSB7XG4gICAgY29uc3QgdGl0bGVzID0gdXNlU2l0ZVN0b3JlKChzdGF0ZSkgPT4gc3RhdGUuYWN0aXZlUGFnZS50aXRsZXMpO1xuICAgIGNvbnN0IGxvY2FsZSA9IHVzZVNpdGVTdG9yZSgoc3RhdGUpID0+IHN0YXRlLnNpdGVEYXRhLmN1cnJlbnRMYW5ndWFnZSk7XG4gICAgY29uc3QgaGVhZGluZyA9IHRpdGxlcz8uW2xvY2FsZV07XG5cbiAgICB1c2VEZWJ1ZygnUGFnZUhlYWRpbmcnKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIZWFkaW5nIHR5cGU9XCJoMVwiPntoZWFkaW5nfTwvSGVhZGluZz5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTaXRlU3RvcmUiLCJIZWFkaW5nIiwidXNlRGVidWciLCJQYWdlSGVhZGluZyIsInRpdGxlcyIsInN0YXRlIiwiYWN0aXZlUGFnZSIsImxvY2FsZSIsInNpdGVEYXRhIiwiY3VycmVudExhbmd1YWdlIiwiaGVhZGluZyIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./src/components/page/heading.tsx\n");

/***/ }),

/***/ "(ssr)/./src/utils/debug.ts":
/*!****************************!*\
  !*** ./src/utils/debug.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDebug: () => (/* binding */ useDebug)\n/* harmony export */ });\n/* __next_internal_client_entry_do_not_use__ useDebug auto */ const useDebug = (name)=>{\n    console.log(`${name} updated`);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvdXRpbHMvZGVidWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs4REFFTyxNQUFNQSxXQUFXLENBQUNDO0lBQ3JCQyxRQUFRQyxHQUFHLENBQUMsQ0FBQyxFQUFFRixLQUFLLFFBQVEsQ0FBQztBQUNqQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tbWVyY2UvLi9zcmMvdXRpbHMvZGVidWcudHM/YjY0YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuZXhwb3J0IGNvbnN0IHVzZURlYnVnID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGAke25hbWV9IHVwZGF0ZWRgKTtcbn07Il0sIm5hbWVzIjpbInVzZURlYnVnIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./src/utils/debug.ts\n");

/***/ })

};
;