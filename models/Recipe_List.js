// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Recipe_List extends Model {}

<<<<<<< HEAD
// Recipe_List.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     // Store a reference of the `id` of the `section` the item is going in 
//     section_id: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'user',
//           key: 'id',
//         },
//       },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'recipe_list'
//   }
// );
=======
Recipe_List.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Store a reference of the `id` of the `section` the item is going in 
    section_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe_list'
  }
);
>>>>>>> develop

// module.exports = Recipe_List;
