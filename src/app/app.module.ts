import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ReportPage } from '../pages/report/report';
import { SettingPage } from '../pages/setting/setting';
import { CostPage } from '../pages/cost/cost';
import { HistoryPage } from '../pages/history/history';
import { TabungankuPage } from '../pages/tabunganku/tabunganku';
import { AddAccountPage } from '../pages/add-account/add-account';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { LocalDataServicesProvider } from '../providers/local-data-services/local-data-services';

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
    AddAccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    AddAccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    Toast,
    LocalDataServicesProvider
  ]
})
export class AppModule {}
