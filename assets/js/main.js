$(document).ready(function(){
    carregarConfiguracoesTextoTitulo();
    configurarTextoTitulo();
    carregarDadosDogConsultado();
});

function carregarConfiguracoesTextoTitulo()
{
    var corConfigurada = localStorage.getItem('cor');
    var fonteConfigurada = localStorage.getItem('fonte');

    if(corConfigurada && fonteConfigurada) {
        $('.dados-titulo').css("color", corConfigurada);
        $('.dados-titulo').css("font-family", fonteConfigurada);
    }
}

function carregarDadosDogConsultado()
{
    var racaProcurada = localStorage.getItem('raca_procurada');
    var nomeDefinido = localStorage.getItem('nome');
    var imgDog = localStorage.getItem('img');

    if(racaProcurada && nomeDefinido && imgDog) {
        $('#raca_dog').text(racaProcurada);
        $('#nome_dog').text(nomeDefinido);
        $('#img_dog').attr('src', imgDog);
    }
}

function configurarTextoTitulo()
{
    modificarCorTextoTitulo();
    modificarFonteTextoTitulo();
    salvarConfiguracoes();
}

function modificarCorTextoTitulo()
{
    $('#cor').change(function(){
        var corSeleciona = $('#cor').val();
        $('.modelo-texto').css("color", corSeleciona);
    });
}

function modificarFonteTextoTitulo()
{
    $('#fonte').change(function(){
        var fonteSelecionada = $('#fonte').val();
        $('.modelo-texto').css("font-family", fonteSelecionada);
    });
}

function salvarConfiguracoes()
{
    $('#btn_salvar_configuracoes').click(function(){
        
        var corSeleciona = $('#cor').val();
        var fonteSelecionada = $('#fonte').val();
        var dataHora = new Date().toLocaleString();

        if(corSeleciona && fonteSelecionada) {
            localStorage.setItem('cor', corSeleciona);
            localStorage.setItem('fonte', fonteSelecionada);
            localStorage.setItem('data_hora', dataHora);

            $('#msgSucesso').append(
                '<div class="alert alert-success text-center mt-2" role="alert">' +
                    'Configuração do titulo atualizada com sucesso.' +
                '</div>'
            );

            setTimeout(function() {
                window.location.href = 'index.php';
            }, 2000)
        }            
    });
}