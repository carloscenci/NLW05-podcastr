webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ \"./node_modules/rc-slider/assets/index.css\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ \"./src/contexts/PlayerContext.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Player/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/carlos/Documentos/NLW5 - 2021/react/NLW05-podcastr/src/components/Player/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Player() {\n  _s();\n\n  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__[\"PlayerContext\"]),\n      episodeList = _useContext.episodeList,\n      currentEpisodeIndex = _useContext.currentEpisodeIndex,\n      isPlaying = _useContext.isPlaying,\n      togglePlay = _useContext.togglePlay;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!audioRef.current) {\n      return;\n    }\n\n    if (isPlaying) {\n      audioRef.current.play();\n    } else {\n      audioRef.current.pause();\n    }\n  }, [isPlaying]);\n  var episode = episodeList[currentEpisodeIndex];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playerContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/playing.svg\",\n        alt: \"Tocando agora\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Tocando agora\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.currentEpisode,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        width: 592,\n        height: 592,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: episode.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptyPlayer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Selecione um podcast para ouvir\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 21\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 17\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.empty : '',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.progress,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \"00:00\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.slider,\n          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rc_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            trackStyle: {\n              backgroundColor: '#04d361'\n            },\n            railStyle: {\n              backgroundColor: '#9f75ff'\n            },\n            handleStyle: {\n              borderColor: '#04d361',\n              borderWidth: 4\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 33\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptySlider\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 33\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \"00:00\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }, this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"audio\", {\n        src: episode.url,\n        ref: audioRef,\n        autoPlay: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttons,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/shuffle.svg\",\n            alt: \"Embaralhar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-previous.svg\",\n            alt: \"Tocar Anterior\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playButton,\n          disabled: !episode,\n          onClick: togglePlay,\n          children: isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/pause.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 39\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 77\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-next.svg\",\n            alt: \"Tocar Pr\\xF3ximo\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/repeat.svg\",\n            alt: \"Repetir\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Player, \"PzoHWLXkmFSodfmnviGQR85krvw=\");\n\n_c = Player;\n\nvar _c;\n\n$RefreshReg$(_c, \"Player\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeD82ODJkIl0sIm5hbWVzIjpbIlBsYXllciIsImF1ZGlvUmVmIiwidXNlUmVmIiwidXNlQ29udGV4dCIsIlBsYXllckNvbnRleHQiLCJlcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJpc1BsYXlpbmciLCJ0b2dnbGVQbGF5IiwidXNlRWZmZWN0IiwiY3VycmVudCIsInBsYXkiLCJwYXVzZSIsImVwaXNvZGUiLCJzdHlsZXMiLCJwbGF5ZXJDb250YWluZXIiLCJjdXJyZW50RXBpc29kZSIsInRodW1ibmFpbCIsInRpdGxlIiwibWVtYmVycyIsImVtcHR5UGxheWVyIiwiZW1wdHkiLCJwcm9ncmVzcyIsInNsaWRlciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJlbXB0eVNsaWRlciIsInVybCIsImJ1dHRvbnMiLCJwbGF5QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRU8sU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUNyQixNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQW1CLElBQW5CLENBQXZCOztBQURxQixvQkFRakJDLHdEQUFVLENBQUNDLHFFQUFELENBUk87QUFBQSxNQUlqQkMsV0FKaUIsZUFJakJBLFdBSmlCO0FBQUEsTUFLakJDLG1CQUxpQixlQUtqQkEsbUJBTGlCO0FBQUEsTUFNakJDLFNBTmlCLGVBTWpCQSxTQU5pQjtBQUFBLE1BT2pCQyxVQVBpQixlQU9qQkEsVUFQaUI7O0FBVXJCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJLENBQUNSLFFBQVEsQ0FBQ1MsT0FBZCxFQUF1QjtBQUNuQjtBQUNIOztBQUVELFFBQUdILFNBQUgsRUFBYztBQUNWTixjQUFRLENBQUNTLE9BQVQsQ0FBaUJDLElBQWpCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hWLGNBQVEsQ0FBQ1MsT0FBVCxDQUFpQkUsS0FBakI7QUFDSDtBQUNKLEdBVlEsRUFVTixDQUFDTCxTQUFELENBVk0sQ0FBVDtBQVlBLE1BQU1NLE9BQU8sR0FBR1IsV0FBVyxDQUFDQyxtQkFBRCxDQUEzQjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFFUSwwREFBTSxDQUFDQyxlQUF2QjtBQUFBLDRCQUNJO0FBQUEsOEJBQ0k7QUFBSyxXQUFHLEVBQUMsY0FBVDtBQUF3QixXQUFHLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQU1NRixPQUFPLGdCQUNMO0FBQUssZUFBUyxFQUFFQywwREFBTSxDQUFDRSxjQUF2QjtBQUFBLDhCQUNJLHFFQUFDLGlEQUFEO0FBQ0ksYUFBSyxFQUFFLEdBRFg7QUFFSSxjQUFNLEVBQUUsR0FGWjtBQUdJLFdBQUcsRUFBRUgsT0FBTyxDQUFDSSxTQUhqQjtBQUlJLGlCQUFTLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFNSTtBQUFBLGtCQUFTSixPQUFPLENBQUNLO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQU9JO0FBQUEsa0JBQU9MLE9BQU8sQ0FBQ007QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZ0JBV0w7QUFBSyxlQUFTLEVBQUVMLDBEQUFNLENBQUNNLFdBQXZCO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJSLGVBd0JJO0FBQVEsZUFBUyxFQUFFLENBQUNQLE9BQUQsR0FBV0MsMERBQU0sQ0FBQ08sS0FBbEIsR0FBMEIsRUFBN0M7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVQLDBEQUFNLENBQUNRLFFBQXZCO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFLLG1CQUFTLEVBQUVSLDBEQUFNLENBQUNTLE1BQXZCO0FBQUEsb0JBQ01WLE9BQU8sZ0JBQ0QscUVBQUMsaURBQUQ7QUFDSSxzQkFBVSxFQUFFO0FBQUVXLDZCQUFlLEVBQUM7QUFBbEIsYUFEaEI7QUFFSSxxQkFBUyxFQUFFO0FBQUVBLDZCQUFlLEVBQUU7QUFBbkIsYUFGZjtBQUdJLHVCQUFXLEVBQUU7QUFBRUMseUJBQVcsRUFBRSxTQUFmO0FBQTBCQyx5QkFBVyxFQUFFO0FBQXZDO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREMsZ0JBT0Q7QUFBSyxxQkFBUyxFQUFFWiwwREFBTSxDQUFDYTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQWNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBa0JNZCxPQUFPLGlCQUNMO0FBQ0ksV0FBRyxFQUFFQSxPQUFPLENBQUNlLEdBRGpCO0FBRUksV0FBRyxFQUFFM0IsUUFGVDtBQUdJLGdCQUFRO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CUixlQTBCSTtBQUFLLGlCQUFTLEVBQUVhLDBEQUFNLENBQUNlLE9BQXZCO0FBQUEsZ0NBQ0k7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixrQkFBUSxFQUFFLENBQUNoQixPQUFqQztBQUFBLGlDQUNJO0FBQUssZUFBRyxFQUFDLGNBQVQ7QUFBd0IsZUFBRyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBS0k7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixrQkFBUSxFQUFFLENBQUNBLE9BQWpDO0FBQUEsaUNBQ0k7QUFBSyxlQUFHLEVBQUMsb0JBQVQ7QUFBOEIsZUFBRyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLGVBU0k7QUFDSSxjQUFJLEVBQUMsUUFEVDtBQUVJLG1CQUFTLEVBQUVDLDBEQUFNLENBQUNnQixVQUZ0QjtBQUdJLGtCQUFRLEVBQUUsQ0FBQ2pCLE9BSGY7QUFJSSxpQkFBTyxFQUFFTCxVQUpiO0FBQUEsb0JBTU1ELFNBQVMsZ0JBQUc7QUFBSyxlQUFHLEVBQUMsWUFBVDtBQUFzQixlQUFHLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSCxnQkFBeUM7QUFBSyxlQUFHLEVBQUMsV0FBVDtBQUFxQixlQUFHLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU54RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRKLGVBa0JJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0Isa0JBQVEsRUFBRSxDQUFDTSxPQUFqQztBQUFBLGlDQUNJO0FBQUssZUFBRyxFQUFDLGdCQUFUO0FBQTBCLGVBQUcsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkosZUFzQkk7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixrQkFBUSxFQUFFLENBQUNBLE9BQWpDO0FBQUEsaUNBQ0k7QUFBSyxlQUFHLEVBQUMsYUFBVDtBQUF1QixlQUFHLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnRkg7O0dBeEdlYixNOztLQUFBQSxNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyYy1zbGlkZXInO1xuXG5pbXBvcnQgJ3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzJztcblxuaW1wb3J0IHsgUGxheWVyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyKCkge1xuICAgIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xuXG4gICAgY29uc3QgeyBcbiAgICAgICAgZXBpc29kZUxpc3QsIFxuICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LCBcbiAgICAgICAgaXNQbGF5aW5nLCBcbiAgICAgICAgdG9nZ2xlUGxheSBcbiAgICB9ID0gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFhdWRpb1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZihpc1BsYXlpbmcpIHtcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfSwgW2lzUGxheWluZ10pXG5cbiAgICBjb25zdCBlcGlzb2RlID0gZXBpc29kZUxpc3RbY3VycmVudEVwaXNvZGVJbmRleF1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheWluZy5zdmdcIiBhbHQ9XCJUb2NhbmRvIGFnb3JhXCIvPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgIHsgZXBpc29kZSA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRFcGlzb2RlfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezU5Mn0gXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezU5Mn0gXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57ZXBpc29kZS50aXRsZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlQbGF5ZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlNlbGVjaW9uZSB1bSBwb2RjYXN0IHBhcmEgb3V2aXI8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17IWVwaXNvZGUgPyBzdHlsZXMuZW1wdHkgOiAnJ30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc30+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjAwOjAwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVwaXNvZGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOicjMDRkMzYxJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFpbFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM5Zjc1ZmYnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdHlsZT17eyBib3JkZXJDb2xvcjogJyMwNGQzNjEnLCBib3JkZXJXaWR0aDogNCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlTbGlkZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjAwOjAwPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgeyBlcGlzb2RlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17YXVkaW9SZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NodWZmbGUuc3ZnXCIgYWx0PVwiRW1iYXJhbGhhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktcHJldmlvdXMuc3ZnXCIgYWx0PVwiVG9jYXIgQW50ZXJpb3JcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wbGF5QnV0dG9ufSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQbGF5fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGlzUGxheWluZyA/IDxpbWcgc3JjPVwiL3BhdXNlLnN2Z1wiIGFsdD1cIlRvY2FyXCIvPiA6IDxpbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwiVG9jYXJcIi8+fVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1uZXh0LnN2Z1wiIGFsdD1cIlRvY2FyIFByw7N4aW1vXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcmVwZWF0LnN2Z1wiIGFsdD1cIlJlcGV0aXJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Player/index.tsx\n");

/***/ })

})