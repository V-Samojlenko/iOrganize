(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-family: Lato;\n}\n\n/*\nCopyright Google LLC. All Rights Reserved.\nUse of this source code is governed by an MIT-style license that\ncan be found in the LICENSE file at http://angular.io/license\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7Ozs7RUFJRSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufVxuXG4vKlxuQ29weXJpZ2h0IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5Vc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXG4qLyJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-header></app-header>\n</header>\n\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n\n\n<!-- \nCopyright Google LLC. All Rights Reserved.\nUse of this source code is governed by an MIT-style license that\ncan be found in the LICENSE file at http://angular.io/license\n-->"

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

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _create_node_create_node_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-node/create-node.component */ "./src/app/create-node/create-node.component.ts");
/* harmony import */ var _node_node_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node/node.component */ "./src/app/node/node.component.ts");
/* harmony import */ var _create_group_create_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-group/create-group.component */ "./src/app/create-group/create-group.component.ts");
/* harmony import */ var _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./context-menu/context-menu.component */ "./src/app/context-menu/context-menu.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', component: _board_board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"] },
                ])
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"],
                _create_node_create_node_component__WEBPACK_IMPORTED_MODULE_10__["CreateNodeComponent"],
                _node_node_component__WEBPACK_IMPORTED_MODULE_11__["NodeComponent"],
                _create_group_create_group_component__WEBPACK_IMPORTED_MODULE_12__["CreateGroupComponent"],
                _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_13__["ContextMenuComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 480px) {\n    .group {\n        flex-basis: 100%;\n    }\n}\n@media only screen and (min-width: 481px) {\n    .group {\n        flex-basis: 50%;\n    }\n}\n@media only screen and (min-width: 640px) {\n    .group {\n        flex-basis: 25%;\n    }\n}\n@media only screen and (min-width: 800px) {\n    .group {\n        flex-basis: 20%;\n    }\n}\n@media only screen and (min-width: 1024px) {\n    .group {\n        flex-basis: 15%;\n    }\n}\n.group-container {\n    display: flex;\n    flex-direction: row;\n}\n.group {\n    border: solid #004085 1px;\n    margin: 10px;\n    background-color: #d9dde1;\n    flex-grow: 0;\n    flex-shrink: 0;\n}\n.node-container {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n}\n.group h2 {\n    background-color: #e5e8ea;\n    text-align: center;\n    width: 100%;\n    padding-left: 5px;\n    padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksaUJBQWlCO0tBQ3BCO0NBQ0o7QUFDRDtJQUNJO1FBQ0ksZ0JBQWdCO0tBQ25CO0NBQ0o7QUFDRDtJQUNJO1FBQ0ksZ0JBQWdCO0tBQ25CO0NBQ0o7QUFDRDtJQUNJO1FBQ0ksZ0JBQWdCO0tBQ25CO0NBQ0o7QUFDRDtJQUNJO1FBQ0ksZ0JBQWdCO0tBQ25CO0NBQ0o7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGNBQWM7Q0FDakI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9ib2FyZC9ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5ncm91cCB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xuICAgIC5ncm91cCB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gICAgLmdyb3VwIHtcbiAgICAgICAgZmxleC1iYXNpczogMjUlO1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAuZ3JvdXAge1xuICAgICAgICBmbGV4LWJhc2lzOiAyMCU7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuZ3JvdXAge1xuICAgICAgICBmbGV4LWJhc2lzOiAxNSU7XG4gICAgfVxufVxuXG4uZ3JvdXAtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5ncm91cCB7XG4gICAgYm9yZGVyOiBzb2xpZCAjMDA0MDg1IDFweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZGRlMTtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5ub2RlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ncm91cCBoMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZThlYTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board\" *ngIf=\"board != null\">\n  <h1>Willkommen auf dem \"{{board.name}}\"</h1>\n\n  <div class=\"group-container\" cdkDropListGroup>\n\n    <div class=\"group\" *ngFor=\"let group of board.groups\">\n      <h2>{{group.name}}</h2>\n      <div cdkDropList\n           [cdkDropListData]=\"group\"\n           id=\"group-{{group.id}}\" class=\"node-container\" (cdkDropListDropped)=\"drop($event)\">\n        <div cdkDrag *ngFor=\"let node of group.nodes\" [cdkDragData]=\"node\">\n          <app-node [node]=\"node\" [group]=\"group\"></app-node>\n        </div>\n      </div>\n      <app-create-node [group]=\"group\"></app-create-node>\n    </div>\n    <div class=\"group\">\n      <app-create-group [board]=\"board\"></app-create-group>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoardComponent = /** @class */ (function () {
    function BoardComponent(restService) {
        this.restService = restService;
        this._restService = restService;
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.getBoard(1).subscribe(function (data) { return _this.board = data; });
    };
    BoardComponent.prototype.drop = function (event) {
        var _this = this;
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data.nodes, event.previousIndex, event.currentIndex);
            this.restService.updateGroup(event.previousContainer.data).subscribe();
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data.nodes, event.container.data.nodes, event.previousIndex, event.currentIndex);
            this.restService.updateGroup(event.previousContainer.data).subscribe(function (data) {
                _this.restService.updateGroup(event.container.data).subscribe();
            });
        }
    };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/context-menu/context-menu.component.css":
/*!*********************************************************!*\
  !*** ./src/app/context-menu/context-menu.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRleHQtbWVudS9jb250ZXh0LW1lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/context-menu/context-menu.component.html":
/*!**********************************************************!*\
  !*** ./src/app/context-menu/context-menu.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #nodeMenu let-node>\n  <section class=\"menu\">\n    <div>Details</div>\n    <div (click)=\"deleteNode(node)\">Delete</div>\n  </section>\n</ng-template>\n\n<ng-template #groupMenu let-group>\n  <section class=\"menu\">\n    <div (click)=\"deleteGroup(group)\">Delete</div>\n  </section>\n</ng-template>"

/***/ }),

/***/ "./src/app/context-menu/context-menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/context-menu/context-menu.component.ts ***!
  \********************************************************/
/*! exports provided: ContextMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuComponent", function() { return ContextMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContextMenuComponent = /** @class */ (function () {
    function ContextMenuComponent(restService, overlay, viewContainerRef) {
        this.restService = restService;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this._restService = restService;
    }
    ContextMenuComponent.prototype.ngOnInit = function () {
    };
    ContextMenuComponent.prototype.open = function (_a, user) {
        var x = _a.x, y = _a.y;
        this.close();
        var positionStrategy = this.overlay.position()
            .flexibleConnectedTo({ x: x, y: y })
            .withPositions([
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top',
            }
        ]);
        this.overlayRef = this.overlay.create({
            positionStrategy: positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
        this.overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](this.nodeMenu, this.viewContainerRef, {
            $implicit: user
        }));
    };
    ContextMenuComponent.prototype.close = function () {
        this.sub && this.sub.unsubscribe();
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    };
    ContextMenuComponent.prototype.deleteGroup = function (group) {
        this._restService.deleteGroup(group).subscribe(function (result) {
        });
    };
    ContextMenuComponent.prototype.deleteNode = function (node) {
        this._restService.deleteNode(node).subscribe(function (result) {
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nodeMenu', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ContextMenuComponent.prototype, "nodeMenu", void 0);
    ContextMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-context-menu',
            template: __webpack_require__(/*! ./context-menu.component.html */ "./src/app/context-menu/context-menu.component.html"),
            styles: [__webpack_require__(/*! ./context-menu.component.css */ "./src/app/context-menu/context-menu.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ContextMenuComponent);
    return ContextMenuComponent;
}());



/***/ }),

/***/ "./src/app/create-group/create-group.component.css":
/*!*********************************************************!*\
  !*** ./src/app/create-group/create-group.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-group {\n    padding: 10px;\n}\n\n.create-group-button button {\n    padding: 0 0 0 0;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWdyb3VwL2NyZWF0ZS1ncm91cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osY0FBYztJQUNkLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLWdyb3VwL2NyZWF0ZS1ncm91cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWF0ZS1ncm91cCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNyZWF0ZS1ncm91cC1idXR0b24gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/create-group/create-group.component.html":
/*!**********************************************************!*\
  !*** ./src/app/create-group/create-group.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"create-group\" [ngSwitch]=\"createOpen\">\n  <div class=\"create-group-button\" *ngSwitchCase=\"false\">\n    <button (click)=\"createGroupCreate()\">create</button>\n  </div>\n  <div class=\"create-group-form\" *ngSwitchCase=\"true\">\n    <input type=\"text\" [(ngModel)]=\"group.name\"  name=\"title\" (keydown)=\"onKeydown($event)\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/create-group/create-group.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-group/create-group.component.ts ***!
  \********************************************************/
/*! exports provided: CreateGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupComponent", function() { return CreateGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/group */ "./src/app/model/group.ts");
/* harmony import */ var _model_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/board */ "./src/app/model/board.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateGroupComponent = /** @class */ (function () {
    function CreateGroupComponent(restService) {
        this.createOpen = false;
        this._restService = restService;
        this.group = new _model_group__WEBPACK_IMPORTED_MODULE_1__["Group"]();
    }
    CreateGroupComponent.prototype.ngOnInit = function () {
    };
    CreateGroupComponent.prototype.createGroup = function () {
        var _this = this;
        this.group.boardId = this.board.id;
        this._restService.createGroup(this.group).subscribe(function (data) { return _this.board.groups.push(data); });
        this.group = new _model_group__WEBPACK_IMPORTED_MODULE_1__["Group"]();
        this.createOpen = false;
    };
    CreateGroupComponent.prototype.createGroupCreate = function () {
        this.createOpen = true;
    };
    CreateGroupComponent.prototype.onKeydown = function (event) {
        if (event.key === "Enter") {
            this.createGroup();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_group__WEBPACK_IMPORTED_MODULE_1__["Group"])
    ], CreateGroupComponent.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_board__WEBPACK_IMPORTED_MODULE_2__["Board"])
    ], CreateGroupComponent.prototype, "board", void 0);
    CreateGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-group',
            template: __webpack_require__(/*! ./create-group.component.html */ "./src/app/create-group/create-group.component.html"),
            styles: [__webpack_require__(/*! ./create-group.component.css */ "./src/app/create-group/create-group.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]])
    ], CreateGroupComponent);
    return CreateGroupComponent;
}());



/***/ }),

/***/ "./src/app/create-node/create-node.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-node/create-node.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-node {\n    padding: 10px;\n}\n\n.create-node-button button {\n    padding: 0 0 0 0;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLW5vZGUvY3JlYXRlLW5vZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1ub2RlL2NyZWF0ZS1ub2RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLW5vZGUge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jcmVhdGUtbm9kZS1idXR0b24gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/create-node/create-node.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-node/create-node.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"create-node\" [ngSwitch]=\"createOpen\">\n  <div class=\"create-node-button\" *ngSwitchCase=\"false\">\n    <button (click)=\"createNodeCreate()\">create</button>\n  </div>\n  <div class=\"create-node-form\" *ngSwitchCase=\"true\">\n      <input type=\"text\" [(ngModel)]=\"node.title\"  name=\"title\" (keydown)=\"onKeydown($event)\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/create-node/create-node.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-node/create-node.component.ts ***!
  \******************************************************/
/*! exports provided: CreateNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNodeComponent", function() { return CreateNodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/group */ "./src/app/model/group.ts");
/* harmony import */ var _model_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/node */ "./src/app/model/node.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateNodeComponent = /** @class */ (function () {
    function CreateNodeComponent(restService) {
        this.createOpen = false;
        this._restService = restService;
        this.node = new _model_node__WEBPACK_IMPORTED_MODULE_2__["Node"]();
    }
    CreateNodeComponent.prototype.ngOnInit = function () {
    };
    CreateNodeComponent.prototype.createNode = function () {
        var _this = this;
        this.node.groupId = this.group.id;
        this._restService.createNode(this.node).subscribe(function (data) { return _this.group.nodes.push(data); });
        this.node = new _model_node__WEBPACK_IMPORTED_MODULE_2__["Node"]();
        this.createOpen = false;
    };
    CreateNodeComponent.prototype.createNodeCreate = function () {
        this.createOpen = true;
    };
    CreateNodeComponent.prototype.onKeydown = function (event) {
        if (event.key === "Enter") {
            this.createNode();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_group__WEBPACK_IMPORTED_MODULE_1__["Group"])
    ], CreateNodeComponent.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_node__WEBPACK_IMPORTED_MODULE_2__["Node"])
    ], CreateNodeComponent.prototype, "node", void 0);
    CreateNodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-node',
            template: __webpack_require__(/*! ./create-node.component.html */ "./src/app/create-node/create-node.component.html"),
            styles: [__webpack_require__(/*! ./create-node.component.css */ "./src/app/create-node/create-node.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]])
    ], CreateNodeComponent);
    return CreateNodeComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/model/board.ts":
/*!********************************!*\
  !*** ./src/app/model/board.ts ***!
  \********************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
var Board = /** @class */ (function () {
    function Board() {
    }
    Board.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group, 0);
        if (index > -1) {
            this.groups.splice(index, 1);
        }
    };
    return Board;
}());



/***/ }),

/***/ "./src/app/model/group.ts":
/*!********************************!*\
  !*** ./src/app/model/group.ts ***!
  \********************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
var Group = /** @class */ (function () {
    function Group() {
    }
    Group.prototype.removeNode = function (node) {
        var index = this.nodes.indexOf(node, 0);
        if (index > -1) {
            this.nodes.splice(index, 1);
        }
    };
    return Group;
}());



/***/ }),

/***/ "./src/app/model/node.ts":
/*!*******************************!*\
  !*** ./src/app/model/node.ts ***!
  \*******************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
var Node = /** @class */ (function () {
    function Node() {
    }
    return Node;
}());



/***/ }),

/***/ "./src/app/node/node.component.css":
/*!*****************************************!*\
  !*** ./src/app/node/node.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".node {\n    display: flex;\n    flex-direction: row;\n}\n\n.node-title {\n    width: 90%;\n    text-align: center;\n}\n\n.node-delete {\n    margin-left: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9kZS9ub2RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL25vZGUvbm9kZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLm5vZGUtdGl0bGUge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm9kZS1kZWxldGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/node/node.component.html":
/*!******************************************!*\
  !*** ./src/app/node/node.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"node-{{node.id}}\" class=\"node\" (contextmenu)=\"openMenu($event); $event. preventDefault();\">\n  <div class=\"node-title\">\n    {{node.title}}\n  </div>\n  <div class=\"node-delete\">\n    <button (click)=\"delete()\">X</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/node/node.component.ts":
/*!****************************************!*\
  !*** ./src/app/node/node.component.ts ***!
  \****************************************/
/*! exports provided: NodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeComponent", function() { return NodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/node */ "./src/app/model/node.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _model_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/group */ "./src/app/model/group.ts");
/* harmony import */ var _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context-menu/context-menu.component */ "./src/app/context-menu/context-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NodeComponent = /** @class */ (function () {
    function NodeComponent(restService, menu) {
        this.menu = menu;
        this._restService = restService;
    }
    NodeComponent.prototype.ngOnInit = function () {
    };
    NodeComponent.prototype.delete = function () {
        var _this = this;
        this._restService.deleteNode(this.node).subscribe(function (data) {
            _this.group.removeNode(_this.node);
        });
    };
    NodeComponent.prototype.openMenu = function ($event) {
        this.menu.open($event, this.node);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_node__WEBPACK_IMPORTED_MODULE_1__["Node"])
    ], NodeComponent.prototype, "node", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_group__WEBPACK_IMPORTED_MODULE_3__["Group"])
    ], NodeComponent.prototype, "group", void 0);
    NodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-node',
            template: __webpack_require__(/*! ./node.component.html */ "./src/app/node/node.component.html"),
            styles: [__webpack_require__(/*! ./node.component.css */ "./src/app/node/node.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_4__["ContextMenuComponent"]])
    ], NodeComponent);
    return NodeComponent;
}());



/***/ }),

/***/ "./src/app/rest.service.ts":
/*!*********************************!*\
  !*** ./src/app/rest.service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
        this._apiUrl = "http://localhost:8080/node-api/";
        this._httpClient = http;
    }
    RestService.prototype.getBoard = function (id) {
        return this._httpClient.get(this._apiUrl + "board?id=" + id);
    };
    RestService.prototype.updateGroup = function (group) {
        var ids = group.nodes.map(function (n) { return n.id; });
        return this._httpClient.put(this._apiUrl + "group", {
            "id": group.id,
            "name": group.name,
            "nodeIds": ids
        });
    };
    RestService.prototype.createNode = function (node) {
        return this._httpClient.post(this._apiUrl + "node", node);
    };
    RestService.prototype.deleteNode = function (node) {
        return this._httpClient.delete(this._apiUrl + "node?id=" + node.id);
    };
    RestService.prototype.createGroup = function (group) {
        return this._httpClient.post(this._apiUrl + "group", group);
    };
    RestService.prototype.deleteGroup = function (group) {
        return this._httpClient.delete(this._apiUrl + "group?id=" + group.id);
    };
    RestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestService);
    return RestService;
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
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vsamojlenko/projects-ram/another-trello-clone/iOrganize-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map