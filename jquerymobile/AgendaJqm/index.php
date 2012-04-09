<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
        <link href="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.css" rel="stylesheet" type="text/css"/>
        <script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
        <script src="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.js"></script>
        <script src="js/config.js"></script>
        <script src="js/service.acceso.js"></script>
    </head>
    <body>
        <section data-role="page" data-theme="a">
            <header data-role="header"><h1>Acceso</h1></header>
            <div data-role="content">
                <div data-role="fieldcontain">
                    <label for="username">Usuario</label>
                    <input type="text" id="username" name="username" 
                           autocomplete="off" placeholder="Ingrese su usuario"/>
                </div>
                <div data-role="fieldcontain">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" 
                           autocomplete="off" placeholder="******************"/>
                </div>
                <div data-role="fieldcontain">
                    <button type="button" id="btnIngresar">Ingresar</button>
                </div>
            </div>
            <footer data-role="footer"><h4>@joedayz</h4></footer>
        </section>
    </body>
</html>
