var downloadTitle = new Ext.Toolbar({
	dock: 'top',
	title: 'Download Title'
});

var download = new Ext.Panel({
	title: 'Downloads',
	id: 'tab3',
	html: 'Downloads Card',
	badgeText: 'Text can go here too, but it will be cut off if it is too long.',
	cls: 'card card3',
	iconCls: 'download',
	cardSwitchAnimation:'fade',
	dockedItems:[downloadTitle]
});