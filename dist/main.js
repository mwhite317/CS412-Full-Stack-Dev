(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/OAp":
/*!******************************************************!*\
  !*** ./src/app/weather-row/weather-row.component.ts ***!
  \******************************************************/
/*! exports provided: WeatherRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherRowComponent", function() { return WeatherRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_weather_row_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./weather-row.component.html */ "pugD");
/* harmony import */ var _weather_row_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather-row.component.scss */ "nTX4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let WeatherRowComponent = class WeatherRowComponent {
    constructor() { }
    ngOnInit() {
    }
};
WeatherRowComponent.ctorParameters = () => [];
WeatherRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-weather-row',
        template: _raw_loader_weather_row_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_weather_row_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], WeatherRowComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/markwhite/workspace/CS412-Full-Stack-Dev/src/main.ts */"zUnb");


/***/ }),

/***/ "2qGb":
/*!****************************************!*\
  !*** ./src/app/shared/guards/index.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "LjFu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "8PEf":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n  width: 100%;\n}\nheader .logo {\n  background-image: url('logo.png');\n  width: 50px;\n  height: 50px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\nheader .example-spacer {\n  flex: 1 1 auto;\n}\nheader .links {\n  color: white;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: initial;\n  letter-spacing: -1px;\n  line-height: 1;\n  text-align: center;\n  padding: 15px;\n}\nheader .links.side {\n  padding: 0 14px;\n}\nheader .mat-toolbar {\n  background: black;\n}\nheader .mat-icon {\n  vertical-align: middle;\n  margin: 0 5px;\n}\nheader a {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjtBQUFJO0VBQ0UsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFFTjtBQUFJO0VBQ0UsY0FBQTtBQUVOO0FBQUk7RUFDRSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFFTjtBQURNO0VBQ0UsZUFBQTtBQUdSO0FBQUk7RUFDRSxpQkFBQTtBQUVOO0FBQUk7RUFDRSxzQkFBQTtFQUNBLGFBQUE7QUFFTjtBQUFJO0VBQ0UsZUFBQTtBQUVOIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmxvZ28ge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvbG9nby5wbmcnKTtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG4gICAgLmV4YW1wbGUtc3BhY2VyIHtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cbiAgICAubGlua3Mge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogaW5pdGlhbDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgJi5zaWRlIHtcbiAgICAgICAgcGFkZGluZzogMCAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubWF0LXRvb2xiYXIge1xuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgfVxuICAgIC5tYXQtaWNvbiB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICB9XG4gICAgYSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG4gIl19 */");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "bdh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomeComponent = class HomeComponent {
    constructor() {
        this.weatherData = [
            {
                'coord': { 'lon': -71.06, 'lat': 42.36 },
                'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n' }],
                'base': 'stations',
                'main': { 'temp': 272.52, 'feels_like': 266.95, 'temp_min': 270.93, 'temp_max': 274.82, 'pressure': 1022, 'humidity': 86 },
                'visibility': 10000,
                'wind': { 'speed': 4.6, 'deg': 270 },
                'clouds': { 'all': 1 },
                'dt': 1607669789,
                'sys': { 'type': 1, 'id': 4967, 'country': 'US', 'sunrise': 1607688234, 'sunset': 1607721109 },
                'timezone': -18000,
                'id': 4930956,
                'name': 'Boston',
                'cod': 200
            },
            {
                'coord': { 'lon': 7.42, 'lat': 43.73 },
                'weather': [{ 'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d' }],
                'base': 'stations',
                'main': { 'temp': 278.44, 'feels_like': 272.78, 'temp_min': 276.48, 'temp_max': 279.82, 'pressure': 1006, 'humidity': 65 },
                'visibility': 10000,
                'wind': { 'speed': 5.1, 'deg': 340 },
                'clouds': { 'all': 75 },
                'dt': 1607670863,
                'sys': { 'type': 1, 'id': 6515, 'country': 'MC', 'sunrise': 1607669664, 'sunset': 1607701997 },
                'timezone': 3600,
                'id': 2993457,
                'name': 'Monaco',
                'cod': 200
            },
            {
                'coord': { 'lon': 4.89, 'lat': 52.37 },
                'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }],
                'base': 'stations',
                'main': { 'temp': 274.63, 'feels_like': 267.52, 'temp_min': 274.15, 'temp_max': 274.82, 'pressure': 993, 'humidity': 86 },
                'visibility': 10000,
                'wind': { 'speed': 7.2, 'deg': 130 },
                'clouds': { 'all': 75 },
                'dt': 1607670216,
                'sys': { 'type': 1, 'id': 1524, 'country': 'NL', 'sunrise': 1607672449, 'sunset': 1607700427 },
                'timezone': 3600,
                'id': 2759794,
                'name': 'Amsterdam',
                'cod': 200
            },
            {
                'coord': { 'lon': -0.13, 'lat': 51.51 },
                'weather': [{ 'id': 804, 'main': 'Clouds', 'description': 'overcast clouds', 'icon': '04n' }],
                'base': 'stations',
                'main': { 'temp': 282.44, 'feels_like': 280.21, 'temp_min': 282.04, 'temp_max': 283.15, 'pressure': 986, 'humidity': 93 },
                'visibility': 10000,
                'wind': { 'speed': 2.6, 'deg': 170 },
                'clouds': { 'all': 90 },
                'dt': 1607670329,
                'sys': { 'type': 1, 'id': 1414, 'country': 'GB', 'sunrise': 1607673393, 'sunset': 1607701893 },
                'timezone': 0,
                'id': 2643743,
                'name': 'London',
                'cod': 200
            },
            {
                'coord': { 'lon': -122.42, 'lat': 37.77 },
                'weather': [{ 'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04n' }],
                'base': 'stations',
                'main': { 'temp': 282.6, 'feels_like': 274.9, 'temp_min': 280.37, 'temp_max': 284.26, 'pressure': 1021, 'humidity': 81 },
                'visibility': 10000,
                'wind': { 'speed': 9.8, 'deg': 280 },
                'clouds': { 'all': 75 },
                'dt': 1607670646,
                'sys': { 'type': 1, 'id': 5817, 'country': 'US', 'sunrise': 1607613290, 'sunset': 1607647860 },
                'timezone': -28800,
                'id': 5391959,
                'name': 'San Francisco',
                'cod': 200
            },
            {
                'coord': { 'lon': 37.62, 'lat': 55.75 },
                'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d' }],
                'base': 'stations',
                'main': { 'temp': 264.82, 'feels_like': 259.56, 'temp_min': 264.15, 'temp_max': 265.37, 'pressure': 1032, 'humidity': 78 },
                'visibility': 10000,
                'wind': { 'speed': 3, 'deg': 120 },
                'clouds': { 'all': 0 },
                'dt': 1607670492,
                'sys': { 'type': 1, 'id': 9029, 'country': 'RU', 'sunrise': 1607665764, 'sunset': 1607691396 },
                'timezone': 10800,
                'id': 524901,
                'name': 'Moscow',
                'cod': 200
            }
        ];
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "BUY7":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth/token.storage.ts ***!
  \*******************************************************/
/*! exports provided: TokenStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorage", function() { return TokenStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let TokenStorage = class TokenStorage {
    constructor() {
        this.tokenKey = 'authToken';
    }
    signOut() {
        localStorage.removeItem(this.tokenKey);
        localStorage.clear();
    }
    saveToken(token) {
        if (!token)
            return;
        localStorage.setItem(this.tokenKey, token);
    }
    getToken() {
        return localStorage.getItem(this.tokenKey);
    }
};
TokenStorage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], TokenStorage);



/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<button (click)=\"addTemp()\" class=\"btn\">Fetch</button>-->\n<p>Weather in cities</p>\n<div *ngIf=\"weatherData!=={}\">\n  <ng-template ngFor let-cityWeatherInfo [ngForOf]=\"weatherData\" >\n\n    <p> Name: {{cityWeatherInfo.name}}, {{ cityWeatherInfo.main.temp}}, {{cityWeatherInfo.weather[0].main}}</p>\n  </ng-template>\n\n\n</div>\n");

/***/ }),

/***/ "LDI7":
/*!**********************************************************!*\
  !*** ./src/app/weather-table/weather-table.component.ts ***!
  \**********************************************************/
/*! exports provided: WeatherTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherTableComponent", function() { return WeatherTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_weather_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./weather-table.component.html */ "b82O");
/* harmony import */ var _weather_table_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather-table.component.scss */ "PjuL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let WeatherTableComponent = class WeatherTableComponent {
    constructor() { }
    ngOnInit() {
    }
};
WeatherTableComponent.ctorParameters = () => [];
WeatherTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-weather-table',
        template: _raw_loader_weather_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_weather_table_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], WeatherTableComponent);



/***/ }),

/***/ "LjFu":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "ZF+8");





let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate() {
        return this.authService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            if (user !== null) {
                return true;
            }
            this.router.navigateByUrl('/auth/login');
            return false;
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], AuthGuard);



/***/ }),

/***/ "MTnT":
/*!****************************************************!*\
  !*** ./src/app/interceptors/header.interceptor.ts ***!
  \****************************************************/
/*! exports provided: AuthHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHeaderInterceptor", function() { return AuthHeaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services */ "ZF+8");



let AuthHeaderInterceptor = class AuthHeaderInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        req = req.clone({
            setHeaders: this.authService.getAuthorizationHeaders(),
        });
        return next.handle(req);
    }
};
AuthHeaderInterceptor.ctorParameters = () => [
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthHeaderInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AuthHeaderInterceptor);



/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");





















let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        ],
    })
], SharedModule);



/***/ }),

/***/ "PjuL":
/*!************************************************************!*\
  !*** ./src/app/weather-table/weather-table.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWF0aGVyLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services */ "ZF+8");








let AppComponent = class AppComponent {
    constructor(domSanitizer, matIconRegistry, authService) {
        this.domSanitizer = domSanitizer;
        this.matIconRegistry = matIconRegistry;
        this.authService = authService;
        this.user$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(
        // Init on startup
        this.authService.me(), 
        // Update after login/register/logout
        this.authService.getUser());
        this.registerSvgIcons();
    }
    registerSvgIcons() {
        [
            'close',
            'add',
            'add-blue',
            'airplane-front-view',
            'air-station',
            'balloon',
            'boat',
            'cargo-ship',
            'car',
            'catamaran',
            'clone',
            'convertible',
            'delete',
            'drone',
            'fighter-plane',
            'fire-truck',
            'horseback-riding',
            'motorcycle',
            'railcar',
            'railroad-train',
            'rocket-boot',
            'sailing-boat',
            'segway',
            'shuttle',
            'space-shuttle',
            'steam-engine',
            'suv',
            'tour-bus',
            'tow-truck',
            'transportation',
            'trolleybus',
            'water-transportation',
        ].forEach(icon => {
            this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`));
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"],
        _shared_services__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [user]=\"user$ | async\"></app-header>\n<div class=\"wrapper-app\">\n  <router-outlet></router-outlet>\n</div>\n<footer></footer>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: appInitializerFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInitializerFactory", function() { return appInitializerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/header.interceptor */ "MTnT");
/* harmony import */ var _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/http-error.interceptor */ "hTtr");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services */ "ZF+8");
/* harmony import */ var _weather_table_weather_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./weather-table/weather-table.component */ "LDI7");
/* harmony import */ var _weather_row_weather_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./weather-row/weather-row.component */ "/OAp");














function appInitializerFactory(authService) {
    return () => authService.checkTheUserOnTheFirstLoad();
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _weather_table_weather_table_component__WEBPACK_IMPORTED_MODULE_12__["WeatherTableComponent"], _weather_row_weather_row_component__WEBPACK_IMPORTED_MODULE_13__["WeatherRowComponent"]],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_6__["AuthHeaderInterceptor"],
                multi: true,
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["CatchErrorInterceptor"],
                multi: true,
            },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                useFactory: appInitializerFactory,
                multi: true,
                deps: [_shared_services__WEBPACK_IMPORTED_MODULE_11__["AuthService"]],
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ZF+8":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.service */ "imvL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });




/***/ }),

/***/ "b82O":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/weather-table/weather-table.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>weather-table works!</p>\n");

/***/ }),

/***/ "bdh1":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "8PEf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services */ "ZF+8");






let HeaderComponent = class HeaderComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.user = null;
    }
    logout() {
        this.authService.signOut();
        this.router.navigateByUrl('/auth/login');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
HeaderComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_shared_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], HeaderComponent);



/***/ }),

/***/ "hTtr":
/*!********************************************************!*\
  !*** ./src/app/interceptors/http-error.interceptor.ts ***!
  \********************************************************/
/*! exports provided: CatchErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatchErrorInterceptor", function() { return CatchErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let CatchErrorInterceptor = class CatchErrorInterceptor {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.showSnackBar = (response) => {
            var _a, _b;
            const text = (_b = (_a = response.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : response.error.statusText;
            if (text) {
                this.snackBar.open(text, 'Close', {
                    duration: 2000,
                });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(response);
        };
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.showSnackBar));
    }
};
CatchErrorInterceptor.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
CatchErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], CatchErrorInterceptor);



/***/ }),

/***/ "imvL":
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _token_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token.storage */ "BUY7");






let AuthService = class AuthService {
    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    login(email, password) {
        return this.http
            .post('/api/auth/login', { email, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(({ token, user }) => {
            this.setUser(user);
            this.tokenStorage.saveToken(token);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('user'));
    }
    register(fullname, email, password, repeatPassword) {
        return this.http
            .post('/api/auth/register', {
            fullname,
            email,
            password,
            repeatPassword,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(({ token, user }) => {
            this.setUser(user);
            this.tokenStorage.saveToken(token);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('user'));
    }
    setUser(user) {
        if (user) {
            user.isAdmin = user.roles.includes('admin');
        }
        this.user$.next(user);
    }
    getUser() {
        return this.user$.asObservable();
    }
    me() {
        const token = this.tokenStorage.getToken();
        if (token === null) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }
        return this.http.get('/api/auth/me').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(({ user }) => this.setUser(user)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('user'));
    }
    signOut() {
        this.tokenStorage.signOut();
        this.setUser(null);
    }
    getAuthorizationHeaders() {
        const token = this.tokenStorage.getToken() || '';
        return { Authorization: `Bearer ${token}` };
    }
    /**
     * Let's try to get user's information if he was logged in previously,
     * thus we can ensure that the user is able to access the `/` (home) page.
     */
    checkTheUserOnTheFirstLoad() {
        return this.me().toPromise();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _token_storage__WEBPACK_IMPORTED_MODULE_5__["TokenStorage"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _token_storage__WEBPACK_IMPORTED_MODULE_5__["TokenStorage"]])
], AuthService);



/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <mat-toolbar color=\"primary\">\n    <a routerLink=\"/\" class=\"logo\"></a>\n    <span class=\"example-spacer\"></span>\n    <a class=\"links side\" routerLink=\"/auth/login\" *ngIf=\"!user\">Login</a>\n    <div>\n      <a class=\"links side\" *ngIf=\"user\" [matMenuTriggerFor]=\"menu\">\n        <mat-icon>account_circle</mat-icon>{{ user.fullname }}\n      </a>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item *ngIf=\"user?.isAdmin\" routerLink=\"/admin\">admin</button>\n        <button mat-menu-item (click)=\"logout()\">logout</button>\n      </mat-menu>\n    </div>\n  </mat-toolbar>\n</header>\n");

/***/ }),

/***/ "nTX4":
/*!********************************************************!*\
  !*** ./src/app/weather-row/weather-row.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWF0aGVyLXJvdy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "pugD":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/weather-row/weather-row.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>weather-row works!</p>\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guards */ "2qGb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");





const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        canActivate: [_shared_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthModule),
    },
    {
        path: 'admin',
        loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(m => m.AdminModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map