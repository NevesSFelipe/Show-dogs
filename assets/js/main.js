$(document).ready(function(){
    configurarTextoTitulo();
});

function configurarTextoTitulo()
{
    modificarCorTextoTitulo();
    modificarFonteTextoTitulo();
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