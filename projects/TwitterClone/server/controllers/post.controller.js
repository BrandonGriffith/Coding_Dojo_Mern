const Post = require('../models/post.model');


module.exports.findAllPosts = (_req,res)=>{
    Post.find()
        .populate("User_id")
        .then(allPosts=>{
            res.json({results: allPosts})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.getOnePost = (req,res)=>{
    Post.findOne({_id: req.params.id })
        .then(foundPost =>{
            res.json({results: foundPost})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.createPost = (req,res)=>{
    Post.create(req.body)
        .then(newlyCreatedPost =>{
            res.json({results: newlyCreatedPost})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.updateOnePost = (req,res)=>{
    Post.findOneAndUpdate(
        {_id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPost=>{
            res.json({results: updatedPost})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.deleteOnePost = (req,res)=>{
    Post.deleteOne({_id: req.params.id })
        .then(deletedPost =>{
            res.json({results: deletedPost})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.findRanPost = (_req,res)=>{
    Post.aggregate([{ $sample: { size: 1 } }])
        .then(allPosts=>{
            res.json({results: allPosts})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.findPostsForUser = (req,res)=>{
    Post.find({User_id: req.params.id})
        .populate("User_id")
        .then(allPosts=>{
            res.json({results: allPosts})
        })
        .catch(err => res.json({ message: "error", error: err }));
}
