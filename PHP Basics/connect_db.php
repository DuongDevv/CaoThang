<?php
function connect_db()   {
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname="my_db";
    $conn = mysqli_connect($host,$username,$password);
    if(!$conn){
        die("Kết nối CSDL thất bại: ". mysqli_connect_error());
    }
    
    mysqli_select_db($conn, $dbname);
    $conn=mysqli_connect($host,$username,$password,$dbname);
    if(!$conn){
        die("Kết nối CSDL thất bại". mysqli_connect_error());
    }
    return $conn;
}

?>