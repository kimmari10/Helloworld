var msgType = 1;
function  viewData(arg){
	if(msgType== 2){
		Ext.Msg.alert("Alert title", '',Ext.emptyFn);
	}else if (msgType== 1){
		Ext.Msg.prompt('Name','Please enter your name:',function(button,inputText){
			alert('Clicked '+button+"\nInput Text is "+inputText);
		});
	}else {
		Ext.Msg.confirm("Confirmation", "Are you sure you want to do that?", function(button){
			alert('Confirmation Clicked '+button);
		});
	}
	msgType =(msgType+1)%3
};

var itemlistTitle = new Ext.Toolbar({
	dock: 'top',
	title: 'About Title'
});

var itemlist = new Ext.Panel({
	title: 'About',
	iconCls: 'info',
	cls: 'card card1',
	cardSwitchAnimation: 'wide',
	dockedItems:[itemlistTitle],			

	items: [{
		width: Ext.is.Phone ? undefined : "100%",
		height: "100%",
		xtype: 'list',
		store: ListStore,
		itemTpl: '<div class="contact" onclick="viewData(\'1\')"><strong>{firstName}</strong> {lastName}</div>', 
		//onItemDisclosure: viewData // 클릭용 아이콘 생성시
		// 아래는 아이콘 없이 바로 동작.
		listeners : {  
			itemtap: viewData
		}
	}]
});