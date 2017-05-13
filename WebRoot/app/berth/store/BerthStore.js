Ext.define("MyApp.berth.store.BerthStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.berth.model.BerthModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		extraParams : {
			zoneId : -1,
			fromTime : null,
			toTime : null,
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
	} ],
	listeners : {
		beforeload : function(store, operation, eOpts) {
			var fromTime = null;
			var toTime = null;
			if (typeof Ext.getCmp("berth_field_query_from_time") == 'undefined') {
				fromTime = Ext.Date.format(new Date(), "Y-m-d H:i:s");
				toTime = Ext.Date.format(new Date(), "Y-m-d H:i:s");
			} else {
				fromTime = Ext.getCmp("berth_field_query_from_time").getRawValue();
				toTime = Ext.getCmp("berth_field_query_to_time").getRawValue();
			}
			store.proxy.extraParams.fromTime = fromTime;
			store.proxy.extraParams.toTime = toTime;
		}
	}
});
