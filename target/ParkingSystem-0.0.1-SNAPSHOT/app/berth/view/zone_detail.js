Ext
		.define(
				'MyApp.berth.view.zone_detail',
				{
					extend : 'Ext.window.Window',
					alias : 'widget.DetailZone',
					requires : [ 'Ext.form.*' ],
					id : 'DetailZone',
					title : '详细信息',
					layout : 'anchor',
					autoShow : true,
					modal : true,
					width : 700,
					record : null,
					buttons : [ {
						text : '关闭',
						handler : function() {
							this.up('window').close();
						}
					} ],
					initComponent : function() {
						var customizeStore = Ext
								.create("MyApp.charge.store.ChargeCustomizeStore");
						customizeStore.proxy.extraParams.standardId = this.record.data.chargingStandardId
						this.items = [ {
							xtype : 'panel',
							layout : "anchor",
							anchor : "100% 100%",
							bodyPadding : '5 5 5 5',
							defaultType : 'displayfield',
							fieldDefaults : {
								labelAlign : 'right',
								anchor : "100%",
								labelWidth : 60,
							},
							items : [ {
								fieldLabel : '区域名称',
								value : this.record.data.name
							}, {
								fieldLabel : '收费标准',
								value : this.record.data.chargeStandardName
							}, {
								xtype : 'gridpanel',
								margin : '3 3 3 0',
								store : customizeStore,
								flex : 2,
								layout : 'fit',
								columns : [ {
									header : '序号',
									dataIndex : 'id',
									width : 100,
									align : 'center'
								}, {
									header : '开始时间',
									dataIndex : 'startTime',
									width : 150,
									align : 'center'
								}, {
									header : '结束时间',
									dataIndex : 'endTime',
									align : 'center',
									width : 150
								}, {
									header : '普通用户费用',
									dataIndex : 'commonCost',
									align : 'center',
									width : 150,
									renderer : function(value) {
										if (value)
											return value;
										else
											return "无";
									}
								}, {
									header : '会员费用',
									dataIndex : 'vipCost',
									align : 'center',
									width : 150
								} ]
							} ]
						} ];
						this.callParent(arguments);
					}
				});