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

    this.localServiceData.getData("accounttransaction")
    .then((success) => {
      console.log("getData transaction");
      console.log(success);
    },(err) => {
      console.warn(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionPage');
  }

  getTransactionSelect(val){

  }
}
