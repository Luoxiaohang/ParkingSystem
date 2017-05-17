Ext.define("MyApp.system.store.ClubRoleStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.system.model.RoleModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : SYSTEM_CONTEXTPATH + '/Role/getClubRoleList',
		reader : {
			type : 'json',
			root : 'list'
		}
	}
});
