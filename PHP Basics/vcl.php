<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    form{
        display: inline-block;
        border: 2px solid blue;
        padding: 5px;
 
    }
    body{
        text-align: center;
    }
    label{
        display: inline-block;
        width: 140px;
        text-align: left;
    }
    .block{
      margin-top: 2px;
    }
    .text{
       
        padding-right: 12px;
    
    }
</style>
<body>
<form action="quanly.php" method="post">
    <h1>Thêm quản trị viên</h1>
    <div class="block" >
        <label class="text" for="">Tên đăng nhập:</label>
        <input type="text" name="username" id="">
    </div>

    <div class="block">
        <label class="text" for="">mật khẩu</label>
        <input type="password" name="matkhau" id="">
    </div>
     <div class="block">
        <label class="text" for="">Email</label>
        <input type="text" name="email" id="">
    </div>
     <div class="block">
        <label class="text" for="">Họ tên</label>
        <input type="text" name="hoten" id="">
    </div>
    <div class="block">
        <label for=""></label>
        <input type="submit" name="btnSubmit" value="Thêm mới" id="">
    </div>
</form>
</body>

</html>