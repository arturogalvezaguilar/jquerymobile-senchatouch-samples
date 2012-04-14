/**
 * Creamos y registramos un modelo que representa a un contacto
 */
Ext.regModel('ContactoModel', {
    /**
     * esta propiedad indica que campo sera la que sea unica (primary key)
     */
    idProperty: 'id',
    /**
     * campos o atributos que representa al objeto en este caso un contacto
     * cada campo es un objeto y el atributo fields almacena un conjunto de estos
     * cada objeto (cmapo) tiene un nombre (name) y su tipo de dato (type)
     */
    fields: [
        { name: 'id', type: 'int' },
        { name: 'nombre', type: 'string'},
        { name: 'telefono', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'direccion', type: 'string' }
    ],
    /**
     * atributo que indica y configura que campos tendran una validacion de datos 
     * cada regla es un objeto el cual usamos el atributo type para indicar
     * el tipo de validacion que tendra y el atributo field indica que campo sera al que se le aplicara
     * la validacion y un atributo message indicamos un mensaje perzonalizado en caso la validacion
     * sea incorrecta
     */
    validations: [
        { type: 'presence', field: 'id' },
        { type: 'presence', field: 'nombre', message: 'Por favor ingrese un nombre' }
    ]
});

