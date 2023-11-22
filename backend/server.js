const express = require("express");
const app = express();
app.use(express.json());
require("./modules/connection")
require("dotenv").config();
const port = process.env.PORT || 8080;
hostName = "0.0.0.0";
const cors = require("cors");

const memesRouter = require("./router/memesRouter.js");
const userRouter = require("./router/userRouter.js");

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000/";
// when testing in development, change to "*"

app.use(
  cors({
    origin: FRONTEND_URL,
  })
)

app.use('/meme', memesRouter);
app.use("/user", userRouter);

app.listen(port, hostName, err => {
  if(err) {
    console.log(err)
  } else {
    console.log(`Server is running at http://${hostName}:${port}`)
  }
})


