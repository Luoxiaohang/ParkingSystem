Ext.define('MyApp.berth.view.berth_book', {
	extend : 'Ext.window.Window',
	alias : 'widget.BookBerth',
	requires : [ 'Ext.form.*' ],
	id : 'BookBerth',
	title : '预订车位',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	width : 400,
	height : 280,

	SUCCESS : null,
	FAIL : null,

	zoneRecord : null,
	berthRecord : null,

	initComponent : function() {
		var startDateTimeField = Ext.create("Ext.ux.form.DateTimeField", {
			fieldLabel : '开始时间',
			name : 'fromTimeStr',
			format : "Y-m-d H:i:s",
			minValue : new Date(),
			listeners : {
				select : function(combo) {
					endDateTimeField.setMinValue(combo.getValue());
				}
			}
		});
		var endDateTimeField = Ext.create("Ext.ux.form.DateTimeField", {
			fieldLabel : '开始时间',
			name : 'toTimeStr',
			format : "Y-m-d H:i:s"
		});
		this.items = [ {
			xtype : 'form',
			url : SYSTEM_CONTEXTPATH + '/Berth/getCost',
			layout : "anchor",
			anchor : "100% 100%",
			bodyPadding : '5 5 5 5',
			defaultType : 'textfield',
			fieldDefaults : {
				labelAlign : 'left',
				anchor : "100%",
				labelWidth : 80,
			},
			items : [ {
				hidden : true,
				name : 'parkingId',
				value : this.zoneRecord.data.parkingId
			}, {
				hidden : true,
				name : 'zoneId',
				value : this.zoneRecord.data.id
			}, {
				hidden : true,
				name : 'standardId',
				value : this.zoneRecord.data.chargingStandardId
			}, {
				xtype : 'displayfield',
				fieldLabel : '停车场名称',
				value : this.zoneRecord.data.parkingName
			}, {
				xtype : 'displayfield',
				fieldLabel : '区域名称',
				value : this.zoneRecord.data.name
			}, {
				fieldLabel : '停车位编号',
				readOnly : true,
				name : 'berthId',
				value : this.berthRecord.data.id
			}, startDateTimeField, endDateTimeField ],
			buttons : [
					{
						text : '提交',
						disabled : true,
						formBind : true,
						handler : function() {
							var form = this.up('form').getForm();
							if (form.isValid()) {
								form.submit({
									success : function(form, action) {
										if (action.result.success) {
											Ext.getCmp('BookBerth').SUCCESS(
													action.result);
										} else {
											Ext.getCmp('BookBerth').FAIL();
										}
									},
									failure : function(form, action) {
										Ext.getCmp('BookBerth').FAIL();
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