Ext.define('MyApp.berth.view.berth_add', {
	extend : 'Ext.window.Window',
	alias : 'widget.AddBerth',
	requires : [ 'Ext.form.*' ],
	id : 'AddBerth',
	title : '添加车位',
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
			url : SYSTEM_CONTEXTPATH + '/Berth/addBerth',
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
				name : 'zoneId',
				value : this.record.data.id
			}, {
				xtype : 'displayfield',
				fieldLabel : '区域名称',
				value : this.record.data.name
			}, {
				fieldLabel : '车位名称',
			}, {
				fieldLabel : '收费标准',
				xtype : 'displayfield',
				value : this.record.data.name
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
									Ext.getCmp('AddBerth').SUCCESS();
								} else {
									Ext.getCmp('AddBerth').FAIL();
								}
							},
							failure : function(form, action) {
								Ext.getCmp('AddBerth').FAIL();
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