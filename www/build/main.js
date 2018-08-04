webpackJsonp([6],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Detail History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<section>\n		<div>\n			<ion-grid>\n			  <ion-row>\n			    <ion-col>\n			      Your Balance\n			    </ion-col>\n			    <ion-col text-right>\n			      Rp. 300.000.000\n			    </ion-col>\n			  </ion-row>\n			</ion-grid>\n		</div>\n		<div class="list-history">\n			<ion-list>\n			  <ion-item>\n			    <ion-col item-start>\n			    	<h2>Topup Bank BCA</h2>\n			    	<p class="tabunganku">TabunganKu</p>\n			    </ion-col>\n			    <ion-col item-end text-right>300.000</ion-col>\n			  </ion-item>\n			  <ion-item>\n			    <ion-col item-start>\n			    	<h2>Topup Bank BCA</h2>\n			    	<p class="tabunganku">TabunganKu</p>\n			    </ion-col>\n			    <ion-col item-end text-right>100.000.000</ion-col>\n			  </ion-item>\n			  <ion-item>\n			    <ion-col item-start>\n			    	<h2>Pay Bukalapak 70087808230238</h2>\n			    	<p class="cost">cost</p>\n			    </ion-col>\n			    <ion-col item-end text-right>500.000</ion-col>\n			  </ion-item>\n			  <ion-item>\n			    <ion-col item-start>\n			    	<h2>Topup Bank BCA</h2>\n			    	<p class="tabunganku">TabunganKu</p>\n			    </ion-col>\n			    <ion-col item-end text-right>200.000.000</ion-col>\n			  </ion-item>\n			</ion-list>\n		</div>\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-account/add-account.module": [
		278,
		0
	],
	"../pages/cost/cost.module": [
		279,
		5
	],
	"../pages/history/history.module": [
		280,
		4
	],
	"../pages/report/report.module": [
		281,
		3
	],
	"../pages/setting/setting.module": [
		282,
		2
	],
	"../pages/tabunganku/tabunganku.module": [
		283,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_report__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting_setting__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cost_cost__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabunganku_tabunganku__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_account_add_account__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_local_data_services_local_data_services__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, localServiceData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.localServiceData = localServiceData;
        this.localServiceData.getData()
            .then(function (success) {
            console.log(success);
            _this.accountsData = success;
        }, function (err) {
        });
    }
    HomePage.prototype.getAccountSelect = function (val) {
        if (val == "new") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__add_account_add_account__["a" /* AddAccountPage */]);
        }
        else {
        }
    };
    HomePage.prototype.openReportPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__report_report__["a" /* ReportPage */]);
    };
    HomePage.prototype.openSettingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__setting_setting__["a" /* SettingPage */]);
    };
    HomePage.prototype.openCostPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cost_cost__["a" /* CostPage */]);
    };
    HomePage.prototype.openTabungankuPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabunganku_tabunganku__["a" /* TabungankuPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Home</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n  <div class="titlehome">\n    Halo, <span class="boldhome">Amul</span>\n  </div>\n\n<ion-content padding class="bgred">\n\n  <ion-item>\n    <ion-label>Account</ion-label>\n    <ion-select [(ngModel)]="gender" (ionChange)="getAccountSelect($event)">\n      <ion-option value="new">Buat Baru</ion-option>\n      <ion-option *ngFor="let item of accountsData" [value]="item.id" >\n          {{item.name}}\n        </ion-option>\n    </ion-select>\n  </ion-item>\n\n  <section>\n    <div class="firsthome">\n      <!-- <img src="assets/imgs/photo.png">\n      <div class="camerapic"><img src="assets/imgs/camera.svg" class="noneassets"></div> -->\n    </div>\n    \n  </section>\n\n  <section class="contenthome">\n    <h3>Your Balance | Rp</h3>\n    <h2>300.000.000</h2>\n    <p>\n      If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n    </p>\n  </section>\n\n  <section class="categoryhome">\n    <div class="row">\n      <div class="col colnopadding">\n        <ion-card class="radius10" (click)="openTabungankuPage()">\n          <ion-card-header>\n            <img src="assets/imgs/wallet.svg">\n          </ion-card-header>\n\n          <ion-card-content>\n            <p>TabunganKu</p>\n          </ion-card-content>\n\n        </ion-card>\n      </div>\n      <div class="col colnopadding">\n        <ion-card class="radius10" (click)="openCostPage()">\n          <ion-card-header>\n            <img src="assets/imgs/startup.svg">\n          </ion-card-header>\n\n          <ion-card-content>\n            <p>Cost</p>\n          </ion-card-content>\n\n        </ion-card>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col colnopadding">\n        <ion-card class="radius10" (click)="openReportPage()">\n          <ion-card-header>\n            <img src="assets/imgs/diagram.svg">\n          </ion-card-header>\n\n          <ion-card-content>\n            <p>Report</p>\n          </ion-card-content>\n\n        </ion-card>\n      </div>\n      <div class="col colnopadding">\n        <ion-card class="radius10" (click)="openSettingPage()">\n          <ion-card-header>\n            <img src="assets/imgs/controls.svg">\n          </ion-card-header>\n\n          <ion-card-content>\n            <p>Setting</p>\n          </ion-card-content>\n\n        </ion-card>\n      </div>\n    </div>\n  </section>\n\n</ion-content>\n'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__providers_local_data_services_local_data_services__["a" /* LocalDataServicesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_local_data_services_local_data_services__["a" /* LocalDataServicesProvider */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDataServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LocalDataServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocalDataServicesProvider = /** @class */ (function () {
    function LocalDataServicesProvider(sqlite, toast) {
        this.sqlite = sqlite;
        this.toast = toast;
        this.accounts = [];
        this.expenses = [];
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.balance = 0;
        this.accountData = { name: "", type: "", currency: "", description: "", amount: 0, createdate: "" };
        console.log('Hello LocalDataServicesProvider Provider');
    }
    LocalDataServicesProvider.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'mypocket.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql('CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, name TEXT, type TEXT, currency TEXT, description TEXT, amount INT, createdate TEXT )', [])
                    .then(function (res) { return console.log('Executed SQL'); })
                    .catch(function (e) { return console.log(e); });
                db.executeSql('SELECT * FROM account ORDER BY id DESC', []).then(function (res) {
                    _this.accounts = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.accounts.push({
                            id: res.rows.item(i).id,
                            name: res.rows.item(i).name,
                            type: res.rows.item(i).type,
                            description: res.rows.item(i).description,
                            amount: res.rows.item(i).createdate
                        });
                    }
                    resolve(_this.accounts);
                })
                    .catch(function (e) {
                    console.log(e);
                    reject(e);
                });
                // db.executeSql('SELECT SUM(amount) AS totalIncome FROM expense WHERE type="Income"', {})
                // .then(res => {
                //   if(res.rows.length>0) {
                //     this.totalIncome = parseInt(res.rows.item(0).totalIncome);
                //     this.balance = this.totalIncome-this.totalExpense;
                //   }
                // })
                // .catch(e => console.log(e));
                // db.executeSql('SELECT SUM(amount) AS totalExpense FROM expense WHERE type="Expense"', {})
                // .then(res => {
                //   if(res.rows.length>0) {
                //     this.totalExpense = parseInt(res.rows.item(0).totalExpense);
                //     this.balance = this.totalIncome-this.totalExpense;
                //   }
                // })
            }).catch(function (e) {
                console.log(e);
                reject(e);
            });
        });
    };
    LocalDataServicesProvider.prototype.saveDataAccount = function (DataForm) {
        var _this = this;
        console.log(DataForm);
        console.log(DataForm.value['name']);
        var dateNow = new Date();
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'ionicdb.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql('INSERT INTO account VALUES(NULL,?,?,?,?,?,?)', [
                    _this.accountData.name,
                    _this.accountData.type,
                    _this.accountData.currency,
                    _this.accountData.description,
                    _this.accountData.amount,
                    // this.accountData.date
                    dateNow
                ]).then(function (res) {
                    console.log(res);
                    _this.toast.show('Data saved', '5000', 'center').subscribe(function (toast) {
                        resolve(toast);
                        console.log(toast);
                    });
                })
                    .catch(function (e) {
                    console.log(e);
                    _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                        reject(toast);
                        console.log(toast);
                    });
                });
            }).catch(function (e) {
                console.log(e);
                _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                    reject(toast);
                    console.log(toast);
                });
            });
        });
    };
    LocalDataServicesProvider.prototype.deleteData = function (rowid) {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('DELETE FROM expense WHERE rowid=?', [rowid])
                .then(function (res) {
                console.log(res);
                _this.getData();
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    LocalDataServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */]) === "function" && _b || Object])
    ], LocalDataServicesProvider);
    return LocalDataServicesProvider;
    var _a, _b;
}());

//# sourceMappingURL=local-data-services.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_report_report__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cost_cost__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_history_history__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabunganku_tabunganku__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_account_add_account__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_sqlite__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_toast__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_local_data_services_local_data_services__ = __webpack_require__(199);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cost_cost__["a" /* CostPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabunganku_tabunganku__["a" /* TabungankuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_account_add_account__["a" /* AddAccountPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-account/add-account.module#AddAccountPageModule', name: 'AddAccountPage', segment: 'add-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cost/cost.module#CostPageModule', name: 'CostPage', segment: 'cost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/report.module#ReportPageModule', name: 'ReportPage', segment: 'report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabunganku/tabunganku.module#TabungankuPageModule', name: 'TabungankuPage', segment: 'tabunganku', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cost_cost__["a" /* CostPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabunganku_tabunganku__["a" /* TabungankuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_account_add_account__["a" /* AddAccountPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_16__providers_local_data_services_local_data_services__["a" /* LocalDataServicesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_report_report__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cost_cost__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabunganku_tabunganku__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Tabunganku', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabunganku_tabunganku__["a" /* TabungankuPage */] },
            { title: 'Cost', component: __WEBPACK_IMPORTED_MODULE_8__pages_cost_cost__["a" /* CostPage */] },
            { title: 'Report', component: __WEBPACK_IMPORTED_MODULE_6__pages_report_report__["a" /* ReportPage */] },
            { title: 'Setting', component: __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__["a" /* SettingPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddAccountPage = /** @class */ (function () {
    function AddAccountPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.addAccountForm = this.formBuilder.group({
            name: [''],
            type: [''],
            currency: [''],
            description: [''],
            amount: ['']
        });
    }
    AddAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddAccountPage');
    };
    AddAccountPage.prototype.saveData = function () {
        console.log(this.addAccountForm.value['name']);
    };
    AddAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-account',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/add-account/add-account.html"*/'<!--\n  Generated template for the AddAccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>TabunganKu</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n      <form [formGroup]="addAccountForm">\n\n          <ion-item>\n            <ion-label floating>Name</ion-label>\n            <ion-input [formControl]="addAccountForm.controls[\'name\']"\n                type="email"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Type</ion-label>\n            <ion-input [formControl]="addAccountForm.controls[\'type\']"\n                type="email"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label floating>Currency</ion-label>\n              <ion-input [formControl]="addAccountForm.controls[\'currency\']"\n                  type="email"></ion-input>\n            </ion-item>\n\n          <ion-item>\n              <ion-label floating>Description</ion-label>\n              <ion-input [formControl]="addAccountForm.controls[\'description\']"\n                  type="email"></ion-input>\n            </ion-item>\n\n          <ion-item>\n              <ion-label floating>Amount</ion-label>\n              <ion-input [formControl]="addAccountForm.controls[\'amount\']"\n                  type="email"></ion-input>\n            </ion-item>   \n        \n          <ion-row>\n            <ion-col text-center>\n              <button ion-button block color="secondary" (click)="saveData()">\n                Save\n              </button>\n            </ion-col>\n          </ion-row>\n        \n        </form>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/add-account/add-account.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
    ], AddAccountPage);
    return AddAccountPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=add-account.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CostPage = /** @class */ (function () {
    function CostPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CostPage');
    };
    CostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cost',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/cost/cost.html"*/'<!--\n  Generated template for the CostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cost</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n\n	  <ion-item>\n	    <ion-label stacked>Title</ion-label>\n	    <ion-input type="text"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label stacked>Cost</ion-label>\n	    <ion-input type="number"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label stacked>Memo</ion-label>\n	    <ion-input type="text"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	  	<button ion-button class="btn-red">Submit</button>\n	  </ion-item>\n\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/cost/cost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CostPage);
    return CostPage;
}());

//# sourceMappingURL=cost.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_history__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportPage = /** @class */ (function () {
    function ReportPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportPage');
        var myChart = __WEBPACK_IMPORTED_MODULE_3_highcharts__["chart"]('container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: false
                }
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                            name: 'Balance',
                            y: 50,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Cost',
                            y: 20
                        }, {
                            name: 'TabunganKu',
                            y: 30
                        }]
                }]
        });
    };
    ReportPage.prototype.openHistoryPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__history_history__["a" /* HistoryPage */]);
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/report/report.html"*/'<!--\n  Generated template for the ReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Report</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <section class="topreport">\n    <div>\n      <ion-list>\n        <ion-item>\n          <ion-label>Sort by</ion-label>\n          <ion-select>\n            <ion-option value="day">Day</ion-option>\n            <ion-option value="week">Week</ion-option>\n            <ion-option value="month">Month</ion-option>\n            <ion-option value="year">Year</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n  </section>\n\n  <section alt="chart">\n	 <div id="container" style="display: block;"></div>\n  </section>\n  \n  <section class="info">\n      <div class="titlereport">\n        Status\n      </div>\n      <div>\n        <ion-list>\n          <ion-item>\n            <ion-avatar item-start>\n              <div class="balancereport"></div>\n            </ion-avatar>\n            <h2>Balance</h2>\n            <p>300.000.000</p>\n          </ion-item>\n          <ion-item>\n            <ion-avatar item-start>\n              <div class="tabungankureport"></div>\n            </ion-avatar>\n            <h2>TabunganKu</h2>\n            <p>4.000.000</p>\n          </ion-item>\n          <ion-item>\n            <ion-avatar item-start>\n              <div class="costreport"></div>\n            </ion-avatar>\n            <h2>Cost</h2>\n            <p>2.000.000</p>\n          </ion-item>\n        </ion-list>\n      </div>\n  </section>\n\n  <section class="detail" (click)="openHistoryPage()">\n    <button ion-button class="btn-red">View Detail History</button>\n  </section>\n\n</ion-content>\n'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/report/report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/setting/setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Setting</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabungankuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TabungankuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabungankuPage = /** @class */ (function () {
    function TabungankuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TabungankuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabungankuPage');
    };
    TabungankuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabunganku',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/tabunganku/tabunganku.html"*/'<!--\n  Generated template for the CostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>TabunganKu</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n\n	  <ion-item>\n	    <ion-label stacked>Title</ion-label>\n	    <ion-input type="text"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label stacked>Top up</ion-label>\n	    <ion-input type="number"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label stacked>Memo</ion-label>\n	    <ion-input type="text"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	  	<button ion-button class="btn-red">Submit</button>\n	  </ion-item>\n\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/finance-note/src/pages/tabunganku/tabunganku.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabungankuPage);
    return TabungankuPage;
}());

//# sourceMappingURL=tabunganku.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map