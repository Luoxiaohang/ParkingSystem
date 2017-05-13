Ext.define('MyApp.chart.view.BerthRateChart',
		{
			extend : 'Ext.chart.Chart',
			alias : 'widget.BerthRateChart',
			id : 'BerthRateChart',
			store : "MyApp.berth.store.ZoneStore",
			animate : true,
			style : 'background:#fff',
			shadow : false,
			width : 450,
			height : 400,
			axes : [ {
				type : 'Numeric',
				position : 'left',
				fields : [ 'useRate' ],
				label : {
					renderer : Ext.util.Format.numberRenderer('0,0')
				},
				title : '使用比例',
				grid : true,
				minimum : 0
			}, {
				type : 'Category',
				position : 'bottom',
				fields : [ 'id' ],
				title : '区域编号'
			} ],
			series : [ {
				type : 'column',
				axis : 'left',
				highlight : true,
				tips : {
					trackMouse : true,
					width : 140,
					height : 28,
					renderer : function(storeItem, item) {
						this.setTitle(storeItem.get('id') + ': '
								+ storeItem.get('useRate') + ' %');
					}
				},
				label : {
					display : 'insideEnd',
					field : 'useRate',
					renderer : Ext.util.Format.numberRenderer('0'),
					orientation : 'horizontal',
					color : '#333'
				},
				xField : 'id',
				yField : 'useRate',
				renderer : function(sprite, record, attr, index, store) {
					var fieldValue = Math.random() * 20 + 10;
					var value = (record.get('useRate') >> 0) % 5;
					var color = [ 'rgb(213, 70, 121)', 'rgb(44, 153, 201)',
							'rgb(146, 6, 157)', 'rgb(49, 149, 0)',
							'rgb(249, 153, 0)' ][value];
					return Ext.apply(attr, {
						fill : color
					});
				}
			} ]
		});
