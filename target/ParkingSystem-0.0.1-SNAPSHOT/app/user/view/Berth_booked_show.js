Ext.define('MyApp.user.view.Berth_booked_show', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.ShowBookedBerth',
	autoShow : true,
	title : '我的预订',
	margin : '3 3 3 0',
	store : "MyApp.berth.store.BerthBookedStore",
	layout : 'fit',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			text : '预订',
			tooltip : '预订车位',
			iconCls : 'myIcon-ok',
			id : 'btn_berth_book'
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
		header : '金额(元)',
		dataIndex : 'cost',
		flex : 1,
		align : 'center'
	}, {
		header : '预订时间',
		dataIndex : 'bookTime',
		flex : 3,
		sortable : true,
		align : 'center',
		renderer : Ext.util.Format.dateRenderer('Y-m-d H:i')
	}, {
		header : '状态',
		dataIndex : 'status',
		flex : 1,
		align : 'center'
	} ]
});
