<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MiControladorController extends Controller
{
    public function index ($nom){
    return "hola" . $nom;
    }
}
