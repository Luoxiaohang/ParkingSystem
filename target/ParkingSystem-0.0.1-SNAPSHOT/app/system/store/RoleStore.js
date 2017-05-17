Ext.define("MyApp.system.store.RoleStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.system.model.RoleModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : SYSTEM_CONTEXTPATH + '/Role/getRoleList',
		reader : {
			type : 'json',
			root : 'list'
		}
	}
});
