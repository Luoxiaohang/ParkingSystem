Ext.define("MyApp.berth.store.ZoneStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.berth.model.ZoneModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		extraParams : {
			fromTime : Ext.Date.format(new Date(), "Y-m-d H:i:s"),
			toTime : Ext.Date.format(new Date(), "Y-m-d H:i:s"),
		},
		url : SYSTEM_CONTEXTPATH + '/Zone/getZoneList',
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
