import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const productSchema = new Schema({
  title: { type: String },
  text: { type: String },
  rating: { type: Number },
});

const Review = models.Review || model("Review", productSchema);

export default Review;
