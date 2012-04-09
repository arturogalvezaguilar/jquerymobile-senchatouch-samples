var Acceso = {
    init : function(){
        $("#btnIngresar").click(Acceso.enviar);        
    },
    enviar:function(){
        $.ajax({
            url:URLBASE+"index.php/validar/validarusuario",
            data:{
                user:$("#username").val(),
                pass:$("#password").val()
                },
            success:function(obj){                
                if(obj==1){
                    location.href="main.php";
                }else{
                    alert("Error !! ");
                }
            }
        })
    }
};
$(document).ready(Acceso.init);
