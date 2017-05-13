Ext.define('MyApp.Application', {
	name : 'MyApp',

	views : [ 'MyApp.view.Viewport' ],
	extend : 'Ext.app.Application',

	controllers : [ 'MyApp.system.controller.FunctionController',
			'MyApp.system.controller.RoleController',
			'MyApp.charge.controller.ChargeStandardController',
			'MyApp.berth.controller.BerthController',
			'MyApp.user.controller.UserController',
			'MyApp.monitor.controller.MonitorController',
			'MyApp.chart.controller.BarController',
			'MyApp.record.controller.RecordController', ],
	launch : function() {

	}
});
