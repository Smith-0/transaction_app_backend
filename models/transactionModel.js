import mongoose from "mongoose";

const txnSchema = mongoose.Schema(
  {
    type: { type: String, required: true },
    amount: { type: String, required: true },
    desc: { type: String, required: true },
    runningBalance: { type: String },
  },
  {
    timestamps: true,
  }
);

const Txn = mongoose.model("Txn", txnSchema);

export default Txn;
