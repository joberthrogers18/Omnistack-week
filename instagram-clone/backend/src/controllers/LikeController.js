const Post = require("../models/Post");

module.exports = {
    async like(req, res) {

        const post = await Post.findOne({_id: req.params.id});
        post.likes += 1;

        await post.save();

        req.io.emit('like', post);

        res.json(post);
    }
}