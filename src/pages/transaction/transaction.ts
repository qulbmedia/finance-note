import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { LocalDataServicesProvider } from '../../providers/local-data-services/local-data-services';

import { Toast } from '@ionic-native/toast';
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
  transactionEvent    :string   = "all";
  transactionPeriod   :string   = "all";
  transactionList     :any;

  customPeriodInput;
  startTransactionPeriod;
  endTransactionPeriod;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public localServiceData:LocalDataServicesProvider,
    private toastCtrl: ToastController
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
      this.localServiceData.getDataByAccountId("accounttransaction",parseInt(activeAccount))
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

  getReset(){
    this.transactionEvent         = "all";
    this.transactionPeriod        = "all";
    this.customPeriodInput        = false;
    this.startTransactionPeriod   = "";
    this.endTransactionPeriod     = "";
    this.getAllTransaction();
  }

  getTransactionSelect(val){
    this.transactionEvent = val;

    console.log("transactionType :: "+this.transactionEvent);
    console.log("transactionPeriode :: "+this.transactionPeriod);
    var activeAccount   = localStorage.getItem("AccountActive");
    if(activeAccount != null || activeAccount!= undefined){
      
        // this.localServiceData.getDataByType(val,parseInt(activeAccount))
        // .then((success) => {
        //   console.log("getData transaction");
        //   console.log(success);
        //   this.transactionList  = success;
        // },(err) => {
        //   console.warn(err);
        // });
      this.localServiceData.getTransactionDataFilter(this.transactionPeriod,this.transactionEvent,activeAccount,"","")
      .then((success) => {
        console.log("getData transaction");
        console.log(success);
        this.transactionList  = success;
      },(err) => {
        console.warn(err);
      });

    }else{
      
    }
  }

  getPeriodSelect(value){
    this.transactionPeriod = value;
    if(this.transactionEvent == null){
      this.presentToast("Anda harus memilih Transaksi terlebih dahulu");
    }else{
      if(value == "custom"){
        this.customPeriodInput  = true;
      }else{
        this.customPeriodInput  = false;
        console.log("transactionType :: "+this.transactionEvent);
        console.log("transactionPeriode :: "+this.transactionPeriod);
  
        var activeAccount   = localStorage.getItem("AccountActive");
        if(activeAccount != null || activeAccount!= undefined){
          this.localServiceData.getTransactionDataFilter(this.transactionPeriod,this.transactionEvent,activeAccount,"","")
          .then((success) => {
            console.log("getData transaction");
            console.log(success);
            this.transactionList  = success;
          },(err) => {
            console.warn(err);
          });
        }
      }
    }
    
  }

  getCustomPeriod(){
    console.log("transactionType :: "+this.transactionEvent);
    console.log("transactionPeriode :: "+this.transactionPeriod);
    console.log("startTransactionPeriod :: "+this.startTransactionPeriod);
    console.log("endTransactionPeriod :: "+this.endTransactionPeriod);

    var activeAccount   = localStorage.getItem("AccountActive");
    if(activeAccount != null || activeAccount!= undefined){
      this.localServiceData.getTransactionDataFilter(this.transactionPeriod,this.transactionEvent,activeAccount,this.startTransactionPeriod,this.endTransactionPeriod)
      .then((success) => {
        console.log("getData transaction");
        console.log(success);
        this.transactionList  = success;
      },(err) => {
        console.warn(err);
      });
    }
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
