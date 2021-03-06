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

	berthRecord : null,
	
	initComponent : function() {
		var startDateTimeField = Ext.create("Ext.ux.form.DateTimeField", {
			fieldLabel : '开始时间',
			name : 'fromTimeStr',
			value : new Date(),
			format : "Y-m-d H:i:s",
			minValue : Ext.getCmp("berth_field_query_from_time").getRawValue(),
			allowBlank : false,
			listeners : {
				select : function(combo) {
					endDateTimeField.setMinValue(combo.getValue());
				}
			}
		});
		var endDateTimeField = Ext.create("Ext.ux.form.DateTimeField", {
			fieldLabel : '结束时间',
			name : 'toTimeStr',
			format : "Y-m-d H:i:s",
			minValue : Ext.getCmp("berth_field_query_to_time").getRawValue(),
			allowBlank : false
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
				value : this.berthRecord.data.parkingId
			}, {
				hidden : true,
				name : 'zoneId',
				value : this.berthRecord.data.zoneId
			}, {
				hidden : true,
				name : 'standardId',
				value : this.berthRecord.data.chargeStandardId
			}, {
				xtype : 'displayfield',
				fieldLabel : '停车场名称',
				value : this.berthRecord.data.parkingName
			}, {
				xtype : 'displayfield',
				fieldLabel : '区域名称',
				value : this.berthRecord.data.zoneName
			}, {
				fieldLabel : '停车位编号',
				readOnly : true,
				name : 'berthId',
				value : this.berthRecord.data.id
			}, {
				fieldLabel : '车牌',
				name : 'carId',
				allowBlank : false,
				regex : /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
				regexText : '车牌必须为7位',
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
											var tip = "继续支付" + action.result.msg + "元以完成预约？";
											Ext.Msg.confirm('提示', tip, function(btnId) {
												if (btnId == "yes") {
													$.ajax({
														type : "POST",
														url : SYSTEM_CONTEXTPATH + "/Berth/bookBerth",
														data : action.result.list[0],
														dataType : "text",
														success : function(data, textStatus) {
															var result = Ext.JSON.decode(data);
															if (result.success) {
																if(Ext.getCmp("manage_zone_panel")){
																	Ext.getCmp("manage_zone_panel").getStore().load();
																}
																 if(Ext.getCmp("manage_berth_panel")){
																	 var berthStore = Ext.getCmp("manage_berth_panel").getStore();
																	 berthStore.getProxy().extraParams.zoneId = Ext.getCmp("BookBerth").berthRecord.data.zoneId;
																	 berthStore.load();
																 }
																 Ext.getCmp("SaleChart").getStore().load();
																 Ext.getCmp("BerthRateChart").getStore().load();
																 var view = Ext.getCmp("ShowBookedBerthPanel");
																 if(typeof view != 'undefined'){
																	 view.getStore().load();
																 }
																 var ShowBerthPanel = Ext.getCmp("ShowBerthPanel");
																 if(ShowBerthPanel){
																	 ShowBerthPanel.getStore().load();
																 }
																 Ext.getCmp("BookBerth").SUCCESS();
															} else {
																Ext.Msg.alert('预订失败', result.msg);
															}
														},
														error : function(XMLHttpRequest, textStatus, errorThrown) {
															Ext.Msg.alert('错误', "请求失败");
															Ext.getCmp("BookBerth").FAIL();
														}
													});
												}
											});
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