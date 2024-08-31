require("dotenv").config({path:"./.env"});
const cors = require('cors');
const userRoute = require("./routes/userRoute.js");
const storeRoute = require("./routes/storeRoute.js");
const express = require('express');
const app = express();
app.use(
  cors({
    origin: [3000],
  }
  )
)
app.use("/api/bank", userRoute);

// for store routes
// express will provide req, res objects
app.use("/api/store", storeRoute);













// app.use("/api/store", async (req, res) => {
//   // get id from parameter/url
//   const { id } = req.params; // destructuring
//   // const id = req.params.id; // old way

//   // provide id to getStoreObjById function to get store object
//   const store = getStoreObjById(id);

//   // send the response to the frontend
//   res.status(200).json({ data: store });
// });









const backendport = process.env.BACK_END_PORT;
app.listen(process.env.BACK_END_PORT,function(){
  console.log("listen port no"+" "+backendport);
});
