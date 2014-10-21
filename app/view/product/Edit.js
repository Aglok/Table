//Представление окна редактирования при двойном нажатии на строку
Ext.define('SP.view.product.Edit',{
	extend: 'Ext.window.Window',
	alias: 'widget.productedit',

	//Создадим окно редактирования товара

	title: 'Редактирование товара',
	layout: 'fit',
	autoShow: true,
	width: 400,

	initComponent: function(){
		//Поля формы
		this.items = [
			{
				xtype: 'form',
				items: [
					{
						xtype: 'textfield',
						name: 'name',
						fieldLabel: 'Название продукта'
					},
					{
						xtype: 'numberfield',
						name: 'quantity',
						fieldLabel: 'Количество',
						minValue: 0
					},
					{
						xtype: 'textfield',
						name: 'price',
						fieldLabel: 'Цена'
					}
				] 
			}
		];
		//Кнопки действия
		this.buttons = [
			{
				text: 'Добавить',
				action:'add'
			},
			{
				text: 'Удалить',
				action:'delete'
			},
			{
				text: 'Сохранить',
				action:'save'
			},
			{
				text: 'Выход',
				scope: this,
				handler: this.close
			}
		];

	this.callParent(arguments);

	}

});