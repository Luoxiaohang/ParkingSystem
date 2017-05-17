Ext.define('MyApp.system.view.Function_edit', {
	extend : 'Ext.window.Window',
	alias : 'widget.EditFunction',
	id : 'EditFunction',
	requires : [ 'Ext.form.*', "MyApp.system.model.ModulesModel",
			"MyApp.system.model.FunctionModel" ],

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

	SUCCESS : null,
	FAIL : null,

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
				anchor : "98%",
				labelWidth : 85,
			},

			items : [ {
				name : 'id',
				fieldLabel : '功能序号',
				hidden : true,
				value : this.FunctionRecord.data.id
			}, {
				xtype : 'displayfield',
				fieldLabel : '所属模块',
				value : this.FunctionRecord.data.moduleName
			}, {
				xtype : 'displayfield',
				fieldLabel : '原功能名称',
				value : this.FunctionRecord.data.text
			}, {
				xtype : 'displayfield',
				fieldLabel : '原界面名称',
				value : this.FunctionRecord.data.viewName
			}, {
				fieldLabel : '新的功能名称',
				name : 'text',
				allowBlank : false,
				value : this.FunctionRecord.data.text,
				emptyText : '必填'
			}, {
				fieldLabel : '新的界面名称',
				name : 'viewName',
				allowBlank : false,
				emptyText : '必填',
				value : this.FunctionRecord.data.viewName,
			} ],
			buttons : [ {
				text : '提交',
				disabled : true,
				formBind : true,
				handler : function() {
					var form = this.up('form').getForm();
					if (form.isValid()) {
						var cmp = Ext.getCmp('EditFunction');
						form.submit({
							success : function(form, action) {
								cmp.SUCCESS();
							},
							failure : function(form, action) {
								cmp.FAIL();
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