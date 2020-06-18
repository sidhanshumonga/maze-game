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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row justify-content-center align-items-center w-100 h-25\">\n    <div class=\"col-12 text-center\">\n        <h1>LET'S PLAY</h1>\n        <h5>Use \n          <i class=\"material-icons arrows\">arrow_upward</i>\n          <i class=\"material-icons arrows\">arrow_downward</i>\n          <i class=\"material-icons arrows\">arrow_forward</i>\n          <i class=\"material-icons arrows\">arrow_back</i>\n          to move mario.\n        </h5>\n    </div>\n</div>\n\n  <div class=\"row justify-content-center align-items-center\" style=\"height:75vh\">\n    <div class=\"col text-center\">\n      <app-maze-box></app-maze-box>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog-box/dialog-box.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog-box/dialog-box.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!data.steps\">\n  <div mat-dialog-content>\n    <div class=\"row\">\n      <div class=\"col\">\n        <p>Enter height</p>\n        <mat-form-field>\n          <mat-label>Number of rows</mat-label>\n          <input matInput type=\"number\" [(ngModel)]=\"data.height\" />\n        </mat-form-field>\n      </div>\n      <div class=\"col\">\n        <p>Enter width</p>\n        <mat-form-field>\n          <mat-label>Number of columns</mat-label>\n          <input matInput type=\"number\" max=\"24\" [(ngModel)]=\"data.width\" />\n        </mat-form-field>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-right px-3\">\n    <button mat-button (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\n  </div>\n</div>\n<div *ngIf=\"data.steps\">\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      <h3>GAME OVER</h3>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      <h6>You took {{data.steps}} steps to finish the game.</h6>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maze-box/maze-box.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maze-box/maze-box.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-1\" *ngFor=\"let count of [].constructor(height); index as i\">\n    <div class=\"maze-box mx-1 p-1\" *ngFor=\"let count of [].constructor(width); index as j\" [id]=\"'count_'+i+j\"\n    [class.focus]=\"i === midHeight &&  j === midWidth\" [class.mario-green]=\"hashArray['count_' + i + '_' + j]\">\n        <span *ngIf=\"i === midHeight &&  j === midWidth\"><img  src=\"../../assets/mario.png\" class=\"mario\"/></span>\n        <span *ngIf=\"hashArray['count_' + i + '_' + j]\"><img  src=\"../../assets/evil.jpg\" class=\"mario\"/></span>\n    </div>  \n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  /* background: #e3f2fd; */\n  font-family: open Sans;\n}\n\n.arrows {\n  vertical-align: bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWRoYW5zaHVtb25nYS9Eb2N1bWVudHMvR2l0SHViL21hemUtZ2FtZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIC8qIGJhY2tncm91bmQ6ICNlM2YyZmQ7ICovXG4gICAgZm9udC1mYW1pbHk6IG9wZW4gU2Fucztcbn1cblxuLmFycm93cyB7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn0iLCJib2R5IHtcbiAgLyogYmFja2dyb3VuZDogI2UzZjJmZDsgKi9cbiAgZm9udC1mYW1pbHk6IG9wZW4gU2Fucztcbn1cblxuLmFycm93cyB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'maze-game';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _maze_box_maze_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maze-box/maze-box.component */ "./src/app/maze-box/maze-box.component.ts");
/* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-box/dialog-box.component */ "./src/app/dialog-box/dialog-box.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _maze_box_maze_box_component__WEBPACK_IMPORTED_MODULE_4__["MazeBoxComponent"], _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_5__["DialogBoxComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"]
            ],
            providers: [],
            entryComponents: [_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_5__["DialogBoxComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dialog-box/dialog-box.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dialog-box/dialog-box.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy1ib3gvZGlhbG9nLWJveC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dialog-box/dialog-box.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dialog-box/dialog-box.component.ts ***!
  \****************************************************/
/*! exports provided: DialogBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxComponent", function() { return DialogBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DialogBoxComponent = /** @class */ (function () {
    function DialogBoxComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogBoxComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogBoxComponent.prototype.ngOnInit = function () {
    };
    DialogBoxComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DialogBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-box',
            template: __webpack_require__(/*! raw-loader!./dialog-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog-box/dialog-box.component.html"),
            styles: [__webpack_require__(/*! ./dialog-box.component.scss */ "./src/app/dialog-box/dialog-box.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], DialogBoxComponent);
    return DialogBoxComponent;
}());



/***/ }),

/***/ "./src/app/maze-box/maze-box.component.scss":
/*!**************************************************!*\
  !*** ./src/app/maze-box/maze-box.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maze-box {\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n  display: inline-block;\n  border-radius: 2px;\n  vertical-align: text-bottom;\n}\n\n.mario {\n  height: 100%;\n  width: 100%;\n  transition: all 0.5s ease-in-out;\n}\n\n.mario-green {\n  border: 1px solid green;\n  background: lightgreen;\n}\n\n.focus {\n  border: 1px solid red;\n  background: lightcoral;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWRoYW5zaHVtb25nYS9Eb2N1bWVudHMvR2l0SHViL21hemUtZ2FtZS9zcmMvYXBwL21hemUtYm94L21hemUtYm94LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXplLWJveC9tYXplLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21hemUtYm94L21hemUtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hemUtYm94IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG59XG5cbi5tYXJpbyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWFyaW8tZ3JlZW4ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW5cbn1cblxuLmZvY3VzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgYmFja2dyb3VuZDogbGlnaHRjb3JhbDtcbn0iLCIubWF6ZS1ib3gge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbn1cblxuLm1hcmlvIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tYXJpby1ncmVlbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xufVxuXG4uZm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Y29yYWw7XG59Il19 */"

/***/ }),

/***/ "./src/app/maze-box/maze-box.component.ts":
/*!************************************************!*\
  !*** ./src/app/maze-box/maze-box.component.ts ***!
  \************************************************/
/*! exports provided: MazeBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MazeBoxComponent", function() { return MazeBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog-box/dialog-box.component */ "./src/app/dialog-box/dialog-box.component.ts");




var MazeBoxComponent = /** @class */ (function () {
    function MazeBoxComponent(dialog) {
        this.dialog = dialog;
        this.height = 0;
        this.width = 0;
        this.start = false;
        this.countOfGreens = 0;
        this.midHeight = 0;
        this.midWidth = 0;
        this.hashArray = [];
        this.currentPos = '';
        this.totalMoves = 0;
    }
    MazeBoxComponent.prototype.ngOnInit = function () {
        this.openDialog();
    };
    MazeBoxComponent.prototype.createHashMap = function (height, width) {
        for (var i = 0; i < height; i++) {
            for (var j = 0; j < width; j++) {
                this.hashArray['count_' + i + '_' + j] = false;
            }
        }
        this.randomize();
    };
    MazeBoxComponent.prototype.randomize = function () {
        var i = 0;
        while (i < this.countOfGreens) {
            this.hashArray[this.getRandomIndex()] = true;
            i++;
        }
    };
    MazeBoxComponent.prototype.getRandomIndex = function () {
        var random = 'count_' +
            Math.floor(Math.random() * this.height) +
            '_' +
            Math.floor(Math.random() * this.width);
        return random !== this.currentPos && !this.hashArray[random]
            ? random
            : this.getRandomIndex();
    };
    MazeBoxComponent.prototype.onArrowUpHandler = function (event) {
        this.captureNavigation(event);
    };
    MazeBoxComponent.prototype.captureNavigation = function (event) {
        if (!this.start || this.countOfGreens === 0) {
            return;
        }
        switch (event.code) {
            case 'ArrowRight': {
                this.midWidth < this.width - 1
                    ? (this.midWidth += 1)
                    : (this.midWidth = this.midWidth);
                this.updateCurrentPos();
                break;
            }
            case 'ArrowUp': {
                this.midHeight > 0
                    ? (this.midHeight -= 1)
                    : (this.midHeight = this.midHeight);
                this.updateCurrentPos();
                break;
            }
            case 'ArrowLeft': {
                this.midWidth > 0
                    ? (this.midWidth -= 1)
                    : (this.midWidth = this.midWidth);
                this.updateCurrentPos();
                break;
            }
            case 'ArrowDown': {
                this.midHeight < this.height - 1
                    ? (this.midHeight += 1)
                    : (this.midHeight = this.midHeight);
                this.updateCurrentPos();
                break;
            }
        }
    };
    MazeBoxComponent.prototype.updateCurrentPos = function () {
        this.currentPos = 'count_' + this.midHeight + '_' + this.midWidth;
        if (this.hashArray[this.currentPos]) {
            this.hashArray[this.currentPos] = false;
            this.countOfGreens -= 1;
            this.playAudio('../../assets/sounds/eat.mp3');
        }
        this.totalMoves += 1;
        this.playAudio('../../assets/sounds/step.mp3');
        if (this.countOfGreens === 0) {
            this.endGame();
            this.playAudio('../../assets/sounds/end.mp3');
        }
    };
    MazeBoxComponent.prototype.playAudio = function (path) {
        var audio = new Audio();
        audio.src = path;
        audio.load();
        audio.play();
    };
    MazeBoxComponent.prototype.setupDimensions = function () {
        this.countOfGreens = this.height > this.width ? this.height : this.width;
        this.midHeight = this.height % 2 === 0 ? this.height / 2 - 1 : (this.height - 1) / 2;
        this.midWidth = this.width % 2 === 0 ? this.width / 2 - 1 : (this.width - 1) / 2;
        this.currentPos = 'count_' + this.midHeight + '_' + this.midWidth;
        this.createHashMap(this.height, this.width);
    };
    MazeBoxComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_3__["DialogBoxComponent"], {
            width: '40%',
            data: { height: this.height, width: this.width },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.width = result.width;
            _this.height = result.height;
            _this.setupDimensions();
            _this.start = true;
        });
    };
    MazeBoxComponent.prototype.endGame = function () {
        var dialogRef = this.dialog.open(_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_3__["DialogBoxComponent"], {
            width: '40%',
            data: { steps: this.totalMoves },
        });
    };
    MazeBoxComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
    ], MazeBoxComponent.prototype, "onArrowUpHandler", null);
    MazeBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maze-box',
            template: __webpack_require__(/*! raw-loader!./maze-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/maze-box/maze-box.component.html"),
            styles: [__webpack_require__(/*! ./maze-box.component.scss */ "./src/app/maze-box/maze-box.component.scss")]
        })
    ], MazeBoxComponent);
    return MazeBoxComponent;
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

module.exports = __webpack_require__(/*! /Users/sidhanshumonga/Documents/GitHub/maze-game/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map