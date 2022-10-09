import mongoose from "mongoose";

const earthKingdomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String },
  town: { type: String },
  video: { type: String },
  quote: { type: String },
});

export default mongoose.models.EarthKingdom ||
  mongoose.model("EarthKingdom", earthKingdomSchema);
