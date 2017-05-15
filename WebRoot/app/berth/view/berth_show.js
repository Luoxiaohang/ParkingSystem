Ext.define('MyApp.berth.view.berth_show', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.ShowBerthPanel',
	id : 'ShowBerthPanel',
	autoShow : true,
	margin : '3 3 3 0',
	store : "MyApp.berth.store.BerthStore",
	layout : 'fit',
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
				id : 'berth_field_query_from_time',
				name : 'toTimeStr',
				labelWidth : 65,
				margin : '0 5 0 5',
				editable : false,
				value : new Date(),
				format : "Y-m-d H:i:s"
			}, {
				xtype : 'datetimefield',
				fieldLabel : '结束时间',
				id : 'berth_field_query_to_time',
				name : 'toTimeStr',
				labelWidth : 65,
				margin : '0 5 0 5',
				editable : false,
				value : function() {
					var date = new Date();
					date.setHours(date.getHours() + 1);
					return date;
				}(),
				format : "Y-m-d H:i:s"
			}, {
				text : '查询',
				xtype : 'button',
				id : 'berth_btn_query'
			} ]
		}, '->', {
			text : '预订',
			xtype : 'button',
			id : 'berth_btn_book'
		} ]
	} ],

	columns : [ {
		header : '车位编号',
		dataIndex : 'id',
		flex : 1,
		align : 'center'
	}, {
		header : '停车场名称',
		dataIndex : 'parkingName',
		flex : 2,
		align : 'center'
	}, {
		header : '区域名称',
		dataIndex : 'zoneName',
		flex : 1.5,
		align : 'center'
	}, {
		header : '收费模式',
		dataIndex : 'chargeModeName',
		flex : 1.5,
		align : 'center'
	}, {
		header : '收费标准',
		dataIndex : 'chargeStandardName',
		flex : 1.5,
		align : 'center'
	}, {
		header : '备注',
		dataIndex : 'remark',
		flex : 1.5,
		align : 'center'
	}, {
		header : '状态',
		dataIndex : 'status',
		flex : 1,
		align : 'center'
	} ]
});
