Ext.define("MyApp.user.store.UserInfoStore", {
	extend : 'Ext.data.Store',
	model : 'MyApp.user.model.UserInfoModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		extraParams : {
			userId : -1
		},
		url : SYSTEM_CONTEXTPATH + '/User/getInfo',
		reader : {
			type : 'json',
			root : 'list'
		},
		actionMethods : {
			read : 'POST'
		}
	}
});

/**
 * 根据用户id获取用户信息，当userId=-1时，获取登录用户信息
 * 
 * @param userId
 */
function getUserInfo(userId) {
	var users;
	Ext.Ajax.request({
		url : SYSTEM_CONTEXTPATH + '/User/getInfo',
		method : 'POST',
		async : false,// 指定为同步方式
		params : {
			userId : userId
		},
		success : function(response) {
			var result = Ext.JSON.decode(response.responseText);
			if (result.success) {
				users = result.list[0];
			}
		}
	});
	return users;
}
