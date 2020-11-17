import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
  },
});

export default mongoose.models.BlogPostModel ||
  mongoose.model("BlogPostModel", blogPostSchema);
