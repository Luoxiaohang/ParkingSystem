Ext.define('MyApp.monitor.view.monitor_add', {
	extend : 'Ext.window.Window',
	alias : 'widget.AddMonitor',
	requires : [ 'Ext.form.*' ],

	title : '添加监控',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	border : false,
	width : 400,
	height : 200,
	SUCCESS : null,
	FAIL : null,
	record : null,
	initComponent : function() {
		this.items = [ {
			xtype : 'form',
			url : SYSTEM_CONTEXTPATH + '/Monitor/addMonitor',
			layout : "anchor",
			bodyPadding : '5 5 5 5',
			border : false,
			anchor : "100% 100%",
			fieldDefaults : {
				labelAlign : 'left',
				anchor : "98%",
				labelWidth : 75,
			},
			items : [ {
				xtype : 'textfield',
				fieldLabel : '停车场ID',
				name : 'parkingId',
				hidden : true,
				value : this.zone.parkingId
			}, {
				xtype : 'textfield',
				name : 'zoneId',
				fieldLabel : '区域ID',
				hidden : true,
				value : this.zone.id
			}, {
				xtype : 'displayfield',
				fieldLabel : '停车场名称',
				value : this.zone.parkingName
			}, {
				xtype : 'displayfield',
				fieldLabel : '区域名称',
				allowBlank : false,
				value : this.zone.name
			}, {
				xtype : 'textfield',
				fieldLabel : '监控地址',
				allowBlank : false,
				name : 'url'
			} ],
			buttons : [ {
				text : '确定',
				handler : function() {
					var win = this.up('window');
					var form = this.up('form').getForm();
					if (form.isValid()) {
						form.submit({
							success : function(form, action) {
								win.SUCCESS("添加成功");
							},
							failure : function(form, action) {
								win.FAIL("添加失败");
							}
						});
					}
				}
			} ]
		} ];
		this.callParent(arguments);
	}
});