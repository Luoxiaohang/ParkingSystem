Ext.define('MyApp.berth.controller.BerthController', {
	extend : 'Ext.app.Controller',
	views : [ 'MyApp.berth.view.berth_show', 'MyApp.berth.view.berth_add',
			'MyApp.berth.view.zone_add', 'MyApp.berth.view.zone_detail',
			'MyApp.berth.view.zone_edit', 'MyApp.berth.view.berth_edit',
			'MyApp.berth.view.berth_book' ],

	stores : [ 'MyApp.berth.store.BerthStore', 'MyApp.berth.store.ZoneStore',
			"MyApp.berth.store.BerthBookedStore" ],

	refs : [ {
		ref : 'zoneList',
		selector : '#zone_panel'
	}, {
		ref : 'berthList',
		selector : '#berth_panel'
	} ],

	init : function() {
		this.control({
			'#btn_query' : {
				click : this.onQueryBtnClick
			},
			'#berth_panel' : {
				itemdblclick : this.onBerthBookBtnClick
			},
			'#btn_berth_add' : {
				click : this.onBerthAddBtnClick
			},
			'#btn_berth_delete' : {
				click : this.onBerthDelBtnClick
			},
			'#btn_berth_edit' : {
				click : this.onBerthEditBtnClick
			},
			'#zone_panel' : {
				itemclick : this.onZoneItemclick,
				itemdblclick : this.onZoneDetailBtnClick
			},
			'#btn_zone_add' : {
				click : this.onZoneAddBtnClick
			},
			'#btn_zone_del' : {
				click : this.onZoneDelBtnClick
			},
			'#btn_zone_edit' : {
				click : this.onZoneEditBtnClick
			}
		});
	},
	onZoneAddBtnClick : function() {
		var store = this.getZoneList().getStore();
		var view = Ext.widget('AddZone', {
			SUCCESS : function() {
				store.reload();
				view.close();
			},
			FAIL : function() {
				view.close();
			}
		});
	},
	onZoneDelBtnClick : function() {
		var record = this.getZoneList().getSelectionModel().getSelection()[0];
		if (typeof record == 'undefined') {
			Ext.MessageBox.show({
				title : '提示',
				msg : '请选择要删除的区域!',
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNING
			});
		} else {
			var store = this.getZoneList().getStore();
			Ext.MessageBox.confirm("提示", "确定要删除当前模块？", function(btnId, text) {
				if (btnId == "yes") {
					Ext.Ajax.request({
						url : SYSTEM_CONTEXTPATH + "/Zone/delZone",
						method : "Post",
						params : {
							id : record.data.id
						},
						success : function(response) {
							var result = Ext.JSON.decode(response.responseText)
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
	onZoneEditBtnClick : function() {
		var store = this.getZoneList().getStore();
		var record = this.getZoneList().getSelectionModel().getSelection()[0];
		if (typeof record == 'undefined') {
			Ext.MessageBox.show({
				title : '提示',
				msg : '请选择要修改的模块!',
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNING
			});
		} else {
			var view = Ext.widget('EditZone', {
				record : record,
				SUCCESS : function() {
					store.reload();
					view.close();
				},
				FAIL : function() {
					view.close();
				}
			});
		}
	},
	onZoneDetailBtnClick : function() {
		var store = this.getZoneList().getStore();
		var record = this.getZoneList().getSelectionModel().getSelection()[0];
		if (typeof record == 'undefined') {
			Ext.MessageBox.show({
				title : '提示',
				msg : '请选择要查看的区域!',
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNING
			});
		} else {
			var view = Ext.widget('DetailZone', {
				record : record,
				SUCCESS : function() {
					store.reload();
					view.close();
				},
				FAIL : function() {
					view.close();
				}
			});
		}
	},
	onBerthAddBtnClick : function(button) {
		var record = this.getZoneList().getSelectionModel().getSelection()[0];
		if (typeof record == 'undefined') {
			Ext.MessageBox.show({
				title : '提示',
				msg : '请先所属区域!',
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNING
			});
		} else {
			var store = this.getBerthList().getStore();
			store.proxy.extraParams.zoneId = record.data.id;
			var view = Ext.widget('AddBerth', {
				record : record,
				SUCCESS : function() {
					store.load();
					view.close();
				},
				FAIL : function() {
					view.close();
				}
			});
		}
	},
	onBerthDelBtnClick : function(button) {
		var record = this.getBerthList().getSelectionModel().getSelection()[0];
		if (typeof record == 'undefined') {
			Ext.MessageBox.show({
				title : '提示',
				msg : '请选择记录!',
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNING
			});
		} else {
			var store = this.getBerthList().getStore();
			Ext.Msg.confirm('提示', "确定要删除当前时间段？", function(btnId) {
				if (btnId == "yes") {
					Ext.Ajax.request({
						url : SYSTEM_CONTEXTPATH + "/Berth/delBerth",
						method : "Post",
						params : {
							id : record.data.id
						},
						success : function(response) {
							var result = Ext.JSON.decode(response.responseText)
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
	onBerthBookBtnClick : function(button) {
		var record = this.getBerthList().getSelectionModel().getSelection()[0];
		// 如果车位处于未预订状态
		console.log(record.data);
		if (record.data.statusId == 5) {
			var zoneRecord = this.getZoneList().getSelectionModel()
					.getSelection()[0];
			var zoneStore = this.getZoneList().getStore();
			var berthStore = this.getBerthList().getStore();
			view = Ext.widget('BookBerth', {
				zoneRecord : zoneRecord,
				berthRecord : record,
				SUCCESS : function(result) {
					view.close();
					if (result.msg != '0.0') {
						var tip = "继续支付" + result.msg + "元以完成预约？";
						console.log(result.msg);
						Ext.Msg.confirm('提示', tip, function(btnId) {
							if (btnId == "yes") {
								success = bookBerth(result.list[0]);
							}
						});
					} else {
						success = bookBerth(result.list[0]);
					}
				},
				FAIL : function() {
					view.close();
				}
			});
		} else {
			Ext.Msg.alert("抱歉", "当前车位不能被预订");
		}
	},
	onBerthEditBtnClick : function(button) {
		var record = this.getBerthList().getSelectionModel().getSelection()[0];
		if (typeof record == 'undefined') {
			Ext.MessageBox.show({
				title : '提示',
				msg : '请选择记录!',
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNING
			});
		} else {
			var store = this.getBerthList().getStore();
			var zoneRecord = this.getZoneList().getSelectionModel()
					.getSelection()[0];
			view = Ext.widget('EditBerth', {
				zoneRecord : zoneRecord,
				berthRecord : record,
				SUCCESS : function() {
					store.load();
					view.close();
				},
				FAIL : function() {
					view.close();
				}
			});
		}
	},
	preFromTime : Ext.Date.format(new Date(), "Y-m-d H:i:s"),
	preToTime : Ext.Date.format(new Date(), "Y-m-d H:i:s"),

	onZoneItemclick : function() {
		var record = this.getZoneList().getSelectionModel().getSelection()[0];
		var BerthPanel = this.getBerthList();
		BerthPanel.setTitle(record.data.name + "区车位");
		var store = BerthPanel.getStore();
		store.getProxy().extraParams.zoneId = record.data.id;
		store.getProxy().extraParams.fromTime = this.preFromTime;
		store.getProxy().extraParams.toTime = this.preToTime;
		store.load();
	},
	onQueryBtnClick : function() {
		var fromTime = Ext.getCmp("field_query_from_time").getRawValue();
		var toTime = Ext.getCmp("field_query_to_time").getRawValue();
		this.preFromTime = fromTime;
		this.preToTime = toTime;
		var store = this.getZoneList().getStore();
		store.getProxy().extraParams.fromTime = fromTime;
		store.getProxy().extraParams.toTime = toTime;
		store.load();
	}
});
function bookBerth(data) {
	var success = false;
	$.ajax({
		type : "POST",
		async : false,
		url : SYSTEM_CONTEXTPATH + "/Berth/bookBerth",
		data : data,
		dataType : "text",
		success : function(data, textStatus) {
			var result = Ext.JSON.decode(data);
			if (result.success) {
				success = true;
			} else {
				success = result.msg;
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			Ext.Msg.alert('错误', "请求失败");
		}
	});
	return success;
}