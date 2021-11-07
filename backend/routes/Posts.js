const express = require("express");
const router = express.Router();
const { Posts, Likes, Unlikes, Capas, Categorias } = require("../models");
const path = require("path")


var xFrameOptions = require('x-frame-options');
var middleware = xFrameOptions(headerValue = 'Deny')
const { validateToken } = require("../middlewares/AuthMiddleware");
// const Capas = require("../models/Capas.js");


router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll({include: [Likes, Unlikes, Capas, Categorias]});

  res.json(listOfPosts);
});

router.get("/categorias/:id", async (req, res) => {
  const id = req.params.id;
  const listaCategorias = await Posts.findAll({where: {CategoriaId: id}, include: [Likes, Unlikes, Capas, Categorias]})
  res.json(listaCategorias);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});

router.get("/byUserId/:id", async (req, res) => {
  const id = req.params.id;
  const listOfPosts = await Posts.findAll({where: {UserId: id}, include: [Likes, Unlikes]})
  res.json(listOfPosts);
});

router.post("/", validateToken, async (req, res) => {
  const post = req.body;
  post.username = req.user.username;
  post.UserId = req.user.id;
  await Posts.create(post);
  res.json(post);
});

//---------------------->Edição do título do post
router.put("/titulo", validateToken, async (req, res) => {
  const {novoTitulo, id} = req.body;

  await Posts.update({titulo: novoTitulo},{where: {id: id}})
  res.json(novoTitulo);
});

//---------------------->Edição da descrição do post
router.put("/descricao", validateToken, async (req, res) => {
  const {novaDescricao, id} = req.body;

  await Posts.update({descricao: novaDescricao},{where: {id: id}})
  res.json(novaDescricao);
});


//--------------------->Exclusão
router.delete("/:postId", validateToken, async(req, res)=>{
  const postId = req.params.postId;

  await Posts.destroy({
    where: {
      id: postId,
    },
  });
  res.json("Post excluído com sucesso!");
})

//-----------------------------------------//
module.exports = router;