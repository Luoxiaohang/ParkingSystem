Ext.define('MyApp.user.view.Berth_booked_show', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.ShowBookedBerth',
	autoShow : true,
	title : '我的预订',
	id : 'ShowBookedBerthPanel',
	margin : '3 3 3 0',
	store : "MyApp.berth.store.ValidBookedRecordsStore",
	emptyText : '<div style="text-align:center; padding:20px">暂无数据</div>',
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
				id : 'book_field_query_from_time',
				name : 'toTimeStr',
				labelWidth : 65,
				margin : '0 5 0 5',
				editable : false,
				value : new Date(),
				format : "Y-m-d H:i:s"
			}, {
				xtype : 'datetimefield',
				fieldLabel : '结束时间',
				id : 'book_field_query_to_time',
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
				id : 'book_order_btn_query'
			} ]
		}, '->', {
			id : 'btn_berth_unbook',
			text : '取消预订',
			tooltip : '取消预订',
			iconCls : 'myIcon-ok'
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
		header : '区域',
		dataIndex : 'zoneName',
		flex : 1.5,
		align : 'center'
	}, {
		header : '车位',
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
		header : '消费(元)',
		dataIndex : 'cost',
		flex : 1.3,
		align : 'center'
	}, {
		header : '车牌',
		dataIndex : 'carId',
		flex : 1.5,
		align : 'center'
	}, {
		header : '状态',
		dataIndex : 'status',
		flex : 1,
		align : 'center'
	} ]
});
