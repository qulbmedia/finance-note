import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportPage } from '../report/report';
import { SettingPage } from '../setting/setting';
import { CostPage } from '../cost/cost';
import { TabungankuPage } from '../tabunganku/tabunganku';
import { AddAccountPage } from '../add-account/add-account';
import { AddTransactionPage } from '../add-transaction/add-transaction';
import { TransactionPage } from '../transaction/transaction';

import { LocalDataServicesProvider } from '../../providers/local-data-services/local-data-services';

import * as HighCharts from 'highcharts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('pieCanvas') pieCanvas;

  accountsData: any;
  totalIncome : number;
  totalExpense: number;
  saldo       : number;
  monthNow    : string;
  accountDefault;
  pieChart: any;
  transactionList     :any;

  constructor(
    public navCtrl: NavController, 
    public localServiceData:LocalDataServicesProvider
  ) {
    

  }
  ionViewWillEnter(){
    console.log('ionViewDidLoad TransactionPage');
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const d = new Date();
    this.monthNow   = monthNames[d.getMonth()];

    this.getAccount();
    var activeAccount   = localStorage.getItem("AccountActive");
    if(activeAccount != null || activeAccount!= undefined){
      this.getData(activeAccount);
    }else{
      this.totalIncome    = 0;
      this.totalExpense   = 0;
      this.saldo          = 0;
    }
  }
  ionViewDidLoad() {
    this.localServiceData.createAllTable()
    .then((success) => {
      console.log("createAllTable");
      console.log(success);
    },(err) => {
      console.warn(err);
    });
  }
  
  getAccount(){
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
        this.getData(val)
        
      },(err) => {
        console.warn(err);
      });
    }
  }

  getData(val){
    
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
      this.chartView(parseInt(val));
    }, 500);
    this.getAllTransaction();

  }
  
  getAllTransaction(){
    var activeAccount   = localStorage.getItem("AccountActive");
    if(activeAccount != null || activeAccount!= undefined){
      this.localServiceData.getDataByAccountIdLimit("accounttransaction",parseInt(activeAccount),5)
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

  chartView(account){
		var myChart = HighCharts.chart('pieChart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: false,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: false
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Balance',
          y: this.totalIncome,
          sliced: true,
          selected: true
        }, {
          name: 'Expense',
          y: this.totalExpense
        }]
      }]
    });
	
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
