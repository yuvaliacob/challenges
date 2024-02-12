import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const productSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  currency: { type: String },
});

const Product = models.Product || model("Product", productSchema);

export default Product;
