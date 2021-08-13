const { Post } = require('../models');

const postData = [
    {
        title: 'UFO Sightings in New Mexico',
        post_content: 'Guys! It was insane. So my family and I are in New Mexico for a trip and I was driving at night picking up some dinner, and I saw a UFO flying about 50 feet in front of me! It was round, had bright lights all around the sides, moved way faster than any plane or drone and then just disappeared into thin air!',
        user_id: 1,
    },
    {
        title: 'Do aliens have pets?',
        post_content: 'Hello! So I had a bizzare encounter this weekend. I was camping in the forest, found a super nice place to pitch my tent, isolated, just me and my dog. Well at about 1 in the morning Loki (my dog) starts freaking out like he has to pee or something so I let him out and I stayed in the tent and some 20 minutes go by, hes still not in the tent so I decide to look for him. Well Loki was standing at the edge of the trees just starting at this dark, tall figure, almost like he was waiting to be pet. They just sat there until I called his name and the thing vanished and Loki returned, happy as could be. So it made me think, do you think aliens have pets? That would be pretty cool!',
        user_id: 2,
    },
    {
        title: 'Alien Expedition',
        post_content: 'Alien sighting in Durango, Colorado. I am wanting to get a group together so we can go down there and check it out! Comment if youre interseted!',
        user_id: 3,
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;

