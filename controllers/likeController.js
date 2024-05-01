const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
    try{
        const {post, user} = req.body;
        const like = new Like({
            post, user
        });
        const savedLike = await like.save();
        
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new: true})
                            .populate("likes")
                            .exec();

        res.json({
            post: updatedPost,
        })
    }
    catch (error){
        res.status(500).json({
            error: "Error while creating like"
        })
    }
}

exports.unlikePost = async (req, res) => {
    try {
        const {post, like} = req.body;
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like}); // can be done with only like id also, jsut for example
        
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true});
        res.json({
            post: updatedPost
        })
    } catch(err) {
        res.status(500).json({
            error: "error while unliking the post"
        })
    }
}