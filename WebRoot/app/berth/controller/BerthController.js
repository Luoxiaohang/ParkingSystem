Ext.define('MyApp.berth.controller.BerthController',
		{
			extend : 'Ext.app.Controller',
			views : [ 'MyApp.berth.view.berth_show',
					'MyApp.berth.view.berth_add', 'MyApp.berth.view.zone_add',
					'MyApp.berth.view.charge_detail',
					'MyApp.berth.view.zone_edit',
					'MyApp.berth.view.berth_edit',
					'MyApp.berth.view.berth_book',
					'MyApp.berth.view.berth_manage' ],

			stores : [ 'MyApp.berth.store.BerthStore',
					'MyApp.berth.store.ZoneStore',
					"MyApp.berth.store.BerthBookedStore",
					"MyApp.berth.store.ValidBookedRecordsStore" ],

			refs : [ {
				ref : 'zoneList',
				selector : '#manage_zone_panel'
			}, {
				ref : 'berthList',
				selector : '#manage_berth_panel'
			}, {
				ref : 'berthPanel',
				selector : 'ShowBerthPanel'
			} ],

			init : function() {
				this.control({
					'#berth_btn_query' : {
						click : this.onQueryBtnClick
					},
					'ShowBerthPanel' : {
						itemdblclick : this.showChargeDetail
					},
					'#berth_btn_book' : {
						click : this.bookBerth
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
					'#manage_zone_panel' : {
						itemclick : this.onZoneItemclick,
						itemdblclick : this.showChargeDetail
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
				var record = this.getZoneList().getSelectionModel()
						.getSelection()[0];
				if (typeof record == 'undefined') {
					Ext.MessageBox.show({
						title : '提示',
						msg : '请选择要删除的区域!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING
					});
				} else {
					var store = this.getZoneList().getStore();
					var view = Ext.MessageBox.confirm("提示", "确定要删除当前区域？", function(btnId,
							text) {
						if (btnId == "yes") {
							Ext.Ajax.request({
								url : SYSTEM_CONTEXTPATH + "/Zone/delZone",
								method : "Post",
								params : {
									id : record.data.id
								},
								success : function(response) {
									var result = Ext.JSON
											.decode(response.responseText)
									if (result.success) {
										view.close();
										Ext.Msg.alert('提示', "删除成功");
										store.load();
										
									} else {
										view.close();
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
				var record = this.getZoneList().getSelectionModel()
						.getSelection()[0];
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
							store.load();
							view.close();
						},
						FAIL : function() {
							store.load();
							view.close();
						}
					});
				}
			},
			showChargeDetail : function(view, record) {
				var view = Ext.widget('ChargeDetail', {
					record : record,
					SUCCESS : function() {
						view.close();
					},
					FAIL : function() {
						view.close();
					}
				});
			},
			onBerthAddBtnClick : function(button) {
				var record = this.getZoneList().getSelectionModel()
						.getSelection()[0];
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
				var record = this.getBerthList().getSelectionModel()
						.getSelection()[0];
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
			bookBerth : function(button) {
				var record = this.getBerthPanel().getSelectionModel()
						.getSelection()[0];
				if (typeof record == 'undefined') {
					Ext.MessageBox.show({
						title : '提示',
						msg : '请选择记录!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING
					});
				} else {
					// 如果车位处于未预订状态
					if (record.data.statusId == 5) {
						view = Ext.widget('BookBerth', {
							berthRecord : record,
							SUCCESS : function(result) {
								view.close();
							},
							FAIL : function() {
								Ext.Msg.alert("抱歉", "当前车牌在当前时间已经预订的车位");
								view.close();
							}
						});
					} else {
						Ext.Msg.alert("抱歉", "当前车位不能被预订");
					}
				}
			},
			onBerthEditBtnClick : function(button) {
				var record = this.getBerthList().getSelectionModel()
						.getSelection()[0];
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
			onZoneItemclick : function() {
				var record = this.getZoneList().getSelectionModel()
						.getSelection()[0];
				var BerthPanel = this.getBerthList();
				BerthPanel.setTitle(record.data.name + "区车位");
				var store = BerthPanel.getStore();
				store.getProxy().extraParams.zoneId = record.data.id;
				store.load();
			},
			onQueryBtnClick : function() {
				var store=this.getBerthPanel().getStore();
				store.getProxy().extraParams.zoneId = -1;
				this.getBerthPanel().getStore().load();
			}
		});