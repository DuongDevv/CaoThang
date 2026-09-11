<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="http://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary py-4">                                                                                                                                    
           <div class="container">                                                                                                                                                                            
               <a class="navbar-brand" href="{{ route('home.index') }}">Online Store</a>                                                                                                                      
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">                                                                                   
                   <span class="navbar-toggler-icon"></span>                                                                                                                                                  
               </button>                                                                                                                                                                                      
               <div class="collapse navbar-collapse" id="navbarNavAltMarkup">                                                                                                                                 
                   <div class="navbar-nav ms-auto">                                                                                                                                                           
                       <a class="nav-link active" href="{{ route('home.index') }}">Home</a>                                                                                                                   
                       <a class="nav-link active" href="{{ route('home.about') }}">About</a>                                                                                                                  
                       <a class="nav-link active" href="{{ route('products.index') }}">Products</a>                                                                                                           
                   </div>                                                                                                                                                                                     
               </div>                                                                                                                                                                                         
           </div>                                                                                                                                                                                             
       </nav>                                                                                                                                                                                                 
                                                                                                                                                                                                              
       <!-- Header Tiêu đề phụ -->                                                                                                                                                                            
       <header class="masthead bg-primary text-white text-center py-4">                                                                                                                                       
           <div class="container d-flex align-items-center flex-column">                                                                                                                                      
               <h2>@yield('subtitle', 'A Laravel Online Store')</h2>                                                                                                                                          
           </div>                                                                                                                                                                                             
       </header>                                                                                                                                                                                              
                                                                                                                                                                                                              
       <!-- Main Content: Nơi chứa nội dung động của các trang con -->                                                                                                                                        
       <div class="container my-4">                                                                                                                                                                           
           @yield('content')                                                                                                                                                                                  
       </div>                                                                                                                                                                                                 
                                                                                                                                                                                                              
       <!-- Footer -->                                                                                                                                                                                        
       <div class="copyright py-4 text-center text-white bg-secondary">                                                                                                                                       
           <div class="container">                                                                                                                                                                            
               <small>Copyright - Online Store Laravel</small>                                                                                                                                                
           </div>                                                                                                                                                                                             
       </div>                                                                                                                                                                                                 
                                                                                                                                                                                                              
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>