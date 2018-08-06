import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import * as HighCharts from 'highcharts';

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

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');

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
	            y: 50,
	            sliced: true,
	            selected: true
	        }, {
	            name: 'Cost',
	            y: 20
	        }, {
	            name: 'TabunganKu',
	            y: 30
	        }]
	    }]
	});

  }

  openHistoryPage() {
  	this.navCtrl.push(HistoryPage);
  }

}
