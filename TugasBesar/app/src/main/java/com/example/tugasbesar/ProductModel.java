package com.example.tugasbesar;

import android.util.Log;

public abstract class ProductModel {
    private String namaprod, hargaprod, fotoprod;

    public ProductModel(String namaprod, String hargaprod, String fotoprod) {
        this.namaprod = namaprod;
        this.hargaprod = hargaprod;
        this.fotoprod = fotoprod;
    }

    public String getNamaprod() {
        return namaprod;
    }

    public String getHargaprod() {
        return hargaprod;
    }

    public String getFotoprod() {
        return fotoprod;
    }
    Log.d
}
