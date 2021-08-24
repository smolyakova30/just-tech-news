// import model and dataTypes from the sequelize module
const { Model, DataTypes } = require('sequelize');
// importing the the connection file
const sequelize = require('../config/connection');

// crreate Vote Model
class Vote extends Model {}

//initiailizing the vote model with fields/columns
Vote.init(
  {
    //define the titile column w=ith a given data type and validations
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id'
      }
    }
  },

  // define the optionfor the database
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vote'
  }
);

//make it visible for all apllication 
module.exports = Vote;
