Ext.define('MyApp.berth.view.berth_edit', {
	extend : 'Ext.window.Window',
	alias : 'widget.EditBerth',
	requires : [ 'Ext.form.*' ],
	id : 'EditBerth',
	title : '编辑车位信息',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	width : 400,
	height : 250,
	zoneRecord : null,
	berthRecord : null,
	SUCCESS : null,
	FAIL : null,

	initComponent : function() {
		this.items = [ {
			xtype : 'form',
			url : SYSTEM_CONTEXTPATH + '/Berth/editBerth',
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
				hidden : true,
				name : 'id',
				value : this.berthRecord.data.id
			}, {
				xtype : 'displayfield',
				fieldLabel : '区域名称',
				value : this.zoneRecord.data.name
			}, {
				fieldLabel : '收费标准',
				xtype : 'displayfield',
				value : this.berthRecord.data.chargeStandardName
			}, {
				xtype : 'combobox',
				fieldLabel : '状态',
				name : 'statusId',
				allowBlank : false,
				store : "MyApp.system.store.StatusStore",
				value : this.berthRecord.data.statusId,
				displayField : 'name',
				valueField : 'id',
			}, {
				fieldLabel : '备注',
				name : "remark"
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
									Ext.getCmp('EditBerth').SUCCESS();
								} else {
									Ext.getCmp('EditBerth').FAIL();
								}
							},
							failure : function(form, action) {
								Ext.getCmp('EditBerth').FAIL();
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