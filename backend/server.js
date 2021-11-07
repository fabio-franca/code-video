const express = require("express");
const app = express();
var bodyParser = require('body-parser');
var xFrameOptions = require('x-frame-options')
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(xFrameOptions())
app.use(bodyParser.json());
app.use(express.static('./public/images'));

const db = require("./models");

// Routers
const postRouter = require("./routes/Posts");
app.use("/api/posts", postRouter);
const commentsRouter = require("./routes/Comments");
app.use("/api/comments", commentsRouter);
const usersRouter = require("./routes/Users");
app.use("/api", usersRouter);
const likesRouter = require("./routes/Likes");
app.use("/api/likes", likesRouter);
const unlikesRouter = require("./routes/Unlikes");
app.use("/api/unlikes", unlikesRouter);


db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3001, () => {
    console.log("Server running on port 3001");
  });
}).catch((err)=>{
  console.log(err);
});


