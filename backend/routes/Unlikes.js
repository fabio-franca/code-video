const express = require("express");
const router = express.Router();
const { Unlikes } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/unlike", validateToken, async (req, res) => {
  const { PostId } = req.body;
  const UserId = req.user.id;

  const found = await Unlikes.findOne({
    where: { PostId: PostId, UserId: UserId },
  });
  if (!found) {
    await Unlikes.create({ PostId: PostId, UserId: UserId });
    res.json({ unliked: true });
  } else {
    await Unlikes.destroy({
      where: { PostId: PostId, UserId: UserId },
    });
    res.json({ unliked: false });
  }
});

module.exports = router;