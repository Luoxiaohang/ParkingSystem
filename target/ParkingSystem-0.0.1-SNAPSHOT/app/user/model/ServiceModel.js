Ext.define('MyApp.user.model.ServiceModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'type',
		type : 'string'
	}, {
		name : 'state',
		type : 'string'
	}, {
		name : 'description',
		type : 'string'
	} ]
});