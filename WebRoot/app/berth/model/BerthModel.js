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
	}, {
		name : 'parkingId',
		type : 'int'
	}, {
		name : 'parkingName',
		type : 'string'
	}, {
		name : 'zoneId',
		type : 'int'
	}, {
		name : 'zoneName',
		type : 'string'
	}, {
		name : 'chargeModeId',
		type : 'int'
	}, {
		name : 'chargeModeName',
		type : 'string'
	}, {
		name : 'chargeStandardId',
		type : 'int'
	}, {
		name : 'chargeStandardName',
		type : 'string'
	} ]
});