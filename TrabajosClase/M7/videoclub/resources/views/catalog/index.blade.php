@extends('layouts.master')
@section('content')
    Listado películas
    <div class="row">
        @foreach( $Peliculas as $key => $peliculas )
        <div class="col-xs-6 col-sm-4 col-md-3 text-center">
    <a href="{{ url('/catalog/show/' . $peliculas->id ) }}">
        <img src="{{$peliculas->poster}}" style="height:200px"/>

        <h4 style="min-height:45px;margin:5px 0 10px 0">
            {{$peliculas->title}} </h4>
        </h4>
        </a>
        </div>
        @endforeach
       </div>
@stop

