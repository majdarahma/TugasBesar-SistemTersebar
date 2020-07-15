package com.example.tugasbesar;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class ProductAdapter extends RecyclerView.Adapter<ProductAdapter.ProductViewHolder> {

    List<ProductModel> productModelList;


    public ProductAdapter(List<ProductModel> productModelList){
        this.productModelList = productModelList;
    }

    @NonNull
    @Override
    public ProductViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int viewType) {

        View view = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.layout_product,viewGroup,false);
        return new ProductViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ProductViewHolder holder, int position) {

        ProductModel productModel = productModelList.get(position);
        holder.namaProd.setText(productModel.getNamaprod());
        holder.hargaProd.setText(productModel.getHargaprod());

    }

    @Override
    public int getItemCount() {
        return productModelList.size();
    }

    public class ProductViewHolder extends RecyclerView.ViewHolder {

        TextView namaProd, hargaProd;

        public ProductViewHolder(@NonNull View itemView) {
            super(itemView);

            namaProd = itemView.findViewById(R.id.namaProd);
            hargaProd = itemView.findViewById(R.id.hargaProd);
        }
    }
}
