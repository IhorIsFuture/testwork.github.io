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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Begin CSS For left Block \"DAIRY APP\"*/\r\n#bodyleft {\r\n\tposition: fixed;\r\n\tmargin-left: 0;\r\n\tmargin-right: -3%;\r\n\tbackground-color: #2c2f3e;\r\n\twidth: 18%;\r\n\theight: 100%;\t\r\n\tcolor: white;\r\n\tfont-color: white;\r\n\t\r\n}\r\n#title {\r\n\tfont-family: Calibri, sans-serif;\r\n\tmargin-top: 3%;\r\n\tfont-size: 32px;\r\n\tfont-weight: 100;\r\n}\r\n#subtitle {\r\n\tmargin-top: -3px;\r\n\tcolor: #5c606b;\r\n\tfont-size: 16px;\r\n\tfont-weight: 450;\r\n}\r\n/* End CSS For left Block \"DAIRY APP\"*/\r\n/* Begin CSS For 'Items' Block */\r\n#itemsContainer {\r\n\tposition: absolute;\r\n\tmargin-top: 2%; \r\n\tmargin-left: 22%;\r\n\twidth: 38%;\r\n\theight: auto;\r\n\tbox-shadow: 0 0 10px rgba(0,0,0,0.5);\r\n\tmargin-bottom: 20px;\r\n\r\n\r\n}\r\n#itemsWindowContent {\r\n\tmargin-left: 0;\r\n\twidth: 100%;\r\n\theight: 80%;\r\n\tmargin-bottom: 20px;\r\n}\r\n#itemsTitle {\r\n\tmargin-left: 1%;\r\n\tfont-size: 28px;\r\n\tfont-family: Calibri, sans-serif;\r\n\tfont-weight: 100;\r\n\r\n\tfont-family: Calibri, sans-serif;\r\n\tmargin-top: 3%;\r\n\tfont-size: 32px;\r\n\tfont-weight: 100;\r\n}\r\n#inputName {\r\n\twidth: 65%;\r\n\tborder-radius: 5px;\r\n\t\r\n}\r\n#addNew {\r\n\tmargin-left: 3%;\r\n\twidth: 25%;\r\n\tbackground-color: #3cd0e0;\r\n\tborder-color: #3cd0e0;\r\n}\r\n#addNew:hover {\r\n\tmargin-left: 3%;\r\n\twidth: 25%;\r\n\tbackground-color: #20b2c1;\r\n\tborder-color: #20b2c1;\r\n}\r\n#addNew:focus {\r\n\t\r\n\tbackground-color: #20b2c1;\r\n\tborder-color: #20b2c1;\r\n}\r\n#list {\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\tmargin-bottom: 5px;\r\n\tmargin-left:  0px;\r\n}\r\n#itemActive {\t\r\n\tborder-top: 0px;\r\n\tborder-bottom: 1.5px solid #d9d9db;\r\n\tborder-left: 3px solid red;\r\n\tfont-weight:  bold;\r\n\tmargin-right: 0%;\r\n\t\r\n}\r\n#item {\t\r\n\tborder-top: 0px;\r\n\tborder-bottom: 1.5px solid #d9d9db;\t\r\n\tfont-weight:  bold;\r\n\tmargin-right: 0%;\r\n\t\r\n}\r\n#contentItem {\r\n\tmargin-top: 3%;\r\n\theight: 60%;\r\n\tvertical-align: center;\r\n\tmargin-bottom: 0;\r\n}\r\n#deleteItem {\r\n\theight: 60%;\r\n\tmargin-right:  1%;\t\r\n\tborder: 2px solid #ef94ad;\r\n\tbackground-color: white;\r\n\tcolor: #ef94ad;\r\n\tfont-weight: 600;\r\n\t\r\n}\r\n#deleteItem:hover {\r\n\theight: 60%;\r\n\tmargin-right:  1%;\t\r\n\tborder: 2px solid #bc364f;\r\n\tbackground-color: #bc364f;\r\n\tcolor: white;\r\n\tfont-weight: 600;\t\r\n}\r\n#deleteItem:focus {\t\r\n\tborder: 2px solid #bc364f;\r\n\tbackground-color: #bc364f;\r\n\tcolor: white;\t\r\n}\r\n#spanCount {\r\n\tmargin-left: 2%;\r\n\theight: auto;\r\n\tbackground-color: #3cd0e0;\r\n}\r\n#addingError {\r\n\tfont-color: red;\r\n\tcolor: red;\r\n\tmargin-bottom: 10px;\r\n}\r\n/* End CSS For 'Items' Block */\r\n/*Begin Css of comments container*/\r\n#commentsContainer {\r\n\tposition: absolute;\r\n\tmargin-top: 2%; \r\n\tmargin-left: 62%;\r\n\twidth: 35%;\r\n\theight: auto;\r\n\tbox-shadow: 0 0 10px rgba(0,0,0,0.5);\t\r\n}\r\n/*End Css of comments container*/"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\"  id=\"bodyleft\">\n\n  <div >\n    \n    <div id=\"title\">DAIRY APP</div>\n    <div id=\"subtitle\">Сomment with no sense</div>\n\n  </div>\n\n  \n</div>\n\n<div class='container' id=\"itemsContainer\">\n  \n  <div id=\"itemsWindowContent\" style=\"margin-left: 0px;\">\n\n    <p id=\"itemsTitle\">Items</p>\n\n    <div class=\"input-group mb-3\">\n\n      <input [(ngModel)]='newItem.title' type=\"text\" class=\"form-control\" placeholder=\"Type name here...\" id=\"inputName\" name=\"title\" (ngModelChange)=\"checkTitleNewItem(newItem.title)\" >\n      <button type=\"button\" class=\"btn btn-info\" id='addNew' (click)='addNew()'>Add new</button>\n\n    </div>  \n\n    <div *ngIf='uniqueTrigger' id=\"addingError\">Item with same name already added. Please change! </div>\n\n    <ul class=\"list-group list-group-flush\" id=\"list\">\n\n      <li class=\"list-group-item\" id=\"item\" *ngFor='let item of items' [style.border-left]='item.style' routerLink=\"/items/{{item.key}}\">\n        \n        <div class=\"row\" id='row' >\n          <div class=\"col-md\" id=\"contentItem\">{{item.title}} <span class=\"badge badge-info badge-pill \" id=\"spanCount\">{{item.numberComments}}</span> </div ><button type=\"button\" class=\"btn btn-info col-3\" id='deleteItem' (click)='deleteItem(item)'>Delete</button>\n        </div>      \n        \n      </li> \n\n    </ul>\n    \n  </div>\n\n</div>\n\n<div class=\"container\" id='commentsContainer'>\n  <router-outlet ></router-outlet>\n\n</div >\n\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router, route) {
        this.router = router;
        this.route = route;
        this.items = [];
        this.newItem = {
            title: '',
            numberComments: 0,
            key: '',
            comments: [],
            style: '0px solid red'
        };
        this.currentItem = {};
        this.uniqueTrigger = false;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    ;
    //Function for Display active Item
    AppComponent.prototype.activeItem = function (itemKey) {
        var _this = this;
        if (itemKey) {
            var getedItem = JSON.parse(localStorage.getItem(itemKey));
            if (getedItem) {
                if (this.items.length === 1) {
                    this.items[0].style = '3px solid red';
                }
                ;
                var chToActive = 0;
                var chToNoActive = 0;
                var _loop_1 = function (i) {
                    if (this_1.items[i].title === getedItem.title) {
                        setTimeout(function () {
                            _this.items[i].style = '3px solid red';
                        }, 200);
                        chToActive = i;
                        this_1.items[i].numberComments = getedItem.numberComments;
                        this_1.items[i].comments = getedItem.comments;
                    }
                    ;
                    if (this_1.items[i].title !== getedItem.title && this_1.items[i].style === '3px solid red') {
                        setTimeout(function () {
                            _this.items[i].style = '0px solid red';
                        }, 200);
                        //
                        chToNoActive = i;
                    }
                    ;
                };
                var this_1 = this;
                for (var i = 0; i < this.items.length; i++) {
                    _loop_1(i);
                }
                ;
            }
            else {
                this.router.navigate(["/items"]);
            }
            ;
        }
        ;
    };
    ;
    //Function For Getting all Items From LocalStorage
    AppComponent.prototype.getItems = function () {
        this.items = [];
        var numberOfItems = +localStorage.getItem('numberOfItems');
        if (numberOfItems) {
            var j = 0;
            for (var i = 1; i <= numberOfItems; i++) {
                var recivedItem = JSON.parse(localStorage.getItem('I' + i));
                this.items[j] = recivedItem;
                j++;
            }
            ;
        }
        ;
    };
    ;
    //Function call after pushing Button "Add new" 
    AppComponent.prototype.addNew = function () {
        this.checkTitleNewItem(this.newItem.title);
        if (this.uniqueTrigger === false) {
            var numberOfItems = +localStorage.getItem('numberOfItems');
            if (numberOfItems) {
                numberOfItems = +numberOfItems + 1;
                this.newItem.key = 'I' + numberOfItems;
                var newObj = JSON.stringify(this.newItem);
                localStorage.setItem(this.newItem.key, newObj);
                localStorage.setItem('numberOfItems', numberOfItems + '');
            }
            else {
                numberOfItems = 1;
                this.newItem.key = 'I' + numberOfItems;
                var newObj = JSON.stringify(this.newItem);
                localStorage.setItem(this.newItem.key, newObj);
                localStorage.setItem('numberOfItems', numberOfItems + '');
            }
            ;
            this.getItems();
            this.newItem = {
                title: '',
                numberComments: 0,
                key: '',
                comments: [],
                style: ''
            };
            this.router.navigate(["/items"]);
        }
        ;
    };
    ;
    //Function For checking unique Title of New Item
    AppComponent.prototype.checkTitleNewItem = function (title) {
        this.uniqueTrigger = false;
        for (var i = 0; i < this.items.length; i++) {
            if (this.newItem.title === this.items[i].title) {
                this.uniqueTrigger = true;
                break;
            }
            ;
        }
        ;
    };
    ;
    //Function For reWriting Items in LocalStorage
    AppComponent.prototype.reWriteItems = function () {
        var numberOfItems = +localStorage.getItem('numberOfItems');
        if (numberOfItems) {
            for (var i = 1; i <= numberOfItems; i++) {
                localStorage.removeItem('I' + i);
            }
            ;
        }
        ;
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].key = 'I' + (i + 1);
            this.items[i].style = '0px solid red';
            var newObj = JSON.stringify(this.items[i]);
            localStorage.setItem(this.items[i].key, newObj);
        }
        ;
        localStorage.setItem('numberOfItems', this.items.length + '');
        this.getItems();
    };
    ;
    //Function For deleting current item
    AppComponent.prototype.deleteItem = function (item) {
        for (var i = 0; i < this.items.length; i++) {
            if (item === this.items[i]) {
                this.items.splice(i, 1);
            }
            ;
        }
        ;
        this.reWriteItems();
        var triggerForActiveItem = true;
        for (var i = 0; i < this.items.length; i++) {
            if ('3px solid red' === this.items[i].style) {
                this.router.navigate(["/items/" + this.items[i].key]);
                triggerForActiveItem = false;
            }
            ;
        }
        ;
        if (triggerForActiveItem === true) {
            this.router.navigate(["/items"]);
        }
        ;
    };
    ;
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/item/item.component */ "./src/app/components/item/item.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'items', component: _components_item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"] },
    { path: 'items/:item', component: _components_item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"] },
    { path: '', redirectTo: 'items', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/item/item.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/item/item.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Begin CSS For Comments Container*/\r\n\r\n#commentsWindowContent {\r\n\twidth: 100%;\r\n}\r\n\r\n#commentsTitle {\r\n\tfont-family: Calibri, sans-serif;\r\n\tmargin-top: 3%;\r\n\tfont-size: 32px;\r\n\tfont-weight: 100;\r\n\r\n}\r\n\r\n#newCommentRow {\r\n\twidth: 100%;\t\r\n\tmargin-left: 0%;\r\n}\r\n\r\n#avatarNewComment {\r\n\tmargin-left: 0;\r\n\t\r\n}\r\n\r\n#addComment {\r\n\tmargin-top: 5px;\r\n\tmargin-left: 0%;\r\n\twidth: 100%;\r\n\tbackground-color: #08510d;\r\n\tcolor: white;\r\n}\r\n\r\n#addComment:hover {\t\r\n\tbackground-color: #2ea536;\t\r\n}\r\n\r\n#addComment:focus {\t\r\n\tbackground-color: #2ea536;\t\r\n}\r\n\r\n#choosingColorRow {\r\n\tmargin-left: 10px;\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 10px;\r\n\tmargin-right: 10px;\r\n}\r\n\r\n#avatarCurrentComment {\r\n\theight: 70px;\r\n\twidth: 70px;\r\n}\r\n\r\n#contentComment {\r\n\tposition: relative;\r\n\twidth: 100%;\t\r\n}\r\n\r\n#currentComment {\r\n\theight: auto;\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\tborder-top: 0px;\r\n\tborder-bottom: 1.5px solid #d9d9db;\t\r\n}\r\n\r\n/* End CSS For Comments Container*/"

/***/ }),

/***/ "./src/app/components/item/item.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/item/item.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"commentsWindowContent\" *ngIf='commentsTrigger'>\n\n    <p id=\"commentsTitle\">Comments of \"{{item.title}}\" Item</p>\n\n    \n    <ul class=\"list-group list-group-flush\" >\n      <li class=\"list-group-item\"  *ngFor='let comment of item.comments' id=\"currentComment\"> \n\n        <div class=\"row\" >\n          <div class=\"col-2\" [ngStyle]=\"{'background-color':(comment.color)}\" id='avatarCurrentComment'></div>\n          <div class=\"col-8\" id=\"contentComment\">{{comment.description}}  </div >\n        </div>      \n\n      </li>      \n    </ul>\n    <br>\n\n    <div class=\"form-group\" id=\"newCommentRow\">\n\t    <label for=\"exampleFormControlTextarea1\">Add new Comment</label>\n\t    <div class=\"row\" id=\"newCommentRow\">\n\t    \t<div class=\"col-2\" [ngStyle]=\"{'background-color':(newComment.color)}\"  (click)='changeColorAvatar()'></div>\n\t    \t<div class=\"col-10\"><textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"2\" [(ngModel)]='newComment.description'></textarea></div>\n\t    </div>\n\n\t    <div class=\"row\" id=\"choosingColorRow\" *ngIf='choosingColorTrigger'> \n\t     <br>\n\t     <br>\n\t    \t<div class=\"col-2\" style=\"background-color: blue;\" (click)='chooseColorAvatar(\"blue\")'></div>\n\t    \t<div class=\"col-2\" style=\"background-color: green;\" (click)='chooseColorAvatar(\"green\")'></div>\n\t    \t<div class=\"col-2\" style=\"background-color: yellow;\" (click)='chooseColorAvatar(\"yellow\")'></div>\n\t    \t<div class=\"col-2\" style=\"background-color: black;\" (click)='chooseColorAvatar(\"black\")'></div>\n\t    \t<div class=\"col-2\" style=\"background-color: red;\" (click)='chooseColorAvatar(\"red\")'></div>\n\t    \t<div class=\"col-2\" style=\"background-color: orange;\" (click)='chooseColorAvatar(\"orange\")'></div>\n\t    </div>\n\t    <!--<button type=\"button\" class=\"btn btn col-12\" id='addComment' (click)='addNewComment()'>Add New Comment</button>-->\n\t    \n  \t</div>\n\n\n    \n  </div>\n\n"

/***/ }),

/***/ "./src/app/components/item/item.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/item/item.component.ts ***!
  \***************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemComponent = /** @class */ (function () {
    function ItemComponent(router, route, appComponent) {
        this.router = router;
        this.route = route;
        this.appComponent = appComponent;
        this.comments = [];
        this.commentsTrigger = false;
        this.item = {
            title: '',
            key: '',
            comments: [],
            numberComments: 0
        };
        this.choosingColorTrigger = false;
        this.newComment = {
            color: 'red',
            description: ''
        };
    }
    ItemComponent.prototype.ngOnInit = function () {
        this.getCurrentCommnets();
    };
    // Listener Keyboard
    ItemComponent.prototype.keyEvent = function (event) {
        if (this.item.title !== '') {
            if (event.keyCode === 13 && event.ctrlKey === true) {
                this.addNewComment();
            }
            ;
        }
    };
    //Function for getting all Comments For current Item 
    ItemComponent.prototype.getCurrentCommnets = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            if (param.item) {
                var getedItem = JSON.parse(localStorage.getItem(param.item));
                if (getedItem) {
                    _this.item = getedItem;
                    _this.commentsTrigger = true;
                    _this.appComponent.activeItem(_this.item.key);
                }
                else {
                    _this.router.navigate(["/items"]);
                }
                ;
            }
            ;
        });
    };
    ;
    //Function for expand choosing avatar color
    ItemComponent.prototype.changeColorAvatar = function () {
        if (this.choosingColorTrigger === true) {
            this.choosingColorTrigger = false;
        }
        else {
            this.choosingColorTrigger = true;
        }
        ;
    };
    ;
    //Function for activating choosed avatar color
    ItemComponent.prototype.chooseColorAvatar = function (color) {
        this.newComment.color = '' + color;
        this.choosingColorTrigger = false;
    };
    ;
    //Function for adding new Comment
    ItemComponent.prototype.addNewComment = function () {
        var i = this.item.comments.length;
        var newComment = this.newComment;
        this.item.comments[i] = {
            color: newComment.color,
            description: newComment.description
        };
        i = this.item.comments.length;
        this.item.numberComments = i;
        var newObj = JSON.stringify(this.item);
        localStorage.setItem(this.item.key, newObj);
        this.newComment = {
            color: 'red',
            description: ''
        };
        this.appComponent.activeItem(this.item.key);
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ItemComponent.prototype, "keyEvent", null);
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/components/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/components/item/item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], ItemComponent);
    return ItemComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\testEmpeek\app-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map