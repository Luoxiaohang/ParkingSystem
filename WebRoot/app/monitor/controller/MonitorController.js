Ext.define('MyApp.monitor.controller.MonitorController',
		{
			extend : 'Ext.app.Controller',
			views : [ 'MyApp.monitor.view.monitor_manage',
					'MyApp.monitor.view.monitor_add',
					'MyApp.monitor.view.monitor_edit',
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
				var record = this.getZonePanel().getSelectionModel()
						.getSelection()[0];
				if (typeof record == 'undefined') {
					Ext.MessageBox.show({
						title : '提示',
						msg : '请先选择模块!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING
					});
				} else {
					var store = this.getMonitorPanel().getStore();
					console.log(record);
					var view = Ext.widget('AddMonitor', {
						zone : record.data,
						SUCCESS : function(msg) {
							Ext.Msg.alert('提示', msg);
							store.load();
							view.close();
						},
						FAIL : function(msg) {
							Ext.Msg.alert('警告', msg);
							view.close();
						}
					});
				}
			},
			onMonitorDelBtnClick : function() {
				var record = this.getMonitorPanel().getSelectionModel()
						.getSelection()[0];
				if (typeof record == 'undefined') {
					Ext.MessageBox.show({
						title : '提示',
						msg : '请选择监控信息!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING
					});
				} else {
					var store = this.getMonitorPanel().getStore();
					Ext.Msg.confirm('提示', "确定要删除当前监控信息?", function(btnId) {
						if (btnId == "yes") {
							Ext.Ajax.request({
								url : SYSTEM_CONTEXTPATH
										+ "/Monitor/delMonitor",
								method : "Post",
								params : {
									id : record.data.id
								},
								success : function(response) {
									var result = Ext.JSON
											.decode(response.responseText)
									if (result.success) {
										Ext.Msg.alert('提示', "删除成功");
										store.load();
									} else {
										Ext.Msg.alert('错误', result.msg);
										store.load();
									}
								}
							});
						}
					});
				}
			},
			onMonitorEditBtnClick : function() {
				var record = this.getMonitorPanel().getSelectionModel()
						.getSelection()[0];
				if (typeof record == 'undefined') {
					Ext.MessageBox.show({
						title : '提示',
						msg : '请先选择监控信息!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING
					});
				} else {
					var store = this.getMonitorPanel().getStore();
					console.log(record);
					var view = Ext.widget('EditMonitor', {
						monitor : record.data,
						SUCCESS : function(msg) {
							Ext.Msg.alert('提示', msg);
							store.load();
							view.close();
						},
						FAIL : function(msg) {
							Ext.Msg.alert('警告', msg);
							view.close();
						}
					});
				}
			},
			onZoneItemclick : function() {
				var record = this.getZonePanel().getSelectionModel()
						.getSelection()[0];
				var monitorPanel = this.getMonitorPanel();
				monitorPanel.setTitle(record.data.name + "区监控");
				var store = monitorPanel.getStore();
				store.getProxy().extraParams.zoneId = record.data.id;
				store.load();
			},
		});