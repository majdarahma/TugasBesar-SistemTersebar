package com.example.tugasbesar;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Query;

public interface ApiInterface {

    @GET("Login")
    Call<Users> performLogin(
            @Query("username") String username,
            @Query("password") String password
    );

    @GET("produk")
    Call<Product> performViewProd();
}
