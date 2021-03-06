Ext.define('MyApp.charge.model.ChargeStandardModel', {
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
	}, {
		name : 'mode',
		type : 'string'
	} ]
});