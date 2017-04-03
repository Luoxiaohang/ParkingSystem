Ext.define('MyApp.system.view.Function_add', {
	extend : 'Ext.window.Window',
	alias : 'widget.AddFunction',
	requires : [ 'Ext.form.*' ],
	id : 'AddFunction',
	title : '添加功能',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	width : 400,
	height : 220,
	record : null,
	SUCCESS : null,
	FAIL : null,

	initComponent : function() {
		var functionStore = Ext
				.create("MyApp.system.store.ModuleFunctionWithRootStore");
		functionStore.getProxy().extraParams.moduleId = this.record.data.id;

		this.items = [ {
			xtype : 'form',
			url : SYSTEM_CONTEXTPATH + '/function/addSysFunction',
			layout : "anchor",
			anchor : "100% 100%",
			bodyPadding : '5 5 5 5',
			defaultType : 'textfield',
			fieldDefaults : {
				labelAlign : 'right',
				anchor : "100%",
				labelWidth : 60,
			},

			items : [ {
				hidden : true,
				fieldLabel : '模块序号',
				name : 'moduleId',
				value : this.record.data.id
			}, {
				xtype : 'displayfield',
				fieldLabel : '模块名称',
				value : this.record.data.name
			}, {
				xtype : 'combobox',
				fieldLabel : '父节点',
				name : 'parentId',
				readyOnly : true,
				allowBlank : false,
				store : functionStore,
				displayField : 'text',
				valueField : 'id',
				emptyText : "请选择(必填)"
			}, {
				fieldLabel : '功能名称',
				name : 'text',
				emptyText : '必填',
				allowBlank : false
			}, {
				fieldLabel : '界面名称',
				name : 'viewName',
				emptyText : '必填',
				allowBlank : false
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
								console.log(action);
								if (action.result.success) {
									Ext.getCmp('AddFunction').SUCCESS();
								} else {
									Ext.getCmp('AddFunction').FAIL();
								}
							},
							failure : function(form, action) {
								Ext.getCmp('AddFunction').FAIL();
							}
						});
					}
				}
			}, {
				text : '重置',
				handler : function() {
					this.up('form').getForm().reset();
				}
			} ]
		} ];
		this.callParent(arguments);
	}
});