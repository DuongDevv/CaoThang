<?php

use Illuminate\Support\Facades\Route;
use app\Http\Controllers\HomeController;

Route::get('/',[HomeController::class,'index'])->name('home.index');

Route::get('/about', [HomeController::class, 'about']) -> name('home.about');
