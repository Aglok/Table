/**
 * Creates a new Person.
 * @class 
 */
Ext.application({
  requires: ['Ext.container.Viewport'],
  name: 'SP',

  appFolder: 'app',

  controllers: [
     'Products'
   ],
  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: 'border',
      items: [
          { 
            region: 'center', 
            xtype: 'productlist'
          },          
      ]
    });
  }
});