Ext.define('MyApp.monitor.controller.MonitorController', {
	extend : 'Ext.app.Controller',
	views : [ 'MyApp.monitor.view.monitor_manage',
			'MyApp.monitor.view.monitor_show' ],
	stores : [ "MyApp.monitor.store.MonitorStore" ],
	refs : [ {
		ref : 'zonePanel',
		selector : '#monitor_manage_zone_panel'
	}, {
		ref : 'monitorPanel',
		selector : '#monitor_manage_monitor_panel'
	} ],

	init : function() {
		this.control({
			'#btn_monitor_add' : {
				click : this.onMonitorAddBtnClick
			},
			'#btn_monitor_delete' : {
				click : this.onMonitorDelBtnClick
			},
			'#btn_monitor_edit' : {
				click : this.onMonitorEditBtnClick
			},
			'#monitor_manage_zone_panel' : {
				itemclick : this.onZoneItemclick,
			}
		});
	},
	onMonitorAddBtnClick : function() {
	},
	onMonitorDelBtnClick : function() {

	},
	onMonitorEditBtnClick : function() {
	},
	onZoneItemclick : function() {
		var record = this.getZonePanel().getSelectionModel().getSelection()[0];
		var monitorPanel = this.getMonitorPanel();
		monitorPanel.setTitle(record.data.name + "区监控");
		var store = monitorPanel.getStore();
		store.getProxy().extraParams.zoneId = record.data.id;
		store.load();
	},
});