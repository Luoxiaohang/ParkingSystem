Ext.define("MyApp.monitor.store.MonitorStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.system.model.StatusModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		extraParams : {
			zoneId : -1
		},
		url : SYSTEM_CONTEXTPATH + '/Monitor/getMonitorList',
		reader : {
			type : 'json',
			root : 'list'
		}
	}
});
