Ext.define('MyApp.charge.controller.ChargeStandardController',
		{
			extend : 'Ext.app.Controller',
			views : [ 'MyApp.charge.view.charge_standard_show',
					'MyApp.charge.view.Charge_Customize_add',
					'MyApp.charge.view.Charge_Standard_add',
					'MyApp.charge.view.Charge_Customize_edit' ],

			stores : [ 'MyApp.charge.store.ChargeStandardStore',
					'MyApp.charge.store.ChargeCustomizeStore',
					'MyApp.charge.store.ChargeModeStore' ],

			refs : [ {
				ref : 'standardList',
				selector : '#charge_standard_panel'
			}, {
				ref : 'customizeList',
				selector : '#charge_customize_panel'
			} ],

			init : function() {
				this.control({
					'#btn_charge_customize_add' : {
						click : this.onCustomizeAddBtnClick
					},
					'#btn_charge_customize_delete' : {
						click : this.onCustomizeDelBtnClick
					},
					'#btn_charge_customize_edit' : {
						click : this.onCustomizeEditBtnClick
					},
					'#charge_standard_panel' : {
						itemclick : this.onStandardItemclick
					},
					'#btn_charge_standard_add' : {
						click : this.onStandardAddBtnClick
					},
					'#btn_charge_standard_delete' : {
						click : this.onStandardDelBtnClick
					},
					'#btn_charge_standard_edit' : {
						click : this.onStandardEditBtnClick
					}
				});
			},
			onStandardAddBtnClick : function() {
				var store = this.getStandardList().getStore();
				var view = Ext.widget('AddChargeStandard', {
					SUCCESS : function() {
						store.load();
						view.close();
						Ext.Msg.alert('提示', "添加成功");
					},
					FAIL : function() {
						view.close();
						Ext.Msg.alert('错误', result.msg);
					}
				});
			},
			onStandardDelBtnClick : function() {
				var store = this.getModuleList().getStore();
				var record = this.getModuleList().getSelectionModel()
						.getSelection()[0];
				if (typeof record == 'undefined') {
					Ext.MessageBox.show({
						title : '提示',
						msg : '请选择要删除的模块!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING
					});
				} else {
					Ext.MessageBox.confirm("提示", "确定要删除当前模块？", function(btnId,
							text) {
						if (btnId == "yes") {
							Ext.Ajax.request({
								url : SYSTEM_CONTEXTPATH
										+ "/modules/deleteModule",
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
			onStandardEditBtnClick : function() {
				var store = this.getStandardList().getStore();
				var record = this.getStandardList().getSelectionModel()
						.getSelection()[0];
				if (typeof record == 'undefined') {
					Ext.MessageBox.show({
						title : '提示',
						msg : '请选择要修改的收费标准!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING
					});
				} else {
					Ext.MessageBox.prompt("提示", "请输入新的标准名称", function(btnId,
							text) {
						if (btnId == "ok") {
							Ext.Ajax.request({
								url : SYSTEM_CONTEXTPATH
										+ "/ChargeStandard/editStandard",
								method : "Post",
								params : {
									id : record.data.id,
									name : text
								},
								success : function(response) {
									var result = Ext.JSON
											.decode(response.responseText)
									if (result.success) {
										Ext.Msg.alert('提示', "修改成功");
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
			onCustomizeAddBtnClick : function(button) {
				var record = this.getStandardList().getSelectionModel()
						.getSelection()[0];
				if (typeof record == 'undefined') {
					Ext.MessageBox.show({
						title : '提示',
						msg : '请先选择收费标准!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING
					});
				} else {
					var store = this.getCustomizeList().getStore();
					store.proxy.extraParams.standardId = record.data.id;
					var view = Ext.widget('AddChargeCustomize', {
						record : record,
						SUCCESS : function() {
							store.load();
							view.close();
						},
						FAIL : function() {
							Ext.Msg.alert("错误","添加时间段重叠!");
							view.close();
						}
					});
				}
			},
			onCustomizeDelBtnClick : function(button) {
				var record = this.getCustomizeList().getSelectionModel()
						.getSelection()[0];
				if (typeof record == 'undefined') {
					Ext.MessageBox.show({
						title : '提示',
						msg : '请选择记录!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING
					});
				} else {
					var store = this.getCustomizeList().getStore();
					Ext.Msg.confirm('提示', "确定要删除当前时间段？", function(btnId) {
						if (btnId == "yes") {
							Ext.Ajax.request({
								url : SYSTEM_CONTEXTPATH
										+ "/ChargeCustomize/delCustomize",
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
			onCustomizeEditBtnClick : function(button) {
				var record = this.getCustomizeList().getSelectionModel()
						.getSelection()[0];
				if (typeof record == 'undefined') {
					Ext.MessageBox.show({
						title : '提示',
						msg : '请选择记录!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING
					});
				} else {
					var store = this.getCustomizeList().getStore();
					var standardRecord = this.getStandardList()
							.getSelectionModel().getSelection()[0];
					var view = Ext.widget('EditChargeCustomize', {
						standardRecord : standardRecord,
						customizeRecord : record,
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
			onStandardItemclick : function() {
				var record = this.getStandardList().getSelectionModel()
						.getSelection()[0];
				var CustomizePanel = this.getCustomizeList();
				CustomizePanel.setTitle(record.data.name + "收费时间段");
				var store = CustomizePanel.getStore();
				store.getProxy().extraParams.standardId = record.data.id;
				store.load();
			}
		});