var favoriteTitle = new Ext.Toolbar({
	dock: 'top',
	title: 'Favorite Title'
});

var favorite = new Ext.Panel({
	title: 'Favorites',
	html: 'Favorites Card',
	iconCls: 'favorites',
	cls: 'card card2',
	//badgeText: '4',
	cardSwitchAnimation:'cube',
	dockedItems:[favoriteTitle]
});