Ext.define("MyApp.charge.store.ChargeModeStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.charge.model.ChargeModeModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : SYSTEM_CONTEXTPATH + '/ChargeMode/getModeList',
		reader : {
			type : 'json',
			root : 'list'
		},
		actionMethods : {
			read : 'POST'
		}
	}
});
