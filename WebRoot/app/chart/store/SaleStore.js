Ext.define("MyApp.chart.store.SaleStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.chart.model.SaleModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : SYSTEM_CONTEXTPATH + '/Sale/getSalePersentByMonth',
		reader : {
			type : 'json',
			root : 'list'
		},
		actionMethods : {
			read : 'GET'
		}
	},
	sorters : [ {
		property : 'month',
		direction : 'ASC'
	} ]
});