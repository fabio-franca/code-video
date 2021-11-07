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

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Reescreve e popula a tabela com { force: true }');
//   Posts.sync().then(() => {
//     const posts = [
//       { titulo: 'Rick Astley - Never Gonna Give You Up', descricao: 'Bom Demais!' , video: 'https://www.youtube.com/embed/DLzxrzFCyOs', capa: "../images/rick2.jpg" },
//       { titulo: 'Foo Fighters - The Pretender', descricao: 'Showwwww' , video: 'https://www.youtube.com/embed/SBjQ9tuuTJQ', capa: "../images/foofighters.jpg" },
//       { titulo: 'Guardians of The Galaxy - Mix',  descricao: 'The Best movie soundtracks' , video: "https://www.youtube.com/embed/l9_-2oG4Cc0", capa: "../images/guardiansofgalaxy.jpg" },
//       { titulo: 'Final Fantasy VII - Soundtrack',  descricao: "Nice game soundtracks" , video: "https://www.youtube.com/embed/ITWOHpJQUWY", capa: "../images/FFVII.jpg" },
//       { titulo: "Michael Jackson - Beat It", descricao: "Awesome", video: "https://www.youtube.com/embed/oRdxUFDoQe0", capa: "../images/mj.jpg"}
//     ]
//     for(let i=0; i<posts.length; i++){
//       Posts.create(posts[i]);
//     }  
//   });
// });
