Ext.define("MyApp.system.store.RoleFunctionStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.system.model.FunctionModel',
	autoLoad : true,
	pageSize : 14,
	proxy : {
		type : 'ajax',
		extraParams : {
			roleId : -1
		},
		url : SYSTEM_CONTEXTPATH + '/Role/getRoleFunction',
		reader : {
			type : 'json',
			root : 'list',
			// 指定reader 的totalProperty。否则就只有一页
			totalProperty : 'totalCount'
		},
		actionMethods : {
			read : 'POST'
		}
	}
});
