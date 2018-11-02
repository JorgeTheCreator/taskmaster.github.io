(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 90%;\n\n  margin: 20px auto;\n}\n.tform {\n  background: grey;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXOztFQUVYLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcblxuICBtYXJnaW46IDIwcHggYXV0bztcbn1cbi50Zm9ybSB7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container animated flipInY delay-2s\">\n\n  <app-data-table></app-data-table>\n\n</div>\n<app-forms class='tform'></app-forms>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'project-two';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__["DataTableComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-table/data-table-datasource.ts":
/*!*****************************************************!*\
  !*** ./src/app/data-table/data-table-datasource.ts ***!
  \*****************************************************/
/*! exports provided: DataTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDataSource", function() { return DataTableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// TODO: replace this with real data from your application
var TASK_RECORD = [
    {
        id: 1,
        quoteType: 'AYR',
        task: 'DYC-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 2,
        quoteType: 'EYR',
        task: 'DYA-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 3,
        quoteType: 'FYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 4,
        quoteType: 'GYR',
        task: 'DYB-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 5,
        quoteType: 'HYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 6,
        quoteType: 'IYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 7,
        quoteType: 'JYR',
        task: 'DYX-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 8,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 9,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 10,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 11,
        quoteType: 'DYR',
        task: 'DYY-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 12,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Fixed-work'
    },
    {
        id: 13,
        quoteType: 'DYR',
        task: 'DYH-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 14,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 15,
        quoteType: 'DYR',
        task: 'DYW-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 16,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 17,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 18,
        quoteType: 'DYU',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 19,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 20,
        quoteType: 'DYR',
        task: 'DYD-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 21,
        quoteType: 'DYR',
        task: 'DYE-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 22,
        quoteType: 'DYR',
        task: 'DYF-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 23,
        quoteType: 'DYR',
        task: 'DYG-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 24,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 25,
        quoteType: 'DYJ',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 26,
        quoteType: 'DYK',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 27,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 28,
        quoteType: 'DYL',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 29,
        quoteType: 'DYI',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Fixed-work'
    },
    {
        id: 30,
        quoteType: 'DYJ',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '2/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 31,
        quoteType: 'DYR',
        task: 'DYI-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '1/23/2013 11:28am',
        taskType: 'Follow-up'
    },
    {
        id: 32,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '5/23/2018 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 33,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2018 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 34,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2018 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 35,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '5/23/2018 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 36,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 37,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '7/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 38,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '4/3/2015 9:28am',
        taskType: 'Follow-up'
    },
    {
        id: 39,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Fixed-work'
    },
    {
        id: 40,
        quoteType: 'MYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28pm',
        taskType: 'Follow-up'
    },
    {
        id: 41,
        quoteType: 'ZYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 42,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '2/23/2015 2:28pm',
        taskType: 'Follow-up'
    },
    {
        id: 43,
        quoteType: 'UYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Fixed-work'
    },
    {
        id: 44,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 45,
        quoteType: 'CYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '6/13/2016 11:28am',
        taskType: 'Follow-up'
    },
    {
        id: 46,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '4/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 47,
        quoteType: 'BYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 48,
        quoteType: 'AYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Follow-up'
    },
    {
        id: 49,
        quoteType: 'RYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Cancel'
    },
    {
        id: 50,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '12/23/2015 10:28am',
        taskType: 'Fixed-work'
    },
    {
        id: 51,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '2/23/2015 10:28am',
        taskType: 'Cancel'
    },
    {
        id: 52,
        quoteType: 'DYR',
        task: 'DYR-Quote ID 145, Due Date Dec 23 2015,Customer-Summitork Technologies Inc.',
        dueDate: '5/23/2015 10:28am',
        taskType: 'Follow-up'
    }
];
/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var DataTableDataSource = /** @class */ (function (_super) {
    __extends(DataTableDataSource, _super);
    function DataTableDataSource(paginator, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = TASK_RECORD;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    DataTableDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginator's length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    DataTableDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DataTableDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DataTableDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'quoteType':
                    return compare(a.quoteType, b.quoteType, isAsc);
                case 'taskType':
                    return compare(a.taskType, b.taskType, isAsc);
                case 'dueDate':
                    return compare(a.dueDate, b.dueDate, isAsc);
                case 'task':
                    return compare(a.task, b.task, isAsc);
                case 'id':
                    return compare(+a.id, +b.id, isAsc);
                default:
                    return 0;
            }
        });
    };
    return DataTableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/data-table/data-table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/data-table/data-table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%;\n  background-color: #64b5f6;\n}\n.mat-paginator {\n  background-color: #1e88e5;\n}\nmat-icon {\n  padding-left: 4%;\n}\n.mat-icon.mat-warn {\n  color: #766e98 !important;\n}\n.mat-icon.mat-accent {\n  color: #bd6b3785 !important;\n}\n.mat-icon {\n  color: #0080005c !important;\n}\n.black:hover {\n  background-color: rgba(180, 61, 61, 0.548);\n  padding: 10px;\n  border-radius: 10px;\n  color: white;\n  text-align: center;\n  text-shadow: 2px 2px 4px #000000;\n  cursor: pointer;\n}\n.icon:hover {\n  cursor: pointer;\n  color: #f30602f7 !important;\n  text-shadow: 2px 2px 4px #000000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSw0QkFBNEI7Q0FDN0I7QUFDRDtFQUNFLDRCQUE0QjtDQUM3QjtBQUNEO0VBQ0UsMkNBQTJDO0VBQzNDLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGlDQUFpQztDQUNsQyIsImZpbGUiOiJzcmMvYXBwL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNjtcbn1cbi5tYXQtcGFnaW5hdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlODhlNTtcbn1cbm1hdC1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiA0JTtcbn1cbi5tYXQtaWNvbi5tYXQtd2FybiB7XG4gIGNvbG9yOiAjNzY2ZTk4ICFpbXBvcnRhbnQ7XG59XG4ubWF0LWljb24ubWF0LWFjY2VudCB7XG4gIGNvbG9yOiAjYmQ2YjM3ODUgIWltcG9ydGFudDtcbn1cbi5tYXQtaWNvbiB7XG4gIGNvbG9yOiAjMDA4MDAwNWMgIWltcG9ydGFudDtcbn1cbi5ibGFjazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCA2MSwgNjEsIDAuNTQ4KTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCAjMDAwMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmMzA2MDJmNyAhaW1wb3J0YW50O1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggIzAwMDAwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/data-table/data-table.component.html":
/*!******************************************************!*\
  !*** ./src/app/data-table/data-table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"mat-elevation-z15 data-table\">\n  <table mat-table class=\" animated bounceInDown full-width-table \" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n\n    </ng-container>\n    <!-- Quote Type -->\n    <ng-container matColumnDef=\"quoteType\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Quote Type</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.quoteType}}</td>\n\n    </ng-container>\n\n    <!-- TASK  -->\n    <ng-container matColumnDef=\"task\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Task</th>\n      <td [class.black]='true' mat-cell *matCellDef=\"let row\">{{row.task}}</td>\n\n    </ng-container>\n\n    <!-- Due Date  -->\n    <ng-container matColumnDef=\"dueDate\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Due Date</th>\n      <td [class.black]='true' mat-cell *matCellDef=\"let row\">{{row.dueDate}} </td>\n    </ng-container>\n\n    <!-- Task Type  -->\n    <ng-container matColumnDef=\"taskType\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Task Type</th>\n      <td [class.black]='true' mat-cell *matCellDef=\"let row\">{{row.taskType}}</td>\n    </ng-container>\n    <!-- Buttons Edit -->\n    <ng-container matColumnDef=\"edit-view-trash\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\n      <td mat-cell *matCellDef=\"let row\">\n        <mat-icon color=\"accent\" [class.icon]='true' (click)='delete(row.id)'>save</mat-icon>\n        <mat-icon [class.icon]='true'>visibility</mat-icon>\n        <mat-icon color=\"warn\" [class.icon]='true'>edit</mat-icon>\n      </td>\n\n    </ng-container>\n\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row (click)=\"selectRow(row)\" *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  </table>\n\n  <mat-paginator class=\"animated bounceInDown delay-3s\" #paginator [length]=\"dataSource.data.length\" [pageIndex]=\"0\"\n    [pageSize]=\"10\" [pageSizeOptions]=\"[10, 20,50]\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/data-table/data-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/data-table/data-table.component.ts ***!
  \****************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _data_table_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-table-datasource */ "./src/app/data-table/data-table-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = [
            'id',
            'quoteType',
            'task',
            'dueDate',
            'taskType',
            'edit-view-trash'
        ];
    }
    DataTableComponent.prototype.delete = function (id) {
        console.log(id);
    };
    DataTableComponent.prototype.selectRow = function (row) {
        console.log(row['task']);
    };
    DataTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _data_table_datasource__WEBPACK_IMPORTED_MODULE_2__["DataTableDataSource"](this.paginator, this.sort);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DataTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DataTableComponent.prototype, "sort", void 0);
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.css */ "./src/app/data-table/data-table.component.css")]
        })
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.css":
/*!*******************************************!*\
  !*** ./src/app/forms/forms.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 70%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvZm9ybXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxXQUFXO0NBQ1oiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiA3MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/forms/forms.component.html":
/*!********************************************!*\
  !*** ./src/app/forms/forms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Input\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Textarea\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>"

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.css */ "./src/app/forms/forms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333333a3;\n  border-bottom: 2px solid #0e86e8;\n}\n\nli {\n  float: left;\n}\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  text-shadow: 2px 2px 4px #000000;\n}\n\nli a:hover:not(.active) {\n  background-color: #333;\n}\n\n.active {\n  background-color: #60b4f7bf;\n}\n\n.task {\n  font-size: 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLDRCQUE0QjtDQUM3Qjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzNhMztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwZTg2ZTg7XG59XG5cbmxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggIzAwMDAwMDtcbn1cblxubGkgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwYjRmN2JmO1xufVxuLnRhc2sge1xuICBmb250LXNpemU6IDI1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"animated bounceInDown delay-4s\">\n  <li><a href=\"#home\" class='task'>Task Detail</a></li>\n  <li style=\"float:right\"><a class=\"active\" href=\"#about\"><i class=\"material-icons\">\n        playlist_add\n      </i>Add Task</a></li>\n</ul>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jorgepeguero/Desktop/project-two/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map