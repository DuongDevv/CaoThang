@extends('layouts.app')
@section('title', $viewData["title"] ?? 'Online Store')
@section('content')
<div class="row">
    <div class="col-md-6 col-lg-4 mb-3">
        <div class="card shadow-sm">
            <img src="{{ asset('/img/saitama.jpg') }}" class="card-img-top rounded img-fluid" style="height: 250px; object-fit: cover;">
            <div class="card-body text-center">
                <h5 class="card-title">Saitama OK</h5>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-lg-4 mb-3">
        <div class="card shadow-sm">
            <img src="{{ asset('/img/gojo.png') }}" class="card-img-top rounded img-fluid" style="height: 250px; object-fit: cover;">
            <div class="card-body text-center">
                <h5 class="card-title">Satoru Gojo</h5>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-lg-4 mb-3">
        <div class="card shadow-sm">
            <img src="{{ asset('/img/sasuke.jpg') }}" class="card-img-top rounded img-fluid" style="height: 250px; object-fit: cover;">
            <div class="card-body text-center">
                <h5 class="card-title">Sasuke Uchiha</h5>
            </div>
        </div>
    </div>
</div>
@endsection
