const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");


dotenv.config();

//mongoose setup
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true},()=>{
  console.log("MongoDB is connected");
})

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common")); 

//Routes
app.use("/api/users",userRoute);
app.use("/api/auth", authRoute);

app.get("/",(req,res)=>{
  res.send("Homepage");
})

app.listen(3001,()=>{
  console.log("Backend is functional");
})