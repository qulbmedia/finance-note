import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import * as HighCharts from 'highcharts';

import { LocalDataServicesProvider } from '../../providers/local-data-services/local-data-services';
/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
	accountDefault;
	income:number;
	expense:number;
	balance:number;
  constructor(public navCtrl: NavController, public localServiceData:LocalDataServicesProvider) {
  }

  ionViewDidLoad() {
		// this.allTransaction();
		console.log('ionViewDidLoad ReportPage');
		var activeAccount   = localStorage.getItem("AccountActive");
    if(activeAccount != null || activeAccount!= undefined){
      	this.chartView(activeAccount);
    }else{
			this.chartView(null);
			
		}
  }

  chartView(account){
		this.allTransaction(account,null).then((result)=>{
			this.income 	= parseInt(result[0]);
			this.expense 	= parseInt(result[1]);
			this.balance 	= parseInt(result[0]) - parseInt(result[1]);
			console.log("this.income :: "+this.income);
			console.log("this.expense :: "+this.expense);
			console.log("this.balance :: "+this.balance);

			var myChart = HighCharts.chart('container', {
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
						y: this.balance,
						sliced: true,
						selected: true
					}, {
						name: 'Expense',
						y: this.expense
					}, {
						name: 'Income',
						y: this.income
					}]
				}]
			});
		})
	
  }

  openHistoryPage() {
  	this.navCtrl.push(HistoryPage);
	}
	
	getPeriodSelect(period){

		var activeAccount   = localStorage.getItem("AccountActive");
		if(activeAccount != null || activeAccount!= undefined){
			// this.accountBalace(activeAccount,val);
			this.allTransaction(activeAccount,period);
		}else{
			this.allTransaction(activeAccount,null);
		}
	}

	// allTransaction(periode,accountid){
	// 	this.localServiceData.getTransactionByDate('in',periode,parseInt(accountid))
	// 	.then((success:any) => {
	// 		console.log(">>> getDataTotalIncome <<<");
	// 		console.log(success);
	// 	},(err) => {
	// 		console.warn(err);
	// 	});
	// }

	allTransaction(accountid,periode){
		var chartdata = [];
    return new Promise((resolve, reject) => {
			this.accountDefault = accountid;
		
			// get total income -----
			if(periode == null){
				this.localServiceData.getDataTotalIncome('accounttransaction',parseInt(accountid))
				.then((success:any) => {
					console.log("getDataTotalIncome");
					console.log(success);
					if(success.value == 0 || success.value == "0"){
						chartdata.push(0);
					}else{
						chartdata.push(success.value);
					}
				},(err) => {
					console.warn(err);
				});
			
				// get total expense -----
				this.localServiceData.getDataTotalExpense('accounttransaction',parseInt(accountid))
				.then((success:any) => {
					console.log("getDataTotalIncome");
					console.log(success);
					if(success.value == 0 || success.value == "0"){
						chartdata.push(0);
					}else{
						chartdata.push(success.value);
						console.warn(success.value);
					}
				},(err) => {
					console.warn(err);
				});
			}else{
				this.localServiceData.getTotalTransactionByDate('in',periode,parseInt(accountid))
				.then((success:any) => {
					console.log(">>> getDataTotalIncome <<<");
					console.log(success);
				},(err) => {
					console.warn(err);
				});
			
				// get total expense -----
				this.localServiceData.getTotalTransactionByDate('out',periode,parseInt(accountid))
				.then((success:any) => {
					console.log(">>> getDataTotalIncome <<<");
					console.log(success);
				},(err) => {
					console.warn(err);
				});
			}

			setTimeout(() => {
				resolve(chartdata);
			}, 500);
		});
	
  }

}
