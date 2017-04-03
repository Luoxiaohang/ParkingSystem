Ext.define("MyApp.berth.store.BerthStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.berth.model.BerthModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		extraParams : {
			zoneId : -1,
			fromTime : Ext.Date.format(new Date(), "Y-m-d H:i:s"),
			toTime : Ext.Date.format(new Date(), "Y-m-d H:i:s")
		},
		url : SYSTEM_CONTEXTPATH + '/Berth/getBerth',
		reader : {
			type : 'json',
			root : 'list'
		},
		actionMethods : {
			read : 'POST'
		}
	},
	sorters : [ {
		property : 'id',
		direction : 'ASC'
	} ]
});
