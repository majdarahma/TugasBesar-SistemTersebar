package com.example.tugasbesar;

import com.google.gson.annotations.SerializedName;

public class Users {
    @SerializedName("username")
    private String username;

    @SerializedName("password")
    private String password;

    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }
}
