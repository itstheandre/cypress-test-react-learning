module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signup.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup */ \"./lib/signup.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"signup\", function() { return _signup__WEBPACK_IMPORTED_MODULE_0__[\"signup\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanM/OWIwYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vbGliL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lnbnVwIH0gZnJvbSBcIi4vc2lnbnVwXCI7XG5leHBvcnQgeyBzaWdudXAgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/index.js\n");

/***/ }),

/***/ "./lib/signup.js":
/*!***********************!*\
  !*** ./lib/signup.js ***!
  \***********************/
/*! exports provided: signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signup\", function() { return signup; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function signup(form) {\n  const {\n    data\n  } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"api/signup\", form);\n  return data;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc2lnbnVwLmpzPzUwY2EiXSwibmFtZXMiOlsic2lnbnVwIiwiZm9ybSIsImRhdGEiLCJheGlvcyIsInBvc3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxlQUFlQSxNQUFmLENBQXNCQyxJQUF0QixFQUE0QjtBQUNqQyxRQUFNO0FBQUVDO0FBQUYsTUFBVyxNQUFNQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsWUFBWCxFQUF5QkgsSUFBekIsQ0FBdkI7QUFDQSxTQUFPQyxJQUFQO0FBQ0QiLCJmaWxlIjoiLi9saWIvc2lnbnVwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbnVwKGZvcm0pIHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFwiYXBpL3NpZ251cFwiLCBmb3JtKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/signup.js\n");

/***/ }),

/***/ "./pages/signup.jsx":
/*!**************************!*\
  !*** ./pages/signup.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib */ \"./lib/index.js\");\nvar _jsxFileName = \"/Users/andredealbuquerque/LTC/cypress-test-react-next/pages/signup.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst Signup = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    0: form,\n    1: setForm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    username: \"\",\n    password: \"\"\n  });\n  const {\n    0: message,\n    1: setMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n\n  async function submit(e) {\n    e.preventDefault();\n    console.log(form);\n    const data = await Object(_lib__WEBPACK_IMPORTED_MODULE_3__[\"signup\"])(form); // const { data } = await axios.post(\"api/signup\", form);\n\n    console.log(\"data:\", data);\n    setMessage(\"Redirecting you back to main page\");\n    setTimeout(() => {\n      router.push(\"/\");\n    }, 2000);\n  }\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, message && __jsx(\"h1\", {\n    className: \"message\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 19\n    }\n  }, message), __jsx(\"form\", {\n    onSubmit: submit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    className: \"username\",\n    name: \"username\",\n    value: form.username,\n    onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {\n      [e.target.name]: e.target.value\n    })),\n    placeholder: \"Username...\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"password\",\n    name: \"password\",\n    value: form.password,\n    onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {\n      [e.target.name]: e.target.value\n    })),\n    placeholder: \"Password...\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, \"Submit\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWdudXAuanN4PzM4MDQiXSwibmFtZXMiOlsiU2lnbnVwIiwicm91dGVyIiwidXNlUm91dGVyIiwiZm9ybSIsInNldEZvcm0iLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic2lnbnVwIiwic2V0VGltZW91dCIsInB1c2giLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQztBQUFFQyxZQUFRLEVBQUUsRUFBWjtBQUFnQkMsWUFBUSxFQUFFO0FBQTFCLEdBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JKLHNEQUFRLENBQUMsRUFBRCxDQUF0Qzs7QUFDQSxpQkFBZUssTUFBZixDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDdkJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVgsSUFBWjtBQUNBLFVBQU1ZLElBQUksR0FBRyxNQUFNQyxtREFBTSxDQUFDYixJQUFELENBQXpCLENBSHVCLENBSXZCOztBQUNBVSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCQyxJQUFyQjtBQUNBTixjQUFVLENBQUMsbUNBQUQsQ0FBVjtBQUNBUSxjQUFVLENBQUMsTUFBTTtBQUNmaEIsWUFBTSxDQUFDaUIsSUFBUCxDQUFZLEdBQVo7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7O0FBQ0QsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dWLE9BQU8sSUFBSTtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUJBLE9BQXpCLENBRGQsRUFFRTtBQUFNLFlBQVEsRUFBRUUsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFTLEVBQUMsVUFGWjtBQUdFLFFBQUksRUFBQyxVQUhQO0FBSUUsU0FBSyxFQUFFUCxJQUFJLENBQUNHLFFBSmQ7QUFLRSxZQUFRLEVBQUdLLENBQUQsSUFDUlAsT0FBTyxpQ0FBTUQsSUFBTjtBQUFZLE9BQUNRLENBQUMsQ0FBQ1EsTUFBRixDQUFTQyxJQUFWLEdBQWlCVCxDQUFDLENBQUNRLE1BQUYsQ0FBU0U7QUFBdEMsT0FOWDtBQVFFLGVBQVcsRUFBQyxhQVJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVdFO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLFNBQUssRUFBRWxCLElBQUksQ0FBQ0ksUUFIZDtBQUlFLFlBQVEsRUFBR0ksQ0FBRCxJQUNSUCxPQUFPLGlDQUFNRCxJQUFOO0FBQVksT0FBQ1EsQ0FBQyxDQUFDUSxNQUFGLENBQVNDLElBQVYsR0FBaUJULENBQUMsQ0FBQ1EsTUFBRixDQUFTRTtBQUF0QyxPQUxYO0FBT0UsZUFBVyxFQUFDLGFBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBb0JFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCRixDQUZGLENBREY7QUEyQkQsQ0ExQ0Q7O0FBNENlckIscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHNpZ251cCB9IGZyb20gXCIuLi9saWJcIjtcblxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoeyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBhc3luYyBmdW5jdGlvbiBzdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc2lnbnVwKGZvcm0pO1xuICAgIC8vIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcImFwaS9zaWdudXBcIiwgZm9ybSk7XG4gICAgY29uc29sZS5sb2coXCJkYXRhOlwiLCBkYXRhKTtcbiAgICBzZXRNZXNzYWdlKFwiUmVkaXJlY3RpbmcgeW91IGJhY2sgdG8gbWFpbiBwYWdlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH0sIDIwMDApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHttZXNzYWdlICYmIDxoMSBjbGFzc05hbWU9XCJtZXNzYWdlXCI+e21lc3NhZ2V9PC9oMT59XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgIHZhbHVlPXtmb3JtLnVzZXJuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgIHNldEZvcm0oeyAuLi5mb3JtLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWUuLi5cIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdmFsdWU9e2Zvcm0ucGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgc2V0Rm9ybSh7IC4uLmZvcm0sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZC4uLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signup.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });