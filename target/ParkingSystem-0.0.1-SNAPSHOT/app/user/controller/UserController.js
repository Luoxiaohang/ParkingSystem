Ext
		.define(
				'MyApp.user.controller.UserController',
				{
					extend : 'Ext.app.Controller',
					views : [ 'MyApp.user.view.Info_show',
							'MyApp.user.view.Info_edit',
							'MyApp.user.view.Secure_show',
							'MyApp.user.view.Confirm',
							'MyApp.user.view.Secure_edit',
							'MyApp.user.view.Sys_User_list',
							'MyApp.user.view.InputWidget',
							'MyApp.user.view.Berth_booked_show' ],

					stores : [ 'MyApp.user.store.UserInfoStore',
							'MyApp.user.store.SysUserStore',
							"MyApp.user.store.ServiceStore" ],
					refs : [ {
						ref : 'secureShow',
						selector : 'SetSecure'
					}, {
						ref : 'sysUserListPanel',
						selector : 'SysUserList'
					} ],

					init : function() {
						this.control({
							'#btn_phone_edit' : {
								click : this.onPhoneEditBtnClick
							},
							'#btn_email_edit' : {
								click : this.onEmailEditBtnClick
							},
							'#btn_password_edit' : {
								click : this.onPasswordEditBtnClick
							},
							'#btn_sys_user_list_set_sys_mgr' : {
								click : this.onSetSysMgrBtnClick
							},
							'#btn_sys_user_list_set_sys_com' : {
								click : this.onSetSysComBtnClick
							},
							'SysUserList' : {
								itemclick : this.onSysUserListItemClick
							}
						});
					},

					onSysUserListItemClick : function() {
						var record = this.getSysUserListPanel()
								.getSelectionModel().getSelection()[0];
						if (record.data.roleName == "系统管理员") {
							Ext.getCmp("btn_sys_user_list_set_sys_mgr")
									.setDisabled(true);
							Ext.getCmp("btn_sys_user_list_set_sys_com")
									.setDisabled(false);
						} else {
							Ext.getCmp("btn_sys_user_list_set_sys_mgr")
									.setDisabled(false);
							Ext.getCmp("btn_sys_user_list_set_sys_com")
									.setDisabled(true);
						}
					},

					onSetSysMgrBtnClick : function(button) {
						var controller = this;
						var record = this.getSysUserListPanel()
								.getSelectionModel().getSelection()[0];
						if (typeof record == 'undefined') {
							controller.noCheckTip();
						} else {
							var store = this.getSysUserListPanel().getStore();
							Ext.Msg.confirm("提示", "您将设置该用户为系统管理员!", function(
									btnId) {
								if (btnId == "yes") {
									controller.updateUserSysRole(
											record.data.id, 1);
									Ext.getCmp("btn_sys_user_list_set_sys_mgr")
											.setDisabled(true);
									Ext.getCmp("btn_sys_user_list_set_sys_com")
											.setDisabled(false);
									store.load();
								}
							})
						}
					},
					onSetSysComBtnClick : function(button) {
						var controller = this;
						var record = this.getSysUserListPanel()
								.getSelectionModel().getSelection()[0];
						if (typeof record == 'undefined') {
							controller.noCheckTip();
						} else {
							var store = this.getSysUserListPanel().getStore();
							Ext.Msg.confirm("提示", "您将取消该用户管理员身份！", function(
									btnId) {
								if (btnId == "yes") {
									controller.updateUserSysRole(
											record.data.id, 4);
									Ext.getCmp("btn_sys_user_list_set_sys_mgr")
											.setDisabled(false);
									Ext.getCmp("btn_sys_user_list_set_sys_com")
											.setDisabled(true);
									store.load();
								}
							})
						}
					},

					onPhoneEditBtnClick : function(button) {
						var display = this.getSecureShow().down("panel").items.items[2].items.items[0];
						var win = Ext.widget("confirm", {
							FAILURE : function(msg) {
								Ext.Msg.alert("错误", msg);
								win.close();
							},
							SUCCESS : function() {
								var phoneWin = Ext.widget("InputWidget", {
									title : "重新绑定手机号",
									tip : "请输入手机号",
									parameterName : 'PHONE',
									regex : /^1\d{10}$/,
									regexText : '输入手机号码必须为11位',
									url : SYSTEM_CONTEXTPATH
											+ '/User/updateSecure',
									SUCCESS : function(value) {
										display.setValue(value);
										Ext.Msg.alert("成功", "手机绑定成功");
										phoneWin.close();
									},
									FAILURE : function(value) {
										Ext.Msg.alert("失败", "手机绑定失败");
										phoneWin.close();
									}
								});
								win.close();
							}
						});
					},
					onEmailEditBtnClick : function(button) {
						var display = this.getSecureShow().down("panel").items.items[1].items.items[0];
						var win = Ext.widget("confirm", {
							FAILURE : function(msg) {
								Ext.Msg.alert("错误", msg);
								win.close();
							},
							SUCCESS : function() {
								var phoneWin = Ext.widget("InputWidget", {
									title : "重新绑定邮箱",
									tip : "请输入新的邮箱",
									parameterName : 'EMAIL',
									regex : /^\w+@\w+.\w+$/,
									regexText : '输入邮箱格式不正确,例如***@**.**',
									url : SYSTEM_CONTEXTPATH
											+ '/User/updateSecure',
									SUCCESS : function(value) {
										display.setValue(value);
										Ext.Msg.alert("成功", "邮箱绑定成功");
										phoneWin.close();
									},
									FAILURE : function() {
										Ext.Msg.alert("失败", "邮箱绑定失败");
										phoneWin.close();
									}
								});
								win.close();
							}
						});
					},
					onPasswordEditBtnClick : function(button) {
						var display = this.getSecureShow().down("panel").items.items[3].items.items[0];
						var win = Ext.widget("confirm", {
							FAILURE : function(msg) {
								Ext.Msg.alert("错误", msg);
								win.close();
							},
							SUCCESS : function() {
								var phoneWin = Ext.widget("InputWidget", {
									title : "重设密码",
									tip : "请输入新的密码",
									parameterName : 'PASSWORD',
									regex : /^1\w+$/,
									regexText : '密码非空',
									url : SYSTEM_CONTEXTPATH
											+ '/User/updateSecure',
									SUCCESS : function(value) {
										display.setValue(value);
										Ext.Msg.alert("成功", "密码设置成功");
										phoneWin.close();
									},
									FAILURE : function() {
										Ext.Msg.alert("失败", "密码设置失败");
										phoneWin.close();
									}
								});
								win.close();
							}
						});
					},

					noCheckTip : function() {
						Ext.MessageBox.show({
							title : '提示',
							msg : '请选择用户!',
							buttons : Ext.MessageBox.OK,
							icon : Ext.MessageBox.WARNING
						});
					},

					updateUserSysRole : function(userId, roleId) {
						Ext.Ajax.request({
							url : SYSTEM_CONTEXTPATH
									+ "/Role/updateUserSysRole",
							method : "Post",
							async : false,// 指定为同步方式
							params : {
								userId : userId,
								roleId : roleId
							},
							success : function(response) {
								var result = Ext.JSON
										.decode(response.responseText)
								if (result.success) {
									Ext.Msg.alert('提示', "设置成功");
									return true;
								} else {
									Ext.Msg.alert('错误', result.msg);
									return false;
								}
							}
						});
					}
				});