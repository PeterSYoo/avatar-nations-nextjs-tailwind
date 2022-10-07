import mongoose from "mongoose";

const airNomadsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String },
  town: { type: String },
  video: { type: String },
  quote: { type: String },
});

export default mongoose.models.AirNomads ||
  mongoose.model("AirNomads", airNomadsSchema);
