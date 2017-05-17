Ext.define("MyApp.user.store.ServiceStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.user.model.ServiceModel',
	data : [ {
		type : '登 录 密 码',
		state : '已完成',
		description : '安全性高的密码可以使账号更安全。建议您定期更换密码，且设置一个包含数字和字母，并长度超过6位以上的密码。'
	}, {
		type : '绑 定 邮箱',
		state : '已完成',
		description : '绑定邮箱后，您即可享受网申系统丰富的服务，如找回密码等。'
	}, {
		type : '绑 定 手机',
		state : '已完成',
		description : '绑定手机后，您即可享受网申系统丰富的服务，如找回密码等。'
	} ]
});
