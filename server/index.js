const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const mongoose = require("mongoose");


dotenv.config();
const app = express();
const PORT = process.env.PORT || 6001;
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");

//mongoose
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
},()=>{
  console.log("Connected to MongoDB")
})

//middlewares
app.use(helmet());
app.use(express.json());
app.use(morgan("common"));


//Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.get("/",(req,res)=>{
  res.send("Homepage");
})

app.listen(PORT, ()=> {
  console.log(`Server running on ${PORT}`);
});