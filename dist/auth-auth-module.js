(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "6epW":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "ZGml");



const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/auth/login',
                pathMatch: 'full',
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
            },
        ],
    },
];
const AuthRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "7g1B":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.example-card {\n  width: 400px;\n  margin: 10% auto;\n}\n\n.mat-card-title {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMTAlIGF1dG87XG59XG5cbi5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "ZGml");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "6epW");






let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"]],
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
    })
], AuthModule);



/***/ }),

/***/ "ZGml":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "hnEC");
/* harmony import */ var _auth_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.component.scss */ "7g1B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services */ "ZF+8");







let RegisterComponent = class RegisterComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, this.passwordsMatchValidator]),
        });
    }
    passwordsMatchValidator(control) {
        const password = control.root.get('password');
        return password && control.value !== password.value
            ? {
                passwordMatch: true,
            }
            : null;
    }
    get fullname() {
        return this.userForm.get('fullname');
    }
    get email() {
        return this.userForm.get('email');
    }
    get password() {
        return this.userForm.get('password');
    }
    get repeatPassword() {
        return this.userForm.get('repeatPassword');
    }
    register() {
        if (this.userForm.invalid) {
            return;
        }
        const { fullname, email, password, repeatPassword } = this.userForm.getRawValue();
        this.authService.register(fullname, email, password, repeatPassword).subscribe(data => {
            this.router.navigate(['']);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_shared_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], RegisterComponent);



/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "zu2e");
/* harmony import */ var _auth_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.component.scss */ "7g1B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services */ "ZF+8");






let LoginComponent = class LoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.email = null;
        this.password = null;
    }
    login() {
        this.authService.login(this.email, this.password).subscribe(() => {
            this.router.navigateByUrl('/');
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_shared_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "hnEC":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Register</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form class=\"example-form\">\n      <table cellspacing=\"0\" [formGroup]=\"userForm\">\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Fullname\" formControlName=\"fullname\" name=\"fullname\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Email\" formControlName=\"email\" name=\"email\" required>\n              <mat-error *ngIf=\"email.invalid && email.hasError('email')\">Invalid email address</mat-error>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" name=\"password\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Repeat Password\" formControlName=\"repeatPassword\" type=\"password\" name=\"repeatPassword\" required>\n              <mat-error *ngIf=\"repeatPassword.invalid && repeatPassword.hasError('passwordMatch')\">Password mismatch</mat-error>\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"register()\" color=\"primary\">Register</button>\n    <span>Allrady have an account ? <a [routerLink]=\"['/auth/login']\">login</a> here</span>\n  </mat-card-actions>\n</mat-card>\n");

/***/ }),

/***/ "zu2e":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Login</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form class=\"example-form\">\n      <table cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\n    <span>Don't have an account ? <a [routerLink]=\"['/auth/register']\" >register</a> here</span>\n  </mat-card-actions>\n</mat-card>\n");

/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map