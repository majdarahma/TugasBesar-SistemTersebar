<?php

require '../koneksi.php';

$result = mysqli_query($koneksi, "SELECT * FROM tbl_produk")

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

		<div class="container-fluid">

		<h1>Data Pembelian</h1>
		<hr>
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Id User</th>
      <th scope="col">Nama Pelanggan</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
  <?php $i = 1;?>
  <?php $ambil = $koneksi->query("SELECT * FROM tbl_user"); ?>
    <?php while($perproduk = $ambil->fetch_assoc()){ ?>
    <tr>
      <th scope="row"><?= $i;?></th>
      <td><?= $perproduk['id'];?></td>
      <td><?= $perproduk['username'];?></td>
      <td>
      <a href="hapususer.php?id=<?= $perproduk['id'];?>" class="btn btn-danger">Delete</a>
      </td>
    </tr>
  </tbody>
  <?php $i++; ?>
  <?php } ?>
</table>



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

	<!-- Bootstrap core JavaScript-->
	<script src="vendor/jquery/jquery.min.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

	<!-- Core plugin JavaScript-->
	<script src="vendor/jquery-easing/jquery.easing.min.js"></script>

	<!-- Custom scripts for all pages-->
	<script src="js/sb-admin.min.js"></script>

</body>

</html>
