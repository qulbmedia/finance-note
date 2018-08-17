import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LocalDataServicesProvider } from '../../providers/local-data-services/local-data-services';
import { InteractionProvider } from '../../providers/interaction/interaction';
/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  accountList;
  constructor(
    public navCtrl: NavController, 
    public localServiceData:LocalDataServicesProvider,
    public navParams: NavParams,
    public interaction : InteractionProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');

    this.getAccountList();
  }

  getAccountList(){
    this.localServiceData.getData('account')
    .then((success) => {
      console.log(success);
      this.accountList   = success;
    },(err) => {
      console.warn(err);
    });
  }

  editItem(id){
    console.log(id);
  }

  deleteItem(id){
    console.log(id);
    this.interaction.confirmAlert("Perhatian","Apakah anda yakin menghapus akun ini?, semua data dan catatan akan terhapus")
    .then((success) => {
      this.localServiceData.deleteData('account')
      .then((success) => {
        console.log(success);
        this.interaction.toast("success , transaction saved");
      },(err) => {
        console.warn(err);
        this.interaction.toast("failed , transaction not saved");
      });
    },(err) => {
      console.warn(err);
    });
    
  }

}
