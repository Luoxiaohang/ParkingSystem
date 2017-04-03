Ext.define('MyApp.berth.view.zone_edit', {
	extend : 'Ext.window.Window',
	alias : 'widget.EditZone',
	requires : [ 'Ext.form.*' ],
	id : 'EditZone',
	title : '编辑区域信息',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	width : 400,
	height : 220,
	record : null,
	SUCCESS : null,
	FAIL : null,

	record : null,

	initComponent : function() {
		this.items = [ {
			xtype : 'form',
			url : SYSTEM_CONTEXTPATH + '/Zone/editZone',
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
				name : 'id',
				hidden : true,
				value : this.record.data.id
			}, {
				fieldLabel : '区域名称',
				name : 'name',
				allowBlank : false,
				emptyText : "(必填)",
				value : this.record.data.name
			}, {
				xtype : 'combobox',
				fieldLabel : '收费标准',
				name : 'chargingStandardId',
				allowBlank : false,
				store : "MyApp.charge.store.ChargeStandardStore",
				value : this.record.data.chargingStandardId,
				displayField : 'name',
				valueField : 'id',
				emptyText : "请选择(必填)"
			}, {
				xtype : 'combobox',
				fieldLabel : '状态',
				name : 'statusId',
				allowBlank : false,
				store : "MyApp.system.store.StatusStore",
				value : this.record.data.statusId,
				displayField : 'name',
				valueField : 'id',
				emptyText : "请选择(必填)"
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
								if (action.result.success) {
									Ext.getCmp('EditZone').SUCCESS();
								} else {
									Ext.getCmp('EditZone').FAIL();
								}
							},
							failure : function(form, action) {
								Ext.getCmp('EditZone').FAIL();
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