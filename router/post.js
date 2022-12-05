const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  addPost,
  getOnePost,
  delPost,
  updatepost,
  updatelike,
} = require("../controllers/post.js");

router.get("/getall", getAllPosts); // get all posts

router.get("/:categorie", getOnePost); // get all post by categorie

router.post("/add", addPost); // add post

router.delete("/:id", delPost); // delete post

router.put("/:id", updatepost); // update post

router.put("/:id", updatelike); // update like of post

module.exports = router;
