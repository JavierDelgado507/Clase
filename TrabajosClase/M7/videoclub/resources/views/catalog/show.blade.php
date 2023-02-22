@extends('layouts.master')
@section('content')
<div class="row">
    <div class="col-sm-3">
        
        <img src="{{$pelicula->poster}}" style="height:300px"/>
    </div>
    <div class="col-sm-8">
  
        <h1>{{$pelicula->title}}</h1>
        <h3>Año: {{$pelicula->year}}</h3>
        <h3>Director: {{$pelicula->director}}</h3>

        <p><b>Resumen:</b>{{$pelicula->synopsis}}</p>

        <p><b>Estado:</b>
            @if( $pelicula->rented ==false)

            Película actualmente alquilada.
        @else
            Película disponible
        </p>
        
@endif
<p>
@if( $pelicula->rented ==false)
<button type="button" class="btn btn-danger">Devolver película</button>
@else
<button type="button" class="btn btn-primary">Devolver película</button>
@endif

<a href="{{url('/catalog/edit/' . $pelicula->id)}}"><button type="button" class="btn btn-warning" style="color:white;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brush-fill" viewBox="0 0 16 16">
    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"/>
  </svg>Editar Pelicula</button></a>

<a href="{{url('/catalog')}}"><button type="button" class="btn btn-light"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
  </svg> Volver al Listado</button></a>
</p>
        

    </div>
   </div>
@stop
