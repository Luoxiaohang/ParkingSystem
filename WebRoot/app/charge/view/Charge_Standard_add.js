Ext.define('MyApp.charge.view.Charge_Standard_add', {
	extend : 'Ext.window.Window',
	alias : 'widget.AddChargeStandard',
	requires : [ 'Ext.form.*' ],
	id : 'AddChargeStandard',
	title : '添加收费时间段',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	width : 400,
	height : 250,
	record : null,
	SUCCESS : null,
	FAIL : null,

	initComponent : function() {
		this.items = [ {
			xtype : 'form',
			url : SYSTEM_CONTEXTPATH + '/ChargeStandard/addStandard',
			layout : "anchor",
			anchor : "100% 100%",
			bodyPadding : '5 5 5 5',
			defaultType : 'textfield',
			fieldDefaults : {
				labelAlign : 'left',
				anchor : "100%",
				labelWidth : 120,
			},

			items : [ {
				xtype : 'combobox',
				fieldLabel : '收费模式',
				name : 'modeId',
				readyOnly : true,
				allowBlank : false,
				store : "MyApp.charge.store.ChargeModeStore",
				displayField : 'name',
				valueField : 'id'
			}, {
				fieldLabel : '收费标准名称',
				name : "name"
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
									Ext.getCmp('AddChargeStandard').SUCCESS();
								} else {
									Ext.getCmp('AddChargeStandard').FAIL();
								}
							},
							failure : function(form, action) {
								Ext.getCmp('AddChargeStandard').FAIL();
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