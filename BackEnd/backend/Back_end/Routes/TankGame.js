const express = require('express');

const router = express.Router();
const Post = require('../models/TankGame');

//Get Back All the posts
router.get('/', async (req,res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:error});
    }
});

//Submits Posts
router.post('/',(req,res)=>{
    const post = new Post({
        ParentId: req.body.ParentId,
        Player1: req.body.Player1,
        Player2: req.body.Player2,

    });

    post.save()
    .then(data =>{
        res.json(data);
        console.log("Got...");
    })
    .catch(err =>{
        res.json({message: err});
        console.log("Got...Error :"+err);

    });
});

//Specific Post
router.get('/:postId', async (req,res) =>{
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }

});

//Delete Specific post
router.delete('/:postId', async (req,res) =>{
    try{
    const remove = await Post.remove({_id : req.params.postId})
    res.json(remove);
    }catch(err){
        res.json({message: err});
    }
});

//Update a post
router.put('/:postId', async (req,res) =>{
    try{
    const updatePost = await Post.updateOne({_id: req.params.postId},
        {$set:{
            Player1: req.body.Player1,
            Player2: req.body.Player2
        }});
        res.json(updatePost);
        console.log("Got...PUT");
    }catch(err){
        res.json({message: err});
        console.log("Got...Error :"+err);
    }
})


module.exports = router;
