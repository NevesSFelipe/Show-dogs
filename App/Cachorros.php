<?php

namespace App;

class Cachorros {

    private object $curl;

    public function __construct()
    {
        $this->curl = curl_init();
    }

    public function montarSelectRacas()
    {

        curl_setopt_array($this->curl, [
            CURLOPT_URL => 'https://dog.ceo/api/breeds/list/all',
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_RETURNTRANSFER => true
        ]);

        $dadosEncontrados = json_decode(curl_exec($this->curl), true);

        foreach($dadosEncontrados['message'] as $raca => $regiao) {
            echo "<option value='$raca'> $raca </option>";
        }

        curl_close($this->curl);
    }

}


?>