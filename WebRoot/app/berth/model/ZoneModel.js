Ext.define('MyApp.berth.model.ZoneModel', {
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
		name : 'statusId',
		type : 'int'
	}, {
		name : 'chargingStandardId',
		type : 'int'
	}, {
		name : 'parkingId',
		type : 'string'
	}, {
		name : 'parkingName',
		type : 'string'
	}, {
		name : 'chargeStandardName',
		type : 'string'
	}, {
		name : 'cost',
		type : 'float'
	}, {
		name : 'vipCost',
		type : 'float'
	}, {
		name : 'useRate',
		type : 'float'
	} ]
});