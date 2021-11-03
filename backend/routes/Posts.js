const express = require("express");
const router = express.Router();
const { Posts, Likes, Unlikes } = require("../models");

var xFrameOptions = require('x-frame-options');
var middleware = xFrameOptions(headerValue = 'Deny')
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll({ include: [Likes, Unlikes],});

  res.json(listOfPosts);
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