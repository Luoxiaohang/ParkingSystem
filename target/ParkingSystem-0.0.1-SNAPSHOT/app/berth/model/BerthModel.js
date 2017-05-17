Ext.define('MyApp.berth.model.BerthModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'status',
		type : 'string'
	}, {
		name : 'remark',
		type : 'string'
	}, {
		name : 'statusId',
		type : 'int'
	} ]
});