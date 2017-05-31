Ext.define('MyApp.monitor.view.monitor_show', {
	extend : 'Ext.tab.Panel',
	title : '监控中心',
	alias : 'widget.MonitorCenter',
	requires : [ 'Ext.app.PortalPanel' ],
	layout : 'fit',
	tabPosition : 'left',
	defaults : {
		margin : '3 3 3 3'
	},
	initComponent : function() {
		var zoneStore = Ext.create("MyApp.berth.store.ZoneStore");
		zoneStore.load({
			callback : function(records) {
				for ( var i = 0; i < records.length; i++) {
					// 初始化区域
					var zonePanel = Ext.create("Ext.app.PortalPanel", {
						title : records[i].data.name,
						id : records[i].data.id,
						border:false,
						listeners:{
							beforerender:function( panel, eOpts ){
								var monitorStore=Ext.create("MyApp.monitor.store.MonitorStore");
								monitorStore.proxy.extraParams.zoneId = this.id;
								monitorStore.load({callback:function(monitorRecords){
									for ( var k = 0; k < 3; k++) {
										var groupPanel = Ext.create("Ext.panel.Panel",{border:false});
										for ( var m = 2*k; m < 2*k+2 ; m++) {
											var url="";
											if(monitorRecords[m]){
												url=monitorRecords[m].data.url;
											}
											var monitorPanel = Ext.create("Ext.panel.Panel", {
												closable : false,
												collapsible : false,
												height : 255,
												listeners: {
													render: function(c) {
										                c.body.on('click', function(panel) { 
										                	Ext.create('Ext.window.Window',{
										                		width: 900,
										                	    height: 600,
										                	    autoShow:true,
										                	    border:false,
										                	    resizable:false,
										                	    items:[{ 
											                	    height: 600,
											                	    border:false,
										                	    	html : '<video width="900" height="600"'
																	+ 'src="'+panel.target.currentSrc+'"'
																	+ ' autoplay="autoplay" loop="loop" muted="muted">'
																	+ '</video>'}]
										                	    });
										                    });
									                },
										            scope: this
												},
												html : '<video width="380" height="260" '
													+ 'src="'+url+'"'
													+ ' autoplay="autoplay" loop="loop" muted="muted">'
													+ '</video>',
											});
											groupPanel.add(monitorPanel);
										}
										panel.add(groupPanel);
									}
								}});
							}
						}
					});
					this.add(zonePanel);
				}
			},
			scope : this
		})
		this.callParent(arguments);
	}
});
