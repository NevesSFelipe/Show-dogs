$(document).ready(function(){
    listarRacas();
    montarDog();
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

function montarDog()
{
    $('#btn_busca_dog').click(function(){
        editarNomeRaca();
        buscarImagem();
    });
}

function editarNomeRaca()
{
    var nome_dog = $('#nome').val();
    var raca = $('#raca').val();

    $('#nome_dog').text(nome_dog);
    $('#raca_dog').text(raca);
}

function buscarImagem()
{
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
}