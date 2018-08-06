import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportPage } from '../report/report';
import { SettingPage } from '../setting/setting';
import { CostPage } from '../cost/cost';
import { TabungankuPage } from '../tabunganku/tabunganku';
import { AddAccountPage } from '../add-account/add-account';
import { AddTransactionPage } from '../add-transaction/add-transaction';
import { TransactionPage } from '../transaction/transaction';

import { LocalDataServicesProvider } from '../../providers/local-data-services/local-data-services';

import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  accountsData: any;
  totalIncome : number;

  constructor(
    public navCtrl: NavController, 
    public localServiceData:LocalDataServicesProvider,
    private toast: Toast
  ) {
    console.log("createAllTable ---------------");
    this.localServiceData.createAllTable()
    .then((success) => {
      console.log("createAllTable");
      console.log(success);
    },(err) => {
      console.warn(err);
    });
    console.log("------------------------------");

    this.localServiceData.getData('account')
    .then((success) => {
      console.log(success);
      this.accountsData   = success;
    },(err) => {
      console.warn(err);
    });
    
    var activeAccount   = localStorage.getItem("AccountActive");
    if(activeAccount != null || activeAccount!= undefined){

      // get transaction -----
      this.localServiceData.getDataByAccountId('accounttransaction',activeAccount)
      .then((success) => {
        console.log(success);
        this.accountsData   = success;
      },(err) => {
        console.warn(err);
      });

      // get total income -----
      this.localServiceData.getDataTotalIncome('accounttransaction',activeAccount)
      .then((success) => {
        console.log("getDataTotalIncome");
        console.log(success);
        this.accountsData   = success;
      },(err) => {
        console.warn(err);
      });

    }else{
      this.totalIncome    = 10000000;
    }

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

  openTransactionActivity(){
  	this.navCtrl.push(TransactionPage);
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
