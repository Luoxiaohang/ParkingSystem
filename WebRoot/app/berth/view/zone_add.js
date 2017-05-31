Ext.define('MyApp.berth.view.zone_add', {
	extend : 'Ext.window.Window',
	alias : 'widget.AddZone',
	requires : [ 'Ext.form.*' ],
	id : 'AddZone',
	title : '添加区域',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	width : 400,
	height : 220,
	record : null,
	SUCCESS : null,
	FAIL : null,

	initComponent : function() {

		var standardStore = Ext
				.create("MyApp.charge.store.ChargeStandardStore");

		this.items = [ {
			xtype : 'form',
			url : SYSTEM_CONTEXTPATH + '/Zone/addZone',
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
				fieldLabel : '区域名称',
				name : 'name',
				allowBlank : false,
				emptyText : "(必填)"
			}, {
				xtype : 'combobox',
				fieldLabel : '收费模式',
				name : 'chargingModeId',
				readyOnly : true,
				allowBlank : false,
				store : "MyApp.charge.store.ChargeModeStore",
				displayField : 'name',
				valueField : 'id',
				emptyText : "请选择(必填)",
				listeners : {
					select : function(combo) {
						var modeId = combo.getValue();
						standardStore.proxy.extraParams.modeId = modeId;
						standardStore.load();
					}
				}
			}, {
				xtype : 'combobox',
				fieldLabel : '收费标准',
				name : 'chargingStandardId',
				readyOnly : true,
				allowBlank : false,
				store : standardStore,
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
								console.log(action);
								if (action.result.success) {
									Ext.getCmp('AddZone').SUCCESS();
								} else {
									Ext.getCmp('AddZone').FAIL();
								}
							},
							failure : function(form, action) {
								Ext.getCmp('AddZone').FAIL();
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