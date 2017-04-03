Ext.define('MyApp.system.model.RoleModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'name',
		type : 'string'
	}, {
		name : 'tag',
		type : 'int'
	}, {
		name : 'builder',
		type : 'string'
	}, {
		name : 'buildTime',
		type : 'string'
	} ]
});