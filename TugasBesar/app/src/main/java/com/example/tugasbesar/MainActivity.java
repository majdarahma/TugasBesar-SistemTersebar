package com.example.tugasbesar;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {

    private EditText name,password;
    public static ApiInterface apiInterface;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        name = (EditText) findViewById(R.id.name);
        password = (EditText) findViewById(R.id.password);

        apiInterface = ApiClient.getApiClient().create(ApiInterface.class);

    }

    public void login(View view){
        String name = this.name.getText().toString();
        String password = this.password.getText().toString();

        if(TextUtils.isEmpty(name)){
            Toast.makeText(this, "Isi kolom Nama", Toast.LENGTH_SHORT).show();
        }else if(TextUtils.isEmpty(password)){
            Toast.makeText(this, "Isi kolom Password", Toast.LENGTH_SHORT).show();
        }else{
            SignIn();
        }

    }

    private void SignIn() {

        Call<Users> call = apiInterface.performLogin(name.getText().toString(),
                password.getText().toString());
        call.enqueue(new Callback<Users>() {
            @Override
            public void onResponse(Call<Users> call, Response<Users> response) {
                Toast.makeText(MainActivity.this, "Hi",
                        Toast.LENGTH_SHORT).show();

                Intent intent = new Intent(MainActivity.this, ProductActivity.class);
                startActivity(intent);
            }

            @Override
            public void onFailure(Call<Users> call, Throwable t) {
                Toast.makeText(MainActivity.this, "Login gagal!",
                        Toast.LENGTH_SHORT).show();
            }
        });

    }

}
