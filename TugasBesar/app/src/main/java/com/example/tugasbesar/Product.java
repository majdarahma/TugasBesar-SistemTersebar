package com.example.tugasbesar;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;

public class Product {

    @SerializedName("allProd")
    private ArrayList<ProductModel> AllProd;

    public ArrayList<ProductModel> getAllProd() {
        return AllProd;
    }
}
