/**
 * Instancia que conservara la configuracion de nuestra aplicacion y desde la cual se invoca 
 * Nota: solo debe haber una sola instancia por aplicacion y esta debe ser global es decir
 * instanciarlo y definirlo en un archivo lo mas recomendable (app.js)
 */
var App = new Ext.Application({
    /**
     * Nombre de nuestra aplicacion
     * Nota: apartir de este nombre sencha automaticamente crea un nameSpace con este nombre y apartir de el
     * se accede a los demas namespaces, controladores, sotres, vistas, etc
     */
    name: 'ContactoApp',
    /**
     * Indicamos que si la aplicacion mostrara una mascara de Loading
     */
    useLoadMask: true,
    /**
     * Metodo que se ejecuta cuando todo termine de renderizarce
     * es el metodo tipico donde se inicializa o lanza la aplicacion 
     * en este caso llamamos a un action (metodo) index del controlador contactoController
     */
    launch: function () {
        Ext.dispatch({
            controller: ContactoApp.controllers.contactoController,
            action: 'index'
        });
    }
});