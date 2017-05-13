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
		description : '绑定邮箱后，当该停车场举行优惠活动时，会将优惠信息发送至您的邮箱，除此之外，还能享受该系统更多其他的服务'
	}, {
		type : '绑 定 手机',
		state : '已完成',
		description : '绑定手机后，当您预订的车位即将开放时，该系统会以短信的方式通知您，除此之外，还能享受该系统更多其他的服务'
	} ]
});
