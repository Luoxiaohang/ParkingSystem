Ext.define('MyApp.berth.view.berth_show', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.ShowBerth',
	requires : [ 'Ext.form.*', 'Ext.ux.form.DateTimeField' ],
	title : '车位列表',
	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	autoShow : true,
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'form',
			border : false,
			layout : 'hbox',
			items : [ {
				xtype : 'datetimefield',
				fieldLabel : '开始时间',
				id : 'field_query_from_time',
				name : 'toTimeStr',
				labelWidth : 65,
				margin : '0 5 0 5',
				editable : false,
				value : new Date(),
				format : "Y-m-d H:i:s"
			}, {
				xtype : 'datetimefield',
				fieldLabel : '结束时间',
				id : 'field_query_to_time',
				name : 'toTimeStr',
				labelWidth : 65,
				margin : '0 5 0 5',
				editable : false,
				value : new Date(),
				format : "Y-m-d H:i:s"
			}, {
				text : '查询空闲车位',
				xtype : 'button',
				id : 'btn_query'
			} ]
		} ]
	} ],
	initComponent : function() {
		var user = getUserInfo(-1);
		this.items = [ {
			xtype : 'gridpanel',
			title : '区域',
			id : 'zone_panel',
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
				header : '价格(元/时)',
				dataIndex : 'cost',
				flex : 2,
				align : 'center'
			}, {
				header : 'VIP价格(元/时)',
				dataIndex : 'vipCost',
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
			id : 'berth_panel',
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
