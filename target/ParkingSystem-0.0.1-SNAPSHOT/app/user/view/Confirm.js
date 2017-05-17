Ext.define('MyApp.user.view.Confirm', {
	extend : 'Ext.window.Window',
	alias : 'widget.confirm',
	title : '验证安全信息',
	layout : 'anchor',
	autoShow : true,
	height : 200,
	width : 300,
	modal : true,

	SUCCESS : null,
	FAILURE : null,

	items : [ {
		xtype : 'textfield',
		padding : '20 0 0 20',
		anchor : "90% 57%",
		fieldLabel : '请输入密码',
		labelAlign : 'top',
		name : "password",
		allowBlank : false,
		inputType : 'password',
		listeners : {
			change : function(field, value) {
				if (value && value.length != 0) {
					Ext.getCmp("secure_submit").setDisabled(false);
				} else {
					Ext.getCmp("secure_submit").setDisabled(true);
				}
			}
		}
	} ],
	buttons : [ {
		text : '重置',
		handler : function() {
			this.up('window').down('textfield').reset();
		}
	}, {
		text : '提交',
		id : 'secure_submit',
		disabled : true,
		handler : function() {
			var win = this.up('window');
			Ext.Ajax.request({
				url : SYSTEM_CONTEXTPATH + '/User/confirmPassword',
				method : 'POST',
				params : {
					password : this.up('window').down('textfield').value
				},
				success : function(response) {
					var result = Ext.JSON.decode(response.responseText);
					if (result.success) {
						win.SUCCESS();
					} else {
						win.FAILURE("输入密码错误");
					}
				},
				failure : function() {
					win.FAILURE("请求失败！");
				}
			});
		}
	} ]
});
