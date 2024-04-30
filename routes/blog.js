const express = require("express");
const router = express.Router();

// import controller
const {createComment} = require("../controllers/commentController");
const {createPost, getAllPosts} = require("../controllers/postController");

// create mapping
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);


// export
module.exports = router;