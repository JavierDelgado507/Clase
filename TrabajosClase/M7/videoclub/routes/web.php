<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MiControladorController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CatalogController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
Route::get('/', [HomeController::class, 'getHome']);
//Route::get('auth/login' , [LoginController::class ,'getLogin' ]); 

Route::group(['middleware' => 'auth'], function(){

    Route::get('catalog',[CatalogController::class,'getIndex']);

    Route::get('catalog/show/{id}', [CatalogController::class, 'getShow']);

    Route::get('catalog/create', [CatalogController::class, 'getCreate']);

    Route::post('catalog/create', [CatalogController::class, 'postCreate']);

    Route::put('catalog/edit/{id}', [CatalogController::class, 'putEdit']);

    Route::get('catalog/edit/{id}', [CatalogController::class, 'getEdit']);



/*Route::get('login', function () {
    return view('auth/login');
});*/

// Route::get('logout', function () {
//     return 'Logout usuario';
// });

});

/* 
Route::get('catalog', function () {
    return view('catalog.index');
});

Route::get('catalog/show/{id}', function ($id) {
    return view('catalog.show' ,array('id'=>$id));
});

Route::get('catalog/create', function () {
    return view('catalog.create');
});

Route::get('catalog/edit/{id}', function ($id) {
    return view('catalog.edit' , array('id' =>$id));
});
*/