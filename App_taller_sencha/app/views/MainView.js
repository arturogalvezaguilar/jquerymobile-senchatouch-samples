/**
 * Definimos la Vista principal de la aplicacion
 */
ContactoApp.views.MainView = Ext.extend(Ext.Panel, {
    /**
     * indicamos que va a ocupar toda la pantalla del dispositivo
     */
    fullscreen: true,
    /**
     * indicamos que tipo de distribucion tendra (layout)
     */
    layout: 'card',
    /**
     * el tipo de animacion que tendra al pasar de un vista a otro
     */
    cardSwitchAnimation: 'slide',
    /**
     * Metodo con el que inicializamos los componentes de la vista
     */
    initComponent: function () {
        /**
         * Copiamos la configuracion (notesListView,noteEditorView) y lo aplicamos a ContactoApp.views
         */
        Ext.apply(ContactoApp.views, {
            contactosListView: new ContactoApp.views.ContactoListView({ contactoStore: ContactoApp.stores.contactoStore }),
            contactosEditorView: new ContactoApp.views.ContactosEditorView()
        });
        /**
         * creamos los componentes de la vista
         */
        this.items = [
            ContactoApp.views.contactosListView,
            ContactoApp.views.contactosEditorView
        ]
        /**
         * Invocamos al metodo que inicializa los componentes de la clase padre
         * y pasamos como parametro esta clase
         */
        ContactoApp.views.MainView.superclass.initComponent.call(this);
        /**
         * indicamos que cando el compoente termine de renderizar cargue los datos del store
         * en la vista
         */
        this.on('render', function () {
            ContactoApp.stores.contactoStore.load(
                {
                    params : {
                        action : 'read'
                    }
                }
            );
        });
    }
});
