import mongoose from "mongoose";

const associatesSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    type: String,
    website: String,
    logo: String,
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