// const express = require('express');
// const app = express();
// var xFrameOptions = require('x-frame-options')

// var bodyParser = require('body-parser');
 
// global.__basedir = __dirname;
 
// const db = require('./config/db.config.js');

// const Cliente = db.Cliente;
// const Posts = db.Posts;
// const Comments = db.Comments;

// let router = require('./routes/router.js');

// const cors = require('cors')
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200
// }
// app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use(express.static('resources'));
// app.use('/', router);
// app.use(xFrameOptions())

// //Criação do servidor
// const server = app.listen(3001, function () {
 
//     let host = server.address().address
//     let port = server.address().port
   
//     console.log("O App está executando em http://%s:%s", host, port); 
//   })
  
//   db.sequelize.sync({force: true}).then(() => {
//     console.log('Reescreve e popula a tabela com { force: true }');
//     Cliente.sync().then(() => {
//       const clientes = [
//         { nome: 'Pedro', email: 'pedro@email.com' ,idade: 23 },
//         { nome: 'Sara',  email: 'sara@email.com' , idade: 31 },
//         { nome: 'Emilly',  email: 'emilly@email.com' , idade: 18 },
//         { nome: 'Ricardo',  email: 'ricardo@email.com' , idade: 42 },
//       ]
      
//       for(let i=0; i<clientes.length; i++){
//         Cliente.create(clientes[i]);
//       }
//     })
//   })

//   db.sequelize.sync({force: true}).then(() => {
//     console.log('Reescreve e popula a tabela com { force: true }');
//     Posts.sync().then(() => {
//       const posts = [
//         { titulo: 'Rick Astley - Never Gonna Give You Up', descricao: 'Bom Demais!' , video: 'https://www.youtube.com/embed/DLzxrzFCyOs', capa: "../images/rick2.jpg" },
//         { titulo: 'Foo Fighters - The Pretender', descricao: 'Showwwww' , video: 'https://www.youtube.com/embed/SBjQ9tuuTJQ', capa: "../images/foofighters.jpg" },
//         { titulo: 'Guardians of The Galaxy - Mix',  descricao: 'The Best movie soundtracks' , video: "https://www.youtube.com/embed/l9_-2oG4Cc0", capa: "../images/guardiansofgalaxy.jpg" },
//         { titulo: 'Final Fantasy VII - Soundtrack',  descricao: "Nice game soundtracks" , video: "https://www.youtube.com/embed/ITWOHpJQUWY", capa: "../images/FFVII.jpg" },
//         { titulo: "Michael Jackson - Beat It", descricao: "Awesome", video: "https://www.youtube.com/embed/oRdxUFDoQe0", capa: "../images/mj.jpg"}
//       ]
//       for(let i=0; i<posts.length; i++){
//         Posts.create(posts[i]);
//       }
      
//     })

//   });
//---------------------------------------------------------------> NOVO
const express = require("express");
const app = express();
var bodyParser = require('body-parser');
var xFrameOptions = require('x-frame-options')
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(xFrameOptions())
app.use(bodyParser.json());
app.use(express.static('resources'));

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
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
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
