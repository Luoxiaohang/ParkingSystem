Ext
		.define(
				'MyApp.monitor.view.monitor_show',
				{
					extend : 'Ext.panel.Panel',
					title : '监控中心',
					alias : 'widget.MonitorCenter',
					requires : [ 'Ext.app.PortalPanel' ],
					layout : 'fit',
					items : [ {
						xtype : 'tabpanel',
						tabPosition : 'left',
						items : [
								{
									title : '区域一',
									xtype : 'portalpanel',
									autoScroll : true,
									defaults : {
										margin : '3 3 3 3'
									},
									items : [
											{
												defaults : {
													margin : '5 0 0 0'
												},
												items : [
														{
															border : false,
															closable : false,
															collapsible : false,
															height : 260,
															html : '<video width="350" height="255" '
																	+ 'src="resource/video/test.mp4"'
																	+ ' autoplay="autoplay" loop="loop" muted="muted">'
																	+ '</video>'
														},
														{
															border : false,
															closable : false,
															collapsible : false,
															height : 260
														} ]
											}, {
												defaults : {
													margin : '5 0 0 0'
												},
												items : [ {
													border : false,
													closable : false,
													collapsible : false,
													height : 260,
												}, {
													border : false,
													closable : false,
													collapsible : false,
													height : 260,
												} ]
											}, {
												defaults : {
													margin : '5 0 0 0'
												},
												items : [ {
													border : false,
													closable : false,
													collapsible : false,
													height : 260,
												}, {
													border : false,
													closable : false,
													collapsible : false,
													height : 260,
												} ]
											} ]
								}, {
									title : "test2",
								} ]
					} ]
				});
