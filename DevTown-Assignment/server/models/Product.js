import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

 title:String,
 description:String,
 price:String,
 discountPercentage:String,
 rating:String,
 stock:String,
 brand:String,
 category:String,
 thumbnail:String,
 images:[],

});

const Product = mongoose.model(
  "DevTown-Product",
  ProductSchema
);
export default Product;
