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

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

//-----------------------------------------//
module.exports = router;