/**
 * Registramos el controlador ContactoController
 */
Ext.regController('ContactoController', {
    /**
     * Metodo que invocaremos al inicio de nuestra aplicacion, se encargara de mostrar
     * la pantalla principal de nuestra aplicacion
     */
    'index': function (options) {
        /*
         * verificamos si tenemos una instancia de MainView Creada y si no la creamos
         */
        if (!ContactoApp.views.mainView) {
            ContactoApp.views.mainView = new ContactoApp.views.MainView();
        }
        /**
         * Asignamos como item activo a contactosListView
         * la vista MainView usa un layot card por ello indicamos que componente mostramos
         * ya que el layout card muestra 1 item y al resto los oculta
         */
        ContactoApp.views.mainView.setActiveItem(
            ContactoApp.views.contactosListView
        );
    },
    /**
     * Metodo que invocara la vista donde registraremos un contacto
     */
    'newnote': function (options) {

        var fecha = new Date();
        var id = fecha.getTime();
        /**
         * Creamos una intancia del modelo ContactoModel 
         */
        var contacto = Ext.ModelMgr.create({
            id: id, 
            nombre: '', 
            telefono: '', 
            email: ''
        },
        'ContactoModel'
        );
            
        ContactoApp.views.contactosEditorView.load(contacto);
        /**
         * Cambiamos de item activo a contactosEditorView le decimos que tipo de efecto (type) y la direccion (direction)
         */
        ContactoApp.views.mainView.setActiveItem(
            ContactoApp.views.contactosEditorView,
            {
                type: 'slide', 
                direction: 'left'
            }
        );
    },
    /**
     * Mostramos la vista de edicion de contacto y cargamos el contacto que se desea editar
     */
    'editnote': function (options) {
        ContactoApp.views.contactosEditorView.load(options.note);
        ContactoApp.views.mainView.setActiveItem(
            ContactoApp.views.contactosEditorView,
                {
                    type: 'slide', 
                    direction: 'left'
                }
        );
    },
    /**
     * Guardamos la informacion del contacto (actualizacion o insercion)
     */
    'savenote': function (options) {
        /**
         * Obtenemos los datos del contacto
         */
        var contacto = ContactoApp.views.contactosEditorView.getRecord();
        /**
         * Actualizamos los datos del modelo con los datos del formulario
         */
        ContactoApp.views.contactosEditorView.updateRecord(contacto);
        
        var errors = contacto.validate();// obtenemos un objeto que representa la validacion de datos del modelo
        /**
         * Verificamos si los datos son correctos y cumplen las reglas que se especifico en el modelo
         * si no se cumplen muestra un mensaje informativo
         */
        if (!errors.isValid()) {
            contacto.reject();
            Ext.Msg.alert('Wait!', errors.getByField('nombre')[0].message, Ext.emptyFn);
            return;
        }
        /**
         * Verificamos si el modelo actual ya esta registrado en el store si no lo esta lo agrega
         * caso contraro marcamos como solo lectura el modelo
         */
        if (null == ContactoApp.stores.contactoStore.findRecord('id', contacto.data.id)) {
            ContactoApp.stores.contactoStore.add(contacto);
        } else {
            contacto.setDirty();
        }
        /**
         * Sincronizamos los datos del store con los datos del servidor atravez del proxy
         * el proxy automaticamente invocara la accion correspondiente (update o insert) 
         */
        ContactoApp.stores.contactoStore.sync();


        ContactoApp.views.contactosListView.refreshList();//Refrescamos la lista
        /**
         * Activamos la vista contactosListView con un efecto (type) slide y direccion derecha (direction: 'right')
         */
        ContactoApp.views.mainView.setActiveItem(
        ContactoApp.views.contactosListView,
            {
                type: 'slide', 
                direction: 'right'
            }
        );

    },
    /**
     * Eliminamos un contacto
     */
    'deletenote': function (options) {

        var currentContacto = ContactoApp.views.contactosEditorView.getRecord(); //obtenemos la instancia del modelo
        /**
         * Verificamos si el modelo existe en el modelo y si lo encuentra lo eliminamos
         */
        if (ContactoApp.stores.contactoStore.findRecord('id', currentContacto.data.id)) {
            ContactoApp.stores.contactoStore.remove(currentContacto);
        }

        ContactoApp.stores.contactoStore.sync(); //sincronizamos los datos con el servidor atravez del proxy
        ContactoApp.views.contactosListView.refreshList(); //Refrescamos la lista
        /**
         * Activamos la vista contactosListView con un efecto (type) slide y direccion derecha (direction: 'right')
         */
        ContactoApp.views.mainView.setActiveItem(
            ContactoApp.views.contactosListView,
            {
                type: 'slide', 
                direction: 'right'
            }
        );
    },
    /**
     * Regresamos a la vista principal de la aplicacion
     */
    'canceledit': function (options) {

        ContactoApp.views.mainView.setActiveItem(
            ContactoApp.views.contactosListView,
            {
                type: 'slide', 
                direction: 'right'
            }
        );
    }
});
/**
 * Asignamos el controlador ContactoController al namespace controllers de nuestra aplicacion
 */
ContactoApp.controllers.contactoController = Ext.ControllerManager.get('ContactoController');
