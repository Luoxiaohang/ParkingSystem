Ext.define('MyApp.charge.view.Charge_Customize_edit', {
	extend : 'Ext.window.Window',
	alias : 'widget.EditChargeCustomize',
	requires : [ 'Ext.form.*' ],
	id : 'EditChargeCustomize',
	title : '添加收费时间段',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	width : 400,
	height : 250,
	SUCCESS : null,
	FAIL : null,
	customizeRecord : null,
	standardRecord : null,

	initComponent : function() {
		var startTimeField = Ext.create("Ext.form.field.Time", {
			fieldLabel : '开始时间',
			xtype : 'timefield',
			name : 'startTimeStr',
			width : 280,
			labelSeparator : ':',
			msgTarget : 'side',
			autoFitErrors : false,
			pickerMaxHeight : 200,
			increment : 5,
			value : this.customizeRecord.data.startTimeStr,
			format : 'G:i:s',
			invalidText : 'invalid format',
			listeners : {
				select : function(combo) {
					endTimeField.setMinValue(combo.getValue());
				}
			}
		});
		var endTimeField = Ext.create("Ext.form.field.Time", {
			fieldLabel : '结束时间',
			name : 'endTimeStr',
			xtype : 'timefield',
			value : this.customizeRecord.data.endTimeStr,
			width : 280,
			labelSeparator : ':',
			msgTarget : 'side',
			autoFitErrors : false,
			pickerMaxHeight : 200,
			increment : 5,
			format : 'G:i:s',
			invalidText : 'invalid format',
			listeners : {
				select : function(combo) {
					startTimeField.setMaxValue(combo.getValue());
				}
			}
		});
		this.items = [ {
			xtype : 'form',
			url : SYSTEM_CONTEXTPATH + '/ChargeCustomize/editCustomize',
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
				value : this.standardRecord.data.id
			}, {
				xtype : 'displayfield',
				fieldLabel : '收费标准名称',
				value : this.standardRecord.data.name
			}, startTimeField, endTimeField, {
				fieldLabel : '普通用户(元/时)',
				name : 'commonCost',
				emptyText : '必填',
				value : this.customizeRecord.data.commonCost,
				allowBlank : false
			}, {
				fieldLabel : 'VIP用户(元/时)',
				name : 'vipCost',
				emptyText : '必填',
				value : this.customizeRecord.data.vipCost,
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