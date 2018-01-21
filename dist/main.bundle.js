webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_profile_service__ = __webpack_require__("../../../../../src/app/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_date_date_component__ = __webpack_require__("../../../../../src/app/components/date/date.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_onboarding_onboarding_component__ = __webpack_require__("../../../../../src/app/components/onboarding/onboarding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_survey_survey_component__ = __webpack_require__("../../../../../src/app/components/survey/survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_training_training_component__ = __webpack_require__("../../../../../src/app/components/training/training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_finding_finding_component__ = __webpack_require__("../../../../../src/app/components/finding/finding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'finding', component: __WEBPACK_IMPORTED_MODULE_16__components_finding_finding_component__["a" /* FindingComponent */] },
    { path: 'training', component: __WEBPACK_IMPORTED_MODULE_14__components_training_training_component__["a" /* TrainingComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_15__components_sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'date', component: __WEBPACK_IMPORTED_MODULE_11__components_date_date_component__["a" /* DateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'onboarding', component: __WEBPACK_IMPORTED_MODULE_12__components_onboarding_onboarding_component__["a" /* OnboardingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'survey', component: __WEBPACK_IMPORTED_MODULE_13__components_survey_survey_component__["a" /* SurveyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_date_date_component__["a" /* DateComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_onboarding_onboarding_component__["a" /* OnboardingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_survey_survey_component__["a" /* SurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_training_training_component__["a" /* TrainingComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_finding_finding_component__["a" /* FindingComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material__["A" /* MatStepperModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_8__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_7__services_profile_service__["a" /* ProfileService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/date/date.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/date/date.component.html":
/***/ (function(module, exports) {

module.exports = "<button role=\"button\" (click)='routeHome()'>Home</button>\n<button role=\"button\" (click)='routeLogin()'>Logout</button>\n<div class=\"date\">\n  <h1 style=\"font-family:verdana;\">CoffeeDate Live Cam</h1>\n  <iframe src=\"https://tokbox.com/embed/embed/ot-embed.js?embedId=58d3a254-7912-4048-8c4b-4b75dc8d119b&room=DEFAULT_ROOM&iframe=true\" width=\"800px\" height=\"640px\" allow=\"microphone; camera\" ></iframe>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/date/date.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateComponent = /** @class */ (function () {
    function DateComponent(router) {
        this.router = router;
    }
    DateComponent.prototype.ngOnInit = function () {
    };
    DateComponent.prototype.routeHome = function () {
        this.router.navigate(['finding']);
    };
    DateComponent.prototype.routeLogin = function () {
        this.router.navigate(['login']);
    };
    DateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-date',
            template: __webpack_require__("../../../../../src/app/components/date/date.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/date/date.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], DateComponent);
    return DateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/finding/finding.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    height: 100vh;\n    width:86vw;\n    float: right;\n}\n.carousel-inner{\n    height: 95vh;\n}\n.coffee-icon{\n    border-radius: 50%;\n    height: 40vh;\n    width: 20vw;\n}\n.carousel-caption{\n    padding-bottom: 0vh !important;\n}\n.carousel-inner > .item > img,\n  .carousel-inner > .item > a > img {\n      /* width: 70%; */\n      margin: auto;\n      border-radius: 50%;\n      height:480px;\n  }\n.my-button {\n    background-color: rgb(74, 111, 160); /* Green */\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    width: 170px;\n}\n.my-button:active {\n    background-color: rgb(51, 80, 117); \n}\n.sidenav{\n    height: 100vh;\n    background-color:#cccccc;\n    max-width:13vw;\n    float: left;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/finding/finding.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\n    <h1 style=\"text-align: center;\">Matches</h1>\n    <div *ngFor=\"let match of matches; let i = index\">\n        <button class=\"my-button\" role=\"button\" (click)='routeToCam(match)'>{{match}}</button>\n        <mat-divider></mat-divider>\n    </div>\n      <p *ngIf=\"!isMatches\">No matches :/</p>\n</div>\n<div class=\"container\">\n  <button role=\"button\" style=\"float:right;\" (click)='routeLogin()'>Logout</button>\n  <br>\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval='false'>\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" *ngFor='let i of arr' data-slide-to=\"i+1\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n\n      <div class=\"item active\">\n        <img src=\"https://i.imgur.com/A0ZYKAb.png\" alt=\"Chania\" width=\"480\" height=\"365\">\n        <div class=\"carousel-caption\">\n          <h1 (click)=\"getUsers()\">Hello {{name}}!</h1>\n          <h3>Let's get you started. If you are interested in the person you are seeing, press the interested button.</h3>\n          <button class=\"my-button\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">Okay!</button>\n        </div>\n      </div>\n      <div class=\"item\" *ngFor='let i of arr'>\n        <img src=\"{{userList[i].picture || ''}}\" alt=\"\" width=\"480\" height=\"365\">\n        <div class=\"carousel-caption\" *ngIf='i < arr.length - 1'>\n          <h1>{{userList[i].name}}</h1>\n          <h3>{{userList[i].description}}</h3>\n          <h3>{{userList[i].interests}}</h3>\n          <button class=\"my-button\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">Pass</button>\n          <button class=\"my-button\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\" (click)='like(i)'>Interested</button>\n        </div> \n        <div class=\"carousel-caption\" *ngIf='i == arr.length - 1'> \n          <h1>Sorry we are out of users!</h1>\n          <h3>Please wait to see if any of your interests have responded</h3>\n          <!-- <button class=\"my-button\" (click)=\"finish()\">Get Started!</button> -->\n        </div>\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <!-- <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a> -->\n  </div>\n</div>\n\n  \n "

/***/ }),

/***/ "../../../../../src/app/components/finding/finding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FindingComponent = /** @class */ (function () {
    function FindingComponent(ApiService, router) {
        this.ApiService = ApiService;
        this.router = router;
        this.username = '';
        this.password = '';
        this.matches = [];
        this.error = '';
        this.isMatches = false;
        this.userList = [];
        this.likedList = [];
        this.arr = Array.from({ length: this.userList.length }, function (x, i) { return i; });
        this.name = localStorage.getItem('username') || 'YOUR_NAMES';
        this.getMatches();
        this.getUsers();
    }
    FindingComponent.prototype.ngOnInit = function () {
    };
    FindingComponent.prototype.getUsers = function () {
        var _this = this;
        this.name = localStorage.getItem('name');
        this.ApiService.getAllUsers(this.name).subscribe(function (data) {
            // console.log(data);
            var body = JSON.parse(data['_body']);
            for (var item in body) {
                // console.log(item)
                if (_this.name != body[item].name)
                    _this.userList.push(body[item]);
            }
            _this.arr = Array.from({ length: _this.userList.length + 1 }, function (x, i) { return i; });
            // console.log(this.userList)
        }, function (err) {
            console.log(err);
        });
    };
    FindingComponent.prototype.like = function (i) {
        var _this = this;
        this.likedList.push[i];
        var userA = localStorage.getItem('name');
        var userB = this.userList[i].name;
        this.ApiService.like(userA, userB).subscribe(function (data) {
            if (data['_body'] == '"You have a match!"') {
                _this.getMatches();
                //let arr = [userA, userB];
                //arr = arr.sort();
                //this.router.navigate(['date', { room: arr[0] + arr[1] }]);
            }
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    FindingComponent.prototype.routeToCam = function (userB) {
        var userA = localStorage.getItem('name');
        var arr = [userA, userB];
        arr = arr.sort();
        this.router.navigate(['date', { room: arr[0] + arr[1] }]);
    };
    FindingComponent.prototype.getMatches = function () {
        var _this = this;
        this.username = localStorage.getItem('username');
        this.password = localStorage.getItem('password');
        if (this.username != '' && this.password != '') {
            this.ApiService.getUser(this.username, this.password).subscribe(function (data) {
                if (data['_body'] == '"bamboozle"') {
                    _this.error = 'bamboozle';
                }
                else {
                    console.log('gest her');
                    var body = JSON.parse(data['_body']);
                    console.log("YEEE");
                    console.log(body);
                    _this.matches = body.matches;
                    if (_this.matches.length > 0)
                        _this.isMatches = true;
                    else
                        _this.isMatches = false;
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    FindingComponent.prototype.routeLogin = function () {
        this.router.navigate(['login']);
    };
    FindingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-finding',
            template: __webpack_require__("../../../../../src/app/components/finding/finding.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/finding/finding.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], FindingComponent);
    return FindingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    width: 200px;\n    /* height: 800px; */\n}\n.container {\n    width: 20vw;\n    margin: 30vh 40vw;\n}\n/* Full-width input fields */\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n/* Set a style for all buttons */\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 49%;\n}\nbutton:hover {\n    opacity: 0.8;\n}\n/* Extra styles for the cancel button */\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n/* Center the image and position the close button */\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n    position: relative;\n}\nimg.avatar {\n    width: 100px;\n    height: 200px;\n    border-radius: 50%;\n}\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n/* The Modal (background) */\n.modal {\n    /* display: none; Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n}\n/* Modal Content/Box */\n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n/* The Close Button (x) */\n.close {\n    position: absolute;\n    right: 25px;\n    top: 0;\n    color: #000;\n    font-size: 35px;\n    font-weight: bold;\n}\n.close:hover,\n.close:focus {\n    color: red;\n    cursor: pointer;\n}\n/* Add Zoom Animation */\n.animate {\n    -webkit-animation: animatezoom 0.6s;\n    animation: animatezoom 0.6s\n}\n@-webkit-keyframes animatezoom {\n    from {-webkit-transform: scale(0)} \n    to {-webkit-transform: scale(1)}\n}\n@keyframes animatezoom {\n    from {-webkit-transform: scale(0);transform: scale(0)} \n    to {-webkit-transform: scale(1);transform: scale(1)}\n}\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<head>\n<style>\nh1 {\n    position:absolute;\n    color: black;\n    font-family: fantasy;\n    font-size: 500%;\n    text-align:center;\n    padding-left: 550px;\n    top: 50px;\n    \n  \n  \n}\n\n</style>\n</head>\n\n\n<h1>Welcome to CoffeeDate!</h1>\n\n\n\n\n<div class=\"card\">\n<form class=\"login-comp\">\n  <!-- <div class=\"imgcontainer\">\n    <img src=\"https://i.imgur.com/A0ZYKAb.png\" alt=\"Avatar\" class=\"avatar\">\n  </div> -->\n\n  <div class=\"container\">\n\n\n    <label><b style=\"color: black ;\">Username</b></label>\n    <input [(ngModel)]='username' #ctrl=\"ngModel\" type=\"text\" placeholder=\"Enter Username\" name=\"uname\"required>\n\n    <label><b style=\"color: black ;\">Password</b></label>\n    <input [(ngModel)]='password' #ctrl=\"ngModel\" type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\n\n    <p style='color:red'>\n      {{error}}\n    </p>\n    <button type=\"submit\" (click)='login()'>Login</button>\n    <button type=\"submit\" style=\"background-color: red !important\" (click)='signUp()'>Sign Up</button>\n    <!-- <label> \n      <input type=\"checkbox\" checked=\"checked\"> <span style=\"color:white\">Remember me</span>\n    </label> -->\n  </div>\n\n  <!-- <div class=\"container\"> -->\n    <!-- <button type=\"button\" class=\"cancelbtn\">Cancel</button>\n    <span class=\"psw\">Forgot <a href=\"#\">password?</a></span> -->\n  <!-- </div> -->\n</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, ApiService) {
        this.router = router;
        this.ApiService = ApiService;
        this.username = '';
        this.password = '';
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        localStorage.setItem('username', this.username);
        localStorage.setItem('password', this.password);
        if (this.username != '' && this.password != '') {
            this.ApiService.getUser(this.username, this.password).subscribe(function (data) {
                console.log(data);
                if (data['_body'] == '"bamboozle"') {
                    _this.error = 'bamboozle';
                }
                else {
                    console.log('gest her');
                    var body = JSON.parse(data['_body']);
                    localStorage.setItem('name', body.name);
                    localStorage.setItem('description', body.description);
                    localStorage.setItem('picture', body.picture);
                    localStorage.setItem('interests', body.interests);
                    _this.router.navigate(['finding']);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    LoginComponent.prototype.signUp = function () {
        // localStorage.setItem('username', this.username);
        // localStorage.setItem('password', this.password);
        // if(this.username != '' && this.password != '') {
        //   this.router.navigate(['survey']);
        // }
        this.router.navigate(['signup']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/onboarding/onboarding.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/onboarding/onboarding.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  onboarding works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/onboarding/onboarding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnboardingComponent = /** @class */ (function () {
    function OnboardingComponent() {
    }
    OnboardingComponent.prototype.ngOnInit = function () {
    };
    OnboardingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-onboarding',
            template: __webpack_require__("../../../../../src/app/components/onboarding/onboarding.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/onboarding/onboarding.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OnboardingComponent);
    return OnboardingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    width: 200px;\n    /* height: 800px; */\n}\n.container {\n    width: 20vw;\n    margin: 30vh 40vw;\n}\n/* Full-width input fields */\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n/* Set a style for all buttons */\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 49%;\n}\nbutton:hover {\n    opacity: 0.8;\n}\n/* Extra styles for the cancel button */\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n/* Center the image and position the close button */\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n    position: relative;\n}\nimg.avatar {\n    width: 100px;\n    height: 200px;\n    border-radius: 50%;\n}\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n/* The Modal (background) */\n.modal {\n    /* display: none; Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n}\n/* Modal Content/Box */\n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n/* The Close Button (x) */\n.close {\n    position: absolute;\n    right: 25px;\n    top: 0;\n    color: #000;\n    font-size: 35px;\n    font-weight: bold;\n}\n.close:hover,\n.close:focus {\n    color: red;\n    cursor: pointer;\n}\n/* Add Zoom Animation */\n.animate {\n    -webkit-animation: animatezoom 0.6s;\n    animation: animatezoom 0.6s\n}\n@-webkit-keyframes animatezoom {\n    from {-webkit-transform: scale(0)} \n    to {-webkit-transform: scale(1)}\n}\n@keyframes animatezoom {\n    from {-webkit-transform: scale(0);transform: scale(0)} \n    to {-webkit-transform: scale(1);transform: scale(1)}\n}\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n    <style>\n    h1 {\n        position:absolute;\n        color: black;\n        font-family: fantasy;\n        font-size: 350%;\n        text-align:center;\n        padding-left: 720px;\n        top: 200px;\n        \n      \n      \n    }\n    \n    </style>\n    </head>\n    \n    \n    <h1>Create Your Profile</h1>\n\n\n<div class=\"card\">\n  <form class=\"login-comp\">\n    <!-- <div class=\"imgcontainer\">\n      <img src=\"https://i.imgur.com/A0ZYKAb.png\" alt=\"Avatar\" class=\"avatar\">\n    </div> -->\n  \n    <div class=\"container\">\n      <label><b style=\"color: black;\">Name</b></label> \n      <input [(ngModel)]='Name' #ctrl=\"ngModel\" type=\"text\" placeholder=\"Enter Name\" name=\"name\" required>\n  \n      <label><b style=\"color:black;\">Description</b></label>\n      <input [(ngModel)]='Description' #ctrl=\"ngModel\" type=\"text\" placeholder=\"Enter Description\" name=\"desc\" required>\n  \n      <label><b style=\"color:black;\">Interest</b></label>\n      <input [(ngModel)]='Interest' #ctrl=\"ngModel\" type=\"text\" placeholder=\"Enter Interest\" name=\"interest\" required>\n      \n      <label><b style=\"color:black;\">Avatar</b></label>\n      <input [(ngModel)]='Avatar' #ctrl=\"ngModel\" type=\"text\" placeholder=\"Link to Picture\" name=\"pic\" required>\n      \n      <button type=\"submit\" (click)='submit()'>Submit</button>\n      \n    <!-- <label> \n      <!-- <label> \n        <input type=\"checkbox\" checked=\"checked\"> <span style=\"color:white\">Remember me</span>\n      </label> -->\n    </div>\n  \n    <!-- <div class=\"container\"> -->\n      <!-- <button type=\"button\" class=\"cancelbtn\">Cancel</button>\n      <span class=\"psw\">Forgot <a href=\"#\">password?</a></span> -->\n    <!-- </div> -->\n  </form>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, ApiService) {
        this.router = router;
        this.ApiService = ApiService;
        this.Name = '';
        this.Description = '';
        this.Interest = '';
        this.Avatar = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.submit = function () {
        if (this.Name != '' && this.Description != '' && this.Interest != '' && this.Avatar != '') {
            localStorage.setItem('name', this.Name);
            localStorage.setItem('description', this.Description);
            localStorage.setItem('picture', this.Avatar);
            localStorage.setItem('interests', this.Interest);
            this.router.navigate(['survey']);
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    width: 200px;\n    /* height: 800px; */\n}\n.container {\n    width: 20vw;\n    margin: 30vh 40vw;\n}\n/* Full-width input fields */\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n/* Set a style for all buttons */\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 49%;\n}\nbutton:hover {\n    opacity: 0.8;\n}\n/* Extra styles for the cancel button */\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n/* Center the image and position the close button */\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n    position: relative;\n}\nimg.avatar {\n    width: 100px;\n    height: 200px;\n    border-radius: 50%;\n}\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n/* The Modal (background) */\n.modal {\n    /* display: none; Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n}\n/* Modal Content/Box */\n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n/* The Close Button (x) */\n.close {\n    position: absolute;\n    right: 25px;\n    top: 0;\n    color: #000;\n    font-size: 35px;\n    font-weight: bold;\n}\n.close:hover,\n.close:focus {\n    color: red;\n    cursor: pointer;\n}\n/* Add Zoom Animation */\n.animate {\n    -webkit-animation: animatezoom 0.6s;\n    animation: animatezoom 0.6s\n}\n@-webkit-keyframes animatezoom {\n    from {-webkit-transform: scale(0)} \n    to {-webkit-transform: scale(1)}\n}\n@keyframes animatezoom {\n    from {-webkit-transform: scale(0);transform: scale(0)} \n    to {-webkit-transform: scale(1);transform: scale(1)}\n}\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n\n</p>\n<div class=\"card\">\n  <form class=\"login-comp\">\n    <!-- <div class=\"imgcontainer\">\n      <img src=\"https://i.imgur.com/A0ZYKAb.png\" alt=\"Avatar\" class=\"avatar\">\n    </div> -->\n\n    <div class=\"container\">\n      <h1>Sign Up </h1>\n      <label><b style=\"color: black;\">Username</b></label> \n      <input [(ngModel)]='username' #ctrl=\"ngModel\" type=\"text\" placeholder=\"Enter Username\" name=\"username\" required>\n  \n      <label><b style=\"color:black ;\">Password</b></label>\n      <input [(ngModel)]='password' #ctrl=\"ngModel\" type=\"text\" placeholder=\"Enter Password\" name=\"pass\" required>\n  \n      <label><b style=\"color: black;\">Confirm Password</b></label>\n      <input [(ngModel)]='ConfirmPassword' #ctrl=\"ngModel\" type=\"text\" placeholder=\"Re-type Password\" name=\"confirm\" required>\n      \n      <!--\n      <label><b style=\"color: black;\">Email Address</b></label>\n      <input [(ngModel)]='emailaddress' #ctrl=\"ngModel\" type=\"text\" placeholder=\"Enter Email Address\" name=\"email\" required>\n\n      <label><b style=\"color: black;\">Birthdate</b></label>\n      <input [(ngModel)]='birthdate' #ctrl=\"ngModel\" type=\"text\" placeholder=\"Month/Day/Year\" name=\"birth\" required>\n\n      <label><b style=\"color: black;\">Zip Code</b></label>\n      <input [(ngModel)]='zipcode' #ctrl=\"ngModel\" type=\"text\" placeholder=\"Enter Zip Code\" name=\"zip\" required>\n      -->\n      \n      <button type=\"submit\" (click)='signup()'>Submit</button>\n      \n    <!-- <label> \n      <!-- <label> \n        <input type=\"checkbox\" checked=\"checked\"> <span style=\"color:white\">Remember me</span>\n      </label> -->\n    </div>\n  \n    <!-- <div class=\"container\"> -->\n      <!-- <button type=\"button\" class=\"cancelbtn\">Cancel</button>\n      <span class=\"psw\">Forgot <a href=\"#\">password?</a></span> -->\n    <!-- </div> -->\n  </form>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    // emailaddress = '';
    // birthdate = '';
    // zipcode = '';
    function SignUpComponent(router) {
        this.router = router;
        this.username = '';
        this.password = '';
        this.ConfirmPassword = '';
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.signup = function () {
        localStorage.setItem('username', this.username);
        localStorage.setItem('password', this.password);
        localStorage.setItem('ConfirmPassword', this.ConfirmPassword);
        // localStorage.setItem('emailaddress', this.emailaddress);
        // localStorage.setItem('birthdate', this.birthdate);
        // localStorage.setItem('zipcode', this.zipcode);
        if (this.username != '' && this.password != '' && this.ConfirmPassword != '') {
            this.router.navigate(['profile']);
        }
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/survey/survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    height: 100vh;\n}\n.carousel-inner{\n    height: 100vh;\n}\n.coffee-icon{\n    height: 40vh;\n    width: 20vw;\n}\n.carousel-caption{\n    padding-bottom: 20vh !important;\n}\n.carousel-inner > .item > img,\n  .carousel-inner > .item > a > img {\n      /* width: 70%; */\n      margin: auto;\n  }\n.my-button {\n    background-color: rgb(74, 111, 160); /* Green */\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n}\n.my-button:active {\n    background-color: rgb(51, 80, 117); \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/survey/survey.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval='false'>\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" *ngFor='let i of arr' data-slide-to=\"i+1\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n\n      <div class=\"item active\">\n        <img src=\"https://i.imgur.com/A0ZYKAb.png\" alt=\"Chania\" width=\"480\" height=\"365\">\n        <div class=\"carousel-caption\">\n          <h1>Hello {{name}}!</h1>\n          <h3>Let us know a bit more about yourself.</h3>\n          <button class=\"my-button\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">Okay!</button>\n        </div>\n      </div>\n\n      <div class=\"item\" *ngFor='let i of arr'>\n        <img src=\"https://i.imgur.com/A0ZYKAb.png\" alt=\"Chania\" width=\"480\" height=\"365\">\n        <div class=\"carousel-caption\" *ngIf='i < 18'>\n          <h1>Question {{i+1}}</h1>\n          <h3>{{questionList[i]}}</h3>\n          <button class=\"my-button\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\" (click)=\"logAnswer(i, 0)\">{{questionAnswers[i][0]}}</button>\n          <button class=\"my-button\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\" (click)=\"logAnswer(i, 1)\">{{questionAnswers[i][1]}}</button>\n        </div>\n        <div class=\"carousel-caption\" *ngIf='i == 18'>\n          <h1>Thanks for completing our onboarding!</h1>\n          <h3>Click the button below to get started!</h3>\n          <button class=\"my-button\" (click)=\"finish()\">Get Started!</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <!-- <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a> -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/survey/survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyComponent = /** @class */ (function () {
    function SurveyComponent(router, ApiService) {
        this.router = router;
        this.ApiService = ApiService;
        this.questionTitles = [];
        this.questionList = [
            'Do you have or want any pets?',
            'Would you rather stay in and watch netflix or go out?',
            'Is sexual compatibility important to you?',
            'Do believe a cup is half-empty or half-full?',
            'Are you a morning or a night person?',
            'Are you more of a city or country person?',
            'Are you a clean or messy person?',
            'Are you a religious person?',
            'Do you want children?',
            'Do you like to eat out or eat in?',
            'Do you like to play sports?',
            'Do you follow politics?',
            'Are you spontaneous or predictable?',
            'Are you looking for a long-term relationship?',
            'Do you tend to procrastinate?',
            'Do you like to travel?',
            'Are you an introvert or extrovert?',
            'Are you close with your family?'
        ];
        this.questionAnswers = [
            ['pets', 'no pets'],
            ['stay in and watch netflix', 'go out instead of staying in'],
            ['sexual compatibility matters', 'sexual compatibility does not matter'],
            ['cup is half-empty', 'cup is half-full'],
            ['morning person', 'night person'],
            ['city person', 'country person'],
            ['clean', 'messy'],
            ['religious', 'not religious'],
            ['want children', 'do not want children'],
            ['eat in', 'eat out'],
            ['play sports', 'do not play sports'],
            ['follows politics', 'does not follow politics'],
            ['spontaneous', 'predictable'],
            ['want long-term relationship', 'does not want long-term relationship'],
            ['procrastinates', 'does not procrastinate'],
            ['likes to travel', 'does not like to travel'],
            ['introvert', 'extrovert'],
            ['close to your family', 'not close to your family']
        ];
        this.arr = Array.from({ length: 19 }, function (x, i) { return i; });
        this.userAnswers = Array.from({ length: 19 }, function (x, i) { return ''; });
        this.name = localStorage.getItem('username') || 'YOUR_NAMES';
    }
    SurveyComponent.prototype.ngOnInit = function () {
    };
    SurveyComponent.prototype.logAnswer = function (i, ans) {
        this.userAnswers.splice(i, 1);
        this.userAnswers.splice(i, 0, ans);
        console.log(this.userAnswers);
        localStorage.setItem('survey', this.userAnswers.toString());
    };
    SurveyComponent.prototype.finish = function () {
        var _this = this;
        console.log("ye");
        console.log(this.userAnswers);
        console.log(this.userAnswers.slice(0, 18).toString());
        this.ApiService.makeUser(localStorage.getItem('username'), localStorage.getItem('password'), localStorage.getItem('name'), localStorage.getItem('description'), localStorage.getItem('picture'), localStorage.getItem('interests'), this.userAnswers.slice(0, 18).toString()).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['finding']);
        }, function (err) {
            console.log(err);
            // this.router.navigate(['finding']);
        });
    };
    SurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-survey',
            template: __webpack_require__("../../../../../src/app/components/survey/survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/survey/survey.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]])
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/training/training.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/training/training.component.html":
/***/ (function(module, exports) {

module.exports = "    <h1>{{currentProfileID}}</h1>\n    <li style=\"color:green; float: center\" *ngFor=\"let answer of currentProfile; let i = index\">\n      {{ answer }}\n    </li>\n    <button mat-raised-button class=\"primary-button\" (click)=\"pushLabel(currentProfileID, 0)\" *ngIf=\"isMore\">No</button>\n    <button mat-raised-button class=\"primary-button\" (click)=\"pushLabel(currentProfileID, 1)\" *ngIf=\"isMore\">Yes</button>\n<div>{{labels}}</div>"

/***/ }),

/***/ "../../../../../src/app/components/training/training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_profile_service__ = __webpack_require__("../../../../../src/app/services/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrainingComponent = /** @class */ (function () {
    function TrainingComponent(http, ProfileServiceService) {
        this.http = http;
        this.ProfileServiceService = ProfileServiceService;
        this.currentProfileID = 0;
        this.isMore = true;
    }
    TrainingComponent.prototype.ngOnInit = function () {
        this.getProfile(this.currentProfileID);
    };
    TrainingComponent.prototype.getProfile = function (profileID) {
        var _this = this;
        this.ProfileServiceService.getProfile(profileID).subscribe(function (data) {
            _this.currentProfile = JSON.parse(data['_body']);
            console.log(_this.currentProfile);
        });
    };
    TrainingComponent.prototype.getLabels = function () {
        var _this = this;
        this.ProfileServiceService.getLabels().subscribe(function (data) {
            _this.labels = JSON.parse(data['_body']);
            console.log(_this.labels);
        });
    };
    TrainingComponent.prototype.pushLabel = function (index, label) {
        var _this = this;
        this.ProfileServiceService.postLabel(index, label).subscribe(function (data) {
            console.log(data);
            if (_this.currentProfileID < 399) {
                _this.currentProfileID = _this.currentProfileID + 1;
                _this.getProfile(_this.currentProfileID);
            }
            else {
                _this.isMore = false;
                _this.currentProfile = [];
                _this.getLabels();
            }
        }, function (err) { console.log(err); });
    };
    TrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-training',
            template: __webpack_require__("../../../../../src/app/components/training/training.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/training/training.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_profile_service__["a" /* ProfileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__services_profile_service__["a" /* ProfileService */]])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__("../../../../../src/app/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.makeUser = function (userName, password, name, description, picture, interests, survey) {
        console.log(survey);
        var data = {
            'userName': userName,
            'password': password,
            'name': name,
            'description': description,
            'picture': picture,
            'interests': interests,
            'survey': survey
        };
        // console.log(data['survey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__profile_service__["b" /* url */] + '/api/makeUser/', data);
    };
    ApiService.prototype.getUser = function (userName, password) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__profile_service__["b" /* url */] + '/api/getUser?userName=' + userName + '&password=' + password);
    };
    ApiService.prototype.getAllUsers = function (userName) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__profile_service__["b" /* url */] + '/api/predict/?userName=' + userName);
    };
    ApiService.prototype.like = function (userA, userB) {
        var data = {
            'userA': userA,
            'userB': userB
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__profile_service__["b" /* url */] + '/api/like/', data);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!localStorage.getItem('username') || localStorage.getItem('username') == 'null') {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//The main url that is shared with the api serivce
var url = 'http://coffeedate.us-west-1.elasticbeanstalk.com';
var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getProfile = function (profileID) {
        return this.http.get(url + '/api/getProfile/?index=' + profileID);
    };
    ProfileService.prototype.getLabels = function () {
        return this.http.get(url + '/api/getLabels/');
    };
    ProfileService.prototype.postLabel = function (index, label) {
        var data = {
            'index': index,
            'label': label,
        };
        console.log("yee");
        console.log(data);
        return this.http.post(url + '/api/makeLabel/', data);
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map