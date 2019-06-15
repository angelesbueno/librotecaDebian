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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_busqueda_autor_busqueda_autor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/busqueda-autor/busqueda-autor.component */ "./src/app/components/busqueda-autor/busqueda-autor.component.ts");
/* harmony import */ var _components_busqueda_titulo_busqueda_titulo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/busqueda-titulo/busqueda-titulo.component */ "./src/app/components/busqueda-titulo/busqueda-titulo.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inicio/inicio.component */ "./src/app/components/inicio/inicio.component.ts");
/* harmony import */ var _components_libro_detalle_libro_detalle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/libro-detalle/libro-detalle.component */ "./src/app/components/libro-detalle/libro-detalle.component.ts");
/* harmony import */ var _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/perfil/perfil.component */ "./src/app/components/perfil/perfil.component.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _components_leidos_leidos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/leidos/leidos.component */ "./src/app/components/leidos/leidos.component.ts");
/* harmony import */ var _components_libro_detalle_leido_libro_detalle_leido_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/libro-detalle-leido/libro-detalle-leido.component */ "./src/app/components/libro-detalle-leido/libro-detalle-leido.component.ts");
/* harmony import */ var _components_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/favoritos/favoritos.component */ "./src/app/components/favoritos/favoritos.component.ts");
/* harmony import */ var _components_pag404_pag404_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pag404/pag404.component */ "./src/app/components/pag404/pag404.component.ts");
/* harmony import */ var _components_editar_perfil_editar_perfil_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/editar-perfil/editar-perfil.component */ "./src/app/components/editar-perfil/editar-perfil.component.ts");
/* harmony import */ var _components_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/lista-usuarios/lista-usuarios.component */ "./src/app/components/lista-usuarios/lista-usuarios.component.ts");



// Components














var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'busquedaTitulo', component: _components_busqueda_titulo_busqueda_titulo_component__WEBPACK_IMPORTED_MODULE_5__["BusquedaTituloComponent"], canActivate: [_services_item_service__WEBPACK_IMPORTED_MODULE_10__["ItemService"]] },
    { path: 'busquedaAutor', component: _components_busqueda_autor_busqueda_autor_component__WEBPACK_IMPORTED_MODULE_4__["BusquedaAutorComponent"], canActivate: [_services_item_service__WEBPACK_IMPORTED_MODULE_10__["ItemService"]] },
    { path: 'perfil', component: _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_9__["PerfilComponent"], canActivate: [_services_item_service__WEBPACK_IMPORTED_MODULE_10__["ItemService"]] },
    { path: 'registro', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'inicio', component: _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_7__["InicioComponent"], canActivate: [_services_item_service__WEBPACK_IMPORTED_MODULE_10__["ItemService"]] },
    { path: 'leidos', component: _components_leidos_leidos_component__WEBPACK_IMPORTED_MODULE_11__["LeidosComponent"], canActivate: [_services_item_service__WEBPACK_IMPORTED_MODULE_10__["ItemService"]] },
    { path: 'favoritos', component: _components_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_13__["FavoritosComponent"], canActivate: [_services_item_service__WEBPACK_IMPORTED_MODULE_10__["ItemService"]] },
    { path: 'libro-detalle/:id', component: _components_libro_detalle_libro_detalle_component__WEBPACK_IMPORTED_MODULE_8__["LibroDetalleComponent"], canActivate: [_services_item_service__WEBPACK_IMPORTED_MODULE_10__["ItemService"]] },
    { path: 'libro-detalle-leido/:id', component: _components_libro_detalle_leido_libro_detalle_leido_component__WEBPACK_IMPORTED_MODULE_12__["LibroDetalleLeidoComponent"], canActivate: [_services_item_service__WEBPACK_IMPORTED_MODULE_10__["ItemService"]] },
    { path: 'editarPerfil', component: _components_editar_perfil_editar_perfil_component__WEBPACK_IMPORTED_MODULE_15__["EditarPerfilComponent"], canActivate: [_services_item_service__WEBPACK_IMPORTED_MODULE_10__["ItemService"]] },
    { path: 'listaUsuarios', component: _components_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_16__["ListaUsuariosComponent"], canActivate: [_services_item_service__WEBPACK_IMPORTED_MODULE_10__["ItemService"]] },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', pathMatch: 'full', component: _components_pag404_pag404_component__WEBPACK_IMPORTED_MODULE_14__["Pag404Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = "<!-- <app-navbar></app-navbar> -->\r\n<router-outlet></router-outlet>\r\n<!-- <app-footer></app-footer> -->"

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
        this.title = 'frontend';
    }
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_busqueda_titulo_busqueda_titulo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/busqueda-titulo/busqueda-titulo.component */ "./src/app/components/busqueda-titulo/busqueda-titulo.component.ts");
/* harmony import */ var _components_busqueda_autor_busqueda_autor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/busqueda-autor/busqueda-autor.component */ "./src/app/components/busqueda-autor/busqueda-autor.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/inicio/inicio.component */ "./src/app/components/inicio/inicio.component.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/custom-validators.service */ "./src/app/services/custom-validators.service.ts");
/* harmony import */ var _components_libro_detalle_libro_detalle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/libro-detalle/libro-detalle.component */ "./src/app/components/libro-detalle/libro-detalle.component.ts");
/* harmony import */ var _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/perfil/perfil.component */ "./src/app/components/perfil/perfil.component.ts");
/* harmony import */ var _components_leidos_leidos_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/leidos/leidos.component */ "./src/app/components/leidos/leidos.component.ts");
/* harmony import */ var _components_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pipes/keys.pipe */ "./src/app/components/pipes/keys.pipe.ts");
/* harmony import */ var _components_libro_detalle_leido_libro_detalle_leido_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/libro-detalle-leido/libro-detalle-leido.component */ "./src/app/components/libro-detalle-leido/libro-detalle-leido.component.ts");
/* harmony import */ var _components_pipes_stars_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pipes/stars.pipe */ "./src/app/components/pipes/stars.pipe.ts");
/* harmony import */ var _components_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/favoritos/favoritos.component */ "./src/app/components/favoritos/favoritos.component.ts");
/* harmony import */ var _components_pag404_pag404_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/pag404/pag404.component */ "./src/app/components/pag404/pag404.component.ts");
/* harmony import */ var _components_editar_perfil_editar_perfil_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/editar-perfil/editar-perfil.component */ "./src/app/components/editar-perfil/editar-perfil.component.ts");
/* harmony import */ var _components_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/lista-usuarios/lista-usuarios.component */ "./src/app/components/lista-usuarios/lista-usuarios.component.ts");









// Components








// Services












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_busqueda_titulo_busqueda_titulo_component__WEBPACK_IMPORTED_MODULE_12__["BusquedaTituloComponent"],
                _components_busqueda_autor_busqueda_autor_component__WEBPACK_IMPORTED_MODULE_13__["BusquedaAutorComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_16__["InicioComponent"],
                _components_libro_detalle_libro_detalle_component__WEBPACK_IMPORTED_MODULE_19__["LibroDetalleComponent"],
                _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_20__["PerfilComponent"],
                _components_leidos_leidos_component__WEBPACK_IMPORTED_MODULE_21__["LeidosComponent"],
                _components_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_22__["KeysPipe"],
                _components_libro_detalle_leido_libro_detalle_leido_component__WEBPACK_IMPORTED_MODULE_23__["LibroDetalleLeidoComponent"],
                _components_pipes_stars_pipe__WEBPACK_IMPORTED_MODULE_24__["StarsPipe"],
                _components_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_25__["FavoritosComponent"],
                _components_pag404_pag404_component__WEBPACK_IMPORTED_MODULE_26__["Pag404Component"],
                _components_editar_perfil_editar_perfil_component__WEBPACK_IMPORTED_MODULE_27__["EditarPerfilComponent"],
                _components_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_28__["ListaUsuariosComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot()
            ],
            providers: [_services_item_service__WEBPACK_IMPORTED_MODULE_17__["ItemService"], _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_18__["CustomValidatorsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/busqueda-autor/busqueda-autor.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/busqueda-autor/busqueda-autor.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container container-custom\">\r\n    <h2 style=\"padding-bottom: .5em\">Búsqueda por autor</h2>\r\n\r\n    <form (ngSubmit)=\"enviarAutor(formAutor)\" [formGroup]=\"formAutor\">\r\n        <div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-2 col-form-label\">Autor: </label>\r\n                <div class=\"col-8\">\r\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Autor\" formControlName=\"autor\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-2 col-form-label\">&nbsp;</label>\r\n            <div class=\"input-group col-md-4\">\r\n                <button type=\"submit\" class=\"btn btn-outline-primary btn-sm\" [disabled]=\"!formAutor.valid\">Enviar</button>\r\n            </div>\r\n            <small *ngIf=\"noLibro\">Autor no encontrado</small>\r\n            <small *ngIf=\"errorGb\" style=\"margin-top: 3%\">El servidor de Google Books no está disponible temporalmente, vuelve a intentarlo</small>\r\n        </div>\r\n        <div class=\"enlace-volver\">\r\n            <a [routerLink]=\"['/inicio']\" class=\"volver\"><i class=\"fas fa-arrow-left mr-2\"></i>Volver a Inicio</a\r\n                >\r\n        </div>\r\n        <small class=\"helper-text\" style=\"color:red\" *ngIf=\"this.invalido\">Datos incorrectos</small>\r\n        <div class=\"respuesta\" *ngIf=\"this.respuesta\">\r\n            <div class=\"col-6 bloque animated fadeIn fast\" *ngFor=\"let libro of this.listalib | paginate: { itemsPerPage: 6, currentPage: p }\">\r\n                <div class=\"row no-gutters card-custom\">\r\n                    <div class=\"col-md-3 portada\">\r\n                        <img [src]=\"!libro.volumeInfo.imageLinks ? '../../../assets/portada.png' : libro.volumeInfo.imageLinks.smallThumbnail\" class=\"card-img\" alt=\"{{libro.volumeInfo.title}}\">\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">{{libro.volumeInfo.title}}</h5>\r\n                            <p class=\"card-text autor\" *ngFor=\"let autor of libro.volumeInfo.authors\">{{autor}}</p>\r\n                            <div class=\"button-box\">\r\n                                <button type=\"button\" class=\"btn btn-outline-info btn-sm\" [routerLink]=\"['/libro-detalle', libro.id]\"><i class=\"fas fa-book mr-2\"></i>Info</button>\r\n                                <button type=\"button\" class=\"btn btn-warning btn-sm\" *ngIf=\"this.existeLibroLeido(libro.id)\"><i class=\"fas fa-check mr-2\" style=\"color: green\"></i>Leído</button>\r\n                                <button type=\"button\" class=\"btn btn-outline-success btn-sm\" *ngIf=\"!this.existeLibroLeido(libro.id)\" (click)=\"addLeido(template, libro)\"><i class=\"fas fa-plus mr-2\"></i>Añadir a leídos</button>\r\n\r\n                                <ng-template #template class=\"modal\">\r\n                                    <div class=\"modal-header\">\r\n                                        <h4 class=\"modal-title pull-left\">{{ this.libro.volumeInfo.title }}</h4>\r\n                                        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                                    </div>\r\n                                    <div class=\"modal-body\">\r\n                                        <img src=\"../../../assets/addLeido.png\" alt=\"libro\">\r\n                                        <div class=\"modal-button\">\r\n                                            <button type=\"button\" class=\"btn btn-outline-primary genial\" (click)=\"modalRef.hide()\"><i class=\"far fa-thumbs-up mr-2\"></i>¡Añadido a leídos!</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n        </div>\r\n    </form>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/busqueda-autor/busqueda-autor.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/busqueda-autor/busqueda-autor.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-custom {\n  margin: 5% auto; }\n\n.container-custom small {\n  color: red; }\n\n.bloque {\n  max-width: 540px;\n  display: inline-block;\n  padding: 3%; }\n\n.card-custom {\n  text-align: center;\n  margin: 2%; }\n\n.portada {\n  width: 50%;\n  margin: 0 auto; }\n\n.portada img.card-img {\n  height: 215px;\n  max-width: 150px;\n  width: 134.5px; }\n\n.card-custom .card-body {\n  padding: 0 7%;\n  height: 100%; }\n\n.autor {\n  margin: 0; }\n\n.button-box {\n  margin-top: 15px; }\n\n.button-box button {\n  margin: 0 5px; }\n\n.button-box .btn-warning {\n  cursor: auto; }\n\n.modal-button {\n  text-align: center;\n  margin-top: 1rem; }\n\n.modal-header {\n  background: -ms-linear-gradient(25deg, #CE0AFF 0, #429AD5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1');\n  background: linear-gradient(25deg, #CE0AFF 0, #429AD5 100%);\n  color: white; }\n\n.modal-body {\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  background: -ms-linear-gradient(360deg, #EBF6FF 0, #6FB1E3 100%);\n  /* IE10+ */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1');\n  /* for IE */\n  background: linear-gradient(360deg, #FFFFFF 0, #6FB1E3 100%);\n  /* W3C */ }\n\n.modal-body .genial {\n  background-color: #1fa8e0 !important;\n  border-color: #1fa8e0 !important;\n  color: white; }\n\n.modal-body img {\n  width: 30%;\n  display: block;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGVzL0Rlc2t0b3AvREFXMi9mcm9udGVuZC1zZXBhcmFkby1kZWYvc3JjL2FwcC9jb21wb25lbnRzL2J1c3F1ZWRhLWF1dG9yL2J1c3F1ZWRhLWF1dG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVU7RUFDVixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxTQUFTLEVBQUE7O0FBR2I7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFLSSwrREFBK0Q7RUFDL0Qsb0hBQW9IO0VBQ3BILDJEQUEyRDtFQUMzRCxZQUFZLEVBQUE7O0FBR2hCO0VBRUksV0FBQTtFQUVBLG9CQUFBO0VBRUEseUJBQUE7RUFFQSxpQkFBQTtFQUNBLGdFQUFnRTtFQUNoRSxVQUFBO0VBQ0Esb0hBQW9IO0VBQ3BILFdBQUE7RUFDQSw0REFBNEQ7RUFDNUQsUUFBQSxFQUFTOztBQUdiO0VBQ0ksb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNoQyxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2J1c3F1ZWRhLWF1dG9yL2J1c3F1ZWRhLWF1dG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1jdXN0b20ge1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWN1c3RvbSBzbWFsbCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYmxvcXVlIHtcclxuICAgIG1heC13aWR0aDogNTQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxufVxyXG5cclxuLmNhcmQtY3VzdG9tIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMiU7XHJcbn1cclxuXHJcbi5wb3J0YWRhIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnBvcnRhZGEgaW1nLmNhcmQtaW1nIHtcclxuICAgIGhlaWdodDogMjE1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDEzNC41cHg7XHJcbn1cclxuXHJcbi5jYXJkLWN1c3RvbSAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAgNyU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hdXRvciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5idXR0b24tYm94IHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5idXR0b24tYm94IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uLWJveCAuYnRuLXdhcm5pbmcge1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG59XHJcblxyXG4ubW9kYWwtYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMjVkZWcsICNDRTBBRkYgMCwgIzQyOUFENSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAyNWRlZywgY29sb3Itc3RvcCgwLCBDRTBBRkYpLCBjb2xvci1zdG9wKDEwMCUsIDQyOUFENSkpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMjVkZWcsICNDRTBBRkYgMCwgIzQyOUFENSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgyNWRlZywgI0NFMEFGRiAwLCAjNDI5QUQ1IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgyNWRlZywgI0NFMEFGRiAwLCAjNDI5QUQ1IDEwMCUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzEzMDFGRScsIGVuZENvbG9yc3RyPScjRjRGNjBDJywgR3JhZGllbnRUeXBlPScxJyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjVkZWcsICNDRTBBRkYgMCwgIzQyOUFENSAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRUJGNkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBGRjMuNisgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAzNjBkZWcsIGNvbG9yLXN0b3AoMCwgRUJGNkZGKSwgY29sb3Itc3RvcCgxMDAlLCA2RkIxRTMpKTtcclxuICAgIC8qIENocm9tZSxTYWZhcmk0KyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRUJGNkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0VCRjZGRiAwLCAjNkZCMUUzIDEwMCUpO1xyXG4gICAgLyogT3BlcmEgMTEuMTArICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0VCRjZGRiAwLCAjNkZCMUUzIDEwMCUpO1xyXG4gICAgLyogSUUxMCsgKi9cclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyMxMzAxRkUnLCBlbmRDb2xvcnN0cj0nI0Y0RjYwQycsIEdyYWRpZW50VHlwZT0nMScpO1xyXG4gICAgLyogZm9yIElFICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRkZGRkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBXM0MgKi9cclxufVxyXG5cclxuLm1vZGFsLWJvZHkgLmdlbmlhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZhOGUwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMxZmE4ZTAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkgaW1nIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/busqueda-autor/busqueda-autor.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/busqueda-autor/busqueda-autor.component.ts ***!
  \***********************************************************************/
/*! exports provided: BusquedaAutorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaAutorComponent", function() { return BusquedaAutorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");





// Services

var BusquedaAutorComponent = /** @class */ (function () {
    function BusquedaAutorComponent(item, formBuilder, router, modalService) {
        this.item = item;
        this.formBuilder = formBuilder;
        this.router = router;
        this.modalService = modalService;
        this.invalido = false;
        this.respuesta = false;
        this.libroLeido = false;
        this.libroAdded = false;
        this.noLibro = false;
        this.allReadedBooks = [];
        this.p = 1;
        this.errorGb = false;
    }
    BusquedaAutorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // COMPRUEBO TOKEN CORRECTO
        this.item.postCheckToken().subscribe(function (res) {
            if (!res) {
                _this.item.setActivate(false);
                _this.item.logout();
            }
        });
        // OBTENGO LOS IDS DE TODOS LOS LIBROS QUE HA LEÍDO EL USUARIO
        this.item.takeAllReadedBooks().subscribe(function (res) {
            _this.allReadedBooks = res;
        });
        // FORMULARIO REACTIVO
        this.formAutor = this.formBuilder.group({
            autor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    // BUSCAR AUTOR EN LA API GOOGLE BOOKS
    BusquedaAutorComponent.prototype.enviarAutor = function (formAutor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.formAutor.status === 'INVALID')) return [3 /*break*/, 1];
                        this.invalido = true;
                        return [3 /*break*/, 3];
                    case 1:
                        this.autor = formAutor.value.autor;
                        return [4 /*yield*/, this.item.getSearchByAut(this.autor).subscribe(function (res) {
                                if (res.totalItems > 0) {
                                    if (res.items.length > 0) {
                                        _this.respuesta = true;
                                        _this.errorGb = false;
                                        _this.noLibro = false;
                                        _this.listalib = res.items.slice();
                                    }
                                }
                                else {
                                    _this.noLibro = true;
                                }
                            }, function (err) {
                                if (err.status === 503) {
                                    _this.errorGb = true;
                                }
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // AÑADIR LIBRO A LEÍDOS
    BusquedaAutorComponent.prototype.addLeido = function (template, libro) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var libroDef;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        libroDef = {
                            titulo: libro.volumeInfo.title,
                            autor: libro.volumeInfo.authors
                                ? libro.volumeInfo.authors[0]
                                : "Autor no disponible",
                            editorial: libro.volumeInfo.publisher
                                ? libro.volumeInfo.publisher
                                : "Editorial no disponible",
                            sinopsis: libro.volumeInfo.description
                                ? libro.volumeInfo.description
                                : "Información no disponible",
                            portada: !libro.volumeInfo.imageLinks ? '../../../assets/portada.png' : libro.volumeInfo.imageLinks.smallThumbnail,
                            idGB: libro.id
                        };
                        return [4 /*yield*/, this.item.addLeido(libroDef).subscribe(function (res) {
                                if (res.added) {
                                    _this.allReadedBooks.push(res.libro[0]);
                                    _this.openModal(template);
                                }
                            }, function (err) {
                                if (err.status === 404) {
                                    _this.router.navigate(['/pag404']);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // ABRIR MODAL
    BusquedaAutorComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    // CERRAR MODAL
    BusquedaAutorComponent.prototype.closeModal = function (template) {
        this.modalRef.hide();
    };
    // COMPROBAR LIBRO LEÍDO
    BusquedaAutorComponent.prototype.existeLibroLeido = function (idGB) {
        return this.allReadedBooks.some(function (libro) {
            return libro.idGB === idGB;
        });
    };
    BusquedaAutorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-busqueda-autor",
            template: __webpack_require__(/*! ./busqueda-autor.component.html */ "./src/app/components/busqueda-autor/busqueda-autor.component.html"),
            styles: [__webpack_require__(/*! ./busqueda-autor.component.scss */ "./src/app/components/busqueda-autor/busqueda-autor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], BusquedaAutorComponent);
    return BusquedaAutorComponent;
}());



/***/ }),

/***/ "./src/app/components/busqueda-titulo/busqueda-titulo.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/busqueda-titulo/busqueda-titulo.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container container-custom\">\r\n    <h2 style=\"padding-bottom: .5em\">Búsqueda por título</h2>\r\n\r\n    <form (ngSubmit)=\"enviarTitulo(formTitulo)\" [formGroup]=\"formTitulo\">\r\n        <div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-2 col-form-label\">Título: </label>\r\n                <div class=\"col-8\">\r\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Título\" formControlName=\"titulo\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-2 col-form-label\">&nbsp;</label>\r\n            <div class=\"input-group col-md-4\">\r\n                <button type=\"submit\" class=\"btn btn-outline-primary btn-sm\" [disabled]=\"!formTitulo.valid\">\r\n                    Buscar\r\n                </button>\r\n            </div>\r\n            <small *ngIf=\"noLibro\">Título no encontrado</small>\r\n            <small *ngIf=\"errorGb\" style=\"margin-top: 3%\">El servidor de Google Books no está disponible temporalmente, vuelve a intentarlo</small>\r\n        </div>\r\n        <div class=\"enlace-volver\">\r\n            <a [routerLink]=\"['/inicio']\" class=\"volver\"><i class=\"fas fa-arrow-left mr-2\"></i>Volver a Inicio</a\r\n            >\r\n        </div>\r\n\r\n        <small class=\"helper-text\" *ngIf=\"this.invalido\"\r\n            >Datos incorrectos</small\r\n        >\r\n        <div class=\"respuesta\" *ngIf=\"this.respuesta\">\r\n            <div\r\n                class=\"col-6 bloque animated fadeIn fast\"\r\n                *ngFor=\"\r\n                    let libro of this.listalib\r\n                        | paginate: { itemsPerPage: 6, currentPage: p }\r\n                \"\r\n            >\r\n                <div class=\"row no-gutters card-custom\">\r\n                    <div class=\"col-md-3 portada\">\r\n                        <img\r\n                            [src]=\"\r\n                                !libro.volumeInfo.imageLinks\r\n                                    ? '../../../assets/portada.png'\r\n                                    : libro.volumeInfo.imageLinks.smallThumbnail\r\n                            \"\r\n                            class=\"card-img\"\r\n                            alt=\"{{ libro.volumeInfo.title }}\"\r\n                        />\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">\r\n                                {{ libro.volumeInfo.title }}\r\n                            </h5>\r\n                            <p\r\n                                class=\"card-text autor\"\r\n                                *ngFor=\"let autor of libro.volumeInfo.authors\"\r\n                            >\r\n                                {{ autor }}\r\n                            </p>\r\n                            <div class=\"button-box\">\r\n                                <button\r\n                                    type=\"button\"\r\n                                    class=\"btn btn-outline-info btn-sm\"\r\n                                    [routerLink]=\"['/libro-detalle', libro.id]\"\r\n                                >\r\n                                    <i class=\"fas fa-book mr-2\"></i>Info\r\n                                </button>\r\n                                <button\r\n                                    type=\"button\"\r\n                                    class=\"btn btn-warning btn-sm\"\r\n                                    *ngIf=\"this.existeLibroLeido(libro.id)\"\r\n                                >\r\n                                    <i\r\n                                        class=\"fas fa-check mr-2\"\r\n                                        style=\"color: green\"\r\n                                    ></i\r\n                                    >Leído\r\n                                </button>\r\n                                <button\r\n                                    type=\"button\"\r\n                                    class=\"btn btn-outline-success btn-sm\"\r\n                                    *ngIf=\"!this.existeLibroLeido(libro.id)\"\r\n                                    (click)=\"addLeido(template, libro)\"\r\n                                >\r\n                                    <i class=\"fas fa-plus mr-2\"></i>Añadir a\r\n                                    leídos\r\n                                </button>\r\n\r\n                                <ng-template #template>\r\n                                    <div class=\"modal-header\">\r\n                                        <h4 class=\"modal-title pull-left\">\r\n                                            {{ this.libro.volumeInfo.title }}\r\n                                        </h4>\r\n                                        <button\r\n                                            type=\"button\"\r\n                                            class=\"close pull-right\"\r\n                                            aria-label=\"Close\"\r\n                                            (click)=\"modalRef.hide()\"\r\n                                        >\r\n                                            <span aria-hidden=\"true\"\r\n                                                >&times;</span\r\n                                            >\r\n                                        </button>\r\n                                    </div>\r\n                                    <div class=\"modal-body\">\r\n                                        <img\r\n                                            src=\"../../../assets/addLeido.png\"\r\n                                            alt=\"libro\"\r\n                                        />\r\n                                        <div class=\"modal-button\">\r\n                                            <button\r\n                                                type=\"button\"\r\n                                                class=\"btn btn-outline-primary genial\"\r\n                                                (click)=\"modalRef.hide()\"\r\n                                            >\r\n                                                <i\r\n                                                    class=\"far fa-thumbs-up mr-2\"\r\n                                                ></i\r\n                                                >¡Añadido a leídos!\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <pagination-controls\r\n                (pageChange)=\"p = $event\"\r\n            ></pagination-controls>\r\n        </div>\r\n    </form>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/busqueda-titulo/busqueda-titulo.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/busqueda-titulo/busqueda-titulo.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-custom {\n  margin: 5% auto; }\n\n.container-custom small {\n  color: red; }\n\n.bloque {\n  max-width: 540px;\n  display: inline-block;\n  padding: 3%; }\n\n.card-custom {\n  text-align: center;\n  margin: 2%; }\n\n.portada {\n  width: 50%;\n  margin: 0 auto; }\n\n.portada img.card-img {\n  height: 215px;\n  max-width: 150px;\n  width: 134.5px; }\n\n.card-custom .card-body {\n  padding: 0 7%;\n  height: 100%; }\n\n.autor {\n  margin: 0; }\n\n.button-box {\n  margin-top: 15px; }\n\n.button-box button {\n  margin: 0 5px; }\n\n.button-box .btn-warning {\n  cursor: auto; }\n\n.modal-button {\n  text-align: center;\n  margin-top: 1rem; }\n\n.modal-header {\n  background: -ms-linear-gradient(25deg, #CE0AFF 0, #429AD5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1');\n  background: linear-gradient(25deg, #CE0AFF 0, #429AD5 100%);\n  color: white; }\n\n.modal-body {\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  background: -ms-linear-gradient(360deg, #EBF6FF 0, #6FB1E3 100%);\n  /* IE10+ */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1');\n  /* for IE */\n  background: linear-gradient(360deg, #FFFFFF 0, #6FB1E3 100%);\n  /* W3C */ }\n\n.modal-body .genial {\n  background-color: #1fa8e0 !important;\n  border-color: #1fa8e0 !important;\n  color: white; }\n\n.modal-body img {\n  width: 30%;\n  display: block;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGVzL0Rlc2t0b3AvREFXMi9mcm9udGVuZC1zZXBhcmFkby1kZWYvc3JjL2FwcC9jb21wb25lbnRzL2J1c3F1ZWRhLXRpdHVsby9idXNxdWVkYS10aXR1bG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksVUFBVTtFQUNWLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFNBQVMsRUFBQTs7QUFHYjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZLEVBQUE7O0FBSWhCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUtJLCtEQUErRDtFQUMvRCxvSEFBb0g7RUFDcEgsMkRBQTJEO0VBQzNELFlBQVksRUFBQTs7QUFHaEI7RUFFSSxXQUFBO0VBRUEsb0JBQUE7RUFFQSx5QkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0VBQWdFO0VBQ2hFLFVBQUE7RUFDQSxvSEFBb0g7RUFDcEgsV0FBQTtFQUNBLDREQUE0RDtFQUM1RCxRQUFBLEVBQVM7O0FBR2I7RUFDSSxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0VBQ2hDLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxVQUFVO0VBQ1YsY0FBYztFQUNkLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVzcXVlZGEtdGl0dWxvL2J1c3F1ZWRhLXRpdHVsby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItY3VzdG9tIHtcclxuICAgIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG5cclxuLmNvbnRhaW5lci1jdXN0b20gc21hbGwge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmJsb3F1ZSB7XHJcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbn1cclxuXHJcbi5jYXJkLWN1c3RvbSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG4ucG9ydGFkYSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5wb3J0YWRhIGltZy5jYXJkLWltZyB7XHJcbiAgICBoZWlnaHQ6IDIxNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgIHdpZHRoOiAxMzQuNXB4O1xyXG59XHJcblxyXG4uY2FyZC1jdXN0b20gLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwIDclO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYXV0b3Ige1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYnV0dG9uLWJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uLWJveCBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxufVxyXG5cclxuLmJ1dHRvbi1ib3ggLmJ0bi13YXJuaW5nIHtcclxuICAgIGN1cnNvcjogYXV0bztcclxufVxyXG5cclxuLy8gZXN0aWxvcyBtb2RhbFxyXG4ubW9kYWwtYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMjVkZWcsICNDRTBBRkYgMCwgIzQyOUFENSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAyNWRlZywgY29sb3Itc3RvcCgwLCBDRTBBRkYpLCBjb2xvci1zdG9wKDEwMCUsIDQyOUFENSkpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMjVkZWcsICNDRTBBRkYgMCwgIzQyOUFENSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgyNWRlZywgI0NFMEFGRiAwLCAjNDI5QUQ1IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgyNWRlZywgI0NFMEFGRiAwLCAjNDI5QUQ1IDEwMCUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzEzMDFGRScsIGVuZENvbG9yc3RyPScjRjRGNjBDJywgR3JhZGllbnRUeXBlPScxJyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjVkZWcsICNDRTBBRkYgMCwgIzQyOUFENSAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRUJGNkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBGRjMuNisgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAzNjBkZWcsIGNvbG9yLXN0b3AoMCwgRUJGNkZGKSwgY29sb3Itc3RvcCgxMDAlLCA2RkIxRTMpKTtcclxuICAgIC8qIENocm9tZSxTYWZhcmk0KyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRUJGNkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0VCRjZGRiAwLCAjNkZCMUUzIDEwMCUpO1xyXG4gICAgLyogT3BlcmEgMTEuMTArICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0VCRjZGRiAwLCAjNkZCMUUzIDEwMCUpO1xyXG4gICAgLyogSUUxMCsgKi9cclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyMxMzAxRkUnLCBlbmRDb2xvcnN0cj0nI0Y0RjYwQycsIEdyYWRpZW50VHlwZT0nMScpO1xyXG4gICAgLyogZm9yIElFICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRkZGRkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBXM0MgKi9cclxufVxyXG5cclxuLm1vZGFsLWJvZHkgLmdlbmlhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZhOGUwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMxZmE4ZTAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkgaW1nIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/busqueda-titulo/busqueda-titulo.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/busqueda-titulo/busqueda-titulo.component.ts ***!
  \*************************************************************************/
/*! exports provided: BusquedaTituloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaTituloComponent", function() { return BusquedaTituloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");





// Services

var BusquedaTituloComponent = /** @class */ (function () {
    function BusquedaTituloComponent(item, formBuilder, router, modalService) {
        this.item = item;
        this.formBuilder = formBuilder;
        this.router = router;
        this.modalService = modalService;
        this.invalido = false;
        this.respuesta = false;
        this.libroLeido = false;
        this.libroAdded = false;
        this.noLibro = false;
        this.allReadedBooks = [];
        this.p = 1;
        this.errorGb = false;
    }
    BusquedaTituloComponent.prototype.ngOnInit = function () {
        var _this = this;
        // COMPRUEBO TOKEN CORRECTO
        this.item.postCheckToken().subscribe(function (res) {
            if (!res) {
                _this.item.setActivate(false);
                _this.item.logout();
            }
        });
        // OBTENGO LOS IDS DE TODOS LOS LIBROS QUE HA LEÍDO EL USUARIO
        this.item.takeAllReadedBooks().subscribe(function (res) {
            _this.allReadedBooks = res;
        });
        // FORMULARIO REACTIVO
        this.formTitulo = this.formBuilder.group({
            titulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    // BUSCAR TÍTULO EN LA API GOOGLE BOOKS
    BusquedaTituloComponent.prototype.enviarTitulo = function (formTitulo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.formTitulo.status === 'INVALID')) return [3 /*break*/, 1];
                        this.invalido = true;
                        return [3 /*break*/, 3];
                    case 1:
                        this.titulo = formTitulo.value.titulo;
                        return [4 /*yield*/, this.item.getSearchByTit(this.titulo).subscribe(function (res) {
                                if (res.totalItems > 0) {
                                    if (res.items.length > 0) {
                                        _this.respuesta = true;
                                        _this.errorGb = false;
                                        _this.noLibro = false;
                                        _this.listalib = res.items.slice();
                                    }
                                }
                                else {
                                    _this.noLibro = true;
                                }
                            }, function (err) {
                                if (err.status === 503) {
                                    _this.errorGb = true;
                                }
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // AÑADIR LIBRO A LEÍDOS
    BusquedaTituloComponent.prototype.addLeido = function (template, libro) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var libroDef;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        libroDef = {
                            titulo: libro.volumeInfo.title,
                            autor: libro.volumeInfo.authors
                                ? libro.volumeInfo.authors[0]
                                : "Autor no disponible",
                            editorial: libro.volumeInfo.publisher
                                ? libro.volumeInfo.publisher
                                : "Editorial no disponible",
                            sinopsis: libro.volumeInfo.description
                                ? libro.volumeInfo.description
                                : "Información no disponible",
                            portada: !libro.volumeInfo.imageLinks ? '../../../assets/portada.png' : libro.volumeInfo.imageLinks.smallThumbnail,
                            idGB: libro.id
                        };
                        return [4 /*yield*/, this.item.addLeido(libroDef).subscribe(function (res) {
                                if (res) {
                                    if (res.added) {
                                        _this.allReadedBooks.push(res.libro[0]);
                                        _this.openModal(template);
                                    }
                                }
                                else {
                                    _this.item.logout();
                                }
                            }, function (err) {
                                if (err.status === 404) {
                                    _this.router.navigate(['/pag404']);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // ABRIR MODAL
    BusquedaTituloComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    // CERRAR MODAL
    BusquedaTituloComponent.prototype.closeModal = function (template) {
        this.modalRef.hide();
    };
    // COMPROBAR LIBRO LEÍDO
    BusquedaTituloComponent.prototype.existeLibroLeido = function (idGB) {
        return this.allReadedBooks.some(function (libro) {
            return libro.idGB === idGB;
        });
    };
    BusquedaTituloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-busqueda-titulo",
            template: __webpack_require__(/*! ./busqueda-titulo.component.html */ "./src/app/components/busqueda-titulo/busqueda-titulo.component.html"),
            styles: [__webpack_require__(/*! ./busqueda-titulo.component.scss */ "./src/app/components/busqueda-titulo/busqueda-titulo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], BusquedaTituloComponent);
    return BusquedaTituloComponent;
}());



/***/ }),

/***/ "./src/app/components/editar-perfil/editar-perfil.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/editar-perfil/editar-perfil.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container container-fluid container-editar\">\r\n    <div class=\"perfil\">\r\n        <form class=\"col s12\" [formGroup]=\"editForm\">\r\n            <div class=\"form-group\">\r\n                <label for=\"nombre\">Nombre*</label>\r\n                <input formControlName=\"nombre\" type=\"text\" class=\"form-control\" />\r\n                <span class=\"helper-text\" style=\"color:red\" *ngIf=\"editForm.get('nombre').hasError('required') && editForm.get('nombre').touched\">Campo obligatorio</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"apellidos\">Apellidos*</label>\r\n                <input formControlName=\"apellidos\" type=\"text\" class=\"form-control\" />\r\n                <span class=\"helper-text\" style=\"color:red\" *ngIf=\"editForm.get('apellidos').hasError('required') && editForm.get('apellidos').touched\">Campo obligatorio</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"email\">Email*</label>\r\n                <input formControlName=\"email\" type=\"email\" class=\"form-control\" />\r\n                <span class=\"helper-text\" style=\"color:red\" *ngIf=\"editForm.get('email').hasError('required') && editForm.get('email').touched\">Campo obligatorio</span>\r\n                <span class=\"helper-text\" style=\"color:red\" *ngIf=\"editForm.get('email').hasError('pattern') && editForm.get('email').touched\">Formato incorrecto</span>\r\n                <span class=\"helper-text\" style=\"color:red\" *ngIf=\"editForm.get('email').hasError('emailTaken') && editForm.get('email').touched\">Este email ya está registrado</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"usuario\">Usuario*</label>\r\n                <input formControlName=\"usuario\" type=\"text\" class=\"form-control\" />\r\n                <span class=\"helper-text\" style=\"color:red\" *ngIf=\"editForm.get('usuario').hasError('required') && editForm.get('usuario').touched\">Campo obligatorio</span>\r\n                <span class=\"helper-text\" style=\"color:red\" *ngIf=\"editForm.get('usuario').hasError('minlength') && editForm.get('usuario').touched\">Mínimo 4 caracteres</span>\r\n                <span class=\"helper-text\" style=\"color:red\" *ngIf=\"editForm.get('usuario').hasError('userTaken') && editForm.get('usuario').touched\">El usuario ya existe</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"pass\">Contraseña*</label>\r\n                <input formControlName=\"contrasena\" type=\"password\" class=\"form-control\" />\r\n                <span class=\"helper-text\" style=\"color:red\" *ngIf=\"editForm.get('contrasena').hasError('required') && editForm.get('contrasena').touched\">Campo obligatorio</span>\r\n                <span class=\"helper-text\" style=\"color:red\" *ngIf=\"editForm.get('contrasena').hasError('minlength') && editForm.get('contrasena').touched\">Mínimo 4 caracteres</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"pass2\">Confirmar contraseña</label>\r\n                <input formControlName=\"contrasena2\" type=\"password\" class=\"form-control\" />\r\n                <span class=\"helper-text\" style=\"color:red\" *ngIf=\"editForm.get('contrasena2').invalid && editForm.get('contrasena2').touched && editForm.get('contrasena').touched\">Las contraseñas no coinciden</span>\r\n            </div>\r\n            <div class=\"div-btn-submit editButton\">\r\n                <button class=\"btn btn-outline-danger volver\" type=\"\" name=\"action\" [routerLink]=\"['/perfil']\"><i class=\"fas fa-arrow-left\"></i>\r\n                        Volver\r\n                        </button>\r\n                <button class=\"btn btn-outline-success\" type=\"submit\" name=\"action\" [disabled]=\"editForm.invalid\" (click)=\"editar(editForm)\"><i class=\"fas fa-paper-plane\"></i>\r\n                        Editar\r\n                        </button>\r\n            </div><br>\r\n            <span class=\"helper-text\" style=\"color:red\" *ngIf=\"this.invalido\">Datos incorrectos</span>\r\n            <span class=\"helper-text\" style=\"color:green; text-align: center; display: block;\" *ngIf=\"this.editado\">Usuario modificado correctamente, espere a ser redirigido al login para volver a entrar correctamente</span>\r\n        </form>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/editar-perfil/editar-perfil.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/editar-perfil/editar-perfil.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-editar {\n  padding-top: 5%;\n  padding-bottom: 5%; }\n\n.editButton {\n  text-align: center; }\n\n.volver {\n  margin-right: 30px; }\n\nlabel {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGVzL0Rlc2t0b3AvREFXMi9mcm9udGVuZC1zZXBhcmFkby1kZWYvc3JjL2FwcC9jb21wb25lbnRzL2VkaXRhci1wZXJmaWwvZWRpdGFyLXBlcmZpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdGFyLXBlcmZpbC9lZGl0YXItcGVyZmlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1lZGl0YXIge1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uZWRpdEJ1dHRvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi52b2x2ZXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/editar-perfil/editar-perfil.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/editar-perfil/editar-perfil.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditarPerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPerfilComponent", function() { return EditarPerfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/custom-validators.service */ "./src/app/services/custom-validators.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var EditarPerfilComponent = /** @class */ (function () {
    function EditarPerfilComponent(formBuilder, item, customValidators, router) {
        this.formBuilder = formBuilder;
        this.item = item;
        this.customValidators = customValidators;
        this.router = router;
        this.invalido = false;
        this.editado = false;
        this.regex = '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$';
        this.usuario = {};
        this.editForm = this.formBuilder.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            apellidos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.regex)]],
            usuario: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)
                ], this.customValidators.userValidator.bind(this)
            ],
            contrasena: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]],
            contrasena2: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.customValidators.passwordValidator]
            ]
        });
    }
    EditarPerfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        // COMPRUEBO TOKEN CORRECTO
        this.item
            .postCheckToken()
            .subscribe(function (res) {
            if (!res) {
                _this.item.setActivate(false);
                _this.item.logout();
            }
        });
        this.crearFormulario();
    };
    // OBTENGO TODOS LOS DATOS DEL USUARIO
    EditarPerfilComponent.prototype.takeUser = function (callback) {
        var _this = this;
        this.item.takeUser().subscribe(function (res) {
            _this.usuario = res[0];
            _this.idUsuario = _this.usuario.idUsuario;
            callback(_this.usuario);
        });
    };
    // RESETEO EL FORMULARIO PARA METER LOS VALORES
    EditarPerfilComponent.prototype.crearFormulario = function () {
        var _this = this;
        this.takeUser(function (usuario) {
            _this.editForm.reset(usuario);
            _this.editForm.get('usuario').setAsyncValidators(_this.userValidatorEditar(_this.usuario));
            _this.editForm.get('email').setAsyncValidators(_this.emailValidatorEditar(_this.usuario));
        });
    };
    // EDITAR USUARIO
    EditarPerfilComponent.prototype.editar = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.editForm.status === 'INVALID')) return [3 /*break*/, 1];
                        this.invalido = true;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.item.updateUser(form.value, this.idUsuario).subscribe(function (res) {
                            if (res) {
                                _this.editado = true;
                                _this.item.saveUserSessionStorage(form.value.usuario);
                                _this.editForm.reset();
                                setTimeout(function () {
                                    _this.router.navigate(['/home']);
                                }, 5000);
                            }
                        }, function (err) {
                            if (err.status === 404) {
                                _this.router.navigate(['/pag404']);
                            }
                        })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // VALIDACIÓN ASÍNCRONA PARA COMPROBAR SI EXISTE USERNAME EN LA BBDD, SÍ PERMITE PONER EL QUE YA TENÍA
    EditarPerfilComponent.prototype.userValidatorEditar = function (usuario) {
        var _this = this;
        return function (control) {
            if (control && (control.value !== null || control.value !== undefined)) {
                var userValue = control.value;
                if (userValue !== usuario.username) {
                    return _this.item.searchUser(userValue).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
                        return res.length > 0 ? { userTaken: true } : null;
                    }));
                }
                else {
                    return rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"].create(function (observer) {
                        observer.next(null);
                    });
                }
            }
        };
    };
    // VALIDACIÓN ASÍNCRONA PARA COMPROBAR SI EXISTE EMAIL EN LA BBDD, SÍ PERMITE PONER EL QUE YA TENÍA
    EditarPerfilComponent.prototype.emailValidatorEditar = function (usuario) {
        var _this = this;
        return function (control) {
            if (control && (control.value !== null || control.value !== undefined)) {
                var emailValue = control.value;
                if (emailValue !== usuario.email) {
                    return _this.item.searchEmail(emailValue).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
                        return res.length > 0 ? { emailTaken: true } : null;
                    }));
                }
                else {
                    return rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"].create(function (observer) {
                        observer.next(null);
                    });
                }
            }
        };
    };
    EditarPerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-editar-perfil',
            template: __webpack_require__(/*! ./editar-perfil.component.html */ "./src/app/components/editar-perfil/editar-perfil.component.html"),
            styles: [__webpack_require__(/*! ./editar-perfil.component.scss */ "./src/app/components/editar-perfil/editar-perfil.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"], _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidatorsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditarPerfilComponent);
    return EditarPerfilComponent;
}());



/***/ }),

/***/ "./src/app/components/favoritos/favoritos.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/favoritos/favoritos.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"jumbotron jumbotron-fluid\" *ngIf=\"this.noFavoritos\">\r\n    <div class=\"container\">\r\n        <h3 class=\"display-4\">Tu lista está vacía</h3>\r\n        <p class=\"lead\">¡Añade tantos favoritos como quieras!</p>\r\n        <button type=\"button\" class=\"btn btn-outline-info mr-4 mb-2\" [routerLink]=\"['/leidos']\">\r\n            Ir a leídos\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-outline-info mb-2\" [routerLink]=\"['/perfil']\">\r\n            Volver a perfil\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"respuesta\" *ngIf=\"!this.noFavoritos\">\r\n        <div class=\"volver-perfil\">\r\n                <a [routerLink]=\"['/perfil']\" class=\"volver\"\r\n                    ><i class=\"fas fa-arrow-left mr-2\"></i>Volver a Perfil</a\r\n                >\r\n        </div>\r\n    <div class=\"col-6 bloque animated fadeIn fast\" *ngFor=\"let k of this.allFavsBooks | paginate: { itemsPerPage: 6, currentPage: p }\">\r\n        <div class=\"row no-gutters card-custom\">\r\n            <div class=\"col-md-3 portada\">\r\n                <img [src]=\"k.portada\" class=\"card-img\" alt=\"{{ k.titulo }}\" />\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">\r\n                        {{ k.titulo }}\r\n                    </h5>\r\n                    <p class=\"card-text autor\">\r\n                        {{ k.autor }}\r\n                    </p>\r\n                    <div class=\"button-box\">\r\n                        <button type=\"button\" class=\"btn btn-outline-info btn-sm\" [routerLink]=\"[\r\n                                    '/libro-detalle-leido',\r\n                                    k.idLibro\r\n                                ]\"><i class=\"fas fa-book mr-2\"></i>\r\n                            Info\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-sm favorito\" (click)=\"openModalEliminarFavorito(templateEliminarFavorito)\"><i class=\"fas fa-heart mr-2\"\r\n                                style=\"color: red\"></i>Favorito</button>\r\n\r\n                        <ng-template #templateEliminarFavorito>\r\n                            <div class=\"modal-header\">\r\n                                <h4 class=\"modal-title pull-left\">\r\n                                    {{ k.titulo }}\r\n                                </h4>\r\n                                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <img src=\"../../../assets/corazon.png\" alt=\"libro\" style=\"margin-bottom: 20px\" /> ¿Realmente desea eliminar este libro de su lista de favoritos?\r\n                                <div class=\"modal-button\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"\r\n                                    borrarFavorito(k)\r\n                                \"><i class=\"far fa-thumbs-up mr-2\"></i>\r\n                                        Sí\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalRef.hide()\"><i\r\n                                            class=\"fas fa-times mr-2\"></i>\r\n                                        Cancelar\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n\r\n                        <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"openModalEliminarLeido(templateEliminarLeido)\"><i\r\n                                class=\"far fa-trash-alt mr-2\"></i>\r\n                            Eliminar leído\r\n                        </button>\r\n\r\n                        <ng-template #templateEliminarLeido>\r\n                            <div class=\"modal-header\">\r\n                                <h4 class=\"modal-title pull-left\">\r\n                                    {{ k.titulo }}\r\n                                </h4>\r\n                                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <img src=\"../../../assets/addLeido.png\" alt=\"libro\" style=\"margin-bottom: 20px\" /> ¿Realmente desea eliminar este libro de su lista de libros leídos?\r\n                                <div class=\"modal-button\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"\r\n                                    borrarLeido(k)\r\n                                \"><i class=\"far fa-thumbs-up mr-2\"></i>\r\n                                        Sí\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalRef.hide()\"><i\r\n                                            class=\"fas fa-times mr-2\"></i>\r\n                                        Cancelar\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/favoritos/favoritos.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/favoritos/favoritos.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-custom {\n  margin: 5% auto; }\n\n.container-custom small {\n  color: red; }\n\n.bloque {\n  max-width: 540px;\n  display: inline-block;\n  padding: 3%; }\n\n.card-custom {\n  text-align: center;\n  margin: 2%; }\n\n.portada {\n  width: 50%;\n  margin: 0 auto; }\n\n.portada img.card-img {\n  height: 215px;\n  max-width: 150px;\n  width: 134.5px; }\n\n.card-custom .card-body {\n  padding: 0 7%;\n  height: 100%; }\n\n.autor {\n  margin: 0; }\n\n.button-box {\n  margin-top: 15px; }\n\n.button-box button {\n  margin: 5px; }\n\n.modal-button {\n  text-align: center;\n  margin-top: 1rem; }\n\n.modal-button button {\n  margin: 5px; }\n\n.modal-header {\n  background: -ms-linear-gradient(25deg, #CE0AFF 0, #429AD5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1');\n  background: linear-gradient(25deg, #CE0AFF 0, #429AD5 100%);\n  color: white; }\n\n.modal-body {\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  background: -ms-linear-gradient(360deg, #EBF6FF 0, #6FB1E3 100%);\n  /* IE10+ */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1');\n  /* for IE */\n  background: linear-gradient(360deg, #FFFFFF 0, #6FB1E3 100%);\n  /* W3C */ }\n\n.modal-body .genial {\n  background-color: #1fa8e0 !important;\n  border-color: #1fa8e0 !important;\n  color: white; }\n\n.modal-body img {\n  width: 20%;\n  display: block;\n  margin: 0 auto; }\n\n.favorito {\n  background-color: #ffd1d1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGVzL0Rlc2t0b3AvREFXMi9mcm9udGVuZC1zZXBhcmFkby1kZWYvc3JjL2FwcC9jb21wb25lbnRzL2Zhdm9yaXRvcy9mYXZvcml0b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksVUFBVTtFQUNWLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFNBQVMsRUFBQTs7QUFHYjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFdBQVcsRUFBQTs7QUFJZjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFLSSwrREFBK0Q7RUFDL0Qsb0hBQW9IO0VBQ3BILDJEQUEyRDtFQUMzRCxZQUFZLEVBQUE7O0FBR2hCO0VBRUksV0FBQTtFQUVBLG9CQUFBO0VBRUEseUJBQUE7RUFFQSxpQkFBQTtFQUNBLGdFQUFnRTtFQUNoRSxVQUFBO0VBQ0Esb0hBQW9IO0VBQ3BILFdBQUE7RUFDQSw0REFBNEQ7RUFDNUQsUUFBQSxFQUFTOztBQUdiO0VBQ0ksb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNoQyxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zhdm9yaXRvcy9mYXZvcml0b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWN1c3RvbSB7XHJcbiAgICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuXHJcbi5jb250YWluZXItY3VzdG9tIHNtYWxsIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5ibG9xdWUge1xyXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDMlO1xyXG59XHJcblxyXG4uY2FyZC1jdXN0b20ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyJTtcclxufVxyXG5cclxuLnBvcnRhZGEge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ucG9ydGFkYSBpbWcuY2FyZC1pbWcge1xyXG4gICAgaGVpZ2h0OiAyMTVweDtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTM0LjVweDtcclxufVxyXG5cclxuLmNhcmQtY3VzdG9tIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMCA3JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmF1dG9yIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ1dHRvbi1ib3gge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmJ1dHRvbi1ib3ggYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4vLyBlc3RpbG9zIG1vZGFsXHJcbi5tb2RhbC1idXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLm1vZGFsLWJ1dHRvbiBidXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMjVkZWcsICNDRTBBRkYgMCwgIzQyOUFENSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAyNWRlZywgY29sb3Itc3RvcCgwLCBDRTBBRkYpLCBjb2xvci1zdG9wKDEwMCUsIDQyOUFENSkpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMjVkZWcsICNDRTBBRkYgMCwgIzQyOUFENSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgyNWRlZywgI0NFMEFGRiAwLCAjNDI5QUQ1IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgyNWRlZywgI0NFMEFGRiAwLCAjNDI5QUQ1IDEwMCUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzEzMDFGRScsIGVuZENvbG9yc3RyPScjRjRGNjBDJywgR3JhZGllbnRUeXBlPScxJyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjVkZWcsICNDRTBBRkYgMCwgIzQyOUFENSAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRUJGNkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBGRjMuNisgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAzNjBkZWcsIGNvbG9yLXN0b3AoMCwgRUJGNkZGKSwgY29sb3Itc3RvcCgxMDAlLCA2RkIxRTMpKTtcclxuICAgIC8qIENocm9tZSxTYWZhcmk0KyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRUJGNkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0VCRjZGRiAwLCAjNkZCMUUzIDEwMCUpO1xyXG4gICAgLyogT3BlcmEgMTEuMTArICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0VCRjZGRiAwLCAjNkZCMUUzIDEwMCUpO1xyXG4gICAgLyogSUUxMCsgKi9cclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyMxMzAxRkUnLCBlbmRDb2xvcnN0cj0nI0Y0RjYwQycsIEdyYWRpZW50VHlwZT0nMScpO1xyXG4gICAgLyogZm9yIElFICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRkZGRkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBXM0MgKi9cclxufVxyXG5cclxuLm1vZGFsLWJvZHkgLmdlbmlhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZhOGUwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMxZmE4ZTAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkgaW1nIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZmF2b3JpdG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDFkMTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/favoritos/favoritos.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favoritos/favoritos.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosComponent", function() { return FavoritosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");





var FavoritosComponent = /** @class */ (function () {
    function FavoritosComponent(item, router, modalService) {
        this.item = item;
        this.router = router;
        this.modalService = modalService;
        this.visible = false;
        this.ids = [];
        this.noLeidos = false;
        this.noFavoritos = false;
        this.respuesta = false;
        this.borrado = false;
        this.allReadedBooks = [];
        this.allFavsBooks = [];
        this.p = 1;
    }
    FavoritosComponent.prototype.ngOnInit = function () {
        var _this = this;
        // COMPRUEBO TOKEN CORRECTO
        this.item
            .postCheckToken()
            .subscribe(function (res) {
            if (!res) {
                _this.item.setActivate(false);
                _this.item.logout();
            }
            else {
                _this.visible = true;
            }
        });
        // OBTENGO TODOS LOS LIBROS QUE HA LEÍDO EL USUARIO Y LOS METO EN UN ARRAY
        this.item.takeAllReadedBooks().subscribe(function (res) {
            if (res) {
                if (res.length > 0) {
                    _this.allReadedBooks = res;
                }
                else {
                    _this.noLeidos = true;
                }
            }
        });
        // ME TRAIGO TODOS LOS LIBROS FAVORITOS DEL USUARIO Y LOS METO EN UN ARRAY
        this.item.takeAllFavsBooks().subscribe(function (res) {
            if (res.length > 0) {
                _this.allFavsBooks = res;
            }
            else {
                _this.noFavoritos = true;
            }
        });
    };
    // ABRIR MODAL ELIMINAR LEÍDO
    FavoritosComponent.prototype.openModalEliminarLeido = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    // ABRIR MODAL ELIMINAR FAVORITO
    FavoritosComponent.prototype.openModalEliminarFavorito = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    // CERRAR MODAL
    FavoritosComponent.prototype.closeModal = function (template) {
        this.modalRef.hide();
    };
    // BORRAR LIBRO DE LISTA LEÍDOS
    FavoritosComponent.prototype.borrarLeido = function (k) {
        var _this = this;
        this.item.borrarLeido(k.idLibro).subscribe(function (res) {
            setTimeout(function () {
                var index = _this.allFavsBooks.indexOf(k);
                _this.allFavsBooks.splice(index, 1);
                if (_this.allFavsBooks.length == 0) {
                    _this.noLeidos = true;
                }
            }, 1000);
        }, function (err) {
            if (err.status === 404) {
                _this.modalRef.hide();
                _this.router.navigate(['/pag404']);
            }
        });
        this.modalRef.hide();
    };
    // BORRAR LIBRO DE LISTA FAVORITO
    FavoritosComponent.prototype.borrarFavorito = function (k) {
        var _this = this;
        this.item.borrarFavorito(k.id).subscribe(function (res) {
            setTimeout(function () {
                var index = _this.allFavsBooks.indexOf(k);
                _this.allFavsBooks.splice(index, 1);
                if (_this.allFavsBooks.length == 0) {
                    _this.noFavoritos = true;
                }
            }, 1000);
        }, function (err) {
            if (err.status === 404) {
                _this.modalRef.hide();
                _this.router.navigate(['/pag404']);
            }
        });
        this.modalRef.hide();
    };
    FavoritosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favoritos',
            template: __webpack_require__(/*! ./favoritos.component.html */ "./src/app/components/favoritos/favoritos.component.html"),
            styles: [__webpack_require__(/*! ./favoritos.component.scss */ "./src/app/components/favoritos/favoritos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], FavoritosComponent);
    return FavoritosComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"footer footer-custom fixed-bottom\">\r\n    <small>Ángeles Bueno Aguilar</small>\r\n    <small>2º DAW. IES Campanillas</small>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  text-align: right;\n  color: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  background-color: #e4e9ea !important;\n  padding: .5rem 1rem; }\n\n.footer small {\n  color: #212529 !important;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGVzL0Rlc2t0b3AvREFXMi9mcm9udGVuZC1zZXBhcmFkby1kZWYvc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsK0JBQThCO0VBQzlCLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU5ZWEgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbn1cclxuXHJcbi5mb290ZXIgc21hbGwge1xyXG4gICAgY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Icons Materialize -->\r\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n    <div id=\"formContent\">\r\n        <img src=\"../../../assets/logo-libroteca.png\" alt=\"logo libroteca\" class=\"logo\">\r\n        <!-- <div id=\"loginTitle\">La Libroteca</div> -->\r\n\r\n        <form [formGroup]=\"loginForm\">\r\n            <input type=\"text\" id=\"login\" class=\"fadeIn second\" formControlName=\"usr\" placeholder=\"Usuario\">\r\n            <input type=\"password\" id=\"password\" class=\"fadeIn third\" formControlName=\"pwd\" placeholder=\"Contraseña\">\r\n            <button class=\"btn-submit\" type=\"submit\" name=\"action\" [disabled]=\"loginForm.invalid\" (click)=\"login()\">Login</button>\r\n            <div>\r\n                <small *ngIf=\"this.invalido\" style=\"color: red\">Formulario incompleto</small>\r\n                <small *ngIf=\"this.noAuth\" style=\"color: red\">Nombre de usuario o contraseña incorrectos</small>\r\n            </div>\r\n        </form>\r\n\r\n        <div id=\"formFooter\">\r\n            <a class=\"underlineHover\" [routerLink]=\"['/registro']\">Regístrate</a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  padding: 5% 0;\n  width: 60%; }\n\n/* BASIC */\n\nhtml {\n  background-color: #56baed; }\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh; }\n\na {\n  color: #14c3db;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400; }\n\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc; }\n\n.custom-icon {\n  font-size: 4rem; }\n\n/* STRUCTURE */\n\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n  margin: 5% auto; }\n\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center; }\n\n#formFooter {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px; }\n\n/* TABS */\n\nh2.inactive {\n  color: #cccccc; }\n\nh2.active {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9; }\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button],\nbutton[type=submit],\ninput[type=reset] {\n  background-color: #0dc3db;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 20px 20px;\n  transition: all 0.3s ease-in-out; }\n\ninput[type=button]:hover,\nbutton[type=submit]:hover,\ninput[type=reset]:hover {\n  background-color: #39ace7; }\n\ninput[type=button]:active,\nbutton[type=submit]:active,\ninput[type=reset]:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95); }\n\ninput[type=text] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\n\ninput[type=text]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\n\ninput[type=text]:placeholder {\n  color: #cccccc; }\n\ninput[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\n\ninput[type=password]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\n\ninput[type=password]:placeholder {\n  color: #cccccc; }\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s; }\n\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n\n/* Simple CSS3 Fade-in Animation */\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #14c3db;\n  content: \"\";\n  transition: width 0.2s; }\n\n.underlineHover:hover {\n  color: #0d0d0d; }\n\n.underlineHover:hover:after {\n  width: 100%; }\n\n/* OTHERS */\n\n*:focus {\n  outline: none; }\n\n#icon {\n  width: 60%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGVzL0Rlc2t0b3AvREFXMi9mcm9udGVuZC1zZXBhcmFkby1kZWYvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixVQUFVLEVBQUE7O0FBSWQsVUFBQTs7QUFFQTtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtDQUFrQztFQUNsQyxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWUsRUFBQTs7QUFJbkIsY0FBQTs7QUFFQTtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWUsRUFBQTs7QUFHbkI7RUFFSSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBRVosNENBQTRDO0VBQzVDLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQjtFQUVsQiw0QkFBNEIsRUFBQTs7QUFJaEMsU0FBQTs7QUFFQTtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsZ0NBQWdDLEVBQUE7O0FBSXBDLG1CQUFBOztBQUVBOzs7RUFHSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBRWYsaURBQWlEO0VBRWpELDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFLMUIsZ0NBQWdDLEVBQUE7O0FBR3BDOzs7RUFHSSx5QkFBeUIsRUFBQTs7QUFHN0I7OztFQUlJLDhCQUE4QjtFQUc5QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YseUJBQXlCO0VBS3pCLGdDQUFnQztFQUVoQyw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxzQkFBc0I7RUFDdEIsZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVix5QkFBeUI7RUFLekIsZ0NBQWdDO0VBRWhDLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLHNCQUFzQjtFQUN0QixnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSxjQUFjLEVBQUE7O0FBSWxCLGVBQUE7O0FBR0EsdUNBQUE7O0FBRUE7RUFDSSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJO0lBQ0ksVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQ0FBbUMsRUFBQTtFQUV2QztJQUNJLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsZUFBZSxFQUFBLEVBQUE7O0FBSXZCO0VBQ0k7SUFDSSxVQUFVO0lBQ1YsMkNBQTJDO0lBQzNDLG1DQUFtQyxFQUFBO0VBRXZDO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixlQUFlLEVBQUEsRUFBQTs7QUFLdkIsa0NBQUE7O0FBRUE7RUFDSTtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0ksVUFBVSxFQUFBLEVBQUE7O0FBYWxCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLFVBQVUsRUFBQSxFQUFBOztBQUlsQjtFQUNJLFVBQVU7RUFDVixtQ0FBbUM7RUFFbkMsMkJBQTJCO0VBQzNCLHFDQUFxQztFQUVyQyw2QkFBNkI7RUFDN0IsOEJBQThCO0VBRTlCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLDZCQUE2QjtFQUU3QixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSw2QkFBNkI7RUFFN0IscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLDJCQUEyQjtFQUUzQixtQkFBbUIsRUFBQTs7QUFJdkIsa0NBQUE7O0FBRUE7RUFDSSxjQUFjO0VBQ2QsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLFdBQVcsRUFBQTs7QUFJZixXQUFBOztBQUVBO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgcGFkZGluZzogNSUgMDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcblxyXG4vKiBCQVNJQyAqL1xyXG5cclxuaHRtbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICMxNGMzZGI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuLmN1c3RvbS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxufVxyXG5cclxuXHJcbi8qIFNUUlVDVFVSRSAqL1xyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG5cclxuI2Zvcm1Db250ZW50IHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZm9ybUZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxufVxyXG5cclxuXHJcbi8qIFRBQlMgKi9cclxuXHJcbmgyLmluYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5oMi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxufVxyXG5cclxuXHJcbi8qIEZPUk0gVFlQT0dSQVBIWSovXHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl0sXHJcbmJ1dHRvblt0eXBlPXN1Ym1pdF0sXHJcbmlucHV0W3R5cGU9cmVzZXRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZGMzZGI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsIDE4NiwgMjMzLCAwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LCAxODYsIDIzMywgMC40KTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMjBweCAyMHB4IDIwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlcixcclxuYnV0dG9uW3R5cGU9c3VibWl0XTpob3ZlcixcclxuaW5wdXRbdHlwZT1yZXNldF06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSxcclxuYnV0dG9uW3R5cGU9c3VibWl0XTphY3RpdmUsXHJcbmlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuXHJcbi8qIEFOSU1BVElPTlMgKi9cclxuXHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXHJcblxyXG4uZmFkZUluRG93biB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmFkZUluIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIGVhc2UtaW4gMTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuXHJcbi5mYWRlSW4uZmlyc3Qge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxufVxyXG5cclxuLmZhZGVJbi5zZWNvbmQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxufVxyXG5cclxuLmZhZGVJbi50aGlyZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG59XHJcblxyXG4uZmFkZUluLmZvdXJ0aCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG59XHJcblxyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuXHJcbi51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNGMzZGI7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcclxufVxyXG5cclxuLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4vKiBPVEhFUlMgKi9cclxuXHJcbio6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2ljb24ge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(formBuilder, item, router) {
        this.formBuilder = formBuilder;
        this.item = item;
        this.router = router;
        this.noAuth = false;
        this.invalido = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // FORMULARIO REACTIVO
        this.loginForm = this.formBuilder.group({
            usr: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pwd: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        // SIEMPRE QUE SE ACCEDE A LA HOME, SE LIMPIA SESSIONSTORAGE
        if (this.item.takeTokenSessionStorage ||
            this.item.takeUsernameSessionStorage) {
            sessionStorage.clear();
        }
    };
    // LOGIN
    HomeComponent.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loginForm.status === "INVALID")) return [3 /*break*/, 1];
                        this.invalido = true;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.item
                            .postCheckUser(this.loginForm.value)
                            .subscribe(function (res) {
                            if (!res) {
                                _this.noAuth = true;
                                _this.item.setActivate(false);
                            }
                            else {
                                _this.noAuth = false;
                                _this.item.saveTokenSessionStorage(res.token);
                                _this.item.saveUserSessionStorage(res.usuario.username);
                                setTimeout(function () { return _this.router.navigate(["/inicio"]); }, 2000);
                                _this.item.setActivate(true);
                            }
                        })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/inicio/inicio.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.visible\">\r\n    <app-navbar></app-navbar>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"carousel slide\" id=\"carousel-195979\">\r\n            <ol class=\"carousel-indicators\">\r\n                <li\r\n                    data-slide-to=\"0\"\r\n                    data-target=\"#carousel-195979\"\r\n                    class=\"active\"\r\n                ></li>\r\n                <li data-slide-to=\"1\" data-target=\"#carousel-195979\"></li>\r\n                <li data-slide-to=\"2\" data-target=\"#carousel-195979\"></li>\r\n            </ol>\r\n            <div class=\"carousel-inner\">\r\n                <div class=\"carousel-item active\">\r\n                    <img\r\n                        class=\"d-block w-100\"\r\n                        alt=\"Carousel Bootstrap First\"\r\n                        src=\"../../../assets/1.jpeg\"\r\n                    />\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img\r\n                        class=\"d-block w-100\"\r\n                        alt=\"Carousel Bootstrap Second\"\r\n                        src=\"../../../assets/2.jpeg\"\r\n                    />\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                    <img\r\n                        class=\"d-block w-100\"\r\n                        alt=\"Carousel Bootstrap Third\"\r\n                        src=\"../../../assets/3.jpeg\"\r\n                    />\r\n                </div>\r\n            </div>\r\n            <a\r\n                class=\"carousel-control-prev\"\r\n                href=\"#carousel-195979\"\r\n                data-slide=\"prev\"\r\n                ><span class=\"carousel-control-prev-icon\"></span>\r\n                <span class=\"sr-only\">Previous</span></a\r\n            >\r\n            <a\r\n                class=\"carousel-control-next\"\r\n                href=\"#carousel-195979\"\r\n                data-slide=\"next\"\r\n                ><span class=\"carousel-control-next-icon\"></span>\r\n                <span class=\"sr-only\">Next</span></a\r\n            >\r\n        </div>\r\n    </div>\r\n    <div class=\"container-fluid principal\">\r\n        <a [routerLink]=\"['/busquedaTitulo']\">\r\n            <div class=\"container-fluid banner1\">\r\n                <div class=\"textoAnimado1\">\r\n                    BUSCA POR TÍTULOS\r\n                </div>\r\n            </div>\r\n        </a>\r\n        <a [routerLink]=\"['/busquedaAutor']\">\r\n            <div class=\"container-fluid banner2\">\r\n                <div class=\"textoAnimado2\">\r\n                    BUSCA POR AUTORES\r\n                </div>\r\n            </div>\r\n        </a>\r\n        <!-- <div class=\"textoCita\">\r\n            <div>\r\n                \"Un libro es el arma más efectiva contra la intolerancia e\r\n                ignorancia.\"\r\n            </div>\r\n            <small>Lyndon Baines Johnson</small>\r\n        </div> -->\r\n        <div class=\"canvasPadre\">\r\n            <canvas #myCanvas width=\"300\" height=\"200\"></canvas>\r\n        </div>\r\n        <div class=\"video\">\r\n            <iframe\r\n                src=\"https://www.youtube.com/embed/SKVcQnyEIT8\"\r\n                frameborder=\"0\"\r\n                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n                allowfullscreen\r\n            ></iframe>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"row\" style=\"margin: 5%\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n                <img\r\n                    class=\"card-img-top\"\r\n                    alt=\"Bootstrap Thumbnail First\"\r\n                    src=\"https://www.layoutit.com/img/people-q-c-600-200-1.jpg\"\r\n                />\r\n                <div class=\"card-block\">\r\n                    <h5 class=\"card-title\">\r\n                        Card title\r\n                    </h5>\r\n                    <p class=\"card-text\">\r\n                        Cras justo odio, dapibus ac facilisis in, egestas eget\r\n                        quam. Donec id elit non mi porta gravida at eget metus.\r\n                        Nullam id dolor id nibh ultricies vehicula ut id elit.\r\n                    </p>\r\n                    <p>\r\n                        <a class=\"btn btn-primary\" href=\"#\">Action</a>\r\n                        <a class=\"btn\" href=\"#\">Action</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n                <img\r\n                    class=\"card-img-top\"\r\n                    alt=\"Bootstrap Thumbnail Second\"\r\n                    src=\"https://www.layoutit.com/img/city-q-c-600-200-1.jpg\"\r\n                />\r\n                <div class=\"card-block\">\r\n                    <h5 class=\"card-title\">\r\n                        Card title\r\n                    </h5>\r\n                    <p class=\"card-text\">\r\n                        Cras justo odio, dapibus ac facilisis in, egestas eget\r\n                        quam. Donec id elit non mi porta gravida at eget metus.\r\n                        Nullam id dolor id nibh ultricies vehicula ut id elit.\r\n                    </p>\r\n                    <p>\r\n                        <a class=\"btn btn-primary\" href=\"#\">Action</a>\r\n                        <a class=\"btn\" href=\"#\">Action</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card\">\r\n                <img\r\n                    class=\"card-img-top\"\r\n                    alt=\"Bootstrap Thumbnail Third\"\r\n                    src=\"https://www.layoutit.com/img/sports-q-c-600-200-1.jpg\"\r\n                />\r\n                <div class=\"card-block\">\r\n                    <h5 class=\"card-title\">\r\n                        Card title\r\n                    </h5>\r\n                    <p class=\"card-text\">\r\n                        Cras justo odio, dapibus ac facilisis in, egestas eget\r\n                        quam. Donec id elit non mi porta gravida at eget metus.\r\n                        Nullam id dolor id nibh ultricies vehicula ut id elit.\r\n                    </p>\r\n                    <p>\r\n                        <a class=\"btn btn-primary\" href=\"#\">Action</a>\r\n                        <a class=\"btn\" href=\"#\">Action</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/inicio/inicio.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding: 0; }\n\n.principal {\n  padding-bottom: 200px; }\n\n.banner1 {\n  width: 50%;\n  height: 20%;\n  background-image: url('bannerAzul.jpg');\n  background-size: cover;\n  display: inline-block; }\n\n.banner2 {\n  width: 50%;\n  height: 20%;\n  background-image: url('bannerAzul.jpg');\n  background-size: cover;\n  display: inline-block; }\n\n.textoAnimado1 {\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-name: slidein;\n          animation-name: slidein;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  font-size: 4vw;\n  color: aliceblue;\n  text-align: center;\n  padding: 8% 0; }\n\n.textoAnimado2 {\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-name: slidein2;\n          animation-name: slidein2;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  font-size: 4vw;\n  color: aliceblue;\n  text-align: center;\n  padding: 8% 0; }\n\n@-webkit-keyframes slidein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes slidein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes slidein2 {\n  from {\n    color: white; }\n  to {\n    color: #05c3db; } }\n\n@keyframes slidein2 {\n  from {\n    color: white; }\n  to {\n    color: #05c3db; } }\n\n.textoCita {\n  padding: 5%;\n  background-color: #eaeaea; }\n\n.textoCita div {\n  font-size: 2.5vw; }\n\n.textoCita small {\n  text-align: right;\n  display: block;\n  font-size: 2vw; }\n\n.video {\n  text-align: center; }\n\n.video iframe {\n  width: 60%;\n  height: 40vw; }\n\n.canvasPadre {\n  text-align: center; }\n\n.canvasPadre canvas {\n  -webkit-transition: all .9s ease;\n  /* Safari y Chrome */\n  -moz-transition: all .9s ease;\n  /* Firefox */\n  -o-transition: all .9s ease;\n  /* IE 9 */\n  -ms-transition: all .9s ease; }\n\n.canvasPadre:hover canvas {\n  -webkit-transform: scale(1.25);\n  transform: scale(1.25); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGVzL0Rlc2t0b3AvREFXMi9mcm9udGVuZC1zZXBhcmFkby1kZWYvc3JjL2FwcC9jb21wb25lbnRzL2luaWNpby9pbmljaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVDQUFxRDtFQUNyRCxzQkFBc0I7RUFDdEIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCx1Q0FBcUQ7RUFDckQsc0JBQXNCO0VBQ3RCLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFHZDtJQUNJLFVBQVUsRUFBQSxFQUFBOztBQU5sQjtFQUNJO0lBQ0ksVUFBVSxFQUFBO0VBR2Q7SUFDSSxVQUFVLEVBQUEsRUFBQTs7QUFJbEI7RUFDSTtJQUNJLFlBQVksRUFBQTtFQUdoQjtJQUNJLGNBQWMsRUFBQSxFQUFBOztBQU50QjtFQUNJO0lBQ0ksWUFBWSxFQUFBO0VBR2hCO0lBQ0ksY0FBYyxFQUFBLEVBQUE7O0FBSXRCO0VBQ0ksV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZ0NBQWdDO0VBQ2hDLG9CQUFBO0VBQ0EsNkJBQTZCO0VBQzdCLFlBQUE7RUFDQSwyQkFBMkI7RUFDM0IsU0FBQTtFQUNBLDRCQUE0QixFQUFBOztBQUdoQztFQUVJLDhCQUE4QjtFQUk5QixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5pY2lvL2luaWNpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnByaW5jaXBhbCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcbn1cclxuXHJcbi5iYW5uZXIxIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYmFubmVyQXp1bC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmJhbm5lcjIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iYW5uZXJBenVsLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udGV4dG9BbmltYWRvMSB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW47XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDglIDA7XHJcbn1cclxuXHJcbi50ZXh0b0FuaW1hZG8yIHtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVpbjI7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDglIDA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVpbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlaW4yIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgY29sb3I6ICMwNWMzZGI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0b0NpdGEge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG59XHJcblxyXG4udGV4dG9DaXRhIGRpdiB7XHJcbiAgICBmb250LXNpemU6IDIuNXZ3O1xyXG59XHJcblxyXG4udGV4dG9DaXRhIHNtYWxsIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxufVxyXG5cclxuLnZpZGVvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnZpZGVvIGlmcmFtZSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA0MHZ3O1xyXG59XHJcblxyXG4uY2FudmFzUGFkcmUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FudmFzUGFkcmUgY2FudmFzIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC45cyBlYXNlO1xyXG4gICAgLyogU2FmYXJpIHkgQ2hyb21lICovXHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuOXMgZWFzZTtcclxuICAgIC8qIEZpcmVmb3ggKi9cclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuOXMgZWFzZTtcclxuICAgIC8qIElFIDkgKi9cclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjlzIGVhc2U7XHJcbn1cclxuXHJcbi5jYW52YXNQYWRyZTpob3ZlciBjYW52YXMge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjljZjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/inicio/inicio.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.ts ***!
  \*******************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var InicioComponent = /** @class */ (function () {
    function InicioComponent(item, router) {
        this.item = item;
        this.router = router;
        this.visible = false;
    }
    // PARA CARGAR CANVAS
    InicioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.context = (_this.myCanvas.nativeElement).getContext("2d");
            var x = _this.myCanvas.nativeElement.width / 2;
            var y = _this.myCanvas.nativeElement.height / 2;
            var img = new Image();
            img.onload = function () {
                _this.context.drawImage(img, 40, 30, 215, 150);
            };
            img.src = "../../../assets/logo-libroteca.png";
        }, 1000);
    };
    InicioComponent.prototype.ngOnInit = function () {
        var _this = this;
        // COMPRUEBO TOKEN CORRECTO
        this.item
            .postCheckToken()
            .subscribe(function (res) {
            if (!res) {
                _this.item.setActivate(false);
                _this.item.logout();
            }
            else {
                _this.visible = true;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("myCanvas"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], InicioComponent.prototype, "myCanvas", void 0);
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-inicio",
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/components/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.scss */ "./src/app/components/inicio/inicio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/components/leidos/leidos.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/leidos/leidos.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"jumbotron jumbotron-fluid\" *ngIf=\"this.noLeidos\">\r\n    <div class=\"container\">\r\n        <h3 class=\"display-4\">Tu lista está vacía</h3>\r\n        <p class=\"lead\">¡Añade tantos libros como quieras!</p>\r\n        <button type=\"button\" class=\"btn btn-outline-info mr-4 mb-2\" [routerLink]=\"['/busquedaTitulo']\">\r\n            Buscar por título\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-outline-info mr-4 mb-2\" [routerLink]=\"['/busquedaAutor']\">\r\n            Buscar por autor\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-outline-info mb-2\" [routerLink]=\"['/perfil']\">\r\n            Volver a perfil\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"respuesta\" *ngIf=\"!this.noLeidos\">\r\n    <div class=\"volver-perfil\">\r\n        <a [routerLink]=\"['/perfil']\" class=\"volver\"><i class=\"fas fa-arrow-left mr-2\"></i>Volver a Perfil</a\r\n                >\r\n        </div>\r\n    <div class=\"col-6 bloque animated fadeIn fast\" *ngFor=\"let k of this.allReadedBooks | paginate: { itemsPerPage: 6, currentPage: p }\">\r\n        <div class=\"row no-gutters card-custom\">\r\n            <div class=\"col-md-3 portada\">\r\n                <img [src]=\"k.portada\" class=\"card-img\" alt=\"{{ k.titulo }}\" />\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">\r\n                        {{ k.titulo }}\r\n                    </h5>\r\n                    <p class=\"card-text autor\">\r\n                        {{ k.autor }}\r\n                    </p>\r\n                    <div class=\"button-box\">\r\n                        <button type=\"button\" class=\"btn btn-outline-info btn-sm\" [routerLink]=\"[\r\n                                '/libro-detalle-leido',\r\n                                k.idLibro\r\n                            ]\"><i class=\"fas fa-book mr-2\"></i>\r\n                            Info\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-sm favorito\" *ngIf=\"this.existeLibroFavorito(k.idGB)\" (click)=\"openModalEliminarFavorito(templateEliminarFavorito)\"><i class=\"fas fa-heart mr-2\" style=\"color: red\"></i>Favorito</button>\r\n\r\n                        <ng-template #templateEliminarFavorito>\r\n                            <div class=\"modal-header\">\r\n                                <h4 class=\"modal-title pull-left\">\r\n                                    {{ k.titulo }}\r\n                                </h4>\r\n                                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                        <span aria-hidden=\"true\">&times;</span>\r\n                                    </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <img src=\"../../../assets/corazon.png\" alt=\"libro\" style=\"margin-bottom: 20px\" /> ¿Realmente desea eliminar este libro de su lista de favoritos?\r\n                                <div class=\"modal-button\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"\r\n                                                borrarFavorito(\r\n                                                    k.id, k.idGB\r\n                                                )\r\n                                            \"><i class=\"far fa-thumbs-up mr-2\"></i>\r\n                                            Sí\r\n                                        </button>\r\n                                    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalRef.hide()\"><i\r\n                                                class=\"fas fa-times mr-2\"></i>\r\n                                            Cancelar\r\n                                        </button>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n\r\n                        <button type=\"button\" class=\"btn btn-outline-success btn-sm\" *ngIf=\"!this.existeLibroFavorito(k.idGB)\" (click)=\"addFavorito(templateFavorito, k.id)\"><i class=\"fas fa-plus mr-2\"></i>Añadir a favoritos</button>\r\n\r\n                        <ng-template #templateFavorito>\r\n                            <div class=\"modal-header\">\r\n                                <h4 class=\"modal-title pull-left\">{{ k.titulo }}</h4>\r\n                                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <img src=\"../../../assets/corazon.png\" alt=\"libro\" style=\"margin-bottom: 20px\" />\r\n                                <div class=\"modal-button\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary genial\" (click)=\"modalRef.hide()\"><i class=\"far fa-thumbs-up mr-2\"></i>¡Añadido a tu\r\n                                        lista de favoritos!</button>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n\r\n                        <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"openModalEliminarLeido(templateEliminarLeido)\"><i class=\"far fa-trash-alt mr-2\"></i>\r\n                            Eliminar leído\r\n                        </button>\r\n\r\n                        <ng-template #templateEliminarLeido>\r\n                            <div class=\"modal-header\">\r\n                                <h4 class=\"modal-title pull-left\">\r\n                                    {{ k.titulo }}\r\n                                </h4>\r\n                                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <img src=\"../../../assets/addLeido.png\" alt=\"libro\" style=\"margin-bottom: 20px\" /> ¿Realmente desea eliminar este libro de su lista de leídos?\r\n                                <div class=\"modal-button\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"\r\n                                            borrarLeido(templateEliminarLeido, k)\r\n                                        \"><i class=\"far fa-thumbs-up mr-2\"></i>\r\n                                        Sí\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalRef.hide()\"><i\r\n                                            class=\"fas fa-times mr-2\"></i>\r\n                                        Cancelar\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n</div>\r\n<app-footer></app-footer>\r\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/components/leidos/leidos.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/leidos/leidos.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-custom {\n  margin: 5% auto; }\n\n.container-custom small {\n  color: red; }\n\n.bloque {\n  max-width: 540px;\n  display: inline-block;\n  padding: 3%; }\n\n.card-custom {\n  text-align: center;\n  margin: 2%; }\n\n.portada {\n  width: 50%;\n  margin: 0 auto; }\n\n.portada img.card-img {\n  height: 215px;\n  max-width: 150px;\n  width: 134.5px; }\n\n.card-custom .card-body {\n  padding: 0 7%;\n  height: 100%; }\n\n.autor {\n  margin: 0; }\n\n.button-box {\n  margin-top: 15px; }\n\n.button-box button {\n  margin: 5px; }\n\n.modal-button {\n  text-align: center;\n  margin-top: 1rem; }\n\n.modal-button button {\n  margin: 5px; }\n\n.modal-header {\n  background: -ms-linear-gradient(25deg, #CE0AFF 0, #429AD5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1');\n  background: linear-gradient(25deg, #CE0AFF 0, #429AD5 100%);\n  color: white; }\n\n.modal-body {\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  background: -ms-linear-gradient(360deg, #EBF6FF 0, #6FB1E3 100%);\n  /* IE10+ */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1');\n  /* for IE */\n  background: linear-gradient(360deg, #FFFFFF 0, #6FB1E3 100%);\n  /* W3C */ }\n\n.modal-body .genial {\n  background-color: #1fa8e0 !important;\n  border-color: #1fa8e0 !important;\n  color: white; }\n\n.modal-body img {\n  width: 20%;\n  display: block;\n  margin: 0 auto; }\n\n.favorito {\n  background-color: #ffd1d1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGVzL0Rlc2t0b3AvREFXMi9mcm9udGVuZC1zZXBhcmFkby1kZWYvc3JjL2FwcC9jb21wb25lbnRzL2xlaWRvcy9sZWlkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksVUFBVTtFQUNWLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFNBQVMsRUFBQTs7QUFHYjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFdBQVcsRUFBQTs7QUFJZjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFLSSwrREFBK0Q7RUFDL0Qsb0hBQW9IO0VBQ3BILDJEQUEyRDtFQUMzRCxZQUFZLEVBQUE7O0FBR2hCO0VBRUksV0FBQTtFQUVBLG9CQUFBO0VBRUEseUJBQUE7RUFFQSxpQkFBQTtFQUNBLGdFQUFnRTtFQUNoRSxVQUFBO0VBQ0Esb0hBQW9IO0VBQ3BILFdBQUE7RUFDQSw0REFBNEQ7RUFDNUQsUUFBQSxFQUFTOztBQUdiO0VBQ0ksb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNoQyxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xlaWRvcy9sZWlkb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWN1c3RvbSB7XHJcbiAgICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuXHJcbi5jb250YWluZXItY3VzdG9tIHNtYWxsIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5ibG9xdWUge1xyXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDMlO1xyXG59XHJcblxyXG4uY2FyZC1jdXN0b20ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyJTtcclxufVxyXG5cclxuLnBvcnRhZGEge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ucG9ydGFkYSBpbWcuY2FyZC1pbWcge1xyXG4gICAgaGVpZ2h0OiAyMTVweDtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTM0LjVweDtcclxufVxyXG5cclxuLmNhcmQtY3VzdG9tIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMCA3JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmF1dG9yIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ1dHRvbi1ib3gge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmJ1dHRvbi1ib3ggYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4vLyBlc3RpbG9zIG1vZGFsXHJcbi5tb2RhbC1idXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLm1vZGFsLWJ1dHRvbiBidXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMjVkZWcsICNDRTBBRkYgMCwgIzQyOUFENSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAyNWRlZywgY29sb3Itc3RvcCgwLCBDRTBBRkYpLCBjb2xvci1zdG9wKDEwMCUsIDQyOUFENSkpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMjVkZWcsICNDRTBBRkYgMCwgIzQyOUFENSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgyNWRlZywgI0NFMEFGRiAwLCAjNDI5QUQ1IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgyNWRlZywgI0NFMEFGRiAwLCAjNDI5QUQ1IDEwMCUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzEzMDFGRScsIGVuZENvbG9yc3RyPScjRjRGNjBDJywgR3JhZGllbnRUeXBlPScxJyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjVkZWcsICNDRTBBRkYgMCwgIzQyOUFENSAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRUJGNkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBGRjMuNisgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAzNjBkZWcsIGNvbG9yLXN0b3AoMCwgRUJGNkZGKSwgY29sb3Itc3RvcCgxMDAlLCA2RkIxRTMpKTtcclxuICAgIC8qIENocm9tZSxTYWZhcmk0KyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRUJGNkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0VCRjZGRiAwLCAjNkZCMUUzIDEwMCUpO1xyXG4gICAgLyogT3BlcmEgMTEuMTArICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0VCRjZGRiAwLCAjNkZCMUUzIDEwMCUpO1xyXG4gICAgLyogSUUxMCsgKi9cclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyMxMzAxRkUnLCBlbmRDb2xvcnN0cj0nI0Y0RjYwQycsIEdyYWRpZW50VHlwZT0nMScpO1xyXG4gICAgLyogZm9yIElFICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRkZGRkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBXM0MgKi9cclxufVxyXG5cclxuLm1vZGFsLWJvZHkgLmdlbmlhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZhOGUwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMxZmE4ZTAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkgaW1nIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZmF2b3JpdG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDFkMTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/leidos/leidos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/leidos/leidos.component.ts ***!
  \*******************************************************/
/*! exports provided: LeidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeidosComponent", function() { return LeidosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");





var LeidosComponent = /** @class */ (function () {
    function LeidosComponent(item, router, modalService) {
        this.item = item;
        this.router = router;
        this.modalService = modalService;
        this.visible = false;
        this.ids = [];
        this.noLeidos = false;
        this.respuesta = false;
        this.borrado = false;
        this.allReadedBooks = [];
        this.allFavsBooks = [];
        this.p = 1;
    }
    LeidosComponent.prototype.ngOnInit = function () {
        var _this = this;
        // COMPRUEBO TOKEN CORRECTO
        this.item
            .postCheckToken()
            .subscribe(function (res) {
            if (!res) {
                _this.item.setActivate(false);
                _this.item.logout();
            }
            else {
                _this.visible = true;
            }
        });
        // ME TRAIGO TODOS LOS LIBROS QUE HA LEÍDO EL USUARIO Y LOS METO EN UN ARRAY
        this.item.takeAllReadedBooks().subscribe(function (res) {
            if (res) {
                if (res.length > 0) {
                    _this.allReadedBooks = res;
                }
                else {
                    _this.noLeidos = true;
                }
            }
        });
        // ME TRAIGO TODOS LOS LIBROS FAVORITOS DEL USUARIO Y LOS METO EN UN ARRAY
        this.item.takeAllFavsBooks().subscribe(function (res) {
            if (res.length > 0) {
                _this.allFavsBooks = res;
            }
        });
    };
    // ABRIR MODAL ELIMINAR LEIDO
    LeidosComponent.prototype.openModalEliminarLeido = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    // ABRIR MODAL ELIMINAR FAVORITO
    LeidosComponent.prototype.openModalEliminarFavorito = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    // ABRIR MODAL FAVORITO
    LeidosComponent.prototype.openModalFavorito = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    // CERRAR MODAL
    LeidosComponent.prototype.closeModal = function (template) {
        this.modalRef.hide();
    };
    // BORRAR LIBRO DE LISTA LEÍDOS
    LeidosComponent.prototype.borrarLeido = function (template, k) {
        var _this = this;
        this.item.borrarLeido(k.idLibro).subscribe(function (res) {
            if (res) {
                _this.closeModal(template);
                setTimeout(function () {
                    var index = _this.allReadedBooks.indexOf(k);
                    _this.allReadedBooks.splice(index, 1);
                    if (_this.allReadedBooks.length === 0) {
                        _this.noLeidos = true;
                    }
                }, 1000);
            }
            else {
                _this.item.logout();
            }
        }, function (err) {
            if (err.status === 404) {
                _this.closeModal(template);
                _this.router.navigate(['/pag404']);
            }
        });
    };
    // BORRAR LIBRO DE LISTA FAVORITO
    LeidosComponent.prototype.borrarFavorito = function (idLeido) {
        var _this = this;
        var indexFav = this.allFavsBooks.findIndex(function (fav) { return fav.id === idLeido; });
        this.item.borrarFavorito(idLeido).subscribe(function (res) {
            _this.allFavsBooks.splice(indexFav, 1);
        }, function (err) {
            if (err.status === 404) {
                _this.router.navigate(['/pag404']);
            }
        });
        this.modalRef.hide();
    };
    // AÑADIR LEÍDO COMO FAVORITO
    LeidosComponent.prototype.addFavorito = function (template, id) {
        var _this = this;
        this.item.addFavorito(id).subscribe(function (res) {
            _this.allFavsBooks.push(res.libro[0]);
            _this.openModalFavorito(template);
            _this.play();
        }, function (err) {
            if (err.status === 404) {
                _this.router.navigate(['/pag404']);
            }
        });
    };
    // COMPROBAR LIBRO FAVORITO
    LeidosComponent.prototype.existeLibroFavorito = function (idGB) {
        return this.allFavsBooks.some(function (libro) {
            return libro.idGB === idGB;
        });
    };
    // SONIDO AL AÑADIR FAVORITO
    LeidosComponent.prototype.play = function () {
        var audio = new Audio('../../../assets/coin.mp3');
        audio.play();
    };
    LeidosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-leidos",
            template: __webpack_require__(/*! ./leidos.component.html */ "./src/app/components/leidos/leidos.component.html"),
            styles: [__webpack_require__(/*! ./leidos.component.scss */ "./src/app/components/leidos/leidos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], LeidosComponent);
    return LeidosComponent;
}());



/***/ }),

/***/ "./src/app/components/libro-detalle-leido/libro-detalle-leido.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/libro-detalle-leido/libro-detalle-leido.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"jumbotron jumbotron-fluid\" *ngIf=\"this.libroError && !this.tengoLibro\">\r\n    <div class=\"container\">\r\n        <h3 class=\"display-4\">Libro no encontrado</h3>\r\n        <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"volver()\" style=\"margin-right: 25px;\">\r\n            <i class=\"fas fa-arrow-left mr-2\"></i>\r\n            Volver\r\n        </button>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"this.libro\" class=\"container-fluid container-custom\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card mb-3 card-libro animated fadeIn fast\">\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"col-md-4 col-img\">\r\n                        <img [src]=\"this.libro.portada\" class=\"card-img\" alt=\"{{ this.libro.titulo }}\" />\r\n                        <div class=\"button-box\">\r\n                            <button type=\"button\" class=\"btn btn-sm favorito\" *ngIf=\"\r\n                                    this.existeLibroFavorito(this.libro.idGB)\r\n                                \" (click)=\"openModalEliminarFavorito(templateEliminarFavorito)\">\r\n                                <i\r\n                                    class=\"fas fa-heart mr-2\"\r\n                                    style=\"color: red\"\r\n                                ></i\r\n                                >Favorito\r\n                            </button>\r\n\r\n                            <ng-template #templateEliminarFavorito>\r\n                                <div class=\"modal-header\">\r\n                                    <h4 class=\"modal-title pull-left\">\r\n                                        {{ this.libro.titulo }}\r\n                                    </h4>\r\n                                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                        </button>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <img src=\"../../../assets/corazon.png\" alt=\"libro\" style=\"margin-bottom: 20px\" /> ¿Realmente desea eliminar este libro de su lista de favoritos?\r\n                                    <div class=\"modal-button\">\r\n                                        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"\r\n                                                    borrarFavorito(\r\n                                                        this.libro.id\r\n                                                    )\r\n                                                \"><i class=\"far fa-thumbs-up mr-2\"></i>\r\n                                                Sí\r\n                                            </button>\r\n                                        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalRef.hide()\"><i\r\n                                                    class=\"fas fa-times mr-2\"></i>\r\n                                                Cancelar\r\n                                            </button>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-template>\r\n\r\n                            <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"openModal(templateEliminarLeido)\">\r\n                                <i class=\"far fa-trash-alt mr-2\"></i>Eliminar\r\n                                leído\r\n                            </button>\r\n                            <ng-template #templateEliminarLeido>\r\n                                <div class=\"modal-header\">\r\n                                    <h4 class=\"modal-title pull-left\">\r\n                                        {{ this.libro.titulo }}\r\n                                    </h4>\r\n                                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                        <span aria-hidden=\"true\">&times;</span>\r\n                                    </button>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <img src=\"../../../assets/addLeido.png\" alt=\"libro\" style=\"margin-bottom: 20px\" /> ¿Realmente desea eliminar este libro de su lista de libros leídos?\r\n                                    <div class=\"modal-button\">\r\n                                        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"\r\n                                                borrarLeido(this.libro.idLibro)\r\n                                            \">\r\n                                            <i\r\n                                                class=\"far fa-thumbs-up mr-2\"\r\n                                            ></i>\r\n                                            Sí\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalRef.hide()\">\r\n                                            <i class=\"fas fa-times mr-2\"></i>\r\n                                            Cancelar\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-template>\r\n                            <button type=\"button\" class=\"btn btn-outline-warning btn-sm\" *ngIf=\"\r\n                                    !this.existeLibroFavorito(this.libro.idGB)\r\n                                \" (click)=\"\r\n                                    openModalFavorito(\r\n                                        templateFavorito,\r\n                                        this.libro.id\r\n                                    )\r\n                                \">\r\n                                <i\r\n                                    class=\"fas fa-heart mr-2\"\r\n                                    style=\"color: red\"\r\n                                ></i>\r\n                                Añadir a favoritos\r\n                            </button>\r\n\r\n                            <ng-template #templateFavorito>\r\n                                <div class=\"modal-header\">\r\n                                    <h4 class=\"modal-title pull-left\">\r\n                                        {{ this.libro.titulo }}\r\n                                    </h4>\r\n                                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                        <span aria-hidden=\"true\">&times;</span>\r\n                                    </button>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <img src=\"../../../assets/corazon.png\" alt=\"libro\" style=\"margin-bottom: 20px\" />\r\n                                    <div class=\"modal-button\">\r\n                                        <button type=\"button\" class=\"btn btn-outline-primary genial\" (click)=\"modalRef.hide()\">\r\n                                            <i class=\"far fa-thumbs-up mr-2\"></i\r\n                                            >¡Añadido a tu lista de favoritos!\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-template>\r\n                            <button type=\"button\" class=\"btn btn-outline-info btn-sm volver\" (click)=\"volver()\">\r\n                                <i class=\"fas fa-arrow-left mr-2\"></i>Volver\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <div class=\"card-body\">\r\n                            <h3 class=\"card-title\">{{ this.libro.titulo }}</h3>\r\n                            <h6 class=\"card-text\">{{ this.libro.autor }}</h6>\r\n                            <small class=\"card-text\">{{\r\n                                this.libro.editorial\r\n                            }}</small>\r\n                            <hr />\r\n                            <p class=\"card-text sinopsis\">\r\n                                {{ this.libro.sinopsis }}\r\n                            </p>\r\n                            <div class=\"comentarios mt-4\">\r\n                                <span style=\"font-weight: bold\">{{\r\n                                    this.libro.observaciones\r\n                                }}</span>\r\n                                <button class=\"btn btn-sm btn-outline-primary button-comentarios\" (click)=\"\r\n                                        openModal(templateModificarComentarios)\r\n                                    \">\r\n                                    Modificar comentarios\r\n                                </button>\r\n\r\n                                <ng-template #templateModificarComentarios>\r\n                                    <div class=\"modal-header\">\r\n                                        <h4 class=\"modal-title pull-left\">\r\n                                            {{ this.libro.titulo }}\r\n                                        </h4>\r\n                                        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\"\r\n                                                >&times;</span\r\n                                            >\r\n                                        </button>\r\n                                    </div>\r\n                                    <div class=\"modal-body\">\r\n                                        <img src=\"../../../assets/lapiz.png\" alt=\"libro\" style=\"margin-bottom: 20px; width: 100px\" /> ¿Qué comentarios quieres añadir a {{ this.libro.titulo }}?\r\n                                        <form class=\"form-nota\" #formComentarios=\"ngForm\">\r\n                                            <textarea class=\"form-control\" id=\"textarea\" rows=\"3\" placeholder=\"{{\r\n                                                    this.libro.observaciones\r\n                                                }}\" ngModel #comentarios=\"ngModel\" name=\"comentarios\"></textarea>\r\n                                        </form>\r\n                                        <div class=\"modal-button\">\r\n                                            <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"\r\n                                                    modificarComentarios(\r\n                                                        this.libro.idLibro,\r\n                                                        formComentarios\r\n                                                    )\r\n                                                \">\r\n                                                Modificar\r\n                                            </button>\r\n                                            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalRef.hide()\">\r\n                                                Cancelar\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </div>\r\n                            <div class=\"mt-4\">\r\n                                <span class=\"mr-4\" style=\"font-weight: bold\">Nota: {{ this.libro.nota }}</span\r\n                                >\r\n                                <span\r\n                                    *ngFor=\"\r\n                                        let valor of this.libro.nota | stars\r\n                                    \"\r\n                                >\r\n                                    <i\r\n                                        *ngIf=\"valor\"\r\n                                        class=\"fas fa-star\"\r\n                                        style=\"color: gold\"\r\n                                    ></i>\r\n                                    <i *ngIf=\"!valor\" class=\"far fa-star\"></i>\r\n                                </span>\r\n                                <button class=\"btn btn-sm btn-outline-primary button-comentarios\" (click)=\"openModal(templateModificarNota)\">\r\n                                    Modificar nota\r\n                                </button>\r\n\r\n                                <ng-template #templateModificarNota>\r\n                                    <div class=\"modal-header\">\r\n                                        <h4 class=\"modal-title pull-left\">\r\n                                            {{ this.libro.titulo }}\r\n                                        </h4>\r\n                                        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                                            <span aria-hidden=\"true\"\r\n                                                >&times;</span\r\n                                            >\r\n                                        </button>\r\n                                    </div>\r\n                                    <div class=\"modal-body\">\r\n                                        <img src=\"../../../assets/star.svg\" alt=\"libro\" style=\"margin-bottom: 20px; width: 100px\" /> ¿Qué nota le pondría a {{ this.libro.titulo }}? (De 0 a 5)\r\n                                        <form class=\"form-nota\" #formNota=\"ngForm\">\r\n                                            <label class=\"\">\r\n                                                Nota\r\n                                            </label>\r\n                                            <input class=\"form-control col-md-2 ml-2\" type=\"number\" placeholder=\"{{\r\n                                                    this.libro.nota\r\n                                                }}\" id=\"nota\" min=\"0\" max=\"5\" ngModel #nota=\"ngModel\" name=\"nota\" />\r\n                                        </form>\r\n                                        <div class=\"modal-button\">\r\n                                            <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"\r\n                                                    modificarNota(\r\n                                                        this.libro.idLibro,\r\n                                                        formNota\r\n                                                    )\r\n                                                \">\r\n                                                Modificar\r\n                                            </button>\r\n                                            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalRef.hide()\">\r\n                                                Cancelar\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/libro-detalle-leido/libro-detalle-leido.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/libro-detalle-leido/libro-detalle-leido.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-libro {\n  margin: 0 auto;\n  width: 80%;\n  border: none;\n  background-color: aliceblue; }\n\n.container-custom {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n\n.container-custom img {\n  width: 70%;\n  padding: 1.75em 0; }\n\n.col-img {\n  text-align: center; }\n\n.leido {\n  cursor: auto !important; }\n\n.button-box {\n  padding-bottom: 1.75em; }\n\n.button-box button {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 5%; }\n\n.button-comentarios,\n.button-nota {\n  display: block; }\n\n.modal-button {\n  text-align: center;\n  margin-top: 1rem; }\n\n.modal-button button {\n  margin: 5px; }\n\n.modal-header {\n  background: -ms-linear-gradient(25deg, #CE0AFF 0, #429AD5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1');\n  background: linear-gradient(25deg, #CE0AFF 0, #429AD5 100%);\n  color: white; }\n\n.modal-body {\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  background: -ms-linear-gradient(360deg, #EBF6FF 0, #6FB1E3 100%);\n  /* IE10+ */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1');\n  /* for IE */\n  background: linear-gradient(360deg, #FFFFFF 0, #6FB1E3 100%);\n  /* W3C */ }\n\n.modal-body .genial {\n  background-color: #1fa8e0 !important;\n  border-color: #1fa8e0 !important;\n  color: white; }\n\n.modal-body img {\n  width: 30%;\n  display: block;\n  margin: 0 auto; }\n\n.sinopsis {\n  text-align: justify; }\n\n.form-nota {\n  text-align: center;\n  margin-top: 1rem; }\n\n.form-nota input {\n  display: inline-block; }\n\n.favorito {\n  background-color: #ffd1d1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGVzL0Rlc2t0b3AvREFXMi9mcm9udGVuZC1zZXBhcmFkby1kZWYvc3JjL2FwcC9jb21wb25lbnRzL2xpYnJvLWRldGFsbGUtbGVpZG8vbGlicm8tZGV0YWxsZS1sZWlkby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHckI7O0VBRUksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFLSSwrREFBK0Q7RUFDL0Qsb0hBQW9IO0VBQ3BILDJEQUEyRDtFQUMzRCxZQUFZLEVBQUE7O0FBR2hCO0VBRUksV0FBQTtFQUVBLG9CQUFBO0VBRUEseUJBQUE7RUFFQSxpQkFBQTtFQUNBLGdFQUFnRTtFQUNoRSxVQUFBO0VBQ0Esb0hBQW9IO0VBQ3BILFdBQUE7RUFDQSw0REFBNEQ7RUFDNUQsUUFBQSxFQUFTOztBQUdiO0VBQ0ksb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNuQyxZQUFZLEVBQUE7O0FBR2I7RUFDSSxVQUFVO0VBQ1YsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpYnJvLWRldGFsbGUtbGVpZG8vbGlicm8tZGV0YWxsZS1sZWlkby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWxpYnJvIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1jdXN0b20ge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1jdXN0b20gaW1nIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwYWRkaW5nOiAxLjc1ZW0gMDtcclxufVxyXG5cclxuLmNvbC1pbWcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGVpZG8ge1xyXG4gICAgY3Vyc29yOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b24tYm94IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjc1ZW07XHJcbn1cclxuXHJcbi5idXR0b24tYm94IGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5idXR0b24tY29tZW50YXJpb3MsXHJcbi5idXR0b24tbm90YSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1vZGFsLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4ubW9kYWwtYnV0dG9uIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgyNWRlZywgI0NFMEFGRiAwLCAjNDI5QUQ1IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDI1ZGVnLCBjb2xvci1zdG9wKDAsIENFMEFGRiksIGNvbG9yLXN0b3AoMTAwJSwgNDI5QUQ1KSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgyNWRlZywgI0NFMEFGRiAwLCAjNDI5QUQ1IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDI1ZGVnLCAjQ0UwQUZGIDAsICM0MjlBRDUgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDI1ZGVnLCAjQ0UwQUZGIDAsICM0MjlBRDUgMTAwJSk7XHJcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjMTMwMUZFJywgZW5kQ29sb3JzdHI9JyNGNEY2MEMnLCBHcmFkaWVudFR5cGU9JzEnKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNWRlZywgI0NFMEFGRiAwLCAjNDI5QUQ1IDEwMCUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNFQkY2RkYgMCwgIzZGQjFFMyAxMDAlKTtcclxuICAgIC8qIEZGMy42KyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDM2MGRlZywgY29sb3Itc3RvcCgwLCBFQkY2RkYpLCBjb2xvci1zdG9wKDEwMCUsIDZGQjFFMykpO1xyXG4gICAgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNFQkY2RkYgMCwgIzZGQjFFMyAxMDAlKTtcclxuICAgIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRUJGNkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBPcGVyYSAxMS4xMCsgKi9cclxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRUJGNkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBJRTEwKyAqL1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzEzMDFGRScsIGVuZENvbG9yc3RyPScjRjRGNjBDJywgR3JhZGllbnRUeXBlPScxJyk7XHJcbiAgICAvKiBmb3IgSUUgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNGRkZGRkYgMCwgIzZGQjFFMyAxMDAlKTtcclxuICAgIC8qIFczQyAqL1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSAuZ2VuaWFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZmE4ZTAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzFmYThlMCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkgaW1nIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc2lub3BzaXMge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmZvcm0tbm90YSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1ub3RhIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmZhdm9yaXRvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQxZDE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/libro-detalle-leido/libro-detalle-leido.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/libro-detalle-leido/libro-detalle-leido.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LibroDetalleLeidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibroDetalleLeidoComponent", function() { return LibroDetalleLeidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");







var LibroDetalleLeidoComponent = /** @class */ (function () {
    function LibroDetalleLeidoComponent(activatedRoute, item, router, modalService, location) {
        this.activatedRoute = activatedRoute;
        this.item = item;
        this.router = router;
        this.modalService = modalService;
        this.location = location;
        this.allReadedBooks = [];
        this.allFavsBooks = [];
        this.autor = [];
        this.libroError = false;
        this.tengoLibro = false;
    }
    LibroDetalleLeidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // COMPRUEBO TOKEN CORRECTO
        this.item
            .postCheckToken()
            .subscribe(function (res) {
            if (!res) {
                _this.item.setActivate(false);
                _this.item.logout();
            }
        });
        // ME TRAIGO TODOS LOS LIBROS FAVORITOS DEL USUARIO Y LOS METO EN UN ARRAY
        this.item.takeAllFavsBooks().subscribe(function (res) {
            if (res.length > 0) {
                _this.allFavsBooks = res;
            }
        });
        // MOSTRAR EL LIBRO EN CUESTIÓN
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params.id;
            _this.item.takeAllReadedBooks().subscribe(function (res) {
                if (res.length > 0) {
                    _this.allReadedBooks = res;
                    _this.allReadedBooks.forEach(function (book) {
                        if (Number(_this.id) === book.idLibro) {
                            _this.libro = book;
                            _this.tengoLibro = true;
                            if (_this.libro.observaciones == null || _this.libro.observaciones == '') {
                                _this.libro.observaciones = 'Este libro no tiene comentarios';
                            }
                            if (_this.libro.nota == null) {
                                _this.libro.nota = 0;
                            }
                        }
                        else {
                            _this.libroError = true;
                        }
                    });
                }
            });
        });
    };
    // ABRIR MODAL
    LibroDetalleLeidoComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    // ABRIR MODAL FAVORITO
    LibroDetalleLeidoComponent.prototype.openModalFavorito = function (template, id) {
        this.modalRef = this.modalService.show(template);
        this.addFavorito(id);
    };
    // ABRIR MODAL ELIMINAR FAVORITO
    LibroDetalleLeidoComponent.prototype.openModalEliminarFavorito = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    // CERRAR MODAL
    LibroDetalleLeidoComponent.prototype.closeModal = function (template) {
        this.modalRef.hide();
    };
    // BORRAR LIBRO DE LISTA LEÍDOS
    LibroDetalleLeidoComponent.prototype.borrarLeido = function (idLibro) {
        var _this = this;
        this.item.borrarLeido(idLibro).subscribe(function (res) {
            _this.router.navigate(['/leidos']);
        }, function (err) {
            if (err.status === 404) {
                _this.modalRef.hide();
                _this.router.navigate(['/pag404']);
            }
        });
        this.modalRef.hide();
    };
    // BORRAR LIBRO DE LISTA FAVORITO
    LibroDetalleLeidoComponent.prototype.borrarFavorito = function (idLeido) {
        var _this = this;
        var indexFav = this.allFavsBooks.findIndex(function (fav) { return fav.id === idLeido; });
        this.item.borrarFavorito(idLeido).subscribe(function (res) {
            _this.allFavsBooks.splice(indexFav, 1);
        }, function (err) {
            if (err.status === 404) {
                _this.modalRef.hide();
                _this.router.navigate(['/pag404']);
            }
        });
        this.modalRef.hide();
    };
    // MODIFICAR PUNTUACIÓN DE LIBRO LEÍDO
    LibroDetalleLeidoComponent.prototype.modificarNota = function (idLibro, formNota) {
        var _this = this;
        if (formNota.controls.nota.value === "") {
            this.libro.nota = this.libro.nota;
        }
        else {
            this.libro.nota = formNota.controls.nota.value;
        }
        this.item.modificarNotaLibroLeido(idLibro, this.libro.nota).subscribe(function (res) {
        }, function (err) {
            if (err.status === 404) {
                _this.modalRef.hide();
                _this.router.navigate(['/pag404']);
            }
        });
        this.modalRef.hide();
    };
    // MODIFICAR COMENTARIOS DE LIBRO LEÍDO
    LibroDetalleLeidoComponent.prototype.modificarComentarios = function (idLibro, formComentarios) {
        var _this = this;
        if (formComentarios.controls.comentarios.value === "") {
            this.libro.observaciones = this.libro.observaciones;
        }
        else {
            this.libro.observaciones = formComentarios.controls.comentarios.value;
        }
        this.item.modificarComentariosLibroLeido(idLibro, this.libro.observaciones).subscribe(function (res) {
        }, function (err) {
            if (err.status === 404) {
                _this.router.navigate(['/pag404']);
            }
        });
        this.modalRef.hide();
    };
    // AÑADIR LEÍDO COMO FAVORITO
    LibroDetalleLeidoComponent.prototype.addFavorito = function (id) {
        var _this = this;
        this.item.addFavorito(id).subscribe(function (res) {
            _this.allFavsBooks.push(res.libro[0]);
            _this.play();
        });
    };
    // COMPROBAR LIBRO FAVORITO
    LibroDetalleLeidoComponent.prototype.existeLibroFavorito = function (idGB) {
        return this.allFavsBooks.some(function (libro) {
            return libro.idGB === idGB;
        });
    };
    LibroDetalleLeidoComponent.prototype.volver = function () {
        this.location.back();
    };
    // SONIDO FAVORITO
    LibroDetalleLeidoComponent.prototype.play = function () {
        var audio = new Audio('../../../assets/coin.mp3');
        audio.play();
    };
    LibroDetalleLeidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-libro-detalle-leido",
            template: __webpack_require__(/*! ./libro-detalle-leido.component.html */ "./src/app/components/libro-detalle-leido/libro-detalle-leido.component.html"),
            styles: [__webpack_require__(/*! ./libro-detalle-leido.component.scss */ "./src/app/components/libro-detalle-leido/libro-detalle-leido.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], LibroDetalleLeidoComponent);
    return LibroDetalleLeidoComponent;
}());



/***/ }),

/***/ "./src/app/components/libro-detalle/libro-detalle.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/libro-detalle/libro-detalle.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div *ngIf=\"this.libro\" class=\"container-fluid container-custom\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card mb-3 card-libro animated fadeIn fast\">\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"col-md-4 col-img\">\r\n                        <img [src]=\"!this.libro.volumeInfo.imageLinks ? '../../../assets/portada.png' : libro.volumeInfo.imageLinks.smallThumbnail\" class=\"card-img\" alt=\"{{this.libro.volumeInfo.title}}\">\r\n                        <div class=\"button-box\">\r\n                            <button type=\"button\" class=\"btn btn-warning btn-sm leido\" *ngIf=\"this.existeLibroLeido(libro.id)\"><i class=\"fas fa-check mr-2\" style=\"color: green\"></i>Leído</button>\r\n                            <button type=\"button\" class=\"btn btn-outline-success btn-sm\" *ngIf=\"!this.existeLibroLeido(libro.id)\" (click)=\"addLeido(template, libro)\"><i class=\"fas fa-plus mr-2\"></i>Añadir a leídos</button>\r\n\r\n                            <ng-template #template>\r\n                                <div class=\"modal-header\">\r\n                                    <h4 class=\"modal-title pull-left\">{{ this.libro.volumeInfo.title }}</h4>\r\n                                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <img src=\"../../../assets/addLeido.png\" alt=\"libro\">\r\n                                    <div class=\"modal-button\">\r\n                                        <button type=\"button\" class=\"btn btn-outline-primary genial\" (click)=\"modalRef.hide()\"><i class=\"far fa-thumbs-up mr-2\"></i>¡Añadido a tu lista de libros leídos!</button>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-template>\r\n                            <button type=\"button\" class=\"btn btn-outline-info btn-sm volver\" (click)=\"volver()\"><i class=\"fas fa-arrow-left mr-2\"></i>Volver</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <div class=\"card-body\">\r\n                            <h3 class=\"card-title\">{{ this.libro.volumeInfo.title }}</h3>\r\n                            <h6 class=\"card-text\" *ngFor=\"let autor of this.autor\">{{autor}}\r\n                            </h6>\r\n                            <small class=\"card-text\">{{ editorial }}</small>\r\n                            <hr/>\r\n                            <p class=\"card-text sinopsis\">\r\n                                {{ sinopsis }}\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/libro-detalle/libro-detalle.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/libro-detalle/libro-detalle.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-libro {\n  margin: 0 auto;\n  width: 80%;\n  border: none;\n  background-color: aliceblue; }\n\n.container-custom {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n\n.container-custom img {\n  width: 70%;\n  padding: 1.75em 0; }\n\n.col-img {\n  text-align: center; }\n\n.leido {\n  cursor: auto !important; }\n\n.button-box {\n  padding-bottom: 1.75em; }\n\n.button-box button {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 5%; }\n\n.modal-button {\n  text-align: center;\n  margin-top: 1rem; }\n\n.modal-header {\n  background: -ms-linear-gradient(25deg, #CE0AFF 0, #429AD5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1');\n  background: linear-gradient(25deg, #CE0AFF 0, #429AD5 100%);\n  color: white; }\n\n.modal-body {\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  background: -ms-linear-gradient(360deg, #EBF6FF 0, #6FB1E3 100%);\n  /* IE10+ */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1');\n  /* for IE */\n  background: linear-gradient(360deg, #FFFFFF 0, #6FB1E3 100%);\n  /* W3C */ }\n\n.modal-body .genial {\n  background-color: #1fa8e0 !important;\n  border-color: #1fa8e0 !important;\n  color: white; }\n\n.modal-body img {\n  width: 30%;\n  display: block;\n  margin: 0 auto; }\n\n.sinopsis {\n  text-align: justify; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGVzL0Rlc2t0b3AvREFXMi9mcm9udGVuZC1zZXBhcmFkby1kZWYvc3JjL2FwcC9jb21wb25lbnRzL2xpYnJvLWRldGFsbGUvbGlicm8tZGV0YWxsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBS0ksK0RBQStEO0VBQy9ELG9IQUFvSDtFQUNwSCwyREFBMkQ7RUFDM0QsWUFBWSxFQUFBOztBQUdoQjtFQUVJLFdBQUE7RUFFQSxvQkFBQTtFQUVBLHlCQUFBO0VBRUEsaUJBQUE7RUFDQSxnRUFBZ0U7RUFDaEUsVUFBQTtFQUNBLG9IQUFvSDtFQUNwSCxXQUFBO0VBQ0EsNERBQTREO0VBQzVELFFBQUEsRUFBUzs7QUFHYjtFQUNJLG9DQUFvQztFQUNwQyxnQ0FBZ0M7RUFDaEMsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFVBQVU7RUFDVixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdsQjtFQUNJLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saWJyby1kZXRhbGxlL2xpYnJvLWRldGFsbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1saWJybyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi5jb250YWluZXItY3VzdG9tIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5jb250YWluZXItY3VzdG9tIGltZyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgcGFkZGluZzogMS43NWVtIDA7XHJcbn1cclxuXHJcbi5jb2wtaW1nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxlaWRvIHtcclxuICAgIGN1cnNvcjogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0dG9uLWJveCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS43NWVtO1xyXG59XHJcblxyXG4uYnV0dG9uLWJveCBidXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4ubW9kYWwtYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMjVkZWcsICNDRTBBRkYgMCwgIzQyOUFENSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAyNWRlZywgY29sb3Itc3RvcCgwLCBDRTBBRkYpLCBjb2xvci1zdG9wKDEwMCUsIDQyOUFENSkpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMjVkZWcsICNDRTBBRkYgMCwgIzQyOUFENSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgyNWRlZywgI0NFMEFGRiAwLCAjNDI5QUQ1IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgyNWRlZywgI0NFMEFGRiAwLCAjNDI5QUQ1IDEwMCUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzEzMDFGRScsIGVuZENvbG9yc3RyPScjRjRGNjBDJywgR3JhZGllbnRUeXBlPScxJyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjVkZWcsICNDRTBBRkYgMCwgIzQyOUFENSAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRUJGNkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBGRjMuNisgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAzNjBkZWcsIGNvbG9yLXN0b3AoMCwgRUJGNkZGKSwgY29sb3Itc3RvcCgxMDAlLCA2RkIxRTMpKTtcclxuICAgIC8qIENocm9tZSxTYWZhcmk0KyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRUJGNkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0VCRjZGRiAwLCAjNkZCMUUzIDEwMCUpO1xyXG4gICAgLyogT3BlcmEgMTEuMTArICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0VCRjZGRiAwLCAjNkZCMUUzIDEwMCUpO1xyXG4gICAgLyogSUUxMCsgKi9cclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyMxMzAxRkUnLCBlbmRDb2xvcnN0cj0nI0Y0RjYwQycsIEdyYWRpZW50VHlwZT0nMScpO1xyXG4gICAgLyogZm9yIElFICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRkZGRkZGIDAsICM2RkIxRTMgMTAwJSk7XHJcbiAgICAvKiBXM0MgKi9cclxufVxyXG5cclxuLm1vZGFsLWJvZHkgLmdlbmlhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWZhOGUwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMxZmE4ZTAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkgaW1nIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc2lub3BzaXMge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/libro-detalle/libro-detalle.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/libro-detalle/libro-detalle.component.ts ***!
  \*********************************************************************/
/*! exports provided: LibroDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibroDetalleComponent", function() { return LibroDetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");







var LibroDetalleComponent = /** @class */ (function () {
    function LibroDetalleComponent(activatedRoute, item, router, location, modalService) {
        this.activatedRoute = activatedRoute;
        this.item = item;
        this.router = router;
        this.location = location;
        this.modalService = modalService;
        this.allReadedBooks = [];
        this.autor = [];
    }
    LibroDetalleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // COMPRUEBO TOKEN CORRECTO
        this.item.postCheckToken().subscribe(function (res) {
            if (!res) {
                _this.item.setActivate(false);
                _this.item.logout();
            }
        });
        // MOSTRAR EL LIBRO EN CUESTIÓN
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params.id;
            _this.item.getSearchById(_this.id).subscribe(function (res) {
                _this.libro = JSON.parse(JSON.stringify(res));
                _this.sinopsis = _this.libro.volumeInfo.description
                    ? _this.libro.volumeInfo.description
                    : "Información no disponible";
                _this.editorial = _this.libro.volumeInfo.publisher
                    ? _this.libro.volumeInfo.publisher
                    : "Editorial no disponible";
                if (_this.libro.volumeInfo.authors) {
                    _this.libro.volumeInfo.authors.forEach(function (autor) {
                        _this.autor.push(autor);
                    });
                }
                else {
                    _this.autor[0] = 'Autor no disponible';
                }
            });
        });
        // ME TRAIGO TODOS LOS LIBROS QUE HA LEÍDO EL USUARIO Y LOS METO EN UN ARRAY
        this.item.takeAllReadedBooks().subscribe(function (res) {
            if (res.length > 0) {
                _this.allReadedBooks = res;
            }
        });
    };
    // AÑADIR LIBRO A LEÍDOS
    LibroDetalleComponent.prototype.addLeido = function (template, libro) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var libroDef;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        libroDef = {
                            titulo: libro.volumeInfo.title,
                            autor: libro.volumeInfo.authors
                                ? libro.volumeInfo.authors[0]
                                : "Autor no disponible",
                            editorial: libro.volumeInfo.publisher
                                ? libro.volumeInfo.publisher
                                : "Editorial no disponible",
                            sinopsis: libro.volumeInfo.description
                                ? libro.volumeInfo.description
                                : "Información no disponible",
                            portada: !libro.volumeInfo.imageLinks ? '../../../assets/portada.png' : libro.volumeInfo.imageLinks.smallThumbnail,
                            idGB: libro.id
                        };
                        return [4 /*yield*/, this.item.addLeido(libroDef).subscribe(function (res) {
                                if (res.added) {
                                    _this.allReadedBooks.push(res.libro[0]);
                                    _this.openModal(template);
                                }
                            }, function (err) {
                                if (err.status === 404) {
                                    _this.router.navigate(['/pag404']);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // ABRIR MODAL
    LibroDetalleComponent.prototype.openModal = function (template) {
        ;
        this.modalRef = this.modalService.show(template);
    };
    // CERRAR MODAL
    LibroDetalleComponent.prototype.closeModal = function (template) {
        this.modalRef.hide();
    };
    // COMPROBAR LIBRO LEÍDO
    LibroDetalleComponent.prototype.existeLibroLeido = function (idGB) {
        return this.allReadedBooks.some(function (libro) {
            return libro.idGB === idGB;
        });
    };
    // VOLVER ATRÁS
    LibroDetalleComponent.prototype.volver = function () {
        this.location.back();
    };
    LibroDetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-libro-detalle",
            template: __webpack_require__(/*! ./libro-detalle.component.html */ "./src/app/components/libro-detalle/libro-detalle.component.html"),
            styles: [__webpack_require__(/*! ./libro-detalle.component.scss */ "./src/app/components/libro-detalle/libro-detalle.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]])
    ], LibroDetalleComponent);
    return LibroDetalleComponent;
}());



/***/ }),

/***/ "./src/app/components/lista-usuarios/lista-usuarios.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/lista-usuarios/lista-usuarios.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container container-fluid container-lista\">\r\n    <h2>Usuarios registrados</h2>\r\n    <div id=\"container-table\">\r\n        <table\r\n            class=\"table table-hover\"\r\n        >\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Id</th>\r\n                    <th scope=\"col\">Nombre</th>\r\n                    <th scope=\"col\">Apellidos</th>\r\n                    <th scope=\"col\">Email</th>\r\n                    <th scope=\"col\">Nombre de usuario</th>\r\n                    <th scope=\"col\">Rol</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let user of this.users\">\r\n                    <th scope=\"row\">{{ user.idUsuario }}</th>\r\n                    <td>{{ user.nombre }}</td>\r\n                    <td>{{ user.apellidos }}</td>\r\n                    <td>{{ user.email }}</td>\r\n                    <td>{{ user.username }}</td>\r\n                    <td>{{ user.rol }}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/components/lista-usuarios/lista-usuarios.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/lista-usuarios/lista-usuarios.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-lista {\n  padding-top: 5%;\n  padding-bottom: 5%; }\n\n#container-table {\n  padding: 3% 0; }\n\nh2 {\n  text-align: center; }\n\n.table {\n  text-align: center;\n  border: 1px solid silver; }\n\n.table thead {\n  background-color: #c4c8cc; }\n\n.table-hover tbody tr:hover {\n  background-color: #05c3db40; }\n\nthead tr {\n  background-color: #e4e9ea; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGVzL0Rlc2t0b3AvREFXMi9mcm9udGVuZC1zZXBhcmFkby1kZWYvc3JjL2FwcC9jb21wb25lbnRzL2xpc3RhLXVzdWFyaW9zL2xpc3RhLXVzdWFyaW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpc3RhLXVzdWFyaW9zL2xpc3RhLXVzdWFyaW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1saXN0YSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbiNjb250YWluZXItdGFibGUge1xyXG4gICAgcGFkZGluZzogMyUgMDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcclxufVxyXG5cclxuLnRhYmxlIHRoZWFkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGM4Y2M7XHJcbn1cclxuXHJcbi50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVjM2RiNDA7XHJcbn1cclxuXHJcbnRoZWFkIHRyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU5ZWE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/lista-usuarios/lista-usuarios.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/lista-usuarios/lista-usuarios.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListaUsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaUsuariosComponent", function() { return ListaUsuariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/item.service */ "./src/app/services/item.service.ts");



var ListaUsuariosComponent = /** @class */ (function () {
    function ListaUsuariosComponent(item) {
        this.item = item;
        this.users = [];
    }
    ListaUsuariosComponent.prototype.ngOnInit = function () {
        var _this = this;
        // COMPRUEBO TOKEN CORRECTO
        this.item.postCheckToken().subscribe(function (res) {
            if (!res) {
                _this.item.setActivate(false);
                _this.item.logout();
            }
        });
        // OBTENGO TODOS LOS USUARIOS REGISTRADOS
        this.item.allUsers().subscribe(function (res) {
            _this.users = res;
        });
    };
    ListaUsuariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-usuarios",
            template: __webpack_require__(/*! ./lista-usuarios.component.html */ "./src/app/components/lista-usuarios/lista-usuarios.component.html"),
            styles: [__webpack_require__(/*! ./lista-usuarios.component.scss */ "./src/app/components/lista-usuarios/lista-usuarios.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]])
    ], ListaUsuariosComponent);
    return ListaUsuariosComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark navbar-custom\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/inicio']\">\r\n        <img src=\"../../../assets/logo-libroteca.png\" alt=\"logo libroteca\" class=\"logo\"></a>\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"navbar-nav ul-custom\">\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\" nav-link \" [routerLink]=\"['/inicio']\">Inicio</a>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\">Búsqueda</a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/busquedaTitulo']\">Título</a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/busquedaAutor']\">Autor</a>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                <a class=\" nav-link \" [routerLink]=\"['/perfil']\">Perfil</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"this.rol === 'admin'\">\r\n                <a class=\" nav-link \" [routerLink]=\"['/listaUsuarios']\">Usuarios</a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"username\">\r\n            <small class=\"nav-item nav-link\">Hola, {{ this.username }}</small>\r\n            <small class=\"nav-item nav-link\"><a class=\"logout\" (click) = \"logout()\"><i class=\"fas fa-power-off\"></i>Cerrar sesión</a></small>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item.dropdown:hover > .dropdown-menu {\n  display: block !important;\n  position: absolute !important; }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(5,195,219, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\"); }\n\n.dropdown-menu {\n  padding: 0; }\n\n.navbar-brand {\n  text-align: center;\n  margin-right: 0; }\n\n.logo {\n  width: 65%; }\n\n.ul-custom, .username {\n  width: 100%; }\n\n.username {\n  text-align: right; }\n\n.username small {\n  display: inline-block; }\n\n.username small i {\n  margin-right: 5px; }\n\n.logout {\n  color: #212529 !important;\n  cursor: pointer; }\n\n.navbar-custom {\n  background-color: #e4e9ea !important;\n  padding: 0; }\n\n.dropdown a:hover {\n  color: #31a0b8 !important; }\n\n.navbar-custom .dropdown-menu {\n  border: none;\n  background-color: #e4e9ea;\n  text-align: center; }\n\n.dropdown-item:hover {\n  color: black !important; }\n\n.navbar-custom a {\n  color: #212529 !important; }\n\n.dropdown-menu a:hover {\n  background-color: #05c3db;\n  border-radius: 0 !important; }\n\n.navbar-custom a:hover {\n  color: #31a0b8 !important; }\n\n.dropdown-menu a:hover {\n  color: white !important; }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: 2.5rem;\n    padding-left: 2.5rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGVzL0Rlc2t0b3AvREFXMi9mcm9udGVuZC1zZXBhcmFkby1kZWYvc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0kscVFBQXFRLEVBQUE7O0FBR3pRO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSx5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLG9DQUFvQztFQUNwQyxVQUFVLEVBQUE7O0FBR1o7RUFDRSx5QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHVCQUFzQixFQUFBOztBQUd4QjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixvQkFBb0IsRUFBQSxFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbS5kcm9wZG93bjpob3ZlciA+IC5kcm9wZG93bi1tZW51IHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDUsMTk1LDIxOSwgMSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDhoMjRNNCAxNmgyNE00IDI0aDI0Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6IDY1JTtcclxufVxyXG4udWwtY3VzdG9tLCAudXNlcm5hbWUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udXNlcm5hbWUge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udXNlcm5hbWUgc21hbGwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnVzZXJuYW1lIHNtYWxsIGkge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubG9nb3V0IHtcclxuICBjb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdmJhci1jdXN0b20ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU5ZWEgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZHJvcGRvd24gYTpob3ZlciB7XHJcbiAgY29sb3I6ICMzMWEwYjghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyLWN1c3RvbSAuZHJvcGRvd24tbWVudSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU5ZWE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdmJhci1jdXN0b20gYSB7XHJcbiAgY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YzNkYjtcclxuICBib3JkZXItcmFkaXVzOiAwIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdmJhci1jdXN0b20gYTpob3ZlciB7XHJcbiAgY29sb3I6ICMzMWEwYjggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZy1yaWdodDogMi41cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(item, router) {
        this.item = item;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // OBTENGO ROL DE USUARIO LOGADO PARA MOSTRAR O NO LA OPCIÓN DE NAVEGAR A LA LSITA DE TODOS LOS USUARIOS EN EL NAVBAR
        // LA COMPROBACIÓN DEL ROL SE HACE EN LA PLANTILLA CON UN *ngIf
        this.username = this.item.takeUsernameSessionStorage();
        this.item.takeUser().subscribe(function (res) {
            _this.rol = res[0].rol;
        });
    };
    // LOGOUT
    NavbarComponent.prototype.logout = function () {
        this.item.logout();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/pag404/pag404.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/pag404/pag404.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid container-404\">\n    <svg height=\"40mm\" width=\"40mm\">\n            <circle cx=\"20mm\" cy=\"20mm\" r=\"15mm\" style=\"fill: red; stroke: black; stroke-width: 0.5mm;\" />\n            <line x1=\"7mm\" y1=\"20.5mm\" x2=\"33mm\" y2= \"20.5mm\" style=\"stroke:#ffffff; stroke-width:5mm\" />\n    </svg>\n    <div class=\"texto-error\">La página que buscas no existe o no tienes permitido el acceso</div>\n    <div class=\"button-volver\">\n        <button type=\"button\" class=\"btn btn-danger mr-4 mb-2\" [routerLink]=\"['/home']\">\n            Login\n        </button>\n    </div>\n    <img src=\"../../../assets/logo-libroteca.png\" alt=\"logo-libroteca\">\n</div>"

/***/ }),

/***/ "./src/app/components/pag404/pag404.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/pag404/pag404.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-404 {\n  text-align: center;\n  margin: 5% auto; }\n\nimg {\n  width: 30%; }\n\n.texto-error {\n  font-size: 5vw;\n  margin-bottom: 2rem; }\n\n.button-volver {\n  text-align: center;\n  margin-bottom: 2rem; }\n\nbutton {\n  margin: 0 auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGVzL0Rlc2t0b3AvREFXMi9mcm9udGVuZC1zZXBhcmFkby1kZWYvc3JjL2FwcC9jb21wb25lbnRzL3BhZzQwNC9wYWc0MDQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFVBQ0osRUFBQTs7QUFFQTtFQUNJLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZzQwNC9wYWc0MDQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLTQwNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMzAlXHJcbn1cclxuXHJcbi50ZXh0by1lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5idXR0b24tdm9sdmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/pag404/pag404.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/pag404/pag404.component.ts ***!
  \*******************************************************/
/*! exports provided: Pag404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pag404Component", function() { return Pag404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/item.service */ "./src/app/services/item.service.ts");



var Pag404Component = /** @class */ (function () {
    function Pag404Component(item) {
        this.item = item;
    }
    Pag404Component.prototype.ngOnInit = function () {
    };
    Pag404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pag404',
            template: __webpack_require__(/*! ./pag404.component.html */ "./src/app/components/pag404/pag404.component.html"),
            styles: [__webpack_require__(/*! ./pag404.component.scss */ "./src/app/components/pag404/pag404.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]])
    ], Pag404Component);
    return Pag404Component;
}());



/***/ }),

/***/ "./src/app/components/perfil/perfil.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/perfil/perfil.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container-fluid\">\r\n    <!-- slider -->\r\n    <div class=\"ism-slider\" data-transition_type=\"zoom\" data-play_type=\"loop\" data-radios=\"false\" id=\"slider-perfil\" style=\"max-height: 400px\">\r\n        <ol>\r\n            <li>\r\n                <img src=\"../../../assets/slider-perfil/biblio.jpg\" />\r\n            </li>\r\n            <li>\r\n                <img src=\"../../../assets/slider-perfil/ninos.jpg\" />\r\n            </li>\r\n            <li style=\"background-color: white;\">\r\n                <img src=\"../../../assets/slider-perfil/editar.jpg\" />\r\n            </li>\r\n        </ol>\r\n    </div>\r\n</div>\r\n<!-- acaba slider -->\r\n<div class=\"container-fluid container-cards\">\r\n    <div class=\"card-deck\">\r\n\r\n        <div class=\"card card1\">\r\n            <a [routerLink]=\"['/leidos']\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Leídos</h4>\r\n                    <hr />\r\n                    <p class=\"card-text\">Accede a tu lista de lecturas</p>\r\n                </div>\r\n            </a>\r\n        </div>\r\n\r\n\r\n        <div class=\"card card2\">\r\n            <a [routerLink]=\"['/favoritos']\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Favoritos</h4>\r\n                    <hr />\r\n                    <p class=\"card-text\">Accede a tu lista de libros favoritos</p>\r\n                </div>\r\n            </a>\r\n        </div>\r\n\r\n\r\n        <div class=\"card card3\">\r\n            <a [routerLink]=\"['/editarPerfil']\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Editar perfil</h4>\r\n                    <hr />\r\n                    <p class=\"card-text\">Accede a tus datos personales</p>\r\n                </div>\r\n            </a>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/perfil/perfil.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/perfil/perfil.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding: 0; }\n\n.container-fluid .ism-slider {\n  width: 100% !important; }\n\n.container-cards {\n  padding: 5%;\n  background-color: #f9f9f9; }\n\n.container-cards .card-deck {\n  text-align: center;\n  justify-content: center; }\n\n.card {\n  border-radius: 1em;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Shadow(Strength=11, Direction=0, Color=#EBEBEB)\";\n  box-shadow: 0 0 11px 5px #EBEBEB;\n  overflow: hidden;\n  min-width: 273px;\n  max-width: 407px;\n  margin-bottom: 2rem; }\n\n.card1 {\n  background-image: url('perfil-leidos.jpg');\n  background-size: cover; }\n\n.card2 {\n  background-image: url('favoritos.jpg');\n  background-size: cover; }\n\n.card3 {\n  background-image: url('letras.jpg');\n  background-size: cover; }\n\n.card .card-body {\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 1rem;\n  margin: 2rem;\n  color: white;\n  border-radius: .5rem;\n  -webkit-transition: all .9s ease;\n  /* Safari y Chrome */\n  -moz-transition: all .9s ease;\n  /* Firefox */\n  -o-transition: all .9s ease;\n  /* IE 9 */\n  -ms-transition: all .9s ease;\n  /* Opera */ }\n\n.card:hover .card-body {\n  -webkit-transform: scale(1.25);\n  transform: scale(1.25); }\n\n.card hr {\n  background-color: white; }\n\na:hover {\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGVzL0Rlc2t0b3AvREFXMi9mcm9udGVuZC1zZXBhcmFkby1kZWYvc3JjL2FwcC9jb21wb25lbnRzL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksa0JBQWtCO0VBQ2xCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGtCQUFrQjtFQUNsQiwrRkFBK0Y7RUFHL0YsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLDBDQUF3RDtFQUN4RCxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxzQ0FBb0Q7RUFDcEQsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksbUNBQWlEO0VBQ2pELHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLG9CQUFBO0VBQ0EsNkJBQTZCO0VBQzdCLFlBQUE7RUFDQSwyQkFBMkI7RUFDM0IsU0FBQTtFQUNBLDRCQUE0QjtFQUM1QixVQUFBLEVBQVc7O0FBR2Y7RUFDSSw4QkFBOEI7RUFJOUIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQgLmlzbS1zbGlkZXIge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1jYXJkcyB7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbn1cclxuXHJcbi5jb250YWluZXItY2FyZHMgLmNhcmQtZGVjayB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuU2hhZG93KFN0cmVuZ3RoPTExLCBEaXJlY3Rpb249MCwgQ29sb3I9I0VCRUJFQilcIjtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDExcHggNXB4ICNFQkVCRUI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMXB4IDVweCAjRUJFQkVCO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDExcHggNXB4ICNFQkVCRUI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWluLXdpZHRoOiAyNzNweDtcclxuICAgIG1heC13aWR0aDogNDA3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uY2FyZDEge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9wZXJmaWwtbGVpZG9zLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2FyZDIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9mYXZvcml0b3MuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJkMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2xldHJhcy5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuOXMgZWFzZTtcclxuICAgIC8qIFNhZmFyaSB5IENocm9tZSAqL1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjlzIGVhc2U7XHJcbiAgICAvKiBGaXJlZm94ICovXHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjlzIGVhc2U7XHJcbiAgICAvKiBJRSA5ICovXHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIC45cyBlYXNlO1xyXG4gICAgLyogT3BlcmEgKi9cclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgLmNhcmQtYm9keSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xyXG59XHJcblxyXG4uY2FyZCBociB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/perfil/perfil.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/perfil/perfil.component.ts ***!
  \*******************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/item.service */ "./src/app/services/item.service.ts");



var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(item) {
        this.item = item;
        this.visible = false;
    }
    PerfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        // COMPRUEBO TOKEN CORRECTO
        this.item
            .postCheckToken()
            .subscribe(function (res) {
            if (!res) {
                _this.item.setActivate(false);
                _this.item.logout();
            }
            else {
                _this.visible = true;
            }
        });
        // CARGAR SCRIPT DEL SLIDER
        var tag = document.createElement("script");
        tag.src = "../../../assets/slider.min.js";
        document.getElementsByTagName("head")[0].appendChild(tag);
    };
    PerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-perfil",
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/components/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.scss */ "./src/app/components/perfil/perfil.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/components/pipes/keys.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/components/pipes/keys.pipe.ts ***!
  \***********************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KeysPipe = /** @class */ (function () {
    // PIPE QUE DEVUELVE LAS CLAVES DE UN ARRAR
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value) {
        var keys = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    };
    KeysPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "keys",
            pure: false
        })
        // PIPE QUE DEVUELVE LAS CLAVES DE UN ARRAR
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/components/pipes/stars.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/components/pipes/stars.pipe.ts ***!
  \************************************************/
/*! exports provided: StarsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsPipe", function() { return StarsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StarsPipe = /** @class */ (function () {
    // PIPE QUE DEVUELVE ARRAY DE BOOLEANS PARA PINTAR LAS ESTRELLAS DE LA PUNTUACIÓN DE LIBRO LEÍDO
    function StarsPipe() {
    }
    StarsPipe.prototype.transform = function (stars) {
        return Array(5)
            .fill(true, 0, stars)
            .fill(false, stars);
    };
    StarsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'stars'
        })
        // PIPE QUE DEVUELVE ARRAY DE BOOLEANS PARA PINTAR LAS ESTRELLAS DE LA PUNTUACIÓN DE LIBRO LEÍDO
    ], StarsPipe);
    return StarsPipe;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-registro\">\r\n    <img src=\"../../../assets/logo-libroteca.png\" alt=\"logo-libroteca\">\r\n</div>\r\n<div class=\"wrapper\">\r\n    <form class=\"col s12\" [formGroup]=\"registerForm\">\r\n        <div class=\"form-group\">\r\n            <label for=\"nombre\">Nombre*</label>\r\n            <input formControlName=\"nombre\" type=\"text\" class=\"form-control\" />\r\n            <span class=\"helper-text\" style=\"color:red\" *ngIf=\"registerForm.get('nombre').hasError('required') && registerForm.get('nombre').touched\">Campo obligatorio</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"apellidos\">Apellidos*</label>\r\n            <input formControlName=\"apellidos\" type=\"text\" class=\"form-control\" />\r\n            <span class=\"helper-text\" style=\"color:red\" *ngIf=\"registerForm.get('apellidos').hasError('required') && registerForm.get('apellidos').touched\">Campo obligatorio</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">Email*</label>\r\n            <input formControlName=\"email\" type=\"email\" class=\"form-control\" />\r\n            <span class=\"helper-text\" style=\"color:red\" *ngIf=\"registerForm.get('email').hasError('required') && registerForm.get('email').touched\">Campo obligatorio</span>\r\n            <span class=\"helper-text\" style=\"color:red\" *ngIf=\"registerForm.get('email').hasError('pattern') && registerForm.get('email').touched\">Formato incorrecto</span>\r\n            <span class=\"helper-text\" style=\"color:red\" *ngIf=\"registerForm.get('email').hasError('emailTaken') && registerForm.get('email').touched\">Este email ya está registrado</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"usuario\">Usuario*</label>\r\n            <input formControlName=\"usuario\" type=\"text\" class=\"form-control\" />\r\n            <span class=\"helper-text\" style=\"color:red\" *ngIf=\"registerForm.get('usuario').hasError('required') && registerForm.get('usuario').touched\">Campo obligatorio</span>\r\n            <span class=\"helper-text\" style=\"color:red\" *ngIf=\"registerForm.get('usuario').hasError('minlength') && registerForm.get('usuario').touched\">Mínimo 4 caracteres</span>\r\n            <span class=\"helper-text\" style=\"color:red\" *ngIf=\"registerForm.get('usuario').hasError('userTaken') && registerForm.get('usuario').touched\">El usuario ya existe</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"pass\">Contraseña*</label>\r\n            <input formControlName=\"contrasena\" type=\"password\" class=\"form-control\" />\r\n            <span class=\"helper-text\" style=\"color:red\" *ngIf=\"registerForm.get('contrasena').hasError('required') && registerForm.get('contrasena').touched\">Campo obligatorio</span>\r\n            <span class=\"helper-text\" style=\"color:red\" *ngIf=\"registerForm.get('contrasena').hasError('minlength') && registerForm.get('contrasena').touched\">Mínimo 4 caracteres</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"pass2\">Confirmar contraseña</label>\r\n            <input formControlName=\"contrasena2\" type=\"password\" class=\"form-control\" />\r\n            <span class=\"helper-text\" style=\"color:red\" *ngIf=\"registerForm.get('contrasena2').invalid && registerForm.get('contrasena2').touched && registerForm.get('contrasena').touched\">Las contraseñas no coinciden</span>\r\n        </div>\r\n        <div class=\"div-btn-submit loginButton\">\r\n            <button class=\"btn btn-outline-danger\" type=\"\" name=\"action\" [routerLink]=\"['/home']\"><i class=\"fas fa-arrow-left\"></i>\r\n                Volver\r\n                </button>\r\n            <button class=\"btn btn-outline-success\" type=\"submit\" name=\"action\" [disabled]=\"registerForm.invalid\" (click)=\"onSubmit()\"><i class=\"fas fa-paper-plane\"></i>\r\n                Registrar\r\n                </button>\r\n        </div><br>\r\n        <span class=\"helper-text\" style=\"color:red\" *ngIf=\"this.invalido\">Datos incorrectos</span>\r\n        <span class=\"helper-text\" style=\"color:green; text-align: center; display: block;\" *ngIf=\"this.registrado\">Usuario dado de alta correctamente</span>\r\n    </form>\r\n</div>\r\n<div class=\"footer-registro\">\r\n    <small class=\"texto-footer-registro\">Ángeles Bueno Aguilar</small>\r\n    <small class=\"texto-footer-registro\">2º DAW. IES Campanillas</small>\r\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 50%;\n  margin: 5% auto; }\n\n.nav-registro {\n  text-align: center;\n  background-color: #e4e9ea;\n  padding: 3% 0; }\n\n.loginButton {\n  text-align: center;\n  margin-top: 3%; }\n\n.loginButton button {\n  margin: 3% 8%; }\n\n.loginButton button a {\n  text-decoration: none;\n  color: white; }\n\n.footer-registro {\n  width: 100%;\n  padding-top: 3%;\n  padding-bottom: 3%;\n  background-color: #e4e9ea; }\n\n.footer-registro small {\n  display: block;\n  color: #212529;\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmdlbGVzL0Rlc2t0b3AvREFXMi9mcm9udGVuZC1zZXBhcmFkby1kZWYvc3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxxQkFBcUI7RUFDckIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG5cclxuLm5hdi1yZWdpc3RybyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlOWVhO1xyXG4gICAgcGFkZGluZzogMyUgMDtcclxufVxyXG5cclxuLmxvZ2luQnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcblxyXG4ubG9naW5CdXR0b24gYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMyUgOCU7XHJcbn1cclxuXHJcbi5sb2dpbkJ1dHRvbiBidXR0b24gYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mb290ZXItcmVnaXN0cm8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlOWVhO1xyXG59XHJcblxyXG4uZm9vdGVyLXJlZ2lzdHJvIHNtYWxsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/custom-validators.service */ "./src/app/services/custom-validators.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, item, customValidators) {
        this.formBuilder = formBuilder;
        this.item = item;
        this.customValidators = customValidators;
        this.invalido = false;
        this.registrado = false;
        // tslint:disable-next-line: max-line-length
        this.regex = '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // SE CONSTRUYE FORMULARIO REACTIVO
        this.registerForm = this.formBuilder.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            apellidos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regex)], this.customValidators.emailValidator.bind(this)],
            usuario: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)
                ], this.customValidators.userValidator.bind(this)
            ],
            contrasena: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            contrasena2: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.customValidators.passwordValidator]
            ]
        });
    };
    // REGISTRO DE USUARIO
    RegisterComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.registerForm.status === 'INVALID')) return [3 /*break*/, 1];
                        this.invalido = true;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.item.postNewUser(this.registerForm.value).subscribe(function (res) {
                            _this.registrado = true;
                            _this.registerForm.reset();
                        })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/custom-validators.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/custom-validators.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomValidatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidatorsService", function() { return CustomValidatorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CustomValidatorsService = /** @class */ (function () {
    function CustomValidatorsService(item) {
        this.item = item;
    }
    // VALIDACIÓN QUE COMPRUEBA SI LAS CONTRASEÑAS COINCIDEN
    CustomValidatorsService.prototype.passwordValidator = function (control) {
        if (control && (control.value !== null || control.value !== undefined)) {
            var password2Value = control.value;
            var passControl = control.root.get("contrasena");
            if (passControl) {
                var passValue = passControl.value;
                if (passValue !== password2Value) {
                    return {
                        isError: true
                    };
                }
            }
        }
        return null;
    };
    // VALIDACIÓN QUE COMPRUEBA SI EL USERNAME YA ESTÁ REGISTRADO
    CustomValidatorsService.prototype.userValidator = function (control) {
        if (control && (control.value !== null || control.value !== undefined)) {
            var userValue = control.value;
            return this.item.searchUser(userValue).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                return res.length > 0 ? { userTaken: true } : null;
            }));
        }
    };
    // VALIDACIÓN QUE COMPRUEBA SI EL EMAIL YA ESTÁ REGISTRADO
    CustomValidatorsService.prototype.emailValidator = function (control) {
        if (control && (control.value !== null || control.value !== undefined)) {
            var emailValue = control.value;
            return this.item.searchEmail(emailValue).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                return res.length > 0 ? { emailTaken: true } : null;
            }));
        }
    };
    CustomValidatorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]])
    ], CustomValidatorsService);
    return CustomValidatorsService;
}());



/***/ }),

/***/ "./src/app/services/item.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ItemService = /** @class */ (function () {
    function ItemService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.isLogged = false;
        /*==============================================================================
    ==============================================================================*/
        // RUTA AL BACK
        this.basePath = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].basePath;
        // https://libroteca.herokuapp.com/ eso por localhost:3000
        // API KEY de Google Books
        this.apiKey = "AIzaSyA1rNwQeY82jsHyHxPheLnDl8frnbkaEtc";
        // CABECERAS DE PETICIONES
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    }
    /*==============================================================================
        TOKEN
==============================================================================*/
    // GUARDAR TOKEN EN sessionStorage
    ItemService.prototype.saveTokenSessionStorage = function (token) {
        sessionStorage.setItem("token", token);
        // this.hayToken = true;
    };
    // GUARDAR USUARIO EN EL sessionStorage
    ItemService.prototype.saveUserSessionStorage = function (user) {
        sessionStorage.setItem("user", user);
    };
    // OBTENER TOKEN DEL sessionStorage
    ItemService.prototype.takeTokenSessionStorage = function () {
        this.token = sessionStorage.getItem("token");
        return this.token;
    };
    // OBTENER USERNAME DEL sessionStorage
    ItemService.prototype.takeUsernameSessionStorage = function () {
        this.username = sessionStorage.getItem("user");
        return this.username;
    };
    // SE UTILIZA EN EL ENRUTADOR PARA COMPROBAR SI SE ESTÁ LOGADO CORRECTAMENTE Y EL TOKEN NO HA SIDO MANIPULADO
    // TRUE: PERMITE QUE SE INICIE EL COMPONENTE
    // FALSE: ECHA DE LA APLICACIÓN
    ItemService.prototype.canActivate = function () {
        if (sessionStorage.getItem("token")) {
            this.isLogged = true;
        }
        if (!this.isLogged) {
            this.router.navigate(["/login"]);
        }
        return this.isLogged;
    };
    // ASIGNACIÓN DE BOOLEAN
    ItemService.prototype.setActivate = function (isLogged) {
        this.isLogged = isLogged;
    };
    // LOGOUT DE LA APLICACIÓN. SE LIMPIA EL SESSIONSTORAGE Y SE REDIRIGE AL LOGIN
    ItemService.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigate(['/home']);
    };
    // BUSCAR POR TÍTULO DIRECTAMENTE EN LA API GOOGLE BOOKS
    ItemService.prototype.getSearchByTit = function (tit) {
        var headers = this.defaultHeaders;
        var httpHeaderAccepts = ["application/json"];
        headers = headers.set("Access-Control-Allow-Origin", "*");
        var ruta = "https://www.googleapis.com/books/v1/volumes?q=" + tit + "+intitle:" + tit + "&key=" + this.apiKey + "&maxResults=40";
        return this.httpClient.get(ruta, { headers: headers });
    };
    // BUSCAR POR AUTOR DIRECTAMENTE EN LA API DE GOOGLE BOOKS
    ItemService.prototype.getSearchByAut = function (autor) {
        var headers = this.defaultHeaders;
        var httpHeaderAccepts = ["application/json"];
        headers = headers.set("Access-Control-Allow-Origin", "*");
        var ruta = "https://www.googleapis.com/books/v1/volumes?q=" + autor + "+inauthor:" + autor + "&key=" + this.apiKey + "&maxResults=40";
        return this.httpClient.get(ruta, { headers: headers });
    };
    // BUSCAR POR ID GOOGLE DIRECTAMENTE EN LA API GOOGLE BOOKS
    ItemService.prototype.getSearchById = function (id) {
        var headers = this.defaultHeaders;
        var httpHeaderAccepts = ["application/json"];
        headers = headers.set("Access-Control-Allow-Origin", "*");
        var ruta = "https://www.googleapis.com/books/v1/volumes/" + id + "?key=" + this.apiKey;
        return this.httpClient.get(ruta, { headers: headers });
    };
    /*==============================================================================
    HASTA AQUÍ API GOOGLE BOOKS
==============================================================================*/
    // COMPROBAR USER EN LA BBDD PARA VALIDACIÓN
    ItemService.prototype.searchUser = function (user) {
        var headers = this.defaultHeaders;
        var httpHeaderAccepts = ["application/json"];
        headers = headers.set("Access-Control-Allow-Origin", "*");
        return this.httpClient.get(this.basePath + ("/searchUser/" + user), {
            headers: headers
        });
    };
    // COMPROBAR EMAIL EN LA BBDD PARA VALIDACIÓN
    ItemService.prototype.searchEmail = function (email) {
        var headers = this.defaultHeaders;
        var httpHeaderAccepts = ["application/json"];
        headers = headers.set("Access-Control-Allow-Origin", "*");
        return this.httpClient.get(this.basePath + ("/searchEmail/" + email), {
            headers: headers
        });
    };
    // REGISTRAR USUARIO EN LA BBDD
    ItemService.prototype.postNewUser = function (user) {
        var headers = this.defaultHeaders;
        var httpHeaderAccepts = ["application/json"];
        headers = headers.set("Access-Control-Allow-Origin", "*");
        return this.httpClient.post(this.basePath + "/newUser", user, {
            headers: headers
        });
    };
    // COGER LOS DATOS DEL USUARIO QUE ESTÁ LOGADO
    ItemService.prototype.takeUser = function () {
        var headers = this.defaultHeaders;
        var token = this.takeTokenSessionStorage();
        headers = headers.set("Authorization", "" + token);
        return this.httpClient.get(this.basePath + "/getUser", { headers: headers });
    };
    // LOGIN BBDD
    ItemService.prototype.postCheckUser = function (user) {
        var headers = this.defaultHeaders;
        var httpHeaderAccepts = ["application/json"];
        headers = headers.set("Access-Control-Allow-Origin", "*");
        return this.httpClient.post(this.basePath + "/checkUser", user, {
            headers: headers
        });
    };
    // COMPROBAR TOKEN FRONT = BACK
    ItemService.prototype.postCheckToken = function () {
        var headers = this.defaultHeaders;
        var token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', "Bearer " + token);
        return this.httpClient.get(this.basePath + "/checkToken", {
            headers: headers
        });
    };
    // TRAER TODOS LOS LIBROS AÑADIDOS EN LEÍDOS POR UN USUARIO
    ItemService.prototype.takeAllReadedBooks = function () {
        var headers = this.defaultHeaders;
        var token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', "Bearer " + token);
        return this.httpClient
            .get(this.basePath + "/takeAllReadedBooks", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            var librosLeidos = [];
            if (res.length > 0) {
                res.forEach(function (libroLeido) {
                    librosLeidos.push(libroLeido);
                });
            }
            return librosLeidos;
        }));
    };
    // TRAER TODOS LOS LIBROS FAVORITOS DE UN USUARIO
    ItemService.prototype.takeAllFavsBooks = function () {
        var headers = this.defaultHeaders;
        var token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', "Bearer " + token);
        return this.httpClient
            .get(this.basePath + "/takeAllFavsBooks", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            var librosFavs = [];
            if (res.length > 0) {
                res.forEach(function (libroFav) {
                    librosFavs.push(libroFav);
                });
            }
            return librosFavs;
        }));
    };
    // AÑADIR LIBRO A LISTA LEÍDOS BBDD
    ItemService.prototype.addLeido = function (libro) {
        var headers = this.defaultHeaders;
        var token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', "Bearer " + token);
        return this.httpClient.post(this.basePath + "/addLeido", libro, { headers: headers });
    };
    // BORRAR LIBRO DE LA LISTA DE LEÍDOS
    ItemService.prototype.borrarLeido = function (idLibro) {
        var headers = this.defaultHeaders;
        var token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', "Bearer " + token);
        return this.httpClient.get(this.basePath + ("/borrarLeido/" + idLibro), { headers: headers });
    };
    // MODIFICAR NOTA DE LIBRO LEÍDO
    ItemService.prototype.modificarNotaLibroLeido = function (idLibro, nota) {
        var headers = this.defaultHeaders;
        var token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', "Bearer " + token);
        var data = {
            idLibro: idLibro,
            nota: nota
        };
        return this.httpClient.post(this.basePath + "/modificarNotaLibroLeido", data, { headers: headers });
    };
    // MODIFICAR COMENTARIOS DE LIBRO LEÍDO
    ItemService.prototype.modificarComentariosLibroLeido = function (idLibro, comentarios) {
        var headers = this.defaultHeaders;
        var token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', "Bearer " + token);
        var data = {
            idLibro: idLibro,
            observaciones: comentarios
        };
        return this.httpClient.post(this.basePath + "/modificarComentariosLibroLeido", data, { headers: headers });
    };
    // AÑADIR LIBRO LEÍDO A FAVORITO
    ItemService.prototype.addFavorito = function (id) {
        var headers = this.defaultHeaders;
        var token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', "Bearer " + token);
        return this.httpClient.get(this.basePath + ("/addFavorito/" + id), { headers: headers });
    };
    // BORRAR LIBRO FAVORITO
    ItemService.prototype.borrarFavorito = function (idLeido) {
        var headers = this.defaultHeaders;
        var token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', "Bearer " + token);
        return this.httpClient.get(this.basePath + ("/borrarFavorito/" + idLeido), { headers: headers });
    };
    // MODIFICAR USUARIO
    ItemService.prototype.updateUser = function (form, idUsuario) {
        var user = {
            idUsuario: idUsuario,
            nombre: form.nombre,
            apellidos: form.apellidos,
            email: form.email,
            username: form.usuario,
            password: form.contrasena
        };
        var headers = this.defaultHeaders;
        var token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', "Bearer " + token);
        return this.httpClient.post(this.basePath + '/updateUser', user, { headers: headers });
    };
    // OBTENER TODOS LOS USUARIOS REGISTRADOS
    ItemService.prototype.allUsers = function () {
        var headers = this.defaultHeaders;
        var token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', "Bearer " + token);
        return this.httpClient.get(this.basePath + '/allUsers', { headers: headers });
    };
    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ItemService);
    return ItemService;
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
    basePath: "http://localhost:3000/api/v1/items"
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

module.exports = __webpack_require__(/*! /Users/angeles/Desktop/DAW2/frontend-separado-def/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map