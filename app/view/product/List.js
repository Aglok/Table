/**
 * A GridPanel class с поддержкой live search
 * 
 */
Ext.define('SP.view.product.List' ,{
	extend: 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.productlist',

	title: 'Все товары',

	store: 'Products',

	viewConfig: {
        stripeRows: true
    },
    columnLines: true,

	initComponent: function(){

		this.plugins = [
        	Ext.create('Ext.grid.plugin.CellEditing', {
            	clicksToEdit: 1
        	})
    	],

        this.features = [{
            id: 'group',
            ftype: 'groupingsummary',
            groupHeaderTpl: '{name}',
            hideGroupedHeader: true,
            enableGroupingMenu: false
        }],
		this.columns = [
			{
				header: 'Name', 
				dataIndex: 'name', 
				flex: 1, 
				summaryType: 'count',
			   /**
				* Представление колонки name
				* @param {Number} value значение в ячейке
				*/
				summaryRenderer: function(value) {
					console.log(Ext.typeOf(value));
            		return ((value === 0 || value > 1) ? '(' + value + ' Продуктов)' : '(1 Продукт)');
        		}					
			},
			{
				header: 'Quantity', 
				dataIndex: 'quantity', 
				flex: 1,
				summaryType: 'sum',
				minValue: 0,

				renderer: function(value){
            		return value + ' упаковок';
        		},

        		summaryRenderer: function(value) {
            		return value + ' упаковок';
        		}                
			},
			{
				header: 'Price', 
				dataIndex: 'price',
				flex: 1,
            	summaryType: 'sum'                
			},
			{
				header: 'Total',
			  /**
				* Представление колонки total
				* @param {Object} value значение в ячейке
				* @param {Object} metaData задаём свойства аттрибуты или стиль ячейке
				* @param {SP.Model.Product} product - берём значения из Store
				*/ 
				renderer: function(value, metaData, record) {
            		return record.get('quantity') * record.get('price');
       			},
       		  /**
				* Представление колонки total, общая сумма зsummaryType
				* @param {SP.Model.Product} product - берём значения из Store
				*/
       			summaryType: function(records){
            		var i = 0, length = records.length, total = 0, record;

	                for (; i < length; ++i) {
	                    record = records[i];
	                    total += record.get('quantity') * record.get('price');
	                }

           		 	return total;
        		},

				dataIndex: 'total', 
				flex: 1
			}
		];

		this.callParent(arguments);
	}
});