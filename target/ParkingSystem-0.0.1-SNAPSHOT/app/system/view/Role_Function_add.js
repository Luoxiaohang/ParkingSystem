Ext.define('MyApp.system.view.Role_Function_add', {
	extend : 'Ext.window.Window',
	alias : 'widget.AddRoleFunction',
	requires : [ 'Ext.form.*' ],
	id : 'AddRoleFunction',
	title : '添加功能',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	width : 400,
	height : 200,
	defaults : {
		margins : '5 5 5 5'
	},

	role : null,
	SUCCESS : null,
	FAIL : null,

	initComponent : function() {

		var funStore = Ext
				.create("MyApp.system.store.ModuleFunctionWithRootStore");

		this.items = [ {
			xtype : 'form',
			url : SYSTEM_CONTEXTPATH + '/Role/addRoleFunction',
			layout : "anchor",
			anchor : "100% 100%",
			bodyPadding : '5 5 5 5',
			fieldDefaults : {
				labelAlign : 'right',
				anchor : "100%",
				labelWidth : 60,
			},
			items : [ {
				xtype : 'textfield',
				hidden : true,
				fieldLabel : '角色序号',
				name : 'roleId',
				value : this.role.data.id
			}, {
				xtype : 'displayfield',
				fieldLabel : '角色名称',
				value : this.role.data.name
			}, {
				xtype : 'combobox',
				fieldLabel : '选择模块',
				name : 'moduleId',
				store : "MyApp.system.store.ModuleStore",
				displayField : 'name',
				readyOnly : true,
				allowBlank : false,
				valueField : 'id',
				emptyText : "请选择(必填)",
				listeners : {
					select : function(combo) {
						var moduleId = combo.getValue();
						funStore.proxy.extraParams.moduleId = moduleId;
						funStore.load();
					}
				}
			}, {
				xtype : 'combobox',
				fieldLabel : '选择功能',
				name : 'functionId',
				readyOnly : true,
				allowBlank : false,
				store : funStore,
				displayField : 'text',
				valueField : 'id'
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
								Ext.Msg.alert('操作成功', "添加成功", function(btnId) {
									Ext.getCmp('AddRoleFunction').SUCCESS();
								});
							},
							failure : function(form, action) {
								Ext.Msg.alert('操作失败', "添加失败", function(btnId) {
									Ext.getCmp('AddRoleFunction').FAIL();
								});
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