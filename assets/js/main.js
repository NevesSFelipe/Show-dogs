$(document).ready(function(){
    carregarConfiguracoesTextoTitulo();
    configurarTextoTitulo();
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
        }            
    });
}