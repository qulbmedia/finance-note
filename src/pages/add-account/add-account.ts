import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HomePage } from '../home/home';
import { LocalDataServicesProvider } from '../../providers/local-data-services/local-data-services';
/**
 * Generated class for the AddAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-account',
  templateUrl: 'add-account.html',
})
export class AddAccountPage {
  addAccountForm: FormGroup;
  accountData = { name:"", type:"", currency:"",description:"", amount:0 , createdate:""};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder , 
    public localServiceData:LocalDataServicesProvider,
    private toastCtrl: ToastController
  ) {

    this.addAccountForm = this.formBuilder.group({
      name: [''],
      type: [''],
      currency: [''],
      description: [''],
      amount: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAccountPage');
  }

  saveData(){

    console.log(this.addAccountForm.value['name']);
    this.localServiceData.saveDataAccount(this.addAccountForm)
    .then((success) => {
      console.log(success);
      this.presentToast('create success');
    },(err) => {
      console.log(err);
      this.presentToast('create failed');
    });
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      this.navCtrl.push(HomePage);
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
