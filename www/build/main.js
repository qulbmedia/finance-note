webpackJsonp([7],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_local_data_services_local_data_services__ = __webpack_require__(46);
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
 * Generated class for the AddTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddTransactionPage = /** @class */ (function () {
    function AddTransactionPage(navCtrl, navParams, alertCtrl, loadingCtrl, localServiceData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.localServiceData = localServiceData;
        this.PostData = { type: "", pay: "", category: "", amount: "", transactiondate: "", usage: "", event: "" };
    }
    AddTransactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddTransactionPage');
    };
    AddTransactionPage.prototype.addTransaction = function () {
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        if (!this.PostData.type) {
            console.log(this.PostData.type);
        }
        else if (!this.PostData.pay) {
            console.log(this.PostData.pay);
        }
        else {
            this.localServiceData.saveDataTransaction(this.PostData)
                .then(function (success) {
                console.log(success);
            }, function (err) {
                console.log(err);
            });
            // this.loading.dismiss().then( () => {
            //   this.navCtrl.setRoot(RoomPage, {
            //     nickname: this.data.email
            //   });
            // });
            // let alert = this.alertCtrl.create({
            //   message: error.message,
            //   buttons: [
            //     {
            //       text: "Ok",
            //       role: 'cancel'
            //     }
            //   ]
            // });
            // alert.present();
        }
    };
    AddTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-transaction',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/add-transaction/add-transaction.html"*/'<!--\n  Generated template for the AddTransactionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Transaksi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="PostData">\n    <ion-list>\n\n      <ion-item class="primary-select">\n        <ion-label style="color: #fff;">Tipe Transaksi : </ion-label>\n        <ion-select [formControl]="PostData.controls[\'type\']" name="type">\n          <ion-option value="in">Pemasukan</ion-option>\n          <ion-option value="out">Pengeluaran</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Kategori</ion-label>\n          <ion-select [formControl]="PostData.controls[\'category\']" name="category">\n            <ion-option value="belanja">Belanja</ion-option>\n            <ion-option value="hutang">Hutang</ion-option>\n            <ion-option value="lain">Tak terduga</ion-option>\n          </ion-select>\n        </ion-item>\n        \n      <ion-item>\n        <ion-label stacked>Nilai</ion-label>\n        <ion-input type="number" [formControl]="PostData.controls[\'amount\']" name="amount"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Metode Bayar</ion-label>\n        <ion-select [formControl]="PostData.controls[\'pay\']" name="pay">\n          <ion-option value="cash">Tunai</ion-option>\n          <ion-option value="transfer">Transfer</ion-option>\n          <ion-option value="card">Kartu Instan</ion-option>\n        </ion-select>\n      </ion-item>\n      \n      <div *ngIf="bankInfo" style="border: 1px solid #d85f70;">\n        <ion-item>\n          <ion-label stacked>Nama Bank</ion-label>\n          <ion-input type="number" [formControl]="PostData.controls[\'bankname\']" name="bankname"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label stacked>Nomor Rekening</ion-label>\n          <ion-input type="number" [formControl]="PostData.controls[\'bankaccountno\']" name="bankaccountno"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label stacked>Atas nama</ion-label>\n          <ion-input type="number" [formControl]="PostData.controls[\'bankaccountname\']" name="bankaccountname"></ion-input>\n        </ion-item>\n      </div>\n\n      \n      <ion-item>\n        <ion-label>Tanggal Bayar</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" [formControl]="PostData.controls[\'transactiondate\']" name="transactiondate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Penggunaan</ion-label>\n        <ion-select [formControl]="PostData.controls[\'usage\']">\n          <ion-option value="every">Rutin</ion-option>\n          <ion-option value="monthly">Bulanan</ion-option>\n          <ion-option value="lain">Tak terduga</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-textarea [formControl]="PostData.controls[\'description\']" name="description" placeholder="Enter a description"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <button ion-button block class="btn-red">Save</button>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/add-transaction/add-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_local_data_services_local_data_services__["a" /* LocalDataServicesProvider */]])
    ], AddTransactionPage);
    return AddTransactionPage;
}());

//# sourceMappingURL=add-transaction.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_local_data_services_local_data_services__ = __webpack_require__(46);
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
    function AddAccountPage(navCtrl, navParams, formBuilder, localServiceData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.localServiceData = localServiceData;
        this.accountData = { name: "", type: "", currency: "", description: "", amount: 0, createdate: "" };
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
        this.localServiceData.saveDataAccount(this.addAccountForm)
            .then(function (success) {
            console.log(success);
        }, function (err) {
            console.log(err);
        });
    };
    AddAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-account',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/add-account/add-account.html"*/'<!--\n  Generated template for the AddAccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>TabunganKu</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n      <form [formGroup]="addAccountForm">\n\n          <ion-item>\n            <ion-label floating>Name</ion-label>\n            <ion-input [formControl]="addAccountForm.controls[\'name\']"\n                type="text"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Type</ion-label>\n            <ion-input [formControl]="addAccountForm.controls[\'type\']"\n                type="text"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label floating>Currency</ion-label>\n              <ion-input [formControl]="addAccountForm.controls[\'currency\']"\n                  type="text"></ion-input>\n            </ion-item>\n\n          <ion-item>\n              <ion-label floating>Description</ion-label>\n              <ion-input [formControl]="addAccountForm.controls[\'description\']"\n                  type="text"></ion-input>\n            </ion-item>\n\n          <!-- <ion-item>\n              <ion-label floating>Amount</ion-label>\n              <ion-input [formControl]="addAccountForm.controls[\'amount\']"\n                  type="number"></ion-input>\n            </ion-item>    -->\n        \n          <ion-row>\n            <ion-col text-center>\n              <button ion-button block color="secondary" (click)="saveData()">\n                Save\n              </button>\n            </ion-col>\n          </ion-row>\n        \n        </form>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/add-account/add-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_local_data_services_local_data_services__["a" /* LocalDataServicesProvider */]])
    ], AddAccountPage);
    return AddAccountPage;
}());

//# sourceMappingURL=add-account.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-history',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Detail History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<section>\n		<div>\n			<ion-grid>\n			  <ion-row>\n			    <ion-col>\n			      Your Balance\n			    </ion-col>\n			    <ion-col text-right>\n			      Rp. 300.000.000\n			    </ion-col>\n			  </ion-row>\n			</ion-grid>\n		</div>\n		<div class="list-history">\n			<ion-list>\n			  <ion-item>\n			    <ion-col item-start>\n			    	<h2>Topup Bank BCA</h2>\n			    	<p class="tabunganku">TabunganKu</p>\n			    </ion-col>\n			    <ion-col item-end text-right>300.000</ion-col>\n			  </ion-item>\n			  <ion-item>\n			    <ion-col item-start>\n			    	<h2>Topup Bank BCA</h2>\n			    	<p class="tabunganku">TabunganKu</p>\n			    </ion-col>\n			    <ion-col item-end text-right>100.000.000</ion-col>\n			  </ion-item>\n			  <ion-item>\n			    <ion-col item-start>\n			    	<h2>Pay Bukalapak 70087808230238</h2>\n			    	<p class="cost">cost</p>\n			    </ion-col>\n			    <ion-col item-end text-right>500.000</ion-col>\n			  </ion-item>\n			  <ion-item>\n			    <ion-col item-start>\n			    	<h2>Topup Bank BCA</h2>\n			    	<p class="tabunganku">TabunganKu</p>\n			    </ion-col>\n			    <ion-col item-end text-right>200.000.000</ion-col>\n			  </ion-item>\n			</ion-list>\n		</div>\n	</section>\n\n</ion-content>\n'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-account/add-account.module": [
		285,
		6
	],
	"../pages/add-transaction/add-transaction.module": [
		284,
		5
	],
	"../pages/cost/cost.module": [
		287,
		4
	],
	"../pages/history/history.module": [
		286,
		3
	],
	"../pages/report/report.module": [
		288,
		2
	],
	"../pages/setting/setting.module": [
		289,
		1
	],
	"../pages/tabunganku/tabunganku.module": [
		290,
		0
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_report__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting_setting__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cost_cost__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabunganku_tabunganku__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_account_add_account__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_transaction_add_transaction__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_local_data_services_local_data_services__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__ = __webpack_require__(203);
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
    function HomePage(navCtrl, localServiceData, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.localServiceData = localServiceData;
        this.toast = toast;
        this.localServiceData.getData('account')
            .then(function (success) {
            console.log(success);
            _this.accountsData = success;
        }, function (err) {
            console.warn(err);
        });
    }
    HomePage.prototype.getAccountSelect = function (val) {
        var _this = this;
        console.log(val);
        if (val == "new") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__add_account_add_account__["a" /* AddAccountPage */]);
        }
        else {
            this.localServiceData.getDataById('account', val)
                .then(function (success) {
                console.log(success);
            }, function (err) {
                console.warn(err);
                _this.toast.show(err, '5000', 'center').subscribe(function (toast) { console.log(toast); });
            });
        }
    };
    HomePage.prototype.openAddTransaction = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__add_transaction_add_transaction__["a" /* AddTransactionPage */]);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Home</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n  <div class="titlehome">\n    <!-- Halo, <span class="boldhome">Amul</span> -->\n  </div>\n\n<ion-content padding class="bgred">\n\n  <ion-item>\n    <ion-label>Account</ion-label>\n    <ion-select [(ngModel)]="gender" (ionChange)="getAccountSelect($event)">\n      <ion-option value="new">Buat Baru</ion-option>\n      <ion-option *ngFor="let item of accountsData" [value]="item.id" >\n          {{item.name}}\n        </ion-option>\n    </ion-select>\n  </ion-item>\n\n  <section>\n    <div class="firsthome">\n      <!-- <img src="assets/imgs/photo.png">\n      <div class="camerapic"><img src="assets/imgs/camera.svg" class="noneassets"></div> -->\n    </div>\n    \n  </section>\n\n  <section class="contenthome">\n    <h3>Your Balance | Rp</h3>\n    <h2 style="text-align: right;">300.000.000</h2>\n    <p>\n      <!-- If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way. -->\n    </p>\n  </section>\n\n  <section class="categoryhome">\n    <div class="row">\n      <div class="col colnopadding">\n        <ion-card class="radius10" (click)="openAddTransaction()">\n          <ion-list>\n              <ion-list-header>\n                Latest\n              </ion-list-header>\n              <ion-item>\n                <h2 style="color: green">Pengeluaran</h2>\n                <i style="font-size: 9px;"> Pulsa<br>\n                Rp. 50.000</i>\n              </ion-item>\n              <ion-item>\n                <h2 style="color:firebrick">Cher</h2>\n                <i style="font-size: 9px;"> Sparepart<br>\n                  Rp. 1.200.000</i>\n              </ion-item>\n            </ion-list>\n\n        </ion-card>\n      </div>\n    </div>\n  </section>\n\n  <section class="categoryhome">\n    <div class="row">\n      <div class="col colnopadding">\n        <ion-card class="radius10" (click)="openAddTransaction()">\n          <ion-card-header>\n            <img src="assets/imgs/wallet.svg">\n          </ion-card-header>\n\n          <ion-card-content>\n            <p>Tambah Transaksi</p>\n          </ion-card-content>\n\n        </ion-card>\n      </div>\n      <div class="col colnopadding">\n        <ion-card class="radius10" (click)="openCostPage()">\n          <ion-card-header>\n            <img src="assets/imgs/startup.svg">\n          </ion-card-header>\n\n          <ion-card-content>\n            <p>Catatan Transaksi</p>\n          </ion-card-content>\n\n        </ion-card>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col colnopadding">\n        <ion-card class="radius10" (click)="openReportPage()">\n          <ion-card-header>\n            <img src="assets/imgs/diagram.svg">\n          </ion-card-header>\n\n          <ion-card-content>\n            <p>Report</p>\n          </ion-card-content>\n\n        </ion-card>\n      </div>\n      <div class="col colnopadding">\n        <ion-card class="radius10" (click)="openSettingPage()">\n          <ion-card-header>\n            <img src="assets/imgs/controls.svg">\n          </ion-card-header>\n\n          <ion-card-content>\n            <p>Setting</p>\n          </ion-card-content>\n\n        </ion-card>\n      </div>\n    </div>\n  </section>\n\n</ion-content>\n'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_local_data_services_local_data_services__["a" /* LocalDataServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__["a" /* Toast */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-list',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_report_report__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cost_cost__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_history_history__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabunganku_tabunganku__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_account_add_account__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_transaction_add_transaction__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_local_data_services_local_data_services__ = __webpack_require__(46);
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
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cost_cost__["a" /* CostPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabunganku_tabunganku__["a" /* TabungankuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_account_add_account__["a" /* AddAccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_transaction_add_transaction__["a" /* AddTransactionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-transaction/add-transaction.module#AddTransactionPageModule', name: 'AddTransactionPage', segment: 'add-transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-account/add-account.module#AddAccountPageModule', name: 'AddAccountPage', segment: 'add-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cost/cost.module#CostPageModule', name: 'CostPage', segment: 'cost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/report.module#ReportPageModule', name: 'ReportPage', segment: 'report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabunganku/tabunganku.module#TabungankuPageModule', name: 'TabungankuPage', segment: 'tabunganku', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cost_cost__["a" /* CostPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabunganku_tabunganku__["a" /* TabungankuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_account_add_account__["a" /* AddAccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_transaction_add_transaction__["a" /* AddTransactionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_18__providers_local_data_services_local_data_services__["a" /* LocalDataServicesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_report_report__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cost_cost__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabunganku_tabunganku__ = __webpack_require__(55);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDataServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(159);
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
    function LocalDataServicesProvider(sqlite) {
        this.sqlite = sqlite;
        this.accounts = [];
        this.expenses = [];
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.balance = 0;
        console.log('Hello LocalDataServicesProvider Provider');
    }
    LocalDataServicesProvider.prototype.createAllTable = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var createTableArr = [];
            _this.sqlite.create({
                name: 'mypocket.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql('CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, name TEXT, type TEXT, currency TEXT, description TEXT, amount INT, createdate TEXT )', [])
                    .then(function (res) { return console.log('Executed SQL'); })
                    .catch(function (e) { return console.log(e); });
                db.executeSql('CREATE TABLE IF NOT EXISTS transaction(id INTEGER PRIMARY KEY, accountid TEXT, type TEXT, pay TEXT, category TEXT, amount INT, transactiondate TEXT, usage TEXT, event TEXT, createdate TEXT )', [])
                    .then(function (res) { return console.log('Executed SQL'); })
                    .catch(function (e) { return console.log(e); });
                // db.executeSql('CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, name TEXT, type TEXT, currency TEXT, description TEXT, amount INT, createdate TEXT )', [])
                // .then(res => console.log('Executed SQL'))
                // .catch(e => console.log(e));
                // db.executeSql('CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, name TEXT, type TEXT, currency TEXT, description TEXT, amount INT, createdate TEXT )', [])
                // .then(res => console.log('Executed SQL'))
                // .catch(e => console.log(e));
                // db.executeSql('CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, name TEXT, type TEXT, currency TEXT, description TEXT, amount INT, createdate TEXT )', [])
                // .then(res => console.log('Executed SQL'))
                // .catch(e => console.log(e));
                // db.executeSql('CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, name TEXT, type TEXT, currency TEXT, description TEXT, amount INT, createdate TEXT )', [])
                // .then(res => console.log('Executed SQL'))
                // .catch(e => console.log(e));
                // db.executeSql('CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, name TEXT, type TEXT, currency TEXT, description TEXT, amount INT, createdate TEXT )', [])
                // .then(res => console.log('Executed SQL'))
                // .catch(e => console.log(e));
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    LocalDataServicesProvider.prototype.getData = function (table) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'mypocket.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql('SELECT * FROM ' + table + ' ORDER BY id DESC', []).then(function (res) {
                    _this.accounts = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.accounts.push({
                            id: res.rows.item(i).id,
                            name: res.rows.item(i).name,
                            type: res.rows.item(i).type,
                            description: res.rows.item(i).description,
                            amount: 0,
                            createdate: res.rows.item(i).createdate
                        });
                    }
                    resolve(_this.accounts);
                })
                    .catch(function (e) {
                    console.log(e);
                    reject(e);
                });
            }).catch(function (e) { return reject(e); });
        });
    };
    LocalDataServicesProvider.prototype.getDataById = function (table, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'mypocket.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql('SELECT FROM ' + table + ' WHERE id=?', [id])
                    .then(function (res) {
                    console.log(res);
                    resolve(res);
                })
                    .catch(function (e) { return reject(e); });
            }).catch(function (e) { return reject(e); });
        });
    };
    LocalDataServicesProvider.prototype.getDataTotalAmount = function (table, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'mypocket.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql('SELECT SUM(amount) AS totalIncome FROM expense WHERE type="Income"', [])
                    .then(function (res) {
                    if (res.rows.length > 0) {
                        _this.totalIncome = parseInt(res.rows.item(0).totalIncome);
                        _this.balance = _this.totalIncome - _this.totalExpense;
                    }
                })
                    .catch(function (e) { return reject(e); });
            }).catch(function (e) { return reject(e); });
        });
    };
    LocalDataServicesProvider.prototype.getDataTotalExpense = function (table, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'mypocket.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql('SELECT SUM(amount) AS totalExpense FROM ' + table + ' WHERE type="' + type + '"', [])
                    .then(function (res) {
                    if (res.rows.length > 0) {
                        _this.totalExpense = parseInt(res.rows.item(0).totalExpense);
                        _this.balance = _this.totalIncome - _this.totalExpense;
                        resolve(res);
                    }
                })
                    .catch(function (e) { return reject(e); });
            }).catch(function (e) { return reject(e); });
        });
    };
    /*********** ACCOUNT TABLE ***********/
    LocalDataServicesProvider.prototype.saveDataAccount = function (DataForm) {
        var _this = this;
        var dateNow = new Date();
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'mypocket.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql('INSERT INTO account VALUES(NULL,?,?,?,?,?,?)', [
                    DataForm.value['name'],
                    DataForm.value['type'],
                    DataForm.value['currency'],
                    DataForm.value['description'],
                    0,
                    dateNow
                ]).then(function (res) {
                    resolve(res);
                }).catch(function (e) {
                    reject(e);
                });
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    LocalDataServicesProvider.prototype.deleteData = function (id) {
        this.sqlite.create({
            name: 'mypocket.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('DELETE FROM account WHERE id=?', [id])
                .then(function (res) {
                console.log(res);
                // this.getDataAccount();
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    /*********** TRANSACTION TABLE ***********/
    LocalDataServicesProvider.prototype.saveDataTransaction = function (DataForm) {
        var _this = this;
        var dateNow = new Date();
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'mypocket.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql('INSERT INTO transaction VALUES(NULL,?,?,?,?,?,?)', [
                    DataForm.value['name'],
                    DataForm.value['type'],
                    DataForm.value['currency'],
                    DataForm.value['description'],
                    0,
                    dateNow
                ]).then(function (res) {
                    resolve(res);
                }).catch(function (e) {
                    reject(e);
                });
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    LocalDataServicesProvider.prototype.deleteDataTransaction = function (id) {
        this.sqlite.create({
            name: 'mypocket.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('DELETE FROM account WHERE id=?', [id])
                .then(function (res) {
                console.log(res);
                // this.getDataAccount();
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    LocalDataServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], LocalDataServicesProvider);
    return LocalDataServicesProvider;
}());

//# sourceMappingURL=local-data-services.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-cost',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/cost/cost.html"*/'<!--\n  Generated template for the CostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cost</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n\n	  <ion-item>\n	    <ion-label stacked>Title</ion-label>\n	    <ion-input type="text"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label stacked>Cost</ion-label>\n	    <ion-input type="number"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label stacked>Memo</ion-label>\n	    <ion-input type="text"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	  	<button ion-button class="btn-red">Submit</button>\n	  </ion-item>\n\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/cost/cost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CostPage);
    return CostPage;
}());

//# sourceMappingURL=cost.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_history__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts__ = __webpack_require__(261);
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
            selector: 'page-report',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/report/report.html"*/'<!--\n  Generated template for the ReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Report</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <section class="topreport">\n    <div>\n      <ion-list>\n        <ion-item>\n          <ion-label>Sort by</ion-label>\n          <ion-select>\n            <ion-option value="day">Day</ion-option>\n            <ion-option value="week">Week</ion-option>\n            <ion-option value="month">Month</ion-option>\n            <ion-option value="year">Year</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n  </section>\n\n  <section alt="chart">\n	 <div id="container" style="display: block;"></div>\n  </section>\n  \n  <section class="info">\n      <div class="titlereport">\n        Status\n      </div>\n      <div>\n        <ion-list>\n          <ion-item>\n            <ion-avatar item-start>\n              <div class="balancereport"></div>\n            </ion-avatar>\n            <h2>Balance</h2>\n            <p>300.000.000</p>\n          </ion-item>\n          <ion-item>\n            <ion-avatar item-start>\n              <div class="tabungankureport"></div>\n            </ion-avatar>\n            <h2>TabunganKu</h2>\n            <p>4.000.000</p>\n          </ion-item>\n          <ion-item>\n            <ion-avatar item-start>\n              <div class="costreport"></div>\n            </ion-avatar>\n            <h2>Cost</h2>\n            <p>2.000.000</p>\n          </ion-item>\n        </ion-list>\n      </div>\n  </section>\n\n  <section class="detail" (click)="openHistoryPage()">\n    <button ion-button class="btn-red">View Detail History</button>\n  </section>\n\n</ion-content>\n'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/report/report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-setting',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/setting/setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Setting</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabungankuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-tabunganku',template:/*ion-inline-start:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/tabunganku/tabunganku.html"*/'<!--\n  Generated template for the CostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>TabunganKu</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n\n	  <ion-item>\n	    <ion-label stacked>Title</ion-label>\n	    <ion-input type="text"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label stacked>Top up</ion-label>\n	    <ion-input type="number"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label stacked>Memo</ion-label>\n	    <ion-input type="text"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	  	<button ion-button class="btn-red">Submit</button>\n	  </ion-item>\n\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/f2rhero/PROJECT/F2RHERO/Ionic/MyPocket/src/pages/tabunganku/tabunganku.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabungankuPage);
    return TabungankuPage;
}());

//# sourceMappingURL=tabunganku.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map