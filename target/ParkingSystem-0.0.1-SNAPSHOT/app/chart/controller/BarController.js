Ext.define('MyApp.chart.controller.BarController',
		{
			extend : 'Ext.app.Controller',
			views : [ 'MyApp.chart.view.SaleChart',
					'MyApp.chart.view.BerthRateChart' ],
			stores : [ 'MyApp.chart.store.SaleStore' ]
		});