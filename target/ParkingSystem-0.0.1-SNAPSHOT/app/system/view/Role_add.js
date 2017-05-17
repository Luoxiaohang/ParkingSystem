Ext.define('MyApp.system.view.Role_add', {
	extend : 'Ext.window.Window',
	alias : 'widget.AddRole',
	requires : [ 'Ext.form.*' ],

	title : '添加角色',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	border : false,
	width : 400,
	height : 200,
	padding : '20 5 0 5',
	defaults : {
		labelAlign : 'left',
		anchor : "98%",
		labelWidth : 70
	},

	SUCCESS : null,
	FAIL : null,

	items : [ {
		xtype : 'form',
		url : SYSTEM_CONTEXTPATH + '/Role/addRole',
		layout : "anchor",
		border : false,
		anchor : "100% 100%",
		fieldDefaults : {
			labelAlign : 'right',
			anchor : "98%",
			labelWidth : 60,
		},
		items : [ {
			xtype : 'combobox',
			fieldLabel : '角色类型',
			name : 'tag',
			readyOnly : true,
			allowBlank : false,
			store : {
				fields : [ 'id', 'tag' ],
				data : [ {
					id : 0,
					tag : '系统角色'
				}, {
					id : 1,
					tag : '社团角色'
				} ]
			},
			displayField : 'tag',
			valueField : 'id',
			emptyText : "请选择(必填)"
		}, {
			xtype : 'textfield',
			fieldLabel : '角色名称',
			allowBlank : false,
			name : 'name'
		} ],
		buttons : [ {
			text : '确定',
			handler : function() {
				var win = this.up('window');
				var form = this.up('form').getForm();
				if (form.isValid()) {
					form.submit({
						success : function(form, action) {
							win.SUCCESS("添加成功");
						},
						failure : function(form, action) {
							win.FAIL("添加失败");
						}
					});
				}
			}
		} ]
	} ]

});