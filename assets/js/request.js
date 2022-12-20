$(document).ready(function(){
    listarRacas();
    buscarImagem();
});

function listarRacas()
{
    $.ajax({
        url : "core/core.php",
        type : 'GET',
   })
   .done(function(msg){
        $("#raca").append(msg);
   })
}

function buscarImagem()
{
    $('#btn_busca_dog').click(function(){
        $.ajax({
            url : "core/core.php",
            type : 'POST',
            data: {
                raca: $('#raca').val()
            }
       })
       .done(function(msg){
           $('#img_dog').attr('src', msg);
       });
    });
}