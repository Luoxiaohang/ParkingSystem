Ext.define("MyApp.charge.store.ChargeCustomizeStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.charge.model.ChargeCustomizeModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		extraParams : {
			standardId : -1
		},
		url : SYSTEM_CONTEXTPATH + '/ChargeCustomize/getCustomize',
		reader : {
			type : 'json',
			root : 'list'
		},
		actionMethods : {
			read : 'POST'
		}
	}
});
