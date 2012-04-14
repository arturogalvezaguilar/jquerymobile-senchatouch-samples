/**
 * Creamos la lista de contactos, heredamos de Ext.Panel
 */
ContactoApp.views.ContactoListView = Ext.extend(Ext.Panel, {
    /**
     * creamos una propiedad notesStore que almacenara los contactos
     */
    contactoStore: Ext.emptyFn,
    /**
     * creamos una propiedad que sera una instancia de una lista
     */
    contactosList: Ext.emptyFn,
    /**
     * Indicamos el tipo de distribucion o layout que tendran los componentes 
     */
    layout: 'fit',
    /**
     * Inicializamos los componentes de la interfaz
     */
    initComponent: function () {
        /**
         * Creamos el boton nuevo
         */
        this.newButton = new Ext.Button({
            text: 'Nuevo',
            ui: 'action',
            handler: this.onNewNote,
            scope: this
        });
        /**
         * Creamos la barra superior de la aplicacion
         */
        this.topToolbar = new Ext.Toolbar({
            title: 'Mis Contactos',
            items: [
                { xtype: 'spacer' },
                this.newButton
            ]
        });
        /**
         * Asignamos la barra al array que contiene los dock de la aplicacion
         */
        this.dockedItems = [this.topToolbar];
        /**
         * Creamos la lista que mostrara a nuestros contactos
         */
        this.contactosList = new Ext.List({
            store: this.contactoStore,
            grouped: true,
            emptyText: '<div style="margin:5px;">No notes cached.</div>',
            onItemDisclosure: true,
            itemTpl: '<div class="list-item-title">{nombre}</div>' +
                            '<div class="list-item-narrative">{telefono}</div>'

        });
        /**
         * Asignamos funcionalidad cuando se precione el icono de las listas,
         * llamamos al metodo onEditNote() pasamos como parametros el item (record) que representa
         * un contacto y el indice de la lista (posicion) 
         */
        this.contactosList.on('disclose', function (record, index, evt) {
            this.onEditNote(record, index);
        }, this),
        /**
         * Agregamos la lista al conjunto de items que componen la vista
         */
        this.items = [this.contactosList];
        /**
         * Llamamos al metodo que inicia los componentes de la clase padre y pasamos como parametro
         * esta clase (this)
         */
        ContactoApp.views.ContactoListView.superclass.initComponent.call(this);
    },
    /**
     * Invocamos al action (metodo) newnote del controlador contactoController
     */
    onNewNote: function () {
        Ext.dispatch({
            controller: ContactoApp.controllers.contactoController,
            action: 'newnote'
        });
    },
    /**
     * Invocamos al action (metodo) editnote del controlador contactoController
     */
    onEditNote: function (record, index) {
        Ext.dispatch({
            controller: ContactoApp.controllers.contactoController,
            action: 'editnote',
            note: record
        });
    },
    /**
     * Refrescamos la lista
     */
    refreshList: function () {
        this.contactosList.refresh();
    }
});