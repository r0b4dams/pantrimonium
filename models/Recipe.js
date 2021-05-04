// const { Model, DataTypes } = require('sequelize');
// // const sequelize = require('../config/connection');

// class Recipe extends Model {}

<<<<<<< HEAD
// Recipe.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     // Store a reference of the `id` of the `recipe list` the recipe is going in 
//     recipe_list_id: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'recipe_list',
//           key: 'id',
//         },
//       },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'recipe'
//   }
// );
=======
Recipe.init(
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Store a reference of the `id` of the `recipe list` the recipe is going in 
    recipe_list_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'recipe_list',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe'
  }
);
>>>>>>> develop

// module.exports = Recipe;
