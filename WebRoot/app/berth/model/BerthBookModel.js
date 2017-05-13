Ext.define('MyApp.berth.model.BerthBookModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'status',
		type : 'string'
	}, {
		name : 'parkingName',
		type : 'string'
	}, {
		name : 'zoneName',
		type : 'string'
	}, {
		name : 'berthId',
		type : 'int'
	}, {
		name : 'bookTime',
		type : 'date',
		mapping : 'bookTime',
		dateFormat : 'time'
	}, {
		name : 'toTime',
		type : 'date',
		mapping : 'toTime',
		dateFormat : 'time'
	}, {
		name : 'fromTime',
		type : 'date',
		mapping : 'fromTime',
		dateFormat : 'time'
	}, {
		name : 'cost',
		type : 'float'
	}, {
		name : 'carId',
		type : 'string'
	} ]
});