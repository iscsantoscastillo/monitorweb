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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ventas_ventas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ventas/ventas.component */ "./src/app/ventas/ventas.component.ts");
/* harmony import */ var _retiros_retiros_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./retiros/retiros.component */ "./src/app/retiros/retiros.component.ts");
/* harmony import */ var _consignaciones_consignaciones_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consignaciones/consignaciones.component */ "./src/app/consignaciones/consignaciones.component.ts");
/* harmony import */ var _empresa_empresa_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empresa/empresa.component */ "./src/app/empresa/empresa.component.ts");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clientes/clientes.component */ "./src/app/clientes/clientes.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");









var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'ventas', component: _ventas_ventas_component__WEBPACK_IMPORTED_MODULE_3__["VentasComponent"] },
    { path: 'retiros', component: _retiros_retiros_component__WEBPACK_IMPORTED_MODULE_4__["RetirosComponent"] },
    { path: 'consignaciones', component: _consignaciones_consignaciones_component__WEBPACK_IMPORTED_MODULE_5__["ConsignacionesComponent"] },
    { path: 'empresa', component: _empresa_empresa_component__WEBPACK_IMPORTED_MODULE_6__["EmpresaComponent"] },
    { path: 'clientes', component: _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_7__["ClientesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _persona_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persona.model */ "./src/app/persona.model.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'listado-personas';
        this.personas = [new _persona_model__WEBPACK_IMPORTED_MODULE_2__["Persona"]("Juan", "Perez"), new _persona_model__WEBPACK_IMPORTED_MODULE_2__["Persona"]("Julio", "Balam")];
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_3__["initializeApp"]({
            apiKey: "AIzaSyBlDy-Kr7Z1nNVIujBXmlfjJsr1IP_tQIE",
            authDomain: "vigventas.firebaseapp.com",
            databaseURL: "https://vigventas.firebaseio.com",
            projectId: "vigventas",
            storageBucket: "vigventas.appspot.com",
            messagingSenderId: "76103733430"
        });
    };
    AppComponent.prototype.onAgregarPersona = function () {
        var persona1 = new _persona_model__WEBPACK_IMPORTED_MODULE_2__["Persona"](this.nombreInput, this.apellidoInput);
        this.personas.push(persona1);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _ventas_ventas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ventas/ventas.component */ "./src/app/ventas/ventas.component.ts");
/* harmony import */ var _retiros_retiros_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./retiros/retiros.component */ "./src/app/retiros/retiros.component.ts");
/* harmony import */ var _consignaciones_consignaciones_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./consignaciones/consignaciones.component */ "./src/app/consignaciones/consignaciones.component.ts");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clientes/clientes.component */ "./src/app/clientes/clientes.component.ts");
/* harmony import */ var _empresa_empresa_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./empresa/empresa.component */ "./src/app/empresa/empresa.component.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _template_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./template/navbar/navbar.component */ "./src/app/template/navbar/navbar.component.ts");
/* harmony import */ var _clientes_file_util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./clientes/file.util */ "./src/app/clientes/file.util.ts");
/* harmony import */ var _clientes_test_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./clientes/test.constants */ "./src/app/clientes/test.constants.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _ventas_ventas_component__WEBPACK_IMPORTED_MODULE_7__["VentasComponent"],
                _retiros_retiros_component__WEBPACK_IMPORTED_MODULE_8__["RetirosComponent"],
                _consignaciones_consignaciones_component__WEBPACK_IMPORTED_MODULE_9__["ConsignacionesComponent"],
                _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_10__["ClientesComponent"],
                _empresa_empresa_component__WEBPACK_IMPORTED_MODULE_11__["EmpresaComponent"],
                _template_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"]
            ],
            providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_12__["LoginService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuth"], _clientes_file_util__WEBPACK_IMPORTED_MODULE_18__["FileUtil"], _clientes_test_constants__WEBPACK_IMPORTED_MODULE_19__["Constants"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clientes/clientes.component.css":
/*!*************************************************!*\
  !*** ./src/app/clientes/clientes.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/clientes/clientes.component.html":
/*!**************************************************!*\
  !*** ./src/app/clientes/clientes.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n    \n    <h4>Carga de Clientes mediante archivo .CSV (batch)</h4>\n    <h6>La estructura del archivo es separado por comas (,) y consta de 4 columnas, por ejemplo</h6>\n    <h6>1001,P.Cuarenta y Dos Centro,20,vigentretenimiento@gmail.com</h6>\n    <h6>1002,P.Sesenta y Cinco Centro,20,vigentretenimiento@gmail.com</h6>\n    <h6>1003,P.Aguilas,20,otroemail@gmail.com</h6>\n    <h6>ATENCIÓN: al seleccionar el archivo CSV, automaticamente inicia la carga del mismo afectando la tabla de Clientes</h6>\n    <h6>En la carga se actualizan los existentes y se agregan los nuevos. Est carga no borra información</h6>\n    \n\n<table>\n    <tr>\n        <td>\n            <input type=\"file\" \n                #fileImportInput\n                name=\"File Upload\" \n                id=\"txtFileUpload\" \n                class=\"btn btn-primary\" \n                (change)=\"fileChangeListener($event)\" \n                accept=\".csv\"\n                value={{selectedImageFile}}/>\n        </td>\n        <td style=\"padding: 5px;\">\n            <input type=\"button\" \n                name=\"Reset\" \n                id=\"txtFileReset\" \n                class=\"btn btn-primary\" \n                (click)=\"fileReset()\" \n                value=\"Reset\"/>\n        </td>\n    </tr>\n</table>\n\n\n<div>\n    <table class=\"table table-responsive table-hover\" border=\"1\" \n        style=\"width : 50%;\">\n        <tbody>\n            <ng-container *ngFor=\"let csvRec of csvRecords;let i=index\">\n                <tr>\n                    <ng-container *ngFor=\"let data of csvRec;let j=index\"> \n                        <td>{{data}}</td>\n                    </ng-container>\n                </tr>\n            </ng-container>\n        </tbody>\n    </table>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/clientes/clientes.component.ts":
/*!************************************************!*\
  !*** ./src/app/clientes/clientes.component.ts ***!
  \************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _file_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file.util */ "./src/app/clientes/file.util.ts");
/* harmony import */ var _test_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.constants */ "./src/app/clientes/test.constants.ts");


//import { Component, OnInit, ViewChild } from "@angular/core";



var ClientesComponent = /** @class */ (function () {
    function ClientesComponent(_router, _fileUtil) {
        this._router = _router;
        this._fileUtil = _fileUtil;
        this.csvRecords = [];
    }
    ClientesComponent.prototype.ngOnInit = function () { };
    // METHOD CALLED WHEN CSV FILE IS IMPORTED
    ClientesComponent.prototype.fileChangeListener = function ($event) {
        var _this = this;
        var text = [];
        var files = $event.srcElement.files;
        if (_test_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].validateHeaderAndRecordLengthFlag) {
            if (!this._fileUtil.isCSVFile(files[0])) {
                alert("Please import valid .csv file.");
                this.fileReset();
            }
        }
        var input = $event.target;
        var reader = new FileReader();
        reader.readAsText(input.files[0]);
        reader.onload = function (data) {
            var csvData = reader.result;
            var csvRecordsArray = csvData.split(/\r\n|\n/);
            var headerLength = -1;
            if (_test_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].isHeaderPresentFlag) {
                var headersRow = _this._fileUtil.getHeaderArray(csvRecordsArray, _test_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].tokenDelimeter);
                headerLength = headersRow.length;
            }
            _this.csvRecords = _this._fileUtil.getDataRecordsArrayFromCSVFile(csvRecordsArray, headerLength, _test_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].validateHeaderAndRecordLengthFlag, _test_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].tokenDelimeter);
            if (_this.csvRecords == null) {
                //If control reached here it means csv file contains error, reset file.
                _this.fileReset();
            }
        };
        reader.onerror = function () {
            alert('Unable to read ' + input.files[0]);
        };
    };
    ;
    ClientesComponent.prototype.fileReset = function () {
        this.fileImportInput.nativeElement.value = "";
        this.csvRecords = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileImportInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClientesComponent.prototype, "fileImportInput", void 0);
    ClientesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clientes',
            template: __webpack_require__(/*! ./clientes.component.html */ "./src/app/clientes/clientes.component.html"),
            styles: [__webpack_require__(/*! ./clientes.component.css */ "./src/app/clientes/clientes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _file_util__WEBPACK_IMPORTED_MODULE_3__["FileUtil"]])
    ], ClientesComponent);
    return ClientesComponent;
}());



/***/ }),

/***/ "./src/app/clientes/file.util.ts":
/*!***************************************!*\
  !*** ./src/app/clientes/file.util.ts ***!
  \***************************************/
/*! exports provided: FileUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUtil", function() { return FileUtil; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var FileUtil = /** @class */ (function () {
    function FileUtil() {
    }
    FileUtil.prototype.isCSVFile = function (file) {
        return file.name.endsWith(".csv");
    };
    FileUtil.prototype.getHeaderArray = function (csvRecordsArr, tokenDelimeter) {
        var headers = csvRecordsArr[0].split(tokenDelimeter);
        var headerArray = [];
        for (var j = 0; j < headers.length; j++) {
            headerArray.push(headers[j]);
        }
        return headerArray;
    };
    FileUtil.prototype.validateHeaders = function (origHeaders, fileHeaaders) {
        if (origHeaders.length != fileHeaaders.length) {
            return false;
        }
        var fileHeaderMatchFlag = true;
        for (var j = 0; j < origHeaders.length; j++) {
            if (origHeaders[j] != fileHeaaders[j]) {
                fileHeaderMatchFlag = false;
                break;
            }
        }
        return fileHeaderMatchFlag;
    };
    FileUtil.prototype.getDataRecordsArrayFromCSVFile = function (csvRecordsArray, headerLength, validateHeaderAndRecordLengthFlag, tokenDelimeter) {
        var dataArr = [];
        var firestore = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        var strId = "";
        var strNombre = "";
        var strPorc = "";
        var strCorreoCliente = "";
        for (var i = 0; i < csvRecordsArray.length; i++) {
            var data = csvRecordsArray[i].split(tokenDelimeter);
            console.log(data[0] + "," + data[1] + "," + data[2] + "," + data[3]);
            strId = data[0];
            strNombre = data[1];
            strPorc = data[2];
            strCorreoCliente = data[3];
            firestore.collection("clientes").doc(strId).set({
                id: strId,
                nombre: strNombre,
                porc: strPorc,
                correoCliente: strCorreoCliente
            });
            if (validateHeaderAndRecordLengthFlag && data.length != headerLength) {
                if (data == "") {
                    alert("Extra blank line is present at line number " + i + ", please remove it.");
                    return null;
                }
                else {
                    alert("Record at line number " + i + " contain " + data.length + " tokens, and is not matching with header length of :" + headerLength);
                    return null;
                }
            }
            var col = [];
            for (var j = 0; j < data.length; j++) {
                col.push(data[j]);
            }
            dataArr.push(col);
        }
        return dataArr;
    };
    FileUtil = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileUtil);
    return FileUtil;
}());



/***/ }),

/***/ "./src/app/clientes/test.constants.ts":
/*!********************************************!*\
  !*** ./src/app/clientes/test.constants.ts ***!
  \********************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.tokenDelimeter = ",";
    Constants.isHeaderPresentFlag = true;
    Constants.validateHeaderAndRecordLengthFlag = true;
    Constants.valildateFileExtenstionFlag = true;
    Constants = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Constants);
    return Constants;
}());



/***/ }),

/***/ "./src/app/consignaciones/consignaciones.component.css":
/*!*************************************************************!*\
  !*** ./src/app/consignaciones/consignaciones.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnNpZ25hY2lvbmVzL2NvbnNpZ25hY2lvbmVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/consignaciones/consignaciones.component.html":
/*!**************************************************************!*\
  !*** ./src/app/consignaciones/consignaciones.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<script src=\"https://cdn.datatables.net/plug-ins/1.10.19/api/sum().js\"></script>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <h2>Módulo de Consignaciones</h2>    \r\n    </div>\r\n    <br />\r\n    <br />\r\n    \r\n    <div class=\"row align-items-end\">    \r\n        <div class=\"col-sm-1\">\r\n            <label for=\"cbxAnio\" class=\"col-form-label\">Año</label>\r\n            <select id=\"cbxAnio\" class=\"form-control\">\r\n                    <option value=\"2019\">2019</option>\r\n                    <option value=\"2020\">2020</option>\r\n                    <option value=\"2021\">2021</option>\r\n                    <option value=\"2022\">2022</option>\r\n                    <option value=\"2023\">2023</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n            <label for=\"cbxMes\" class=\"col-form-label\">Mes</label>\r\n            <select id=\"cbxMes\" class=\"form-control\">\r\n                    <option value=\"01\">Enero</option>\r\n                    <option value=\"02\">Febrero</option>\r\n                    <option value=\"03\">Marzo</option>\r\n                    <option value=\"04\">Abril</option>\r\n                    <option value=\"05\">Mayo</option>\r\n                    <option value=\"06\">Junio</option>\r\n                    <option value=\"07\">Julio</option>\r\n                    <option value=\"08\">Agosto</option>\r\n                    <option value=\"09\">Septiembre</option>\r\n                    <option value=\"10\">Octubre</option>\r\n                    <option value=\"11\">Noviembre</option>\r\n                    <option value=\"12\">Diciembre</option>\r\n            </select>\r\n           </div>\r\n        <div class=\"col-sm-3\">\r\n            <button class=\"btn btn-success\" type=\"button\" id=\"btnCargar\" (click)='poblarTabla()'>Cargar</button>\r\n            <button class=\"btn btn-success offset-md-1\" type=\"button\" id=\"btnExportarExcel\" (click)='exportar()'>Exportar (csv)</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row align-items-end\">\r\n        <div class=\"col-sm-1\">\r\n            <label for=\"cbxDia\" class=\"col-form-label\">Día</label>\r\n            <select id=\"cbxDia\" class=\"form-control\">\r\n                    <option value=\"0\">-- Seleccione --</option>\r\n                    <option value=\"01\">01</option>\r\n                    <option value=\"02\">02</option>\r\n                    <option value=\"03\">03</option>\r\n                    <option value=\"04\">04</option>\r\n                    <option value=\"05\">05</option>\r\n                    <option value=\"06\">06</option>\r\n                    <option value=\"07\">07</option>\r\n                    <option value=\"08\">08</option>\r\n                    <option value=\"09\">09</option>\r\n                    <option value=\"10\">10</option>\r\n                    <option value=\"11\">11</option>\r\n                    <option value=\"12\">12</option>\r\n                    <option value=\"13\">13</option>\r\n                    <option value=\"14\">14</option>\r\n                    <option value=\"15\">15</option>\r\n                    <option value=\"16\">16</option>\r\n                    <option value=\"17\">17</option>\r\n                    <option value=\"18\">18</option>\r\n                    <option value=\"19\">19</option>\r\n                    <option value=\"20\">20</option>\r\n                    <option value=\"21\">21</option>\r\n                    <option value=\"22\">22</option>\r\n                    <option value=\"23\">23</option>\r\n                    <option value=\"24\">24</option>\r\n                    <option value=\"25\">25</option>\r\n                    <option value=\"26\">26</option>\r\n                    <option value=\"27\">27</option>\r\n                    <option value=\"28\">28</option>\r\n                    <option value=\"29\">29</option>\r\n                    <option value=\"30\">30</option>\r\n                    <option value=\"31\">31</option>\r\n                </select>\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n            <label for=\"cbxResponsable\" class=\"col-form-label\">Responsable</label>\r\n            <select id=\"cbxResponsable\" class=\"form-control\">\r\n                <option value=\"0\">-- Seleccione --</option>\r\n                <option value=\"ruta1.vig@gmail.com\">Ruta 1</option>\r\n                <option value=\"ruta2.vig@gmail.com\">Ruta 2</option>\r\n                <option value=\"ruta3.vig@gmail.com\">Ruta 3</option>\r\n                <option value=\"ruta4.vig@gmail.com\">Ruta 4</option>\r\n                <option value=\"ruta5.vig@gmail.com\">Ruta 5</option>\r\n                <option value=\"ruta6.vig@gmail.com\">Ruta 6</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label class=\"col-form-label text-success\"><b>Total</b></label>\r\n            <label class=\"col-form-label text-success offset-md-1\" id=\"lblTotal\"><b>{{strTotal}}</b></label>\r\n        </div>\r\n    </div>\r\n\r\n    <br />\r\n    <br />\r\n    <br />\r\n\r\n    <table id=\"grid\" name=\"dataTable\" class=\"table table-striped table-bordered\" style=\"width:100%\">\r\n    <thead>\r\n        <tr>\r\n            <th>#Cliente</th>\r\n\t\t\t<th>Nombre Cliente</th>\r\n            <th>#Consigna</th>\r\n            <th>PDF</th>\r\n\t\t\t<th>Vendedor</th>\r\n\t\t\t<th>%</th>\r\n\t\t\t<th>Desbanco</th>\r\n            <th>Provisional</th>\r\n            <th>CorteDejado</th>\r\n\t\t\t<th>Anticipo</th>\r\n\t\t\t<th>Pago</th>\r\n\t\t\t<th>Propina</th>\r\n\t\t\t<th>Base</th>\r\n\t\t\t<th>Premio</th>\r\n\t\t\t<th>Otro</th>\r\n\t\t\t<th>Consigna total</th>\r\n\t\t\t<th>Notas</th>\r\n        </tr>\r\n    </thead>\r\n    <tfoot>\r\n        <tr>\r\n            <th>#Cliente</th>\r\n\t\t\t<th>Nombre Cliente</th>\r\n            <th>#Consigna</th>\r\n            <th>PDF</th>\r\n\t\t\t<th>Vendedor</th>\r\n\t\t\t<th>%</th>\r\n\t\t\t<th>Desbanco</th>\r\n            <th>Provisional</th>\r\n            <th>CorteDejado</th>\r\n\t\t\t<th>Anticipo</th>\r\n\t\t\t<th>Pago</th>\r\n\t\t\t<th>Propina</th>\r\n\t\t\t<th>Base</th>\r\n\t\t\t<th>Premio</th>\r\n\t\t\t<th>Otro</th>\r\n\t\t\t<th>Consigna total</th>\r\n\t\t\t<th>Notas</th>\r\n        </tr>\r\n    </tfoot>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/consignaciones/consignaciones.component.ts":
/*!************************************************************!*\
  !*** ./src/app/consignaciones/consignaciones.component.ts ***!
  \************************************************************/
/*! exports provided: ConsignacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsignacionesComponent", function() { return ConsignacionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);





var ConsignacionesComponent = /** @class */ (function () {
    function ConsignacionesComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.nTotal = 0;
        this.strTotal = "$0.00";
    }
    ConsignacionesComponent.prototype.ngOnInit = function () {
        this.loginService.verificar('/');
        this.t = $('#grid').DataTable({
            responsive: false,
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
        });
    };
    ConsignacionesComponent.prototype.logout = function () {
        this.loginService.logout('/');
    };
    /*FIREBASE get DATA*/
    ConsignacionesComponent.prototype.poblarTabla = function () {
        var _this = this;
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });
        this.strCollection = $('#cbxAnio').val() + $('#cbxMes').val() + 'C';
        this.nTotal = 0;
        this.t.clear().draw();
        var firestore = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
        //console.log(this.strCollection);
        var citiesRef = firestore.collection(this.strCollection);
        //var query = citiesRef.where('ventaTotalCliente', '>', 0).get()
        var query = citiesRef.get()
            .then(function (snapshot) {
            snapshot.forEach(function (doc) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_s) {
                    switch (_s.label) {
                        case 0:
                            //console.log(doc.data().idVenta);
                            //this.nTotal =+ doc.data().ventaTotal;
                            this.strFiltro = $('#cbxAnio').val() + $('#cbxMes').val() + $('#cbxDia').val();
                            this.strIdVenta = doc.data().idVenta;
                            if (!($('#cbxDia').val() == '0' && $('#cbxResponsable').val() == '0')) return [3 /*break*/, 2];
                            this.nTotal = this.nTotal + parseFloat(doc.data().ventaTotal.replace(',', ''));
                            _b = (_a = this.t.row).add;
                            _c = [doc.data().idCliente,
                                doc.data().nombreCliente,
                                doc.data().idVenta];
                            _d = '<a href=\'';
                            return [4 /*yield*/, this.descargar(doc.data().idVenta).then(function (url) {
                                    return url;
                                }).catch(function (error) { })];
                        case 1:
                            _b.apply(_a, [_c.concat([
                                    _d + (_s.sent()) + '\' target=\'_blank\'>' + doc.data().idVenta + '</a>',
                                    doc.data().correo,
                                    doc.data().porc,
                                    doc.data().desbanco,
                                    doc.data().provisional,
                                    doc.data().corteDejado,
                                    doc.data().anticipo,
                                    doc.data().pago,
                                    doc.data().propina_,
                                    doc.data().basemaquina_,
                                    doc.data().premio_,
                                    doc.data().otro_,
                                    doc.data().ventaTotal.replace(',', ''),
                                    doc.data().notas.replace(',', '')
                                ])]).draw();
                            return [3 /*break*/, 10];
                        case 2:
                            if (!($('#cbxDia').val() != '0' && $('#cbxResponsable').val() == '0')) return [3 /*break*/, 5];
                            if (!(this.strIdVenta.substring(0, 8) == this.strFiltro)) return [3 /*break*/, 4];
                            this.nTotal = this.nTotal + parseFloat(doc.data().ventaTotal.replace(',', ''));
                            _f = (_e = this.t.row).add;
                            _g = [doc.data().idCliente,
                                doc.data().nombreCliente,
                                doc.data().idVenta];
                            _h = '<a href=\'';
                            return [4 /*yield*/, this.descargar(doc.data().idVenta).then(function (url) {
                                    return url;
                                }).catch(function (error) { })];
                        case 3:
                            _f.apply(_e, [_g.concat([
                                    _h + (_s.sent()) + '\' target=\'_blank\'>' + doc.data().idVenta + '</a>',
                                    doc.data().correo,
                                    doc.data().porc,
                                    doc.data().desbanco,
                                    doc.data().provisional,
                                    doc.data().corteDejado,
                                    doc.data().anticipo,
                                    doc.data().pago,
                                    doc.data().propina_,
                                    doc.data().basemaquina_,
                                    doc.data().premio_,
                                    doc.data().otro_,
                                    doc.data().ventaTotal.replace(',', ''),
                                    doc.data().notas.replace(',', '')
                                ])]).draw();
                            _s.label = 4;
                        case 4: return [3 /*break*/, 10];
                        case 5:
                            if (!($('#cbxResponsable').val() != '0' && $('#cbxDia').val() == '0')) return [3 /*break*/, 8];
                            if (!(doc.data().correo.toUpperCase() == $('#cbxResponsable').val().toUpperCase())) return [3 /*break*/, 7];
                            this.nTotal = this.nTotal + parseFloat(doc.data().ventaTotal.replace(',', ''));
                            _k = (_j = this.t.row).add;
                            _l = [doc.data().idCliente,
                                doc.data().nombreCliente,
                                doc.data().idVenta];
                            _m = '<a href=\'';
                            return [4 /*yield*/, this.descargar(doc.data().idVenta).then(function (url) {
                                    return url;
                                }).catch(function (error) { })];
                        case 6:
                            _k.apply(_j, [_l.concat([
                                    _m + (_s.sent()) + '\' target=\'_blank\'>' + doc.data().idVenta + '</a>',
                                    doc.data().correo,
                                    doc.data().porc,
                                    doc.data().desbanco,
                                    doc.data().provisional,
                                    doc.data().corteDejado,
                                    doc.data().anticipo,
                                    doc.data().pago,
                                    doc.data().propina_,
                                    doc.data().basemaquina_,
                                    doc.data().premio_,
                                    doc.data().otro_,
                                    doc.data().ventaTotal.replace(',', ''),
                                    doc.data().notas.replace(',', '')
                                ])]).draw();
                            _s.label = 7;
                        case 7: return [3 /*break*/, 10];
                        case 8:
                            if (!($('#cbxResponsable').val() != '0' && $('#cbxDia').val() != '0')) return [3 /*break*/, 10];
                            if (!(this.strIdVenta.substring(0, 8) == this.strFiltro && doc.data().correo.toUpperCase() == $('#cbxResponsable').val().toUpperCase())) return [3 /*break*/, 10];
                            this.nTotal = this.nTotal + parseFloat(doc.data().ventaTotal.replace(',', ''));
                            _p = (_o = this.t.row).add;
                            _q = [doc.data().idCliente,
                                doc.data().nombreCliente,
                                doc.data().idVenta];
                            _r = '<a href=\'';
                            return [4 /*yield*/, this.descargar(doc.data().idVenta).then(function (url) {
                                    return url;
                                }).catch(function (error) { })];
                        case 9:
                            _p.apply(_o, [_q.concat([
                                    _r + (_s.sent()) + '\' target=\'_blank\'>' + doc.data().idVenta + '</a>',
                                    doc.data().correo,
                                    doc.data().porc,
                                    doc.data().desbanco,
                                    doc.data().provisional,
                                    doc.data().corteDejado,
                                    doc.data().anticipo,
                                    doc.data().pago,
                                    doc.data().propina_,
                                    doc.data().basemaquina_,
                                    doc.data().premio_,
                                    doc.data().otro_,
                                    doc.data().ventaTotal.replace(',', ''),
                                    doc.data().notas.replace(',', '')
                                ])]).draw();
                            _s.label = 10;
                        case 10: return [2 /*return*/];
                    }
                });
            }); });
            _this.strTotal = formatter.format(_this.nTotal);
            //this.strTotal = formatter.format(this.t.column( 4 ).data().sum());
            //$("#dataTable").DataTable().columns().draw();
        })
            .catch(function (err) {
            console.log('Error getting documents', err);
        });
    };
    ConsignacionesComponent.prototype.descargar = function (idVenta) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var str, storage, gsReference;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storage = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]();
                        gsReference = storage.refFromURL('gs://vigventas.appspot.com/pdf/' + idVenta + '.pdf');
                        return [4 /*yield*/, gsReference.getDownloadURL().then(function (url) {
                                // Insert url into an <img> tag to "download"
                                //console.log(url);
                                str = url;
                            }).catch(function (error) {
                                // A full list of error codes is available at
                                // https://firebase.google.com/docs/storage/web/handle-errors
                                switch (error.code) {
                                    case 'storage/object-not-found':
                                        // File doesn't exist
                                        break;
                                    case 'storage/unauthorized':
                                        // User doesn't have permission to access the object
                                        break;
                                    case 'storage/canceled':
                                        // User canceled the upload
                                        break;
                                    case 'storage/unknown':
                                        // Unknown error occurred, inspect the server response
                                        break;
                                }
                            })];
                    case 1:
                        _a.sent();
                        console.log(str);
                        return [2 /*return*/, str];
                }
            });
        });
    };
    ConsignacionesComponent.prototype.exportar = function () {
        var outputFile = 'export';
        outputFile = outputFile.replace('.csv', '') + '.csv';
        this.exportTableToCSV(outputFile);
    };
    ConsignacionesComponent.prototype.exportTableToCSV = function (filename) {
        var csv = [];
        var rows = document.querySelectorAll("table tr");
        for (var i = 1; i < rows.length; i++) {
            var row = [], cols = rows[i].querySelectorAll("td, th");
            for (var j = 0; j < cols.length; j++)
                row.push(cols[j].innerHTML.replace(/(?:\r\n|\r|\n)/g, ''));
            csv.push(row.join(","));
        }
        // Download CSV file
        this.downloadCSV(csv.join("\n"), filename);
    };
    ConsignacionesComponent.prototype.downloadCSV = function (csv, filename) {
        var csvFile;
        var downloadLink;
        // CSV file
        csvFile = new Blob([csv], { type: "text/csv" });
        // Download link
        downloadLink = document.createElement("a");
        // File name
        downloadLink.download = filename;
        // Create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);
        // Hide download link
        downloadLink.style.display = "none";
        // Add the link to DOM
        document.body.appendChild(downloadLink);
        // Click download link
        downloadLink.click();
    }; //downloadCSV
    ConsignacionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consignaciones',
            template: __webpack_require__(/*! ./consignaciones.component.html */ "./src/app/consignaciones/consignaciones.component.html"),
            styles: [__webpack_require__(/*! ./consignaciones.component.css */ "./src/app/consignaciones/consignaciones.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], ConsignacionesComponent);
    return ConsignacionesComponent;
}());



/***/ }),

/***/ "./src/app/empresa/empresa.component.css":
/*!***********************************************!*\
  !*** ./src/app/empresa/empresa.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcHJlc2EvZW1wcmVzYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/empresa/empresa.component.html":
/*!************************************************!*\
  !*** ./src/app/empresa/empresa.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>"

/***/ }),

/***/ "./src/app/empresa/empresa.component.ts":
/*!**********************************************!*\
  !*** ./src/app/empresa/empresa.component.ts ***!
  \**********************************************/
/*! exports provided: EmpresaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaComponent", function() { return EmpresaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmpresaComponent = /** @class */ (function () {
    function EmpresaComponent() {
    }
    EmpresaComponent.prototype.ngOnInit = function () {
    };
    EmpresaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empresa',
            template: __webpack_require__(/*! ./empresa.component.html */ "./src/app/empresa/empresa.component.html"),
            styles: [__webpack_require__(/*! ./empresa.component.css */ "./src/app/empresa/empresa.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmpresaComponent);
    return EmpresaComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding-top: 5% !important;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: .5rem;\r\n    text-align: -webkit-left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiA1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IC13ZWJraXQtbGVmdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Image and text -->\n<!--<nav class=\"navbar navbar-light\" style=\"background-color: #bcf0f7;\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"/assets/rojo-sin-letra.png\" width=\"45px\" height=\"35px\" class=\"d-inline-block align-top\" alt=\"\">\n    VentAPP\n  </a>\n</nav>-->\n<div class=\"container d-flex justify-content-center\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-12 mx-auto\">\n      <div class=\"card_login\">\n        <div class=\"card\">\n            <div class=\"card-body text-center\">\n        <img style=\"text-align: center\" src=\"assets/logo.png\" width=\"130px\" height=\"130px\">  \n        <form>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Correo electrónico</label>\n            <input class=\"form-control\" [(ngModel)]=\"email\" id=\"exampleInputEmail1\" type=\"email\" name=\"email\" placeholder=\"Correo electrónico\"  size=\"20\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Contraseña</label>\n            <input class=\"form-control\" [(ngModel)]=\"password\" id=\"exampleInputPassword1\" type=\"password\" name=\"password\" placeholder=\"Contraseña\"  size=\"15\">\n          </div>\n          <br>\n          <div class=\"form-group\">\n          <button class=\"btn btn-block btn-primary\" type=\"button\" style=\"cursor: pointer\" (click)=\"login()\">Entrar</button>\n          <label>v1.1</label>\n          </div>\n          <!--<span><i class=\"fas fa-camera\"></i></span>-->\n        </form>\n      </div>\n      </div>\n    </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.loginService.login(this.email, this.password, '/ventas');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginService = /** @class */ (function () {
    //token: string;
    //email: string;
    //password: string;
    function LoginService(router) {
        this.router = router;
    }
    LoginService.prototype.login = function (email, password, nextPage) {
        //var userName = this.email;
        //var userPass = this.password;
        console.log('Loging... ');
        var r = this.router;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password).
            then(function (firebaseUser) {
            // Success !!
            console.log('Se hizo login !!');
            if (nextPage !== '')
                r.navigate([nextPage]);
        }).catch(function (error) {
            // Handle Errors here :(
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('Login error: ' + errorMessage);
        });
    };
    LoginService.prototype.logout = function (nextPage) {
        var r = this.router;
        console.log('Logout');
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut().then(function () {
            // Sign-out successful.
            //window.location = "login.html";
            console.log('Se ejecutó logout');
            if (nextPage !== '')
                r.navigate([nextPage]);
        }).catch(function (error) {
            console.log('Logout error: ' + error);
            // An error happened.
        });
    };
    LoginService.prototype.verificar = function (nextPage) {
        //console.log('Tocken: '+firebase.auth().currentUser.getIdToken.toString);
        var r = this.router;
        console.log('Verificar...');
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log('Sí está logueado !!');
            }
            else {
                // No user is signed in.
                console.log('No está logueado :(');
                if (nextPage !== '')
                    r.navigate([nextPage]);
            }
        });
    };
    LoginService.prototype.getIdToken = function () {
        //return this.token;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/persona.model.ts":
/*!**********************************!*\
  !*** ./src/app/persona.model.ts ***!
  \**********************************/
/*! exports provided: Persona */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Persona", function() { return Persona; });
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    return Persona;
}());



/***/ }),

/***/ "./src/app/retiros/retiros.component.css":
/*!***********************************************!*\
  !*** ./src/app/retiros/retiros.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldGlyb3MvcmV0aXJvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/retiros/retiros.component.html":
/*!************************************************!*\
  !*** ./src/app/retiros/retiros.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<script src=\"https://cdn.datatables.net/plug-ins/1.10.19/api/sum().js\"></script>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <h2>Módulo de Retiros</h2>    \r\n    </div>\r\n    <br />\r\n    <br />\r\n    \r\n    <div class=\"row align-items-end\">    \r\n        <div class=\"col-sm-1\">\r\n            <label for=\"cbxAnio\" class=\"col-form-label\">Año</label>\r\n            <select id=\"cbxAnio\" class=\"form-control\">\r\n                    <option value=\"2019\">2019</option>\r\n                    <option value=\"2020\">2020</option>\r\n                    <option value=\"2021\">2021</option>\r\n                    <option value=\"2022\">2022</option>\r\n                    <option value=\"2023\">2023</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n            <label for=\"cbxMes\" class=\"col-form-label\">Mes</label>\r\n            <select id=\"cbxMes\" class=\"form-control\">\r\n                    <option value=\"01\">Enero</option>\r\n                    <option value=\"02\">Febrero</option>\r\n                    <option value=\"03\">Marzo</option>\r\n                    <option value=\"04\">Abril</option>\r\n                    <option value=\"05\">Mayo</option>\r\n                    <option value=\"06\">Junio</option>\r\n                    <option value=\"07\">Julio</option>\r\n                    <option value=\"08\">Agosto</option>\r\n                    <option value=\"09\">Septiembre</option>\r\n                    <option value=\"10\">Octubre</option>\r\n                    <option value=\"11\">Noviembre</option>\r\n                    <option value=\"12\">Diciembre</option>\r\n            </select>\r\n           </div>\r\n        <div class=\"col-sm-3\">\r\n            <button class=\"btn btn-success\" type=\"button\" id=\"btnCargar\" (click)='poblarTabla()'>Cargar</button>\r\n            <button class=\"btn btn-success offset-md-1\" type=\"button\" id=\"btnExportarExcel\" (click)='exportar()'>Exportar (csv)</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row align-items-end\">\r\n        <div class=\"col-sm-1\">\r\n            <label for=\"cbxDia\" class=\"col-form-label\">Día</label>\r\n            <select id=\"cbxDia\" class=\"form-control\">\r\n                    <option value=\"0\">-- Seleccione --</option>\r\n                    <option value=\"01\">01</option>\r\n                    <option value=\"02\">02</option>\r\n                    <option value=\"03\">03</option>\r\n                    <option value=\"04\">04</option>\r\n                    <option value=\"05\">05</option>\r\n                    <option value=\"06\">06</option>\r\n                    <option value=\"07\">07</option>\r\n                    <option value=\"08\">08</option>\r\n                    <option value=\"09\">09</option>\r\n                    <option value=\"10\">10</option>\r\n                    <option value=\"11\">11</option>\r\n                    <option value=\"12\">12</option>\r\n                    <option value=\"13\">13</option>\r\n                    <option value=\"14\">14</option>\r\n                    <option value=\"15\">15</option>\r\n                    <option value=\"16\">16</option>\r\n                    <option value=\"17\">17</option>\r\n                    <option value=\"18\">18</option>\r\n                    <option value=\"19\">19</option>\r\n                    <option value=\"20\">20</option>\r\n                    <option value=\"21\">21</option>\r\n                    <option value=\"22\">22</option>\r\n                    <option value=\"23\">23</option>\r\n                    <option value=\"24\">24</option>\r\n                    <option value=\"25\">25</option>\r\n                    <option value=\"26\">26</option>\r\n                    <option value=\"27\">27</option>\r\n                    <option value=\"28\">28</option>\r\n                    <option value=\"29\">29</option>\r\n                    <option value=\"30\">30</option>\r\n                    <option value=\"31\">31</option>\r\n                </select>\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n            <label for=\"cbxResponsable\" class=\"col-form-label\">Responsable</label>\r\n            <select id=\"cbxResponsable\" class=\"form-control\">\r\n                <option value=\"0\">-- Seleccione --</option>\r\n                <option value=\"ruta1.vig@gmail.com\">Ruta 1</option>\r\n                <option value=\"ruta2.vig@gmail.com\">Ruta 2</option>\r\n                <option value=\"ruta3.vig@gmail.com\">Ruta 3</option>\r\n                <option value=\"ruta4.vig@gmail.com\">Ruta 4</option>\r\n                <option value=\"ruta5.vig@gmail.com\">Ruta 5</option>\r\n                <option value=\"ruta6.vig@gmail.com\">Ruta 6</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label class=\"col-form-label text-success\"><b>Total</b></label>\r\n            <label class=\"col-form-label text-success offset-md-1\" id=\"lblTotal\"><b>{{strTotal}}</b></label>\r\n        </div>\r\n    </div>\r\n\r\n    <br />\r\n    <br />\r\n    <br />\r\n\r\n    <table id=\"grid\" name=\"dataTable\" class=\"table table-striped table-bordered\" style=\"width:100%\">\r\n    <thead>\r\n        <tr>\r\n            <th>#Cliente</th>\r\n            <th>Nombre Cliente</th>\r\n            <th>#Retiro</th>\r\n\t\t\t<th>PDF</th>\r\n\t\t\t<th>Vendedor</th>\r\n\t\t\t<th>%</th>\r\n\t\t\t<th>Ganancia cliente</th>\r\n            <th>RetiroDeja</th>\r\n            <th>RetiroLleva</th>\r\n\t\t\t<th>Otro</th>\r\n\t\t\t<th>Retiro total</th>\r\n\t\t\t<th>Notas</th>\r\n        </tr>\r\n    </thead>\r\n    <tfoot>\r\n        <tr>\r\n            <th>#Cliente</th>\r\n            <th>Nombre Cliente</th>\r\n            <th>#Retiro</th>\r\n\t\t\t<th>PDF</th>\r\n\t\t\t<th>Vendedor</th>\r\n\t\t\t<th>%</th>\r\n\t\t\t<th>Ganancia cliente</th>\r\n            <th>RetiroDeja</th>\r\n            <th>RetiroLleva</th>\r\n\t\t\t<th>Otro</th>\r\n\t\t\t<th>Retiro total</th>\r\n\t\t\t<th>Notas</th>\r\n        </tr>\r\n    </tfoot>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/retiros/retiros.component.ts":
/*!**********************************************!*\
  !*** ./src/app/retiros/retiros.component.ts ***!
  \**********************************************/
/*! exports provided: RetirosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetirosComponent", function() { return RetirosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);





var RetirosComponent = /** @class */ (function () {
    function RetirosComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.nTotal = 0;
        this.strTotal = "$0.00";
    }
    RetirosComponent.prototype.ngOnInit = function () {
        this.loginService.verificar('/');
        this.t = $('#grid').DataTable({
            responsive: false,
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
        });
    };
    RetirosComponent.prototype.logout = function () {
        this.loginService.logout('/');
    };
    /*FIREBASE get DATA*/
    RetirosComponent.prototype.poblarTabla = function () {
        var _this = this;
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });
        this.strCollection = $('#cbxAnio').val() + $('#cbxMes').val() + 'R';
        this.nTotal = 0;
        this.t.clear().draw();
        var firestore = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
        //console.log(this.strCollection);
        var citiesRef = firestore.collection(this.strCollection);
        //var query = citiesRef.where('ventaTotalCliente', '>', 0).get()
        var query = citiesRef.get()
            .then(function (snapshot) {
            snapshot.forEach(function (doc) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_s) {
                    switch (_s.label) {
                        case 0:
                            //console.log(doc.data().idVenta);
                            //this.nTotal =+ doc.data().ventaTotal;
                            this.strFiltro = $('#cbxAnio').val() + $('#cbxMes').val() + $('#cbxDia').val();
                            this.strIdVenta = doc.data().idVenta;
                            if (!($('#cbxDia').val() == '0' && $('#cbxResponsable').val() == '0')) return [3 /*break*/, 2];
                            this.nTotal = this.nTotal + parseFloat(doc.data().ventaTotal.replace(',', ''));
                            _b = (_a = this.t.row).add;
                            _c = [doc.data().idCliente,
                                doc.data().nombreCliente,
                                doc.data().idVenta];
                            _d = '<a href=\'';
                            return [4 /*yield*/, this.descargar(doc.data().idVenta).then(function (url) {
                                    return url;
                                }).catch(function (error) { })];
                        case 1:
                            _b.apply(_a, [_c.concat([
                                    _d + (_s.sent()) + '\' target=\'_blank\'>' + doc.data().idVenta + '</a>',
                                    doc.data().correo,
                                    doc.data().porc,
                                    doc.data().gananciaCliente,
                                    doc.data().retiro,
                                    doc.data().retiroLleva,
                                    doc.data().otro_,
                                    doc.data().ventaTotal.replace(',', ''),
                                    doc.data().notas.replace(',', '')
                                ])]).draw();
                            return [3 /*break*/, 10];
                        case 2:
                            if (!($('#cbxDia').val() != '0' && $('#cbxResponsable').val() == '0')) return [3 /*break*/, 5];
                            if (!(this.strIdVenta.substring(0, 8) == this.strFiltro)) return [3 /*break*/, 4];
                            this.nTotal = this.nTotal + parseFloat(doc.data().ventaTotal.replace(',', ''));
                            _f = (_e = this.t.row).add;
                            _g = [doc.data().idCliente,
                                doc.data().nombreCliente,
                                doc.data().idVenta];
                            _h = '<a href=\'';
                            return [4 /*yield*/, this.descargar(doc.data().idVenta).then(function (url) {
                                    return url;
                                }).catch(function (error) { })];
                        case 3:
                            _f.apply(_e, [_g.concat([
                                    _h + (_s.sent()) + '\' target=\'_blank\'>' + doc.data().idVenta + '</a>',
                                    doc.data().correo,
                                    doc.data().porc,
                                    doc.data().gananciaCliente,
                                    doc.data().retiro,
                                    doc.data().retiroLleva,
                                    doc.data().otro_,
                                    doc.data().ventaTotal.replace(',', ''),
                                    doc.data().notas.replace(',', '')
                                ])]).draw();
                            _s.label = 4;
                        case 4: return [3 /*break*/, 10];
                        case 5:
                            if (!($('#cbxResponsable').val() != '0' && $('#cbxDia').val() == '0')) return [3 /*break*/, 8];
                            if (!(doc.data().correo.toUpperCase() == $('#cbxResponsable').val().toUpperCase())) return [3 /*break*/, 7];
                            this.nTotal = this.nTotal + parseFloat(doc.data().ventaTotal.replace(',', ''));
                            _k = (_j = this.t.row).add;
                            _l = [doc.data().idCliente,
                                doc.data().nombreCliente,
                                doc.data().idVenta];
                            _m = '<a href=\'';
                            return [4 /*yield*/, this.descargar(doc.data().idVenta).then(function (url) {
                                    return url;
                                }).catch(function (error) { })];
                        case 6:
                            _k.apply(_j, [_l.concat([
                                    _m + (_s.sent()) + '\' target=\'_blank\'>' + doc.data().idVenta + '</a>',
                                    doc.data().correo,
                                    doc.data().porc,
                                    doc.data().gananciaCliente,
                                    doc.data().retiro,
                                    doc.data().retiroLleva,
                                    doc.data().otro_,
                                    doc.data().ventaTotal.replace(',', ''),
                                    doc.data().notas.replace(',', '')
                                ])]).draw();
                            _s.label = 7;
                        case 7: return [3 /*break*/, 10];
                        case 8:
                            if (!($('#cbxResponsable').val() != '0' && $('#cbxDia').val() != '0')) return [3 /*break*/, 10];
                            if (!(this.strIdVenta.substring(0, 8) == this.strFiltro && doc.data().correo.toUpperCase() == $('#cbxResponsable').val().toUpperCase())) return [3 /*break*/, 10];
                            this.nTotal = this.nTotal + parseFloat(doc.data().ventaTotal.replace(',', ''));
                            _p = (_o = this.t.row).add;
                            _q = [doc.data().idCliente,
                                doc.data().nombreCliente,
                                doc.data().idVenta];
                            _r = '<a href=\'';
                            return [4 /*yield*/, this.descargar(doc.data().idVenta).then(function (url) {
                                    return url;
                                }).catch(function (error) { })];
                        case 9:
                            _p.apply(_o, [_q.concat([
                                    _r + (_s.sent()) + '\' target=\'_blank\'>' + doc.data().idVenta + '</a>',
                                    doc.data().correo,
                                    doc.data().porc,
                                    doc.data().gananciaCliente,
                                    doc.data().retiro,
                                    doc.data().retiroLleva,
                                    doc.data().otro_,
                                    doc.data().ventaTotal.replace(',', ''),
                                    doc.data().notas.replace(',', '')
                                ])]).draw();
                            _s.label = 10;
                        case 10: return [2 /*return*/];
                    }
                });
            }); });
            _this.strTotal = formatter.format(_this.nTotal);
            //this.strTotal = formatter.format(this.t.column( 4 ).data().sum());
            //$("#dataTable").DataTable().columns().draw();
        })
            .catch(function (err) {
            console.log('Error getting documents', err);
        });
    };
    RetirosComponent.prototype.descargar = function (idVenta) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var str, storage, gsReference;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storage = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]();
                        gsReference = storage.refFromURL('gs://vigventas.appspot.com/pdf/' + idVenta + '.pdf');
                        return [4 /*yield*/, gsReference.getDownloadURL().then(function (url) {
                                // Insert url into an <img> tag to "download"
                                //console.log(url);
                                str = url;
                            }).catch(function (error) {
                                // A full list of error codes is available at
                                // https://firebase.google.com/docs/storage/web/handle-errors
                                switch (error.code) {
                                    case 'storage/object-not-found':
                                        // File doesn't exist
                                        break;
                                    case 'storage/unauthorized':
                                        // User doesn't have permission to access the object
                                        break;
                                    case 'storage/canceled':
                                        // User canceled the upload
                                        break;
                                    case 'storage/unknown':
                                        // Unknown error occurred, inspect the server response
                                        break;
                                }
                            })];
                    case 1:
                        _a.sent();
                        console.log(str);
                        return [2 /*return*/, str];
                }
            });
        });
    };
    RetirosComponent.prototype.exportar = function () {
        var outputFile = 'export';
        outputFile = outputFile.replace('.csv', '') + '.csv';
        this.exportTableToCSV(outputFile);
    };
    RetirosComponent.prototype.exportTableToCSV = function (filename) {
        var csv = [];
        var rows = document.querySelectorAll("table tr");
        for (var i = 1; i < rows.length; i++) {
            var row = [], cols = rows[i].querySelectorAll("td, th");
            for (var j = 0; j < cols.length; j++)
                row.push(cols[j].innerHTML.replace(/(?:\r\n|\r|\n)/g, ''));
            csv.push(row.join(","));
        }
        // Download CSV file
        this.downloadCSV(csv.join("\n"), filename);
    };
    RetirosComponent.prototype.downloadCSV = function (csv, filename) {
        var csvFile;
        var downloadLink;
        // CSV file
        csvFile = new Blob([csv], { type: "text/csv" });
        // Download link
        downloadLink = document.createElement("a");
        // File name
        downloadLink.download = filename;
        // Create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);
        // Hide download link
        downloadLink.style.display = "none";
        // Add the link to DOM
        document.body.appendChild(downloadLink);
        // Click download link
        downloadLink.click();
    }; //downloadCSV
    RetirosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-retiros',
            template: __webpack_require__(/*! ./retiros.component.html */ "./src/app/retiros/retiros.component.html"),
            styles: [__webpack_require__(/*! ./retiros.component.css */ "./src/app/retiros/retiros.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], RetirosComponent);
    return RetirosComponent;
}());



/***/ }),

/***/ "./src/app/template/navbar/navbar.component.css":
/*!******************************************************!*\
  !*** ./src/app/template/navbar/navbar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/template/navbar/navbar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/template/navbar/navbar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\" style=\"background-color: #bcf0f7;\">\n  <li class=\"nav-item dropdown\" style=\"list-style:none;\">\n    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      Menú\n    </a>\n    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n      <a class=\"dropdown-item\" routerLink=\"/ventas\">Ventas</a>\n      <a class=\"dropdown-item\" routerLink=\"/consignaciones\">Consignaciones</a>\n      <a class=\"dropdown-item\" routerLink=\"/retiros\">Retiros</a>\n      <a class=\"dropdown-item\" routerLink=\"/clientes\">Clientes</a>\n      <a class=\"dropdown-item\" routerLink=\"/empresa\">Empresa</a>\n    </div>\n  </li>\n  <button class=\"btn my-2 my-sm-0\" type=\"button\" (click)='logout()'>Salir</button>\n</nav>\n"

/***/ }),

/***/ "./src/app/template/navbar/navbar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/template/navbar/navbar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login/login.service */ "./src/app/login/login.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(loginService) {
        this.loginService = loginService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.loginService.logout('/');
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/template/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/template/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/ventas/ventas.component.css":
/*!*********************************************!*\
  !*** ./src/app/ventas/ventas.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "thead input {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVudGFzL3ZlbnRhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdmVudGFzL3ZlbnRhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGhlYWQgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ventas/ventas.component.html":
/*!**********************************************!*\
  !*** ./src/app/ventas/ventas.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\">\r\n<app-navbar></app-navbar>\r\n<script src=\"https://cdn.datatables.net/plug-ins/1.10.19/api/sum().js\"></script>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <h2>Módulo de Ventas</h2>    \r\n    </div>\r\n    <br />\r\n    <br />\r\n    \r\n    <div class=\"row align-items-end\">    \r\n        <div class=\"col-sm-1\">\r\n            <label for=\"cbxAnio\" class=\"col-form-label\">Año</label>\r\n            <select id=\"cbxAnio\" class=\"form-control\">\r\n                    <option value=\"2019\">2019</option>\r\n                    <option value=\"2020\">2020</option>\r\n                    <option value=\"2021\">2021</option>\r\n                    <option value=\"2022\">2022</option>\r\n                    <option value=\"2023\">2023</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n            <label for=\"cbxMes\" class=\"col-form-label\">Mes</label>\r\n            <select id=\"cbxMes\" class=\"form-control\">\r\n                    <option value=\"01\">Enero</option>\r\n                    <option value=\"02\">Febrero</option>\r\n                    <option value=\"03\">Marzo</option>\r\n                    <option value=\"04\">Abril</option>\r\n                    <option value=\"05\">Mayo</option>\r\n                    <option value=\"06\">Junio</option>\r\n                    <option value=\"07\">Julio</option>\r\n                    <option value=\"08\">Agosto</option>\r\n                    <option value=\"09\">Septiembre</option>\r\n                    <option value=\"10\">Octubre</option>\r\n                    <option value=\"11\">Noviembre</option>\r\n                    <option value=\"12\">Diciembre</option>\r\n            </select>\r\n           </div>\r\n        <div class=\"col-sm-4\">\r\n            <button class=\"btn btn-success\" type=\"button\" id=\"btnCargar\" (click)='poblarTabla()'>Cargar</button>\r\n            <button class=\"btn btn-success offset-md-1\" type=\"button\" id=\"btnExportarExcel\" (click)='exportar()'>Exportar (csv)</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row align-items-end\">\r\n        <div class=\"col-sm-1\">\r\n            <label for=\"cbxDia\" class=\"col-form-label\">Día</label>\r\n            <select id=\"cbxDia\" class=\"form-control\">\r\n                    <option value=\"0\">-- Seleccione --</option>\r\n                    <option value=\"01\">01</option>\r\n                    <option value=\"02\">02</option>\r\n                    <option value=\"03\">03</option>\r\n                    <option value=\"04\">04</option>\r\n                    <option value=\"05\">05</option>\r\n                    <option value=\"06\">06</option>\r\n                    <option value=\"07\">07</option>\r\n                    <option value=\"08\">08</option>\r\n                    <option value=\"09\">09</option>\r\n                    <option value=\"10\">10</option>\r\n                    <option value=\"11\">11</option>\r\n                    <option value=\"12\">12</option>\r\n                    <option value=\"13\">13</option>\r\n                    <option value=\"14\">14</option>\r\n                    <option value=\"15\">15</option>\r\n                    <option value=\"16\">16</option>\r\n                    <option value=\"17\">17</option>\r\n                    <option value=\"18\">18</option>\r\n                    <option value=\"19\">19</option>\r\n                    <option value=\"20\">20</option>\r\n                    <option value=\"21\">21</option>\r\n                    <option value=\"22\">22</option>\r\n                    <option value=\"23\">23</option>\r\n                    <option value=\"24\">24</option>\r\n                    <option value=\"25\">25</option>\r\n                    <option value=\"26\">26</option>\r\n                    <option value=\"27\">27</option>\r\n                    <option value=\"28\">28</option>\r\n                    <option value=\"29\">29</option>\r\n                    <option value=\"30\">30</option>\r\n                    <option value=\"31\">31</option>\r\n                </select>\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n            <label for=\"cbxResponsable\" class=\"col-form-label\">Responsable</label>\r\n            <select id=\"cbxResponsable\" class=\"form-control\">\r\n                <option value=\"0\">-- Seleccione --</option>\r\n                <option value=\"ruta1.vig@gmail.com\">Ruta 1</option>\r\n                <option value=\"ruta2.vig@gmail.com\">Ruta 2</option>\r\n                <option value=\"ruta3.vig@gmail.com\">Ruta 3</option>\r\n                <option value=\"ruta4.vig@gmail.com\">Ruta 4</option>\r\n                <option value=\"ruta5.vig@gmail.com\">Ruta 5</option>\r\n                <option value=\"ruta6.vig@gmail.com\">Ruta 6</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <label class=\"col-form-label text-success\"><b>Total</b></label>\r\n            <label class=\"col-form-label text-success offset-md-1\" id=\"lblTotal\"><b>{{strTotal}}</b></label>\r\n        </div>\r\n    </div>\r\n\r\n    <br />\r\n    <br />\r\n    <br />\r\n\r\n    <table id=\"grid\" name=\"dataTable\" class=\"table table-striped table-bordered\" style=\"width:100%\">\r\n    <thead>\r\n        <tr>\r\n            <th>#Cliente</th>\r\n\t\t\t<th>Nombre Cliente</th>\r\n            <th>#Venta</th>\r\n            <th>PDF</th>\r\n\t\t\t<th>Vendedor</th>\r\n\t\t\t<th>%</th>\r\n\t\t\t<th>Ganancia cliente</th>\r\n\t\t\t<th>Corte</th>\r\n\t\t\t<th>Cuota</th>\r\n\t\t\t<th>Propina</th>\r\n\t\t\t<th>Evento</th>\r\n\t\t\t<th>Base</th>\r\n\t\t\t<th>Premio</th>\r\n\t\t\t<th>Otro</th>\r\n\t\t\t<th>Venta total</th>\r\n\t\t\t<th>Notas</th>\r\n        </tr>\r\n    </thead>\r\n    <tfoot>\r\n        <tr>\r\n            <th>#Cliente</th>\r\n            <th>Nombre Cliente</th>\r\n            <th>#Venta</th>\r\n\t\t\t<th>PDF</th>\r\n\t\t\t<th>Vendedor</th>\r\n\t\t\t<th>%</th>\r\n\t\t\t<th>Ganancia cliente</th>\r\n\t\t\t<th>Corte</th>\r\n\t\t\t<th>Cuota</th>\r\n\t\t\t<th>Propina</th>\r\n\t\t\t<th>Evento</th>\r\n\t\t\t<th>Base</th>\r\n\t\t\t<th>Premio</th>\r\n\t\t\t<th>Otro</th>\r\n\t\t\t<th>Venta total</th>\r\n\t\t\t<th>Notas</th>\r\n        </tr>\r\n    </tfoot>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/ventas/ventas.component.ts":
/*!********************************************!*\
  !*** ./src/app/ventas/ventas.component.ts ***!
  \********************************************/
/*! exports provided: VentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasComponent", function() { return VentasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");





var VentasComponent = /** @class */ (function () {
    function VentasComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.nTotal = 0;
        this.strTotal = "$0.00";
    }
    VentasComponent.prototype.ngOnInit = function () {
        this.loginService.verificar('/');
        /*$('#grid thead tr').clone(true).appendTo( '#grid thead' );
        $('#grid thead tr:eq(1) th').each( function (i) {
          var title = $(this).text();
          $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    
          $( 'input', this ).on( 'keyup change', function () {
              if ( this.t.column(i).search() !== this.value ) {
                  this.t
                      .column(i)
                      .search( this.value )
                      .draw();
              }
          } );
      } );*/
        this.t = $('#grid').DataTable({
            responsive: false,
            /*orderCellsTop: true,
            fixedHeader: true,*/
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
        });
    };
    VentasComponent.prototype.logout = function () {
        this.loginService.logout('/');
    };
    /*FIREBASE get DATA*/
    VentasComponent.prototype.poblarTabla = function () {
        var _this = this;
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });
        this.strCollection = $('#cbxAnio').val() + $('#cbxMes').val();
        this.nTotal = 0;
        this.t.clear().draw();
        var firestore = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        //console.log(this.strCollection);
        var citiesRef = firestore.collection(this.strCollection);
        //var query = citiesRef.where('ventaTotalCliente', '>', 0).get()
        var query = citiesRef.get()
            .then(function (snapshot) {
            snapshot.forEach(function (doc) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_s) {
                    switch (_s.label) {
                        case 0:
                            //console.log(doc.data().idVenta);
                            //this.nTotal =+ doc.data().ventaTotal;
                            this.strFiltro = $('#cbxAnio').val() + $('#cbxMes').val() + $('#cbxDia').val();
                            this.strIdVenta = doc.data().idVenta;
                            if (!($('#cbxDia').val() == '0' && $('#cbxResponsable').val() == '0')) return [3 /*break*/, 2];
                            this.nTotal = this.nTotal + parseFloat(doc.data().ventaTotal.replace(',', ''));
                            _b = (_a = this.t.row).add;
                            _c = [doc.data().idCliente,
                                doc.data().nombreCliente,
                                doc.data().idVenta];
                            _d = '<a href=\'';
                            return [4 /*yield*/, this.descargar(doc.data().idVenta).then(function (url) {
                                    return url;
                                }).catch(function (error) { })];
                        case 1:
                            _b.apply(_a, [_c.concat([
                                    _d + (_s.sent()) + '\' target=\'_blank\'>' + doc.data().idVenta + '</a>',
                                    doc.data().correo,
                                    doc.data().porc,
                                    doc.data().gananciaCliente,
                                    doc.data().corte,
                                    doc.data().cuota_,
                                    doc.data().propina_,
                                    doc.data().evento_,
                                    doc.data().basemaquina_,
                                    doc.data().premio_,
                                    doc.data().otro_,
                                    doc.data().ventaTotal.replace(',', ''),
                                    doc.data().notas.replace(',', '')
                                ])]).draw();
                            return [3 /*break*/, 10];
                        case 2:
                            if (!($('#cbxDia').val() != '0' && $('#cbxResponsable').val() == '0')) return [3 /*break*/, 5];
                            if (!(this.strIdVenta.substring(0, 8) == this.strFiltro)) return [3 /*break*/, 4];
                            this.nTotal = this.nTotal + parseFloat(doc.data().ventaTotal.replace(',', ''));
                            _f = (_e = this.t.row).add;
                            _g = [doc.data().idCliente,
                                doc.data().nombreCliente,
                                doc.data().idVenta];
                            _h = '<a href=\'';
                            return [4 /*yield*/, this.descargar(doc.data().idVenta).then(function (url) {
                                    return url;
                                }).catch(function (error) { })];
                        case 3:
                            _f.apply(_e, [_g.concat([
                                    _h + (_s.sent()) + '\' target=\'_blank\'>' + doc.data().idVenta + '</a>',
                                    doc.data().correo,
                                    doc.data().porc,
                                    doc.data().gananciaCliente,
                                    doc.data().corte,
                                    doc.data().cuota_,
                                    doc.data().propina_,
                                    doc.data().evento_,
                                    doc.data().basemaquina_,
                                    doc.data().premio_,
                                    doc.data().otro_,
                                    doc.data().ventaTotal.replace(',', ''),
                                    doc.data().notas.replace(',', '')
                                ])]).draw();
                            _s.label = 4;
                        case 4: return [3 /*break*/, 10];
                        case 5:
                            if (!($('#cbxResponsable').val() != '0' && $('#cbxDia').val() == '0')) return [3 /*break*/, 8];
                            if (!(doc.data().correo.toUpperCase() == $('#cbxResponsable').val().toUpperCase())) return [3 /*break*/, 7];
                            this.nTotal = this.nTotal + parseFloat(doc.data().ventaTotal.replace(',', ''));
                            _k = (_j = this.t.row).add;
                            _l = [doc.data().idCliente,
                                doc.data().nombreCliente,
                                doc.data().idVenta];
                            _m = '<a href=\'';
                            return [4 /*yield*/, this.descargar(doc.data().idVenta).then(function (url) {
                                    return url;
                                }).catch(function (error) { })];
                        case 6:
                            _k.apply(_j, [_l.concat([
                                    _m + (_s.sent()) + '\' target=\'_blank\'>' + doc.data().idVenta + '</a>',
                                    doc.data().correo,
                                    doc.data().porc,
                                    doc.data().gananciaCliente,
                                    doc.data().corte,
                                    doc.data().cuota_,
                                    doc.data().propina_,
                                    doc.data().evento_,
                                    doc.data().basemaquina_,
                                    doc.data().premio_,
                                    doc.data().otro_,
                                    doc.data().ventaTotal.replace(',', ''),
                                    doc.data().notas.replace(',', '')
                                ])]).draw();
                            _s.label = 7;
                        case 7: return [3 /*break*/, 10];
                        case 8:
                            if (!($('#cbxResponsable').val() != '0' && $('#cbxDia').val() != '0')) return [3 /*break*/, 10];
                            if (!(this.strIdVenta.substring(0, 8) == this.strFiltro && doc.data().correo.toUpperCase() == $('#cbxResponsable').val().toUpperCase())) return [3 /*break*/, 10];
                            this.nTotal = this.nTotal + parseFloat(doc.data().ventaTotal.replace(',', ''));
                            _p = (_o = this.t.row).add;
                            _q = [doc.data().idCliente,
                                doc.data().nombreCliente,
                                doc.data().idVenta];
                            _r = '<a href=\'';
                            return [4 /*yield*/, this.descargar(doc.data().idVenta).then(function (url) {
                                    return url;
                                }).catch(function (error) { })];
                        case 9:
                            _p.apply(_o, [_q.concat([
                                    _r + (_s.sent()) + '\' target=\'_blank\'>' + doc.data().idVenta + '</a>',
                                    doc.data().correo,
                                    doc.data().porc,
                                    doc.data().gananciaCliente,
                                    doc.data().corte,
                                    doc.data().cuota_,
                                    doc.data().propina_,
                                    doc.data().evento_,
                                    doc.data().basemaquina_,
                                    doc.data().premio_,
                                    doc.data().otro_,
                                    doc.data().ventaTotal.replace(',', ''),
                                    doc.data().notas.replace(',', '')
                                ])]).draw();
                            _s.label = 10;
                        case 10: return [2 /*return*/];
                    }
                });
            }); });
            _this.strTotal = formatter.format(_this.nTotal);
            //this.strTotal = formatter.format(this.t.column( 4 ).data().sum());
            //$("#dataTable").DataTable().columns().draw();
        })
            .catch(function (err) {
            console.log('Error getting documents', err);
        });
    };
    VentasComponent.prototype.descargar = function (idVenta) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var str, storage, gsReference;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storage = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]();
                        gsReference = storage.refFromURL('gs://vigventas.appspot.com/pdf/' + idVenta + '.pdf');
                        return [4 /*yield*/, gsReference.getDownloadURL().then(function (url) {
                                // Insert url into an <img> tag to "download"
                                //console.log(url);
                                str = url;
                            }).catch(function (error) {
                                // A full list of error codes is available at
                                // https://firebase.google.com/docs/storage/web/handle-errors
                                switch (error.code) {
                                    case 'storage/object-not-found':
                                        // File doesn't exist
                                        break;
                                    case 'storage/unauthorized':
                                        // User doesn't have permission to access the object
                                        break;
                                    case 'storage/canceled':
                                        // User canceled the upload
                                        break;
                                    case 'storage/unknown':
                                        // Unknown error occurred, inspect the server response
                                        break;
                                }
                            })];
                    case 1:
                        _a.sent();
                        console.log(str);
                        return [2 /*return*/, str];
                }
            });
        });
    };
    VentasComponent.prototype.exportar = function () {
        var outputFile = 'export';
        outputFile = outputFile.replace('.csv', '') + '.csv';
        this.exportTableToCSV(outputFile);
    };
    VentasComponent.prototype.exportTableToCSV = function (filename) {
        var csv = [];
        var rows = document.querySelectorAll("table tr");
        for (var i = 1; i < rows.length; i++) {
            var row = [], cols = rows[i].querySelectorAll("td, th");
            for (var j = 0; j < cols.length; j++) {
                row.push(cols[j].innerHTML.replace(/(?:\r\n|\r|\n)/g, ''));
            }
            csv.push(row.join(","));
        }
        // Download CSV file
        this.downloadCSV(csv.join("\n"), filename);
    };
    VentasComponent.prototype.downloadCSV = function (csv, filename) {
        var csvFile;
        var downloadLink;
        // CSV file
        csvFile = new Blob([csv], { type: "text/csv" });
        // Download link
        downloadLink = document.createElement("a");
        // File name
        downloadLink.download = filename;
        // Create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);
        // Hide download link
        downloadLink.style.display = "none";
        // Add the link to DOM
        document.body.appendChild(downloadLink);
        // Click download link
        downloadLink.click();
    }; //downloadCSV
    VentasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ventas',
            template: __webpack_require__(/*! ./ventas.component.html */ "./src/app/ventas/ventas.component.html"),
            styles: [__webpack_require__(/*! ./ventas.component.css */ "./src/app/ventas/ventas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], VentasComponent);
    return VentasComponent;
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
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBlDy-Kr7Z1nNVIujBXmlfjJsr1IP_tQIE",
        authDomain: "vigventas.firebaseapp.com",
        databaseURL: "https://vigventas.firebaseio.com",
        projectId: "vigventas",
        storageBucket: "vigventas.appspot.com",
        messagingSenderId: "76103733430"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\web\ventappweb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map