"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=Box,Container,ThemeProvider!=!./node_modules/@mui/material/index.js":
/*!*****************************************************************************************************!*\
  !*** __barrel_optimize__?names=Box,Container,ThemeProvider!=!./node_modules/@mui/material/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Box: () => (/* reexport default from dynamic */ _Box__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   Container: () => (/* reexport default from dynamic */ _Container__WEBPACK_IMPORTED_MODULE_1___default.a),\n/* harmony export */   ThemeProvider: () => (/* reexport safe */ _Users_salomon_Documents_Projects_seguimiento_vita_front_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ \"./node_modules/@mui/material/node/Box/index.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Box__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ \"./node_modules/@mui/material/node/Container/index.js\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Container__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_salomon_Documents_Projects_seguimiento_vita_front_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"./node_modules/@mui/material/styles/index.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Cb3gsQ29udGFpbmVyLFRoZW1lUHJvdmlkZXIhPSEuL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNzQztBQUNZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VndWltaWVudG8tdml0YS1mcm9udC8uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2luZGV4LmpzP2EzZTYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gXCIuL0JveFwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhaW5lciB9IGZyb20gXCIuL0NvbnRhaW5lclwiXG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIi9Vc2Vycy9zYWxvbW9uL0RvY3VtZW50cy9Qcm9qZWN0cy9zZWd1aW1pZW50by12aXRhLWZyb250L25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9pbmRleC5qc1wiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Box,Container,ThemeProvider!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Box_Container_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,ThemeProvider!=!@mui/material */ \"__barrel_optimize__?names=Box,Container,ThemeProvider!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ \"./src/theme.js\");\n/* harmony import */ var _fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/roboto/300.css */ \"./node_modules/@fontsource/roboto/300.css\");\n/* harmony import */ var _fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fontsource/roboto/400.css */ \"./node_modules/@fontsource/roboto/400.css\");\n/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fontsource/roboto/500.css */ \"./node_modules/@fontsource/roboto/500.css\");\n/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fontsource/roboto/700.css */ \"./node_modules/@fontsource/roboto/700.css\");\n/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction Layout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {\n        theme: _theme__WEBPACK_IMPORTED_MODULE_1__.theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {\n            maxWidth: \"lg\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                sx: {\n                    minHeight: \"100vh\",\n                    py: 4\n                },\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/salomon/Documents/Projects/seguimiento-vita-front/src/components/Layout.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/salomon/Documents/Projects/seguimiento-vita-front/src/components/Layout.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/salomon/Documents/Projects/seguimiento-vita-front/src/components/Layout.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEQ7QUFDN0I7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUVyQixTQUFTSSxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUN6QyxxQkFDRSw4REFBQ0gsMEdBQWFBO1FBQUNDLE9BQU9BLHlDQUFLQTtrQkFDekIsNEVBQUNGLHNHQUFTQTtZQUFDSyxVQUFTO3NCQUNsQiw0RUFBQ04sZ0dBQUdBO2dCQUFDTyxJQUFJO29CQUFFQyxXQUFXO29CQUFTQyxJQUFJO2dCQUFFOzBCQUNsQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWCIsInNvdXJjZXMiOlsid2VicGFjazovL3NlZ3VpbWllbnRvLXZpdGEtZnJvbnQvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanM/ZmU2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi90aGVtZSc7XG5pbXBvcnQgJ0Bmb250c291cmNlL3JvYm90by8zMDAuY3NzJztcbmltcG9ydCAnQGZvbnRzb3VyY2Uvcm9ib3RvLzQwMC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9yb2JvdG8vNTAwLmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL3JvYm90by83MDAuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgPEJveCBzeD17eyBtaW5IZWlnaHQ6ICcxMDB2aCcsIHB5OiA0IH19PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59Il0sIm5hbWVzIjpbIkJveCIsIkNvbnRhaW5lciIsIlRoZW1lUHJvdmlkZXIiLCJ0aGVtZSIsIkxheW91dCIsImNoaWxkcmVuIiwibWF4V2lkdGgiLCJzeCIsIm1pbkhlaWdodCIsInB5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.js\");\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/salomon/Documents/Projects/seguimiento-vita-front/src/pages/_app.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/salomon/Documents/Projects/seguimiento-vita-front/src/pages/_app.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQztBQUUxQyxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSCwwREFBTUE7a0JBQ0wsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlZ3VpbWllbnRvLXZpdGEtZnJvbnQvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiTGF5b3V0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   theme: () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: \"#FFC901\"\n        },\n        background: {\n            default: \"#FFFFFF\",\n            paper: \"#F7F7F7\"\n        },\n        text: {\n            primary: \"#000000\"\n        }\n    },\n    typography: {\n        fontFamily: \"Roboto, Arial, sans-serif\",\n        h4: {\n            fontSize: \"1.5rem\",\n            fontWeight: 500\n        },\n        h5: {\n            fontSize: \"1.25rem\",\n            fontWeight: 500\n        },\n        body1: {\n            fontSize: \"1rem\"\n        }\n    },\n    components: {\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    textTransform: \"none\",\n                    borderRadius: 25,\n                    padding: \"8px 24px\"\n                },\n                outlined: {\n                    borderColor: \"#000\",\n                    color: \"#000\",\n                    \"&:hover\": {\n                        borderColor: \"#000\",\n                        backgroundColor: \"rgba(0, 0, 0, 0.04)\"\n                    }\n                }\n            }\n        },\n        MuiStepLabel: {\n            styleOverrides: {\n                root: {\n                    flexDirection: \"row\",\n                    alignItems: \"center\"\n                },\n                iconContainer: {\n                    background: \"#FFC901\",\n                    borderRadius: \"50%\",\n                    padding: 8,\n                    marginRight: 16\n                }\n            }\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBRTVDLE1BQU1DLFFBQVFELGlFQUFXQSxDQUFDO0lBQy9CRSxTQUFTO1FBQ1BDLFNBQVM7WUFDUEMsTUFBTTtRQUNSO1FBQ0FDLFlBQVk7WUFDVkMsU0FBUztZQUNUQyxPQUFPO1FBQ1Q7UUFDQUMsTUFBTTtZQUNKTCxTQUFTO1FBQ1g7SUFDRjtJQUNBTSxZQUFZO1FBQ1ZDLFlBQVk7UUFDWkMsSUFBSTtZQUNGQyxVQUFVO1lBQ1ZDLFlBQVk7UUFDZDtRQUNBQyxJQUFJO1lBQ0ZGLFVBQVU7WUFDVkMsWUFBWTtRQUNkO1FBQ0FFLE9BQU87WUFDTEgsVUFBVTtRQUNaO0lBQ0Y7SUFDQUksWUFBWTtRQUNWQyxXQUFXO1lBQ1RDLGdCQUFnQjtnQkFDZEMsTUFBTTtvQkFDSkMsZUFBZTtvQkFDZkMsY0FBYztvQkFDZEMsU0FBUztnQkFDWDtnQkFDQUMsVUFBVTtvQkFDUkMsYUFBYTtvQkFDYkMsT0FBTztvQkFDUCxXQUFXO3dCQUNURCxhQUFhO3dCQUNiRSxpQkFBaUI7b0JBQ25CO2dCQUNGO1lBQ0Y7UUFDRjtRQUNBQyxjQUFjO1lBQ1pULGdCQUFnQjtnQkFDZEMsTUFBTTtvQkFDSlMsZUFBZTtvQkFDZkMsWUFBWTtnQkFDZDtnQkFDQUMsZUFBZTtvQkFDYnpCLFlBQVk7b0JBQ1pnQixjQUFjO29CQUNkQyxTQUFTO29CQUNUUyxhQUFhO2dCQUNmO1lBQ0Y7UUFDRjtJQUNGO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlZ3VpbWllbnRvLXZpdGEtZnJvbnQvLi9zcmMvdGhlbWUuanM/YWZhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyNGRkM5MDEnLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgZGVmYXVsdDogJyNGRkZGRkYnLFxuICAgICAgcGFwZXI6ICcjRjdGN0Y3JyxcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgIHByaW1hcnk6ICcjMDAwMDAwJyxcbiAgICB9LFxuICB9LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogJ1JvYm90bywgQXJpYWwsIHNhbnMtc2VyaWYnLFxuICAgIGg0OiB7XG4gICAgICBmb250U2l6ZTogJzEuNXJlbScsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgfSxcbiAgICBoNToge1xuICAgICAgZm9udFNpemU6ICcxLjI1cmVtJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICB9LFxuICAgIGJvZHkxOiB7XG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgIH0sXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNdWlCdXR0b246IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNSxcbiAgICAgICAgICBwYWRkaW5nOiAnOHB4IDI0cHgnLFxuICAgICAgICB9LFxuICAgICAgICBvdXRsaW5lZDoge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzAwMCcsXG4gICAgICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzAwMCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVN0ZXBMYWJlbDoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICB9LFxuICAgICAgICBpY29uQ29udGFpbmVyOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyNGRkM5MDEnLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgcGFkZGluZzogOCxcbiAgICAgICAgICBtYXJnaW5SaWdodDogMTYsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTsiXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicGFwZXIiLCJ0ZXh0IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJoNCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImg1IiwiYm9keTEiLCJjb21wb25lbnRzIiwiTXVpQnV0dG9uIiwic3R5bGVPdmVycmlkZXMiLCJyb290IiwidGV4dFRyYW5zZm9ybSIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJvdXRsaW5lZCIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNdWlTdGVwTGFiZWwiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImljb25Db250YWluZXIiLCJtYXJnaW5SaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme.js\n");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/system/DefaultPropsProvider");

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@mui/system/InitColorSchemeScript");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/useThemeProps");

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("@mui/utils");

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/capitalize");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/generateUtilityClasses");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@mui","vendor-chunks/@babel","vendor-chunks/@fontsource"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();