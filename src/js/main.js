 Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
        var panel = new Ext.TabPanel({
			tabBar: {
				dock: 'bottom',
				ui: 'light',
				layout: {
					pack: 'center'
				}
			},
			fullscreen: true, 
			cardSwitchAnimation: 'slide',//'fade', 'slide', 'flip', 'cube', 'pop', 'wipe'
			items: [itemlist, favorite,  download, setting, user ]
		});
    }
});
 
 