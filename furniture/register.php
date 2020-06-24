<?php
require 'koneksi.php';

if(isset($_POST["register"])){

    if( registrasi($_POST) > 0 ){
        echo "<script> alert('User Baru Telah Ditambahkan!'); </script>";
    } else {
        echo mysqli_error($koneksi);
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="icon" href="img/favicon.png" type="image/png" />
  <title>Furniture</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="asset/css/bootstrap.css" />
  <link rel="stylesheet" href="asset/vendors/linericon/style.css" />
  <link rel="stylesheet" href="asset/css/font-awesome.min.css" />
  <link rel="stylesheet" href="asset/css/themify-icons.css" />
  <link rel="stylesheet" href="asset/css/flaticon.css" />
  <link rel="stylesheet" href="asset/vendors/owl-carousel/owl.carousel.min.css" />
  <link rel="stylesheet" href="asset/vendors/lightbox/simpleLightbox.css" />
  <link rel="stylesheet" href="asset/vendors/nice-select/css/nice-select.css" />
  <link rel="stylesheet" href="asset/vendors/animate-css/animate.css" />
  <link rel="stylesheet" href="asset/vendors/jquery-ui/jquery-ui.css" />
  <!-- main css -->
  <link rel="stylesheet" href="asset/css/style.css" />
  <link rel="stylesheet" href="asset/css/responsive.css" />
</head>

<body>
  <!--================Header Menu Area =================-->
  <header class="header_area">
    <div class="top_menu">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
          </div>
        </div>
      </div>
    </div>
    <div class="main_menu">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light w-100">
          <!-- Brand and toggle get grouped for better mobile display -->
          <a class="navbar-brand logo_h" href="index.html">
            <img src="img/logo.png" alt="" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse offset w-100" id="navbarSupportedContent">
            <div class="row w-100 mr-0">
            
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <!--================Header Menu Area =================-->

  <!--================ Inspired Product Area =================-->
  <section class="inspired_product_area section_gap_bottom_custom">
    <div class="container">
      <div class="row">
          <div class="main_title">
            <h2><span>Halaman Registrasi</span></h2>
          </div>
        </div>
      </div>

    <div class="container">
    <div class="row">
    <form action="" method="post">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" name="username" id="username">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" name="password" id="password">
        </div>
        <div class="form-group">
            <label for="password2">Konfirmasi Password</label>
            <input type="password" class="form-control" name="password2" id="password2">
        </div>
        <button type="submit" class="btn btn-primary" name="register">Registrasi</button>
        <a href="login.php" class="btn btn-primary" role="button" aria-pressed="true">Kembali</a>
        </form>
      </div>
    </div>
  </section>
  <!--================ End Inspired Product Area =================-->

  

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="js/jquery-3.2.1.min.js"></script>
  <script src="js/popper.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/stellar.js"></script>
  <script src="vendors/lightbox/simpleLightbox.min.js"></script>
  <script src="vendors/nice-select/js/jquery.nice-select.min.js"></script>
  <script src="vendors/isotope/imagesloaded.pkgd.min.js"></script>
  <script src="vendors/isotope/isotope-min.js"></script>
  <script src="vendors/owl-carousel/owl.carousel.min.js"></script>
  <script src="js/jquery.ajaxchimp.min.js"></script>
  <script src="vendors/counter-up/jquery.waypoints.min.js"></script>
  <script src="vendors/counter-up/jquery.counterup.js"></script>
  <script src="js/mail-script.js"></script>
  <script src="js/theme.js"></script>
</body>
</html>