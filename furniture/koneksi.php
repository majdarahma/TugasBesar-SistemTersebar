<?php

$koneksi = mysqli_connect("localhost","root","","dbfurniture");

if(mysqli_connect_errno()){
    echo "Koneski Database Gagal !" . mysqli_connect_errno();
}

function registrasi($data) {
    global $koneksi;

    $username = strtolower(stripslashes($data["username"]));
    $password = mysqli_real_escape_string($koneksi, $data["password"]);
    $password2 = mysqli_real_escape_string($koneksi, $data["password2"]);

    $result = mysqli_query($koneksi, "SELECT username FROM tbl_user WHERE username = '$username'");
    
    if( mysqli_fetch_assoc($result) ){
        echo "<script> 
        alert('Username Sudah Terdaftar!'); 
        </script>";
        return false;
    }

    if( $password !== $password2){
        echo "<script> 
        alert('Konfirmasi Password Tidak Sesuai!'); 
        </script>";

        return false;
    }

    mysqli_query($koneksi, "INSERT INTO tbl_user VALUES('', '$username', '$password')");

    return mysqli_affected_rows($koneksi);
}

function query($query){
    global $koneksi;
    $result = mysqli_query($koneksi, $query);
    $rows = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    return $rows;
}

function hapus($id){
    global $koneksi;
    mysqli_query($koneksi, "DELETE FROM tbl_produk WHERE id_produk=$id");
    mysqli_query($koneksi, "DELETE FROM tbl_user WHERE id=$id");
    return mysqli_affected_rows($koneksi);
}

// function ubah($data){
//     global $koneksi;

//     $id = $data["id"];
//     $nama_produk = $data["nama_produk"];
//     $harga_produk = $data["harga_produk"];
//     $foto_produk = $data["foto_produk"];

//     $query = "UPDATE tbl_produk SET nama_produk ='$nama_produk', harga_produk ='$harga_produk', foto_produk = '$foto_produk' WHERE id = $id";

//     mysqli_query($koneksi, $query);

//     return mysqli_affected_rows($koneksi);
// }

?>