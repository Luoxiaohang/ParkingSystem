Ext.define('MyApp.monitor.view.monitor_edit', {
	extend : 'Ext.window.Window',
	alias : 'widget.EditMonitor',
	requires : [ 'Ext.form.*' ],

	title : '修改监控信息',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	border : false,
	width : 400,
	height : 200,
	SUCCESS : null,
	FAIL : null,
	monitor : null,
	initComponent : function() {
		this.items = [ {
			xtype : 'form',
			url : SYSTEM_CONTEXTPATH + '/Monitor/editMonitor',
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
				name : 'id',
				fieldLabel : '监控ID',
				hidden : true,
				value : this.monitor.id
			}, {
				xtype : 'displayfield',
				fieldLabel : '停车场名称',
				value : this.monitor.parkingName
			}, {
				xtype : 'displayfield',
				fieldLabel : '区域名称',
				allowBlank : false,
				value : this.monitor.zoneName
			}, {
				xtype : 'combobox',
				fieldLabel : '状态',
				name : 'statusId',
				allowBlank : false,
				store : "MyApp.system.store.StatusStore",
				value : this.monitor.statusId,
				displayField : 'name',
				valueField : 'id',
			}, {
				xtype : 'textfield',
				fieldLabel : '监控地址',
				allowBlank : false,
				name : 'url',
				value : this.monitor.url
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