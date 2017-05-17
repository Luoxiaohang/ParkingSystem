Ext.define("MyApp.system.store.ModuleFunctionStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.system.model.FunctionModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		extraParams : {
			moduleId : -1,
			getAll : true
		},
		url : SYSTEM_CONTEXTPATH + '/function/getModuleFunctionList',
		reader : {
			type : 'json',
			root : 'list'
		},
		actionMethods : {
			read : 'POST'
		}
	}
});
