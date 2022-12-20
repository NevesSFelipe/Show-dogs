$(document).ready(function(){
    listarRacas();
});

function listarRacas()
{
    $.ajax({
        url : "core/core.php",
        type : 'GET',
   })
   .done(function(msg){
        $("#raca").append(msg.toUpperCase());
   })
}