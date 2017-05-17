Ext.define("MyApp.berth.store.BerthBookedStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.berth.model.BerthBookModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : SYSTEM_CONTEXTPATH + '/Berth/getBookedBerth',
		reader : {
			type : 'json',
			root : 'list'
		},
		actionMethods : {
			read : 'GET'
		}
	}
});
