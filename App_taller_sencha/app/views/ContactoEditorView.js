/**
 * Definimos un clase que hereda de un panel de formulario
 * sera el componente que construya un fomrulario para mostrar, crear y editar info de nuestros contactos
 */
ContactoApp.views.ContactosEditorView = Ext.extend(Ext.form.FormPanel, {
    /**
     * Metodo que inicializa los componentes de la clase
     */
    initComponent: function () {
        /**
         * Creamos un boton que sera el que nos lleve al inicio de nuestro aplicativo
         */
        this.backButton = new Ext.Button({
            text: 'Inicio',
            ui: 'back',
            handler: this.backButtonTap,
            scope: this
        });
        /**
         * Creamos un boton encargado de realizar la accion de guardar informacion de nuestros contactos
         */
        this.saveButton = new Ext.Button({
            text: 'Guardar',
            ui: 'action',
            handler: this.saveButtonTap,
            scope: this
        });
        /**
         * Creamos un boton encargado de realizar la accion de eliminar un contacto
         */
        this.trashButton = new Ext.Button({
            iconCls: 'trash',
            iconMask: true,
            handler: this.trashButtonTap,
            scope: this
        });
        /**
         * Creamos una barra superior 
         */
        this.topToolbar = new Ext.Toolbar({
            title: 'Mis Contactos',
            items: [
                this.backButton,
                { xtype: 'spacer' },
                this.saveButton
            ]
        });
        /**
         * Creamos una barra inferior
         */
        this.bottomToolbar = new Ext.Toolbar({
            dock: 'bottom',
            items: [
                { xtype: 'spacer' },
                this.trashButton
            ]
        });
        /**
         * Asignamos las barras a la vista
         */
        this.dockedItems = [this.topToolbar, this.bottomToolbar];
        /**
         * Invocamos al metodo que inicializa los componentes de la clase padre
         * y pasamos como parametro esta clase
         */
        ContactoApp.views.ContactosEditorView.superclass.initComponent.call(this);
    },
    /**
     * Metodo que despacha la accion al action (metodo) canceledit del controlador contactoController
     */
    backButtonTap: function () {
        Ext.dispatch({
            controller: ContactoApp.controllers.contactoController,
            action: 'canceledit'
        });
    },
    /**
     * Metodo que despacha la accion al action (metodo) savenote del controlador contactoController
     */
    saveButtonTap: function () {
        Ext.dispatch({
            controller: ContactoApp.controllers.contactoController,
            action: 'savenote'
        });
    },
    /**
     * Metodo que despacha la accion al action (metodo) deletenote del controlador contactoController
     */
    trashButtonTap: function () {
        Ext.dispatch({
            controller: ContactoApp.controllers.contactoController,
            action: 'deletenote'
        });
    },
    /**
     * Items o componentes que conforman la clase
     */
    items: [{
        xtype: 'textfield',
        name: 'nombre',
        label: 'Nombre',
        required: true
    }, {
        xtype: 'textfield',
        name: 'telefono',
        label: 'Telefono'
    }, {
        xtype: 'textfield',
        name: 'email',
        label: 'Email'
    }, {
        xtype: 'textfield',
        name: 'direccion',
        label: 'Direccion'
    }]
});


