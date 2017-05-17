Ext.define('MyApp.berth.view.berth_manage', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.BerthManage',
	requires : [ 'Ext.form.*', 'Ext.ux.form.DateTimeField' ],
	title : '车位列表',
	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	autoShow : true,
	initComponent : function() {
		var user = getUserInfo(-1);
		this.items = [ {
			xtype : 'gridpanel',
			title : '区域',
			id : 'manage_zone_panel',
			layout : 'fit',
			margin : '3 3 3 3',
			flex : 1,
			store : "MyApp.berth.store.ZoneStore",
			dockedItems : [ {
				xtype : 'toolbar',
				hidden : user.roleId == 1 ? false : true,
				dock : 'top',
				items : [ {
					text : '添加',
					tooltip : '添加区域',
					iconCls : 'myIcon-add',
					id : 'btn_zone_add',
				}, {
					text : '更新',
					tooltip : '修改区域信息',
					iconCls : 'myIcon-edit',
					id : 'btn_zone_edit',
				}, {
					text : '删除',
					tooltip : '删除区域',
					iconCls : 'myIcon-del',
					id : 'btn_zone_del',
				} ]
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
				header : '收费模式',
				dataIndex : 'chargeModeName',
				flex : 2,
				align : 'center'
			}, {
				header : '收费标准',
				dataIndex : 'chargeStandardName',
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
			title : '车位中心',
			margin : '3 3 3 0',
			id : 'manage_berth_panel',
			store : "MyApp.berth.store.BerthStore",
			flex : 0.8,
			layout : 'fit',
			dockedItems : [ {
				xtype : 'toolbar',
				dock : 'top',
				hidden : user.roleId == 1 ? false : true,
				items : [ {
					text : '添加',
					iconCls : 'myIcon-add',
					tooltip : '添加车位',
					id : 'btn_berth_add'
				}, {
					text : '更新',
					tooltip : '更新车位',
					iconCls : 'myIcon-edit',
					id : 'btn_berth_edit'
				}, {
					text : '删除',
					tooltip : '删除车位',
					iconCls : 'myIcon-del',
					id : 'btn_berth_delete'
				} ]
			} ],
			columns : [ {
				header : '序号',
				dataIndex : 'id',
				flex : 0.5,
				align : 'center'
			}, {
				header : '序号',
				dataIndex : 'statusId',
				hidden : true,
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
			}, {
				header : '备注',
				dataIndex : 'remark',
				flex : 2,
				align : 'center'
			} ]
		} ];
		this.callParent(arguments);
	}
});
