<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    // Ham su li trang chu
    public function index(){
        $viewData = [];
        $viewData['title'] = " trang chu - Online Store";
        $viewData['subtitle']= "Chao mung den voi Online Store";
        return view('home.index') -> with ('viewData', $viewData);
    }

    public function about(){
        $viewData = [];
        $viewData['title'] = " Gioi thieu - Online Store";
        $viewData['subtitle'] = "Gioi thieu he thong Online Store";
        $viewData['description'] = "Online Store la he thong ban hang truc tuyen duoc xay dung tren nen tang Laravel";
        $viewData['author']= "Duong Dep Trai";
        return view('home.about')->with('viewData', $viewData);
    }
}
