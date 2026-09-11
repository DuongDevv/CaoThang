<?php                                                                                                                                                                                                      
                                                                                                                                                                                                                
    namespace App\Providers;                                                                                                                                                                                   
            
    use Illuminate\Support\ServiceProvider;                                                                                                                                                                    
    use Illuminate\Pagination\Paginator;                                                                                                                                          
    use Illuminate\Support\Facades\DB;                                                                                                                                                    
    use Illuminate\Support\Facades\Log; 
    
                                                                                                                                                                                                                
    class AppServiceProvider extends ServiceProvider                                                                                                                                                           
    {                                                                                                                                                                                                          
        public function register(): void                                                                                                                                                                       
        {                                                                                                                                                                                                      
            //                                                                                                                                                                                                 
        }                                                                                                                                                                                                      
                                                                                                                                                                                                                
        public function boot(): void                                                                                                                                                                           
        {                                                                                                                                                                                                      
            Paginator::useBootstrapFive();                                                                                                                                                                     
                                                                                                                                                                                                                
            if (config('app.env') === 'local') {                                                                                                                                                               
                DB::listen(function ($query) {                                                                                                                                                                 
                    Log::info("SQL: " . $query->sql . " | Bindings: " . json_encode($query->bindings));                                                                                                        
                });                                                                                                                                                                                            
            }                                                                                                                                                                                                  
        }                                                                                                                                                                                                      
    }           