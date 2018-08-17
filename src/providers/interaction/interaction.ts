import { Injectable } from '@angular/core';
import { ToastController, AlertController } from 'ionic-angular';

/*
  Generated class for the InteractionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InteractionProvider {

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    console.log('Hello InteractionProvider Provider');
  }

  alert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  confirmAlert(title,message){
    return new Promise((resolve, reject) => {
      let alert = this.alertCtrl.create({
        title: title,
        message: message,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              reject();
            }
          },{
            text: 'I Understand',
            handler: (res) => {
              resolve(res);
            }
          }
        ]
      });
      alert.present();
    });
  }

  toast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  

}
