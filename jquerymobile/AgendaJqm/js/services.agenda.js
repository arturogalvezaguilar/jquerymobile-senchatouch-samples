var Agenda = {
    init : function (){
        Agenda.listar();
        $(document).delegate("#grabar-nueva-agenda","click",Agenda.guardar);
        $(document).delegate("#ver-datos-agenda","click",Agenda.verDatos)
        //$("#grabar-nueva-agenda").click(Agenda.guardar);
    },
    verDatos:function(_this){
      $.ajax({
          url:URLBASE+"index.php/agenda/verdatos",
          data:{id:_this.id},
          success:function(obj){
              if(obj.length > 0){
                  $("#nombre-agenda").val(obj[0].nombre);
                  $("#observacion-agenda").val(obj[0].observacion);
                  $.mobile.changePage("#crear-nueva-agenda",{transition:"flip"});
              }
          }         
      })  
    },
    listar : function(){
        $.ajax({
            url:URLBASE+"index.php/agenda/listar",
            success:function(obj){
                $("#lista-de-actividades").html(Agenda.printAgenda(obj));
                $("#lista-de-actividades").listview("refresh");
            }
        })
    },
    guardar : function(){
      $.ajax({
          url:URLBASE+"index.php/agenda/guardar",
          data:{nombre:$("#nombre-agenda").val(),observacion:$("#observacion-agenda").val()},
          success:function(obj){
              if(obj){
                  Agenda.listar();
                  $.mobile.changePage("#lista-de-agendas");
              }
          }
      });  
    },
    printAgenda : function(obj){
        var html ="";
        for(var i = 0 ; i < obj.length ; i ++){
            html+="<li><a onclick=\"Agenda.verDatos(this)\" id="+obj[i].idagenda+">";
                html+=obj[i].nombre;
            html+="</a></li>";
        }
        return html;
    }
}
$(document).ready(Agenda.init());