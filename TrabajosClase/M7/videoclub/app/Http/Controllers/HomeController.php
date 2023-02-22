<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;

class HomeController extends Controller
{

public function getHome(){


    if(auth::check()){
    return redirect()->action( [CatalogController::class, 'getIndex']);
    }else{
        return redirect('login');
    }
} 

}


/*
    
     * Create a new controller instance.
     *
     * @return void
     
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     
    public function index()
    {
        return view('home');
    }*/