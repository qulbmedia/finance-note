import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LocalDataServicesProvider } from '../../providers/local-data-services/local-data-services';
/**
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {
  transactionEvent  :string   = "all";
  transactionList:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public localServiceData:LocalDataServicesProvider
  ) {

    this.localServiceData.getDataTotalIncome("accounttransaction",1)
    .then((success) => {
      console.log("getDataTotalAmount");
      console.log(success);
    },(err) => {
      console.warn(err);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionPage');
    this.getAllTransaction();
  }

  getAllTransaction(){

    var activeAccount   = localStorage.getItem("AccountActive");
    if(activeAccount != null || activeAccount!= undefined){
      this.localServiceData.getDataById("accounttransaction",parseInt(activeAccount))
      .then((success) => {
        console.log("getData transaction");
        console.log(success);
        this.transactionList  = success;
      },(err) => {
        console.warn(err);
      });
    }else{
      this.transactionList  = [];
    }
    
  }

  getTransactionSelect(val){
    var activeAccount   = localStorage.getItem("AccountActive");
    if(activeAccount != null || activeAccount!= undefined){
      if(val == "in"){
        this.localServiceData.getDataByType("in",parseInt(activeAccount))
        .then((success) => {
          console.log("getData transaction");
          console.log(success);
          this.transactionList  = success;
        },(err) => {
          console.warn(err);
        });
      }else if(val == "out"){
        this.localServiceData.getDataByType("out",parseInt(activeAccount))
        .then((success) => {
          console.log("getData transaction");
          console.log(success);
          this.transactionList  = success;
        },(err) => {
          console.warn(err);
        });
      }else{
        this.getAllTransaction();
      }
    }else{
      
    }

    

  }
}
