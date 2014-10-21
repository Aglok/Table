/**
 * Products controller
 * В таблице списка товаров, добавление, изменение, удаление товара 
 * Живой поиск товаров по всем полям
 */
Ext.define('SP.controller.Products', {
   extend: 'Ext.app.Controller',

   stores: ['Products'],
   models: ['Product'],
   views: [
   		'product.List',// Представление списка продуктов
   		'product.Edit',// Представление окна редактирования пользователя
   ],
	init: function(){
	   	this.control({
        	'viewport > productlist': {
        		itemdblclick: this.editProduct,//вызов окна редактирования
	       	},
	       	'productedit button[action=save]': {
	       		click: this.updateProduct//Изменение продукта
	       	},
	       	'productedit button[action=add]': {
	       		click: this.addProduct//Добавление нового продукта
	       	},
	       	'productedit button[action=delete]': {
	       		click: this.deleteProduct//Удаление продукта
	       	},	
	       	'viewport > livesearch': {
	       		render: this.change,//Удаление продукта
	       		render: this.pctChange//Удаление продукта
	       	}
	   	});
	},

    /**
     * Обработка двойного клика на строке списка.
     * Вгружаем данные полученные записи в форму.
     * @param {SP.model.Product} product Редактировать
     */
	  editProduct: function(grid, record) {

    	// Создаём экземпляр представления для редактирования продукта
    	var viewProductEdit = Ext.widget('productedit');

    	//В экземпляр представления подгружаются данные пользователя 
    	viewProductEdit.down('form').loadRecord(record); 
   	},
    /**
     * Обновление товара в списке товаров в Store
     * @param {SP.model.Product} product Обновить товара
     */
   	updateProduct: function(button){

   		var win = button.up('window'),
   		   	form = win.down('form'),
          //Доступ к данным объектам формы
   		  	data = form.getRecord();
          //Новые значения введённые в форму
		  	  values = form.getValues();
  		  	//Перобразуем в тип Number
  		  	values.price = eval(values.price);
  		  	values.quantity = eval(values.quantity);
          // Обновление записей
  	  		data.set(values);

  	   		win.close();

   		// Синхронизация хранилища после редактирования записи
   		this.getProductsStore().sync();
   	},

    /**
     * Добавление товара в список товаров в Store
     * @param {SP.model.Product} product Добавление товара
     */
   	addProduct: function(button){
   		var win = button.up('window');
   		form = win.down('form');
   		values = form.getValues();

		  //Преобразуем в тип Number
	  	values.price = eval(values.price);
	  	values.quantity = eval(values.quantity);

   		var store = this.getProductsStore();
      //Добавление значение из формы в объект Store
   		store.add(values);
   	},

    /**
     * Удаление товара из списка товаров в Store
     * @param {SP.model.Product} product Удаление товара
     */
   	deleteProduct: function(button){
   		var win = button.up('window');
   		form = win.down('form');
   		data = form.getRecord();
   		values = form.getValues();

		  //Преобразуем в тип Number
	  	values.price = eval(values.price);
	  	values.quantity = eval(values.quantity);

   		var store = this.getProductsStore();
      //Удаление объекта из Store
   		store.remove(data);
   	}
});