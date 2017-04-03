Ext.define('MyApp.view.Viewport', {
	extend : 'Ext.container.Viewport',
	requires : [ 'Ext.layout.container.Fit', 'MyApp.mainView.Main' ],

	layout : {
		type : 'fit'
	},

	items : [ {
		xtype : "app-main"
	} ]
});
