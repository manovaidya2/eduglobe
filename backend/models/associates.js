// models/associates.js
import mongoose from "mongoose";

const associatesSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    type: String,
    website: String,
    logo: String,
    displayOrder: {
      type: Number,
      default: 0,  // Lower number = appears first
    },
    details: [
      {
        heading: String,
        description: String,
      },
    ],
    documents: [
      {
        name: String,
        file: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Associates", associatesSchema);