Ext.define('MyApp.system.view.Role_show', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.ShowRole',
	requires : [ 'Ext.grid.*', 'Ext.data.*', 'Ext.util.*',
			'Ext.toolbar.Paging', 'Ext.ux.PreviewPlugin', 'Ext.ModelManager',
			'Ext.tip.QuickTipManager' ],
	title : '角色列表',
	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	autoShow : true,
	items : [ {
		xtype : 'gridpanel',
		id : 'role_panel',
		title : '角色列表',
		store : "MyApp.system.store.RoleStore",
		flex : 1,
		margin : '3 3 3 3',
		border : 3,
		dockedItems : [ {
			xtype : 'toolbar',
			dock : 'top',
			items : [ {
				text : '新建',
				tooltip : '添加角色',
				iconCls : 'myIcon-add',
				id : 'btn_role_add',
			}, {
				text : '编辑',
				tooltip : '编辑角色',
				iconCls : 'myIcon-edit',
				id : 'btn_role_edit',
			}, {
				text : '详细',
				tooltip : '查看详细',
				iconCls : 'myIcon-detail',
				id : 'btn_role_detail',
			}, {
				text : '删除',
				tooltip : '删除角色',
				iconCls : 'myIcon-del',
				id : 'btn_role_delete',
			} ]
		} ],
		columns : [ {
			header : '序号',
			dataIndex : 'id',
			align : 'center',
			flex : 1
		}, {
			header : '模块名称',
			dataIndex : 'name',
			align : 'center',
			flex : 3
		}, {
			header : '角色类型',
			dataIndex : 'tag',
			align : 'center',
			flex : 3,
			renderer : function(value) {
				switch (value) {
				case 0:
					return "系统角色";
				case 1:
					return "社团角色";
				}
			}
		} ]
	}, {
		xtype : 'gridpanel',
		id : 'role_function',
		title : '角色对应功能',
		flex : 1,
		margin : '3 3 3 0',
		store : "MyApp.system.store.RoleFunctionStore",
		border : 3,
		dockedItems : [ {
			xtype : 'toolbar',
			dock : 'top',
			items : [ {
				text : '添加',
				tooltip : '添加功能',
				iconCls : 'myIcon-add',
				id : 'btn_role_function_add'
			}, {
				text : '删除',
				tooltip : '删除功能',
				iconCls : 'myIcon-del',
				id : 'btn_role_function_delete'
			} ]
		}, {
			xtype : 'pagingtoolbar',
			store : "MyApp.system.store.RoleFunctionStore",
			emptyMsg : "没有记录",
			dock : 'bottom',
			displayInfo : true
		} ],
		columns : [ {
			header : '序号',
			dataIndex : 'id',
			align : 'center',
			flex : 1
		}, {
			header : '模块名称',
			dataIndex : 'moduleName',
			align : 'center',
			flex : 3
		}, {
			header : '功能名称',
			dataIndex : 'text',
			align : 'center',
			flex : 3
		} ]

	} ]
});
