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
  totalExpense: number;
  saldo       : number;
  accountDefault;

  constructor(
    public navCtrl: NavController, 
    public localServiceData:LocalDataServicesProvider,
    private toast: Toast
  ) {
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionPage');
    
    var activeAccount   = localStorage.getItem("AccountActive");
    if(activeAccount != null || activeAccount!= undefined){
      this.getData(activeAccount);
    }else{
      this.totalIncome    = 0;
      this.totalExpense   = 0;
      this.saldo          = 0;
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
        this.getData(val)
        
      },(err) => {
        console.warn(err);
        this.toast.show(err, '5000', 'center').subscribe(
          toast => { console.log(toast)}
        );
      });
    }
  }

  getData(val){
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
    
    this.accountDefault = val;
    // get transaction -----
    this.localServiceData.getDataByAccountId('accounttransaction',parseInt(val))
    .then((success) => {
      console.log(success);
      
    },(err) => {
      console.warn(err);
    });

    // get total income -----
    this.localServiceData.getDataTotalIncome('accounttransaction',parseInt(val))
    .then((success:any) => {
      console.log("getDataTotalIncome");
      console.log(success);
      if(success.value == 0 || success.value == "0"){
        this.totalIncome    = 0;
      }else{
        this.totalIncome    = success.value;
      }
    },(err) => {
      console.warn(err);
    });

    // get total expense -----
    this.localServiceData.getDataTotalExpense('accounttransaction',parseInt(val))
    .then((success:any) => {
      console.log("getDataTotalIncome");
      console.log(success);
      if(success.value == 0 || success.value == "0"){
        this.totalExpense    = 0;
      }else{
        this.totalExpense    = success.value;
      }
    },(err) => {
      console.warn(err);
    });
    setTimeout(() => {
      this.saldo  = this.totalIncome - this.totalExpense;
    }, 500);

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
