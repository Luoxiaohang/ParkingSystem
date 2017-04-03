Ext.define('MyApp.user.view.Secure_show', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.SetSecure',
	title : '安全设置',
	layout : 'border',
	autoShow : true,
	modal : true,

	users : null,

	initComponent : function() {
		this.users = getUserInfo(-1);
		this.items = [ {
			border : false,
			region : 'north',
			title : '您的基本信息',
			layout : 'fit',
			flex : 2,
			defaults : {
				xtype : 'displayfield',
				margin : '5 0 5 20',
				labelAlign : "left",
				labelWidth : 100
			},
			layout : {
				type : 'vbox',
				align : 'left'
			},
			items : [ {
				fieldLabel : '昵称',
				margin : '5 5 5 25',
				value : this.users.nickName
			}, {
				xtype : 'panel',
				layout : 'hbox',
				border : false,
				defaults : {
					margin : '5 5 5 5'
				},
				items : [ {
					xtype : 'displayfield',
					fieldLabel : '绑定邮箱',
					width : 250,
					value : this.users.email,
					renderer : function(value) {
						if (!value)
							return "未绑定";
						else {
							return value;
						}
					}
				}, {
					xtype : 'button',
					id : 'btn_email_edit',
					text : '修改'
				} ]
			}, {
				xtype : 'panel',
				layout : 'hbox',
				border : false,
				defaults : {
					margin : '5 5 5 5'
				},
				items : [ {
					xtype : 'displayfield',
					fieldLabel : '绑定手机',
					width : 250,
					value : this.users.phone,
					renderer : function(value) {
						if (!value)
							return "未绑定";
						else {
							return value;
						}
					}
				}, {
					xtype : 'button',
					id : 'btn_phone_edit',
					text : '修改',
				} ]

			}, {
				xtype : 'panel',
				layout : 'hbox',
				border : false,
				defaults : {
					margin : '5 5 5 5'
				},
				items : [ {
					xtype : 'displayfield',
					fieldLabel : '密码',
					width : 250,
					value : '******'
				}, {
					xtype : 'button',
					id : 'btn_password_edit',
					text : '修改',
				} ]

			} ]
		}, {
			title : '您的安全服务',
			region : 'center',
			flex : 3,
			xtype : 'gridpanel',
			store : 'MyApp.user.store.ServiceStore',
			columns : [ {
				text : '类型',
				align : 'center',
				dataIndex : 'type',
				flex : 1,
			}, {
				text : '状态',
				align : 'center',
				dataIndex : 'state',
				flex : 1
			}, {
				text : '描述',
				dataIndex : 'description',
				flex : 3
			} ]
		} ];
		this.callParent(arguments);
	}
});
