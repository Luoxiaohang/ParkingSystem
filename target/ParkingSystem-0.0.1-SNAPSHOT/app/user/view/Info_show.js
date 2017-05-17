Ext.define('MyApp.user.view.Info_show', {
	extend : 'Ext.form.Panel',
	alias : 'widget.ShowUserInfo',
	title : '基本信息',
	url : SYSTEM_CONTEXTPATH + '/User/updateUserInfo',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	defaults : {
		margin : '30 0 0 0'
	},
	dockedItems : [ {
		xtype : 'toolbar',
		items : [ {
			text : '保存',
			tooltip : '保存修改',
			iconCls : 'myIcon-save',
			margins : '0 5 0 5',
			id : 'btn_info_edit',
			handler : function() {
				var form = this.up('form').getForm();
				if (form.isValid()) {
					form.submit({
						success : function(form, action) {
							Ext.Msg.alert('成功', "修改成功");
						},
						failure : function(form, action) {
							Ext.Msg.alert('Failed', "修改失败");
						}
					});
				}
			}
		} ]
	} ],

	users : null,

	initComponent : function() {
		this.users = getUserInfo(-1);
		var birthday = new Date(this.users.birthday).toString();
		this.items = [ {
			anchor : '80% 100%',
			border : false,
			defaults : {
				xtype : 'textfield',
				labelAlign : "left",
				margin : '20 0 0 0',
				labelWidth : 50,
				allowBlank : false,
				width : 300
			},
			layout : {
				type : 'vbox',
				align : 'center'
			},
			items : [ {
				name : 'id',
				value : this.users.id,
				hidden : true
			}, {
				fieldLabel : '账号',
				name : 'account',
				value : this.users.account,
				readOnly : 'true'
			}, {
				fieldLabel : '姓名',
				name : 'nickName',
				value : this.users.nickName
			}, {
				xtype : 'combobox',
				fieldLabel : '性别',
				name : 'gender',
				store : {
					fields : [ 'id', 'gender' ],
					data : [ {
						id : 1,
						gender : '男'
					}, {
						id : 0,
						gender : '女'
					} ]
				},
				displayField : 'gender',
				valueField : 'id',
				value : this.users.gender
			}, {
				fieldLabel : '地址',
				name : 'address',
				value : this.users.address
			}, {
				fieldLabel : 'Q&nbsp;&nbsp;Q',
				name : 'QQ',
				regex : /^\d+$/,
				regexText : 'QQ号码输入错误',
				value : this.users.qq
			}, {
				xtype : 'datefield',
				name : 'birthdayTemp',
				fieldLabel : '生日',
				value : Ext.util.Format.date(birthday)
			} ]
		} ];
		this.callParent(arguments);
	}
});
