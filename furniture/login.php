<?php
session_start();
require 'koneksi.php';

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Halaman Login</title>
        <style class="text/css">
body{
    margin: 0;
    padding: 0;
    background-image:url('img/suicide.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    font-family:sans-serif;
}
img{
    position: absolute;
    width: 100px;
    border-radius: 50%;
}
.loginbox{
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    width: 350px;
    height:420px;
    padding: 80px 40px;
    box-sizing: border-box;
    background: rgba(0,0,0,.5);
}
.user{
    height: 100px;
    overflow: hidden;
    position: absolute;
    top:calc(-100px/2);
    left:calc(50% - 50px);
}
h2{
    margin:0;
    padding: 0 0 20px;
    color:#00cc00;
    text-shadow:1px 1px 1px #262626;
    text-align:center;
    letter-spacing: 1px;
}
.loginbox p{
    margin:0;
    padding: 0;
    font-weight: bold;
    color: #fff
}
.loginbox input{
    width: 100%;
    margin-bottom: 20px;
}
.loginbox input[type="text"],
.loginbox input[type="password"]{
    border:none;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    outline: none;
    height: 40px;
    color:#fff;
    font-size: 16px
}
::placeholder{
    color: rgba(255,255,255,.5)
}
.loginbox button{
    width: 100%;
    margin-bottom: 20px;
    border:none;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
    background:#ff5c33;
    cursor: pointer;
    border-radius: 20px;
    transition: .5s;
    font-weight: bold;
    letter-spacing: 1px;
}
.loginbox button:hover{
    background:#00cc00;
    color: #262626
}
.loginbox a{
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    opacity: .8
}
        </style>
    </head>
    <body>
        <div class="loginbox">
            <img src="img/gosen.jpg" class="user">
            <h2>Login</h2>
            <form action="" method="post">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Enter Username">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="*******">
                <button type="submit" name="login">Login</button>
            <a href="register.php">Register</a>
            </form>
            <?php
            if(isset($_POST['login'])){
                $ambil = $koneksi->query("SELECT * FROM tbl_admin WHERE username='$_POST[username]' AND password='$_POST[password]'");
                $yangcocok = $ambil->num_rows;

                if ($yangcocok==1) {
                    $_SESSION['admin']=$ambil->fetch_assoc();
                    echo "<div class='alert alert-info'>Login Sukses</div>";
                    echo "<meta http-equiv='refresh' content='1;url=admin/admin.php'>";
                } else {
                    echo "<div class='alert alert-danger'>Login Gagal</div>";
                    echo "<meta http-equiv='refresh' content='1;url=login.php'>";
                }
            }
            ?>
        </div>
    </body>
</html>