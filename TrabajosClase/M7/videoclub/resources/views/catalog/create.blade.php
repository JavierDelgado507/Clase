@extends('layouts.master')
@section('content')
Añadir Pelicula
<div class="row" style="margin-top:40px">
    <div class="offset-md-3 col-md-6">
       <div class="card">
          <div class="card-header text-center">
             Añadir película
          </div>
          <div class="card-body" style="padding:30px">
 
             {{-- TODO: Abrir el formulario e indicar el método POST --}}
 
             <form action="{{action([App\Http\Controllers\CatalogController::class,
               'postCreate'])}}" method="POST">
                {{ csrf_field() }}
                {{method_field('POST')}}
               
 
             <div class="form-group">
                <label for="title">Título</label>
                <input type="text" name="title" id="title" class="form-control">
             </div>
 
             <div class="form-group">
                <label for="title">Año</label>
                <input type="text" name="year" id="year" class="form-control">
                {{-- TODO: Completa el input para el año --}}
             </div>
 
             <div class="form-group">
                <label for="title">Director</label>
                <input type="text" name="director" id="director" class="form-control">
                {{-- TODO: Completa el input para el director --}}
             </div>
 
             <div class="form-group">
                <label for="title">Poster</label>
                <input type="text" name="poster" id="poster" class="form-control">
                {{-- TODO: Completa el input para el poster --}}
             </div>
 
             <div class="form-group">
                <label for="synopsis">Resumen</label>
                <textarea name="synopsis" id="synopsis" class="form-control" rows="3"></textarea>
             </div>
 
             <div class="form-group text-center">
                <button type="submit" class="btn btn-primary" style="padding:8px 100px;margin-top:25px;">
                    Añadir película
                </button>
             </div>
 
             {{-- TODO: Cerrar formulario --}}
            </form>
          </div>
       </div>
    </div>
 </div>
 
@stop
