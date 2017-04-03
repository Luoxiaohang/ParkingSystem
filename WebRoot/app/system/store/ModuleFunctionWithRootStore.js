Ext.define("MyApp.system.store.ModuleFunctionWithRootStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.system.model.FunctionModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		extraParams : {
			moduleId : -1,
			root : true,
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
