<?php

require_once '../vendor/autoload.php';

use App\Cachorros;

$cachorro = new Cachorros;

if($_SERVER['REQUEST_METHOD'] === 'GET') {
    $cachorro->montarSelectRacas();
}

?>