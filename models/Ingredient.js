const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

class Ingredient extends Model {}

Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    unit_of_measurement: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Store a reference of the `id` of the `recipe` the item is going in 
    recipe_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'recipe',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredient'
  }
);

module.exports = Ingredient;
