Ext.define('MyApp.user.model.UserModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'account',
		type : 'string'
	}, {
		name : 'nickName',
		type : 'string'
	}, {
		name : 'gender',
		type : 'int'
	}, {
		name : 'email',
		type : 'string'
	}, {
		name : 'phone',
		type : 'string'
	}, {
		name : 'address',
		type : 'string'
	}, {
		name : 'qq',
		type : 'string'
	}, {
		name : 'birthdayTemp',
		type : 'string'
	}, {
		name : 'roleId',
		type : 'int'
	}, {
		name : 'roleName',
		type : 'string'
	} ]
});