Ext.define("MyApp.system.store.ModuleStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.system.model.ModulesModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : SYSTEM_CONTEXTPATH + '/modules/getModuleList',
		reader : {
			type : 'json',
			root : 'list'
		}
	}
});
