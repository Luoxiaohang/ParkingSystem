Ext.define('MyApp.system.view.Role_edit', {
	extend : 'Ext.window.Window',
	alias : 'widget.EditRole',
	requires : [ 'Ext.form.*', "MyApp.system.model.RoleModel" ],

	title : '修改功能',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	width : 400,
	height : 240,

	defaults : {
		margins : '5 5 5 5'
	},

	FunctionRecord : null,

	initComponent : function() {
		this.items = [ {
			xtype : 'form',
			layout : "anchor",
			anchor : "100% 100%",
			bodyPadding : '5 5 5 5',
			defaultType : 'textfield',
			url : SYSTEM_CONTEXTPATH + '/function/editSysFunction',
			fieldDefaults : {
				labelAlign : 'left',
				anchor : "100%",
				labelWidth : 80,
			},

			items : [ {
				name : 'id',
				fieldLabel : '小行傻逼',
				readOnly : true,
				value : this.FunctionRecord.data.id
			}, {
				xtype : 'displayfield',
				fieldLabel : '原角色名称',
				value : this.FunctionRecord.data.name
			},  {
				fieldLabel : '新角色名称',
				name : 'text',
				allowBlank : false,
				value : this.FunctionRecord.data.name,
				emptyText : '必填',
			} ],
			buttons : [ {
				text : '提交',
				disabled : true,
				formBind : true,
				handler : function() {
					var form = this.up('form').getForm();
					if (form.isValid()) {
						form.submit({
							success : function(form, action) {
								Ext.Msg.alert('Success', "修改成功！");
							},
							failure : function(form, action) {
								Ext.Msg.alert('Failed', "修改失败！");
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