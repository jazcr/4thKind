const { Comment } = require('../models');

const commentsData = [{
        user_id: 1,
        post_id: 1,
        comment_text: 'Man I saw a UFO in New Mexico not too long ago!',
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: 'Nice picture! Def looks like a UFO to me. Lets go find that thing!',
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: 'Dang that sounds scary! Still hoping aliens are nice',
    }
];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;