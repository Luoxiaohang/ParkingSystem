Ext.define('MyApp.user.view.Info_edit', {
	extend : 'Ext.window.Window',
	alias : 'widget.EditUserInfo',
	title : '修改基本信息',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	width : 600,
	height : 400,
	defaults : {
		margin : '5 5 5 5'
	},
	users : null,
	initComponent : function() {
		this.items = [ {
			xtype : 'form',
			url : SYSTEM_CONTEXTPATH + '/User/updateUserInfo',
			anchor : '100% 100%',
			border : false,
			defaults : {
				xtype : 'textfield',
				margin : '10 0 20 0',
				labelAlign : "right",
				labelWidth : 60
			},
			layout : 'vbox',
			items : [ {
				name : 'id',
				hidden : true,
				value : this.users.id
			}, {
				fieldLabel : '昵称',
				name : 'nickName',
				allowBlank : false,
				value : this.users.nickName
			}, {
				fieldLabel : '性别',
				readOnly : true,
				allowBlank : false,
				value : this.users.gender == 1 ? "男" : "女"
			}, {
				xtype : 'combobox',
				fieldLabel : '学校',
				name : 'schoolId',
				store : "MyApp.school.store.SchoolStore",
				displayField : 'name',
				readyOnly : true,
				allowBlank : false,
				valueField : 'id',
				emptyText : "请选择(必填)"
			}, {
				fieldLabel : '手机号码',
				name : 'phone',
				inputType : 'text',
				regex : /^1\d{10}$/,
				regexText : '输入手机号码必须为11位',
				allowBlank : false,
				value : this.users.phone
			}, {
				fieldLabel : '邮箱',
				name : 'Email',
				inputType : 'text',
				regex : /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
				regexText : '输入邮箱不合法',
				allowBlank : false,
				value : this.users.Email
			} ],
			buttons : [ {
				text : '重置',
				handler : function() {
					this.up('form').getForm().reset();
				}
			}, {
				text : '提交',
				formBind : true,
				disabled : true,
				handler : function() {
					var form = this.up('form').getForm();
					if (form.isValid()) {
						form.submit({
							success : function(form, action) {
								Ext.Msg.alert('成功', "修改成功");
							},
							failure : function(form, action) {
								Ext.Msg.alert('失败', "修改失败");
							}
						});
					}
				}
			} ]
		} ];
		this.callParent(arguments);
	}
});
