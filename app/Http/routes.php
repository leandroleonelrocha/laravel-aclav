<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('inicio');

});

require(__DIR__ . '/Routes/CompetenciasRoute.php');
require(__DIR__ . '/Routes/EquiposRoute.php');
require(__DIR__ . '/Routes/EstadisticasRoute.php');
require(__DIR__ . '/Routes/InstitucionalRoute.php');
require(__DIR__ . '/Routes/MultimediaRoute.php');
require(__DIR__ . '/Routes/NoticiasRoute.php');