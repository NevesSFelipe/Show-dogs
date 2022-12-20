<?php require_once 'includes/header.php'; ?>

<h1 class="text-info">Monte o seu dog</h1>
<hr class="bg-info" />

<div class="row">
    <div class="col-sm-6">
        <div class="card">
            <div class="card-body">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="raca">Seleciona a raça do seu dog</label>
                            <select id="raca" class="form-control">
                                <option selected>Escolher...</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="nome">Qual nome do seu dog?</label>
                            <input type="text" class="form-control" id="nome" />
                        </div>
                    </div>
                    <button type="button" id="btn_busca_dog" class="btn btn-info w-100">Montar</button>
                </form>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card">
            <div class="card-body">
                <h5>
                    <span class="dados-titulo"><b>Nome do Dog:</b></span> <span id="nome-dog">-</span> |

                    <span class="dados-titulo"><b>Raça:</b></span> <span id="raca-dog">-</span>
                </h5>
                <img id="img_dog" src="" alt="Sem Imagem" />
            </div>
        </div>
    </div>
</div>

<?php require_once 'includes/footer.php'; ?>