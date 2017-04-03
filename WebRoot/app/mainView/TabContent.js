Ext.define('MyApp.mainView.TabContent', {
	extend : 'Ext.tab.Panel',
	alias : 'widget.tabContent',
	itemNo : 0,
	activeTab : 1,
	requires : [ 'Ext.ux.TabReorderer', 'Ext.ux.TabCloseMenu',
			'MyApp.chart.view.SaleChart' ],
	plugins : [ Ext.create('Ext.ux.TabReorderer'),
			Ext.create('Ext.ux.TabCloseMenu', {
				closeTabText : '关闭面板',
				closeOthersTabsText : '关闭其他',
				closeAllTabsText : '关闭所有'
			}) ],
	items : [ {
		title : '系统首页',
		layout : 'hbox',
		defaults : {
			margin : '10 100 10 10'
		},
		items : [ {
			border : false,
			items : [ {
				xtype : "displayfield",
				fieldLabel : '销售额(千元)',
			}, {
				width : 450,
				height : 400,
				xtype : "SaleChart"
			} ]
		}, {
			border : false,
			items : [ {
				xtype : "displayfield",
				fieldLabel : '使用率(%)',
			}, {
				width : 450,
				height : 400,
				xtype : "BerthRateChart"
			} ]
		} ]
	} ]
});