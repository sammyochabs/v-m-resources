import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

export default mongoose.models.AdminModel ||
  mongoose.model("AdminModel", AdminSchema);
