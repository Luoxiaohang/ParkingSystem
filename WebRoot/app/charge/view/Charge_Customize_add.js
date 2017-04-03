Ext.define('MyApp.charge.view.Charge_Customize_add', {
	extend : 'Ext.window.Window',
	alias : 'widget.AddChargeCustomize',
	requires : [ 'Ext.form.*' ],
	id : 'AddChargeCustomize',
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
		var startTimeField = Ext.create("Ext.form.field.Time", {
			fieldLabel : '开始时间',
			name : 'startTime',
			width : 280,
			labelSeparator : ':',
			pickerMaxHeight : 200,
			increment : 30,
			format : 'G:i:s',
			listeners : {
				select : function(combo) {
					endTimeField.setMinValue(combo.getValue());
				}
			}
		});
		var endTimeField = Ext.create("Ext.form.field.Time", {
			fieldLabel : '结束时间',
			name : 'endTime',
			width : 280,
			labelSeparator : ':',
			pickerMaxHeight : 200,
			increment : 30,
			format : 'G:i:s',
			listeners : {
				select : function(combo) {
					startTimeField.setMaxValue(combo.getValue());
				}
			}
		});
		this.items = [ {
			xtype : 'form',
			url : SYSTEM_CONTEXTPATH + '/ChargeCustomize/addCustomize',
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
				name : 'standardId',
				value : this.record.data.id
			}, {
				xtype : 'displayfield',
				fieldLabel : '收费标准名称',
				value : this.record.data.name
			}, startTimeField, endTimeField, {
				fieldLabel : '普通用户(元/时)',
				name : 'commonCost',
				emptyText : '必填',
				allowBlank : false
			}, {
				fieldLabel : 'VIP用户(元/时)',
				name : 'vipCost',
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
									Ext.getCmp('AddChargeCustomize').SUCCESS();
								} else {
									Ext.getCmp('AddChargeCustomize').FAIL();
								}
							},
							failure : function(form, action) {
								Ext.getCmp('AddChargeCustomize').FAIL();
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