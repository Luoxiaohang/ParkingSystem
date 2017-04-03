Ext.define("MyApp.charge.store.ChargeStandardStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.charge.model.ChargeStandardModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : SYSTEM_CONTEXTPATH + '/ChargeStandard/getStandardList',
		reader : {
			type : 'json',
			root : 'list'
		},
		actionMethods : {
			read : 'POST'
		}
	}
});
