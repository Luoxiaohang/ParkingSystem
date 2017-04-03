Ext
		.define(
				'MyApp.mainView.Banner',
				{
					extend : 'Ext.panel.Panel',
					xtype : 'banner',
					layout : 'border',
					bodyStyle : {
						background : 'url(resource/img/index_title_bg.jpg)',
						backgroundSize : '100% 100%',
					},
					items : [
							{
								xtype : 'displayfield',
								id : 'user_name',
								region : 'east',
								padding : '7 50 0 0',
								value : "<h5>"+"admin"+"</h5>",
								labelSeparator : ""
							},
							{
								xtype : 'displayfield',
								region : 'east',
								padding : '12 50 0 0',
								value : '<a href="/ParkingSystem/User/loginout" style="color:#FFFFFF;">退出</a>',
								labelSeparator : ""
							} ]
				});
