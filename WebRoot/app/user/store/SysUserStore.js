Ext.define("MyApp.user.store.SysUserStore", {
	extend : 'Ext.data.Store',
	pageSize : 16,
	model : 'MyApp.user.model.UserModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : SYSTEM_CONTEXTPATH + '/User/getSystemUserList',
		reader : {
			type : 'json',
			root : 'list',
			// 指定reader 的totalProperty。否则就只有一页
			totalProperty : 'totalCount'
		}
	}
});