Ext.define('MyApp.user.model.UserInfoModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'text',
		type : 'string'
	}, {
		name : 'viewName',
		type : 'string'
	}, {
		name : 'moduleName',
		type : 'string'
	}, {
		name : 'leaf',
		type : 'boolean',
		defaultValue : true
	}, {
		name : 'parentName',
		type : 'string'
	} ]
});