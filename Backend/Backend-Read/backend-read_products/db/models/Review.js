import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const reviewSchema = new Schema({
  title: { type: String },
  text: { type: String },
  rating: { type: Number },
});

const Review = models.Review || model("Review", reviewSchema);

export default Review;
