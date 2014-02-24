/**
* @param comp 입력 value 를 가진 Dom Object
* @param v2   입력 value
*/
function changeFN(comp, v2){
	if(comp.xtype == 'datepickerfield') {
		localStorage.setItem(comp.name,v2.toUTCString());
	}else if(comp.xtype == 'checkboxfield'){
		localStorage.setItem(comp.name,comp.isChecked());
	}else {
		localStorage.setItem(comp.name,comp.getValue());
	}
};


function getValue1(comp){
	if(comp.xtype == 'datepickerfield') {
		comp.setValue(new Date(localStorage.getItem(comp.name)));
	}else if(comp.xtype == 'checkboxfield'){
		comp.setChecked(localStorage.getItem(comp.name));
	}else {
		comp.value = localStorage.getItem(comp.name);
	}
};

var settingTitle = new Ext.Toolbar({
	dock: 'top',
	title: 'Setting Title'
});

var setting = new Ext.Panel({
	title: 'Settings',
	cls: 'card card4',
	iconCls: 'settings',
	dockedItems:[settingTitle],
	cardSwitchAnimation:'wipe',
	scroll:'vertical',
	items: [
		{
			id: 'filedset1',
			xtype: 'fieldset',
			title: 'Personal Info',
			instructions: 'Please enter the information above.',
			defaults: {
				labelWidth: '35%'
			},
			items: [{
				xtype: 'textfield',
				name: 'name',
				id: 'name1',
				label: 'Name',
//				placeHolder: 'Tom Roy',
				autoCapitalize : true,
				required: true,
				useClearIcon: true,
				listeners : {
					beforerender: getValue1,
					change: changeFN
				}
                 
		
			}, {
				xtype: 'passwordfield',
				name: 'password',
				label: 'Password',
				useClearIcon: true,
				listeners : {
					beforerender: getValue1,
					change: changeFN
				}
			}, {
				xtype: 'emailfield',
				name: 'email',
				label: 'Email',
				placeHolder: 'me@sencha.com',
				useClearIcon: true,
				listeners : {
					beforerender: getValue1,
					change: changeFN
				}
			}, {
				xtype: 'urlfield',
				name: 'url',
				label: 'Url',
				placeHolder: 'http://sencha.com',
				useClearIcon: true,
				listeners : {
					beforerender: getValue1,
					change: changeFN
				}
			}, {
				xtype: 'checkboxfield',
				name: 'cool',
				label: 'Cool',
				listeners : {
					beforerender: getValue1,

					check: changeFN,
					uncheck: changeFN
				}
			}, {
				xtype: 'datepickerfield',
				name: 'birthday',
				label: 'Birthday',
				picker: { yearFrom: 1900 },
				listeners : {
					beforerender: getValue1,
					select:changeFN//,
					//change: changeFN
				}
			}, {
				xtype: 'selectfield',
				name: 'rank',
				label: 'Rank',
				options: [{
					text: 'Master',
					value: 'master'
				}, {
					text: 'Journeyman',
					value: 'journeyman'
				}, {
					text: 'Apprentice',
					value: 'apprentice'
				}],
				listeners : {
					beforerender: getValue1,
					change: changeFN
				}
			}, {
				xtype: 'hiddenfield',
				name: 'secret',
				value: false				
			}, {
				xtype: 'textareafield',
				name: 'bio',
				label: 'Bio',
				listeners : {
					beforerender: getValue1,
					change: changeFN
				}
			}]
		},
		{
			
			id: 'filedset2',
			xtype: 'fieldset',
			title: 'Slider Info',
			defaults: {
				labelAlign: 'right'
			},
			items: [{
				xtype: 'sliderfield',
				name: 'value',
				label: 'Value',
				minValue: 0,
				maxValue: 10,
				listeners : {
					beforerender: getValue1,
					change: changeFN
				}
			}, {
				xtype: 'togglefield',
				name: 'enable',
				label: 'Enable',
				minValue: 0,
				maxValue: 1, 
				listeners : {
					beforerender: getValue1,
					change: changeFN
				}
			}]
			
		}
	]	
});