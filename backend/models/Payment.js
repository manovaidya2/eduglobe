import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    reference_id: String,
    order_id: String,
    session_id: String,
    payment_id: String,

    amount: Number,
    currency: { type: String, default: "INR" },

    name: String,
    email: String,
    phone: String,
    country: String,
    state: String,
    pincode: String,

    status: { type: String, default: "CREATED" },
    payment_status: String,
    mop_type: String,
    bank_ref_num: String,
    utr: String,
    payment_completed_at: String,

    order_response: Object,
    webhook_payload: Object,
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);