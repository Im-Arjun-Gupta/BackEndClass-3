const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try {
        const {title, body} = req.body;
        const post = new Post({
            title, body
        })
        const savedPost = await post.save();

        res.json({
            post: savedPost,
        })
    } catch(err) {
        return res.status(500).json({
            error: "error while creating the post"
        });
    }
}

exports.getAllPosts = async (req, res) => {
    try {
        const post = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            post: post
        })
    } catch(err) {
        return res.status(500).json({
            error: "error while getting the post"
        })
    }
}