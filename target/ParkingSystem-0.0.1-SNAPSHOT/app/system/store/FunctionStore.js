Ext.define("MyApp.system.store.FunctionStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.system.model.FunctionModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		extraParams : {
			roleId : -1
		},
		url : SYSTEM_CONTEXTPATH + '/function/getFunctionList',
		reader : {
			type : 'json',
			root : 'list'
		}
	}
});
