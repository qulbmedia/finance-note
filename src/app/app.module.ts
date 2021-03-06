import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ReportPage } from '../pages/report/report';
import { SettingPage } from '../pages/setting/setting';
import { CostPage } from '../pages/cost/cost';
import { HistoryPage } from '../pages/history/history';
import { TabungankuPage } from '../pages/tabunganku/tabunganku';
import { AccountPage } from '../pages/account/account';
import { AddAccountPage } from '../pages/add-account/add-account';
import { AddTransactionPage } from '../pages/add-transaction/add-transaction';
import { TransactionPage } from '../pages/transaction/transaction';

// import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { LocalDataServicesProvider } from '../providers/local-data-services/local-data-services';
import { InteractionProvider } from '../providers/interaction/interaction';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ReportPage,
    SettingPage,
    CostPage,
    TabungankuPage,
    HistoryPage,
    AccountPage,
    AddAccountPage,
    AddTransactionPage,
    TransactionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ReportPage,
    SettingPage,
    CostPage,
    TabungankuPage,
    HistoryPage,
    AccountPage,
    AddAccountPage,
    AddTransactionPage,
    TransactionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    Toast,
    LocalDataServicesProvider,
    InteractionProvider
  ]
})
export class AppModule {}
