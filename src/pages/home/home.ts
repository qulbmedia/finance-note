import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportPage } from '../report/report';
import { SettingPage } from '../setting/setting';
import { CostPage } from '../cost/cost';
import { TabungankuPage } from '../tabunganku/tabunganku';
import { AddAccountPage } from '../add-account/add-account';
import { AddTransactionPage } from '../add-transaction/add-transaction';

import { LocalDataServicesProvider } from '../../providers/local-data-services/local-data-services';

import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  accountsData: any;

  constructor(
    public navCtrl: NavController, 
    public localServiceData:LocalDataServicesProvider,
    private toast: Toast
  ) {

    this.localServiceData.getData('account')
    .then((success) => {
      console.log(success);
      this.accountsData   = success;
    },(err) => {
      console.warn(err);
    });

  }

  getAccountSelect(val){
    console.log(val);
    if(val == "new"){
      this.navCtrl.push(AddAccountPage);
    }else{
      this.localServiceData.getDataById('account',val)
      .then((success) => {
        console.log(success);
        localStorage.setItem("AccountActive",val);

        
      },(err) => {
        console.warn(err);
        this.toast.show(err, '5000', 'center').subscribe(
          toast => { console.log(toast)}
        );
      });
      
    }
  }

  openAddTransaction() {
  	this.navCtrl.push(AddTransactionPage);
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
