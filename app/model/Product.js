//Определение экземпляра класса Model
Ext.define('SP.model.Product',{
	extend: 'Ext.data.Model',
	fields: ['name', // название товара
			'quantity',//количество
			'price',//цена
			'total'//общая сумма
			],

	proxy: {
		type: 'ajax',
		api: {
			read: 'data/products.json',
			update: 'data/updateProducts.json'// Псевдо-сервер, чтобы не было 404
		},
		//url: 'data/products.json',
		reader: {
			type: 'json',
			root: 'products',// коневой элемент в json
			successProperty: 'success',
		},

	}
});
