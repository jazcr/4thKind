const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


//Creating blog model 
class Comments extends Model {}


//Creating comments model
Comments.init(
    //Creating the columns for the blog
    {
        id: {
    //Id is a number that autoincrements, has a primary key and no null
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
    //text of the comments is a string and make sure length is at least 5 letters
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
    //user id is a number with no null values that refrences the user tables id
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
//Blog id is a number with no null values and refrences the blog table's id
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
    });

module.exports = Comments;

