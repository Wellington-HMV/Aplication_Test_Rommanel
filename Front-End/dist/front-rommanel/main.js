(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/hi3":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signin.component.html */ "XinC");
/* harmony import */ var _signin_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin.component.sass */ "SDiX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_plataform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/plataform-detector/platform-detector.service */ "dOFS");
/* harmony import */ var src_core_services_register_register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/core/services/register/register.service */ "twUe");








let SignInComponent = class SignInComponent {
    constructor(router, formBuilder, registerService, platformDetectorService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.registerService = registerService;
        this.platformDetectorService = platformDetectorService;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            cpfCnpj: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.platformDetectorService.isPlatformBrowser() &&
            this.emailInput.nativeElement.focus();
    }
    login() {
        this.registerService
            .getRegister(this.loginForm.value)
            .subscribe(() => this.router.navigate(['/logged']), err => {
            console.log(err);
            this.platformDetectorService.isPlatformBrowser() &&
                this.emailInput.nativeElement.focus();
        });
    }
    create() {
        this.router.navigate(['/create']);
    }
};
SignInComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_core_services_register_register_service__WEBPACK_IMPORTED_MODULE_7__["RegisterService"] },
    { type: _core_plataform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_6__["PlatformDetectorService"] }
];
SignInComponent.propDecorators = {
    emailInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['emailInput', { static: true },] }]
};
SignInComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tw-signin',
        template: _raw_loader_signin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signin_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignInComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Wellington\Desktop\Rommanel Test\Aplication_Test_Rommanel\Front-End\src\main.ts */"zUnb");


/***/ }),

/***/ "0m0A":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.module.ts ***!
  \*****************************************/
/*! exports provided: SignInModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInModule", function() { return SignInModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin.component */ "/hi3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ "tmjD");













const maskConfig = {
    validation: false,
};
let SignInModule = class SignInModule {
};
SignInModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_signin_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"]],
        exports: [_signin_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"].forRoot(maskConfig),
        ]
    })
], SignInModule);



/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "OOnH");
/* harmony import */ var _register_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.sass */ "d/JA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_core_plataform_detector_validators_age_validade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/core/plataform-detector/validators/age-validade */ "LOhk");
/* harmony import */ var src_core_services_register_register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/core/services/register/register.service */ "twUe");
/* harmony import */ var _core_plataform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/plataform-detector/platform-detector.service */ "dOFS");









let RegisterComponent = class RegisterComponent {
    constructor(router, formBuilder, platformDetectorService, _registerService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.platformDetectorService = platformDetectorService;
        this._registerService = _registerService;
    }
    ngOnInit() {
        this.createForm();
        0;
        this.platformDetectorService.isPlatformBrowser() &&
            this.nameInput.nativeElement.focus();
    }
    backLogin() {
        this.router.navigate(['']);
    }
    createForm() {
        this.registerForm = this.formBuilder.group({
            register: this.formBuilder.group({
                name: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100),
                    ]],
                cpfCnpj: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                birthDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, src_core_plataform_detector_validators_age_validade__WEBPACK_IMPORTED_MODULE_6__["ageValidator"]]],
                email: ['',
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100)
                    ]],
                contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            }),
            address: this.formBuilder.group({
                cep: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                road: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]],
                district: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            })
        });
    }
    register() {
        this._registerService.createRegister(this.registerForm.getRawValue()).subscribe(resp => {
            this.router.navigate(['']);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _core_plataform_detector_platform_detector_service__WEBPACK_IMPORTED_MODULE_8__["PlatformDetectorService"] },
    { type: src_core_services_register_register_service__WEBPACK_IMPORTED_MODULE_7__["RegisterService"] }
];
RegisterComponent.propDecorators = {
    nameInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['nameInput', { static: true },] }]
};
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterComponent);



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "https://localhost:5001/"
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

/***/ "J/6F":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logged/logged.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"card\">\n    <mat-card-content class=\"container\">\n        <table class=\"table table-striped table-hover\">\n            <thead>\n                <tr>\n                  <th scope=\"col\">#</th>\n                  <th scope=\"col\">Cpf/Cnpj</th>\n                  <th scope=\"col\">Nome</th>\n                  <th scope=\"col\">Email</th>\n                  <th scope=\"col\">Cidade</th>\n                  <th scope=\"col\">Estado</th>\n                  <th scope=\"col\">A????o</th>\n                </tr>\n              </thead>\n\n              <tbody *ngFor=\"let item of $registers | async; let i = index\">\n                <th scope=\"row\">{{i+1}}</th>\n                <td>{{item.register.cpfCnpj}}</td>\n                <td>{{item.register.name}}</td>\n                <td>{{item.register.email}}</td>\n                <td>{{item.address.city}}</td>\n                <td>{{item.address.state}}</td>\n                <td><mat-icon (click)=\"delete(item.register.id)\">delete</mat-icon></td>\n              </tbody>\n          </table>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "LOZu":
/*!********************************************!*\
  !*** ./src/app/logged/logged.component.ts ***!
  \********************************************/
/*! exports provided: LoggedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedComponent", function() { return LoggedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_logged_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./logged.component.html */ "J/6F");
/* harmony import */ var _logged_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logged.component.sass */ "lUAU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_core_services_register_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/core/services/register/register.service */ "twUe");





let LoggedComponent = class LoggedComponent {
    constructor(_regiterService) {
        this._regiterService = _regiterService;
    }
    ngOnInit() {
        this.$registers = this._regiterService.geAll();
    }
    delete(id) {
        this._regiterService.deleteRegister(id).subscribe(() => location.reload(), err => alert("N??o poss??vel deletar o registro!"));
    }
};
LoggedComponent.ctorParameters = () => [
    { type: src_core_services_register_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"] }
];
LoggedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-logged',
        template: _raw_loader_logged_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logged_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoggedComponent);



/***/ }),

/***/ "LOhk":
/*!****************************************************************!*\
  !*** ./src/core/plataform-detector/validators/age-validade.ts ***!
  \****************************************************************/
/*! exports provided: ageValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ageValidator", function() { return ageValidator; });
function ageValidator(value) {
    let date = value.value;
    let day;
    let mounth;
    let year;
    if (date.length > 2)
        day = date.substring(0, 2);
    if (date.length > 4)
        mounth = date.substring(2, 4);
    if (date.length > 6)
        year = date.substring(4, 8);
    let dt = day + "-" + mounth + "-" + year;
    let dtValue = new Date(dt);
    let dActual = new Date();
    var y = dActual.getFullYear() - dtValue.getFullYear();
    var m = dActual.getMonth() - dtValue.getMonth();
    var d = dActual.getDate() - dtValue.getDate();
    if (m < 0 || (m === 0 && dActual.getDate() < dtValue.getDate()))
        y--;
    if (y < 18) {
        return { older: true };
    }
    else {
        return null;
    }
}


/***/ }),

/***/ "MYmT":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "OOnH":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../assets/img/logo-01.png\" class=\"logo\" alt=\"Logo\">\n<mat-card class=\"card\">\n  <mat-card-content class=\"container\">\n    <form [formGroup]=\"registerForm\" class=\"\" (submit)=\"register()\">\n\n      <div formGroupName=\"register\">\n        <div class=\"row\">\n          <h3 class=\"col\">Dados Cliente <mat-divider>\n            </mat-divider>\n          </h3>\n\n        </div>\n        <div class=\"row\">\n\n          <div class=\"col\">\n            <mat-form-field>\n              <mat-label>Nome/Raz??o Social</mat-label>\n              <input #nameInput matInput formControlName=\"name\" placeholder=\"Digite...\" maxlength=\"200\">\n              <mat-error *ngIf=\"registerForm.get('register.name').errors?.required\">\n                Este Campo ?? <strong>Obrigat??rio</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col\">\n            <mat-form-field>\n              <mat-label>CPF/CNPJ</mat-label>\n              <input matInput formControlName=\"cpfCnpj\" placeholder=\"Digite...\"\n                mask=\"000.000.000-00 || 000.000.000/0000-00\">\n              <mat-error *ngIf=\"registerForm.get('register.cpfCnpj').errors?.required\">\n                Este Campo ?? <strong>Obrigat??rio</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col\">\n            <mat-form-field>\n              <mat-label>Email</mat-label>\n              <input matInput formControlName=\"email\" placeholder=\"Ex. teamwork@example.com\" maxlength=\"100\">\n              <mat-error *ngIf=\"registerForm.get('register.email').errors?.required\">\n                Email ?? <strong>Obrigat??rio</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col\">\n            <mat-form-field>\n              <mat-label>Telefone</mat-label>\n              <input matInput formControlName=\"contact\" placeholder=\"Digite...\"\n                mask=\"(00) 0000-0000 || (00) 0 0000-0000\">\n              <mat-error *ngIf=\"registerForm.get('register.contact').errors?.required\">\n                Email ?? <strong>Obrigat??rio</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col\">\n            <mat-form-field>\n              <mat-label>Data Nascimento</mat-label>\n              <input matInput formControlName=\"birthDate\" placeholder=\"Digite...\" mask=\"00/00/0000\">\n              <mat-error *ngIf=\"registerForm.get('register.birthDate').errors?.required\">\n                Data Nascimento ?? <strong>Obrigat??rio</strong>\n              </mat-error>\n              <mat-error *ngIf=\"registerForm.get('register.birthDate').errors?.older\">\n                N??o ?? poss??vel cadastar <strong>menor de 18 anos</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div formGroupName=\"address\">\n        <div class=\"row\">\n          <h3 class=\"col\">Endere??o <mat-divider>\n            </mat-divider>\n          </h3>\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col\">\n            <mat-form-field>\n              <mat-label>Cep</mat-label>\n              <input matInput formControlName=\"cep\" placeholder=\"13272/000\" mask=\"00000/000\">\n              <mat-error *ngIf=\"registerForm.get('address.cep').errors?.required\">\n                Cep ?? <strong>Obrigat??rio</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col\">\n            <mat-form-field>\n              <mat-label>Rua</mat-label>\n              <input matInput formControlName=\"road\" placeholder=\"Digite...\" maxlength=\"100\">\n              <mat-error *ngIf=\"registerForm.get('address.road').errors?.required\">\n                Rua ?? <strong>Obrigat??rio</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col\">\n            <mat-form-field>\n              <mat-label>N??mero</mat-label>\n              <input matInput formControlName=\"number\" placeholder=\"Digite...\" maxlength=\"10\" mask=\"0*\">\n              <mat-error *ngIf=\"registerForm.get('address.number').errors?.required\">\n                N??mero ?? <strong>Obrigat??rio</strong>\n              </mat-error>\n              <mat-error *ngIf=\"registerForm.get('address.number').errors?.maxLength\">\n                <strong>M??ximo 10 digitos</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col\">\n            <mat-form-field>\n              <mat-label>Bairro</mat-label>\n              <input matInput formControlName=\"district\" placeholder=\"Bairro...\" maxlength=\"100\">\n              <mat-error *ngIf=\"registerForm.get('address.district').errors?.required\">\n                Bairro ?? <strong>Obrigat??rio</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col\">\n            <mat-form-field>\n              <mat-label>Cidade</mat-label>\n              <input matInput formControlName=\"city\" placeholder=\"Cidade...\" maxlength=\"100\">\n              <mat-error *ngIf=\"registerForm.get('address.city').errors?.required\">\n                Cidade ?? <strong>Obrigat??rio</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col\">\n            <mat-form-field>\n              <mat-label>Estado</mat-label>\n              <input matInput formControlName=\"state\" placeholder=\"Estado...\" maxlength=\"100\">\n              <mat-error *ngIf=\"registerForm.get('address.state').errors?.required\">\n                Estado ?? <strong>Obrigat??rio</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col\">\n          <button mat-raised-button [disabled]=\"registerForm.invalid\" type=\"submit\" class=\"\">\n            <mat-icon title=\"clique para realizar o login\">save_alt</mat-icon> Criar\n          </button>\n        </div>\n\n        <div class=\"col\">\n          <button mat-raised-button type=\"buttom\" class=\"\" (click)=\"backLogin()\">\n            <mat-icon title=\"clique para realizar o login\">keyboard_arrow_left</mat-icon> Voltar\n          </button>\n        </div>\n\n      </div>\n\n    </form>\n  </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "Pctu":
/*!*****************************************!*\
  !*** ./src/app/logged/logged.module.ts ***!
  \*****************************************/
/*! exports provided: LoggedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedModule", function() { return LoggedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _logged_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logged.component */ "LOZu");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mask */ "tmjD");












const maskConfig = {
    validation: false,
};
let LoggedModule = class LoggedModule {
};
LoggedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_logged_component__WEBPACK_IMPORTED_MODULE_3__["LoggedComponent"]],
        exports: [_logged_component__WEBPACK_IMPORTED_MODULE_3__["LoggedComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_11__["NgxMaskModule"].forRoot(maskConfig),
        ]
    })
], LoggedModule);



/***/ }),

/***/ "SDiX":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.sass ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form {\n  min-width: 150px;\n  width: 100%;\n}\n\n.card {\n  position: fixed;\n  top: 5vh;\n  right: 3vw;\n  background-color: rgba(255, 255, 255, 0.712);\n}\n\n.full-width {\n  width: 100%;\n}\n\n.color-font {\n  color: #442a39;\n}\n\n.bk-none {\n  background-color: rgba(68, 42, 57, 0.5);\n}\n\n.logo {\n  width: 40vw;\n  margin: 5%;\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsNENBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHVDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0gXHJcbiAgbWluLXdpZHRoOiAxNTBweFxyXG4gIHdpZHRoOiAxMDAlXHJcblxyXG5cclxuLmNhcmRcclxuICBwb3NpdGlvbjogZml4ZWRcclxuICB0b3A6IDV2aFxyXG4gIHJpZ2h0OiAzdndcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzEyKVxyXG5cclxuXHJcbi5mdWxsLXdpZHRoIFxyXG4gIHdpZHRoOiAxMDAlXHJcblxyXG5cclxuLmNvbG9yLWZvbnQgXHJcbiAgY29sb3I6IHJnYig2OCA0MiA1NylcclxuXHJcblxyXG4uYmstbm9uZSBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjggNDIgNTcvNTAlKVxyXG5cclxuLmxvZ29cclxuICB3aWR0aDo0MHZ3XHJcbiAgbWFyZ2luOiA1JVxyXG4gIG1heC13aWR0aDogNjAwcHgiXX0= */");

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
/* harmony import */ var _app_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.sass */ "MYmT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
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
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "XinC":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../assets/img/logo-01.png\" class=\"logo\" alt=\"Logo\">\n<mat-card class=\"card\">\n  <mat-card-content>\n    <form [formGroup]=\"loginForm\" class=\"form\" (submit)=\"login()\">\n\n      <div>\n        <mat-form-field class=\"full-width\">\n          <mat-label>Email</mat-label>\n          <input #emailInput matInput formControlName=\"email\" placeholder=\"Ex. rommanel@example.com\">\n          <mat-error *ngIf=\"loginForm.get('email').errors?.required\">\n            Email ?? <strong>Obrigat??rio</strong>\n          </mat-error>\n          <mat-error *ngIf=\"loginForm.get('email').errors?.email\">\n            Email ?? <strong>Inv??lido</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\">\n          <mat-label>Cpf / Cnpj</mat-label>\n          <input matInput formControlName=\"cpfCnpj\" placeholder=\"Digite seu CNPJ ou CPF\"\n          mask=\"000.000.000-00 || 000.000.000/0000-00\">\n          <mat-error *ngIf=\"loginForm.get('cpfCnpj').errors?.required\">\n            CPF ou CNPJ ?? <strong>Obrigat??rio</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div>\n        <button mat-raised-button [disabled]=\"loginForm.invalid\" type=\"submit\" class=\"full-width color-font\">\n          <mat-icon title=\"clique para realizar o login\">login</mat-icon> Login\n        </button>\n        <button mat-raised-button class=\"full-width mt-3 bk-none color-font\" type=\"button\" (click)=\"create()\">\n          <mat-icon title=\"clique para criar uma conta\">login</mat-icon> Criar Conta\n        </button>\n      </div>\n    </form>\n  </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: options, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _register_register_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.module */ "x5bZ");
/* harmony import */ var _signin_signin_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signin/signin.module */ "0m0A");
/* harmony import */ var _logged_logged_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logged/logged.module */ "Pctu");












const options = null;
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _register_register_module__WEBPACK_IMPORTED_MODULE_9__["RegisterModule"],
            _signin_signin_module__WEBPACK_IMPORTED_MODULE_10__["SignInModule"],
            _logged_logged_module__WEBPACK_IMPORTED_MODULE_11__["LoggedModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"].forRoot(),
        ],
        providers: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "d/JA":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.sass ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  position: fixed;\n  top: 5vh;\n  right: 12vw;\n  left: 12vw;\n  background-color: rgba(255, 255, 255, 0.712);\n}\n\nmat-form-field {\n  width: 100%;\n}\n\n.color-font {\n  color: white;\n}\n\n.bk-none {\n  background-color: rgba(14, 65, 109, 0.288);\n}\n\n.logo {\n  width: 40vw;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30%;\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNENBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBQTtFQUNJLDBDQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jYXJkXHJcbiAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgIHRvcDogNXZoXHJcbiAgICByaWdodDogMTJ2d1xyXG4gICAgbGVmdDogMTJ2d1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcxMilcclxuXHJcbm1hdC1mb3JtLWZpZWxkXHJcbiAgICB3aWR0aDogMTAwJVxyXG5cclxuLmNvbG9yLWZvbnRcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG5cclxuLmJrLW5vbmVcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDY1LCAxMDksIDAuMjg4KVxyXG5cclxuLmxvZ29cclxuICAgIHdpZHRoOiA0MHZ3XHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxuICAgIG1hcmdpbi1yaWdodDogYXV0b1xyXG4gICAgbWFyZ2luLXRvcDogMzAlXHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4XHJcbiJdfQ== */");

/***/ }),

/***/ "dOFS":
/*!******************************************************************!*\
  !*** ./src/core/plataform-detector/platform-detector.service.ts ***!
  \******************************************************************/
/*! exports provided: PlatformDetectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformDetectorService", function() { return PlatformDetectorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



let PlatformDetectorService = class PlatformDetectorService {
    constructor(platformId) {
        this.platformId = platformId;
    }
    isPlatformBrowser() {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId);
    }
};
PlatformDetectorService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
PlatformDetectorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PlatformDetectorService);



/***/ }),

/***/ "lUAU":
/*!**********************************************!*\
  !*** ./src/app/logged/logged.component.sass ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  position: fixed;\n  top: 5vh;\n  right: 12vw;\n  left: 12vw;\n  background-color: rgba(255, 255, 255, 0.712);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nZ2VkL2xvZ2dlZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw0Q0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbG9nZ2VkL2xvZ2dlZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkXHJcbiAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgIHRvcDogNXZoXHJcbiAgICByaWdodDogMTJ2d1xyXG4gICAgbGVmdDogMTJ2d1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcxMikiXX0= */");

/***/ }),

/***/ "twUe":
/*!********************************************************!*\
  !*** ./src/core/services/register/register.service.ts ***!
  \********************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
    }
    geAll() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}Register/GetAll`);
    }
    getRegister(value) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}Register/GetRegistry`, value);
    }
    createRegister(value) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}Register/Create`, value);
    }
    deleteRegister(value) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}Register/Delete/${value}`);
    }
};
RegisterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
RegisterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], RegisterService);



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
/* harmony import */ var _logged_logged_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logged/logged.component */ "LOZu");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin/signin.component */ "/hi3");






const routes = [{
        path: '',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"]
    },
    {
        path: 'create',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'logged',
        component: _logged_logged_component__WEBPACK_IMPORTED_MODULE_3__["LoggedComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.component */ "1W4x");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mask */ "tmjD");














const maskConfig = {
    validation: false,
};
let RegisterModule = class RegisterModule {
};
RegisterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]],
        exports: [_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_13__["NgxMaskModule"].forRoot(maskConfig),
        ]
    })
], RegisterModule);



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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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