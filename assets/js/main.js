$(document).ready(function(){
    configurarTextoTitulo();
});

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