import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ReportPage } from '../pages/report/report';
import { SettingPage } from '../pages/setting/setting';
import { CostPage } from '../pages/cost/cost';
import { HistoryPage } from '../pages/history/history';
import { AccountPage } from '../pages/account/account';
import { TabungankuPage } from '../pages/tabunganku/tabunganku';
import { LocalDataServicesProvider } from '../providers/local-data-services/local-data-services';

// import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public localServiceData:LocalDataServicesProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Account', component: AccountPage },
      { title: 'Tabunganku', component: TabungankuPage },
      { title: 'Cost', component: CostPage },
      { title: 'Report', component: ReportPage },
      { title: 'Setting', component: SettingPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // create table
      // this.localServiceData.createAllTable()
      // .then((success) => {
      //   console.log("createAllTable");
      //   console.log(success);
      // },(err) => {
      //   console.warn(err);
      // });
    });


  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
