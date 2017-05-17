Ext.define('MyApp.mainView.NavAccordion', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.navAccordion',
	requires : [ 'Ext.layout.container.Accordion', 'Ext.data.TreeStore',
			'Ext.tree.Panel' ],
	width : 220,
	layout : {
		type : 'accordion',
		animate : true
	},
	listeners : {
		render : {
			fn : function(list) {
				showSysMenu();
			}
		}
	}
});

function showSysMenu() {
	Ext.getBody().mask('正在加载系统菜单....');
	Ext.Ajax.request({
		url : SYSTEM_CONTEXTPATH + "/modules/getUserModuleList",
		method : "get",
		callback : function(options, success, response) {
			addTree(Ext.JSON.decode(response.responseText));
		}
	});
}

function addTree(data) {
	var data = data.list;// 根目录的数据
	var accrodionMain = Ext.ComponentQuery.query('navAccordion')[0];
	accrodionMain.removeAll("Ext.tree.Panel");
	var tabMain = Ext.ComponentQuery.query('tabContent')[0];
	Ext.getBody().unmask();
	for (var i = 0; i < data.length; i++) {
		accrodionMain.add(Ext.create("Ext.tree.Panel", {
			id : "tree-" + i,
			title : data[i].name,
			useArrows : true,
			rootVisible : false,
			iconCls : 'myIcon-sys_config',
			viewConfig : {
				loadingText : "正在加载..."
			},
			store : createStore(data[i].id),
			listeners : {
				itemclick : function(view, node) {
					if (node.isLeaf()) { // 判断是否是根节点
						var tabId = "tab-" + node.data.viewName;
						var newTab = tabMain.getComponent(tabId);
						var panel = Ext.create(node.data.viewName, {
							id : tabId,
							title : node.data.text,
							closable : true,
							sectionIndex : view.ownerCt.id.substring(5),
							path : node.getPath()
						}).show();
						if (newTab) {
							if (newTab.store) {
								newTab.store.reload();
							}
							tabMain.remove(newTab);
						}
						tabMain.add(panel);
						tabMain.setActiveTab(panel);
					}
				}
			}
		}));
	}
	accrodionMain.doLayout();
}

function createStore(moduleId) {
	return Ext.create("Ext.data.TreeStore", {
		defaultRootId : moduleId,
		fields : [ {
			name : "id",
			type : "integer"
		}, {
			name : "text",
			type : "string"
		}, {
			name : "viewName",
			type : "string"
		}, {
			name : "leaf",
			type : "boolean"
		} ],
		proxy : {
			type : "ajax",
			url : SYSTEM_CONTEXTPATH + "/function/getModuleFunctionList",
			actionMethods : {
				read : 'POST'
			},
			reader : {
				type : 'json'
			}
		},
		clearOnLoad : true,
		nodeParam : "moduleId"
	});
};