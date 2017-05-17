Ext.define('MyApp.system.view.Role_detail', {
	extend : 'Ext.window.Window',
	alias : 'widget.DetailRole',
	requires : [ 'Ext.form.*', 'MyApp.system.model.RoleModel' ],

	title : '详细信息',
	layout : 'anchor',
	autoShow : true,
	modal : true,
	width : 400,
	height : 240,

	defaults : {
		margins : '5 5 5 5'
	},

	FunctionRecord : null,

	initComponent : function() {

		console.log(this.FunctionRecord);

		this.items = [ {

			layout : "anchor",
			anchor : "100% 100%",
			bodyPadding : '5 5 5 5',
			defaultType : 'displayfield',

			fieldDefaults : {
				labelAlign : 'right',
				anchor : "100%",
				labelWidth : 80,
			},

			items : [ {
				fieldLabel : '角色序号',
				value : this.FunctionRecord.data.id
			}, {
				fieldLabel : '角色名称',
				value : this.FunctionRecord.data.name
			}, {
				fieldLabel : '创建者',
				value : this.FunctionRecord.data.builder
			}, {
				fieldLabel : '创建时间',
				value : this.FunctionRecord.data.builTime
			}, ],
			buttons : [ {
				text : '确定',
				handler : function() {
					this.up("window").close();
				}
			} ]
		} ];
		this.callParent(arguments);
	}
});