<?php
    require_once("connect_db.php");
    if($_SERVER["REQUEST_METHOD"] == "POST  "){
        if(isset($_REQUEST["btnSubmit"])){
            $name=$_REQUEST["username"];
            $pass=$_REQUEST["password"];
            $email=$_REQUEST["email"];
            $hoten=$_REQUEST["hoten"];
            $conn = connect_db();
            if($conn){
                $sql = "INSERT INTO quan_tri_vien (ten_dang_nhap,mat_khau,email,ho_ten) VALUES ";
                $sql .= "('".$name."','".$pass. "','".$email."','".$hoten."')";
                if(mysqli_query($conn,$sql)){
                    echo "Thêm dữ liệu thành công";
                }else{
                    echo "Lỗi thực thi: $sql <br>".mysqli_errno($conn);        
                 }
            }
            mysqli_close($conn);
        }
    }
?>