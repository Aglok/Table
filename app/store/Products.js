Ext.define('SP.store.Products',{
	extend: 'Ext.data.Store',
		model : 'SP.model.Product',
		groupField: 'name', //группировать по полю
		autoLoad: true
});
