Ext.define('MyApp.monitor.view.monitor_manage', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.MonitorManage',
	requires : [ 'Ext.form.*', 'Ext.ux.form.DateTimeField' ],
	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	autoShow : true,
	initComponent : function() {
		var user = getUserInfo(-1);
		this.items = [ {
			xtype : 'gridpanel',
			title : '监控区域设置中心',
			id : 'monitor_manage_zone_panel',
			layout : 'fit',
			margin : '3 3 3 3',
			flex : 1,
			store : "MyApp.berth.store.ZoneStore",
			dockedItems : [ {
				xtype : 'toolbar',
				hidden : user.roleId == 1 ? false : true,
				dock : 'top'
			} ],
			columns : [ {
				header : '序号',
				dataIndex : 'id',
				flex : 1,
				align : 'center'
			}, {
				header : '停车场',
				dataIndex : 'parkingName',
				flex : 2,
				align : 'center'
			}, {
				header : '区域名称',
				dataIndex : 'name',
				flex : 2,
				align : 'center'
			}, {
				header : '状态',
				dataIndex : 'status',
				flex : 1.5,
				align : 'center'
			} ]
		}, {
			xtype : 'gridpanel',
			title : '监控地址设置中心',
			margin : '3 3 3 0',
			id : 'monitor_manage_monitor_panel',
			store : "MyApp.monitor.store.MonitorStore",
			flex : 0.8,
			layout : 'fit',
			dockedItems : [ {
				xtype : 'toolbar',
				dock : 'top',
				hidden : user.roleId == 1 ? false : true,
				items : [ {
					text : '添加',
					iconCls : 'myIcon-add',
					tooltip : '添加监控地址',
					id : 'btn_monitor_add'
				}, {
					text : '更新',
					tooltip : '更新监控地址',
					iconCls : 'myIcon-edit',
					id : 'btn_monitor_edit'
				}, {
					text : '删除',
					tooltip : '删除监控地址',
					iconCls : 'myIcon-del',
					id : 'btn_monitor_delete'
				} ]
			} ],
			columns : [ {
				header : '序号',
				dataIndex : 'id',
				flex : 0.5,
				align : 'center'
			}, {
				header : '地址',
				dataIndex : 'url',
				flex : 3
			}, {
				header : '状态',
				dataIndex : 'status',
				flex : 1,
				align : 'center',
				renderer : function(value) {
					if (value == null) {
						return "无";
					}
					return value;
				}
			} ]
		} ];
		this.callParent(arguments);
	}
});
