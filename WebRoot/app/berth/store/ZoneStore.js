Ext.define("MyApp.berth.store.ZoneStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.berth.model.ZoneModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		extraParams : {
			fromTime : null,
			toTime : null,
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
	} ],
	listeners : {
		beforeload : function(store, operation, eOpts) {
			var fromTime = null;
			var toTime = null;
			if (typeof Ext.getCmp("field_query_from_time") == 'undefined') {
				fromTime = Ext.Date.format(new Date(), "Y-m-d H:i:s");
				toTime = Ext.Date.format(new Date(), "Y-m-d H:i:s");
			} else {
				fromTime = Ext.getCmp("field_query_from_time").getRawValue();
				toTime = Ext.getCmp("field_query_to_time").getRawValue();
			}
			store.proxy.extraParams.fromTime = fromTime;
			store.proxy.extraParams.toTime = toTime;
		}
	}
});
