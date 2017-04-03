Ext.define('MyApp.user.view.Sys_User_list', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.SysUserList',
	requires : [ 'Ext.grid.*', 'Ext.data.*', 'Ext.util.*',
			'Ext.toolbar.Paging', 'Ext.ux.PreviewPlugin', 'Ext.ModelManager',
			'Ext.tip.QuickTipManager' ],
	id : 'SysUserListPanel',
	title : '系统用户列表',
	layout : 'fit',
	autoShow : true,
	modal : true,
	width : 480,
	height : 280,
	scroll : false,
	store : 'MyApp.user.store.SysUserStore',

	defaults : {
		margins : '5 5 5 5'
	},

	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			text : '详细',
			tooltip : '查看详细',
			iconCls : 'myIcon-detail',
			id : 'btn_sys_user_list_detail'
		}, {
			text : '设置为系统管理员',
			tooltip : '设置为系统管理员',
			iconCls : 'myIcon-user_set',
			id : 'btn_sys_user_list_set_sys_mgr'
		}, {
			text : '设置为普通成员',
			tooltip : '设置为系统普通成员',
			iconCls : 'myIcon-user_set',
			id : 'btn_sys_user_list_set_sys_com'
		} ]
	}, {
		xtype : 'pagingtoolbar',
		store : 'MyApp.user.store.SysUserStore',
		emptyMsg : "没有记录",
		dock : 'bottom',
		displayInfo : true
	} ],

	columns : [ {
		header : '序号',
		dataIndex : 'id',
		width : 100,
		align : 'center'
	}, {
		header : '账号',
		dataIndex : 'account',
		width : 150,
		align : 'center'
	}, {
		header : '昵称',
		dataIndex : 'nickName',
		width : 150,
		align : 'center'
	}, {
		header : '性别',
		dataIndex : 'gender',
		align : 'center',
		width : 100,
		renderer : function(value) {
			switch (value) {
			case 1:
				return "男";
			case 2:
				return "女";
			}
		}
	}, {
		header : '邮箱',
		dataIndex : 'email',
		align : 'center',
		width : 200
	}, {
		header : '手机',
		dataIndex : 'phone',
		align : 'center',
		width : 150
	}, {
		header : 'QQ',
		dataIndex : 'qq',
		align : 'center',
		width : 150
	}, {
		header : '角色',
		dataIndex : 'roleId',
		align : 'center',
		width : 150,
		renderer : function(value) {
			switch (value) {
			case 1:
				return "系统管理员";
			case 4:
				return "普通成员";
			}
		}
	} ]
});
