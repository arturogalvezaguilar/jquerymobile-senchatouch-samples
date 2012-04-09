var URLBASE = "http://servicesagenda.ci/";
$.mobile.loadingMessage = "Espere :D ";
$.mobile.pageLoadErrorMessage ="Error en la pagina :O ";
$.ajaxSetup({
   dataType:"jsonp",
   type:"GET",
   beforeSend:function(){
       $.mobile.showPageLoadingMsg();
   },
   complete:function(){
       $.mobile.hidePageLoadingMsg();
   }
});