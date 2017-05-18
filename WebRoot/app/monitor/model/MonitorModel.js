Ext.define('MyApp.monitor.model.MonitorModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'url',
		type : 'string'
	}, {
		name : 'parkingName',
		type : 'string'
	}, {
		name : 'zoneName',
		type : 'string'
	}, {
		name : 'status',
		type : 'string'
	}, {
		name : 'statusId',
		type : 'int'
	}, ]
});