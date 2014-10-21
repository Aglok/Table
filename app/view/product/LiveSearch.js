/**
 * A GridPanel class с поддержкой live search
 * @author Aglok
 */
Ext.define('SP.view.product.LiveSearch',{
	extend: 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.livesearch',
	requires: [    
		'Ext.grid.*',
	    'Ext.data.*',
	    'Ext.util.*',
	    'Ext.tip.QuickTipManager',
	    'Ext.ux.LiveSearchGridPanel'
	    ],
	//Создадим окно редактирования товара

	title: 'Поиск по товарам',

    store :  'Products',

	viewConfig: {
        stripeRows: true
    },
    columnLines: true,
    width: 200,
    height: 500,
    
	initComponent: function() {
        var me = this;
        	me.columns = [
	            {
	                header   : 'Name',
	                flex     : 1,
	                sortable : false, 
	                dataIndex: 'name'
	            },	            
	            {
	                header   : 'Quantity',
	                flex     : 1,
	                sortable : false, 
	                dataIndex: 'quantity'
	            },	            
	            {
	                header   : 'Price',
	                flex     : 1,
	                sortable : false, 
	                dataIndex: 'price'
	            },	            
	            {
	                header   : 'Total',
	                flex     : 1,
	                sortable : false, 
	                dataIndex: 'total'
	            }

	        ], 

        me.callParent(arguments);
    }

});