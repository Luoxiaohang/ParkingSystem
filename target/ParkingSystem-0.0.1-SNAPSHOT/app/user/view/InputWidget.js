Ext.define('MyApp.user.view.InputWidget', {
	extend : 'Ext.window.Window',
	alias : 'widget.InputWidget',
	layout : 'anchor',
	autoShow : true,
	height : 200,
	width : 300,
	modal : true,

	title : null,
	tip : null,
	regex : null,
	regexText : null,

	url : null,
	parameterName : null,
	SUCCESS : null,
	FAILURE : null,

	defaults : {
		xtype : 'textfield',
		padding : '20 0 0 20',
		anchor : "90% 57%",
		labelAlign : 'top',
		allowBlank : false
	},

	initComponent : function() {
		var state = 1;
		this.items = [ {
			regex : this.regex,
			regexText : this.regexText,
			fieldLabel : this.tip,
			inputType : this.inputType,
			name : this.parameterName,
			listeners : {
				change : function(field, value) {
					var result = value.replace(this.regex, "")
					if (value && value.length != 0 && result.length == 0) {
						Ext.getCmp("InputWidget_submit").setDisabled(false);
					} else {
						Ext.getCmp("InputWidget_submit").setDisabled(true);
					}
				}
			}
		} ];

		this.buttons = [ {
			text : "重置",
			handler : function() {
				this.up('window').down('textfield').reset();
			}
		}, {
			text : "提交",
			id : 'InputWidget_submit',
			disabled : true,
			handler : function() {
				var win = this.up('window');
				value = this.up('window').down('textfield').value;
				Ext.Ajax.request({
					url : win.url,
					method : 'POST',
					params : {
						key : win.parameterName,
						value : value
					},
					success : function(response) {
						var result = Ext.JSON.decode(response.responseText);
						if (result.success) {
							win.SUCCESS(value);
						} else {
							win.FAILURE();
						}
					},
					failure : function() {
						win.FAILURE();
					}
				});
			}
		} ];
		this.callParent(arguments);
	}
});
