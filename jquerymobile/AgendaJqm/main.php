<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
        <link href="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.css" rel="stylesheet" type="text/css"/>
        <script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
        <script src="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.js"></script>
        <script src="js/config.js"></script>
        <script src="js/services.agenda.js"></script>
    </head>
    <body>
        <section data-role="page" id="lista-de-agendas">
            <header data-role="header">
                <h1>Agenda</h1>
                <a date-rol="button" data-icon="gear" 
                   href="#crear-nueva-agenda" data-transition="flip">Nuevo</a>
            </header>
            <div data-role="content">
                <ul data-role="listview" data-filter="true" id="lista-de-actividades">
                    
                </ul>                
            </div>
            <footer data-role="footer"><h4>@Davis_Laban</h4></footer>
        </section>
        <section data-role="page" id="crear-nueva-agenda">
            <header data-role="header">
                <a data-rel="back" data-icon="back">Regresar</a>
                <h1>Nueva Agenda</h1>
            </header>
            <div data-role="content">
                <div data-role="fieldcontain">
                    <label for="nombre-agenda">Nombre</label>
                    <input type="text" id="nombre-agenda" autocomplete="off"/>
                </div>
                <div data-role="fieldcontain">
                    <label for="observacion-agenda">Observacion</label>
                    <textarea id="observacion-agenda"></textarea>
                </div>
                <div data-role="fieldcontain">
                    <button id="grabar-nueva-agenda">Guardar</button>
                </div>
            </div>
            <footer data-role="footer"><h4>@Davis_Laban</h4></footer>
        </section>
    </body>
</html>
