@extends('layouts.app')

@section('title', $viewData["title"])

@section('content')
<div class="row">
    <div class="col-md-6 col-lg-4 mb-2">
        <img src="{{ asset('/img/lard.jpg') }}" class="img-fluid rounded">
    </div>
    <div class="col-md-6 col-lg-4 mb-2">
        <img src="{{ asset('/img/goku.jpg') }}" class="img-fluid rounded">
    </div>
    <div class="col-md-6 col-lg-4 mb-2">
        <img src="{{ asset('/img/zenitstu.png') }}" class="img-fluid rounded">
    </div>
</div>
@endsection