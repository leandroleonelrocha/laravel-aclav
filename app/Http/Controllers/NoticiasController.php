<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Routing\Route;

class NoticiasController extends Controller
{

	public function noticias(){

		return view('noticias'); 
	}

}
