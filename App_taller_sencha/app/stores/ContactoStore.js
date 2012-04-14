/**
 * Registramos un store ContactoStore
 */
Ext.regStore('ContactoStore', {
    /**
     * Indicamos instancias de que modelo tendra
     */
    model: 'ContactoModel',
    /**
     * indicamos por que campo se ordenara, cada objeto es un orden y su sentido, y se pueden
     * establecer mas de un campo de orden
     */
    sorters: [{
        property: 'nombre',
        direction: 'DESC'
    }],
    /**
     * Aqui por lo general tenemos las operaciones CRUD (create,read,update,delete), indicamos el origen de donde tendremos
     * los datos (url), el tipo (local o remoto) de origen, definimos las operaciones para las 4 operaciones CRUD,
     * definimos un lector que sera el que defina como se buscara y cargara los datos
     */
    proxy: {
        type: 'ajax', // el tipo puede ser ajax, scripttag, localstorage, sessionstorage, memory
        url: 'contactos.php', //url del recurso desde donde consultara para obtener los datos
        /**
         * metodo que se invoca cuando se realiza una operacion de insercion y se sincroniza el store 
         */
        create: function (operation, callback, scope) {
            var contacto = operation.getRecords()[0].data;
            Ext.Ajax.request({
                url: this.url,
                params: {
                    contacto: Ext.encode(contacto),
                    action : 'create'
                },
                success: function(response, opts) {

                }
            });
        },
        /**
         * metodo que se invoca cuando se realiza una operacion de actualizacion y se sincroniza el store 
         */
        update: function (operation, callback, scope) {
            var contacto = operation.getRecords()[0].data;
            Ext.Ajax.request({
                url: this.url,
                params: {
                    contacto: Ext.encode(contacto),
                    action : 'update'
                },
                success: function(response, opts) {

                }
            });
        },
        /**
         * metodo que se invoca cuando se realiza una operacion de borrado y se sincroniza el store 
         */
        destroy: function (operation, callback, scope) {
            var contacto = operation.getRecords()[0].data;
            Ext.Ajax.request({
                url: this.url,
                params: {
                    contacto: Ext.encode(contacto),
                    action : 'delete'
                },
                success: function(response, opts) {

                }
            });
        },
        /**
         * configuramos el lector de datos, que tipo de datos procesara (type)
         * y que clave (root) sera la que tenga los datos que seran pasados al modelo automaticamente
         */
        reader : {
            type : 'json',
            root : 'contactos'
        }
    },
    /**
     * Indicamos que los datos del modelo se agrupe por la primera letra del campo nombre
     */
    getGroupString: function (record) {
        if (record && record.data.nombre) {
            return record.get('nombre')[0];
        } else {
            return '';
        }
    }
});
/**
 * Almacenamos el store previamente creado al namespace stores de nuestra aplicacion
 */
ContactoApp.stores.contactoStore = Ext.StoreMgr.get('ContactoStore');
