import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportPage } from '../report/report';
import { SettingPage } from '../setting/setting';
import { CostPage } from '../cost/cost';
import { TabungankuPage } from '../tabunganku/tabunganku';
import { AddAccountPage } from '../add-account/add-account';

import { LocalDataServicesProvider } from '../../providers/local-data-services/local-data-services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  accountsData: any;

  constructor(public navCtrl: NavController, public localServiceData:LocalDataServicesProvider) {

    this.localServiceData.getData()
    .then((success) => {
      console.log(success);
      this.accountsData   = success;
    },(err) => {

    });

  }

  getAccountSelect(val){
    if(val == "new"){
      this.navCtrl.push(AddAccountPage);
    }else{

    }
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
