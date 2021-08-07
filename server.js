//Required packages
//const path = require('path');
const express= require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');

//Create app object and the PORT
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Set up express to grab data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//sync sequelize model to database and then turn on and listen to server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});
