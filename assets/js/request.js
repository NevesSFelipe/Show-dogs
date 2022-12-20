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

       $('#msgSucesso').append(
            '<div class="alert alert-success text-center mt-2" role="alert">' +
                'Dog encontrado com sucesso.' +
            '</div>'
        );

        salvarResultadoBusca();
   });
}

function salvarResultadoBusca()
{
    var dataHora = new Date().toLocaleString();
    var racaProcurada = $('#raca').val();
    var nomeDefinido = $('#nome').val();
    var imgDog = $('#img_dog').attr('src');

    if(racaProcurada && nomeDefinido) {
        localStorage.setItem('data_hora_busca', dataHora);
        localStorage.setItem('raca_procurada', racaProcurada);
        localStorage.setItem('nome', nomeDefinido);
        localStorage.setItem('img', imgDog);
    }        
            
}