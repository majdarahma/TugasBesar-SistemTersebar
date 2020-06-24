<?php
session_start();
require 'koneksi.php';

if(empty($_SESSION["keranjang"]) OR !isset($_SESSION["keranjang"])){
  echo "<script>alert('Keranjang Kosong, Silahkan Belanja Dulu');</script>";
  echo "<script>location='index.php';</script>";
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
                <ul class="nav navbar-nav center_nav pull-right">
                  <li class="nav-item active">
                    <a class="nav-link" href="index.php">Home</a>
                  </li>
              </div>

              <div class="col-lg-5 pr-0">
                <ul class="nav navbar-nav navbar-right right_nav pull-right">

                  <li class="nav-item">
                    <a href="keranjang.php" class="icons">
                      <i class="ti-shopping-cart"></i>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="icons">
                      <i class="ti-user" aria-hidden="true"></i>
                    </a>
                  </li>

                </ul>
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
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="main_title">
            <h2><span>Halaman Keranjang</span></h2>
          </div>
        </div>
      </div>

      <div class="row">
    <table class="table">
<thead>
  <tr>
    <th scope="col">NO</th>
    <th scope="col">Nama Produk</th>
    <th scope="col">Harga Produk</th>
    <th scope="col">Jumlah</th>
    <th scope="col">Total</th>
    <th scope="col">Aksi</th>
  </tr>
</thead>
<tbody>
<?php  $i = 1; ?>
<?php foreach ($_SESSION['keranjang'] as $id_produk => $jumlah):?>
<?php 
$ambil = $koneksi->query("SELECT * FROM tbl_produk WHERE id_produk='$id_produk'");
$perproduk = $ambil->fetch_assoc();  
$subharga = $perproduk["harga_produk"]*$jumlah;
?>
  <tr>
    <th scope="row"><?= $i;?></th>
    <td><?= $perproduk["nama_produk"];?></td>
    <td>Rp. <?= number_format($perproduk["harga_produk"]);?></td>
    <td><?= $jumlah; ?></td>
    <td>Rp. <?= number_format($subharga);?></td>
    <td><a href="hapuskeranjang.php?id=<?= $id_produk ?>" class="btn btn-danger">Delete</a></td>
  </tr>
<?php $i++; ?>
<?php endforeach ; ?>
</tbody>
</table>

<a href="index.php" class="btn btn-default">Lanjutkan Belanja</a>
<a href="checkout.php" class="btn btn-primary">Checkout</a>
       
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