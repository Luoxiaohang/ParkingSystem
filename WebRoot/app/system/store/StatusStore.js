Ext.define("MyApp.system.store.StatusStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.system.model.StatusModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : SYSTEM_CONTEXTPATH + '/Status/getStatusList',
		reader : {
			type : 'json',
			root : 'list'
		}
	}
});
