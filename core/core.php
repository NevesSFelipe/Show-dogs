<?php

require_once '../vendor/autoload.php';

use App\Cachorros;

$cachorro = new Cachorros;

if($_SERVER['REQUEST_METHOD'] === 'GET') {
    $cachorro->montarSelectRacas();
}

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $cachorro->buscarImagem($_POST['raca']);
}

?>