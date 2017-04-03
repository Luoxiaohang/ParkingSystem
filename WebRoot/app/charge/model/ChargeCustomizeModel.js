Ext.define('MyApp.charge.model.ChargeCustomizeModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'startTime',
		type : 'String'
	}, {
		name : 'endTime',
		type : 'String'
	}, {
		name : 'commonCost',
		type : 'float'
	}, {
		name : 'vipCost',
		type : 'float'
	}, {
		name : 'standardId',
		type : 'int'
	} ]
});