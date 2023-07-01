const express = require("express");
const app = express();
app.use(express.json());
require("./modules/connection")
require("dotenv").config();
const port = 3636 || process.env.PORT;
hostName = "localhost";
const cors = require("cors");

const memesRouter = require("./router/memesRouter.js");
const userRouter = require("./router/userRouter.js");


app.use(
  cors({
    origin: "*",
  })
)

app.use('/memes', memesRouter);
app.use("/user", userRouter);

app.listen(port, hostName, err => {
  if(err) {
    console.log(err)
  } else {
    console.log(`Server is running at http://${hostName}:${port}`)
  }
})


