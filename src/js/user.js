var userTitle = new Ext.Toolbar({
	dock: 'top',
	title: 'User Title'
});
var user = new Ext.Panel({
	title: 'User',
	html: 'User Card',
	cls: 'card card5',
	iconCls: 'user',
	cardSwitchAnimation:'pop',
	dockedItems:[userTitle]
});