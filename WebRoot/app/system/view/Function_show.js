Ext.define('MyApp.system.view.Function_show', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.ShowFunction',
	title : '功能列表',
	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	autoShow : true,
	items : [ {
		xtype : 'gridpanel',
		title : '模块中心',
		id : 'module_panel',
		layout : 'fit',
		margin : '3 3 3 3',
		flex : 1,
		store : "MyApp.system.store.ModuleStore",
		dockedItems : [ {
			xtype : 'toolbar',
			dock : 'top',
			items : [ {
				text : '新建',
				tooltip : '新建模块',
				iconCls : 'myIcon-add',
				id : 'btn_modules_add',
			}, {
				text : '编辑',
				tooltip : '编辑模块',
				iconCls : 'myIcon-edit',
				id : 'btn_modules_edit',
			}, {
				text : '删除',
				tooltip : '删除模块',
				iconCls : 'myIcon-del',
				id : 'btn_modules_delete',
			} ]
		} ],
		columns : [ {
			header : '序号',
			dataIndex : 'id',
			width : 80,
			align : 'center'
		}, {
			header : '模块名称',
			dataIndex : 'name',
			width : 200,
			align : 'center'
		} ]
	}, {
		xtype : 'gridpanel',
		title : '功能中心',
		margin : '3 3 3 0',
		id : 'module_function_panel',
		store : "MyApp.system.store.ModuleFunctionStore",
		flex : 3,
		layout : 'fit',
		dockedItems : [ {
			xtype : 'toolbar',
			dock : 'top',
			items : [ {
				text : '新建',
				iconCls : 'myIcon-add',
				tooltip : '新建功能',
				id : 'btn_function_add'
			}, {
				text : '编辑',
				tooltip : '编辑功能',
				iconCls : 'myIcon-edit',
				id : 'btn_function_edit'
			}, {
				text : '详细',
				tooltip : '查看详细',
				iconCls : 'myIcon-detail',
				id : 'btn_function_detail'
			}, {
				text : '删除',
				tooltip : '删除功能',
				iconCls : 'myIcon-del',
				id : 'btn_function_delete'
			} ]
		} ],

		columns : [ {
			header : '序号',
			dataIndex : 'id',
			width : 100,
			align : 'center'
		}, {
			header : '功能名称',
			dataIndex : 'text',
			width : 120,
			align : 'center'
		}, {
			header : '所属模块',
			dataIndex : 'moduleName',
			align : 'center',
			width : 200
		}, {
			header : '父功能名称',
			dataIndex : 'parentName',
			align : 'center',
			width : 100,
			renderer : function(value) {
				if (value)
					return value;
				else
					return "无";
			}
		}, {
			header : '界面名称',
			dataIndex : 'viewName',
			align : 'center',
			width : 330
		} ]
	} ]
});
