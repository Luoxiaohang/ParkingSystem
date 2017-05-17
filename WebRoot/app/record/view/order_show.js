Ext.define('MyApp.record.view.order_show', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.ShowOrder',
	autoShow : true,
	title : '我的预订',
	margin : '3 3 3 0',
	store : "MyApp.berth.store.BerthBookedStore",
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
				id : 'order_field_query_from_time',
				name : 'toTimeStr',
				labelWidth : 65,
				margin : '0 5 0 5',
				editable : false,
				value : new Date(),
				format : "Y-m-d H:i:s"
			}, {
				xtype : 'datetimefield',
				fieldLabel : '结束时间',
				id : 'order_field_query_to_time',
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
				id : 'order_btn_query'
			} ]
		} ]
	} ],
	columns : [ {
		header : '序号',
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
		header : '车位编号',
		dataIndex : 'berthId',
		flex : 1.5,
		align : 'center'
	}, {
		header : '开始时间',
		dataIndex : 'fromTime',
		flex : 3,
		sortable : true,
		align : 'center',
		renderer : Ext.util.Format.dateRenderer('Y-m-d H:i')
	}, {
		header : '结束时间',
		dataIndex : 'toTime',
		flex : 3,
		sortable : true,
		align : 'center',
		renderer : Ext.util.Format.dateRenderer('Y-m-d H:i')
	}, {
		header : '预订时间',
		dataIndex : 'bookTime',
		flex : 3,
		sortable : true,
		align : 'center',
		renderer : Ext.util.Format.dateRenderer('Y-m-d H:i')
	}, {
		header : '车牌',
		dataIndex : 'carId',
		flex : 1.5,
		align : 'center'
	}, {
		header : '消费(元)',
		dataIndex : 'cost',
		flex : 1.3,
		align : 'center'
	}, {
		header : '状态',
		dataIndex : 'status',
		flex : 1,
		align : 'center'
	} ]
});
