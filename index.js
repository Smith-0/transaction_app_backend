import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { addTxn, getAllTxn } from "./controllers/transactionController.js";

const port = 5000;

dotenv.config();
const app = express();
const router = express.Router();
app.use(cors());

app.use(express.json());
app.use("/addTxn", router.post("/", addTxn));
app.use("/getAllTxn", router.get("/", getAllTxn));

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    })
  )
  .catch((error) => console.error(error));
