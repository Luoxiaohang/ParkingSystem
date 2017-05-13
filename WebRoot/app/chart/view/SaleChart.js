Ext.define('MyApp.chart.view.SaleChart',
		{
			extend : 'Ext.chart.Chart',
			alias : 'widget.SaleChart',
			id : 'SaleChart',
			store : "MyApp.chart.store.SaleStore",
			animate : true,
			style : 'background:#fff',
			shadow : false,
			width : 450,
			height : 400,
			axes : [ {
				type : 'Numeric',
				position : 'left',
				fields : [ 'data' ],
				label : {
					renderer : Ext.util.Format.numberRenderer('0,0')
				},
				title : '销售额',
				grid : true,
				minimum : 0
			}, {
				type : 'Category',
				position : 'bottom',
				fields : [ 'month' ],
				title : '月份'
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
						this.setTitle(storeItem.get('month') + ': '
								+ storeItem.get('data') + ' 千元');
					}
				},
				label : {
					display : 'insideEnd',
					field : 'data',
					renderer : Ext.util.Format.numberRenderer('0'),
					orientation : 'horizontal',
					color : '#333'
				},
				xField : 'month',
				yField : 'data',
				renderer : function(sprite, record, attr, index, store) {
					var fieldValue = Math.random() * 20 + 10;
					var value = (record.get('data') >> 0) % 5;
					var color = [ 'rgb(213, 70, 121)', 'rgb(44, 153, 201)',
							'rgb(146, 6, 157)', 'rgb(49, 149, 0)',
							'rgb(249, 153, 0)' ][value];
					return Ext.apply(attr, {
						fill : color
					});
				}
			} ]
		});
