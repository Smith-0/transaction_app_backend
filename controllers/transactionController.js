import Txn from "../models/transactionModel.js";

export const addTxn = async (req, res) => {
  try {
    const newTxn = new Txn(req.body);

    await newTxn.save();
    res.status(200).json(newTxn);
  } catch (error) {
    console.log(error);
  }
};

export const getAllTxn = async (req, res) => {
  try {
    const allTxn = await Txn.find({}).sort({ createdAt: -1 });
    res.status(200).json(allTxn);
  } catch (error) {
    console.log(error);
  }
};
