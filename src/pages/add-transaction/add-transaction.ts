import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,LoadingController,Loading  } from 'ionic-angular';

import { LocalDataServicesProvider } from '../../providers/local-data-services/local-data-services';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the AddTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-transaction',
  templateUrl: 'add-transaction.html',
})
export class AddTransactionPage {
  addAccountForm: FormGroup;
  PostData      = this.formBuilder.group({ type:"" , pay:"" ,bankname:"",bankaccountno:"",bankaccountname:"", category:"" , amount:"" , transactiondate:"" , usage:"" , description:"" });
  categoryList  : any;
  disableSelector:any;

  public loading: Loading;

  public bankInfo:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder ,
    public localServiceData : LocalDataServicesProvider
  ) {
    this.disableSelector  = true;
    this.PostData.controls['type'].valueChanges.subscribe(
        (selectedValue) => {
          this.disableSelector  = false;
          if(selectedValue == "in"){
            this.categoryList = [
              { name:"Belanja",value:"shop",icon:""},
              { name:"Hutang",value:"borrow",icon:""},
              { name:"Tak Terduga",value:"other",icon:""}
            ];
          }else if(selectedValue == "out"){
            this.categoryList = [
              { name:"Gaji",value:"sallary",icon:""},
              { name:"Piutang",value:"borrows",icon:""},
              { name:"Hadiah",value:"reward",icon:""},
              { name:"Hasil Jualan",value:"selling",icon:""},
              { name:"Lainnya",value:"other",icon:""}
            ];
          }else{ }
        }
    );

    this.PostData.controls['pay'].valueChanges.subscribe(
        (selectedValue) => {
          if(selectedValue == "transfer"){
            this.bankInfo = true;
          }else{
            this.bankInfo = false;
          }
        }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTransactionPage');
  }

  addTransaction(): void {

    this.loading = this.loadingCtrl.create();
    this.loading.present();

    if (!this.PostData.value['type']){
      console.log(this.PostData.value['type']);
    } else if (!this.PostData.value['type'].value['type']){
      console.log(this.PostData.value['type']);
    } else {
      this.localServiceData.saveDataTransaction(this.PostData)
      .then((success) => {
        console.log(success);
      },(err) => {
        console.log(err);
      });
      
      // this.loading.dismiss().then( () => {
      //   this.navCtrl.setRoot(RoomPage, {
      //     nickname: this.data.email
      //   });
      // });

      // let alert = this.alertCtrl.create({
      //   message: error.message,
      //   buttons: [
      //     {
      //       text: "Ok",
      //       role: 'cancel'
      //     }
      //   ]
      // });
      // alert.present();
    }
  }
}
