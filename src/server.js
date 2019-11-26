import express from "express";
import connectDB from "./config/connectDB";
import ContactModel from "./models/contact.model";
const app = express();
// connect to mongoose
connectDB();

app.get("/test-data", (req, res) => {
  try {
      let item = {
          
      }
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000, () => {
  console.log("On port 3000");
});
