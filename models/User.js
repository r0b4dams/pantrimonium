const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../config/connection'); // db connection
const bcrypt = require("bcrypt");                  // password hashing

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    hooks: {
        // hash a new user's password on creation
        beforeCreate: async (newUser) => {
          newUser.password = await bcrypt.hash(newUser.password, 10);
        }
    },
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;
