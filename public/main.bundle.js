webpackJsonp([1,4],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalNsUpdateComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalNsUpdateComponent = /** @class */ (function (_super) {
    __extends(ModalNsUpdateComponent, _super);
    function ModalNsUpdateComponent(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    ModalNsUpdateComponent.prototype.confirm = function () {
        // on click on confirm button we set dialog result as true,
        // ten we can get dialog result from caller code
        this.result = true;
        this.close();
    };
    ModalNsUpdateComponent.prototype.deny = function () {
        this.result = false;
        this.close();
    };
    ModalNsUpdateComponent.prototype.cancel = function () {
        this.result = null;
        this.close();
    };
    ModalNsUpdateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-ns-update',
            template: __webpack_require__(429),
            styles: [__webpack_require__(403)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object])
    ], ModalNsUpdateComponent);
    return ModalNsUpdateComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));

//# sourceMappingURL=modal-ns-update.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (node) {
        if (node.name === undefined || node.profileNum === undefined || node.type === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateProfileNum = function (profileNum) {
        return profileNum >= 1 && profileNum < 11;
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 210;


/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(98);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(419),
            styles: [__webpack_require__(393)],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_settings_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_websockets_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_addnode_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_validate_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_addnode_addnode_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dashboard_dashboard_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_settings_settings_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_footer_footer_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_confirm_confirm_component__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_nodepop_nodepop_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_driverpop_driverpop_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_nsdetails_nsdetails_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_nodedetails_nodedetails_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_customdetails_customdetails_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_showlog_showlog_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_getns_getns_component__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_nscontrol_nscontrol_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_nslog_nslog_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_modal_ns_update_modal_ns_update_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_nsnotices_nsnotices_component__ = __webpack_require__(231);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_18__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addnode', component: __WEBPACK_IMPORTED_MODULE_15__components_addnode_addnode_component__["a" /* AddnodeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_20__components_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'log', component: __WEBPACK_IMPORTED_MODULE_28__components_showlog_showlog_component__["a" /* ShowlogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'getns', component: __WEBPACK_IMPORTED_MODULE_29__components_getns_getns_component__["a" /* GetnsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'nsdetails/:id', component: __WEBPACK_IMPORTED_MODULE_25__components_nsdetails_nsdetails_component__["a" /* NsdetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_addnode_addnode_component__["a" /* AddnodeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_confirm_confirm_component__["a" /* ConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_nodepop_nodepop_component__["a" /* NodepopComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_driverpop_driverpop_component__["a" /* DriverpopComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_nsdetails_nsdetails_component__["a" /* NsdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_nodedetails_nodedetails_component__["a" /* NodedetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_customdetails_customdetails_component__["a" /* CustomdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_showlog_showlog_component__["a" /* ShowlogComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_getns_getns_component__["a" /* GetnsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_nscontrol_nscontrol_component__["a" /* NscontrolComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_nslog_nslog_component__["a" /* NslogComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_modal_ns_update_modal_ns_update_component__["a" /* ModalNsUpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_nsnotices_nsnotices_component__["a" /* NsnoticesComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__["BootstrapModalModule"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_22__components_confirm_confirm_component__["a" /* ConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_nodepop_nodepop_component__["a" /* NodepopComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_modal_ns_update_modal_ns_update_component__["a" /* ModalNsUpdateComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7__services_settings_service__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_8__services_websockets_service__["a" /* WebsocketsService */], __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_9__services_addnode_service__["a" /* AddnodeService */], __WEBPACK_IMPORTED_MODULE_10__services_validate_service__["a" /* ValidateService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_addnode_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_websockets_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirm_confirm_component__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnodeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddnodeComponent = /** @class */ (function () {
    function AddnodeComponent(validateService, flashMessage, dialogService, addNodeService, sockets, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.dialogService = dialogService;
        this.addNodeService = addNodeService;
        this.sockets = sockets;
        this.router = router;
        this.nsTypes = [];
        this.indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.types = ['Local (Co-Resident with Polyglot)', 'Remote'];
        this.typeSet = ['local', 'remote'];
        this.selectedType = this.typeSet[0];
        this.selectedNS = this.nsTypes[0];
    }
    AddnodeComponent.prototype.onSelect = function (index) {
        this.profileNum = index;
    };
    AddnodeComponent.prototype.onSelectType = function (index) {
        this.selectedType = this.typeSet[index];
    };
    AddnodeComponent.prototype.onSelectNS = function (index) {
        this.selectedNS = this.nsTypes[index];
    };
    AddnodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.received = false;
        this.sockets.start(function (connected) {
            if (connected) {
                _this.sockets.sendMessage('nodeservers', { 'nodetypes': '' });
                _this.getNsTypes();
            }
        });
        this.getNodeServers();
    };
    AddnodeComponent.prototype.showConfirm = function () {
        var _this = this;
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_7__confirm_confirm_component__["a" /* ConfirmComponent */], {
            title: 'Add NodeServer',
            message: "Typically it is only necessary to restart the admin console by closing and re-opening it. If this doesn't show your new NodeServer, use the Reboot ISY button on the navigation bar above."
        })
            .subscribe(function (isConfirmed) {
            _this.onRegisterSubmit(isConfirmed);
        });
    };
    AddnodeComponent.prototype.getNodeServers = function () {
        var _this = this;
        this.subNodeServers = this.sockets.nodeServerData.subscribe(function (nodeServers) {
            _this.nodeServers = nodeServers;
            _this.nodeServers.forEach(function (ns) {
                var ind = _this.indexes.indexOf(parseInt(ns.profileNum));
                if (ind > -1) {
                    _this.indexes.splice(ind, 1);
                }
            });
            _this.profileNum = _this.indexes[0];
        });
    };
    AddnodeComponent.prototype.getNsTypes = function () {
        var _this = this;
        this.subNsTypes = this.sockets.nsTypeResponse.subscribe(function (nsTypes) {
            _this.received = true;
            _this.nsTypes = nsTypes.notInUse;
            _this.selectedNS = _this.nsTypes[0];
        });
    };
    AddnodeComponent.prototype.onRegisterSubmit = function (confirmed) {
        if (!confirmed) {
            return;
        }
        if (!this.sockets.isyConnected) {
            this.flashMessage.show('ISY not connected to Polyglot. Can\'t add NodeServers.', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
            window.scrollTo(0, 0);
        }
        else {
            if (this.selectedType === 'local') {
                var name = this.selectedNS['name'];
                var path = this.selectedNS['_folder'];
            }
            else {
                name = this.name;
            }
            var node = {
                name: name || this.name,
                profileNum: this.profileNum,
                type: this.selectedType,
                path: path || ''
            };
            if (!this.validateService.validateRegister(node)) {
                this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            if (!this.validateService.validateProfileNum(node.profileNum)) {
                this.flashMessage.show('Please use 1 through 10 for Node Server Number.', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            if (this.sockets.connected) {
                this.sockets.sendMessage('nodeservers', { addns: node }, false, true);
                this.flashMessage.show("Successfully submitted " + node.type + " NodeServer " + node.name + " at slot " + node.profileNum, { cssClass: 'alert-success', timeout: 3000 });
                window.scrollTo(0, 0);
                this.router.navigate(['/dashboard']);
            }
            else {
                this.flashMessage.show('Websockets not connected to Polyglot. Node not added.', {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                window.scrollTo(0, 0);
            }
        }
    };
    AddnodeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addnode',
            template: __webpack_require__(420),
            styles: [__webpack_require__(394)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_addnode_service__["a" /* AddnodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_addnode_service__["a" /* AddnodeService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_websockets_service__["a" /* WebsocketsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_websockets_service__["a" /* WebsocketsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _f || Object])
    ], AddnodeComponent);
    return AddnodeComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=addnode.component.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nsdetails_nsdetails_component__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomdetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomdetailsComponent = /** @class */ (function () {
    //private shortPoll
    //private longPoll
    function CustomdetailsComponent(nsdetails) {
        this.nsdetails = nsdetails;
    }
    CustomdetailsComponent.prototype.ngOnInit = function () {
    };
    CustomdetailsComponent.prototype.addCustom = function (key, value) {
        this.nsdetails.customParams[key] = value;
        this.nsdetails.arrayOfKeys = Object.keys(this.nsdetails.customParams);
        var inputValue = document.getElementById('newkey').value = '';
        var inputValue2 = document.getElementById('newvalue').value = '';
        this.nsdetails.sendCustom();
    };
    CustomdetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customdetails',
            template: __webpack_require__(422),
            styles: [__webpack_require__(396)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nsdetails_nsdetails_component__["a" /* NsdetailsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nsdetails_nsdetails_component__["a" /* NsdetailsComponent */]) === "function" && _a || Object])
    ], CustomdetailsComponent);
    return CustomdetailsComponent;
    var _a;
}());

//# sourceMappingURL=customdetails.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websockets_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_confirm_component__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_settings_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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
    function DashboardComponent(sockets, flashMessage, dialogService, router, settingsService) {
        this.sockets = sockets;
        this.flashMessage = flashMessage;
        this.dialogService = dialogService;
        this.router = router;
        this.settingsService = settingsService;
        this.confirmResult = null;
        this.nodeDetails = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (!this.sockets.connected)
            this.sockets.start();
        this.getSettings();
        this.getNodeServers();
        this.getNodeServerResponses();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.subNodeServers) {
            this.subNodeServers.unsubscribe();
        }
        if (this.subResponses) {
            this.subResponses.unsubscribe();
        }
        if (this.subSettings) {
            this.subSettings.unsubscribe();
        }
    };
    DashboardComponent.prototype.deleteNodeServer = function (nodeServer, confirmed) {
        if (confirmed) {
            this.sockets.sendMessage('nodeservers', { delns: { profileNum: nodeServer.profileNum } }, false, true);
        }
    };
    DashboardComponent.prototype.showConfirm = function (nodeServer) {
        var _this = this;
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_5__confirm_confirm_component__["a" /* ConfirmComponent */], {
            title: 'Delete NodeServer',
            message: "This will delete the " + nodeServer.name + " NodeServer. You will need to restart the ISY admin console to reflect the changes, if you are still having problems, click on 'Reboot ISY' above. Are you sure you want to delete?"
        })
            .subscribe(function (isConfirmed) {
            _this.deleteNodeServer(nodeServer, isConfirmed);
        });
    };
    DashboardComponent.prototype.showNodes = function (nodeServer) {
        if (this.selectedNode === nodeServer) {
            return this.selectedNode = null;
        }
        if (nodeServer.nodes.length === 0) {
            this.flashMessage.show('This NodeServer has no nodes defined.', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return window.scrollTo(0, 0);
        }
        this.selectedNode = nodeServer;
        /*this.dialogService.addDialog(NodepopComponent, {
          title: `${nodeServer.name} nodes`,
          message: nodeServer.nodes},
          { closeByClickingOutside:true }) */
    };
    DashboardComponent.prototype.getNodeServers = function () {
        var _this = this;
        this.subNodeServers = this.sockets.nodeServerData.subscribe(function (nodeServers) {
            _this.nodeServers = nodeServers;
            if (_this.selectedNode) {
                for (var i in _this.nodeServers) {
                    if (_this.nodeServers[i].profileNum === _this.selectedNode.profileNum) {
                        _this.selectedNode = _this.nodeServers[i];
                    }
                }
            }
        });
    };
    DashboardComponent.prototype.getNodeServerResponses = function () {
        var _this = this;
        this.subResponses = this.sockets.nodeServerResponse.subscribe(function (response) {
            if (response.hasOwnProperty('success')) {
                if (response.success) {
                    _this.flashMessage.show(response.msg, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    window.scrollTo(0, 0);
                }
                else {
                    _this.flashMessage.show(response.msg, {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    window.scrollTo(0, 0);
                }
            }
        });
    };
    DashboardComponent.prototype.redirect = function (profileNum) {
        //this.settingsService.currentNode = profileNum
        this.router.navigate(['/nsdetails', profileNum]);
    };
    DashboardComponent.prototype.getSettings = function () {
        var _this = this;
        this.subSettings = this.sockets.settingsData.subscribe(function (settings) {
            _this.isyConnected = settings.isyConnected;
            _this.isyFound = settings.isyFound;
            _this.isyHttps = settings.isyHttps;
            _this.isyHost = settings.isyHost;
            _this.isyPort = settings.isyPort;
            _this.gotSettings = true;
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(423),
            styles: [__webpack_require__(397)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_websockets_service__["a" /* WebsocketsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_websockets_service__["a" /* WebsocketsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_settings_service__["a" /* SettingsService */]) === "function" && _e || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverpopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DriverpopComponent = /** @class */ (function () {
    function DriverpopComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DriverpopComponent.prototype, "drivers", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DriverpopComponent.prototype, "selectedNode", void 0);
    DriverpopComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-driverpop',
            template: __webpack_require__(424),
            styles: [__webpack_require__(398)]
        }),
        __metadata("design:paramtypes", [])
    ], DriverpopComponent);
    return DriverpopComponent;
}());

//# sourceMappingURL=driverpop.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websockets_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_settings_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_addnode_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__confirm_confirm_component__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FooterComponent = /** @class */ (function () {
    function FooterComponent(dialogService, addNodeService, flashMessage, router, sockets, settings, authService) {
        this.dialogService = dialogService;
        this.addNodeService = addNodeService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.sockets = sockets;
        this.settings = settings;
        this.authService = authService;
        this.gotPackage = false;
        this.updateAvail = false;
        this.upgrading = false;
        this.progress = {
            percent: 0
        };
        this.Math = Math;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPolyglot();
        this.getSettings();
        setTimeout(function () {
            _this.getPolyVersion();
        }, 1000);
        this.getUpgrade();
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        if (this.subUpgrade) {
            this.subUpgrade.unsubscribe();
        }
        if (this.subSettings) {
            this.subSettings.unsubscribe();
        }
    };
    FooterComponent.prototype.getPolyglot = function () {
        var _this = this;
        this.sockets.polyglotData.subscribe(function (polyglot) { return _this.polyglot = polyglot; });
    };
    FooterComponent.prototype.getUpgrade = function () {
        var _this = this;
        this.subUpgrade = this.sockets.upgradeData.subscribe(function (data) {
            if (data.hasOwnProperty('start')) {
                if (data.start.success) {
                    _this.flashMessage.show(data.start.msg, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                }
                else {
                    _this.flashMessage.show(data.start.msg, {
                        cssClass: 'alert-danger',
                        timeout: 6000
                    });
                    _this.upgrading = false;
                    window.scrollTo(0, 0);
                }
            }
            else if (data.hasOwnProperty('stop')) {
                if (data.stop.success) {
                    _this.flashMessage.show(data.stop.msg, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.upgrading = false;
                    window.scrollTo(0, 0);
                }
                else {
                    _this.flashMessage.show(data.stop.msg, {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    _this.upgrading = false;
                    window.scrollTo(0, 0);
                }
            }
            else if (data.hasOwnProperty('error')) {
                _this.flashMessage.show(data.error.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.upgrading = false;
                window.scrollTo(0, 0);
            }
            else if (data.hasOwnProperty('progress')) {
                _this.progress = data.progress;
            }
            else if (data.hasOwnProperty('complete')) {
                _this.flashMessage.show(data.complete.msg, {
                    cssClass: 'alert-success',
                    timeout: 20000
                });
                _this.upgrading = false;
                window.scrollTo(0, 0);
                setTimeout(function () {
                    _this.logout();
                }, 2000);
            }
        });
    };
    FooterComponent.prototype.logout = function () {
        this.updateAvail = false;
        if (this.subUpgrade) {
            this.subUpgrade.unsubscribe();
        }
        if (this.subSettings) {
            this.subSettings.unsubscribe();
        }
        this.authService.logout();
        this.sockets.stop();
        this.router.navigate(['/login']);
    };
    FooterComponent.prototype.getSettings = function () {
        var _this = this;
        this.subSettings = this.sockets.settingsData.subscribe(function (settings) {
            _this.isyVersion = settings.isyVersion;
            _this.pgVersion = settings.pgVersion;
        });
    };
    FooterComponent.prototype.getPolyVersion = function () {
        var _this = this;
        this.addNodeService.getPolyglotVersion().subscribe(function (pkgjson) {
            _this.polyPackage = pkgjson;
            _this.gitVersion = pkgjson.version;
            _this.gotPackage = true;
            _this.checkUpgrade();
        });
    };
    FooterComponent.prototype.checkUpgrade = function () {
        if (this.pgVersion && this.gitVersion) {
            if (this.compareVersions(this.pgVersion, '<', this.gitVersion)) {
                this.updateAvail = true;
            }
        }
    };
    FooterComponent.prototype.compareVersions = function (v1, comparator, v2) {
        var comparator = comparator == '=' ? '==' : comparator;
        if (['==', '===', '<', '<=', '>', '>=', '!=', '!=='].indexOf(comparator) == -1) {
            throw new Error('Invalid comparator. ' + comparator);
        }
        var v1parts = v1.split('.'), v2parts = v2.split('.');
        var maxLen = Math.max(v1parts.length, v2parts.length);
        var part1, part2;
        var cmp = 0;
        for (var i = 0; i < maxLen && !cmp; i++) {
            part1 = parseInt(v1parts[i], 10) || 0;
            part2 = parseInt(v2parts[i], 10) || 0;
            if (part1 < part2)
                cmp = 1;
            if (part1 > part2)
                cmp = -1;
        }
        return eval('0' + comparator + cmp);
    };
    FooterComponent.prototype.showConfirm = function () {
        var _this = this;
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_8__confirm_confirm_component__["a" /* ConfirmComponent */], {
            title: "Upgrade Polyglot? New version available " + this.gitVersion,
            message: "Upgrading Polyglot from here will automatically download the latest binary for your system type and extract it OVER the existing binary. It will\n                then exit Polyglot. If you do NOT have the auto-start scripts installed for linux(systemctl) or OSX(launchctl) then Polyglot will NOT restart\n                automatically. You will have to manually restart. If you are not using the binary, upgrade via git. Continue?"
        })
            .subscribe(function (isConfirmed) {
            _this.upgradeSubmit(isConfirmed);
        });
    };
    FooterComponent.prototype.upgradeSubmit = function (confim) {
        this.upgrading = true;
        this.sockets.sendMessage('upgrade', { start: '' });
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(425),
            styles: [__webpack_require__(399)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_addnode_service__["a" /* AddnodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_addnode_service__["a" /* AddnodeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_websockets_service__["a" /* WebsocketsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_websockets_service__["a" /* WebsocketsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _g || Object])
    ], FooterComponent);
    return FooterComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_addnode_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_confirm_component__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_ns_update_modal_ns_update_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_settings_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_websockets_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetnsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GetnsComponent = /** @class */ (function () {
    function GetnsComponent(addNodeService, sockets, settingsService, dialogService, flashMessage) {
        this.addNodeService = addNodeService;
        this.sockets = sockets;
        this.settingsService = settingsService;
        this.dialogService = dialogService;
        this.flashMessage = flashMessage;
        this.received = false;
        this.installedTypes = [];
    }
    GetnsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNSList();
        this.sockets.start(function (connected) {
            if (connected) {
                _this.sockets.sendMessage('nodeservers', { 'nodetypes': '' });
                _this.getNsTypes();
                _this.getNodeServerResponses();
            }
        });
    };
    GetnsComponent.prototype.ngOnDestroy = function () {
        if (this.subResponses) {
            this.subResponses.unsubscribe();
        }
    };
    GetnsComponent.prototype.getNSList = function () {
        var _this = this;
        this.addNodeService.getNSList().subscribe(function (nsList) {
            _this.nsList = nsList;
            _this.received = true;
        });
        this.flashMessage.show("Refreshed NodeServers List from Server.", {
            cssClass: 'alert-success',
            timeout: 3000
        });
    };
    GetnsComponent.prototype.installNS = function (ns, confirmed) {
        var _this = this;
        if (!confirmed) {
            return;
        }
        this.sockets.start(function (connected) {
            if (connected) {
                _this.sockets.sendMessage('nodeservers', { 'installns': ns }, false, true);
                _this.flashMessage.show("Installing " + ns.name + " please wait...", {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
            }
        });
    };
    GetnsComponent.prototype.updateNS = function (ns) {
        var _this = this;
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_4__modal_ns_update_modal_ns_update_component__["a" /* ModalNsUpdateComponent */], {
            title: 'Upload profile to ISY?',
            message: "Do you want to re-upload the profile.zip for " + ns.name + " to ISY? This will NOT automatically reboot the ISY. Typically only a restart of the admin console is necessary. However, if your expected changes do not appear, please restart the ISY with the 'Reboot ISY' button above. 'No' will proceed with the update WITHOUT uploading the profile."
        }).subscribe(function (isConfirmed) {
            if (isConfirmed !== null) {
                if (isConfirmed) {
                    ns['updateProfile'] = isConfirmed;
                }
                _this.sockets.start(function (connected) {
                    if (connected) {
                        _this.sockets.sendMessage('nodeservers', { 'updatens': ns }, false, true);
                        delete ns.updateProfile;
                        _this.flashMessage.show("Updating " + ns.name + " please wait...", {
                            cssClass: 'alert-success',
                            timeout: 5000
                        });
                    }
                });
            }
        });
    };
    GetnsComponent.prototype.uninstallNS = function (ns, confirmed) {
        var _this = this;
        if (!confirmed) {
            return;
        }
        this.sockets.start(function (connected) {
            if (connected) {
                _this.sockets.sendMessage('nodeservers', { 'uninstallns': ns }, false, true);
                _this.flashMessage.show("Uninstalling " + ns.name + " please wait...", {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
            }
        });
    };
    GetnsComponent.prototype.isInstalled = function (ns) {
        return (__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.includes(this.installedTypes, ns.name));
    };
    GetnsComponent.prototype.addConfirm = function (ns) {
        var _this = this;
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_3__confirm_confirm_component__["a" /* ConfirmComponent */], {
            title: 'Install NodeServer?',
            message: "Do you really want to install the NodeServer named " + ns.name + "? This will clone the repository from: " + ns.url
        })
            .subscribe(function (isConfirmed) {
            _this.installNS(ns, isConfirmed);
        });
    };
    GetnsComponent.prototype.delConfirm = function (ns) {
        var _this = this;
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_3__confirm_confirm_component__["a" /* ConfirmComponent */], {
            title: 'Uninstall NodeServer?',
            message: "Do you really want to uninstall the NodeServer named " + ns.name + "? This will completely delete the NodeServer folder from Polyglot. CANNOT BE UNDONE."
        })
            .subscribe(function (isConfirmed) {
            _this.uninstallNS(ns, isConfirmed);
        });
    };
    GetnsComponent.prototype.getNodeServerResponses = function () {
        var _this = this;
        this.subResponses = this.sockets.nodeServerResponse.subscribe(function (response) {
            if (response.hasOwnProperty('success')) {
                if (response.success) {
                    _this.flashMessage.show(response.msg, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    window.scrollTo(0, 0);
                }
                else {
                    _this.flashMessage.show(response.msg, {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    window.scrollTo(0, 0);
                }
            }
        });
    };
    GetnsComponent.prototype.getNsTypes = function () {
        var _this = this;
        this.subNsTypes = this.sockets.nsTypeResponse.subscribe(function (nsTypes) {
            _this.received = true;
            _this.installedTypes = nsTypes.installed;
        });
    };
    GetnsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-getns',
            template: __webpack_require__(426),
            styles: [__webpack_require__(400)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_addnode_service__["a" /* AddnodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_addnode_service__["a" /* AddnodeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_websockets_service__["a" /* WebsocketsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_websockets_service__["a" /* WebsocketsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_settings_service__["a" /* SettingsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
    ], GetnsComponent);
    return GetnsComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=getns.component.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_websockets_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(sockets, authService) {
        this.sockets = sockets;
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            if (!this.sockets.connected)
                this.sockets.start();
        }
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(427),
            styles: [__webpack_require__(401)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_websockets_service__["a" /* WebsocketsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_websockets_service__["a" /* WebsocketsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_websockets_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(sockets, authService, router, flashMessage, settingsService) {
        this.sockets = sockets;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.settingsService = settingsService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.settingsService.getSettings().subscribe(function (settings) {
                    _this.settingsService.storeSettings(settings);
                    _this.router.navigate(['/dashboard']);
                    _this.flashMessage.show('You are now logged in', {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                });
            }
            else {
                _this.router.navigate(['/login']);
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(428),
            styles: [__webpack_require__(402)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_websockets_service__["a" /* WebsocketsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_websockets_service__["a" /* WebsocketsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]) === "function" && _e || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_websockets_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_confirm_component__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, dialogService, flashMessage, sockets) {
        this.authService = authService;
        this.router = router;
        this.dialogService = dialogService;
        this.flashMessage = flashMessage;
        this.sockets = sockets;
        this.isCollapsed = true;
        this.connected = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.getMqttState();
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        if (this.subMqttState) {
            this.subMqttState.unsubscribe();
        }
    };
    NavbarComponent.prototype.showConfirm = function () {
        var _this = this;
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_6__confirm_confirm_component__["a" /* ConfirmComponent */], {
            title: 'Reboot ISY?',
            message: "This will reboot the ISY. This is usually not necessary. You should try to restart the admin console first. Are you sure?"
        })
            .subscribe(function (isConfirmed) {
            _this.rebootClick();
        });
    };
    NavbarComponent.prototype.getMqttState = function () {
        var _this = this;
        this.subMqttState = this.sockets.mqttConnected.subscribe(function (mqttState) {
            _this.connected = mqttState;
        });
    };
    NavbarComponent.prototype.rebootClick = function () {
        this.sockets.sendMessage('nodeservers', { rebootISY: {} });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        if (this.subMqttState) {
            this.subMqttState.unsubscribe();
        }
        this.sockets.stop();
        this.flashMessage.show('You are logged out.', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(430),
            styles: [__webpack_require__(404)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_websockets_service__["a" /* WebsocketsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_websockets_service__["a" /* WebsocketsService */]) === "function" && _e || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nsdetails_nsdetails_component__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodedetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodedetailsComponent = /** @class */ (function () {
    function NodedetailsComponent(nsdetails) {
        this.nsdetails = nsdetails;
    }
    NodedetailsComponent.prototype.ngOnInit = function () {
    };
    NodedetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nodedetails',
            template: __webpack_require__(431),
            styles: [__webpack_require__(405)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nsdetails_nsdetails_component__["a" /* NsdetailsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nsdetails_nsdetails_component__["a" /* NsdetailsComponent */]) === "function" && _a || Object])
    ], NodedetailsComponent);
    return NodedetailsComponent;
    var _a;
}());

//# sourceMappingURL=nodedetails.component.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodepopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NodepopComponent = /** @class */ (function () {
    function NodepopComponent() {
    }
    NodepopComponent.prototype.showDrivers = function (drivers, i) {
        if (this.selectedDrivers === drivers) {
            this.selectedRow = null;
            return this.selectedDrivers = null;
        }
        this.selectedDrivers = drivers;
        this.selectedRow = i;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NodepopComponent.prototype, "node", void 0);
    NodepopComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nodepop',
            template: __webpack_require__(432),
            styles: [__webpack_require__(406)]
        })
    ], NodepopComponent);
    return NodepopComponent;
}());

//# sourceMappingURL=nodepop.component.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nsdetails_nsdetails_component__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NscontrolComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NscontrolComponent = /** @class */ (function () {
    function NscontrolComponent(nsdetails) {
        this.nsdetails = nsdetails;
    }
    NscontrolComponent.prototype.ngOnInit = function () {
    };
    NscontrolComponent.prototype.sendControl = function (type) {
        this.nsdetails.sendControl(type);
    };
    NscontrolComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nscontrol',
            template: __webpack_require__(433),
            styles: [__webpack_require__(407)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nsdetails_nsdetails_component__["a" /* NsdetailsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nsdetails_nsdetails_component__["a" /* NsdetailsComponent */]) === "function" && _a || Object])
    ], NscontrolComponent);
    return NscontrolComponent;
    var _a;
}());

//# sourceMappingURL=nscontrol.component.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_mqtt_mqttws31__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_mqtt_mqttws31___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_mqtt_mqttws31__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_ReplaySubject__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WebsocketsService = /** @class */ (function () {
    function WebsocketsService(authService, settingsService) {
        this.authService = authService;
        this.settingsService = settingsService;
        this.connected = false;
        this.isyConnected = false;
        this.polyglotData = new __WEBPACK_IMPORTED_MODULE_5_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.nodeServerData = new __WEBPACK_IMPORTED_MODULE_5_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.installedNSData = new __WEBPACK_IMPORTED_MODULE_5_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.settingsData = new __WEBPACK_IMPORTED_MODULE_5_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.nodeServerResponse = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"];
        this.upgradeData = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"];
        this.settingsResponse = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"];
        this.nsTypeResponse = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"];
        this.mqttConnected = new __WEBPACK_IMPORTED_MODULE_5_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.logData = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"];
        this.nsResponses = new Array;
        this.setResponses = new Array;
        this._seq = Math.floor(Math.random() * 90000) + 10000;
    }
    WebsocketsService.prototype.start = function (cb) {
        var _this = this;
        if (cb === void 0) { cb = function (connected) { }; }
        if (this.connected) {
            if (cb) {
                return cb(true);
            }
        }
        this.settingsService.loadSettings();
        if (!this.id) {
            this.id = 'polyglot_frontend-' + this.randomString(5);
            // this._seq = Math.floor(Math.random() * 90000) + 10000
        }
        var host = location.hostname;
        if (!(this.settingsService.settings.mqttHost === 'localhost')) {
            host = this.settingsService.settings.mqttHost;
        }
        if (!this.client) {
            this.client = new __WEBPACK_IMPORTED_MODULE_1_ng2_mqtt_mqttws31__["Paho"].MQTT.Client(host, 32469, this.id);
        }
        this.onMessage();
        this.onConnectionLost();
        var message = { node: this.id, connected: false };
        this._willMessage = new __WEBPACK_IMPORTED_MODULE_1_ng2_mqtt_mqttws31__["Paho"].MQTT.Message(JSON.stringify(message));
        this._willMessage.destinationName = 'udi/polyglot/connections/frontend';
        this._willMessage.qos = 0;
        this._willMessage.retained = false;
        this.client.connect({ onSuccess: this.onConnected.bind(this),
            willMessage: this._willMessage,
            useSSL: true,
            userName: this.id,
            password: this.settingsService.settings.secret
        });
        setTimeout(function () {
            if (cb) {
                return cb(_this.connected ? true : false);
            }
        }, 1000);
    };
    WebsocketsService.prototype.onConnected = function () {
        // console.log('Connected')
        this.connected = true;
        this.connectionState(true);
        this.client.subscribe('udi/polyglot/connections/polyglot', null);
        this.client.subscribe('udi/polyglot/frontend/#', null);
        this.client.subscribe('udi/polyglot/log/' + this.id, null);
        //this.client.subscribe('udi/polyglot/log/' + this.id, null)
        var message = { connected: true };
        this.sendMessage('connections', message);
    };
    WebsocketsService.prototype.sendMessage = function (topic, message, retained, needResponse) {
        if (retained === void 0) { retained = false; }
        if (needResponse === void 0) { needResponse = false; }
        var msg = JSON.stringify(Object.assign({ node: this.id }, message, needResponse ? { seq: this._seq } : undefined));
        if (needResponse) {
            if (topic === 'settings') {
                this.setResponses.push(JSON.parse(msg));
            }
            else if (topic === 'nodeservers') {
                this.nsResponses.push(JSON.parse(msg));
            }
            this._seq++;
        }
        var packet = new __WEBPACK_IMPORTED_MODULE_1_ng2_mqtt_mqttws31__["Paho"].MQTT.Message(msg);
        if (topic === 'connections') {
            topic = 'udi/polyglot/connections/frontend';
        }
        else if (topic === 'settings') {
            topic = 'udi/polyglot/frontend/settings';
        }
        else if (topic === 'upgrade') {
            topic = 'udi/polyglot/frontend/upgrade';
        }
        else if (topic === 'nodeservers') {
            topic = 'udi/polyglot/frontend/nodeservers';
        }
        else if (topic === 'log') {
            topic = 'udi/polyglot/frontend/log';
        }
        else {
            topic = 'udi/polyglot/ns/' + topic;
        }
        packet.destinationName = topic;
        packet.retained = retained;
        this.client.send(packet);
    };
    WebsocketsService.prototype.onMessage = function () {
        var _this = this;
        this.client.onMessageArrived = function (message) {
            var msg = JSON.parse(message.payloadString);
            if (msg.node === undefined || msg.node.substring(0, 18) === 'polyglot_frontend-') {
                return;
            }
            if (message.destinationName === 'udi/polyglot/connections/polyglot') {
                _this.processConnection(msg);
            }
            else if (message.destinationName === 'udi/polyglot/frontend/nodeservers') {
                _this.processNodeServers(msg);
            }
            else if (message.destinationName === 'udi/polyglot/frontend/upgrade') {
                _this.processUpgrade(msg);
            }
            else if (message.destinationName === 'udi/polyglot/frontend/settings') {
                _this.processSettings(msg);
            }
            else if (message.destinationName === 'udi/polyglot/frontend/log/' + _this.id) {
                _this.processLog(msg);
            }
        };
    };
    WebsocketsService.prototype.onConnectionLost = function () {
        var _this = this;
        this.client.onConnectionLost = function (responseObject) {
            _this.connectionState(false);
            _this.connected = false;
            _this.retryConnection();
        };
    };
    WebsocketsService.prototype.retryConnection = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            if (!(this.connected)) {
                this.start(function (connected) {
                    if (!connected) {
                        setTimeout(function () {
                            _this.retryConnection();
                        }, 5000);
                    }
                });
            }
        }
    };
    WebsocketsService.prototype.stop = function () {
        this.sendMessage('connections', { connected: false });
        this.client.disconnect();
        this.connectionState(false);
        this.connected = false;
        //console.log('MQTT: Disconnected')
    };
    WebsocketsService.prototype.randomString = function (length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    WebsocketsService.prototype.connectionState = function (newState) {
        if (this.mqttConnected !== undefined)
            this.mqttConnected.next(newState);
    };
    WebsocketsService.prototype.processLog = function (message) {
        this.getLog(message);
    };
    WebsocketsService.prototype.getLog = function (message) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(message).subscribe(function (data) { return _this.logData.next(data); });
        return this.logData;
    };
    WebsocketsService.prototype.processConnection = function (message) {
        this.getPolyglot(message);
    };
    WebsocketsService.prototype.getPolyglot = function (message) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(message).subscribe(function (data) { return _this.polyglotData.next(data); });
        return this.polyglotData;
    };
    WebsocketsService.prototype.processNodeServers = function (message) {
        var _this = this;
        if (message.hasOwnProperty('response') && message.hasOwnProperty('seq')) {
            this.nsResponses.forEach(function (item) {
                if (item.seq === message.seq) {
                    _this.nodeServerResponses(message);
                    return;
                }
            });
        }
        else if (message.hasOwnProperty('nodetypes')) {
            this.nsTypeResponses(message);
        }
        else if (message.hasOwnProperty('installedns')) {
            this.getinstalledNS(message);
        }
        else {
            this.getNodeServers(message);
        }
    };
    WebsocketsService.prototype.getNodeServers = function (message) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(message.nodeservers).subscribe(function (data) { return _this.nodeServerData.next(data); });
        return this.nodeServerData;
    };
    WebsocketsService.prototype.getinstalledNS = function (message) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(message.installedns).subscribe(function (data) { return _this.installedNSData.next(data); });
        return this.installedNSData;
    };
    WebsocketsService.prototype.nodeServerResponses = function (message) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(message.response).subscribe(function (data) { return _this.nodeServerResponse.next(data); });
        return this.nodeServerResponse;
    };
    WebsocketsService.prototype.nsTypeResponses = function (message) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(message.nodetypes).subscribe(function (data) { return _this.nsTypeResponse.next(data); });
        return this.nsTypeResponse;
    };
    WebsocketsService.prototype.processSettings = function (message) {
        var _this = this;
        if (message.hasOwnProperty('response') && message.hasOwnProperty('seq')) {
            this.setResponses.forEach(function (item) {
                if (item.seq === message.seq) {
                    _this.settingsResponses(message);
                    return;
                }
            });
        }
        else {
            //this.settingsService.storeSettings(message.settings)
            if (message.settings.hasOwnProperty('isyConnected'))
                this.isyConnected = message.settings.isyConnected;
            this.getSettings(message);
        }
    };
    WebsocketsService.prototype.getSettings = function (message) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(message.settings).subscribe(function (data) { return _this.settingsData.next(data); });
        return this.settingsData;
    };
    WebsocketsService.prototype.settingsResponses = function (message) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(message.response).subscribe(function (data) { return _this.settingsResponse.next(data); });
        return this.settingsData;
    };
    WebsocketsService.prototype.processUpgrade = function (message) {
        this.getUpgrade(message);
    };
    WebsocketsService.prototype.getUpgrade = function (message) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(message).subscribe(function (data) { return _this.upgradeData.next(data); });
        return this.upgradeData;
    };
    WebsocketsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__settings_service__["a" /* SettingsService */]) === "function" && _b || Object])
    ], WebsocketsService);
    return WebsocketsService;
    var _a, _b;
}());

//# sourceMappingURL=websockets.service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nsdetails_nsdetails_component__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NslogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NslogComponent = /** @class */ (function () {
    function NslogComponent(nsdetails) {
        this.nsdetails = nsdetails;
    }
    NslogComponent.prototype.ngOnInit = function () {
    };
    NslogComponent.prototype.ngOnDestroy = function () {
    };
    NslogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nslog',
            template: __webpack_require__(435),
            styles: [__webpack_require__(409)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nsdetails_nsdetails_component__["a" /* NsdetailsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nsdetails_nsdetails_component__["a" /* NsdetailsComponent */]) === "function" && _a || Object])
    ], NslogComponent);
    return NslogComponent;
    var _a;
}());

//# sourceMappingURL=nslog.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nsdetails_nsdetails_component__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsnoticesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NsnoticesComponent = /** @class */ (function () {
    function NsnoticesComponent(nsdetails) {
        this.nsdetails = nsdetails;
    }
    NsnoticesComponent.prototype.ngOnInit = function () {
    };
    NsnoticesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nsnotices',
            template: __webpack_require__(436),
            styles: [__webpack_require__(410)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nsdetails_nsdetails_component__["a" /* NsdetailsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nsdetails_nsdetails_component__["a" /* NsdetailsComponent */]) === "function" && _a || Object])
    ], NsnoticesComponent);
    return NsnoticesComponent;
    var _a;
}());

//# sourceMappingURL=nsnotices.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_websockets_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_settings_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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
    function ProfileComponent(fb, authService, router, flashMessage, sockets, settingsService) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.sockets = sockets;
        this.settingsService = settingsService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.sockets.connected)
            this.sockets.start();
        this.profileForm = this.fb.group({
            username: '',
            password: ''
        });
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.profileForm.patchValue({
                username: profile.user.username
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.logout = function () {
        this.authService.logout();
        this.sockets.stop();
        this.flashMessage.show('Password Changed. Logging you out.', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    ProfileComponent.prototype.getDirtyValues = function (cg) {
        var _this = this;
        var dirtyValues = {};
        Object.keys(cg.controls).forEach(function (c) {
            var currentControl = cg.get(c);
            if (currentControl.dirty) {
                if (currentControl.controls) {
                    dirtyValues[c] = _this.getDirtyValues(currentControl);
                }
                else {
                    dirtyValues[c] = currentControl.value;
                }
            }
        });
        return dirtyValues;
    };
    ProfileComponent.prototype.saveProfile = function (profile) {
        if (this.sockets.connected) {
            if (JSON.stringify(profile) !== '{}') {
                profile['_id'] = this.user['_id'];
                this.sockets.sendMessage('settings', { updateprofile: profile }, false, true);
                this.flashMessage.show('Profile saved successfully.', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                window.scrollTo(0, 0);
                this.logout();
            }
        }
        else {
            this.flashMessage.show('Websockets not connected to Polyglot. Profile not saved.', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
            window.scrollTo(0, 0);
        }
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(437),
            styles: [__webpack_require__(411)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_websockets_service__["a" /* WebsocketsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_websockets_service__["a" /* WebsocketsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */]) === "function" && _f || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_websockets_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(fb, sockets, authService, router, flashMessage, settingsService) {
        this.fb = fb;
        this.sockets = sockets;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.settingsService = settingsService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        if (!this.sockets.connected)
            this.sockets.start();
        this.settingsForm = this.fb.group({
            isyHost: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required],
            isyPort: [80, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required],
            isyUsername: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required],
            isyPassword: '',
            isyHttps: false,
            mqttHost: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required],
            mqttPort: 1883
        });
        this.getSettings();
        this.getSettingResponses();
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        if (this.subSettings) {
            this.subSettings.unsubscribe();
        }
        if (this.subResponses) {
            this.subResponses.unsubscribe();
        }
    };
    SettingsComponent.prototype.sendSettingsREST = function (settings) {
        var _this = this;
        this.settingsService.setSettings(settings).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Settings saved successfully.', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                window.scrollTo(0, 0);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                window.scrollTo(0, 0);
            }
        });
    };
    SettingsComponent.prototype.getDirtyValues = function (cg) {
        var _this = this;
        var dirtyValues = {};
        Object.keys(cg.controls).forEach(function (c) {
            var currentControl = cg.get(c);
            if (currentControl.dirty) {
                if (currentControl.controls) {
                    dirtyValues[c] = _this.getDirtyValues(currentControl);
                }
                else {
                    dirtyValues[c] = currentControl.value;
                }
            }
        });
        return dirtyValues;
    };
    SettingsComponent.prototype.saveSettings = function (settings) {
        if (this.sockets.connected) {
            if (JSON.stringify(settings) !== '{}') {
                this.sockets.sendMessage('settings', { updatesettings: settings }, false, true);
            }
            else {
                this.flashMessage.show('No Settings Changed.', {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                window.scrollTo(0, 0);
            }
        }
        else {
            this.flashMessage.show('Websockets not connected to Polyglot. Settings not saved.', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
            window.scrollTo(0, 0);
        }
    };
    SettingsComponent.prototype.getSettings = function () {
        var _this = this;
        this.subSettings = this.sockets.settingsData.subscribe(function (settings) {
            _this.settingsForm.patchValue({
                isyHost: settings.isyHost,
                isyPort: settings.isyPort,
                isyUsername: settings.isyUsername,
                isyHttps: settings.isyHttps,
                mqttHost: settings.mqttHost,
                mqttPort: settings.mqttPort
            });
        });
    };
    SettingsComponent.prototype.getSettingResponses = function () {
        var _this = this;
        this.subResponses = this.sockets.settingsResponse.subscribe(function (response) {
            if (response.hasOwnProperty('success')) {
                if (response.success) {
                    _this.flashMessage.show('Settings saved successfully.', {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    window.scrollTo(0, 0);
                }
                else {
                    _this.flashMessage.show(response.msg, {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    window.scrollTo(0, 0);
                }
            }
        });
    };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(438),
            styles: [__webpack_require__(412)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_websockets_service__["a" /* WebsocketsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_websockets_service__["a" /* WebsocketsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]) === "function" && _f || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websockets_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowlogComponent = /** @class */ (function () {
    function ShowlogComponent(sockets) {
        this.sockets = sockets;
        this.logData = [];
    }
    ShowlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sockets.start(function (connected) {
            if (connected) {
                _this.sockets.sendMessage('log', { start: 'polyglot' });
                _this.getLog();
            }
        });
    };
    ShowlogComponent.prototype.ngOnDestroy = function () {
        if (this.sockets.connected) {
            this.sockets.sendMessage('log', { stop: 'polyglot' });
        }
        if (this.logConn) {
            this.logConn.unsubscribe();
        }
    };
    ShowlogComponent.prototype.getLog = function () {
        var _this = this;
        if (this.logConn) {
            return;
        }
        this.logConn = this.sockets.logData.subscribe(function (data) {
            try {
                var message = data;
                if (message.hasOwnProperty('node')) {
                    if (message.node === 'polyglot') {
                        _this.logData.push(data.log);
                    }
                }
            }
            catch (e) { }
        });
    };
    ShowlogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-showlog',
            template: __webpack_require__(439),
            styles: [__webpack_require__(413)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_websockets_service__["a" /* WebsocketsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_websockets_service__["a" /* WebsocketsService */]) === "function" && _a || Object])
    ], ShowlogComponent);
    return ShowlogComponent;
    var _a;
}());

//# sourceMappingURL=showlog.component.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    /*
      registerUser(user){
        let headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post('https://10.0.0.75:3000/frontend/register', user, {headers: headers})
          .map(res => res.json())
      }
    */
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PG_URI + '/frontend/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PG_URI + '/frontend/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        //localStorage.setItem('user', JSON.stringify(user))
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsService = /** @class */ (function () {
    function SettingsService(http) {
        this.http = http;
    }
    SettingsService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    SettingsService.prototype.getSettings = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PG_URI + '/frontend/settings', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SettingsService.prototype.setSettings = function (settings) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PG_URI + '/frontend/settings', settings, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SettingsService.prototype.setProfile = function (profile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PG_URI + '/frontend/settings', profile, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SettingsService.prototype.storeSettings = function (settings) {
        localStorage.setItem('settings', JSON.stringify(settings));
    };
    SettingsService.prototype.loadSettings = function () {
        this.settings = JSON.parse(localStorage.getItem('settings'));
        return JSON.parse(localStorage.getItem('settings'));
    };
    SettingsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], SettingsService);
    return SettingsService;
    var _a;
}());

//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "html {\r\n  position: relative;\r\n  min-height: 100%;\r\n}\r\nbody {\r\n  /* Margin bottom by footer height */\r\n  margin-bottom: 150px;\r\n}\r\n.footer {\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 100%;\r\n  /* Set the fixed height of the footer here */\r\n  height: 130px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".table tr.active td {\r\n  background-color:#123456 !important;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "pre {\r\n    display: block;\r\n    font-family: monospace;\r\n    color: #BFC8BF;\r\n    background-color: #272B30;\r\n    white-space: pre-wrap;\r\n    margin: 1em 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "pre {\r\n    display: block;\r\n    font-family: monospace;\r\n    color: #BFC8BF;\r\n    background-color: #272B30;\r\n    white-space: pre-wrap;\r\n    margin: 1em 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register New NodeServer</h2>\n<form (submit)=\"showConfirm()\">\n  <div>\n      <label>Node Server Type</label><br />\n      <select (change)=\"onSelectType($event.target.value)\" type=\"button\" class=\"btn btn-default dropdown-toggle btn-block\">\n          <option *ngFor=\"let type of types; let i = index\" [value]=\"i\">\n              {{type}}\n          </option>\n      </select>\n  <br /></div>\n  <div *ngIf=\"nsTypes.length > 0 && selectedType === 'local'\">\n      <label>Available Node Servers</label><br />\n      <select (change)=\"onSelectNS($event.target.value)\" type=\"button\" class=\"btn btn-default dropdown-toggle btn-block\">\n          <option *ngFor=\"let ns of this.nsTypes; let i = index\" [value]=\"i\">\n              {{ns.name}}\n          </option>\n      </select>\n  <br /></div>\n  <div *ngIf=\"selectedType === 'remote'\">\n      <label>Node Server Name</label><br />\n      <input class=\"form-control\"  name='name' type=\"text\" [(ngModel)]=\"name\">\n  <br /></div>\n  <div *ngIf=\"((nsTypes.length > 0 && selectedType === 'local') || selectedType === 'remote')\">\n      <label>Available Node Server Slot</label><br />\n      <select (change)=\"onSelect($event.target.value)\" type=\"button\" class=\"btn btn-default dropdown-toggle btn-block\">\n          <option *ngFor=\"let num of indexes\" [value]=\"num\">\n              {{num}}\n          </option>\n      </select>\n  <br /></div>\n  <input *ngIf=\"((nsTypes.length > 0 && selectedType === 'local') || selectedType === 'remote')\"\n   type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Submit\">\n</form>\n<p *ngIf=\"received && nsTypes.length <= 0 && selectedType === 'local'\">\n  No uninstalled NodeServers currently available. Either none are installed, the server.json\n  is missing, or all installed NodeServers are already added to Polyglot. NodeServers are\n  installed in the ~/.polyglot/nodeservers/ directory, and must contain either a dynamic server.js\n  or static server.json file.\n<br /></p>\n<p *ngIf=\"!received\">\n  Gathering Installed NodeServer types from Polyglot. Standby....\n</p><br />\n"

/***/ }),

/***/ 421:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n     <div class=\"modal-header\">\n       <button type=\"button\" class=\"close\" (click)=\"close()\" >&times;</button>\n       <h4 class=\"modal-title\">{{title || 'Confirm'}}</h4>\n     </div>\n     <div class=\"modal-body\">\n       <p>{{message || 'Are you sure?'}}</p>\n     </div>\n     <div class=\"modal-footer\">\n       <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">OK</button>\n       <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\n     </div>\n   </div>\n</div>\n"

/***/ }),

/***/ 422:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"nsdetails.currentlyEnabled === 'custom'\">\n  <div *ngIf=\"nsdetails.selectedNodeServer\">\n    <h2>Advanced Configuration</h2>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <td>Option</td>\n                <td>Value</td>\n            </tr>\n        </thead>\n        <tbody>\n            <tr style=\"margin-bottom: 10px;\">\n                <td>shortPoll</td>\n                <td><input class=\"form-control input-sm\" type=\"number\" #short value={{nsdetails.selectedNodeServer.shortPoll}}></td>\n                <td align=\"middle\"><button class=\"btn btn-primary btn-xs\" (click)=\"nsdetails.savePolls(short.value, long.value)\">Save</button></td>\n            </tr>\n            <tr style=\"margin-bottom: 10px;\">\n                <td>longPoll</td>\n                <td><input class=\"form-control input-sm\" type=\"number\" #long value={{nsdetails.selectedNodeServer.longPoll}}></td>\n                <td align=\"middle\"><button class=\"btn btn-primary btn-xs\" (click)=\"nsdetails.savePolls(short.value, long.value)\">Save</button></td>\n            </tr>\n        </tbody>\n    </table>\n    <br />\n    <h2>Custom Configuration Parameters</h2>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <td>Key</td>\n                <td>Value</td>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let key of nsdetails.arrayOfKeys; let i = index\" style=\"margin-bottom: 10px;\">\n                <td>{{key}}</td>\n                <td><input class=\"form-control input-sm\" type=\"text\" #value value={{nsdetails.customParams[key]}}></td>\n                <td align=\"middle\"><button class=\"btn btn-primary btn-xs\" (click)=\"nsdetails.saveCustom(key, value.value)\">Save</button></td>\n                <td><button class=\"btn btn-primary btn-xs\" (click)=\"nsdetails.removeCustom(key, i)\">Delete</button></td>\n            </tr>\n        </tbody>\n    </table>\n    <div class=\"addCustom\" align=\"center\">\n      <input #newkey id=\"newkey\" placeholder=\"key\" value= \"\" style=\"width:16%\" />\n      <input #newvalue id=\"newvalue\" placeholder=\"value\" value=\"\" style=\"width:41%\" />\n      <button class=\"btn btn-primary btn-xs\" (click)=\"addCustom(newkey.value, newvalue.value)\">Add Custom Parameter</button>\n    </div>\n  </div>\n</div>\n<br />\n"

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"gotSettings\">\n  <div *ngIf=\"!isyConnected\" class=\"alert alert-dismissible alert-danger text-center\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n    <p *ngIf=\"isyFound\">ISY automatically discovered at {{isyHttps ? 'https' : 'http'}}://{{isyHost}}:{{isyPort}} however the username and password need to be set in the settings menu.</p>\n    <p *ngIf=\"!isyFound\">ISY was not automatically discovered on your local network. Please configure it in the settings menu now.</p>\n  </div>\n</div>\n<div class=\"collection\">\n<h2 align=center>NodeServers</h2>\n  <div *ngFor=\"let nodeServer of nodeServers\" class=\"column\">\n    <div *ngIf=\"nodeServer.type === 'local'\" class=\"col-md-6 col-md-6 center-block\">\n      <div class=\"thumbnail\">\n          <h4 class=\"align-top\" align=\"center\">{{nodeServer.name}}({{nodeServer.profileNum}})</h4>\n          <p align=\"center\">Current Status:\n            <span *ngIf=\"nodeServer.isConnected\" class='label label-success'>Connected</span>\n            <span *ngIf=\"!nodeServer.isConnected\" class='label label-danger'>Disconnected</span>\n          </p>\n          <div class=\"btn-group btn-group-justified\">\n            <button class=\"btn btn-default btn-sm\" (click)=showNodes(nodeServer) style=\"width: 33%\" role=\"button\">Nodes <span style=\"vertical-align: top\" class=\"badge badge-default\">{{nodeServer.nodes.length}}</span></button>\n            <button class=\"btn btn-default btn-sm\" (click)=redirect(nodeServer.profileNum) style=\"width: 34%\" role=\"button\">Details <span *ngIf=\"nodeServer.notices.length > 0\" style=\"vertical-align: top\" class=\"badge\">New Message</span></button>\n            <button class=\"btn btn-default btn-sm\" (click)=showConfirm(nodeServer) style=\"width: 33%\" role=\"button\">Delete</button>\n          </div>\n      </div>\n    </div>\n    <div *ngIf=\"nodeServer.type === 'unmanaged'\" class=\"col-md-6 col-md-6 center-block\">\n      <div class=\"thumbnail\">\n          <h4 class=\"align-top\" align=\"center\">{{nodeServer.name}}({{nodeServer.profileNum}})</h4>\n          <p align=\"center\">Current Status: <span class='label label-default'>Unmanaged</span></p>\n          <div class=\"btn-group btn-group-justified\">\n            <button class=\"btn btn-default btn-sm\" style=\"width: 100%\" role=\"button\">No Details Available</button>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-nodepop [node]=\"selectedNode\"></app-nodepop>\n"

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"drivers && (selectedNode != null)\" class=\"table table-striped table-hover \">\r\n <thead>\r\n   <tr>\r\n     <th>Driver</th>\r\n     <th>UOM</th>\r\n     <th>Value</th>\r\n   </tr>\r\n </thead>\r\n <tbody>\r\n   <tr *ngFor=\"let driver of drivers\">\r\n     <td>{{driver.driver}}</td>\r\n     <td>{{driver.uom}}</td>\r\n     <td>{{driver.value}}</td>\r\n   </tr>\r\n </tbody>\r\n</table>\r\n"

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

module.exports = "\r\n<footer class=\"footer\">\r\n  <div *ngIf=\"polyglot\" class=\"container text-center\">\r\n    <div class=\"panel panel-default\" style=\"max-width:800px;margin-left:auto; margin-right:auto;\">\r\n        <div *ngIf=\"polyglot && this.authService.loggedIn()\" class=\"panel-body\">\r\n          <div *ngIf=\"upgrading\">\r\n            <h3>Upgrading... Please wait.</h3>\r\n            <div class=\"progress progress-striped active\">\r\n              <div class=\"progress-bar\" [style.width]=\"(Math.round(progress.percent*100)) + '%'\">{{Math.round(progress.percent*100)}}%</div>\r\n            </div>\r\n          </div>\r\n          <p align=\"center\">Polyglot Version <b>{{pgVersion}}</b> Status: <span class='label label-default'>{{polyglot.connected ? 'Connected' : 'Disconnected'}}</span>\r\n            <br />ISY Version: <b>{{isyVersion}}</b>\r\n            <br>(c) 2017 UDI<br>\r\n            <a href=\"https://github.com/Einstein42/udi-polyglotv2/blob/master/README.md\">Documentation</a><br>\r\n          </p>\r\n          <div *ngIf=\"updateAvail && !upgrading\">\r\n            <button class=\"btn btn-primary\" (click)=showConfirm()> Upgrade Available Click here to update to {{gitVersion}} </button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n  <h1>Polyglot NodeServer Store</h1>\n  <button (click)=getNSList() class=\"btn btn-default\">Refresh</button>\n</div><br />\n\n<div *ngIf=\"received\">\n  <table class=\"table table-striped table-bordered table-hover\">\n    <table class=\"table table-striped table-bordered table-hover\">\n     <thead>\n       <tr>\n         <th width=\"15%\">Name</th>\n         <th width=\"10%\">Author</th>\n         <th width=\"10%\">Language</th>\n         <th width=\"51%\">Description</th>\n         <th width=\"14%\"></th>\n       </tr>\n     </thead>\n     <tbody>\n       <tr *ngFor=\"let ns of nsList; let i = index\"  [class.active]=\"i == selectedRow\" text-align=\"center\">\n         <td style=\"vertical-align:middle\">{{ns.name}}</td>\n         <td style=\"vertical-align:middle\">{{ns.author}}</td>\n         <td style=\"vertical-align:middle\">{{ns.language}}</td>\n         <td style=\"vertical-align:middle\">{{ns.desc}}</td>\n         <td *ngIf=\"!isInstalled(ns)\" style=\"text-align: center; vertical-align:middle; margin: auto;\">\n           <button (click)=addConfirm(ns) class=\"btn btn-default btn-sm\">Install</button>\n         </td>\n         <td *ngIf=\"isInstalled(ns)\" style=\"text-align: center; vertical-align:middle; margin: auto;\">\n           <div class=\"btn-group\" role=\"group\">\n             <button (click)=updateNS(ns) class=\"btn btn-default btn-sm\">Update</button>\n             <button (click)=delConfirm(ns) class=\"btn btn-default btn-sm\">Uninstall</button>\n           </div>\n         </td>\n       </tr>\n     </tbody>\n    </table>\n  </table>\n</div>\n\n<p *ngIf=\"!received\">\n  Getting installable NodeServer list from Polyglot Store. Standby....\n</p><br />\n"

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Polyglot Version 2</h1>\n  <p class=\"lead\">UDI's NodeServer Integration Platform for the ISY device </p>\n  <div>\n    <a *ngIf=\"!authService.loggedIn()\" class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n"

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n     <div class=\"modal-header\">\n       <button type=\"button\" class=\"close\" (click)=\"cancel()\" >&times;</button>\n       <h4 class=\"modal-title\">{{title || 'Confirm'}}</h4>\n     </div>\n     <div class=\"modal-body\">\n       <p>{{message || 'Are you sure?'}}</p>\n     </div>\n     <div class=\"modal-footer\">\n       <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">Yes</button>\n       <button type=\"button\" class=\"btn btn-primary\" (click)=\"deny()\">No</button>\n       <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\n     </div>\n   </div>\n</div>\n"

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-xs\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Polyglot</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\" [class.show]=\"isCollapsed\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\" (click)=\"isCollapsed = !isCollapsed\">Home</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"showConfirm()\" href=\"#\">Reboot ISY</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\" (click)=\"isCollapsed = !isCollapsed\">Dashboard</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/addnode']\" (click)=\"isCollapsed = !isCollapsed\">Add NodeServer</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\" (click)=\"isCollapsed = !isCollapsed\">Profile</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/settings']\" (click)=\"isCollapsed = !isCollapsed\">Settings</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/log']\" (click)=\"isCollapsed = !isCollapsed\">Log</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/getns']\" (click)=\"isCollapsed = !isCollapsed\">NodeServer Store</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\" (click)=\"isCollapsed = !isCollapsed\">Login</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n\n<div *ngIf=\"authService.loggedIn()\">\n  <div *ngIf=\"!connected\" class=\"alert alert-dismissible alert-danger text-center\">\n    <p>Not connected to server... Try refreshing the page. This will disappear once the connection is re-established.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"nsdetails.currentlyEnabled === 'nodes'\" >\n  <h1>Node Details</h1>\n  <table *ngFor=\"let node of nsdetails.selectedNodeServer.nodes; let i = index\"  [class.active]=\"i == selectedRow\" class=\"table table-striped table-bordered table-hover\">\n    <table  class=\"table table-striped table-bordered table-hover\">\n     <thead>\n       <tr>\n         <th width=\"16%\">Node Name {{i + 1}}</th>\n         <th width=\"16%\">Address</th>\n         <th width=\"16%\">NodeDef ID</th>\n         <th width=\"16%\">Enabled</th>\n         <th width=\"16%\">Primary Node</th>\n         <th width=\"16%\">Is Primary</th>\n         <th width=\"4%\">Delete</th>\n       </tr>\n     </thead>\n     <tbody>\n       <tr text-align=\"center\">\n         <td>{{node.name}}</td>\n         <td>{{node.address}}</td>\n         <td>{{node.node_def_id}}</td>\n         <td>{{node.enabled}}</td>\n         <td>{{node.primary}}</td>\n         <td>{{node.isprimary}}</td>\n         <td style=\"text-align: center;\"><button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"nsdetails.confirmNodeDelete(nsdetails.selectedNodeServer.nodes[i])\" aria-label=\"Delete Node\">&#10006;</button></td>\n\n       </tr>\n     </tbody>\n    </table>\n    <table *ngIf=\"node.drivers.length != 0\" class=\"table table-striped table-bordered table-hover \">\n     <thead>\n       <tr>\n         <th width=\"33%\">Driver</th>\n         <th width=\"33%\">UOM</th>\n         <th width=\"33%\">Value</th>\n       </tr>\n     </thead>\n     <tbody>\n       <tr *ngFor=\"let driver of node.drivers\">\n         <td>{{driver.driver}}</td>\n         <td>{{driver.uom}}</td>\n         <td>{{driver.value}}</td>\n       </tr>\n     </tbody>\n    </table>\n  </table>\n</div>\n"

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

module.exports = " <table *ngIf=\"node\" class=\"table table-striped table-hover \">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Address</th>\n      <th>NodeDef ID</th>\n      <th>Enabled</th>\n      <th>Primary Node</th>\n      <th>Is Primary</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let node of node.nodes; let i = index\" (click)=\"showDrivers(node.drivers, i)\" [class.active]=\"i == selectedRow\">\n      <td>{{node.name}}</td>\n      <td>{{node.address}}</td>\n      <td>{{node.node_def_id}}</td>\n      <td>{{node.enabled}}</td>\n      <td>{{node.primary}}</td>\n      <td>{{node.isprimary}}</td>\n    </tr>\n  </tbody>\n</table>\n\n<app-driverpop [drivers]=\"selectedDrivers\" [selectedNode]=node></app-driverpop>\n"

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"nsdetails.currentlyEnabled === 'control'\">\n  <div style=\"text-align: center;\">\n    <h1>NodeServer Controls</h1>\n  </div>\n  <div class=\"btn-group btn-group-justified\">\n    <button class=\"btn btn-default\" (click)=\"sendControl('start')\" style=\"width: 33%\" role=\"button\">Start</button>\n    <button class=\"btn btn-default\" (click)=\"sendControl('stop')\" style=\"width: 34%\" role=\"button\">Stop</button>\n    <button class=\"btn btn-default\" (click)=\"sendControl('restart')\" style=\"width: 33%\" role=\"button\">Restart</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 434:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedNodeServer\" class=\"column\">\n  <div *ngIf=\"selectedNodeServer.type !== 'unmanaged'\" class=\"col-md-20 col-md-20 center-block\" align=\"center\">\n    <div class=\"thumbnail\">\n        <h2 class=\"align-top\" align=\"center\">{{selectedNodeServer.name}}({{selectedNodeServer.profileNum}})</h2>\n        <p align=\"center\">Current Status:\n          <span *ngIf=\"selectedNodeServer.isConnected\" class='label label-success'>Connected</span>\n          <span *ngIf=\"!selectedNodeServer.isConnected\" class='label label-danger'>Disconnected</span>\n        </p>\n        <div class=\"btn-group btn-group-justified\">\n          <button class=\"btn btn-default\" (click)=\"showControl('nodes')\" style=\"width: 20%\" role=\"button\">Nodes <span class=\"badge\">{{selectedNodeServer.nodes.length}}</span></button>\n          <button class=\"btn btn-default\" (click)=\"showControl('custom')\" style=\"width: 20%\" role=\"button\">Configuration</button>\n          <button class=\"btn btn-default\" (click)=\"showControl('control')\" style=\"width: 20%\" role=\"button\">Control</button>\n          <button class=\"btn btn-default\" (click)=\"showControl('log')\" style=\"width: 20%\" role=\"button\">Log</button>\n          <button class=\"btn btn-default\" (click)=showConfirm(selectedNodeServer) style=\"width: 20%\" role=\"button\">Delete</button>\n        </div>\n    </div>\n    <div *ngIf=\"selectedNodeServer.notices.length > 0\">\n      <hr />\n      <app-nsnotices></app-nsnotices>\n    </div>\n  </div>\n  <div *ngIf=\"selectedNodeServer.type === 'unmanaged'\" class=\"col-md-20 col-md-20 center-block\" align=\"center\">\n    <div class=\"thumbnail\">\n        <h2 class=\"align-top\" align=\"center\">{{selectedNodeServer.name}}({{selectedNodeServer.profileNum}})</h2>\n        <p align=\"center\">Current Status: <span class='label label-danger'>Unmanaged</span></p>\n    </div>\n  </div>\n</div>\n<hr />\n<app-nodedetails></app-nodedetails>\n<app-nscontrol></app-nscontrol>\n<app-customdetails></app-customdetails>\n<app-nslog></app-nslog>\n"

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"nsdetails.currentlyEnabled === 'log'\">\n  <div style=\"text-align: center;\">\n    <h1>Real-time {{nsdetails.selectedNodeServer.name}} log file.</h1>\n    <button onclick=\"window.scrollTo(0,document.body.scrollHeight)\" class=\"btn btn-default\">Scroll to Bottom</button>\n  </div><br />\n  <div class=\"well well-lg\">\n    <pre >\n      <div *ngFor=\"let data of nsdetails.logData\">{{data}}</div>\n    </pre>\n  </div>\n  <div style=\"text-align: center;\">\n    <button onclick=\"window.scrollTo(0,0)\" class=\"btn btn-default\">Scroll to Top</button>\n  </div><br />\n</div>\n"

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

module.exports = "<h2>{{nsdetails.selectedNodeServer.name}} Notices:</h2>\n<div *ngFor=\"let notice of nsdetails.selectedNodeServer.notices\" class=\"alert alert-dismissible alert-info\">\n  <div [innerHTML]=\"notice\"></div>\n</div>\n"

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <form [formGroup]=\"profileForm\" class=\"form-horizontal\">\n  <fieldset>\n    <legend>User Settings</legend>\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Username</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"username\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Password</label>\n      <div class=\"col-lg-10\">\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\n      </div>\n    </div>\n     <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Save\" (click)=\"saveProfile(getDirtyValues(profileForm))\">\n  </fieldset>\n\n</form>\n"

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"settingsForm\" class=\"form-horizontal\">\n  <fieldset>\n    <legend>ISY Settings</legend>\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Address / Hostname</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"isyHost\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Port</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"isyPort\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Username</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"isyUsername\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Password</label>\n      <div class=\"col-lg-10\">\n        <input type=\"password\" class=\"form-control\" formControlName=\"isyPassword\" placeholder=\"Password\">\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" formControlName=\"isyHttps\"> Use HTTPS\n          </label>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n  <fieldset>\n    <legend>MQTT Settings</legend>\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Address / Hostname</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"mqttHost\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">MQTT Port</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"mqttPort\">\n      </div>\n    </div>\n     <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Save\" (click)=\"saveSettings(getDirtyValues(settingsForm))\">\n  </fieldset>\n</form>\n"

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n  <h1>Real-time Polyglot log file.</h1>\n  <button onclick=\"window.scrollTo(0,document.body.scrollHeight)\" class=\"btn btn-default\">Scroll to Bottom</button>\n</div><br />\n<div class=\"well well-lg\">\n  <pre>\n    <div id='log' *ngFor=\"let data of logData\">{{data}}</div>\n  </pre>\n</div>\n<div style=\"text-align: center;\">\n  <button onclick=\"window.scrollTo(0,0)\" class=\"btn btn-default\">Scroll to Top</button>\n</div><br />\n"

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmComponent = /** @class */ (function (_super) {
    __extends(ConfirmComponent, _super);
    function ConfirmComponent(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    ConfirmComponent.prototype.confirm = function () {
        // on click on confirm button we set dialog result as true,
        // ten we can get dialog result from caller code
        this.result = true;
        this.close();
    };
    ConfirmComponent.prototype.cancel = function () {
        this.result = false;
        this.close();
    };
    ConfirmComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(421),
            styles: [__webpack_require__(395)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object])
    ], ConfirmComponent);
    return ConfirmComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));

//# sourceMappingURL=confirm.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_websockets_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_confirm_component__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NsdetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NsdetailsComponent = /** @class */ (function () {
    function NsdetailsComponent(sockets, settingsService, dialogService, flashMessage, route, router) {
        var _this = this;
        this.sockets = sockets;
        this.settingsService = settingsService;
        this.dialogService = dialogService;
        this.flashMessage = flashMessage;
        this.route = route;
        this.router = router;
        this.logData = [];
        this.route.params.subscribe(function (params) {
            _this.profileNum = params["id"];
        });
    }
    NsdetailsComponent.prototype.ngOnInit = function () {
        if (!this.sockets.connected)
            this.sockets.start();
        this.getNodeServers();
        this.getNodeServerResponses();
    };
    NsdetailsComponent.prototype.ngOnDestroy = function () {
        if (this.sockets.connected) {
            this.sockets.sendMessage('log', { stop: this.selectedNodeServer.profileNum });
        }
        if (this.logConn) {
            this.logConn.unsubscribe();
        }
        if (this.subNodeServers) {
            this.subNodeServers.unsubscribe();
        }
        if (this.subResponses) {
            this.subResponses.unsubscribe();
        }
    };
    NsdetailsComponent.prototype.showConfirm = function (nodeServer) {
        var _this = this;
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_5__confirm_confirm_component__["a" /* ConfirmComponent */], {
            title: 'Delete NodeServer',
            message: "This will delete the " + nodeServer.name + " NodeServer. You will need to restart the ISY admin console to reflect the changes, if you are still having problems, click on 'Reboot ISY' above. Are you sure you want to delete?"
        })
            .subscribe(function (isConfirmed) {
            _this.deleteNodeServer(nodeServer, isConfirmed);
        });
    };
    NsdetailsComponent.prototype.confirmNodeDelete = function (i) {
        var _this = this;
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_5__confirm_confirm_component__["a" /* ConfirmComponent */], {
            title: 'Delete Node?',
            message: "This will delete the node: " + i.address + " from Polyglot and ISY if it exists. Are you sure?"
        })
            .subscribe(function (isConfirmed) {
            _this.deleteNode(i);
        });
    };
    NsdetailsComponent.prototype.deleteNode = function (i) {
        this.sockets.sendMessage('nodeservers', { removenode: { address: i.address, profileNum: this.selectedNodeServer.profileNum } }, false, true);
    };
    NsdetailsComponent.prototype.deleteNodeServer = function (nodeServer, confirmed) {
        if (confirmed) {
            this.sockets.sendMessage('nodeservers', { delns: { profileNum: nodeServer.profileNum } });
            this.router.navigate(['/dashboard']);
        }
    };
    NsdetailsComponent.prototype.showControl = function (type) {
        if (this.currentlyEnabled === type) {
            return this.currentlyEnabled = null;
        }
        this.currentlyEnabled = type;
        if (type === 'log') {
            if (this.sockets.connected) {
                this.sockets.sendMessage('log', { start: this.selectedNodeServer.profileNum });
                this.getLog();
            }
        }
    };
    NsdetailsComponent.prototype.getNodeServers = function () {
        var _this = this;
        this.subNodeServers = this.sockets.nodeServerData.subscribe(function (nodeServers) {
            _this.nodeServers = nodeServers;
            for (var i in _this.nodeServers) {
                if (_this.nodeServers[i].profileNum === _this.profileNum) {
                    _this.selectedNodeServer = _this.nodeServers[i];
                    _this.customParams = JSON.parse(JSON.stringify(_this.selectedNodeServer.customParams));
                    _this.arrayOfKeys = Object.keys(_this.customParams);
                }
            }
        });
    };
    NsdetailsComponent.prototype.savePolls = function (shortPoll, longPoll) {
        shortPoll = parseInt(shortPoll);
        longPoll = parseInt(longPoll);
        if (typeof shortPoll === 'number' && typeof longPoll === 'number') {
            if (shortPoll < longPoll) {
                if (this.sockets.connected) {
                    var message = {
                        shortPoll: shortPoll,
                        longPoll: longPoll
                    };
                    var updatedPolls = JSON.parse(JSON.stringify(message));
                    updatedPolls['profileNum'] = this.selectedNodeServer.profileNum;
                    this.sockets.sendMessage('nodeservers', { polls: updatedPolls }, false, true);
                }
                else {
                    this.flashMessage.show('Websockets not connected to Polyglot. Poll Parameters not saved.', {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    window.scrollTo(0, 0);
                }
            }
            else {
                this.badValidate('shortPoll must be smaller than longPoll');
            }
        }
        else {
            this.badValidate('Both Poll values must be numbers');
        }
    };
    NsdetailsComponent.prototype.badValidate = function (message) {
        this.flashMessage.show(message, {
            cssClass: 'alert-danger',
            timeout: 5000
        });
        window.scrollTo(0, 0);
    };
    NsdetailsComponent.prototype.saveCustom = function (key, value) {
        this.customParams[key] = value;
        this.arrayOfKeys = Object.keys(this.customParams);
        this.sendCustom();
    };
    NsdetailsComponent.prototype.removeCustom = function (key, index) {
        this.arrayOfKeys.splice(index, 1);
        delete this.customParams[key];
        this.sendCustom();
    };
    NsdetailsComponent.prototype.sendCustom = function () {
        if (this.sockets.connected) {
            // Deepcopy hack
            var updatedParams = JSON.parse(JSON.stringify(this.customParams));
            updatedParams['profileNum'] = this.selectedNodeServer.profileNum;
            this.sockets.sendMessage('nodeservers', { customparams: updatedParams }, false, true);
        }
        else {
            this.flashMessage.show('Websockets not connected to Polyglot. Custom Parameters not saved.', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
            window.scrollTo(0, 0);
        }
    };
    NsdetailsComponent.prototype.getLog = function () {
        var _this = this;
        if (this.logConn) {
            return;
        }
        this.logConn = this.sockets.logData.subscribe(function (data) {
            try {
                var message = data;
                if (message.hasOwnProperty('node')) {
                    if (message.node === 'polyglot') {
                        _this.logData.push(data.log);
                    }
                }
            }
            catch (e) { }
        });
    };
    NsdetailsComponent.prototype.sendControl = function (command) {
        if (this.sockets.connected) {
            var cmd = {
                node: this.selectedNodeServer.profileNum,
            };
            cmd[command] = "";
            this.sockets.sendMessage(this.selectedNodeServer.profileNum, cmd, false, false);
            this.flashMessage.show("Sent " + command + " command to NodeServer " + this.selectedNodeServer.name + ".", {
                cssClass: 'alert-success',
                timeout: 5000
            });
            window.scrollTo(0, 0);
        }
    };
    NsdetailsComponent.prototype.getNodeServerResponses = function () {
        var _this = this;
        this.subResponses = this.sockets.nodeServerResponse.subscribe(function (response) {
            if (response.hasOwnProperty('success')) {
                if (response.success) {
                    _this.flashMessage.show(response.msg, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    window.scrollTo(0, 0);
                }
                else {
                    _this.flashMessage.show(response.msg, {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    window.scrollTo(0, 0);
                }
            }
        });
    };
    NsdetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nsdetails',
            template: __webpack_require__(434),
            styles: [__webpack_require__(408)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_websockets_service__["a" /* WebsocketsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_websockets_service__["a" /* WebsocketsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _f || Object])
    ], NsdetailsComponent);
    return NsdetailsComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=nsdetails.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(211);


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnodeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddnodeService = /** @class */ (function () {
    function AddnodeService(http) {
        this.http = http;
    }
    /*
    registerNodeServer(node) {
      const headers = new Headers()
      this.loadToken()
      headers.append('Authorization', this.authToken)
      headers.append('Content-Type', 'application/json')
      return this.http.post(environment.PG_URI + '/frontend/addns', node, {headers: headers})
        .map(res => res.json())
    }
    */
    AddnodeService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AddnodeService.prototype.getNSList = function () {
        var nsIndexURL = 'https://s3.amazonaws.com/3csolutions/udi/nsindex/index.json';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.get(nsIndexURL, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AddnodeService.prototype.getPolyglotVersion = function () {
        var polyglotPackage = 'https://raw.githubusercontent.com/UniversalDevicesInc/polyglot-v2/master/package.json';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.get(polyglotPackage, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AddnodeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], AddnodeService);
    return AddnodeService;
    var _a;
}());

//# sourceMappingURL=addnode.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    PG_URI: '',
};
//# sourceMappingURL=environment.js.map

/***/ })

},[708]);
//# sourceMappingURL=main.bundle.js.map