import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./connectDb.js";
import router from "./routers/routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});
