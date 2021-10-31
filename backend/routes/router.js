let express = require('express');
const { username, password } = require('../config/env.js');
let router = express.Router();
const { sign } = require("jsonwebtoken")

 
//------------------------------->
//          ROTA CLIENTE
//------------------------------->
const clientes = require('../controllers/controller.js');
router.post('/api/cliente', clientes.createCliente);
router.get('/api/cliente/:id', clientes.getCliente);
router.get('/api/clientes', clientes.clientes);
router.put('/api/cliente', clientes.updateCliente);
router.delete('/api/cliente/:id', clientes.deleteCliente);

//------------------------------->
//          ROTA POSTS
//------------------------------->
const posts = require('../controllers/controller.js');
router.post('/api/posts', posts.createPosts);
router.get('/api/post/:id', posts.getPost);
router.get('/api/posts', posts.posts);
router.put('/api/post', posts.updatePost);
router.delete('/api/post/:id', posts.deletePost);



//------------------------------->
//          ROTA USERS
//------------------------------->
const users = require("../controllers/controller.js");
const { validateToken } = require('../middlewares/AuthMiddleware.js');

router.post("/api/users", users.createUser); 
router.post("/api/login", users.login);

//------------------------------->
//          ROTA COMMENTS
//------------------------------->
const comments = require("../controllers/controller.js")

router.post('/api/comments', validateToken, comments.createComment);
router.get('/api/comments/:postId', comments.getComment);

//Registro
// router.post("/registro", (req,res)=>{
//     db.query("INSERT INTO USERS (username,password) VALUES (?,?)",[username,password],
//             (err,result)=>{
//                 console.log(err)
//             })
// })

/*------------------------------------------------------------------------------*/
module.exports = router;