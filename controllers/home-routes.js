const router = require('express').Router();
const { User, Post, Comments } = require('../models');

//GET homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: ['id', 'title', 'created_at', 'post_text'
            ],
            include: [
                {
                    model: Comments,
                    attributes: ['comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });
       // res.status(200).json(postData);

        const posts = postData.map((post) =>
            post.get({ plain: true })
      );
        res.render('homepage', {
            posts,
          //  loggedIn: req.session.loggedIn,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
});

module.exports = router;
