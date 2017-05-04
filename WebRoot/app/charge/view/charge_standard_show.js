Ext.define('MyApp.charge.view.charge_standard_show', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.ShowChargeStandard',
	title : '功能列表',
	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	autoShow : true,
	items : [ {
		xtype : 'gridpanel',
		title : '收费标准中心',
		id : 'charge_standard_panel',
		layout : 'fit',
		margin : '3 3 3 3',
		flex : 1,
		store : "MyApp.charge.store.ChargeStandardStore",
		dockedItems : [ {
			xtype : 'toolbar',
			dock : 'top',
			items : [ {
				text : '添加',
				tooltip : '添加收费标准',
				iconCls : 'myIcon-add',
				id : 'btn_charge_standard_add',
			}, {
				text : '修改',
				tooltip : '编辑模块',
				iconCls : 'myIcon-edit',
				id : 'btn_charge_standard_edit',
			}, {
				text : '删除',
				tooltip : '删除收费标准',
				iconCls : 'myIcon-del',
				id : 'btn_charge_standard_delete',
			} ]
		} ],
		columns : [ {
			header : '序号',
			dataIndex : 'id',
			flex : 1,
			align : 'center'
		}, {
			header : '标准名称',
			dataIndex : 'name',
			flex : 2,
			align : 'center'
		}, {
			header : '收费模式',
			dataIndex : 'mode',
			flex : 2,
			align : 'center'
		}, {
			header : '状态',
			dataIndex : 'status',
			flex : 1,
			align : 'center'
		} ]
	}, {
		xtype : 'gridpanel',
		title : '定制中心',
		margin : '3 3 3 0',
		id : 'charge_customize_panel',
		store : "MyApp.charge.store.ChargeCustomizeStore",
		flex : 2,
		layout : 'fit',
		dockedItems : [ {
			xtype : 'toolbar',
			dock : 'top',
			items : [ {
				text : '添加',
				iconCls : 'myIcon-add',
				tooltip : '添加时间段',
				id : 'btn_charge_customize_add'
			}, {
				text : '编辑',
				tooltip : '编辑功能',
				iconCls : 'myIcon-edit',
				id : 'btn_charge_customize_edit'
			}, {
				text : '删除',
				tooltip : '删除时间段',
				iconCls : 'myIcon-del',
				id : 'btn_charge_customize_delete'
			} ]
		} ],

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
});
