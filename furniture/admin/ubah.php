<?php

require '../koneksi.php';

$id = $_GET["id"]; 

$produk = query("SELECT * FROM tbl_produk WHERE id_produk = $id")[0];


// if (isset($_POST["save"])){

//     if (ubah($_POST) > 1 ){
//         echo"<script>alert('Data Berhasil Diubah');document.location.href='produk.php'</script>";
//     } else {
//         echo"<script>alert('Data Gagal Diubah');document.location.href='produk.php'</script>";
//     }
// }

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">
	<title>SB Admin - Blank Page</title>
	<link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
	<link href="vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
	<link href="css/sb-admin.css" rel="stylesheet">
</head>
<body id="page-top">
	<nav class="navbar navbar-expand navbar-dark bg-dark static-top">
		<a class="navbar-brand mr-1" href="admin.php">Admin</a>
	</nav>

	<div id="wrapper">
	<!-- Sidebar -->
	<ul class="sidebar navbar-nav">
		<li class="nav-item">
		<a class="nav-link" href="admin.php">
			<i class="fas fa-fw fa-tachometer-alt"></i>
			<span>Home</span>
		</a>
		</li>
		<li class="nav-item">
		<a class="nav-link" href="produk.php">
			<i class="fas fa-fw fa-tachometer-alt"></i>
			<span>Produk</span>
		</a>
		</li>
		<li class="nav-item">
		<a class="nav-link" href="pelanggan.php">
			<i class="fas fa-fw fa-tachometer-alt"></i>
			<span>Pelanggan</span></a>
		</li>
		<li class="nav-item">
		<a class="nav-link" href="pembelian.php">
			<i class="fas fa-fw fa-tachometer-alt"></i>
			<span>Pembelian</span></a>
		</li>
		<li class="nav-item">
		<a class="nav-link" href="../logoutadmin.php">
		<i class="fas fa-sign-out-alt"></i>
			<span>Logout</span></a>
		</li>
	</ul>

	<div id="content-wrapper">
 
        <div class="container">
		<h1>Ubah Barang</h1>
		<hr>
        
        <form action="" method="post" enctype="multipart/form-data">
		<input type="hidden" name="id" value="<?= $produk["id"];?>">
        <div class="form-group">
            <label for="nama_produk">Nama Produk</label>
            <input type="text" class="form-control" name="nama_produk" id="nama_produk" value="<?= $produk["nama_produk"];?>">
        </div>
        <div class="form-group">
            <label for="harga_produk">Harga Produk</label>
            <input type="text" class="form-control" name="harga_produk" id="harga_produk" value="<?= $produk["harga_produk"];?>">
        </div>
        <div class="form-group">
            <label for="foto_produk">Gambar</label>
            <input type="file" class="form-control-file" name="foto_produk" id="foto_produk" value="<?= $produk["foto_produk"];?>">
        </div>
        <button type="submit" class="btn btn-primary" name="save">Ubah Data</button>
        </form>
		<?php
		
		if (isset($_POST['save'])){
			$namafoto=$_FILES['foto_produk']['foto_produk'];
			$lokasifoto=$_FILES['foto_produk']['tmp_name'];
			if (!empty($lokasifoto)){
				move_uploaded_file($lokasifoto, "../img/$namafoto");

				$koneksi->query("UPDATE tbl_produk SET nama_produk ='$_POST[nama_produk]', harga_produk ='$_POST[harga_produk]', foto_produk = '$_POST[foto_produk]' WHERE id_produk = '$_GET[id]'");
			} else {
				$koneksi->query("UPDATE tbl_produk SET nama_produk ='$_POST[nama_produk]', harga_produk ='$_POST[harga_produk]' WHERE id_produk = '$_GET[id]'");
			}
			echo "<script>alert('Data Produk Telah Diubah')</script>";
            echo "<script>location='produk.php?halaman=produk.php';</script>";
		}
		?>
		</div>
		<!-- /.container-fluid -->


	</div>
	<!-- /.content-wrapper -->

	</div>
	<!-- /#wrapper -->

	<!-- Scroll to Top Button-->
	<a class="scroll-to-top rounded" href="#page-top">
	<i class="fas fa-angle-up"></i>
	</a>

	<!-- Logout Modal-->
	<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
			<button class="close" type="button" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">×</span>
			</button>
		</div>
		<div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
		<div class="modal-footer">
			<button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
			<a class="btn btn-primary" href="login.html">Logout</a>
		</div>
		</div>
	</div>
	</div>

	<!-- Bootstrap core JavaScript-->
	<script src="vendor/jquery/jquery.min.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

	<!-- Core plugin JavaScript-->
	<script src="vendor/jquery-easing/jquery.easing.min.js"></script>

	<!-- Custom scripts for all pages-->
	<script src="js/sb-admin.min.js"></script>

</body>

</html>
