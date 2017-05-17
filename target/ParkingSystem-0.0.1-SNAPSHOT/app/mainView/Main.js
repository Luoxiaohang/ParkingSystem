Ext.define('MyApp.mainView.Main', {
	extend : 'Ext.container.Container',
	requires : [ 'Ext.tab.Panel', 'Ext.layout.container.Border',
			'MyApp.mainView.Banner', 'MyApp.mainView.Footer',
			'MyApp.mainView.NavAccordion', 'MyApp.mainView.TabContent' ],

	xtype : 'app-main',
	margin : 2,

	layout : {
		type : 'border'
	},
	items : [ {
		region : 'north',
		xtype : 'banner',
		height : 90
	}, {
		region : 'west',
		xtype : 'navAccordion',
		title : '系统菜单',
		collapsible : true,
		width : 200,
		maxWidth : 200
	}, {
		region : 'center',
		xtype : 'tabContent'
	} ]
});