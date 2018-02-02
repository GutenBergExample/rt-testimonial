/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testimonial_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testimonial_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__testimonial_jsx__);
/**
 * External dependencies
 */
var __ = wp.i18n.__;

/**
 * Internal dependencies
 */





var registerBlockType = wp.blocks.registerBlockType;


var blockAttr = {
	slides: {
		type: 'array',
		selector: '.rt-testimonial',
		source: 'query',
		query: {
			content: {
				type: 'html',
				selector: '.rt-testimonial__content'
			},
			image: {
				type: 'string',
				source: 'attribute',
				selector: '.rt-testimonial__image',
				attribute: 'src'
			},
			imageAlt: {
				type: 'string',
				source: 'attribute',
				selector: '.rt-testimonial__image',
				attribute: 'alt'
			},
			imageWidth: {
				type: 'string',
				source: 'attribute',
				selector: '.rt-testimonial__image',
				attribute: 'width'
			},
			imageHeight: {
				type: 'string',
				source: 'attribute',
				selector: '.rt-testimonial__image',
				attribute: 'height'
			}
		}
	}
};

registerBlockType('rt-blocks/testimonial', {
	title: __('Testimonial'),
	description: __('Testimonial Block'),
	attributes: blockAttr,
	category: 'common',
	edit: __WEBPACK_IMPORTED_MODULE_2__testimonial_jsx___default.a,
	save: function save(props) {
		var slider = props.attributes.slides ? props.attributes.slides : '';
		var slideLists = slider.map(function (slides, index) {
			return wp.element.createElement(
				'div',
				{ className: 'rt-testimonial', key: index },
				wp.element.createElement(
					'div',
					{ className: 'rt-testimonial__image-container' },
					wp.element.createElement('img', { className: 'rt-testimonial__image', src: slides.image, alt: slides.imageAlt, width: slides.imageWidth, height: slides.imageHeight })
				),
				wp.element.createElement(
					'div',
					{ className: 'rt-testimonial__content-container' },
					wp.element.createElement(
						'p',
						{ className: 'rt-testimonial__content' },
						slides.content
					)
				)
			);
		});
		return wp.element.createElement(
			'div',
			{ className: props.className ? props.className : '' },
			slideLists
		);
	}
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);