<?php require_once 'includes/header.php'; ?>

<h1 class="text-info">Configurações</h1>
<hr class="bg-info" />

<form>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="cor">Seleciona a cor do titulo:</label>
            <select id="cor" required class="form-control">
                <option selected>Escolher...</option>
                <option value="#0000FF">Azul</option>
                <option value="#000000">Preto</option>
                <option value="#008000">Verde</option>
                <option value="#FF0000">Vermelho</option>
                <option value="#EE82EE">Violeta</option>
            </select>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="fonte">Seleciona a fonte do titulo:</label>
            <select id="fonte" required class="form-control">
                <option selected>Escolher...</option>
                <option value="Hanken Grotesk">'Hanken Grotesk</option>
                <option value="PT Sans">PT Sans</option>
                <option value="Roboto">Roboto</option>
                <option value="Source Sans Pro">Source Sans Pro</option>
                <option value="Ubuntu">Ubuntu</option>
            </select>
        </div>
    </div>
    <button type="submit" class="btn btn-info w-100">Salvar</button>
</form>

<p class="text-center mt-3">
    <span class="modelo-texto"><b>Nome do Dog:</b></span> <span id="nome-dog">-</span> |

    <span class="modelo-texto"><b>Raça:</b></span> <span id="raca-dog">-</span>
</p>

<?php require_once 'includes/footer.php'; ?>