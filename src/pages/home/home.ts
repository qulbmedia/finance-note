import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportPage } from '../report/report';
import { SettingPage } from '../setting/setting';
import { CostPage } from '../cost/cost';
import { TabungankuPage } from '../tabunganku/tabunganku';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openReportPage() {
  	this.navCtrl.push(ReportPage);
  }

  openSettingPage() {
  	this.navCtrl.push(SettingPage);
  }

  openCostPage() {
  	this.navCtrl.push(CostPage);
  }

  openTabungankuPage() {
    this.navCtrl.push(TabungankuPage);
  }

}
