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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio_component__ = __webpack_require__("../../../../../src/app/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__estadisticas_estadisticas_component__ = __webpack_require__("../../../../../src/app/estadisticas/estadisticas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__busquedas_busquedas_component__ = __webpack_require__("../../../../../src/app/busquedas/busquedas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full', },
    { path: 'inicio', component: __WEBPACK_IMPORTED_MODULE_2__inicio_inicio_component__["a" /* InicioComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'estadisticas', component: __WEBPACK_IMPORTED_MODULE_4__estadisticas_estadisticas_component__["a" /* EstadisticasComponent */] },
    { path: 'busquedas', component: __WEBPACK_IMPORTED_MODULE_5__busquedas_busquedas_component__["a" /* BusquedasComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<div class=\"main-container\">\n  <header class=\"header-4\">\n    <div class=\"branding\">\n        <a class=\"nav-link\">\n            <clr-icon shape=\"home\"  size=\"24\"></clr-icon>\n            <span class=\"title\">Clínica V1</span>\n        </a>\n    </div>\n    <div class=\"header-nav\">\n        <a class=\"active nav-link nav-text\">Inicio</a>\n        <a class=\"nav-link nav-text\">Administración</a>\n    </div>\n</header>\n  <div class=\"content-container\">\n      <div class=\"content-area\">\n \n          \n          <router-outlet></router-outlet>\n      </div>\n      <nav class=\"sidenav\">\n        <section class=\"sidenav-content\">\n          <a class=\"nav-link active\"   routerLink=\"/inicio\" routerLinkActive=\"active\"  >Inicio</a>\n          <section class=\"nav-group collapsible\">\n            <input id=\"tabexample1\" type=\"checkbox\">\n            <label for=\"tabexample1\">Incidencias</label>\n            <ul class=\"nav-list\">\n              <li><a class=\"nav-link\"  routerLink=\"/estadisticas\" routerLinkActive=\"active\" >Estadísticas</a></li>\n              <li><a class=\"nav-link\"     routerLink=\"/busquedas\" routerLinkActive=\"active\">Búsquedas</a></li>\n            </ul>\n          </section>\n          <section class=\"nav-group collapsible\">\n            <input id=\"tabexample2\" type=\"checkbox\">\n            <label for=\"tabexample2\">Reportes</label>\n            <ul class=\"nav-list\">\n              <li><a class=\"nav-link\">Generar</a></li>\n              <li><a class=\"nav-link\">Descargas</a></li>\n            </ul>\n          </section>\n        </section>\n    </nav>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        //this.router.navigate(["/dashboard"],{skipLocationChange:true});
        //   this.router.navigate(["/principal"],{skipLocationChange:true});
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clr_angular__ = __webpack_require__("../../../../@clr/angular/esm5/clr-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inicio_inicio_component__ = __webpack_require__("../../../../../src/app/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__estadisticas_estadisticas_component__ = __webpack_require__("../../../../../src/app/estadisticas/estadisticas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__busquedas_busquedas_component__ = __webpack_require__("../../../../../src/app/busquedas/busquedas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_devextreme_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__inicio_inicio_component__["a" /* InicioComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__estadisticas_estadisticas_component__["a" /* EstadisticasComponent */],
                __WEBPACK_IMPORTED_MODULE_8__busquedas_busquedas_component__["a" /* BusquedasComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__clr_angular__["a" /* ClarityModule */],
                __WEBPACK_IMPORTED_MODULE_9_devextreme_angular__["DxChartModule"],
                __WEBPACK_IMPORTED_MODULE_9_devextreme_angular__["DxSelectBoxModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/busquedas/busquedas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/busquedas/busquedas.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\nAqui iran las busquedas\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/busquedas/busquedas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusquedasComponent; });
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

var BusquedasComponent = /** @class */ (function () {
    function BusquedasComponent() {
    }
    BusquedasComponent.prototype.ngOnInit = function () {
    };
    BusquedasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-busquedas',
            template: __webpack_require__("../../../../../src/app/busquedas/busquedas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/busquedas/busquedas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BusquedasComponent);
    return BusquedasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Dashboard</h1>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/estadisticas/estadisticas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".options {\n    padding: 20px;\n    background-color: rgba(191, 191, 191, 0.15);\n    margin-top: 20px;\n}\n.option {\n    margin-top: 10px;\n}\n.caption {\n    font-size: 18px;\n    font-weight: 500;\n}\n.option > span {\n    margin-right: 10px;\n}\n.option > .dx-widget {\n    display: inline-block;\n    vertical-align: middle;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/estadisticas/estadisticas.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Estadísticas</h3>\n<div id=\"chart-demo\">\n  <dx-chart\n      title=\"Incidencias por Hospital(Marzo)\"\n      palette=\"Harmony Light\"\n      [dataSource]=\"populationData\">\n      <dxi-series valueField=\"y1564\" name=\"Inasistencias\"></dxi-series>\n      <dxi-series valueField=\"y014\" name=\"Sin material\"></dxi-series>\n      <dxi-series valueField=\"y65\" name=\"Laboratorios sucios}\"></dxi-series>\n      <dxo-common-series-settings\n    #commonSeries\n          argumentField=\"country\"\n          [type]=\"types[0]\">\n      </dxo-common-series-settings>\n      <dxo-margin [bottom]=\"20\"></dxo-margin>\n      <dxo-argument-axis [valueMarginsEnabled]=\"false\"></dxo-argument-axis>\n      <dxo-export [enabled]=\"true\"></dxo-export>\n      <dxo-legend\n          verticalAlignment=\"bottom\"\n          horizontalAlignment=\"center\">\n      </dxo-legend>\n  </dx-chart>\n  <div class=\"options\">\n      <div class=\"caption\">Opciones</div>\n      <div class=\"option\">              \n          <span>Tipo de serie</span> \n          <dx-select-box\n              [dataSource]=\"types\"\n              [(value)]=\"commonSeries.type\">\n          </dx-select-box>\n       </div>   \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/estadisticas/estadisticas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadisticasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__poblacion_service__ = __webpack_require__("../../../../../src/app/poblacion.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EstadisticasComponent = /** @class */ (function () {
    function EstadisticasComponent(service) {
        this.types = ["area", "stackedarea", "fullstackedarea"];
        this.populationData = service.getPopulationData();
    }
    EstadisticasComponent.prototype.ngOnInit = function () {
    };
    EstadisticasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-estadisticas',
            template: __webpack_require__("../../../../../src/app/estadisticas/estadisticas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/estadisticas/estadisticas.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__poblacion_service__["a" /* PoblacionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__poblacion_service__["a" /* PoblacionService */]])
    ], EstadisticasComponent);
    return EstadisticasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/inicio/inicio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inicio/inicio.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Inicio aqui irá</h3>\n"

/***/ }),

/***/ "../../../../../src/app/inicio/inicio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioComponent; });
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

var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__("../../../../../src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/poblacion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Poblacion */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoblacionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Poblacion = /** @class */ (function () {
    function Poblacion() {
    }
    return Poblacion;
}());

var populationData = [{
        country: "Ecatepec",
        y014: 320866959,
        y1564: 853191410,
        y65: 87774113
    }, {
        country: "Cuitlahua",
        y014: 340419115,
        y1564: 626520945,
        y65: 47063757
    }, {
        country: "Atizapán",
        y014: 58554755,
        y1564: 182172625,
        y65: 34835293
    }, {
        country: " Toluca",
        y014: 68715705,
        y1564: 146014815,
        y65: 10053690
    }, {
        country: "Sur",
        y014: 50278034,
        y1564: 113391494,
        y65: 9190842
    }, {
        country: "Marina",
        y014: 26465156,
        y1564: 101123777,
        y65: 18412243
    }];
var PoblacionService = /** @class */ (function () {
    function PoblacionService() {
    }
    PoblacionService.prototype.getPopulationData = function () {
        return populationData;
    };
    PoblacionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], PoblacionService);
    return PoblacionService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map