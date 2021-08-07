const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Creating blog model 
class Post extends Model {}

//Creating colums for blog
Post.init(
    {
     //Id is a number that autoincrements, has a primary key and no null
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
    //Title is a string with no null values
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    //The text of the post is a string with no null values
        post_text: {
        //.TEXT allows user to type more than 255 characters
            type: DataTypes.TEXT,
            allowNull: false,
        },
    //User id is a number with no null values that refrences the user table id
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);

module.exports = Post;
