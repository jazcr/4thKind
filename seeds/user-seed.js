const { User } = require('../models');

const userData = [
    {
        username: 'alienHunter21',
        email: 'aliens@aliens.com',
        password: 'password',
    },
    {
        username: 'Joe',
        email: 'joe@alienhunter.com',
        password: 'password2',
    },
    {
        username: 'believer25',
        email: 'ibelieve@yahoo.com',
        password: 'password3',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
