Ext.define('MyApp.charge.model.ChargeModeModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'name',
		type : 'string'
	}, {
		name : 'status',
		type : 'string'
	} ]
});