Ext.define("MyApp.berth.store.ValidBookedRecordsStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.berth.model.BerthBookModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : SYSTEM_CONTEXTPATH + '/Berth/getValidBookedRecords',
		reader : {
			type : 'json',
			root : 'list'
		},
		actionMethods : {
			read : 'GET'
		}
	}
});
