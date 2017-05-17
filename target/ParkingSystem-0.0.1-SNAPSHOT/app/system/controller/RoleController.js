Ext.define('MyApp.system.controller.RoleController', {
	extend : 'Ext.app.Controller',
	views : [ 'MyApp.system.view.Role_show', 'MyApp.system.view.Role_add',
			'MyApp.system.view.Role_edit', 'MyApp.system.view.Role_detail',
			'MyApp.system.view.Role_Function_add' ],

	stores : [ 'MyApp.system.store.RoleStore',
			"MyApp.system.store.ClubRoleStore",
			'MyApp.system.store.RoleFunctionStore' ],

	refs : [ {
		ref : 'list',
		selector : '#role_panel'
	}, {
		ref : 'roleFunctionList',
		selector : '#role_function'
	} ],

	init : function() {
		this.control({
			'#btn_role_add' : {
				click : this.onRoleAddBtnClick
			},
			'#btn_role_delete' : {
				click : this.onRoleDelBtnClick
			},
			'#btn_role_edit' : {
				click : this.onRoleEditBtnClick
			},
			'#btn_role_detail' : {
				click : this.onRoleDetailBtnClick
			},
			'#btn_role_function_add' : {
				click : this.onRoleFunAddBtnClick
			},
			'#btn_role_function_delete' : {
				click : this.onRoleFunDelBtnClick
			},
			'#role_panel' : {
				itemclick : this.onRoleItemdblclick
			}

		});
	},

	onRoleItemdblclick : function(button) {
		var record = this.getList().getSelectionModel().getSelection()[0];
		var store = this.getRoleFunctionList().getStore();
		store.getProxy().extraParams.roleId = record.data.id;
		store.getProxy().extraParams.roleId = record.data.id;
		store.load();
	},
	onRoleFunAddBtnClick : function(button) {
		var record = this.getList().getSelectionModel().getSelection()[0];
		if (typeof record == 'undefined') {
			Ext.MessageBox.show({
				title : '提示',
				msg : '请选择角色!',
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNING
			});
		} else {
			var store = this.getRoleFunctionList().getStore();
			var view = Ext.widget('AddRoleFunction', {
				role : record,
				SUCCESS : function() {
					if (record.data.id == 1) {
						showSysMenu();
					}
					store.load();
					view.close();
				},
				FAIL : function() {
					view.close();
				}

			});
		}
	},
	onRoleFunDelBtnClick : function(button) {
		var roleRecord = this.getList().getSelectionModel().getSelection()[0];
		var record = this.getRoleFunctionList().getSelectionModel()
				.getSelection()[0];
		if (typeof roleRecord == 'undefined') {
			Ext.MessageBox.show({
				title : '提示',
				msg : '请选择角色!',
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNING
			});
		} else if (typeof record == 'undefined') {
			Ext.MessageBox.show({
				title : '提示',
				msg : '请选择要删除的功能!',
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNING
			});
		} else {
			var store = this.getRoleFunctionList().getStore();
			Ext.Msg.confirm('提示', "确定要删除当前角色的功能", function(btnId) {
				if (btnId == "yes") {
					Ext.Ajax.request({
						url : SYSTEM_CONTEXTPATH + "/Role/deleteRoleFunction",
						method : "Post",
						params : {
							roleId : roleRecord.data.id,
							functionId : record.data.id
						},
						success : function(response) {
							var result = Ext.JSON.decode(response.responseText)
							if (result.success) {
								Ext.Msg.alert('提示', "删除成功");
								if (roleRecord.data.id == 1) {
									showSysMenu();
								}
								store.load();
							}
						}
					});
				}
			});
		}
	},
	onRoleAddBtnClick : function(button) {
		var store = this.getList().getStore();
		var win = Ext.widget('AddRole', {
			SUCCESS : function(value) {
				Ext.Msg.alert("成功", value);
				win.close();
				store.load();
			},
			FAIL : function(value) {
				Ext.Msg.alert("失败", value);
				win.close();
			}
		});
	},
	onRoleDetailBtnClick : function(button) {
		var record = this.getList().getSelectionModel().getSelection()[0];
		if (typeof record == 'undefined') {
			Ext.MessageBox.show({
				title : '提示',
				msg : '请选择记录!',
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNING
			});
		} else {
			var view = Ext.widget('DetailRole', {
				FunctionRecord : record
			});
		}
	},
	onRoleDelBtnClick : function(button) {
		var store = this.getList().getStore();
		var record = this.getList().getSelectionModel().getSelection()[0];
		if (typeof record == 'undefined') {
			Ext.MessageBox.show({
				title : '提示',
				msg : '请选择记录!',
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNING
			});
		} else {
			Ext.MessageBox.confirm("提示", "是否要删除当前角色？", function(btnId) {
				if (btnId == "yes") {
					Ext.Ajax
							.request({
								url : SYSTEM_CONTEXTPATH + '/Role/deleteRole',
								method : 'POST',
								params : {
									roleId : record.data.id
								},
								success : function(response) {
									var result = Ext.JSON
											.decode(response.responseText);
									if (result.success) {
										Ext.Msg.alert("成功", '角色删除成功');
										store.load();
									}
								}
							});
				}
			});
		}
	},
	onRoleEditBtnClick : function(button) {
		var record = this.getList().getSelectionModel().getSelection()[0];
		if (typeof record == 'undefined') {
			Ext.MessageBox.show({
				title : '提示',
				msg : '请选择记录!',
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNING
			});
		} else {
			var store = this.getList().getStore();
			Ext.Msg.prompt('编辑角色', '请输入新的角色名称', function(btnId, text) {
				if (btnId == "ok" && text.length != 0) {
					Ext.Ajax
							.request({
								url : SYSTEM_CONTEXTPATH + '/Role/editRole',
								method : 'POST',
								params : {
									id : record.data.id,
									name : text
								},
								success : function(response) {
									var result = Ext.JSON
											.decode(response.responseText);
									if (result.success) {
										Ext.Msg.alert("成功", '角色更改成功');
										store.load();
									}
								}
							});

				}
			});
		}
	}
});