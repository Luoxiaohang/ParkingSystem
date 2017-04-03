Ext.define('MyApp.user.view.Secure_edit', {
	extend : 'Ext.window.Window',
	alias : 'widget.EditSecure',
	id : 'editSecure',
	requires : [ 'Ext.form.*' ],

	title : '修改安全信息',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	width : 400,
	height : 240,

	defaults : {
		margins : '5 5 5 5'
	},

	user : null,

	SUCCESS : null,
	FAIL : null,

	initComponent : function() {
		this.items = [ {
			xtype : 'form',
			layout : "anchor",
			anchor : "100% 100%",
			bodyPadding : '5 5 5 5',
			defaultType : 'textfield',
			url : SYSTEM_CONTEXTPATH + '/User/updateSecure',
			fieldDefaults : {
				labelAlign : 'left',
				anchor : "100%",
				labelWidth : 40,
			},

			items : [ {
				xtype : 'textfield',
				name : 'id',
				hidden : true,
				value : this.user.id
			}, {
				name : 'nickName',
				fieldLabel : '昵称',
				readOnly : true,
				value : this.user.nickName
			}, {
				xtype : 'textfield',
				name : 'Email',
				fieldLabel : '邮箱',
				regex : /^\w+@\w+.\w+$/,
				regexText : '输入邮箱不合法',
				value : this.user.Email
			}, {
				xtype : 'textfield',
				name : 'phone',
				regex : /^1\d{10}$/,
				regexText : '输入手机号码必须为11位',
				fieldLabel : '电话',
				value : this.user.phone
			} ],
			buttons : [ {
				text : '提交',
				disabled : true,
				formBind : true,
				handler : function() {
					var form = this.up('form').getForm();
					if (form.isValid()) {
						var cmp = Ext.getCmp('editSecure');
						form.submit({
							success : function(form, action) {
								if (action.result.success) {
									cmp.SUCCESS("修改成功");
								} else {
									cmp.FAIL("修改失败");
								}
							},
							failure : function(form, action) {
								cmp.FAIL("请求失败");
							}
						});
					}
				}
			}, {
				text : '重置',
				handler : function() {
					this.up('form').getForm().reset();
				}
			}, {
				text : '取消',
				handler : function() {
					this.up("window").close();
				}
			} ]
		} ];
		this.callParent(arguments);
	}
});