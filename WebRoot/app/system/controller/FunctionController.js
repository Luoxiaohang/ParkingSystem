Ext.define('MyApp.system.controller.FunctionController',
		{
			extend : 'Ext.app.Controller',
			views : [ 'MyApp.system.view.Function_show',
					'MyApp.system.view.Function_add',
					'MyApp.system.view.Function_edit',
					'MyApp.system.view.Function_detail' ],

			stores : [ 'MyApp.system.store.FunctionStore',
					'MyApp.system.store.ModuleStore',
					'MyApp.system.store.ModuleFunctionWithRootStore',
					'MyApp.system.store.ModuleFunctionStore',
					'MyApp.system.store.StatusStore' ],

			refs : [ {
				ref : 'moduleList',
				selector : '#module_panel'
			}, {
				ref : 'moduleFunctionList',
				selector : '#module_function_panel'
			} ],

			init : function() {
				this.control({
					'#btn_function_add' : {
						click : this.onFunctionAddBtnClick
					},
					'#btn_function_delete' : {
						click : this.onFunctionDelBtnClick
					},
					'#btn_function_edit' : {
						click : this.onFunctionEditBtnClick
					},
					'#btn_function_detail' : {
						click : this.onFunctionDetailBtnClick
					},
					'#module_panel' : {
						itemclick : this.onModuleItemdblclick
					},
					'#btn_modules_add' : {
						click : this.onModulesAddBtnClick
					},
					'#btn_modules_delete' : {
						click : this.onModulesDelBtnClick
					},
					'#btn_modules_edit' : {
						click : this.onModulesEditBtnClick
					}
				});
			},
			onModulesAddBtnClick : function() {
				var store = this.getModuleList().getStore();
				Ext.MessageBox.prompt("提示", "请输入新的模块名称", function(btnId, text) {
					if (btnId == "ok") {
						Ext.Ajax.request({
							url : SYSTEM_CONTEXTPATH + "/modules/addModule",
							method : "Post",
							params : {
								name : text
							},
							success : function(response) {
								var result = Ext.JSON
										.decode(response.responseText)
								if (result.success) {
									Ext.Msg.alert('提示', "添加成功");
									store.load();
								} else {
									Ext.Msg.alert('错误', result.msg);
									store.load();
								}
							}
						});
					}
				});
			},
			onModulesDelBtnClick : function() {
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
			onModulesEditBtnClick : function() {
				var store = this.getModuleList().getStore();
				var record = this.getModuleList().getSelectionModel()
						.getSelection()[0];
				if (typeof record == 'undefined') {
					Ext.MessageBox.show({
						title : '提示',
						msg : '请选择要修改的模块!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING
					});
				} else {
					Ext.MessageBox.prompt("提示", "请输入新的模块名称？", function(btnId,
							text) {
						if (btnId == "ok") {
							Ext.Ajax.request({
								url : SYSTEM_CONTEXTPATH
										+ "/modules/editModule",
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
			onFunctionAddBtnClick : function(button) {
				var record = this.getModuleList().getSelectionModel()
						.getSelection()[0];
				if (typeof record == 'undefined') {
					Ext.MessageBox.show({
						title : '提示',
						msg : '请先选择模块!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING
					});
				} else {
					var store = this.getModuleFunctionList().getStore();
					var view = Ext.widget('AddFunction', {
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

			onFunctionDetailBtnClick : function(button) {
				var record = this.getModuleFunctionList().getSelectionModel()
						.getSelection()[0];
				if (typeof record == 'undefined') {
					Ext.MessageBox.show({
						title : '提示',
						msg : '请选择记录!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING
					});
				} else {
					var view = Ext.widget('DetailFunction', {
						FunctionRecord : record
					});
				}
			},
			onFunctionDelBtnClick : function(button) {
				var record = this.getModuleFunctionList().getSelectionModel()
						.getSelection()[0];
				if (typeof record == 'undefined') {
					Ext.MessageBox.show({
						title : '提示',
						msg : '请选择记录!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING
					});
				} else {
					var store = this.getModuleFunctionList().getStore();
					Ext.Msg.confirm('提示', "确定要删除当前功能?", function(btnId) {
						if (btnId == "yes") {
							Ext.Ajax.request({
								url : SYSTEM_CONTEXTPATH
										+ "/function/delSysFunction",
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
			onFunctionEditBtnClick : function(button) {
				var record = this.getModuleFunctionList().getSelectionModel()
						.getSelection()[0];
				if (typeof record == 'undefined') {
					Ext.MessageBox.show({
						title : '提示',
						msg : '请选择记录!',
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.WARNING
					});
				} else {
					var store = this.getModuleFunctionList().getStore();
					var view = Ext.widget('EditFunction', {
						FunctionRecord : record,
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
			onModuleItemdblclick : function() {
				var record = this.getModuleList().getSelectionModel()
						.getSelection()[0];
				var ModuleFunPanel = this.getModuleFunctionList();
				ModuleFunPanel.setTitle(record.data.name + "功能列表");
				var store = ModuleFunPanel.getStore();
				store.getProxy().extraParams.moduleId = record.data.id;
				store.getProxy().extraParams.root = false;
				store.load();
			}
		});